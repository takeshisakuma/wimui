import React from "react";
import PropTypes from "prop-types";
import "./video.scss";

type VideoProps = React.ComponentPropsWithoutRef<"video"> & {
    src: string;
    width?: string | number;
    height?: string | number;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    poster?: string;
    radius?: "none" | "small" | "medium" | "large" | "full";
    shadow?: boolean;
    border?: boolean;
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    preload?: "auto" | "metadata" | "none";
    caption?: string;
};

export const Video = ({
    src,
    width,
    height,
    autoPlay = false,
    loop = false,
    muted = false,
    controls = true,
    poster,
    radius = "none",
    shadow = false,
    border = false,
    fit = "cover",
    preload,
    caption,
    className,
    style,
    ...props
}: VideoProps) => {
    const innerClasses = [
        "wim-video-inner",
        radius !== "none" && `wim-video--radius-${radius}`,
        shadow && "wim-video--shadow",
        border && "wim-video--border",
    ]
        .filter(Boolean)
        .join(" ");

    const videoStyles: React.CSSProperties = {
        width: width || "100%",
        height: height || "auto",
        objectFit: fit,
        ...style,
    };

    return (
        <figure className={`wim-video-container ${className || ""}`} style={{ width: width || "100%" }}>
            <div className={innerClasses}>
                <video
                    src={src}
                    className="wim-video"
                    style={videoStyles}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    controls={controls}
                    poster={poster}
                    preload={preload}
                    playsInline
                    {...props}
                />
            </div>
            {caption && <figcaption className="wim-video__caption">{caption}</figcaption>}
        </figure>
    );
};

Video.propTypes = {
    src: PropTypes.string.isRequired,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    controls: PropTypes.bool,
    poster: PropTypes.string,
    radius: PropTypes.oneOf(["none", "small", "medium", "large", "full"]),
    shadow: PropTypes.bool,
    border: PropTypes.bool,
    fit: PropTypes.oneOf(["contain", "cover", "fill", "none", "scale-down"]),
    preload: PropTypes.oneOf(["auto", "metadata", "none"]),
    caption: PropTypes.string,
};
