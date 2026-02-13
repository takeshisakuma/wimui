import React from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
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
    customControls?: boolean;
    advancedControls?: boolean;
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
    customControls = false,
    advancedControls = false,
    ...props
}: VideoProps) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [currentTime, setCurrentTime] = React.useState(0);
    const [duration, setDuration] = React.useState(0);
    const [volume, setVolume] = React.useState(1);
    const [isMuted, setIsMuted] = React.useState(muted);
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    // Advanced state
    const [playbackRate, setPlaybackRate] = React.useState(1.0);
    const [isLooping, setIsLooping] = React.useState(loop);

    const shouldUseCustom = customControls || advancedControls;

    React.useEffect(() => {
        if (autoPlay && videoRef.current) {
            videoRef.current.play().catch((error) => {
                console.warn("Autoplay was prevented:", error);
            });
        }
    }, [autoPlay]);

    React.useEffect(() => {
        if (videoRef.current) {
            videoRef.current.volume = volume;
            videoRef.current.muted = isMuted;
            videoRef.current.playbackRate = playbackRate;
            videoRef.current.loop = isLooping;
        }
    }, [volume, isMuted, playbackRate, isLooping]);

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // ... existing handlers ...

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const handleLoadedMetadata = () => {
        if (videoRef.current) {
            setDuration(videoRef.current.duration);
        }
    };

    const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
        const time = parseFloat(e.target.value);
        if (videoRef.current) {
            videoRef.current.currentTime = time;
            setCurrentTime(time);
        }
    };

    const skip = (seconds: number) => {
        if (videoRef.current) {
            videoRef.current.currentTime += seconds;
            setCurrentTime(videoRef.current.currentTime);
        }
    };

    const togglePlaybackRate = () => {
        const rates = [0.5, 1.0, 1.25, 1.5, 2.0];
        const currentIndex = rates.indexOf(playbackRate);
        const nextRate = rates[(currentIndex + 1) % rates.length];
        setPlaybackRate(nextRate);
    };

    const toggleLoopState = () => {
        setIsLooping(!isLooping);
    };

    const togglePiP = async () => {
        if (!videoRef.current) return;
        try {
            if (document.pictureInPictureElement) {
                await document.exitPictureInPicture();
            } else {
                await videoRef.current.requestPictureInPicture();
            }
        } catch (error) {
            console.error("Failed to toggle PiP mode:", error);
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

    const toggleFullscreen = () => {
        if (!containerRef.current) return;

        if (!document.fullscreenElement) {
            containerRef.current.requestFullscreen().catch((err) => {
                console.warn(`Error attempting to enable fullscreen mode: ${err.message} (${err.name})`);
            });
            setIsFullscreen(true);
        } else {
            document.exitFullscreen();
            setIsFullscreen(false);
        }
    };

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };



    const videoStyles: React.CSSProperties = {
        width: width || "100%",
        // Height needs careful handling with aspect ratio, but for now allow override or auto
        height: height || "auto",
        objectFit: fit,
        ...style,
    };

    // When custom controls are active, force native controls off
    const showNativeControls = customControls ? false : controls;

    return (
        <figure
            className={classNames("wim-video-container", className)}
            style={{ width: width || "100%" }}
        >
            <div
                className={classNames(
                    "wim-video-inner",
                    radius !== "none" && `wim-video--radius-${radius}`,
                    shadow && "wim-video--shadow",
                    border && "wim-video--border",
                    customControls && "wim-video--custom",
                )}
                ref={containerRef}
            >
                {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
                <video
                    ref={videoRef}
                    src={src}
                    className="wim-video"
                    style={videoStyles}
                    autoPlay={autoPlay}
                    loop={loop}
                    muted={muted}
                    controls={showNativeControls}
                    poster={poster}
                    preload={preload}
                    playsInline
                    onTimeUpdate={handleTimeUpdate}
                    onLoadedMetadata={handleLoadedMetadata}
                    onEnded={() => setIsPlaying(false)}
                    onPlay={() => setIsPlaying(true)}
                    onPause={() => setIsPlaying(false)}
                    onClick={customControls ? togglePlay : undefined}
                    {...props}
                />

                {customControls && (
                    <div className="wim-video-custom-controls">
                        <div className="wim-video-controls-bottom">
                            <button
                                type="button"
                                className="wim-video-btn wim-video-btn--play"
                                onClick={(e) => { e.stopPropagation(); togglePlay(); }}
                                aria-label={isPlaying ? "Pause" : "Play"}
                            >
                                <Icon name={isPlaying ? "PauseIcon" : "PlayIcon"} size="small" />
                            </button>

                            <div className="wim-video-time-container">
                                <span className="wim-video-time__current">{formatTime(currentTime)}</span>
                                <div className="wim-video-progress-container">
                                    <input
                                        type="range"
                                        min="0"
                                        max={duration || 0}
                                        value={currentTime}
                                        onChange={handleSeek}
                                        className="wim-video-progress"
                                        aria-label="Seek"
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                    <div
                                        className="wim-video-progress-fill"
                                        style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                                    />
                                </div>
                                <span className="wim-video-time__total">{formatTime(duration)}</span>
                            </div>

                            <div className="wim-video-volume-container">
                                <button
                                    type="button"
                                    className="wim-video-btn wim-video-btn--volume"
                                    onClick={(e) => { e.stopPropagation(); toggleMute(); }}
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
                                    onChange={(e) => { e.stopPropagation(); handleVolumeChange(e); }}
                                    className="wim-video-volume"
                                    aria-label="Volume"
                                    onClick={(e) => e.stopPropagation()}
                                />
                            </div>

                            <button
                                type="button"
                                className="wim-video-btn wim-video-btn--fullscreen"
                                onClick={(e) => { e.stopPropagation(); toggleFullscreen(); }}
                                aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
                            >
                                <Icon name={isFullscreen ? "MinimizeIcon" : "MaximizeIcon"} size="small" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
            {caption && <figcaption className="wim-video__caption">{caption}</figcaption>}
        </figure>
    );
};


