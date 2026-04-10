import React from "react";
import { useTranslation } from "react-i18next";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import localStyles from "./button.module.scss";
import { Icon } from "../../media/Icon/Icon";
import type { WimColor, ComponentSize, ButtonVariant, ButtonIntent } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
import { useMergedRef } from "../../../hooks/useMergedRef";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  /**
   * If true, the button will be rendered as its child, merging its props onto that child.
   * Useful for using the button styles with Link components (e.g. from React Router or Next.js).
   */
  asChild?: boolean;
  /** ボタンの背景色をデザイントークンで上書きする。通常は `variant` prop で対応できるため、このpropは最終手段として使用してください。 */
  backgroundColor?: WimColor;
  size?: ComponentSize;
  variant?: ButtonVariant;
  /** ボタンのデザイン上の意味（視覚・意味的状態）。ARIAの role 属性とは無関係。 */
  intent?: ButtonIntent;
  /** Icon name or custom icon element */
  icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
  iconPosition?: "left" | "right";
  loading?: boolean;
  justify?: "start" | "center" | "end" | "between";
  /** Whether to animate the width change when label changes */
  animateWidth?: boolean;
  /** Whether the button should take up the full width of its container */
  fullWidth?: boolean;
  /** Custom styles for internal parts */
  styles?: {
    root?: string;
    loader?: string;
    icon?: string;
  };
};

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { className?: string }
>(
  (
    {
      asChild = false,
      size = "md",
      variant = "outline",
      intent = "default",
      icon,
      iconPosition = "left",
      loading = false,
      backgroundColor,
      justify = "center",
      animateWidth = false,
      fullWidth = false,
      styles: stylesProp,
      "aria-label": ariaLabelProp,
      className,
      disabled,
      children,
      ...props
    },
    forwardedRef,
  ) => {
    const internalRef = React.useRef<HTMLButtonElement>(null);
    const mergedRef = useMergedRef<HTMLButtonElement>(internalRef, forwardedRef);
    const [animatedWidth, setAnimatedWidth] = React.useState<number | "auto">("auto");
    const isInitialMount = React.useRef(true);

    React.useLayoutEffect(() => {
      if (!animateWidth || !internalRef.current) return;

      if (isInitialMount.current) {
        isInitialMount.current = false;
        return;
      }

      const node = internalRef.current;
      
      const currentWidth = node.getBoundingClientRect().width;
      setAnimatedWidth(currentWidth);

      const originalWidth = node.style.width;
      const originalMinWidth = node.style.minWidth;
      
      node.style.width = "auto";
      node.style.minWidth = "0";
      const targetWidth = Math.ceil(node.getBoundingClientRect().width) + 2;
      
      node.style.width = originalWidth;
      node.style.minWidth = originalMinWidth;

      const frame = requestAnimationFrame(() => {
        setAnimatedWidth(targetWidth);
      });

      return () => cancelAnimationFrame(frame);
    }, [children, animateWidth]);

    const { t } = useTranslation("common");
    const isDisabled = disabled;

    let resolvedAriaLabel: string | undefined;
    if (typeof ariaLabelProp === "string") {
      resolvedAriaLabel = ariaLabelProp;
    } else if (ariaLabelProp !== false) {
      if (!children && typeof icon === "string") {
        resolvedAriaLabel = icon;
      } else if (loading) {
        resolvedAriaLabel = t("a11y.loading");
      }
    }

    const justifyStyle =
      justify === "start"
        ? "flex-start"
        : justify === "end"
          ? "flex-end"
          : justify === "between" ? "space-between" : justify;

    const renderIcon = () => {
      if (!icon) return null;
      if (typeof icon === "string") {
        return <Icon name={icon as React.ComponentProps<typeof Icon>["name"]} size={size} className={stylesProp?.icon} />;
      }
      return icon;
    };

    const iconContent = renderIcon();

    const Root = asChild ? Slot : "button";

    return (
      <Root
        ref={mergedRef}
        type={asChild ? undefined : "button"}
        style={{
          ...props.style,
          justifyContent: justifyStyle,
          ...(backgroundColor ? { backgroundColor: getColorValue(backgroundColor) } : {}),
          ...(animateWidth && animatedWidth !== "auto"
            ? {
                width: `${animatedWidth}px`,
                transitionProperty:
                  props.style?.transitionProperty ||
                  "width, background-color, border-color, box-shadow, transform",
                transitionDuration: props.style?.transitionDuration || "0.3s",
                transitionTimingFunction: props.style?.transitionTimingFunction || "ease",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "clip",
              }
            : {}),
        }}
        className={classNames(
          localStyles.root,
          localStyles[size],
          localStyles[variant],
          localStyles[intent],
          loading && localStyles.loading,
          animateWidth && localStyles.animatedWidth,
          fullWidth && localStyles.fullWidth,
          !children && !!icon && localStyles.iconOnly,
          className,
          stylesProp?.root,
        )}
        disabled={(isDisabled || loading) && !asChild ? true : undefined}
        aria-label={resolvedAriaLabel}
        aria-busy={loading || undefined}
        {...(asChild ? props : { ...props })}
      >
        {iconContent && iconPosition === "left" && iconContent}
        <Slottable>{children}</Slottable>
        {iconContent && iconPosition === "right" && iconContent}
        {loading && (
          <span className={classNames(localStyles.loader, stylesProp?.loader)}>
            <Icon name="LoadingIcon" size={size} />
          </span>
        )}
      </Root>
    );
  },
);

Button.displayName = "Button";
