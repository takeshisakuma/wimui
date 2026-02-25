import React from "react";
import classNames from "classnames";
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
  const imageStyles: React.CSSProperties = {
    width: "100%",
    height: height || "auto",
    objectFit: fit,
    ...style,
  };

  return (
    <figure
      className={classNames("wim-image-container", className)}
      style={{ maxWidth: width || "100%", width: "100%" }}
    >
      <div
        className={classNames(
          "wim-image-inner",
          radius !== "none" && `wim-image--radius-${radius}`,
          shadow && "wim-image--shadow",
          border && "wim-image--border",
        )}
      >
        <img
          src={src}
          alt={alt}
          className="wim-image"
          style={imageStyles}
          loading={loading}
          {...props}
        />
      </div>
      {caption && (
        <figcaption className="wim-image__caption">{caption}</figcaption>
      )}
    </figure>
  );
};
