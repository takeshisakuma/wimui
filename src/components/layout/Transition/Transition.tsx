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
    // 入り／出の途中で「どちらの端の見た目か」。from を 1 フレーム描かないと
    // ブラウザは補間を始めない。
    const [phase, setPhase] = useState<"from" | "to">("from");
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

    // **相のクラスは render が決める。** ここは以前 `classList` を直接触っていたが、
    // **JSX 側が `entering` の間ずっと `enterTo` を当てていた**ので、効果で足した
    // `enterFrom` は同じレイヤーの後勝ちで**一度も効かなかった**。実測（要素が
    // 現れた瞬間から毎フレーム記録）: 最初の 2 フレームは `EnterTo + EnterFrom +
    // Base` が同居し computed は最終値のまま、`getAnimations()` は空＝
    // **CSSTransition が 1 つも作られていない**。from が描かれない以上、reflow を
    // 挟んでも rAF で遅らせても補間は始まらない。状態を render に持たせれば、
    // 途中の再レンダリングでクラスが巻き戻ることもない（T75）。
    useLayoutEffect(() => {
      if (animState === "idle") return;

      // まず from を 1 フレーム描いてから to へ移す。**2 段の `requestAnimationFrame`
      // にするのは、1 段だと挿入と同じフレームに入る実装があるため。**
      setPhase("from");
      let inner = 0;
      const outer = requestAnimationFrame(() => {
        inner = requestAnimationFrame(() => setPhase("to"));
      });

      // jsdom には実際のトランジションが無いので `transitionend` を代わりに起こす。
      const timer =
        import.meta.env.MODE === "test"
          ? setTimeout(() => {
              const el = internalRef.current;
              if (!el) return;
              handleTransitionEnd({
                target: el,
                currentTarget: el,
              } as unknown as React.TransitionEvent);
            }, 100)
          : undefined;

      return () => {
        cancelAnimationFrame(outer);
        cancelAnimationFrame(inner);
        if (timer !== undefined) clearTimeout(timer);
      };
    }, [animState, handleTransitionEnd]);

    if (!shouldRender && unmount) return null;

    return (
      <div
        ref={internalRef}
        // **クラス名をオブジェクトのキーにしない。** slide 系のプリセットは
        // `enter` と `leave` がどちらも `slideBase`（＝同じ文字列）なので、
        // `{ [effectiveEnter]: 入り, [effectiveLeave]: 出 }` と書くと**後のキーが
        // 前を上書きし**、入りの最中に `slideBase` が落ちる。落ちると
        // `transition: transform` を持つのはそれだけなので `transition-duration`
        // が **0s** になり、from → to は補間されずに飛ぶ（実測でそうなっていた）。
        // 以前は効果側が `classList` で足し直していたため表に出ていなかった（T75）。
        className={classNames(
          className,
          !show && animState === "idle" && !unmount && styles.hidden,
          animState === "entering" && effectiveEnter,
          animState === "entering" &&
            (phase === "from" ? effectiveEnterFrom : effectiveEnterTo),
          animState === "leaving" && effectiveLeave,
          animState === "leaving" &&
            (phase === "from" ? effectiveLeaveFrom : effectiveLeaveTo),
        )}
        onTransitionEnd={handleTransitionEnd}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Transition.displayName = "Transition";
