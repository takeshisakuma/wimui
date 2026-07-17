/**
 * RichTextEditor のコマンド層（純 DOM、React 非依存）。
 *
 * 旧実装は非推奨の document.execCommand / queryCommandState に依存していた
 * （IMPROVEMENTS.md T15）。ここでは Selection / Range API で同等のコマンドを
 * 実装する。部分選択時の書式分割は Range.extractContents() の仕様
 * （partial containment chain を複製してフラグメント側に書式ラッパーを残す）
 * を利用する。
 *
 * 注意: execCommand と違いブラウザのネイティブ undo スタックには乗らないため、
 * undo/redo はコンポーネント側の履歴（beforeinput の historyUndo/Redo 横取り）
 * で一元管理する。
 */

export type InlineFormat = "bold" | "italic" | "underline" | "strikethrough";
export type BlockFormat = "h1" | "h2" | "h3";
export type ListFormat = "ul" | "ol";

/** 各インライン書式とみなすタグ（先頭が新規適用時に使う正規タグ） */
const INLINE_TAGS: Record<InlineFormat, string[]> = {
  bold: ["strong", "b"],
  italic: ["em", "i"],
  underline: ["u"],
  strikethrough: ["s", "strike", "del"],
};

const ALL_INLINE_TAGS = Object.values(INLINE_TAGS).flat();
const BLOCK_TAGS = ["h1", "h2", "h3", "p", "div", "li", "blockquote", "pre"];

// ---- Selection helpers ----

/** root 内に完全に収まっている選択 Range を返す（無ければ null） */
export function getEditorRange(root: HTMLElement): Range | null {
  const selection = root.ownerDocument.defaultView?.getSelection();
  if (!selection || selection.rangeCount === 0) return null;
  const range = selection.getRangeAt(0);
  if (!root.contains(range.commonAncestorContainer)) return null;
  return range;
}

function selectRange(root: HTMLElement, range: Range): void {
  const selection = root.ownerDocument.defaultView?.getSelection();
  if (!selection) return;
  selection.removeAllRanges();
  selection.addRange(range);
}

/** node から root まで祖先をたどって Element の配列を返す（root 自身は含まない） */
function ancestorsWithin(node: Node | null, root: HTMLElement): HTMLElement[] {
  const out: HTMLElement[] = [];
  let cur: Node | null = node;
  while (cur && cur !== root) {
    if (cur instanceof HTMLElement) out.push(cur);
    cur = cur.parentNode;
  }
  return out;
}

/** 選択位置のアクティブ書式（bold / italic / h1 / ul など）を返す */
export function getActiveFormats(root: HTMLElement): Set<string> {
  const active = new Set<string>();
  const range = getEditorRange(root);
  if (!range) return active;

  // 選択が書式要素を外側から包んでいる場合（コマンド適用直後の再選択など）、
  // startContainer の祖先だけでは検出できない → 選択内側の最初のリーフを探る
  let probe: Node = range.startContainer;
  if (!range.collapsed && probe.nodeType === Node.ELEMENT_NODE) {
    const child = probe.childNodes[range.startOffset];
    if (child && range.intersectsNode(child)) {
      probe = child;
      while (probe.firstChild) probe = probe.firstChild;
    }
  }

  const ancestors = ancestorsWithin(probe, root);
  for (const el of ancestors) {
    const tag = el.tagName.toLowerCase();
    for (const [format, tags] of Object.entries(INLINE_TAGS)) {
      if (tags.includes(tag)) active.add(format);
    }
    if (tag === "h1" || tag === "h2" || tag === "h3") active.add(tag);
    if (tag === "a") active.add("link");
    if (tag === "li") {
      const list = el.parentElement?.tagName.toLowerCase();
      if (list === "ul" || list === "ol") active.add(list);
    }
  }
  return active;
}

// ---- Fragment utilities ----

/** el を子ノードで置き換える（アンラップ） */
function unwrapElement(el: HTMLElement): void {
  const parent = el.parentNode;
  if (!parent) return;
  while (el.firstChild) parent.insertBefore(el.firstChild, el);
  parent.removeChild(el);
}

/** scope 以下の指定タグをすべてアンラップする */
function unwrapTags(scope: ParentNode, tags: string[]): void {
  const selector = tags.join(",");
  let el = scope.querySelector<HTMLElement>(selector);
  while (el) {
    unwrapElement(el);
    el = scope.querySelector<HTMLElement>(selector);
  }
}

/** node の「インライン内容」を tag でラップする。ブロック要素は中身だけをラップする */
function wrapInlineContents(node: ParentNode, tag: string, doc: Document): void {
  const blocks = Array.from(node.childNodes).filter(
    (child): child is HTMLElement =>
      child instanceof HTMLElement && BLOCK_TAGS.includes(child.tagName.toLowerCase()),
  );
  if (blocks.length === 0) {
    if (node.childNodes.length === 0) return;
    const wrapper = doc.createElement(tag);
    while (node.firstChild) wrapper.appendChild(node.firstChild);
    node.appendChild(wrapper);
    return;
  }
  // ブロック混在: ブロックは中身を、ブロック間のインラインノードは個別にラップ
  for (const child of Array.from(node.childNodes)) {
    if (child instanceof HTMLElement && BLOCK_TAGS.includes(child.tagName.toLowerCase())) {
      wrapInlineContents(child, tag, doc);
    } else if (
      child.nodeType === Node.TEXT_NODE ||
      child instanceof HTMLElement
    ) {
      if (child.textContent === "") continue;
      const wrapper = doc.createElement(tag);
      child.replaceWith(wrapper);
      wrapper.appendChild(child);
    }
  }
}

/** fragment を range 位置に挿入し、挿入内容全体を選択し直す */
function insertAndSelect(root: HTMLElement, range: Range, fragment: DocumentFragment): void {
  const first = fragment.firstChild;
  const last = fragment.lastChild;
  range.insertNode(fragment);
  if (first && last) {
    const newRange = root.ownerDocument.createRange();
    newRange.setStartBefore(first);
    newRange.setEndAfter(last);
    selectRange(root, newRange);
  }
  root.normalize();
}

// ---- Commands ----

/**
 * インライン書式のトグル。
 * - 選択あり: extractContents で切り出し、アクティブなら該当タグを除去、
 *   非アクティブなら正規タグでラップして挿入し直す
 * - 選択なし（キャレットのみ）: ZWSP 入りの書式要素を挿入してキャレットを
 *   中に置き、以降の入力に書式が乗るようにする
 */
export function toggleInline(root: HTMLElement, format: InlineFormat): void {
  const doc = root.ownerDocument;
  const range = getEditorRange(root);
  if (!range) return;
  const tags = INLINE_TAGS[format];
  const primary = tags[0];
  const isActive = getActiveFormats(root).has(format);

  if (range.collapsed) {
    const el = doc.createElement(primary);
    el.textContent = "​";
    range.insertNode(el);
    const caret = doc.createRange();
    caret.setStart(el.firstChild as Text, 1);
    caret.collapse(true);
    selectRange(root, caret);
    return;
  }

  const fragment = range.extractContents();
  if (isActive) {
    unwrapTags(fragment, tags);
    // 選択が書式要素の内側だった場合、extractContents は要素を分割しない
    // （共通祖先が要素自身のため）→ 祖先を手動で [前半][抽出分][後半] に割る
    const ancestor = ancestorsWithin(range.startContainer, root).find((el) =>
      tags.includes(el.tagName.toLowerCase()),
    );
    if (ancestor) {
      const tailRange = doc.createRange();
      tailRange.setStart(range.startContainer, range.startOffset);
      tailRange.setEnd(ancestor, ancestor.childNodes.length);
      const tail = tailRange.extractContents();

      const after = doc.createRange();
      after.setStartAfter(ancestor);
      after.collapse(true);
      if (tail.textContent !== "") {
        // 後半は祖先と同じ書式で包み直す（内側の部分チェーンは extract が複製済み）
        const tailWrap = ancestor.cloneNode(false) as HTMLElement;
        tailWrap.appendChild(tail);
        after.insertNode(tailWrap);
      }
      insertAndSelect(root, after, fragment);
      if (ancestor.textContent === "") ancestor.remove();
      return;
    }
  } else {
    unwrapTags(fragment, tags); // 二重ラップ防止
    wrapInlineContents(fragment, primary, doc);
  }
  insertAndSelect(root, range, fragment);
}

/** 選択範囲が属するブロック要素（root 直下まで）を列挙する */
function getSelectedBlocks(root: HTMLElement, range: Range): HTMLElement[] {
  const blockOf = (node: Node): HTMLElement | null =>
    ancestorsWithin(node, root).find((el) => BLOCK_TAGS.includes(el.tagName.toLowerCase())) ?? null;

  const startBlock = blockOf(range.startContainer);
  const endBlock = blockOf(range.endContainer);
  if (!startBlock) return endBlock ? [endBlock] : [];
  if (startBlock === endBlock || !endBlock) return [startBlock];

  // startBlock から endBlock まで兄弟をたどる（同階層でない場合は共通祖先直下で比較）
  const blocks: HTMLElement[] = [];
  const walker = root.ownerDocument.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (node) =>
      node instanceof HTMLElement &&
      BLOCK_TAGS.includes(node.tagName.toLowerCase()) &&
      range.intersectsNode(node)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_SKIP,
  });
  let n = walker.nextNode();
  while (n) {
    const el = n as HTMLElement;
    // 入れ子ブロック（li 内の p 等）は外側だけ扱う
    if (!blocks.some((b) => b.contains(el))) blocks.push(el);
    n = walker.nextNode();
  }
  return blocks;
}

/** 要素のタグを付け替える（子・キャレットは維持） */
function renameElement(el: HTMLElement, tag: string): HTMLElement {
  const doc = el.ownerDocument;
  const next = doc.createElement(tag);
  while (el.firstChild) next.appendChild(el.firstChild);
  el.replaceWith(next);
  return next;
}

/**
 * ブロック書式（h1/h2/h3）のトグル。既に同じ見出しなら p に戻す。
 * 選択がブロックに属さない（root 直下の裸テキスト）場合はラップする。
 */
export function setBlock(root: HTMLElement, tag: BlockFormat | "p"): void {
  const doc = root.ownerDocument;
  const range = getEditorRange(root);
  if (!range) return;
  const blocks = getSelectedBlocks(root, range);

  if (blocks.length === 0) {
    // 裸のインライン内容をラップ
    const wrapper = doc.createElement(tag);
    while (root.firstChild) wrapper.appendChild(root.firstChild);
    root.appendChild(wrapper);
    const newRange = doc.createRange();
    newRange.selectNodeContents(wrapper);
    newRange.collapse(false);
    selectRange(root, newRange);
    return;
  }

  for (const block of blocks) {
    const current = block.tagName.toLowerCase();
    if (current === "li") continue; // リスト項目はブロック変換の対象外
    const next = current === tag ? "p" : tag;
    const renamed = renameElement(block, next);
    // キャレットをブロック末尾へ（rename で選択が失われるため）
    if (blocks.length === 1) {
      const newRange = doc.createRange();
      newRange.selectNodeContents(renamed);
      newRange.collapse(false);
      selectRange(root, newRange);
    }
  }
}

/**
 * リストのトグル。
 * - 同種リスト内 → リスト全体を p の並びに展開
 * - 異種リスト内 → リストのタグを付け替え
 * - リスト外 → 選択ブロック（無ければ全内容）を li 化して包む
 */
export function toggleList(root: HTMLElement, listTag: ListFormat): void {
  const doc = root.ownerDocument;
  const range = getEditorRange(root);
  if (!range) return;

  const li = ancestorsWithin(range.startContainer, root).find(
    (el) => el.tagName.toLowerCase() === "li",
  );
  const list = li?.parentElement ?? null;

  if (list && (list.tagName.toLowerCase() === "ul" || list.tagName.toLowerCase() === "ol")) {
    if (list.tagName.toLowerCase() === listTag) {
      // 展開: 各 li を p に
      const parent = list.parentNode;
      if (!parent) return;
      let lastP: HTMLElement | null = null;
      for (const item of Array.from(list.children)) {
        const p = doc.createElement("p");
        while (item.firstChild) p.appendChild(item.firstChild);
        parent.insertBefore(p, list);
        lastP = p;
      }
      list.remove();
      if (lastP) {
        const newRange = doc.createRange();
        newRange.selectNodeContents(lastP);
        newRange.collapse(false);
        selectRange(root, newRange);
      }
    } else {
      renameElement(list, listTag);
    }
    return;
  }

  const blocks = getSelectedBlocks(root, range).filter(
    (b) => b.tagName.toLowerCase() !== "li",
  );
  const newList = doc.createElement(listTag);
  if (blocks.length === 0) {
    const item = doc.createElement("li");
    while (root.firstChild) item.appendChild(root.firstChild);
    newList.appendChild(item);
    root.appendChild(newList);
  } else {
    blocks[0].before(newList);
    for (const block of blocks) {
      const item = doc.createElement("li");
      while (block.firstChild) item.appendChild(block.firstChild);
      block.remove();
      newList.appendChild(item);
    }
  }
  const lastItem = newList.lastElementChild;
  if (lastItem) {
    const newRange = doc.createRange();
    newRange.selectNodeContents(lastItem);
    newRange.collapse(false);
    selectRange(root, newRange);
  }
}

/** 選択範囲をリンク化する。キャレットのみの場合は URL テキストを挿入してリンク化 */
export function createLink(root: HTMLElement, url: string): void {
  const doc = root.ownerDocument;
  const range = getEditorRange(root);
  if (!range) return;

  const anchor = doc.createElement("a");
  anchor.setAttribute("href", url);

  if (range.collapsed) {
    anchor.textContent = url;
    range.insertNode(anchor);
  } else {
    const fragment = range.extractContents();
    unwrapTags(fragment, ["a"]);
    anchor.appendChild(fragment);
    range.insertNode(anchor);
  }
  const newRange = doc.createRange();
  newRange.setStartAfter(anchor);
  newRange.collapse(true);
  selectRange(root, newRange);
  root.normalize();
}

/** 選択位置を含むリンク（または選択範囲内のリンク）を解除する */
export function removeLink(root: HTMLElement): void {
  const range = getEditorRange(root);
  if (!range) return;
  const anchor = ancestorsWithin(range.startContainer, root).find(
    (el) => el.tagName.toLowerCase() === "a",
  );
  if (anchor) {
    unwrapElement(anchor);
    return;
  }
  if (!range.collapsed) {
    const fragment = range.extractContents();
    unwrapTags(fragment, ["a"]);
    insertAndSelect(root, range, fragment);
  }
}

/**
 * 書式を除去する。選択があれば選択範囲のみ、キャレットのみなら editor 全体。
 * execCommand("removeFormat") と同様、リンクは残す。
 */
export function removeAllFormatting(root: HTMLElement): void {
  const range = getEditorRange(root);
  if (range && !range.collapsed) {
    const fragment = range.extractContents();
    unwrapTags(fragment, [...ALL_INLINE_TAGS, "span", "font"]);
    for (const heading of Array.from(fragment.querySelectorAll("h1,h2,h3"))) {
      renameElement(heading as HTMLElement, "p");
    }
    insertAndSelect(root, range, fragment);
    return;
  }
  unwrapTags(root, [...ALL_INLINE_TAGS, "span", "font"]);
  for (const heading of Array.from(root.querySelectorAll("h1,h2,h3"))) {
    renameElement(heading as HTMLElement, "p");
  }
  root.normalize();
}
