import React from "react";
import PropTypes from "prop-types";
import "./audio.scss";

type AudioProps = React.ComponentPropsWithoutRef<"audio"> & {
    src: string;
    autoPlay?: boolean;
    loop?: boolean;
    muted?: boolean;
    controls?: boolean;
    radius?: "none" | "small" | "medium" | "large" | "full";
    shadow?: boolean;
    border?: boolean;
    caption?: string;
};

export const Audio = ({
    src,
    autoPlay = false,
    loop = false,
    muted = false,
    controls = true,
    radius = "full",
    shadow = false,
    border = false,
    caption,
    className,
    style,
    ...props
}: AudioProps) => {
    const innerClasses = [
        "wim-audio-inner",
        radius !== "none" && `wim-audio--radius-${radius}`,
        shadow && "wim-audio--shadow",
        border && "wim-audio--border",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <figure className={`wim-audio-container ${className || ""}`} style={style}>
            <div className={innerClasses}>
                <audio
                    src={src}
                    className="wim-audio"
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    controls={controls}
                    {...props}
                />
            </div>
            {caption && <figcaption className="wim-audio__caption">{caption}</figcaption>}
        </figure>
    );
};

Audio.propTypes = {
    src: PropTypes.string.isRequired,
    autoPlay: PropTypes.bool,
    loop: PropTypes.bool,
    muted: PropTypes.bool,
    controls: PropTypes.bool,
    radius: PropTypes.oneOf(["none", "small", "medium", "large", "full"]),
    shadow: PropTypes.bool,
    border: PropTypes.bool,
    caption: PropTypes.string,
};
