import React, {
  useRef,
  useState,
  useLayoutEffect,
  useEffect,
  useCallback,
} from "react";
import classNames from "classnames";
import "./tab-navigation.scss";

const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export interface TabNavigationProps extends React.ComponentPropsWithoutRef<"nav"> {
  /** Visual style of the tabs */
  variant?: "underline" | "pill" | "contained";
  /** Alignment of the tabs */
  align?: "start" | "center" | "end" | "justify";
  /** Size of the tabs */
  size?: "small" | "medium" | "large";
}

const TabNavigation = React.forwardRef<HTMLElement, TabNavigationProps>(
  (
    {
      className,
      children,
      variant = "underline",
      align = "start",
      size = "medium",
      ...props
    },
    ref,
  ) => {
    const localNavRef = useRef<HTMLElement>(null);
    const listRef = useRef<HTMLDivElement>(null);
    const [sliderStyle, setSliderStyle] = useState<React.CSSProperties>({
      opacity: 0,
    });
    const [isReady, setIsReady] = useState(false);
    const isReadyRef = useRef(false);

    const setRefs = useCallback(
      (node: HTMLElement) => {
        localNavRef.current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLElement | null>).current = node;
        }
      },
      [ref],
    );

    useIsomorphicLayoutEffect(() => {
      const listElement = listRef.current;
      if (!listElement) return;

      const updateSlider = () => {
        const activeItem = listElement.querySelector(
          ".wim-tab-navigation__item--active",
        ) as HTMLElement;
        if (activeItem) {
          setSliderStyle({
            width: `${activeItem.offsetWidth}px`,
            transform: `translateX(${activeItem.offsetLeft}px)`,
            opacity: 1,
          });
          if (!isReadyRef.current) {
            requestAnimationFrame(() => {
              isReadyRef.current = true;
              setIsReady(true);
            });
          }
        } else {
          setSliderStyle({ opacity: 0 });
        }
      };

      updateSlider();

      const resizeObserver = new ResizeObserver(() => updateSlider());
      resizeObserver.observe(listElement);

      const mutationObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (
            mutation.type === "childList" ||
            (mutation.type === "attributes" &&
              mutation.attributeName === "class")
          ) {
            updateSlider();
          }
        }
      });
      mutationObserver.observe(listElement, {
        attributes: true,
        subtree: true,
        childList: true,
        attributeFilter: ["class"],
      });

      return () => {
        resizeObserver.disconnect();
        mutationObserver.disconnect();
      };
    }, [variant]); // Only re-run if variant changes

    return (
      <nav
        ref={setRefs}
        className={classNames(
          "wim-tab-navigation",
          `wim-tab-navigation--${variant}`,
          `wim-tab-navigation--${align}`,
          `wim-tab-navigation--${size}`,
          isReady && "wim-tab-navigation--ready",
          className,
        )}
        {...props}
      >
        <div className="wim-tab-navigation__list" role="tablist" ref={listRef}>
          <div
            className="wim-tab-navigation__slider"
            style={sliderStyle}
            aria-hidden="true"
          />
          {children}
        </div>
      </nav>
    );
  },
);

TabNavigation.displayName = "TabNavigation";

export interface TabNavigationItemProps extends React.ComponentPropsWithoutRef<"a"> {
  /** Active state */
  active?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Icon element */
  icon?: React.ReactNode;
}

export const TabNavigationItem = React.forwardRef<
  HTMLAnchorElement,
  TabNavigationItemProps
>(
  (
    { className, children, active, disabled, icon, href, onClick, ...props },
    ref,
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      if (onClick) {
        onClick(e);
      }
    };

    return (
      <a
        ref={ref}
        href={href}
        onClick={handleClick}
        className={classNames(
          "wim-tab-navigation__item",
          active && "wim-tab-navigation__item--active",
          disabled && "wim-tab-navigation__item--disabled",
          className,
        )}
        role="tab"
        aria-selected={active}
        aria-disabled={disabled}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {icon && <span className="wim-tab-navigation__icon">{icon}</span>}
        {children}
      </a>
    );
  },
);

TabNavigationItem.displayName = "TabNavigation.Item";

const TabNavigationComponent = TabNavigation as typeof TabNavigation & {
  Item: typeof TabNavigationItem;
};

TabNavigationComponent.Item = TabNavigationItem;

export { TabNavigationComponent as TabNavigation };
export default TabNavigationComponent;
