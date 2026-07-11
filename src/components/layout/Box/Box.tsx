import React from "react";
import classNames from "classnames";
import { Slot } from "@radix-ui/react-slot";
import {
  WimColor,
  WimSpacing,
  WimRadius,
  WimShadow,
} from "../../../types/tokens";
import {
  getColorValue,
  getSpacingValue,
  getRadiusValue,
  getShadowValue,
} from "../../../utilities/style-utils";
import { generateResponsiveVars, ResponsiveProp } from "../../layout/Grid/grid-utils";
import styles from "./box.module.scss";

export type BoxProps<C extends React.ElementType = "div"> = {

  /** The component used for the root node. Either a string to use a HTML element or a component. */
  as?: C;
  /**
   * If true, the box will be rendered as its child, merging its props onto that child.
   */
  asChild?: boolean;
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
  /** Text color */
  color?: WimColor;
  /** Width */
  w?: ResponsiveProp<number | string>;
  /** Height */
  h?: ResponsiveProp<number | string>;
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
export interface BoxComponent {
  <C extends React.ElementType = "div">(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    props: BoxProps<C> & { ref?: React.Ref<any> },
  ): React.ReactElement | null;
  displayName?: string;
}

export const Box = React.forwardRef(
  <C extends React.ElementType = "div">(
    {
      as,
      asChild = false,
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
      color,
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
    // React.forwardRef doesn't support truly generic ref types; Ref<any> is the standard workaround.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ref: React.Ref<any>,
  ) => {
    const Component = asChild ? Slot : (as || "div");

    const wVars = generateResponsiveVars(w, "--wim-box-w", (v) => getSpacingValue(v) || "");
    const hVars = generateResponsiveVars(h, "--wim-box-h", (v) => getSpacingValue(v) || "");

    const boxStyle: React.CSSProperties = {
      paddingTop: getSpacingValue(pt ?? py ?? p),
      paddingRight: getSpacingValue(pr ?? px ?? p),
      paddingBottom: getSpacingValue(pb ?? py ?? p),
      paddingLeft: getSpacingValue(pl ?? px ?? p),
      marginTop: getSpacingValue(mt ?? my ?? m),
      marginRight: getSpacingValue(mr ?? mx ?? m),
      marginBottom: getSpacingValue(mb ?? my ?? m),
      marginLeft: getSpacingValue(ml ?? mx ?? m),
      backgroundColor: getColorValue(bg),
      color: getColorValue(color),
      width:
        typeof w === "object"
          ? "var(--wim-box-w)"
          : getSpacingValue(w),
      height:
        typeof h === "object"
          ? "var(--wim-box-h)"
          : getSpacingValue(h),
      borderRadius: getRadiusValue(radius),
      boxShadow: getShadowValue(shadow),
      display,
      position,
      ...(wVars as React.CSSProperties),
      ...(hVars as React.CSSProperties),
      ...style,
    };

    return (
      <Component
        ref={ref}
        className={classNames("wim-box", 
          styles.root,
          typeof w === "object" && w !== null && styles.responsiveW,
          typeof h === "object" && h !== null && styles.responsiveH,
          className,
        )}
        style={boxStyle}
        {...props}
      >

        {children}
      </Component>
    );
  },
) as BoxComponent;

Box.displayName = "Box";
