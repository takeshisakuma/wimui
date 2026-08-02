import React, {
  useState,
  useRef,
  useLayoutEffect,
  useImperativeHandle,
  useCallback,
} from "react";
import classNames from "classnames";
import styles from "./transition.module.scss";

/** `"none"` は「その相はアニメーションしない」の意味で、`enterPreset` / `leavePreset` に渡す。 */
export type TransitionPreset =
  | "none"
  | "fade"
  | "scale"
  | "slide-right"
  | "slide-left"
  | "slide-top"
  | "slide-bottom";

export interface TransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the content is shown (drives the enter/leave transitions) */
  show: boolean;
  /** Content to transition */
  children: React.ReactNode;
  /** Preset transition (fade, scale, slide-*) — 入りと出の両方に効く */
  preset?: TransitionPreset;
  /**
   * 入りだけ別扱いにしたいときのプリセット。`"none"` で入りのアニメーションを止める。
   * 省略時は `preset` に従う。
   *
   * `Drawer` の `slideIn` / `slideOut` のように**片方だけ切りたい** API があるのに、
   * `preset` は両相を一括で決めるため表現できなかった（T58）。
   */
  enterPreset?: TransitionPreset;
  /** 出だけ別扱いにしたいときのプリセット。`"none"` で出のアニメーションを止める。 */
  leavePreset?: TransitionPreset;
  /** Class applied during the enter transition */
  enter?: string;
  /** Class applied at the start of the enter transition */
  enterFrom?: string;
  /** Class applied at the end of the enter transition */
  enterTo?: string;
  /** Class applied during the leave transition */
  leave?: string;
  /** Class applied at the start of the leave transition */
  leaveFrom?: string;
  /** Class applied at the end of the leave transition */
  leaveTo?: string;
  /** Whether to unmount the content when hidden */
  unmount?: boolean;
  /** Whether to run the enter transition on initial mount */
  appear?: boolean;
  /** Additional class names */
  className?: string;
}

const getPresetClasses = (p: TransitionPreset) => {
  switch (p) {
    case "fade":
      return {
        enter: styles.fadeEnterTo,
        enterFrom: styles.fadeEnter,
        enterTo: styles.fadeEnterTo,
        leave: styles.fadeLeaveTo,
        leaveFrom: styles.fadeLeave,
        leaveTo: styles.fadeLeaveTo,
      };
    case "scale":
      return {
        enter: styles.scaleEnterTo,
        enterFrom: styles.scaleEnter,
        enterTo: styles.scaleEnterTo,
        leave: styles.scaleLeaveTo,
        leaveFrom: styles.scaleLeave,
        leaveTo: styles.scaleLeaveTo,
      };
    case "slide-right":
      return {
        enter: styles.slideBase,
        enterFrom: styles.slideRightEnterFrom,
        enterTo: styles.slideRightEnterTo,
        leave: styles.slideBase,
        leaveFrom: styles.slideRightLeaveFrom,
        leaveTo: styles.slideRightLeaveTo,
      };
    case "slide-left":
      return {
        enter: styles.slideBase,
        enterFrom: styles.slideLeftEnterFrom,
        enterTo: styles.slideLeftEnterTo,
        leave: styles.slideBase,
        leaveFrom: styles.slideLeftLeaveFrom,
        leaveTo: styles.slideLeftLeaveTo,
      };
    case "slide-top":
      return {
        enter: styles.slideBase,
        enterFrom: styles.slideTopEnterFrom,
        enterTo: styles.slideTopEnterTo,
        leave: styles.slideBase,
        leaveFrom: styles.slideTopLeaveFrom,
        leaveTo: styles.slideTopLeaveTo,
      };
    case "slide-bottom":
      return {
        enter: styles.slideBase,
        enterFrom: styles.slideBottomEnterFrom,
        enterTo: styles.slideBottomEnterTo,
        leave: styles.slideBase,
        leaveFrom: styles.slideBottomLeaveFrom,
        leaveTo: styles.slideBottomLeaveTo,
      };
    default:
      return {};
  }
};

/** Split a classNames string into an array of non-empty strings */
const toClassList = (cn: string) => cn.split(" ").filter(Boolean);

export const Transition = React.forwardRef<HTMLDivElement, TransitionProps>(
  (
    {
      show,
      children,
      preset,
      enterPreset,
      leavePreset,
      enter = "",
      enterFrom = "",
      enterTo = "",
      leave = "",
      leaveFrom = "",
      leaveTo = "",
      unmount = true,
      appear = false,
      className,
      ...props
    },
    ref,
  ) => {
    const [shouldRender, setShouldRender] = useState(show);
    const [animState, setAnimState] = useState<"idle" | "entering" | "leaving">(
      () => (show && appear ? "entering" : "idle"),
    );
    const [prevShow, setPrevShow] = useState(show);
    const internalRef = useRef<HTMLDivElement>(null);

    // 相ごとに解決する。`enterPreset` / `leavePreset` が省略なら `preset` に従い、
    // `"none"` ならその相のプリセットクラスを付けない（明示した enter/leave は残す）。
    const resolve = (p: TransitionPreset | undefined) =>
      p && p !== "none" ? getPresetClasses(p) : {};
    const enterClasses = resolve(enterPreset ?? preset);
    const leaveClasses = resolve(leavePreset ?? preset);
    const effectiveEnter    = classNames(enterClasses.enter,     enter);
    const effectiveEnterFrom = classNames(enterClasses.enterFrom, enterFrom);
    const effectiveEnterTo  = classNames(enterClasses.enterTo,   enterTo);
    const effectiveLeave    = classNames(leaveClasses.leave,     leave);
    const effectiveLeaveFrom = classNames(leaveClasses.leaveFrom, leaveFrom);
    const effectiveLeaveTo  = classNames(leaveClasses.leaveTo,   leaveTo);

    // Derived state: mount the element when show becomes true.
    if (show && !shouldRender) {
      setShouldRender(true);
    }

    // Derived state: drive animation state from show changes during render.
    if (show !== prevShow) {
      setPrevShow(show);
      if (show) {
        if (animState !== "entering") setAnimState("entering");
      } else {
        if (animState !== "leaving") setAnimState("leaving");
      }
    }

    useImperativeHandle(ref, () => internalRef.current!);

    const handleTransitionEnd = useCallback((e: React.TransitionEvent) => {
      if (e.target !== internalRef.current) return;
      if (animState === "entering" || animState === "leaving") {
        const leaving = animState === "leaving";
        setAnimState("idle");
        if (leaving && unmount) setShouldRender(false);
      }
    }, [animState, unmount]);

    // DOM-only effect: applies CSS transition classes via classList.
    // No setState here — animation state is managed in the render phase above.
    useLayoutEffect(() => {
      const el = internalRef.current;
      if (!el) return;

      if (animState === "entering") {
        const enterFromList = toClassList(effectiveEnterFrom);
        const enterList     = toClassList(effectiveEnter);
        const enterToList   = toClassList(effectiveEnterTo);

        el.classList.add(...enterFromList, ...enterList);
        void el.offsetHeight;
        el.classList.remove(...enterFromList);
        el.classList.add(...enterToList);

        if (import.meta.env.MODE === "test") {
          const timer = setTimeout(() => {
            handleTransitionEnd({
              target: el,
              currentTarget: el,
            } as unknown as React.TransitionEvent);
          }, 100);
          return () => clearTimeout(timer);
        }

        return () => {
          el.classList.remove(...enterFromList, ...enterList, ...enterToList);
        };
      }

      if (animState === "leaving") {
        const leaveFromList = toClassList(effectiveLeaveFrom);
        const leaveList     = toClassList(effectiveLeave);
        const leaveToList   = toClassList(effectiveLeaveTo);

        el.classList.add(...leaveFromList, ...leaveList);
        void el.offsetHeight;
        el.classList.remove(...leaveFromList);
        el.classList.add(...leaveToList);

        if (import.meta.env.MODE === "test") {
          const timer = setTimeout(() => {
            handleTransitionEnd({
              target: el,
              currentTarget: el,
            } as unknown as React.TransitionEvent);
          }, 100);
          return () => clearTimeout(timer);
        }

        return () => {
          el.classList.remove(...leaveFromList, ...leaveList, ...leaveToList);
        };
      }
    }, [animState, effectiveEnter, effectiveEnterFrom, effectiveEnterTo, effectiveLeave, effectiveLeaveFrom, effectiveLeaveTo, handleTransitionEnd]);

    if (!shouldRender && unmount) return null;

    return (
      <div
        ref={internalRef}
        className={classNames(className, {
          [styles.hidden]: !show && animState === "idle" && !unmount,
          [effectiveEnter]: animState === "entering",
          [effectiveEnterTo]: animState === "entering",
          [effectiveLeave]: animState === "leaving",
          [effectiveLeaveTo]: animState === "leaving",
        })}
        onTransitionEnd={handleTransitionEnd}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Transition.displayName = "Transition";
