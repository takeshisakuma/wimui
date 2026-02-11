import React from "react";
import PropTypes from "prop-types";
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
        ref: React.Ref<any>
    ) => {
        const Component = as || "div";

        const getValue = (val?: number | string) => {
            if (typeof val === "number") return `${val}px`;
            return val;
        };

        const boxStyle: React.CSSProperties = {
            padding: getValue(p),
            paddingTop: getValue(pt || py),
            paddingRight: getValue(pr || px),
            paddingBottom: getValue(pb || py),
            paddingLeft: getValue(pl || px),
            margin: getValue(m),
            marginTop: getValue(mt || my),
            marginRight: getValue(mr || mx),
            marginBottom: getValue(mb || my),
            marginLeft: getValue(ml || mx),
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
                className={["wim-box", className].filter(Boolean).join(" ")}
                style={boxStyle}
                {...props}
            >
                {children}
            </Component>
        );
    }
);

Box.displayName = "Box";

Box.propTypes = {
    as: PropTypes.any,
    p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    my: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    bg: PropTypes.string,
    w: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    h: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    radius: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    shadow: PropTypes.string,
    display: PropTypes.any,
    position: PropTypes.any,
};
