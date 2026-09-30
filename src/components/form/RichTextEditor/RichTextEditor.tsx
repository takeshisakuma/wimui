import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { useEditor, useEditorState, EditorContent, type Editor } from "@tiptap/react";
import { createDocument } from "@tiptap/core";
import { StarterKit } from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extensions";
// 名前付きで読む: CJS の出力では default の相互運用が崩れ、Image.extend が関数でなくなる（tgz の smoke --full で実測）
import { Image } from "@tiptap/extension-image";
import { FieldTemplate } from "../FieldTemplate";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Icon } from "../../media/Icon/Icon";
// ツールバーの字形は出荷セットから採る。以前はこのファイル内で 9 個を内製しており、
// **stroke-width 2.5** でファミリーから外れていた（T78）。
import {
  BoldIcon,
  ItalicIcon,
  UnderlineIcon,
  StrikethroughIcon,
  ListIcon,
  ListOrderedIcon,
  LinkIcon,
  UnlinkIcon,
  EraserIcon,
  ImageIcon,
} from "@/icon";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "../../overlay/Dialog/Dialog";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import { isSafeImageUrl, isSafeLinkUrl } from "./safeUrl";
import { createMarkdownExtensions, markdownToHtml } from "./markdown";
import styles from "./rich-text-editor.module.scss";

// ---- Types ----

export type RichTextEditorToolbarItem =
  | "bold"
  | "italic"
  | "underline"
  | "strikethrough"
  | "h1"
  | "h2"
  | "h3"
  | "ul"
  | "ol"
  | "link"
  | "unlink"
  | "image"
  | "removeFormat"
  | "separator";

const DEFAULT_TOOLBAR: RichTextEditorToolbarItem[] = [
  "bold",
  "italic",
  "underline",
  "strikethrough",
  "separator",
  "h1",
  "h2",
  "h3",
  "separator",
  "ul",
  "ol",
  "separator",
  "link",
  "unlink",
  "separator",
  "removeFormat",
];

export type RichTextEditorLabels = {
  bold?: string;
  italic?: string;
  underline?: string;
  strikethrough?: string;
  h1?: string;
  h2?: string;
  h3?: string;
  ul?: string;
  ol?: string;
  link?: string;
  unlink?: string;
  removeFormat?: string;
  toolbar?: string;
  linkPrompt?: string;
  linkApply?: string;
  linkCancel?: string;
  /** Error shown in the link dialog when the URL is not allowed (only http, https, mailto and relative URLs are). */
  linkInvalid?: string;
  /** Title of the image button and the image dialog. */
  image?: string;
  /** Label of the image URL field. */
  imageUrl?: string;
  /** Label of the alternative text field. */
  imageAlt?: string;
  /** Hint under the alternative text field. */
  imageAltHint?: string;
  /** Label of the button that picks a file (shown only with onImageUpload). */
  imageUpload?: string;
  /** Error shown when onImageUpload rejects or returns a URL that is not allowed. */
  imageUploadFailed?: string;
  /** Error shown in the image dialog when the URL is not allowed (only http, https and relative URLs are). */
  imageInvalid?: string;
};

export type RichTextEditorProps = {
  /** Content (controlled), in the format given by `format`. An empty editor is reported as "". */
  value?: string;
  /** Initial content (uncontrolled), in the format given by `format` */
  defaultValue?: string;
  /**
   * Callback when the content changes, in the format given by `format`. The content only contains what the editor's schema
   * allows, whichever format is used.
   */
  onChange?: (value: string) => void;
  /**
   * Format of `value`, `defaultValue` and `onChange`. With `"markdown"`, the editor reads and writes Markdown and has no underline
   * (Markdown has no syntax for it): the underline button is hidden and underlined input keeps only its text. Read when the
   * editor is created; changing it later does not convert the content.
   */
  format?: "html" | "markdown";
  /** Placeholder shown when the editor is empty */
  placeholder?: string;
  /** Whether the editor is disabled */
  disabled?: boolean;
  /** Semantic intent of the field (e.g. error state) */
  intent?: FieldIntent;
  /** Visual style variant of the field */
  variant?: FieldVariant;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Fixed width of the field (width token, CSS value, or number in px) */
  width?: FieldWidth | string | number;
  /** Minimum height of the editing area */
  minHeight?: number | string;
  /** Field label */
  label?: React.ReactNode;
  /** Error message */
  error?: string;
  /** Whether to show the required indicator */
  required?: boolean;
  /** Layout direction of label and field */
  layout?: "vertical" | "horizontal";
  /** Additional class names */
  className?: string;
  /** Unique ID for the component */
  id?: string;
  /** Toolbar items to display, in order */
  toolbar?: RichTextEditorToolbarItem[];
  /** Labels for internationalization */
  labels?: RichTextEditorLabels;
  /** Accessible label when no visible label is provided */
  "aria-label"?: string;
  /** ID of the element that labels the editor */
  "aria-labelledby"?: string;
  /**
   * Uploads an image file and resolves to its URL (http, https or relative). When given, the image dialog offers a file picker
   * and image files pasted or dropped into the editor are uploaded and inserted. The editor stores only the URL it gets back.
   */
  onImageUpload?: (file: File) => Promise<string>;
};

type FormatKey = Exclude<RichTextEditorToolbarItem, "separator" | "link" | "unlink" | "removeFormat">;

// ---- Editor extensions ----
// 無害化はスキーマが担う（T278）: 入力（初期値・制御値・貼り付け）は ProseMirror のスキーマに通して組み立て直すので、
// ここで許可していないタグ・属性（script / style / iframe / on* など）は出力に残らない。スキーマの外に残る危険は
// リンクの href と画像の src だけなので、それぞれ許可リストに絞る（safeUrl.ts）。
const SafeImage = Image.extend({
  parseHTML() {
    return [
      {
        tag: "img[src]",
        getAttrs: (element) => (isSafeImageUrl((element as HTMLElement).getAttribute("src")) ? null : false),
      },
    ];
  },
});

/**
 * format="markdown" では下線をスキーマに持たせない。Markdown に下線の記法は無く、`<u>` で書くと生の HTML を描かない表示
 * （wimui の Markdown を含む）でタグが文字のまま出るため（実測）。スキーマに無ければ、貼り付けた `<u>`・Mod-U・入力の
 * `<u>` / `++`（Tiptap の下線の記法。`C++ and C++` が壊れる）もすべて本文だけになる。
 */
const createExtensions = (placeholder: string, format: RichTextEditorFormat, initialMarkdown: string | undefined) => [
  StarterKit.configure({
    heading: { levels: [1, 2, 3] },
    // ツールバーに無い構造は持たない（出力に出せるものを、利用者がツールバーで作れるものに揃える）
    blockquote: false,
    code: false,
    codeBlock: false,
    horizontalRule: false,
    // 見出し・リストで終わる文書の末尾に空の <p></p> を足す拡張。出力に余計な段落が混ざるので外す
    trailingNode: false,
    ...(format === "markdown" ? { underline: false as const } : {}),
    link: {
      openOnClick: false,
      autolink: false,
      linkOnPaste: false,
      isAllowedUri: (url) => isSafeLinkUrl(url),
      // 出力は <a href> だけにする（以前の自前実装と同じ）。target を付けないので rel も要らない
      HTMLAttributes: { target: null, rel: null },
    },
  }),
  // 画像は src が許可リストに合うものだけスキーマに入れる（合わない img は読み込み時に落ちる）。
  // ブロックとして置く（段落の中に埋めない）── 文の途中の画像は、読み上げでも折り返しでも扱いにくい。
  SafeImage.configure({ inline: false, allowBase64: false }),
  Placeholder.configure({ placeholder }),
  // Markdown の拡張は format="markdown" のときだけ載せる。@tiptap/markdown は記法（下線の `++` など）を marked の
  // モジュール共有のインスタンスに足すため、HTML の形式のエディタが載せると同じページの Markdown の形式のエディタで
  // `C++ and C++` が下線として読まれる（単体テストで再現）。
  ...(format === "markdown" ? createMarkdownExtensions(initialMarkdown) : []),
];

type RichTextEditorFormat = NonNullable<RichTextEditorProps["format"]>;

/** 空の文書は "" として返す（Tiptap の getHTML は空でも "<p></p>" を返す）。 */
const toValue = (editor: Editor, format: RichTextEditorFormat) => {
  if (editor.isEmpty) return "";
  return format === "markdown" ? editor.getMarkdown() : editor.getHTML();
};

/** 値をエディタに渡せる形にする（Markdown もスキーマの規則を通すため HTML を経る。markdown.ts）。 */
const toContent = (editor: Editor, value: string, format: RichTextEditorFormat) =>
  format === "markdown" ? markdownToHtml(editor, value) : value;

// ---- Toolbar button component ----

type ToolbarButtonProps = {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  tabIndex: number;
  onFocus: () => void;
  buttonRef: (el: HTMLButtonElement | null) => void;
  children: React.ReactNode;
};

const ToolbarButton = React.memo(
  ({ onClick, active, disabled, title, tabIndex, onFocus, buttonRef, children }: ToolbarButtonProps) => (
    <button
      ref={buttonRef}
      type="button"
      className={classNames(styles.toolbarBtn, active && styles.active)}
      onClick={onClick}
      onFocus={onFocus}
      disabled={disabled}
      title={title}
      aria-label={title}
      aria-pressed={active}
      tabIndex={tabIndex}
    >
      {children}
    </button>
  ),
);

ToolbarButton.displayName = "ToolbarButton";

// ---- Main component ----

/**
 * WYSIWYG editor component for rich text input, built on Tiptap (import from `wimui/form/rich-text-editor`).
 */
export const RichTextEditor = ({
  value,
  defaultValue = "",
  onChange,
  placeholder,
  disabled,
  intent = "default",
  variant = "outline",
  fullWidth = false,
  width,
  minHeight = 200, /* Exception: Structural Logic — 本文が何行分見えるかという編集領域の寸法。間隔の刻みに寄せられない */
  label,
  error,
  required,
  layout,
  className,
  id: customId,
  toolbar: toolbarProp = DEFAULT_TOOLBAR,
  labels = {},
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
  onImageUpload,
  format = "html",
}: RichTextEditorProps) => {
  const { t } = useWimTranslation("components");
  const {
    bold = t("a11y.rte_bold"),
    italic = t("a11y.rte_italic"),
    underline = t("a11y.rte_underline"),
    strikethrough = t("a11y.rte_strikethrough"),
    h1 = t("a11y.rte_h1"),
    h2 = t("a11y.rte_h2"),
    h3 = t("a11y.rte_h3"),
    ul = t("a11y.rte_ul"),
    ol = t("a11y.rte_ol"),
    link = t("a11y.rte_link"),
    unlink = t("a11y.rte_unlink"),
    removeFormat = t("a11y.rte_remove_format"),
    toolbar: toolbarAriaLabel = t("a11y.rte_toolbar"),
    linkPrompt = t("a11y.rte_link_prompt"),
    linkApply = t("a11y.rte_link_apply"),
    linkCancel = t("a11y.rte_link_cancel"),
    linkInvalid = t("a11y.rte_link_invalid"),
    image = t("a11y.rte_image"),
    imageUrl: imageUrlLabel = t("a11y.rte_image_url"),
    imageAlt: imageAltLabel = t("a11y.rte_image_alt"),
    imageAltHint = t("a11y.rte_image_alt_hint"),
    imageUpload = t("a11y.rte_image_upload"),
    imageUploadFailed = t("a11y.rte_image_upload_failed"),
    imageInvalid = t("a11y.rte_image_invalid"),
  } = labels;

  const generatedId = React.useId();
  const id = customId || `wim-rte-${generatedId}`;
  const errorId = error ? `${id}-error` : undefined;
  const labelId = label ? `${id}-label` : undefined;

  const isDisabled = !!disabled;
  const currentIntent = error ? "danger" : intent;

  const isSemanticWidth =
    typeof width === "string" && ["xs", "sm", "md", "lg", "xl"].includes(width);
  const effectiveHasCustomWidth = width !== undefined && !isSemanticWidth && !fullWidth;
  const effectiveSemanticWidth = isSemanticWidth && !fullWidth ? width : undefined;

  const widthClassName = effectiveSemanticWidth
    ? styles[`width${effectiveSemanticWidth.charAt(0).toUpperCase()}${effectiveSemanticWidth.slice(1)}`]
    : undefined;

  // 最後に onChange へ渡した値。制御値がこれと同じなら文書を置き換えない（キャレットを保つ）
  const lastValueRef = React.useRef<string>(value ?? defaultValue);
  const onChangeRef = React.useRef(onChange);
  React.useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  // 編集領域の属性（ProseMirror が描く contenteditable の要素に載る）
  const contentAttributes = React.useMemo(() => {
    const attrs: Record<string, string> = {
      id,
      class: styles.content,
      role: "textbox",
      "aria-multiline": "true",
      style: `min-height: ${typeof minHeight === "number" ? `${minHeight}px` : minHeight}`,
      tabindex: isDisabled ? "-1" : "0",
    };
    // label / aria-labelledby / aria-label いずれも無い利用で名無しにならないよう内蔵ラベル（axe: aria-input-field-name）
    const resolvedAriaLabel = ariaLabel ?? (label || ariaLabelledby ? undefined : t("a11y.rte_editor"));
    const resolvedLabelledby = ariaLabelledby ?? (label ? labelId : undefined);
    if (resolvedAriaLabel) attrs["aria-label"] = resolvedAriaLabel;
    if (resolvedLabelledby) attrs["aria-labelledby"] = resolvedLabelledby;
    if (currentIntent === "danger") attrs["aria-invalid"] = "true";
    if (errorId) attrs["aria-describedby"] = errorId;
    if (required) attrs["aria-required"] = "true";
    if (isDisabled) attrs["aria-disabled"] = "true";
    if (placeholder) attrs["aria-placeholder"] = placeholder;
    return attrs;
  }, [id, minHeight, isDisabled, ariaLabel, label, ariaLabelledby, labelId, currentIntent, errorId, required, placeholder, t]);

  // ---- 画像の貼り付け・ドロップ（onImageUpload があるときだけ） ----
  const onImageUploadRef = React.useRef(onImageUpload);
  React.useEffect(() => {
    onImageUploadRef.current = onImageUpload;
  }, [onImageUpload]);
  const [uploadError, setUploadError] = React.useState<string | undefined>(undefined);
  const imageUploadFailedRef = React.useRef(imageUploadFailed);
  React.useEffect(() => {
    imageUploadFailedRef.current = imageUploadFailed;
  }, [imageUploadFailed]);

  /** ファイルを上げて、返ってきた URL を pos（無ければ選択位置）に画像として置く。 */
  const uploadAndInsert = React.useCallback(async (ed: Editor, files: File[], pos?: number) => {
    const upload = onImageUploadRef.current;
    if (!upload) return;
    setUploadError(undefined);
    for (const file of files) {
      try {
        const src = await upload(file);
        if (!isSafeImageUrl(src)) throw new Error("URL not allowed");
        if (ed.isDestroyed) return;
        const chain = ed.chain().focus();
        (pos === undefined ? chain : chain.setTextSelection(pos)).setImage({ src, alt: "" }).run();
      } catch {
        setUploadError(imageUploadFailedRef.current);
      }
    }
  }, []);

  const imageFilesOf = (list: FileList | null | undefined) =>
    Array.from(list ?? []).filter((file) => file.type.startsWith("image/"));

  const editorPropsRef = React.useRef<{ ed: Editor | null }>({ ed: null });
  const handlePaste = React.useCallback(
    (_view: unknown, event: ClipboardEvent) => {
      const files = imageFilesOf(event.clipboardData?.files);
      const ed = editorPropsRef.current.ed;
      if (!onImageUploadRef.current || files.length === 0 || !ed) return false;
      event.preventDefault();
      void uploadAndInsert(ed, files);
      return true;
    },
    [uploadAndInsert],
  );
  const handleDrop = React.useCallback(
    (view: { posAtCoords: (c: { left: number; top: number }) => { pos: number } | null }, event: DragEvent, _slice: unknown, moved: boolean) => {
      const files = imageFilesOf(event.dataTransfer?.files);
      const ed = editorPropsRef.current.ed;
      if (moved || !onImageUploadRef.current || files.length === 0 || !ed) return false;
      event.preventDefault();
      const at = view.posAtCoords({ left: event.clientX, top: event.clientY });
      void uploadAndInsert(ed, files, at?.pos);
      return true;
    },
    [uploadAndInsert],
  );

  // 編集領域に渡す props を 1 か所にまとめる（作成時と setOptions の両方で同じものを渡す）
  const editorProps = React.useMemo(
    () => ({ attributes: contentAttributes, handlePaste, handleDrop }),
    [contentAttributes, handlePaste, handleDrop],
  );

  // 作成時の形式を使い続ける（作成後に変わっても読み直さない。props の説明に書いた契約）
  const [initialFormat] = React.useState(format);
  const initialContent = value ?? defaultValue;

  const editor = useEditor({
    extensions: createExtensions(placeholder ?? "", initialFormat, initialFormat === "markdown" ? initialContent : undefined),
    // Markdown の初期値は拡張が作成時に読む（markdown.ts の InitialMarkdown）
    content: initialFormat === "markdown" ? "" : initialContent,
    editable: !isDisabled,
    // SSR では描かず、マウント後に作る（Tiptap の推奨。ハイドレーションの不一致を避ける）
    immediatelyRender: false,
    editorProps,
    onUpdate: ({ editor: ed }) => {
      const next = toValue(ed, initialFormat);
      if (next === lastValueRef.current) return;
      lastValueRef.current = next;
      onChangeRef.current?.(next);
    },
  });

  // 属性・編集可否は作り直さずに反映する
  React.useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    editor.setOptions({ editorProps });
  }, [editor, editorProps]);

  React.useEffect(() => {
    editorPropsRef.current.ed = editor;
  }, [editor]);

  React.useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    editor.setEditable(!isDisabled, false);
  }, [editor, isDisabled]);

  // placeholder の変更は拡張の設定を書き換え、空の遷移を流して装飾を描き直す（エディタは作り直さない）
  React.useEffect(() => {
    if (!editor || editor.isDestroyed) return;
    const extension = editor.extensionManager.extensions.find((ext) => ext.name === "placeholder");
    if (!extension || extension.options.placeholder === (placeholder ?? "")) return;
    extension.options.placeholder = placeholder ?? "";
    editor.view.dispatch(editor.state.tr);
  }, [editor, placeholder]);

  // Sync controlled value → document (skip if same to preserve the caret)
  React.useEffect(() => {
    if (!editor || editor.isDestroyed || value === undefined) return;
    if (value === lastValueRef.current || value === toValue(editor, initialFormat)) return;
    lastValueRef.current = value;
    // 文字列が違っても文書として同じなら置き換えない。利用者が onChange の値を整形して返す（末尾の改行など）と、
    // 文書全体の置き換えになってキャレットが末尾へ飛ぶため（単体テストで再現）。
    const next = createDocument(toContent(editor, value, initialFormat), editor.schema);
    if (next.eq(editor.state.doc)) return;
    editor.commands.setContent(next.toJSON(), { emitUpdate: false });
  }, [editor, value, initialFormat]);

  const activeFormats = useEditorState({
    editor,
    selector: ({ editor: ed }): Record<FormatKey, boolean> => ({
      bold: !!ed?.isActive("bold"),
      italic: !!ed?.isActive("italic"),
      underline: !!ed?.schema.marks.underline && ed.isActive("underline"),
      strikethrough: !!ed?.isActive("strike"),
      h1: !!ed?.isActive("heading", { level: 1 }),
      h2: !!ed?.isActive("heading", { level: 2 }),
      h3: !!ed?.isActive("heading", { level: 3 }),
      ul: !!ed?.isActive("bulletList"),
      ol: !!ed?.isActive("orderedList"),
      image: !!ed?.isActive("image"),
    }),
  });

  const run = React.useCallback(
    (command: (ed: Editor) => void) => {
      if (isDisabled || !editor) return;
      command(editor);
    },
    [editor, isDisabled],
  );

  /**
   * 書式の解除。選択があればその範囲、無ければ文書全体（以前の自前実装と同じ）。
   * リンクは残す（execCommand の removeFormat と同じ扱い）。
   */
  const handleRemoveFormat = React.useCallback(() => {
    run((ed) => {
      const { from, to, empty } = ed.state.selection;
      const chain = ed.chain().focus();
      if (empty) chain.selectAll();
      chain.unsetBold().unsetItalic().unsetStrike().clearNodes();
      // format="markdown" では下線がスキーマに無い（createExtensions）
      if (ed.schema.marks.underline) chain.unsetUnderline();
      if (empty) chain.setTextSelection({ from, to });
      chain.run();
    });
  }, [run]);

  // ---- リンクダイアログ（window.prompt はブラウザモーダルで UX/a11y 難のため置換） ----
  const [linkDialogOpen, setLinkDialogOpen] = React.useState(false);
  const [linkUrl, setLinkUrl] = React.useState("https://");
  const [linkError, setLinkError] = React.useState<string | undefined>(undefined);

  const handleInsertLink = React.useCallback(() => {
    if (isDisabled || !editor) return;
    const { from, to } = editor.state.selection;
    const selectedText = editor.state.doc.textBetween(from, to, " ");
    const currentHref = editor.getAttributes("link").href as string | undefined;
    setLinkUrl(currentHref ?? (selectedText.startsWith("http") ? selectedText : "https://"));
    setLinkError(undefined);
    setLinkDialogOpen(true);
  }, [editor, isDisabled]);

  const handleApplyLink = React.useCallback(() => {
    const url = linkUrl.trim();
    if (!url) {
      setLinkDialogOpen(false);
      return;
    }
    if (!isSafeLinkUrl(url)) {
      setLinkError(linkInvalid);
      return;
    }
    setLinkDialogOpen(false);
    run((ed) => {
      // エディタの選択はダイアログを開いている間も ProseMirror が保持している
      if (ed.state.selection.empty && !ed.isActive("link")) {
        ed.chain().focus().insertContent({ type: "text", text: url, marks: [{ type: "link", attrs: { href: url } }] }).run();
      } else {
        ed.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
      }
    });
  }, [linkUrl, linkInvalid, run]);

  // ---- 画像ダイアログ ----
  const [imageDialogOpen, setImageDialogOpen] = React.useState(false);
  const [imageSrc, setImageSrc] = React.useState("");
  const [imageAltText, setImageAltText] = React.useState("");
  const [imageError, setImageError] = React.useState<string | undefined>(undefined);
  const [imageUploading, setImageUploading] = React.useState(false);
  const fileInputRef = React.useRef<HTMLInputElement>(null);
  const imageAltHintId = `${id}-image-alt-hint`;

  const handleOpenImage = React.useCallback(() => {
    if (isDisabled || !editor) return;
    const current = editor.isActive("image") ? editor.getAttributes("image") : {};
    setImageSrc((current.src as string | undefined) ?? "");
    setImageAltText((current.alt as string | undefined) ?? "");
    setImageError(undefined);
    setImageDialogOpen(true);
  }, [editor, isDisabled]);

  const handleApplyImage = React.useCallback(() => {
    const src = imageSrc.trim();
    if (!src) {
      setImageDialogOpen(false);
      return;
    }
    if (!isSafeImageUrl(src)) {
      setImageError(imageInvalid);
      return;
    }
    setImageDialogOpen(false);
    run((ed) => ed.chain().focus().setImage({ src, alt: imageAltText.trim() }).run());
  }, [imageSrc, imageAltText, imageInvalid, run]);

  const handlePickFile = React.useCallback(
    async (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      e.target.value = "";
      if (!file || !onImageUpload) return;
      setImageUploading(true);
      setImageError(undefined);
      try {
        const src = await onImageUpload(file);
        if (!isSafeImageUrl(src)) throw new Error("URL not allowed");
        setImageSrc(src);
      } catch {
        setImageError(imageUploadFailed);
      } finally {
        setImageUploading(false);
      }
    },
    [onImageUpload, imageUploadFailed],
  );

  // ---- ツールバー: roving tabindex（Tab で 1 回だけ止まり、矢印キーで項目を移る。WAI-ARIA toolbar） ----
  const buttonRefs = React.useRef<(HTMLButtonElement | null)[]>([]);
  const [focusIndex, setFocusIndex] = React.useState(0);
  // format="markdown" では下線のボタンを出さない（下線がスキーマに無い）。外した後に端や連続で残る区切りも除く
  const toolbar = React.useMemo(() => {
    const items = initialFormat === "markdown" ? toolbarProp.filter((item) => item !== "underline") : toolbarProp;
    return items.filter(
      (item, i) => item !== "separator" || (i > 0 && i < items.length - 1 && items[i - 1] !== "separator"),
    );
  }, [toolbarProp, initialFormat]);
  const buttonItems = React.useMemo(() => toolbar.filter((item) => item !== "separator"), [toolbar]);
  // ツールバーの並び（区切りを含む）の位置 → ボタンだけを数えた番号
  const buttonIndexAt = React.useMemo(
    () =>
      toolbar.map((item, index) =>
        item === "separator" ? -1 : toolbar.slice(0, index).filter((prev) => prev !== "separator").length,
      ),
    [toolbar],
  );

  const handleToolbarKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const count = buttonItems.length;
      if (count === 0) return;
      let next: number | undefined;
      if (e.key === "ArrowRight") next = (focusIndex + 1) % count;
      else if (e.key === "ArrowLeft") next = (focusIndex - 1 + count) % count;
      else if (e.key === "Home") next = 0;
      else if (e.key === "End") next = count - 1;
      if (next === undefined) return;
      e.preventDefault();
      setFocusIndex(next);
      buttonRefs.current[next]?.focus();
    },
    [buttonItems.length, focusIndex],
  );

  // Prevent the editor from losing its selection when a toolbar button is pressed with the mouse
  const handleToolbarMouseDown = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  const commands: Record<Exclude<RichTextEditorToolbarItem, "separator">, { title: string; icon: React.ReactNode; onClick: () => void }> = {
    bold: { title: bold, icon: <Icon component={BoldIcon} size="sm" />, onClick: () => run((ed) => ed.chain().focus().toggleBold().run()) },
    italic: { title: italic, icon: <Icon component={ItalicIcon} size="sm" />, onClick: () => run((ed) => ed.chain().focus().toggleItalic().run()) },
    underline: { title: underline, icon: <Icon component={UnderlineIcon} size="sm" />, onClick: () => run((ed) => ed.chain().focus().toggleUnderline().run()) },
    strikethrough: { title: strikethrough, icon: <Icon component={StrikethroughIcon} size="sm" />, onClick: () => run((ed) => ed.chain().focus().toggleStrike().run()) },
    h1: { title: h1, icon: <span aria-hidden="true">H1</span>, onClick: () => run((ed) => ed.chain().focus().toggleHeading({ level: 1 }).run()) },
    h2: { title: h2, icon: <span aria-hidden="true">H2</span>, onClick: () => run((ed) => ed.chain().focus().toggleHeading({ level: 2 }).run()) },
    h3: { title: h3, icon: <span aria-hidden="true">H3</span>, onClick: () => run((ed) => ed.chain().focus().toggleHeading({ level: 3 }).run()) },
    ul: { title: ul, icon: <Icon component={ListIcon} size="sm" />, onClick: () => run((ed) => ed.chain().focus().toggleBulletList().run()) },
    ol: { title: ol, icon: <Icon component={ListOrderedIcon} size="sm" />, onClick: () => run((ed) => ed.chain().focus().toggleOrderedList().run()) },
    link: { title: link, icon: <Icon component={LinkIcon} size="sm" />, onClick: handleInsertLink },
    unlink: { title: unlink, icon: <Icon component={UnlinkIcon} size="sm" />, onClick: () => run((ed) => ed.chain().focus().extendMarkRange("link").unsetLink().run()) },
    image: { title: image, icon: <Icon component={ImageIcon} size="sm" />, onClick: handleOpenImage },
    removeFormat: { title: removeFormat, icon: <Icon component={EraserIcon} size="sm" />, onClick: handleRemoveFormat },
  };

  return (
    <FieldTemplate
      label={label}
      error={error}
      required={required}
      layout={layout}
      labelId={labelId}
      errorId={errorId}
      className={className}
    >
      <div
        className={classNames("wim-rich-text-editor",
          styles.root,
          styles[currentIntent],
          isDisabled && styles.disabled,
          styles[variant],
          fullWidth && styles.fullWidth,
          effectiveHasCustomWidth && styles.hasCustomWidth,
          widthClassName,
        )}
        style={
          effectiveHasCustomWidth
            ? ({
                "--wim-input-width":
                  typeof width === "number" ? `${width}px` : width,
              } as React.CSSProperties)
            : undefined
        }
      >
        {/* Toolbar */}
        <div
          className={styles.toolbar}
          role="toolbar"
          aria-label={toolbarAriaLabel}
          aria-controls={id}
          onMouseDown={handleToolbarMouseDown}
          onKeyDown={handleToolbarKeyDown}
        >
          {toolbar.map((item, index) => {
            if (item === "separator") {
              return <span key={`sep-${index}`} className={styles.toolbarSep} aria-hidden="true" />;
            }
            const current = buttonIndexAt[index];
            const command = commands[item];
            const active = item === "link" || item === "unlink" || item === "removeFormat"
              ? undefined
              : activeFormats?.[item] ?? false;
            return (
              <ToolbarButton
                key={`${item}-${index}`}
                buttonRef={(el) => {
                  buttonRefs.current[current] = el;
                }}
                tabIndex={current === Math.min(focusIndex, buttonItems.length - 1) ? 0 : -1}
                onFocus={() => setFocusIndex(current)}
                disabled={isDisabled}
                active={active}
                title={command.title}
                onClick={command.onClick}
              >
                {command.icon}
              </ToolbarButton>
            );
          })}
        </div>

        {/* Editor */}
        <EditorContent editor={editor} className={styles.contentHost} />

        {uploadError && (
          <p role="alert" className={styles.uploadError}>
            {uploadError}
          </p>
        )}

        {/* リンク挿入ダイアログ（window.prompt はブラウザモーダルで UX/a11y 難のため不使用） */}
        <Dialog open={linkDialogOpen} onOpenChange={setLinkDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{link}</DialogTitle>
            </DialogHeader>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleApplyLink();
              }}
            >
              <Input
                label={linkPrompt}
                type="url"
                value={linkUrl}
                error={linkError}
                onChange={(e) => {
                  setLinkUrl(e.target.value);
                  setLinkError(undefined);
                }}
                fullWidth
              />
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost" type="button">
                    {linkCancel}
                  </Button>
                </DialogClose>
                <Button variant="solid" type="submit">
                  {linkApply}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>

        {/* 画像ダイアログ。URL を受ける（アップロード先は持たず、onImageUpload が返した URL を入れる） */}
        <Dialog open={imageDialogOpen} onOpenChange={setImageDialogOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{image}</DialogTitle>
            </DialogHeader>
            <form
              className={styles.imageForm}
              onSubmit={(e) => {
                e.preventDefault();
                handleApplyImage();
              }}
            >
              <Input
                label={imageUrlLabel}
                type="url"
                value={imageSrc}
                error={imageError}
                onChange={(e) => {
                  setImageSrc(e.target.value);
                  setImageError(undefined);
                }}
                fullWidth
              />
              {onImageUpload && (
                <>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handlePickFile}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    loading={imageUploading}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    {imageUpload}
                  </Button>
                </>
              )}
              <div>
                <Input
                  label={imageAltLabel}
                  aria-describedby={imageAltHintId}
                  value={imageAltText}
                  onChange={(e) => setImageAltText(e.target.value)}
                  fullWidth
                />
                <p id={imageAltHintId} className={styles.imageHint}>
                  {imageAltHint}
                </p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button variant="ghost" type="button">
                    {linkCancel}
                  </Button>
                </DialogClose>
                <Button variant="solid" type="submit" disabled={imageUploading}>
                  {linkApply}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </FieldTemplate>
  );
};

RichTextEditor.displayName = "RichTextEditor";
