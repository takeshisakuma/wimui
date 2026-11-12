import React from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { dataDisplayNs } from "@/i18n/generated/data-display";
import { Toolbar } from "../../layout/Toolbar/Toolbar";
import { Button } from "../../form/Button/Button";
import { useAnnounceValue } from "../../_internal/useAnnounce";
import { useMergedRef } from "../../../hooks/useMergedRef";
import localStyles from "./selection-bar.module.scss";

export type SelectionBarProps = Omit<React.ComponentPropsWithoutRef<"div">, "children"> & {
  /**
   * Number of selected items. The bar shows while it is above 0. Keep the component mounted
   * while the count is 0 as well: it holds the status region that announces the count, and a
   * region that appears together with its text is not read by screen readers.
   */
  count: number;
  /**
   * Called by the built-in "Clear selection" button. Leave it out to render no clear button.
   */
  onClear?: () => void;
  /**
   * Actions for the selected items (`Button size="sm"`, `IconButton`, `Popconfirm` ...). They
   * are placed in a `Toolbar`, so the arrow keys move between them.
   */
  children?: React.ReactNode;
  /**
   * Text that states the count. Defaults to the built-in "{count} selected" (en / ja / pt).
   */
  countLabel?: (count: number) => React.ReactNode;
  /**
   * Label of the clear button. Defaults to the built-in "Clear selection".
   */
  clearLabel?: string;
  /**
   * Where focus goes when the bar closes after focus was in it — after the clear button, or
   * after a confirmation opened from the bar (`Popconfirm`) whose trigger is gone. Without it,
   * focus moves to the first focusable element after the bar (with `DataGrid`, the grid).
   */
  returnFocusRef?: React.RefObject<HTMLElement | null>;
};

// 閉じたあと、フォーカスが body へ落ちるのを見張る時間（Popconfirm などの面が閉じる動きより長く）
const RESTORE_WINDOW_MS = 1000;

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** 文書の並びで root より後ろにある、Tab で止まれる最初の要素（DataGrid なら表そのもの）。 */
const nextFocusable = (root: HTMLElement | null): HTMLElement | null => {
  if (!root) return null;
  for (const el of Array.from(document.querySelectorAll<HTMLElement>(FOCUSABLE))) {
    if (root.contains(el)) continue;
    if (!(root.compareDocumentPosition(el) & Node.DOCUMENT_POSITION_FOLLOWING)) continue;
    if (el.closest('[hidden], [inert], [aria-hidden="true"]')) continue;
    const style = getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden") continue;
    return el;
  }
  return null;
};

/**
 * SelectionBar shows the number of selected rows, the actions for them and a way to clear the
 * selection. Place it above the Table / DataGrid / List it acts on, and keep it mounted.
 *
 * - The count is announced from a status region that is always present, both when it changes
 *   and when the selection is cleared.
 * - When the bar closes after focus was in it, focus moves to `returnFocusRef` or to the first
 *   focusable element after the bar, instead of falling to the top of the page.
 *
 * Composition Contract:
 * - Managed by: App consumption (the selection state stays with the caller)
 * - Scroll lock: No
 * - Does not own action semantics — compose Button / IconButton / Popconfirm as children
 */
export const SelectionBar = React.forwardRef<HTMLDivElement, SelectionBarProps>(
  (
    {
      count,
      onClear,
      children,
      countLabel,
      clearLabel,
      returnFocusRef,
      className,
      onFocus,
      "aria-label": ariaLabel,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation(dataDisplayNs);
    const rootRef = React.useRef<HTMLDivElement>(null);
    const mergedRef = useMergedRef(ref, rootRef);
    const open = count > 0;

    // 件数が変わったときだけ告げる（初回の描画では告げない）
    const announcementRegion = useAnnounceValue(
      open ? t("selection_bar.selected", { count }) : t("selection_bar.cleared"),
    );

    // 閉じると中の要素ごと DOM から消え、フォーカスが body へ落ちる。経路は 2 つある:
    // ①解除のボタンのように、バーの中の要素がそのまま消える
    // ②Popconfirm のように、バーから開いた面（ポータル）で確定し、面が閉じてフォーカスを
    //   引き金へ返そうとするが、引き金はもう無い（面の閉じる動きのぶん遅れて落ちる）
    // だから「開いているあいだにバーへフォーカスが入ったか」を覚え、閉じたあとしばらく
    // body に落ちるのを見張る。ほかの要素にフォーカスがあるあいだは奪わない
    const engaged = React.useRef(false);
    const handleFocus = (event: React.FocusEvent<HTMLDivElement>) => {
      engaged.current = true;
      onFocus?.(event);
    };
    React.useLayoutEffect(() => {
      if (open || !engaged.current) return undefined;
      engaged.current = false;
      const restore = () => {
        const active = document.activeElement;
        if (active && active !== document.body) return false;
        const target = returnFocusRef?.current ?? nextFocusable(rootRef.current) ?? rootRef.current;
        target?.focus();
        return true;
      };
      if (restore()) return undefined;
      const started = Date.now();
      const timer = window.setInterval(() => {
        if (restore() || Date.now() - started > RESTORE_WINDOW_MS) window.clearInterval(timer);
      }, 50);
      return () => window.clearInterval(timer);
    }, [open, returnFocusRef]);

    return (
      <div
        {...props}
        ref={mergedRef}
        // 後ろにフォーカスできる要素が 1 つも無いときの、最後の置き場（Tab の停止点にはしない）
        tabIndex={-1}
        className={classNames("wim-selection-bar", localStyles.root, className)}
        onFocus={handleFocus}
      >
        {announcementRegion}
        {open && (
          <Toolbar size="sm" aria-label={ariaLabel ?? t("selection_bar.label")} className={localStyles.bar}>
            <span className={localStyles.count}>
              {countLabel ? countLabel(count) : t("selection_bar.selected", { count })}
            </span>
            {/* 件数と操作は余白で分ける。区切り線は、狭い幅で操作が次の行へ折り返すと、
                件数の後ろに取り残される */}
            {children && <Toolbar.Group>{children}</Toolbar.Group>}
            {onClear && (
              <Toolbar.Group className={localStyles.end}>
                <Button variant="ghost" size="sm" onClick={onClear}>
                  {clearLabel ?? t("selection_bar.clear")}
                </Button>
              </Toolbar.Group>
            )}
          </Toolbar>
        )}
      </div>
    );
  },
);

SelectionBar.displayName = "SelectionBar";
