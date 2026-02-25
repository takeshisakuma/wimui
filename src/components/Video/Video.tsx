import React from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import "./video.scss";

type VideoProps = Omit<React.ComponentPropsWithoutRef<"video">, "src"> & {
  src?: string;
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
  // New properties
  videoId?: string;
  resumePlayback?: boolean;
  playlist?: { src: string; title?: string; poster?: string }[];
  autoPlayNext?: boolean;
  qualities?: { label: string; src: string }[];
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
  videoId,
  resumePlayback = false,
  playlist,
  autoPlayNext = false,
  qualities,
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
  const [activeFit, setActiveFit] = React.useState(fit);
  const [currentPlayIndex, setCurrentPlayIndex] = React.useState(0);
  const [currentQualityIndex, setCurrentQualityIndex] = React.useState(0);
  const [activeMenu, setActiveMenu] = React.useState<
    "main" | "quality" | "rate" | "fit" | "playlist" | null
  >(null);

  const activeSrc =
    qualities && qualities.length > 0
      ? qualities[currentQualityIndex].src
      : playlist && playlist.length > 0
        ? playlist[currentPlayIndex].src
        : src;

  const activePoster =
    playlist && playlist.length > 0
      ? playlist[currentPlayIndex].poster || poster
      : poster;

  // Load resume time on mount or video change
  React.useEffect(() => {
    if (videoId && resumePlayback && videoRef.current) {
      const trackId =
        playlist && playlist.length > 0
          ? `${videoId}-${currentPlayIndex}`
          : videoId;
      const savedTime = localStorage.getItem(`wimui-video-resume-${trackId}`);
      if (savedTime) {
        videoRef.current.currentTime = parseFloat(savedTime);
        setCurrentTime(parseFloat(savedTime));
      }
    }
  }, [videoId, resumePlayback, currentPlayIndex, playlist]);

  React.useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay was prevented:", error);
      });
    }
  }, [autoPlay, activeSrc]); // replay if src changes and autoplay is true

  React.useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
      videoRef.current.playbackRate = playbackRate;
      videoRef.current.loop = loop && (!playlist || playlist.length <= 1);
    }
  }, [volume, isMuted, playbackRate, loop, playlist]);

  // When quality changes, try to resume the current time
  const handleQualityChange = (index: number) => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    const wasPlaying = !videoRef.current.paused;

    setCurrentQualityIndex(index);

    // Wait for next tick so src is updated
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
        if (wasPlaying) videoRef.current.play();
      }
    }, 50);
    setActiveMenu("main");
  };

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

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);

      // Save resume time
      if (
        videoId &&
        resumePlayback &&
        Math.floor(time) % 5 === 0 &&
        duration > 0 &&
        time < duration - 2
      ) {
        const trackId =
          playlist && playlist.length > 0
            ? `${videoId}-${currentPlayIndex}`
            : videoId;
        localStorage.setItem(`wimui-video-resume-${trackId}`, time.toString());
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleEnded = () => {
    // Clear saved resume time
    if (videoId && resumePlayback) {
      const trackId =
        playlist && playlist.length > 0
          ? `${videoId}-${currentPlayIndex}`
          : videoId;
      localStorage.removeItem(`wimui-video-resume-${trackId}`);
    }

    if (
      playlist &&
      playlist.length > 0 &&
      autoPlayNext &&
      currentPlayIndex < playlist.length - 1
    ) {
      setCurrentPlayIndex((prev) => prev + 1);
      if (videoRef.current) {
        setTimeout(() => {
          videoRef.current?.play();
        }, 100);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
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

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.warn(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
        );
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  // Listen to fullscreen changes (e.g. Escape key)
  React.useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const skip = (seconds: number) => {
    if (videoRef.current) {
      const newTime = Math.max(
        0,
        Math.min(videoRef.current.currentTime + seconds, duration),
      );
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const togglePiP = async () => {
    if (!videoRef.current) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled) {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (error) {
      console.error("Failed to toggle PiP mode:", error);
    }
  };

  // Keyboard Shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ignore if active element is an input or textarea
      if (
        ["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement).tagName,
        ) ||
        !(customControls || advancedControls)
      )
        return;

      // Check if focus is within our container or we're in fullscreen
      const isOurVideoFocused =
        containerRef.current?.contains(document.activeElement) ||
        document.fullscreenElement === containerRef.current;
      if (!isOurVideoFocused && document.activeElement !== document.body)
        return;

      switch (e.key.toLowerCase()) {
        case " ":
        case "k":
          e.preventDefault();
          togglePlay();
          break;
        case "arrowright":
          e.preventDefault();
          skip(10);
          break;
        case "arrowleft":
          e.preventDefault();
          skip(-10);
          break;
        case "arrowup":
          e.preventDefault();
          const newVolUp = Math.min(1, volume + 0.1);
          setVolume(newVolUp);
          if (newVolUp > 0) setIsMuted(false);
          break;
        case "arrowdown":
          e.preventDefault();
          const newVolDown = Math.max(0, volume - 0.1);
          setVolume(newVolDown);
          break;
        case "m":
          e.preventDefault();
          toggleMute();
          break;
        case "f":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "p":
          e.preventDefault();
          togglePiP();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPlaying, volume, duration, customControls, advancedControls]);

  // Double Tap Skip for Mobile
  const [lastTapInfo, setLastTapInfo] = React.useState<{
    time: number;
    x: number;
  } | null>(null);
  const [skipIndicator, setSkipIndicator] = React.useState<{
    show: boolean;
    direction: "forward" | "backward";
  }>({ show: false, direction: "forward" });

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    if (!customControls && !advancedControls) return;

    const currentTimeMs = new Date().getTime();
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const width = rect.width;

    if (lastTapInfo && currentTimeMs - lastTapInfo.time < 300) {
      // Double tap detected
      if (xPos > width / 2) {
        // Right side - Skip Forward
        skip(10);
        setSkipIndicator({ show: true, direction: "forward" });
      } else {
        // Left side - Skip Backward
        skip(-10);
        setSkipIndicator({ show: true, direction: "backward" });
      }

      // Hide indicator after animation
      setTimeout(
        () => setSkipIndicator({ show: false, direction: "forward" }),
        600,
      );
      setLastTapInfo(null);
    } else {
      // Single tap behavior (wait slightly to ensure it's not a double tap)
      setLastTapInfo({ time: currentTimeMs, x: xPos });
      setTimeout(() => {
        if (Date.now() - currentTimeMs >= 290) {
          togglePlay();
        }
      }, 300);
    }
  };

  const videoStyles: React.CSSProperties = {
    width: "100%",
    height: height || "auto",
    objectFit: activeFit,
    ...style,
  };

  const showNativeControls =
    customControls || advancedControls ? false : controls;

  const rates = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
  const fitOptions = [
    "contain",
    "cover",
    "fill",
    "scale-down",
    "none",
  ] as const;

  return (
    <figure
      className={classNames("wim-video-container", className)}
      style={{ width: "100%" }}
    >
      <div
        className={classNames(
          "wim-video-inner",
          radius !== "none" && `wim-video--radius-${radius}`,
          shadow && "wim-video--shadow",
          border && "wim-video--border",
          (customControls || advancedControls) && "wim-video--custom",
        )}
        ref={containerRef}
      >
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          ref={videoRef}
          src={activeSrc}
          className="wim-video"
          style={videoStyles}
          autoPlay={autoPlay}
          loop={loop && (!playlist || playlist.length <= 1)}
          muted={muted}
          controls={showNativeControls}
          poster={activePoster}
          preload={preload}
          playsInline
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onClick={handleVideoClick}
          {...props}
        />

        {skipIndicator.show && (
          <div className="wim-video-skip-indicator">
            <Icon
              name={
                skipIndicator.direction === "forward"
                  ? "ChevronRightIcon"
                  : "ChevronLeftIcon"
              }
              size="large"
            />
            <Icon
              name={
                skipIndicator.direction === "forward"
                  ? "ChevronRightIcon"
                  : "ChevronLeftIcon"
              }
              size="large"
            />
            <Icon
              name={
                skipIndicator.direction === "forward"
                  ? "ChevronRightIcon"
                  : "ChevronLeftIcon"
              }
              size="large"
            />
            <span>10秒</span>
          </div>
        )}

        {(customControls || advancedControls) && (
          <div
            className="wim-video-custom-controls"
            onClick={() => activeMenu && setActiveMenu(null)}
          >
            {advancedControls && activeMenu === "main" && (
              <div
                className="wim-video-advanced-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="wim-video-menu-title">
                  <span>設定</span>
                </div>
                <div className="wim-video-menu-items">
                  {qualities && qualities.length > 0 && (
                    <button
                      className="wim-video-menu-btn"
                      onClick={() => setActiveMenu("quality")}
                    >
                      <span>画質</span>
                      <span style={{ opacity: 0.7 }}>
                        {qualities[currentQualityIndex].label}{" "}
                        <Icon name="ChevronRightIcon" size="small" />
                      </span>
                    </button>
                  )}
                  <button
                    className="wim-video-menu-btn"
                    onClick={() => setActiveMenu("rate")}
                  >
                    <span>再生速度</span>
                    <span style={{ opacity: 0.7 }}>
                      {playbackRate}x{" "}
                      <Icon name="ChevronRightIcon" size="small" />
                    </span>
                  </button>
                  <button
                    className="wim-video-menu-btn"
                    onClick={() => setActiveMenu("fit")}
                  >
                    <span>アスペクト比</span>
                    <span style={{ opacity: 0.7 }}>
                      {activeFit} <Icon name="ChevronRightIcon" size="small" />
                    </span>
                  </button>
                </div>
              </div>
            )}

            {advancedControls && activeMenu === "quality" && (
              <div
                className="wim-video-advanced-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="wim-video-menu-title">
                  <button
                    onClick={() => setActiveMenu("main")}
                    className="wim-video-btn"
                  >
                    <Icon name="ChevronLeftIcon" size="small" />
                  </button>
                  <span>画質</span>
                </div>
                <div className="wim-video-menu-items">
                  {qualities?.map((q, i) => (
                    <button
                      key={i}
                      className="wim-video-menu-btn"
                      data-active={currentQualityIndex === i}
                      onClick={() => handleQualityChange(i)}
                    >
                      {currentQualityIndex === i && (
                        <Icon name="CheckIcon" size="small" />
                      )}
                      <span
                        style={{
                          marginLeft: currentQualityIndex === i ? 0 : 24,
                        }}
                      >
                        {q.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {advancedControls && activeMenu === "rate" && (
              <div
                className="wim-video-advanced-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="wim-video-menu-title">
                  <button
                    onClick={() => setActiveMenu("main")}
                    className="wim-video-btn"
                  >
                    <Icon name="ChevronLeftIcon" size="small" />
                  </button>
                  <span>再生速度</span>
                </div>
                <div className="wim-video-menu-items">
                  {rates.map((r) => (
                    <button
                      key={r}
                      className="wim-video-menu-btn"
                      data-active={playbackRate === r}
                      onClick={() => {
                        setPlaybackRate(r);
                        setActiveMenu("main");
                      }}
                    >
                      {playbackRate === r && (
                        <Icon name="CheckIcon" size="small" />
                      )}
                      <span style={{ marginLeft: playbackRate === r ? 0 : 24 }}>
                        {r === 1.0 ? "標準" : `${r}x`}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {advancedControls && activeMenu === "fit" && (
              <div
                className="wim-video-advanced-menu"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="wim-video-menu-title">
                  <button
                    onClick={() => setActiveMenu("main")}
                    className="wim-video-btn"
                  >
                    <Icon name="ChevronLeftIcon" size="small" />
                  </button>
                  <span>アスペクト比</span>
                </div>
                <div className="wim-video-menu-items">
                  {fitOptions.map((f) => (
                    <button
                      key={f}
                      className="wim-video-menu-btn"
                      data-active={activeFit === f}
                      onClick={() => {
                        setActiveFit(f);
                        setActiveMenu("main");
                      }}
                    >
                      {activeFit === f && (
                        <Icon name="CheckIcon" size="small" />
                      )}
                      <span style={{ marginLeft: activeFit === f ? 0 : 24 }}>
                        {f}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {advancedControls && activeMenu === "playlist" && (
              <div
                className="wim-video-advanced-menu"
                onClick={(e) => e.stopPropagation()}
                style={{ bottom: 60, right: 16, width: 250 }}
              >
                <div className="wim-video-menu-title">
                  <span>プレイリスト</span>
                  <button
                    onClick={() => setActiveMenu(null)}
                    style={{ marginLeft: "auto" }}
                    className="wim-video-btn"
                  >
                    <Icon name="CloseIcon" size="small" />
                  </button>
                </div>
                <div className="wim-video-menu-items">
                  {playlist?.map((p, i) => (
                    <button
                      key={i}
                      className="wim-video-menu-btn"
                      data-active={currentPlayIndex === i}
                      onClick={() => {
                        setCurrentPlayIndex(i);
                        if (videoRef.current) {
                          videoRef.current.currentTime = 0;
                          setTimeout(() => videoRef.current?.play(), 100);
                        }
                      }}
                      style={{
                        flexDirection: "column",
                        alignItems: "flex-start",
                        gap: 4,
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 8,
                        }}
                      >
                        {currentPlayIndex === i ? (
                          <Icon name="PlayIcon" size="small" />
                        ) : (
                          <div style={{ width: 20 }} />
                        )}
                        <span>{p.title || `Track ${i + 1}`}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="wim-video-controls-bottom">
              {playlist && playlist.length > 0 && advancedControls && (
                <button
                  type="button"
                  className="wim-video-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(
                      activeMenu === "playlist" ? null : "playlist",
                    );
                  }}
                  aria-label="Playlist"
                >
                  <Icon name="DocumentIcon" size="small" />
                </button>
              )}

              {advancedControls && (
                <button
                  type="button"
                  className="wim-video-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    skip(-10);
                  }}
                  aria-label="Skip Backward 10s"
                >
                  <Icon name="ChevronLeftIcon" size="small" />
                </button>
              )}

              <button
                type="button"
                className="wim-video-btn wim-video-btn--play"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                <Icon
                  name={isPlaying ? "PauseIcon" : "PlayIcon"}
                  size="small"
                />
              </button>

              {advancedControls && (
                <button
                  type="button"
                  className="wim-video-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    skip(10);
                  }}
                  aria-label="Skip Forward 10s"
                >
                  <Icon name="ChevronRightIcon" size="small" />
                </button>
              )}

              {playlist && playlist.length > 0 && advancedControls && (
                <button
                  type="button"
                  className="wim-video-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    if (currentPlayIndex < playlist.length - 1) {
                      setCurrentPlayIndex((p) => p + 1);
                    }
                  }}
                  disabled={currentPlayIndex >= playlist.length - 1}
                  style={{
                    opacity: currentPlayIndex >= playlist.length - 1 ? 0.5 : 1,
                  }}
                  aria-label="Next track"
                >
                  {/* Using play icon for next as placeholder, or just skip forward icon if available */}
                  <Icon name="ChevronRightIcon" size="medium" />
                </button>
              )}

              <div className="wim-video-time-container">
                <span className="wim-video-time__current">
                  {formatTime(currentTime)}
                </span>
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
                    style={{
                      width: `${(currentTime / (duration || 1)) * 100}%`,
                    }}
                  />
                </div>
                <span className="wim-video-time__total">
                  {formatTime(duration)}
                </span>
              </div>

              <div className="wim-video-volume-container">
                <button
                  type="button"
                  className="wim-video-btn wim-video-btn--volume"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleMute();
                  }}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  <Icon
                    name={isMuted || volume === 0 ? "MuteIcon" : "VolumeIcon"}
                    size="small"
                  />
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={(e) => {
                    e.stopPropagation();
                    handleVolumeChange(e);
                  }}
                  className="wim-video-volume"
                  aria-label="Volume"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>

              {advancedControls && (
                <button
                  type="button"
                  className="wim-video-btn wim-video-btn--settings"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveMenu(activeMenu === "main" ? null : "main");
                  }}
                  aria-label="Settings"
                >
                  <Icon name="SettingsIcon" size="small" />
                </button>
              )}

              {advancedControls && (
                <button
                  type="button"
                  className="wim-video-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePiP();
                  }}
                  aria-label="Picture in Picture"
                  title="ピクチャーインピクチャー"
                >
                  {/* Using Expand icon as substitute for PiP icon */}
                  <Icon name="MonitorIcon" size="small" />
                </button>
              )}

              <button
                type="button"
                className="wim-video-btn wim-video-btn--fullscreen"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFullscreen();
                }}
                aria-label={isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              >
                <Icon
                  name={isFullscreen ? "MinimizeIcon" : "MaximizeIcon"}
                  size="small"
                />
              </button>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="wim-video__caption">{caption}</figcaption>
      )}
    </figure>
  );
};
