import React from "react";
import PropTypes from "prop-types";
import "./image.scss";

type ImageProps = React.ComponentPropsWithoutRef<"img"> & {
    src: string;
    alt: string;
    width?: string | number;
    height?: string | number;
    radius?: "none" | "small" | "medium" | "large" | "full";
    shadow?: boolean;
    border?: boolean;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    loading?: "eager" | "lazy";
    caption?: string;
};

export const Image = ({
    src,
    alt,
    width,
    height,
    radius = "none",
    shadow = false,
    border = false,
    fit = "cover",
    loading,
    caption,
    className,
    style,
    ...props
}: ImageProps) => {
    const innerClasses = [
        "wim-image-inner",
        radius !== "none" && `wim-image--radius-${radius}`,
        shadow && "wim-image--shadow",
        border && "wim-image--border",
    ]
        .filter(Boolean)
        .join(" ");

    const imageStyles: React.CSSProperties = {
        width: width || "100%",
        height: height || "auto",
        objectFit: fit,
        ...style,
    };

    return (
        <figure className={`wim-image-container ${className || ""}`} style={{ width: width || "100%" }}>
            <div className={innerClasses}>
                <img
                    src={src}
                    alt={alt}
                    className="wim-image"
                    style={imageStyles}
                    loading={loading}
                    {...props}
                />
            </div>
            {caption && <figcaption className="wim-image__caption">{caption}</figcaption>}
        </figure>
    );
};

Image.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    radius: PropTypes.oneOf(["none", "small", "medium", "large", "full"]),
    shadow: PropTypes.bool,
    border: PropTypes.bool,
    fit: PropTypes.oneOf(["contain", "cover", "fill", "none", "scale-down"]),
    loading: PropTypes.oneOf(["eager", "lazy"]),
    caption: PropTypes.string,
};
