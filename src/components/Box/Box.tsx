import React from "react";
import classNames from "classnames";
import {
  WimColor,
  WimSpacing,
  WimRadius,
  WimShadow,
} from "../../types/tokens";
import "./box.scss";

export type BoxProps<C extends React.ElementType = "div"> = {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  as?: C;
  /** Padding */
  p?: number | WimSpacing;
  /** Padding top */
  pt?: number | WimSpacing;
  /** Padding right */
  pr?: number | WimSpacing;
  /** Padding bottom */
  pb?: number | WimSpacing;
  /** Padding left */
  pl?: number | WimSpacing;
  /** Padding horizontal */
  px?: number | WimSpacing;
  /** Padding vertical */
  py?: number | WimSpacing;
  /** Margin */
  m?: number | WimSpacing;
  /** Margin top */
  mt?: number | WimSpacing;
  /** Margin right */
  mr?: number | WimSpacing;
  /** Margin bottom */
  mb?: number | WimSpacing;
  /** Margin left */
  ml?: number | WimSpacing;
  /** Margin horizontal */
  mx?: number | WimSpacing;
  /** Margin vertical */
  my?: number | WimSpacing;
  /** Background color */
  bg?: WimColor;
  /** Width */
  w?: number | string;
  /** Height */
  h?: number | string;
  /** Border radius */
  radius?: number | WimRadius;
  /** Box shadow */
  shadow?: WimShadow;
  /** Display */
  display?: React.CSSProperties["display"];
  /** Position */
  position?: React.CSSProperties["position"];
} & React.ComponentPropsWithoutRef<C>;

/**
 * Box is the most basic layout component.
 * It provides a way to style a div (or any other element) with common CSS properties as props.
 */
export const Box = React.forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      p,
      pt,
      pr,
      pb,
      pl,
      px,
      py,
      m,
      mt,
      mr,
      mb,
      ml,
      mx,
      my,
      bg,
      w,
      h,
      radius,
      shadow,
      display,
      position,
      style,
      className,
      children,
      ...props
    }: BoxProps<C>,
    ref: React.Ref<any>,
  ) => {
    const Component = as || "div";

    const getValue = (val?: number | string) => {
      if (typeof val === "number") return `${val}px`;
      return val;
    };

    const boxStyle: React.CSSProperties = {
      paddingTop: getValue(pt ?? py ?? p),
      paddingRight: getValue(pr ?? px ?? p),
      paddingBottom: getValue(pb ?? py ?? p),
      paddingLeft: getValue(pl ?? px ?? p),
      marginTop: getValue(mt ?? my ?? m),
      marginRight: getValue(mr ?? mx ?? m),
      marginBottom: getValue(mb ?? my ?? m),
      marginLeft: getValue(ml ?? mx ?? m),
      backgroundColor: bg,
      width: getValue(w),
      height: getValue(h),
      borderRadius: getValue(radius),
      boxShadow: shadow,
      display,
      position,
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={classNames("wim-box", className)}
        style={boxStyle}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

Box.displayName = "Box";
