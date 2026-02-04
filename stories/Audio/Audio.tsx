import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { Icon } from "../Icon/Icon";
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
    preload?: "auto" | "metadata" | "none";
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
    preload,
    caption,
    className,
    style,
    customControls = false,
    ...props
}: AudioProps & { customControls?: boolean }) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [volume, setVolume] = React.useState(1);
    const [isMuted, setIsMuted] = React.useState(muted);

    useEffect(() => {
        if (autoPlay && audioRef.current) {
            audioRef.current.play().catch((error) => {
                console.warn("Autoplay was prevented:", error);
            });
        }
    }, [autoPlay]);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = volume;
            audioRef.current.muted = isMuted;
        }
    }, [volume, isMuted]);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (audioRef.current) {
            setDuration(audioRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (audioRef.current) {
            audioRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (newVolume > 0) {
            setIsMuted(false);
        }
    };

    const toggleMute = () => {
        setIsMuted(!isMuted);
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    const innerClasses = [
        "wim-audio-inner",
        customControls && radius !== "none" && `wim-audio--radius-${radius}`,
        customControls && shadow && "wim-audio--shadow",
        customControls && border && "wim-audio--border",
        customControls && "wim-audio--custom",
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <figure className={`wim-audio-container ${className || ""}`} style={style}>
            <div className={innerClasses}>
                <audio
                    ref={audioRef}
                    src={src}
                    className="wim-audio"
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted} // Initialize with prop, but controlled by state later via effect? Actually native controls logic.
                    // If customControls is true, we force controls={false} on the native element
                    controls={customControls ? false : controls}
                    preload={preload}
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    {...props}
                />
                {customControls && (
                    <div className="wim-audio-custom-controls">
                        <button
                            type="button"
                            className="wim-audio-btn wim-audio-btn--play"
                            onClick={togglePlay}
                            aria-label={isPlaying ? "Pause" : "Play"}
                        >
                            <Icon name={isPlaying ? "PauseIcon" : "PlayIcon"} size="small" />
                        </button>

                        <div className="wim-audio-time">
                            <span className="wim-audio-time__current">{formatTime(currentTime)}</span>
                            <div className="wim-audio-progress-container">
                                <input
                                    type="range"
                                    min="0"
                                    max={duration || 0}
                                    value={currentTime}
                                    onChange={handleSeek}
                                    className="wim-audio-progress"
                                    aria-label="Seek"
                                />
                                <div
                                    className="wim-audio-progress-fill"
                                    style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                                />
                            </div>
                            <span className="wim-audio-time__total">{formatTime(duration)}</span>
                        </div>

                        <div className="wim-audio-volume-container">
                            <button
                                type="button"
                                className="wim-audio-btn wim-audio-btn--volume"
                                onClick={toggleMute}
                                aria-label={isMuted ? "Unmute" : "Mute"}
                            >
                                <Icon name={isMuted || volume === 0 ? "MuteIcon" : "VolumeIcon"} size="small" />
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={isMuted ? 0 : volume}
                                onChange={handleVolumeChange}
                                className="wim-audio-volume"
                                aria-label="Volume"
                            />
                        </div>
                    </div>
                )}
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
    preload: PropTypes.oneOf(["auto", "metadata", "none"]),
    caption: PropTypes.string,
    customControls: PropTypes.bool,
};
