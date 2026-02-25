import React from "react";
import classNames from "classnames";
import "./box.scss";

export type BoxProps<C extends React.ElementType = "div"> = {
  /** The component used for the root node. Either a string to use a HTML element or a component. */
  as?: C;
  /** Padding */
  p?: number | string;
  /** Padding top */
  pt?: number | string;
  /** Padding right */
  pr?: number | string;
  /** Padding bottom */
  pb?: number | string;
  /** Padding left */
  pl?: number | string;
  /** Padding horizontal */
  px?: number | string;
  /** Padding vertical */
  py?: number | string;
  /** Margin */
  m?: number | string;
  /** Margin top */
  mt?: number | string;
  /** Margin right */
  mr?: number | string;
  /** Margin bottom */
  mb?: number | string;
  /** Margin left */
  ml?: number | string;
  /** Margin horizontal */
  mx?: number | string;
  /** Margin vertical */
  my?: number | string;
  /** Background color */
  bg?: string;
  /** Width */
  w?: number | string;
  /** Height */
  h?: number | string;
  /** Border radius */
  radius?: number | string;
  /** Box shadow */
  shadow?: string;
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
