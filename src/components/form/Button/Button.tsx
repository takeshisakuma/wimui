import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import localStyles from "./button.module.scss";
import { Icon } from "../../media/Icon/Icon";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import type { WimColor, ComponentSizeBasic, ButtonVariant, ButtonIntent } from "../../../types/tokens";
import { getColorValue } from "../../../utilities/style-utils";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { LoadingIcon } from "@/icon";
import { isDev } from "@/utilities/dev-utils";

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  /**
   * If true, the button will be rendered as its child, merging its props onto that child.
   * Useful for using the button styles with Link components (e.g. from React Router or Next.js).
   */
  asChild?: boolean;
  /** Overrides the button background color with a design token. Usually the `variant` prop is enough; use this prop only as a last resort. */
  backgroundColor?: WimColor;
  /** Size of the button */
  size?: ComponentSizeBasic;
  /** Visual style variant of the button */
  variant?: ButtonVariant;
  /** Design intent of the button (visual / semantic state). Unrelated to the ARIA role attribute. */
  intent?: ButtonIntent;
  /** Icon name or custom icon element. An icon-only button (no children) needs `aria-label` or `aria-labelledby`: the icon name is not used as the accessible name. */
  icon?: React.ComponentProps<typeof Icon>["name"] | React.ReactNode;
  /** Position of the icon relative to the label */
  iconPosition?: "left" | "right";
  /** Whether to show a loading indicator and disable interaction */
  loading?: boolean;
  /** Horizontal alignment of the button content */
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
  ButtonProps & {
    /** Additional class names */
    className?: string;
  }
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

    const { t } = useWimTranslation(commonNs);
    const isDisabled = disabled;

    let resolvedAriaLabel: string | undefined;
    if (typeof ariaLabelProp === "string") {
      resolvedAriaLabel = ariaLabelProp;
    } else if (ariaLabelProp !== false) {
      // アイコンだけのボタンに、アイコン名（「CopyIcon」など）を名前として付けない（T345）。空ではないので
      // axe は通るが、「CopyIcon、ボタン」と読まれるだけで、何のボタンかは伝わらない。名前を付けずに、
      // 検査に落とさせる（FloatButton の T319 と同じ判断）。
      // 文字のあるボタンは、名前を「Loading」に置き換えない。見えている文字が名前から消える（WCAG 2.5.3 /
      // axe: label-content-name-mismatch）。読み込み中であることは、下の見えない文字で名前の後ろに足す。
      if (loading && !children && typeof icon !== "string") {
        resolvedAriaLabel = t("a11y.loading");
      }
    }

    // 名前の出どころが 1 つも無いアイコンだけのボタンは、開発時に知らせる。asChild のときは、名前は
    // 子の要素が持つので、ここでは判定しない。
    const isNameless =
      !asChild &&
      !children &&
      !!icon &&
      typeof ariaLabelProp !== "string" &&
      !props["aria-labelledby"] &&
      !props.title;
    React.useEffect(() => {
      if (isDev && isNameless) {
        console.warn(
          "[wimui] Button has an icon but no accessible name. Pass `aria-label` (or `aria-labelledby`) that describes the action.",
        );
      }
    }, [isNameless]);

    const justifyStyle =
      justify === "start"
        ? "flex-start"
        : justify === "end"
          ? "flex-end"
          : justify === "between" ? "space-between" : justify;

    const renderIcon = () => {
      if (loading) {
        return (
          <span className={classNames(localStyles.loader, stylesProp?.loader)}>
            <Icon component={LoadingIcon} spin size={size} />
          </span>
        );
      }
      if (!icon) return null;
      if (typeof icon === "string") {
        return (
          <Icon
            name={icon as React.ComponentProps<typeof Icon>["name"]}
            size={size}
            className={stylesProp?.icon}
          />
        );
      }
      return icon;
    };

    const iconContent = renderIcon();
    // 前の空白は、名前の中で見えている文字と「Loading」を分けるため（flex の中の空白だけの文字は描かれない）
    const loadingText = loading && children ? <>{" "}<VisuallyHidden>{t("a11y.loading")}</VisuallyHidden></> : null;

    const Root = asChild ? Slot : "button";

    return (
      <Root
        ref={mergedRef}
        type={asChild ? undefined : "button"}
        className={classNames("wim-button", 
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
        // style は、props を広げたあとに置く。先に置くと、広げた props の中の style（利用者が渡したもの）が、
        // ここで組んだ style を丸ごと置き換える（部品が入れた値が消える）。
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
                transitionDuration: props.style?.transitionDuration || "var(--wim-duration-base)",
                transitionTimingFunction: props.style?.transitionTimingFunction || "var(--wim-easing-standard)",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "clip",
              }
            : {}),
        }}
      >
        {asChild && iconContent && iconPosition === "left" ? iconContent : null}
        {asChild ? (
          <Slottable>{children}</Slottable>
        ) : (
          <span className={localStyles.content}>
            {iconContent && iconPosition === "left" && iconContent}
            {children}
            {loadingText}
            {iconContent && iconPosition === "right" && iconContent}
          </span>
        )}
        {asChild ? loadingText : null}
        {asChild && iconContent && iconPosition === "right" ? iconContent : null}
      </Root>
    );
  },
);

Button.displayName = "Button";
