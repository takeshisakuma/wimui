import React from "react";
import classNames from "classnames";
import { FieldTemplate } from "../FieldTemplate";
import { WimIntent } from "../../../types/tokens";
import "./rich-text-editor.scss";

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
};

export type RichTextEditorProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  intent?: WimIntent;
  variant?: "outline" | "ghost";
  fullWidth?: boolean;
  minHeight?: number | string;
  label?: React.ReactNode;
  error?: string;
  required?: boolean;
  layout?: "vertical" | "horizontal";
  className?: string;
  id?: string;
  toolbar?: RichTextEditorToolbarItem[];
  labels?: RichTextEditorLabels;
  "aria-label"?: string;
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

const ToolbarButton = ({ onClick, active, disabled, title, children }: ToolbarButtonProps) => (
  <button
    type="button"
    className={classNames("wim-rte__toolbar-btn", active && "wim-rte__toolbar-btn--active")}
    onClick={onClick}
    disabled={disabled}
    title={title}
    aria-label={title}
    aria-pressed={active}
    tabIndex={-1}
  >
    {children}
  </button>
);

// ---- Main component ----

/**
 * リッチテキスト入力を受け付けるWYSIWYGエディタコンポーネント。
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
  const {
    bold = "Bold",
    italic = "Italic",
    underline = "Underline",
    strikethrough = "Strikethrough",
    h1 = "Heading 1",
    h2 = "Heading 2",
    h3 = "Heading 3",
    ul = "Unordered List",
    ol = "Ordered List",
    link = "Link",
    unlink = "Unlink",
    removeFormat = "Remove Formatting",
    toolbar: toolbarAriaLabel = "Rich Text Editor Toolbar",
    linkPrompt = "Enter URL",
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
  const effectiveIntent = isDisabled ? "disabled" : (error ? "error" : intent);

  // Set initial content imperatively on mount (avoids dangerouslySetInnerHTML reset on re-render)
  const initialContentRef = React.useRef(value !== undefined ? value : defaultValue);
  React.useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = initialContentRef.current;
      lastValueRef.current = initialContentRef.current;
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

  const updateActiveFormats = React.useCallback(() => {
    const active = new Set<string>();
    try {
      if (document.queryCommandState("bold")) active.add("bold");
      if (document.queryCommandState("italic")) active.add("italic");
      if (document.queryCommandState("underline")) active.add("underline");
      if (document.queryCommandState("strikeThrough")) active.add("strikethrough");
      if (document.queryCommandState("insertUnorderedList")) active.add("ul");
      if (document.queryCommandState("insertOrderedList")) active.add("ol");
      const block = document.queryCommandValue("formatBlock").toLowerCase().replace(/^<|>$/g, "");
      if (block) active.add(block);
    } catch {
      // queryCommandState may throw in some environments
    }
    setActiveFormats(active);
  }, []);

  const execCommand = React.useCallback(
    (command: string, value?: string) => {
      if (isDisabled) return;
      editorRef.current?.focus();
      document.execCommand(command, false, value);
      updateActiveFormats();
      const html = editorRef.current?.innerHTML ?? "";
      lastValueRef.current = html;
      onChange?.(html);
    },
    [isDisabled, onChange, updateActiveFormats],
  );

  const handleRemoveFormat = React.useCallback(() => {
    if (isDisabled) return;
    editorRef.current?.focus();
    // If nothing is selected, select all content so removeFormat applies
    const selection = window.getSelection();
    if (selection && selection.isCollapsed && editorRef.current) {
      const range = document.createRange();
      range.selectNodeContents(editorRef.current);
      selection.removeAllRanges();
      selection.addRange(range);
    }
    // Clear block-level format (h1/h2/h3 → p)
    try {
      const block = document.queryCommandValue("formatBlock").toLowerCase().replace(/^<|>$/g, "");
      if (block && !["p", "div", ""].includes(block)) {
        document.execCommand("formatBlock", false, "p");
      }
    } catch {
      // ignore — queryCommandValue may throw in some environments
    }
    // Clear inline formatting (bold, italic, underline, etc.)
    document.execCommand("removeFormat", false, undefined);
    updateActiveFormats();
    const html = editorRef.current?.innerHTML ?? "";
    lastValueRef.current = html;
    onChange?.(html);
  }, [isDisabled, onChange, updateActiveFormats]);

  const handleInsertLink = React.useCallback(() => {
    if (isDisabled) return;
    editorRef.current?.focus();
    const selection = window.getSelection();
    const selectedText = selection?.toString() ?? "";
    const url = window.prompt(linkPrompt, selectedText.startsWith("http") ? selectedText : "https://");
    if (url) {
      execCommand("createLink", url);
    }
  }, [isDisabled, execCommand, linkPrompt]);

  const handleInput = React.useCallback(() => {
    if (isComposingRef.current) return;
    const html = editorRef.current?.innerHTML ?? "";
    if (html !== lastValueRef.current) {
      lastValueRef.current = html;
      onChange?.(html);
    }
    updateActiveFormats();
  }, [onChange, updateActiveFormats]);

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

  const renderToolbarItem = (item: RichTextEditorToolbarItem, index: number) => {
    if (item === "separator") {
      return <span key={`sep-${index}`} className="wim-rte__toolbar-sep" aria-hidden="true" />;
    }

    const itemProps = {
      disabled: isDisabled,
      active: activeFormats.has(item),
    };

    switch (item) {
      case "bold":
        return (
          <ToolbarButton key="bold" {...itemProps} title={bold} onClick={() => execCommand("bold")}>
            <BoldIcon />
          </ToolbarButton>
        );
      case "italic":
        return (
          <ToolbarButton key="italic" {...itemProps} title={italic} onClick={() => execCommand("italic")}>
            <ItalicIcon />
          </ToolbarButton>
        );
      case "underline":
        return (
          <ToolbarButton key="underline" {...itemProps} title={underline} onClick={() => execCommand("underline")}>
            <UnderlineIcon />
          </ToolbarButton>
        );
      case "strikethrough":
        return (
          <ToolbarButton key="strikethrough" {...itemProps} title={strikethrough} onClick={() => execCommand("strikeThrough")}>
            <StrikethroughIcon />
          </ToolbarButton>
        );
      case "h1":
        return (
          <ToolbarButton key="h1" {...itemProps} active={activeFormats.has("h1")} title={h1} onClick={() => execCommand("formatBlock", "h1")}>
            <span aria-hidden="true">H1</span>
          </ToolbarButton>
        );
      case "h2":
        return (
          <ToolbarButton key="h2" {...itemProps} active={activeFormats.has("h2")} title={h2} onClick={() => execCommand("formatBlock", "h2")}>
            <span aria-hidden="true">H2</span>
          </ToolbarButton>
        );
      case "h3":
        return (
          <ToolbarButton key="h3" {...itemProps} active={activeFormats.has("h3")} title={h3} onClick={() => execCommand("formatBlock", "h3")}>
            <span aria-hidden="true">H3</span>
          </ToolbarButton>
        );
      case "ul":
        return (
          <ToolbarButton key="ul" {...itemProps} title={ul} onClick={() => execCommand("insertUnorderedList")}>
            <ListIcon />
          </ToolbarButton>
        );
      case "ol":
        return (
          <ToolbarButton key="ol" {...itemProps} title={ol} onClick={() => execCommand("insertOrderedList")}>
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
          <ToolbarButton key="unlink" {...itemProps} title={unlink} onClick={() => execCommand("unlink")}>
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
        className={classNames(
          "wim-rte",
          `wim-rte--${effectiveIntent}`,
          `wim-rte--${variant}`,
          fullWidth && "wim-rte--full-width",
        )}
      >
        {/* Toolbar */}
        <div
          className="wim-rte__toolbar"
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
          className="wim-rte__content"
          contentEditable={!isDisabled}
          suppressContentEditableWarning
          role="textbox"
          aria-multiline
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby ?? (label ? labelId : undefined)}
          aria-invalid={effectiveIntent === "error"}
          aria-describedby={errorId}
          aria-disabled={isDisabled}
          aria-placeholder={placeholder}
          data-placeholder={placeholder}
          tabIndex={isDisabled ? -1 : 0}
          style={{ minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight, outline: "none" }}
          onInput={handleInput}
          onKeyUp={handleKeyUp}
          onMouseUp={handleMouseUp}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
        />
      </div>
    </FieldTemplate>
  );
};

RichTextEditor.displayName = "RichTextEditor";
