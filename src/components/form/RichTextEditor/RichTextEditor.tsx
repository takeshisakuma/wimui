import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { FieldTemplate } from "../FieldTemplate";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "../../overlay/Dialog/Dialog";
import { FieldIntent, FieldVariant, FieldWidth } from "../../../types/tokens";
import {
  createLink,
  getActiveFormats,
  getEditorRange,
  removeAllFormatting,
  removeLink,
  setBlock,
  toggleInline,
  toggleList,
} from "./commands";
import styles from "./rich-text-editor.module.scss";

// ---- Inline SVG toolbar icons ----

const BoldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M6 4h8a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
    <path d="M6 12h9a4 4 0 0 1 4 4 4 4 0 0 1-4 4H6z" />
  </svg>
);

const ItalicIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <line x1="19" y1="4" x2="10" y2="4" />
    <line x1="14" y1="20" x2="5" y2="20" />
    <line x1="15" y1="4" x2="9" y2="20" />
  </svg>
);

const UnderlineIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3" />
    <line x1="4" y1="21" x2="20" y2="21" />
  </svg>
);

const StrikethroughIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    <line x1="4" y1="12" x2="20" y2="12" />
  </svg>
);

const ListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <line x1="9" y1="6" x2="20" y2="6" />
    <line x1="9" y1="12" x2="20" y2="12" />
    <line x1="9" y1="18" x2="20" y2="18" />
    <circle cx="4" cy="6" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="4" cy="12" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="4" cy="18" r="1.5" fill="currentColor" stroke="none" />
  </svg>
);

const OrderedListIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <line x1="10" y1="6" x2="21" y2="6" />
    <line x1="10" y1="12" x2="21" y2="12" />
    <line x1="10" y1="18" x2="21" y2="18" />
    <text x="1" y="8" fontSize="7" fill="currentColor" stroke="none" fontWeight="bold">1.</text>
    <text x="1" y="14" fontSize="7" fill="currentColor" stroke="none" fontWeight="bold">2.</text>
    <text x="1" y="20" fontSize="7" fill="currentColor" stroke="none" fontWeight="bold">3.</text>
  </svg>
);

const LinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const UnlinkIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18.84 12.25l1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.72" />
    <path d="M5.17 11.75l-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71" />
    <line x1="8" y1="2" x2="8" y2="5" />
    <line x1="2" y1="8" x2="5" y2="8" />
    <line x1="16" y1="19" x2="16" y2="22" />
    <line x1="19" y1="16" x2="22" y2="16" />
  </svg>
);

const EraseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M20 20H7L3 16l10-10 7 7-3.5 3.5" />
    <line x1="6" y1="7" x2="17" y2="18" />
  </svg>
);

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
};

export type RichTextEditorProps = {
  /** HTML content (controlled) */
  value?: string;
  /** Initial HTML content (uncontrolled) */
  defaultValue?: string;
  /** Callback when the content changes */
  onChange?: (value: string) => void;
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
};

// ---- Toolbar button component ----

type ToolbarButtonProps = {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
};

const ToolbarButton = React.memo(({ onClick, active, disabled, title, children }: ToolbarButtonProps) => (
  <button
    type="button"
    className={classNames(styles.toolbarBtn, active && styles.active)}
    onClick={onClick}
    disabled={disabled}
    title={title}
    aria-label={title}
    aria-pressed={active}
    tabIndex={-1}
  >
    {children}
  </button>
));

ToolbarButton.displayName = "ToolbarButton";

// ---- Main component ----

/**
 * WYSIWYG editor component for rich text input.
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
  minHeight = 200,
  label,
  error,
  required,
  layout,
  className,
  id: customId,
  toolbar = DEFAULT_TOOLBAR,
  labels = {},
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
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
  } = labels;

  const editorRef = React.useRef<HTMLDivElement>(null);
  const isComposingRef = React.useRef(false);
  const lastValueRef = React.useRef<string>(value ?? defaultValue);
  const [activeFormats, setActiveFormats] = React.useState<Set<string>>(new Set());

  const generatedId = React.useId();
  const id = customId || `wim-rte-${generatedId}`;
  const errorId = error ? `${id}-error` : undefined;
  const labelId = label ? `${id}-label` : undefined;

  const isDisabled = disabled;
  const currentIntent = error ? "danger" : intent;

  const isSemanticWidth =
    typeof width === "string" && ["xs", "sm", "md", "lg", "xl"].includes(width);
  const effectiveHasCustomWidth = width !== undefined && !isSemanticWidth && !fullWidth;
  const effectiveSemanticWidth = isSemanticWidth && !fullWidth ? width : undefined;

  const widthClassName = effectiveSemanticWidth 
    ? styles[`width${effectiveSemanticWidth.charAt(0).toUpperCase()}${effectiveSemanticWidth.slice(1)}`]
    : undefined;

  const initialContentRef = React.useRef(value !== undefined ? value : defaultValue);

  const updateActiveFormats = React.useCallback(() => {
    if (!editorRef.current) return;
    setActiveFormats(getActiveFormats(editorRef.current));
  }, []);

  // ---- Undo/Redo 履歴 ----
  // execCommand と違い手動 DOM 変更はネイティブ undo スタックに乗らないため、
  // 履歴を内部で一元管理する。入力はデバウンスで、コマンドは実行前に記録し、
  // Ctrl+Z / Ctrl+Y と beforeinput の historyUndo / historyRedo を横取りする。
  // stack と index を別 ref に分け、更新は常に「新しい配列/値の再代入」だけにする
  // （react-hooks/immutability が ref 由来のエイリアス変更を誤検知するため）
  const historyStackRef = React.useRef<string[]>([]);
  const historyIndexRef = React.useRef(-1);
  const historyTimerRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const HISTORY_LIMIT = 100;

  const pushHistory = React.useCallback((html: string) => {
    const stack = historyStackRef.current;
    const index = historyIndexRef.current;
    if (stack[index] === html) return;
    let next = [...stack.slice(0, index + 1), html];
    if (next.length > HISTORY_LIMIT) next = next.slice(1);
    historyStackRef.current = next;
    historyIndexRef.current = next.length - 1;
  }, []);

  const flushPendingHistory = React.useCallback(() => {
    if (historyTimerRef.current !== undefined) {
      clearTimeout(historyTimerRef.current);
      historyTimerRef.current = undefined;
      pushHistory(lastValueRef.current);
    }
  }, [pushHistory]);

  const applyHistory = React.useCallback(
    (direction: -1 | 1) => {
      flushPendingHistory();
      const stack = historyStackRef.current;
      const nextIndex = historyIndexRef.current + direction;
      if (nextIndex < 0 || nextIndex >= stack.length || !editorRef.current) return;
      historyIndexRef.current = nextIndex;
      const html = stack[nextIndex];
      editorRef.current.innerHTML = html;
      lastValueRef.current = html;
      onChange?.(html);
      // キャレットは末尾へ（選択座標までは復元しないライトな履歴）
      const range = document.createRange();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      updateActiveFormats();
    },
    [flushPendingHistory, onChange, updateActiveFormats],
  );

  /** ツールバーコマンド共通処理: 実行前スナップショット → 実行 → 通知 */
  const runCommand = React.useCallback(
    (command: (editor: HTMLElement) => void) => {
      if (isDisabled || !editorRef.current) return;
      const editor = editorRef.current;
      // focus() は環境によって選択をリセットするため、退避してから復元する
      const preserved = getEditorRange(editor)?.cloneRange() ?? null;
      editor.focus();
      if (preserved) {
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(preserved);
      }
      flushPendingHistory();
      pushHistory(editor.innerHTML);
      command(editor);
      updateActiveFormats();
      const html = editor.innerHTML;
      lastValueRef.current = html;
      pushHistory(html);
      onChange?.(html);
    },
    [isDisabled, flushPendingHistory, pushHistory, onChange, updateActiveFormats],
  );

  const handleRemoveFormat = React.useCallback(() => {
    runCommand((editor) => removeAllFormatting(editor));
  }, [runCommand]);

  // ---- リンクダイアログ（window.prompt はブラウザモーダルで UX/a11y 難のため置換） ----
  const [linkDialogOpen, setLinkDialogOpen] = React.useState(false);
  const [linkUrl, setLinkUrl] = React.useState("https://");
  const savedRangeRef = React.useRef<Range | null>(null);

  const handleInsertLink = React.useCallback(() => {
    if (isDisabled || !editorRef.current) return;
    editorRef.current.focus();
    const range = getEditorRange(editorRef.current);
    savedRangeRef.current = range ? range.cloneRange() : null;
    const selectedText = range?.toString() ?? "";
    setLinkUrl(selectedText.startsWith("http") ? selectedText : "https://");
    setLinkDialogOpen(true);
  }, [isDisabled]);

  const handleApplyLink = React.useCallback(() => {
    const url = linkUrl.trim();
    setLinkDialogOpen(false);
    if (!url || !editorRef.current) return;
    // ダイアログ操作で失われた選択を復元してから適用する
    // （保存済み選択が無ければ末尾キャレットで挿入）
    const selection = window.getSelection();
    selection?.removeAllRanges();
    if (savedRangeRef.current) {
      selection?.addRange(savedRangeRef.current);
    } else {
      const range = document.createRange();
      range.selectNodeContents(editorRef.current);
      range.collapse(false);
      selection?.addRange(range);
    }
    runCommand((editor) => createLink(editor, url));
  }, [linkUrl, runCommand]);

  const handleInput = React.useCallback(() => {
    if (isComposingRef.current) return;
    const html = editorRef.current?.innerHTML ?? "";
    if (html !== lastValueRef.current) {
      lastValueRef.current = html;
      onChange?.(html);
      // タイピングはデバウンスして履歴に積む
      if (historyTimerRef.current !== undefined) clearTimeout(historyTimerRef.current);
      historyTimerRef.current = setTimeout(() => {
        historyTimerRef.current = undefined;
        pushHistory(lastValueRef.current);
      }, 400);
    }
    updateActiveFormats();
  }, [onChange, pushHistory, updateActiveFormats]);

  const handleBeforeInput = React.useCallback(
    (e: React.FormEvent<HTMLDivElement>) => {
      const inputType = (e.nativeEvent as InputEvent).inputType;
      if (inputType === "historyUndo") {
        e.preventDefault();
        applyHistory(-1);
      } else if (inputType === "historyRedo") {
        e.preventDefault();
        applyHistory(1);
      }
    },
    [applyHistory],
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const mod = e.ctrlKey || e.metaKey;
      if (!mod) return;
      const key = e.key.toLowerCase();
      if (key === "z") {
        e.preventDefault();
        applyHistory(e.shiftKey ? 1 : -1);
      } else if (key === "y") {
        e.preventDefault();
        applyHistory(1);
      }
    },
    [applyHistory],
  );

  const handleKeyUp = React.useCallback(() => {
    updateActiveFormats();
  }, [updateActiveFormats]);

  const handleMouseUp = React.useCallback(() => {
    updateActiveFormats();
  }, [updateActiveFormats]);

  const handleCompositionStart = React.useCallback(() => {
    isComposingRef.current = true;
  }, []);

  const handleCompositionEnd = React.useCallback(() => {
    isComposingRef.current = false;
    handleInput();
  }, [handleInput]);

  // Prevent contentEditable from handling toolbar button focus loss
  const handleToolbarMouseDown = React.useCallback((e: React.MouseEvent) => {
    e.preventDefault();
  }, []);

  // Set initial content imperatively on mount (avoids dangerouslySetInnerHTML reset on re-render)
  // 注: ref を参照する effect は、その ref を変更するコールバック定義より
  // 後に置く必要がある（react-hooks/immutability）
  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = initialContentRef.current;
      lastValueRef.current = initialContentRef.current;
      historyStackRef.current = [initialContentRef.current];
      historyIndexRef.current = 0;
    }
  }, []);

  // Sync controlled value → DOM (skip if same to preserve cursor)
  React.useEffect(() => {
    if (value !== undefined && editorRef.current) {
      if (editorRef.current.innerHTML !== value) {
        editorRef.current.innerHTML = value;
        lastValueRef.current = value;
      }
    }
  }, [value]);

  const renderToolbarItem = React.useCallback((item: RichTextEditorToolbarItem, index: number) => {
    if (item === "separator") {
      return <span key={`sep-${index}`} className={styles.toolbarSep} aria-hidden="true" />;
    }

    const itemProps = {
      disabled: isDisabled,
      active: activeFormats.has(item),
    };

    switch (item) {
      case "bold":
        return (
          <ToolbarButton key="bold" {...itemProps} title={bold} onClick={() => runCommand((ed) => toggleInline(ed, "bold"))}>
            <BoldIcon />
          </ToolbarButton>
        );
      case "italic":
        return (
          <ToolbarButton key="italic" {...itemProps} title={italic} onClick={() => runCommand((ed) => toggleInline(ed, "italic"))}>
            <ItalicIcon />
          </ToolbarButton>
        );
      case "underline":
        return (
          <ToolbarButton key="underline" {...itemProps} title={underline} onClick={() => runCommand((ed) => toggleInline(ed, "underline"))}>
            <UnderlineIcon />
          </ToolbarButton>
        );
      case "strikethrough":
        return (
          <ToolbarButton key="strikethrough" {...itemProps} title={strikethrough} onClick={() => runCommand((ed) => toggleInline(ed, "strikethrough"))}>
            <StrikethroughIcon />
          </ToolbarButton>
        );
      case "h1":
        return (
          <ToolbarButton key="h1" {...itemProps} active={activeFormats.has("h1")} title={h1} onClick={() => runCommand((ed) => setBlock(ed, "h1"))}>
            <span aria-hidden="true">H1</span>
          </ToolbarButton>
        );
      case "h2":
        return (
          <ToolbarButton key="h2" {...itemProps} active={activeFormats.has("h2")} title={h2} onClick={() => runCommand((ed) => setBlock(ed, "h2"))}>
            <span aria-hidden="true">H2</span>
          </ToolbarButton>
        );
      case "h3":
        return (
          <ToolbarButton key="h3" {...itemProps} active={activeFormats.has("h3")} title={h3} onClick={() => runCommand((ed) => setBlock(ed, "h3"))}>
            <span aria-hidden="true">H3</span>
          </ToolbarButton>
        );
      case "ul":
        return (
          <ToolbarButton key="ul" {...itemProps} title={ul} onClick={() => runCommand((ed) => toggleList(ed, "ul"))}>
            <ListIcon />
          </ToolbarButton>
        );
      case "ol":
        return (
          <ToolbarButton key="ol" {...itemProps} title={ol} onClick={() => runCommand((ed) => toggleList(ed, "ol"))}>
            <OrderedListIcon />
          </ToolbarButton>
        );
      case "link":
        return (
          <ToolbarButton key="link" {...itemProps} title={link} onClick={handleInsertLink}>
            <LinkIcon />
          </ToolbarButton>
        );
      case "unlink":
        return (
          <ToolbarButton key="unlink" {...itemProps} title={unlink} onClick={() => runCommand((ed) => removeLink(ed))}>
            <UnlinkIcon />
          </ToolbarButton>
        );
      case "removeFormat":
        return (
          <ToolbarButton key="removeFormat" {...itemProps} title={removeFormat} onClick={handleRemoveFormat}>
            <EraseIcon />
          </ToolbarButton>
        );
      default:
        return null;
    }
  }, [
    activeFormats,
    isDisabled,
    bold, italic, underline, strikethrough, h1, h2, h3, ul, ol, link, unlink, removeFormat,
    runCommand,
    handleInsertLink,
    handleRemoveFormat,
  ]);

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
        >
          {toolbar.map((item, index) => renderToolbarItem(item, index))}
        </div>

        {/* Editor */}
        <div
          ref={editorRef}
          id={id}
          className={styles.content}
          contentEditable={!isDisabled}
          suppressContentEditableWarning
          role="textbox"
          aria-multiline
          // label / aria-labelledby / aria-label いずれも無い利用で名無しに
          // ならないよう内蔵ラベル（axe: aria-input-field-name）
          aria-label={ariaLabel ?? (label || ariaLabelledby ? undefined : t("a11y.rte_editor"))}
          aria-labelledby={ariaLabelledby ?? (label ? labelId : undefined)}
          aria-invalid={currentIntent === "danger"}
          aria-describedby={errorId}
          aria-required={required}
          aria-disabled={isDisabled}
          aria-placeholder={placeholder}
          data-placeholder={placeholder}
          tabIndex={isDisabled ? -1 : 0}

          style={{ minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight, outline: "none" }}
          onInput={handleInput}
          onBeforeInput={handleBeforeInput}
          onKeyDown={handleKeyDown}
          onKeyUp={handleKeyUp}
          onMouseUp={handleMouseUp}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />

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
                onChange={(e) => setLinkUrl(e.target.value)}
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
      </div>
    </FieldTemplate>
  );
};

RichTextEditor.displayName = "RichTextEditor";
