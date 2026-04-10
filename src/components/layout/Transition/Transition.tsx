import React, {
  useState,
  useRef,
  useLayoutEffect,
  useImperativeHandle,
  useEffect,
  useCallback,
} from "react";
import classNames from "classnames";
import styles from "./transition.module.scss";

export type TransitionPreset = "fade" | "scale";

export interface TransitionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Whether the component should be shown or hidden */
  show: boolean;
  /** The content to be transitioned */
  children: React.ReactNode;
  /** Built-in transition preset */
  preset?: TransitionPreset;
  /** Transition classes applied when entering */
  enter?: string;
  /** Startup classes for the entry transition */
  enterFrom?: string;
  /** Ending classes for the entry transition */
  enterTo?: string;
  /** Transition classes applied when leaving */
  leave?: string;
  /** Startup classes for the leave transition */
  leaveFrom?: string;
  /** Ending classes for the leave transition */
  leaveTo?: string;
  /** Whether to unmount the children when hidden */
  unmount?: boolean;
  /** Whether to animate on initial mount */
  appear?: boolean;
  /** Additional class names for the wrapper */
  className?: string;
}

/**
 * A component that handles simple CSS transitions for its children.
 * It manages applying classes at the right moments (enter, enterFrom, enterTo, etc.).
 */
export const Transition = React.forwardRef<HTMLDivElement, TransitionProps>(
  (
    {
      show,
      children,
      preset,
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
    const [state, setState] = useState<"idle" | "entering" | "leaving">("idle");
    const stateRef = useRef<"idle" | "entering" | "leaving">("idle");
    const [activeClasses, setActiveClasses] = useState("");
    const internalRef = useRef<HTMLDivElement>(null);
    const isInitialRender = useRef(true);

    // Built-in presets mapping
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
        default:
          return {};
      }
    };

    const presetClasses = preset ? getPresetClasses(preset) : {};
    const effectiveEnter = classNames(presetClasses.enter, enter);
    const effectiveEnterFrom = classNames(presetClasses.enterFrom, enterFrom);
    const effectiveEnterTo = classNames(presetClasses.enterTo, enterTo);
    const effectiveLeave = classNames(presetClasses.leave, leave);
    const effectiveLeaveFrom = classNames(presetClasses.leaveFrom, leaveFrom);
    const effectiveLeaveTo = classNames(presetClasses.leaveTo, leaveTo);

    // Sync ref with state for synchronous access in fallback
    useEffect(() => {
      stateRef.current = state;
    }, [state]);

    useImperativeHandle(ref, () => internalRef.current!);

    const handleTransitionEnd = useCallback((e: React.TransitionEvent) => {
      if (e.target !== internalRef.current) return;

      const currentState = stateRef.current;

      if (currentState === "entering") {
        setState("idle");
        stateRef.current = "idle";
        setActiveClasses("");
      } else if (currentState === "leaving") {
        setState("idle");
        stateRef.current = "idle";
        setActiveClasses("");
        if (unmount) {
          setShouldRender(false);
        }
      }
    }, [unmount]);

    useLayoutEffect(() => {
      if (isInitialRender.current) {
        isInitialRender.current = false;
        if (!appear || !show) return;
      }

      const completeTransition = () => {
        if (import.meta.env.MODE === "test") {
          const timer = setTimeout(() => {
            if (internalRef.current) {
              handleTransitionEnd({
                target: internalRef.current,
                currentTarget: internalRef.current,
              } as unknown as React.TransitionEvent);
            }
          }, 100);
          return () => clearTimeout(timer);
        }
        return () => {};
      };

      if (show) {
        /* eslint-disable react-hooks/set-state-in-effect */
        setShouldRender(true);
        setState("entering");
        stateRef.current = "entering";
        setActiveClasses(classNames(effectiveEnter, effectiveEnterFrom));
        /* eslint-enable react-hooks/set-state-in-effect */

        void internalRef.current?.offsetHeight;

        let cleanup: () => void = () => {};
        let frame2: number;
        const frame = requestAnimationFrame(() => {
          frame2 = requestAnimationFrame(() => {
            if (internalRef.current) {
              setActiveClasses(classNames(effectiveEnter, effectiveEnterTo));
              cleanup = completeTransition();
            }
          });
        });

        return () => {
          cancelAnimationFrame(frame);
          cancelAnimationFrame(frame2);
          cleanup();
        };
      } else {
        setState("leaving");
        stateRef.current = "leaving";
        setActiveClasses(classNames(effectiveLeave, effectiveLeaveFrom));

        void internalRef.current?.offsetHeight;

        let cleanup: () => void = () => {};
        let frame2: number;
        const frame = requestAnimationFrame(() => {
          frame2 = requestAnimationFrame(() => {
            if (internalRef.current) {
              setActiveClasses(classNames(effectiveLeave, effectiveLeaveTo));
              cleanup = completeTransition();
            }
          });
        });

        return () => {
          cancelAnimationFrame(frame);
          cancelAnimationFrame(frame2);
          cleanup();
        };
      }
    }, [show, effectiveEnter, effectiveEnterFrom, effectiveEnterTo, effectiveLeave, effectiveLeaveFrom, effectiveLeaveTo, appear, handleTransitionEnd]);

    if (!shouldRender && unmount) return null;

    return (
      <div
        ref={internalRef}
        className={classNames(className, activeClasses, {
          [styles.hidden]: !show && state === "idle" && !unmount,
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
