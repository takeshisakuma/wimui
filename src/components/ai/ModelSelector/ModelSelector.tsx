import React, { useId, useRef, useState, useEffect, useCallback } from "react";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { Transition } from "../../layout/Transition/Transition";
import { ComponentSizeBasic } from "../../../types/tokens";
import { ChevronDownIcon, CheckIcon } from "@/icon";
import styles from "./model-selector.module.scss";

/** Pricing metadata for a model, expressed per 1M tokens in the given currency. */
export type ModelPricing = {
  /** Input (prompt) price per 1M tokens */
  input?: number;
  /** Output (completion) price per 1M tokens */
  output?: number;
  /** Currency symbol shown before the price (default "$") */
  currency?: string;
};

/** A single selectable model with its display metadata. */
export type ModelOption = {
  /** Unique identifier of the model */
  id: string;
  /** Human-readable model name */
  name: string;
  /** Short description or the provider name */
  description?: string;
  /** Context window size in tokens (shown formatted, e.g. "128K") */
  contextLength?: number;
  /** Pricing metadata (per 1M tokens) */
  pricing?: ModelPricing;
  /** Short badge shown next to the name (e.g. "New", "Beta") */
  badge?: string;
  /** Whether the model cannot be selected */
  disabled?: boolean;
};

/** Labels for internationalization of the built-in meta text. */
export type ModelSelectorLabels = {
  /** Placeholder shown when nothing is selected */
  placeholder?: string;
  /** Prefix for the context-length meta (default "Context") */
  contextLabel?: string;
  /** Prefix for the input price meta (default "In") */
  inputLabel?: string;
  /** Prefix for the output price meta (default "Out") */
  outputLabel?: string;
  /** Suffix appended to prices (default "/1M") */
  perTokensLabel?: string;
  /** Accessible label for the trigger button */
  triggerAriaLabel?: string;
};

export interface ModelSelectorProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  /** List of selectable models */
  models: ModelOption[];
  /** Selected model id (controlled) */
  value?: string;
  /** Initially selected model id (uncontrolled) */
  defaultValue?: string;
  /** Callback when the selected model changes */
  onChange?: (id: string, model: ModelOption) => void;
  /** Size of the trigger */
  size?: ComponentSizeBasic;
  /** Whether the selector is disabled */
  disabled?: boolean;
  /** Whether to take full width of parent */
  fullWidth?: boolean;
  /** Whether to show pricing metadata in the dropdown */
  showPricing?: boolean;
  /** Whether to show the context-length metadata in the dropdown */
  showContext?: boolean;
  /** Labels for internationalization */
  labels?: ModelSelectorLabels;
  /** Additional class names */
  className?: string;
}

/** Format a token count into a compact string (e.g. 128000 -> "128K"). */
const formatContext = (tokens: number): string => {
  if (tokens >= 1_000_000) return `${(tokens / 1_000_000).toFixed(tokens % 1_000_000 === 0 ? 0 : 1)}M`;
  if (tokens >= 1_000) return `${(tokens / 1_000).toFixed(tokens % 1_000 === 0 ? 0 : 1)}K`;
  return String(tokens);
};

const formatPrice = (price: number, currency = "$"): string => `${currency}${price}`;

/**
 * ModelSelector is a dropdown for switching between AI models, surfacing the
 * metadata that matters when choosing one — context window and per-token pricing.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const ModelSelector = React.forwardRef<HTMLDivElement, ModelSelectorProps>(
  (
    {
      models,
      value,
      defaultValue,
      onChange,
      size = "md",
      disabled = false,
      fullWidth = false,
      showPricing = true,
      showContext = true,
      labels,
      className,
      ...props
    },
    ref,
  ) => {
    const {
      placeholder = "Select a model",
      contextLabel = "Context",
      inputLabel = "In",
      outputLabel = "Out",
      perTokensLabel = "/1M",
      triggerAriaLabel = "Select a model",
    } = labels ?? {};

    const isControlled = value !== undefined;
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
    const currentValue = isControlled ? value : internalValue;
    const selected = models.find((m) => m.id === currentValue);

    const [open, setOpen] = useState(false);
    const [activeIndex, setActiveIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const generatedId = useId();
    const listboxId = `${generatedId}-listbox`;

    const mergedRef = useCallback(
      (node: HTMLDivElement | null) => {
        containerRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
      },
      [ref],
    );

    // Close on outside interaction
    useEffect(() => {
      if (!open) return;
      const handlePointer = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handlePointer);
      return () => document.removeEventListener("mousedown", handlePointer);
    }, [open]);

    const selectModel = (model: ModelOption) => {
      if (model.disabled) return;
      if (!isControlled) setInternalValue(model.id);
      onChange?.(model.id, model);
      setOpen(false);
    };

    const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      if (e.key === "ArrowDown" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (!open) {
          setOpen(true);
          const currentIdx = models.findIndex((m) => m.id === currentValue);
          setActiveIndex(currentIdx >= 0 ? currentIdx : 0);
        }
      } else if (e.key === "Escape") {
        setOpen(false);
      }
    };

    const moveActive = (delta: number) => {
      setActiveIndex((prev) => {
        let next = prev;
        for (let i = 0; i < models.length; i++) {
          next = (next + delta + models.length) % models.length;
          if (!models[next]?.disabled) break;
        }
        return next;
      });
    };

    const handleListKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        moveActive(1);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        moveActive(-1);
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        const model = models[activeIndex];
        if (model) selectModel(model);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        containerRef.current?.querySelector("button")?.focus();
      }
    };

    useEffect(() => {
      if (open && activeIndex >= 0) {
        const items = listRef.current?.querySelectorAll('[role="option"]');
        (items?.[activeIndex] as HTMLElement | undefined)?.scrollIntoView({ block: "nearest" });
      }
    }, [activeIndex, open]);

    const renderMeta = (model: ModelOption) => {
      const parts: React.ReactNode[] = [];
      if (showContext && model.contextLength) {
        parts.push(
          <span key="ctx" className={styles.meta}>
            {contextLabel} {formatContext(model.contextLength)}
          </span>,
        );
      }
      if (showPricing && model.pricing) {
        const { input, output, currency } = model.pricing;
        if (input !== undefined) {
          parts.push(
            <span key="in" className={styles.meta}>
              {inputLabel} {formatPrice(input, currency)}
              {perTokensLabel}
            </span>,
          );
        }
        if (output !== undefined) {
          parts.push(
            <span key="out" className={styles.meta}>
              {outputLabel} {formatPrice(output, currency)}
              {perTokensLabel}
            </span>,
          );
        }
      }
      if (parts.length === 0) return null;
      return <span className={styles.metaRow}>{parts}</span>;
    };

    return (
      <div
        ref={mergedRef}
        className={classNames("wim-model-selector", 
          styles.root,
          styles[size],
          fullWidth && styles.fullWidth,
          disabled && styles.disabled,
          className,
        )}
        {...props}
      >
        <button
          type="button"
          className={styles.trigger}
          aria-haspopup="listbox"
          aria-expanded={open}
          /* T205: リストは開くまで DOM に無い。閉じた状態で `aria-controls` が
             存在しない ID を指すと、AT からは壊れた参照に見える（axe は
             `aria-valid-attr-value` を **critical の incomplete** で出す）。
             開いているあいだだけ指す。 */
          aria-controls={open ? listboxId : undefined}
          aria-label={triggerAriaLabel}
          disabled={disabled}
          onClick={() => {
            if (disabled) return;
            setOpen((o) => !o);
            const currentIdx = models.findIndex((m) => m.id === currentValue);
            setActiveIndex(currentIdx >= 0 ? currentIdx : 0);
          }}
          onKeyDown={handleTriggerKeyDown}
        >
          <span className={styles.triggerLabel}>
            {selected ? (
              <>
                <span className={styles.triggerName}>{selected.name}</span>
                {selected.badge && <span className={styles.badge}>{selected.badge}</span>}
              </>
            ) : (
              <span className={styles.placeholder}>{placeholder}</span>
            )}
          </span>
          <Icon
            component={ChevronDownIcon}
            size="sm"
            className={classNames(styles.chevron, open && styles.chevronOpen)}
          />
        </button>

        <Transition show={open} preset="scale" unmount className={styles.dropdownWrapper}>
          <ul
            ref={listRef}
            id={listboxId}
            role="listbox"
            tabIndex={-1}
            className={styles.dropdown}
            onKeyDown={handleListKeyDown}
            aria-activedescendant={activeIndex >= 0 ? `${generatedId}-opt-${activeIndex}` : undefined}
          >
            {models.map((model, index) => {
              const isSelected = model.id === currentValue;
              return (
                // Keyboard interaction is handled at the listbox level (handleListKeyDown);
                // options are activated via roving aria-activedescendant, so per-option key
                // listeners are unnecessary.
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                <li
                  key={model.id}
                  id={`${generatedId}-opt-${index}`}
                  role="option"
                  aria-selected={isSelected}
                  aria-disabled={model.disabled || undefined}
                  className={classNames(
                    styles.option,
                    index === activeIndex && styles.active,
                    // 選択は `.check` のアイコン（isSelected のときだけ描かれる）が示す。
                    // 別クラスは実体が無く、付けても何も起きなかった（T58）。
                    model.disabled && styles.optionDisabled,
                  )}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => selectModel(model)}
                >
                  <span className={styles.check} aria-hidden="true">
                    {isSelected && <Icon component={CheckIcon} size="sm" />}
                  </span>
                  <span className={styles.optionBody}>
                    <span className={styles.optionHeader}>
                      <span className={styles.optionName}>{model.name}</span>
                      {model.badge && <span className={styles.badge}>{model.badge}</span>}
                    </span>
                    {model.description && (
                      <span className={styles.description}>{model.description}</span>
                    )}
                    {renderMeta(model)}
                  </span>
                </li>
              );
            })}
          </ul>
        </Transition>
      </div>
    );
  },
);

ModelSelector.displayName = "ModelSelector";
