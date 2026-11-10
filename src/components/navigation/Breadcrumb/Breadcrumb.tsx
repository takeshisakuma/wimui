import React, { forwardRef, useEffect, useId, useRef, useState } from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { navigationNs } from "@/i18n/generated/navigation";
import classNames from "classnames";
import styles from "./breadcrumb.module.scss";
import { Link } from "../../navigation/Link/Link";
import { Icon } from "../../media/Icon/Icon";
import { ComponentSizeBasic } from "../../../types/tokens";
import { ChevronRightIcon, MoreHorizontalIcon } from "@/icon";
import { OverflowList } from "../../layout/OverflowList/OverflowList";
import { useInlineFloating } from "../../_internal/useInlineFloating";

type BreadcrumbItem = {
  label: React.ReactNode;
  href?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
};

type BreadcrumbProps = {
  /**
   * Items to display, from the root to the current page.
   */
  items: BreadcrumbItem[];
  /**
   * Separator displayed between items. Defaults to a chevron icon.
   */
  separator?: React.ReactNode;
  /**
   * Size of the breadcrumb.
   * @default "md"
   */
  size?: ComponentSizeBasic;
  /**
   * What happens when the items do not fit on one line. `"wrap"` moves them onto more lines;
   * `"collapse"` keeps the first item and the current page and folds the levels in between
   * into a "…" button that lists them.
   * @default "wrap"
   */
  overflow?: "wrap" | "collapse";
  /**
   * Accessible name of the "…" button, from the number of hidden levels. Defaults to a localized
   * "Show hidden levels (n)".
   */
  moreLabel?: (count: number) => string;
  /**
   * Additional CSS class name for the container.
   */
  className?: string;
  /**
   * Accessible label of the navigation landmark. Defaults to a localized "breadcrumb" label.
   */
  ariaLabel?: string;
  /**
   * If true, the breadcrumb will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
  /**
   * The element that becomes the breadcrumb's root (in place of `nav`) when
   * `asChild` is set. The list of items is rendered inside it. Ignored without `asChild`.
   */
  children?: React.ReactNode;
};

export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(({
  items,
  separator,
  size = "md",
  overflow = "wrap",
  moreLabel,
  className,
  ariaLabel,
  asChild,
  children,
  ...props
}, ref) => {
  // 「…」の名前は navigation の名前空間（Breadcrumb だけが読む。common に置くと、common を読む入口が全部増える）
  const { t } = useWimTranslation([commonNs, navigationNs]);
  const resolvedAriaLabel = ariaLabel ?? t("a11y.breadcrumb");
  const Component = asChild ? Slot : "nav";

  const defaultSeparator = (
    <Icon
      component={ChevronRightIcon}
      size={size}
      className={styles.separatorIcon}
    />
  );

  const renderItem = (item: BreadcrumbItem, index: number) => {
    const isLast = index === items.length - 1;

    return (
      <li key={index} className={styles.item}>
        <div className={styles.content}>
          {item.href && !isLast ? (
             <Link
              href={item.href}
              size={size}
              priority="secondary"
              iconName={item.iconName}
              className={styles.link}
              styles={{ label: styles.linkLabel }}
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={classNames(
                styles.label,
                isLast && styles.current,
              )}
              aria-current={isLast ? "page" : undefined}
              tabIndex={isLast ? 0 : undefined}
              role={isLast ? "link" : undefined}
            >
              {item.iconName && (
                <Icon
                  name={item.iconName}
                  size={size}
                  className={styles.labelIcon}
                />
              )}
              {item.label}
            </span>
          )}
        </div>
        {!isLast && (
          <span className={styles.separator} aria-hidden="true">
            {separator || defaultSeparator}
          </span>
        )}
      </li>
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    const list = e.currentTarget;
    // 畳んだときは「…」も移動先。幅を測るための写し（aria-hidden）は除く
    const itemElements = Array.from(
      list.querySelectorAll(`.${styles.link}, .${styles.label}.${styles.current}, .${styles.more}`),
    ).filter((el) => !el.closest('[aria-hidden="true"]'));
    const currentIndex = itemElements.indexOf(document.activeElement as HTMLElement);

    if (currentIndex === -1) return;

    if (e.key === "ArrowRight") {
      e.preventDefault();
      const nextIndex = (currentIndex + 1) % itemElements.length;
      (itemElements[nextIndex] as HTMLElement).focus();
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      const prevIndex = (currentIndex - 1 + itemElements.length) % itemElements.length;
      (itemElements[prevIndex] as HTMLElement).focus();
    }
  };

  return (
    <Component
      ref={ref}
      aria-label={resolvedAriaLabel}
      className={classNames("wim-breadcrumb", 
        styles.root,
        styles[size],
        className,
      )}
      onKeyDown={handleKeyDown}
      {...props}
    >
      {overflow === "collapse" ? (
        <OverflowList
          listElement="ol"
          collapseFrom="middle"
          // 現在地は、どれだけ狭くても残す
          minVisibleItems={Math.min(items.length, 2)}
          // 間隔は区切りの余白が持つ（折り返す形と同じ見た目にする）
          gap="0"
          className={styles.collapsible}
          items={items}
          renderItem={(item, index) => renderItem(item, index)}
          renderOverflow={(hidden) => (
            <li className={styles.item}>
              <BreadcrumbMore
                items={hidden}
                size={size}
                label={(moreLabel ?? ((count: number) => t("a11y.breadcrumb_more", { count })))(hidden.length)}
              />
              <span className={styles.separator} aria-hidden="true">
                {separator || defaultSeparator}
              </span>
            </li>
          )}
        />
      ) : (
        <ol className={styles.list}>{items.map((item, index) => renderItem(item, index))}</ol>
      )}
      {/* asChild のときは、利用者の要素を根（`nav` の代わり）にして、項目のリストをその中に描く（T338）。
          以前は、Slot の子がリストの `ol` 1 つだったので、`ol` が根になって `nav` が消え、利用者が渡した
          要素は使われなかった（例外は出ない）。 */}
      {asChild ? <Slottable>{children}</Slottable> : null}
    </Component>
  );

});

Breadcrumb.displayName = "Breadcrumb";

type BreadcrumbMoreProps = {
  items: BreadcrumbItem[];
  size: ComponentSizeBasic;
  label: string;
};

/**
 * 畳んだ階層を開く「…」のボタンと、その隣に描く一覧（disclosure）。
 *
 * Composition Contract:
 * - Managed by: Breadcrumb（overflow="collapse" のときだけ描く）
 * - Scroll lock: No
 * - 面はポータルへ出さず、引き金の隣に描く（位置は useInlineFloating）。Escape・外側の押下・
 *   フォーカスが外へ出たときに閉じ、Escape ではボタンへフォーカスを戻す
 */
const BreadcrumbMore = ({ items, size, label }: BreadcrumbMoreProps) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { setReference, setFloating, floatingProps } = useInlineFloating({ open });

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    // Escape は、フォーカスがボタンか一覧の中にあるときだけ閉じて、ボタンへ戻す
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !wrapperRef.current?.contains(document.activeElement)) return;
      event.stopPropagation();
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <span
      ref={(node) => {
        wrapperRef.current = node;
        setReference(node);
      }}
      className={styles.moreWrapper}
      onBlur={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={styles.more}
        aria-label={label}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((current) => !current)}
      >
        <Icon component={MoreHorizontalIcon} size={size} />
      </button>
      {open && (
        <ul id={panelId} ref={setFloating} className={styles.morePanel} {...floatingProps}>
          {items.map((item, index) => (
            <li key={index} className={styles.moreItem}>
              {item.href ? (
                <Link href={item.href} size={size} priority="secondary" iconName={item.iconName}>
                  {item.label}
                </Link>
              ) : (
                <span className={styles.label}>{item.label}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </span>
  );
};
