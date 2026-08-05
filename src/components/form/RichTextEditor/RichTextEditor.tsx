import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
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
            <Icon component={BoldIcon} size="sm" />
          </ToolbarButton>
        );
      case "italic":
        return (
          <ToolbarButton key="italic" {...itemProps} title={italic} onClick={() => runCommand((ed) => toggleInline(ed, "italic"))}>
            <Icon component={ItalicIcon} size="sm" />
          </ToolbarButton>
        );
      case "underline":
        return (
          <ToolbarButton key="underline" {...itemProps} title={underline} onClick={() => runCommand((ed) => toggleInline(ed, "underline"))}>
            <Icon component={UnderlineIcon} size="sm" />
          </ToolbarButton>
        );
      case "strikethrough":
        return (
          <ToolbarButton key="strikethrough" {...itemProps} title={strikethrough} onClick={() => runCommand((ed) => toggleInline(ed, "strikethrough"))}>
            <Icon component={StrikethroughIcon} size="sm" />
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
            <Icon component={ListIcon} size="sm" />
          </ToolbarButton>
        );
      case "ol":
        return (
          <ToolbarButton key="ol" {...itemProps} title={ol} onClick={() => runCommand((ed) => toggleList(ed, "ol"))}>
            <Icon component={ListOrderedIcon} size="sm" />
          </ToolbarButton>
        );
      case "link":
        return (
          <ToolbarButton key="link" {...itemProps} title={link} onClick={handleInsertLink}>
            <Icon component={LinkIcon} size="sm" />
          </ToolbarButton>
        );
      case "unlink":
        return (
          <ToolbarButton key="unlink" {...itemProps} title={unlink} onClick={() => runCommand((ed) => removeLink(ed))}>
            <Icon component={UnlinkIcon} size="sm" />
          </ToolbarButton>
        );
      case "removeFormat":
        return (
          <ToolbarButton key="removeFormat" {...itemProps} title={removeFormat} onClick={handleRemoveFormat}>
            <Icon component={EraserIcon} size="sm" />
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
