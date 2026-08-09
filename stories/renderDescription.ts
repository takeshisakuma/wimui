/**
 * Docgen の props 表に出す説明文を HTML に組み立てる。
 *
 * 以前は `<td>{text}</td>` と素の文字列で入れていたため、JSDoc に書いた
 * バックティックが `<code>` にならず生のまま出て、段落の改行も消えて 1 行に
 * つながっていた（props の説明 2459 件のうち 82 件がバックティックを含む）。
 *
 * `stories/T.tsx` の processText とは別実装にしている。あちらはロケール値を
 * エスケープしない前提で、`<strong>` のような意図的なタグが 15 件書かれており、
 * それが描画されている。こちらの入力はソースの JSDoc で、`Video.tracks` の
 * `<track>` のように「文字として見せたい」山括弧が 17 件ある。先にエスケープ
 * しないとタグとして食われて本文が消えるので、エスケープしてから組み立てる。
 *
 * Markdown の強調（`**`）は解釈しない。書けば生のアスタリスクが表に出るので、
 * `audit-mdx` が props 表に出る説明を検査して落とす。
 */
export const renderDescription = (text: string): string => {
  const escaped = text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

  // フェンス付きコードブロックは先に抜いておく。中の改行を残したいので、
  // 段落と改行を組み立ててから戻す。いま該当するのは `Sidebar.responsive` の
  // 1 件だけで、しかも翻訳があるため描画されないが、翻訳が外れた瞬間に
  // インラインのバックティック変換がフェンスを食い荒らす（実測: コードブロックが
  // `<code>` の断片に割れて本文と混ざった）。
  //
  // 番兵に「空白で挟んだ数字」を使わないこと。`Defaults to 3 items` の ` 3 ` まで
  // 差し戻しの対象になり `undefined` が出る。制御文字も使わない（ソースに生の
  // NUL が残る）。
  const blocks: string[] = [];
  const withoutBlocks = escaped.replace(/```[a-z]*\n([\s\S]*?)```/g, (_m, code: string) => {
    blocks.push(`<pre><code>${code.replace(/\n$/, "")}</code></pre>`);
    return `@@WIM_BLOCK_${blocks.length - 1}@@`;
  });

  const inlined = withoutBlocks
    .replace(/`([^`\n]+)`/g, "<code>$1</code>")
    .replace(/\n\s*\n/g, "<br /><br />")
    .replace(/\n/g, " ");

  return inlined.replace(/@@WIM_BLOCK_(\d+)@@/g, (_m, i: string) => blocks[Number(i)]);
};
