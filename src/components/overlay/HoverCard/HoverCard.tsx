import React, { useState, ReactNode } from "react";
import {
  useFloating,
  useHover,
  useFocus,
  useInteractions,
  useMergeRefs,
  safePolygon,
} from "@floating-ui/react";
import classNames from "classnames";
import styles from "./hover-card.module.scss";

/**
 * ホバーの開閉は Floating UI に委ねる（**位置決めは委ねない**）。
 *
 * **セーフトライアングル。** トリガーからカードへ動くとき、人は直線ではなく斜めに
 * 動く。素朴に `onMouseLeave` で閉じると、**カードに着く前にトリガーを外れた瞬間に
 * 閉じる** ── 追いかけて動いているのに逃げられる形になる。`safePolygon()` は
 * ポインタとカードの角を結ぶ三角形を「まだ向かっている領域」として扱い、その中に
 * いる間は閉じない。1980 年代の Mac のメニューからある手法。
 *
 * **自前で `clip-path` と `mousemove` を書く必要は無い。** `@floating-ui/react` は
 * 依存に既にあり、`Tooltip` と `useFloatingElement`（`Popover` が使用）は同じ
 * `safePolygon()` を既に使っていた。ここだけが**自前の `setTimeout` 2 本**で
 * 開閉していて、三角形を持っていなかった。
 *
 * **位置決めは CSS のまま**にしてある（`side` / `align` は公開 prop で、
 * `styles[side]` がクラスで位置を決める）。Floating UI に移すと prop の意味と
 * VRT のベースラインが同時に動くので、ここでは扱わない。`useFloating` は
 * **ref と context を得るためだけ**に使い、`floatingStyles` は当てない。
 */
const HoverCardContext = React.createContext<{
  isOpen: boolean;
  refs: ReturnType<typeof useFloating>["refs"] | null;
  getReferenceProps: (props?: React.HTMLProps<Element>) => Record<string, unknown>;
  getFloatingProps: (props?: React.HTMLProps<HTMLElement>) => Record<string, unknown>;
}>({
  isOpen: false,
  refs: null,
  getReferenceProps: () => ({}),
  getFloatingProps: () => ({}),
});

export type HoverCardProps = {
  /**
   * Hover card parts (HoverCardTrigger and HoverCardContent).
   */
  children: ReactNode;
  /**
   * Additional CSS class name for the container.
   */
  className?: string;
  /**
   * Delay before showing the hover card in ms.
   */
  openDelay?: number;
  /**
   * Delay before hiding the hover card in ms.
   */
  closeDelay?: number;
  /**
   * If provided, controls the open state.
   */
  open?: boolean;
  /**
   * Callback when open state changes.
   */
  onOpenChange?: (open: boolean) => void;
};

const HoverCardInner = ({
  children,
  className,
  openDelay = 700,
  closeDelay = 300,
  open: controlledOpen,
  onOpenChange,
}: HoverCardProps) => {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
  const isControlled = controlledOpen !== undefined;
  const isOpen = isControlled ? controlledOpen : uncontrolledOpen;

  const setOpen = (next: boolean) => {
    if (!isControlled) setUncontrolledOpen(next);
    onOpenChange?.(next);
  };

  // 位置決めには使わない（middleware も `floatingStyles` も無し）。ref と context を
  // 得るためだけ ── `safePolygon()` はトリガーとカードの矩形を context から読む。
  const { refs, context } = useFloating({ open: isOpen, onOpenChange: setOpen });

  const hover = useHover(context, {
    delay: { open: openDelay, close: closeDelay },
    // **これがセーフトライアングル。** ポインタとカードの角で三角形を作り、
    // その中を通っている間は「まだ向かっている」とみなして閉じない。
    handleClose: safePolygon({ requireIntent: false }),
  });
  // 従来どおりキーボードでも開く（focus / blur）。
  const focus = useFocus(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([hover, focus]);

  return (
    <HoverCardContext.Provider
      value={{ isOpen, refs, getReferenceProps, getFloatingProps }}
    >
      <div className={classNames("wim-hover-card", styles.root, className)}>{children}</div>
    </HoverCardContext.Provider>
  );
};

export type HoverCardTriggerProps = {
  children: ReactNode;
  className?: string;
  asChild?: boolean;
};

export const HoverCardTrigger = ({
  children,
  className,
  asChild,
}: HoverCardTriggerProps) => {
  const { refs, getReferenceProps } = React.useContext(HoverCardContext);
  const childrenRef = (children as React.ReactElement & { ref?: React.Ref<unknown> })
    ?.ref;
  // `asChild` の子に ref を渡しつつ、子が元から持っている ref も壊さない
  // （`Popover.Trigger` と同じ組み方）。
  const ref = useMergeRefs([refs?.setReference ?? null, childrenRef ?? null]);

  if (asChild && React.isValidElement(children)) {
    const childProps = children.props as Record<string, unknown>;
    // eslint-disable-next-line react-hooks/refs
    const referenceProps = getReferenceProps({
      ref,
      ...(childProps as React.HTMLProps<Element>),
      className: classNames(className, childProps.className as string | undefined),
    }) as React.HTMLAttributes<Element>;
    return React.cloneElement(children, referenceProps);
  }

  return (
    <div
      ref={ref as React.Ref<HTMLDivElement>}
      className={classNames(styles.trigger, className)}
      tabIndex={0}
      {...(getReferenceProps() as React.HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </div>
  );
};

export type HoverCardContentProps = {
  children: ReactNode;
  className?: string;
  align?: "left" | "right" | "center";
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
};

export const HoverCardContent = ({
  children,
  className,
  align = "center",
  side = "bottom",
  sideOffset: _sideOffset = 8,
  ...props
}: HoverCardContentProps & React.HTMLAttributes<HTMLDivElement>) => {
  const { isOpen, refs, getFloatingProps } = React.useContext(HoverCardContext);

  if (!isOpen) return null;

  const sideClass = styles[side];
  const alignClass = align === "left" ? styles.alignLeft : align === "right" ? styles.alignRight : "";

  return (
    <div
      // `safePolygon()` はここを「向かっている先」として読む。ref を渡さないと
      // 三角形が作れず、ホバーは従来どおり素朴な離脱判定に戻る。
      ref={refs?.setFloating}
      className={classNames(
        styles.content,
        sideClass,
        alignClass,
        className,
      )}
      data-side={side}
      data-align={align}
      {...(getFloatingProps(props) as React.HTMLAttributes<HTMLDivElement>)}
    >
      {children}
    </div>
  );
};
export interface HoverCardComponent extends React.FC<HoverCardProps> {
  Trigger: typeof HoverCardTrigger;
  Content: typeof HoverCardContent;
}

const HoverCardCompound: HoverCardComponent = (props) => <HoverCardInner {...props} />;
HoverCardCompound.displayName = "HoverCard";
HoverCardCompound.Trigger = HoverCardTrigger;
HoverCardCompound.Content = HoverCardContent;

export { HoverCardCompound as HoverCard };
export default HoverCardCompound;
