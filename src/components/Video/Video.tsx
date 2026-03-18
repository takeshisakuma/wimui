import React from "react";
import classNames from "classnames";
import { Icon } from "../Icon/Icon";
import { useMediaLoader } from "@/hooks/useMediaLoader";
import { useVideoPlayer } from "./hooks/useVideoPlayer";
import { VideoAdvancedMenu } from "./components/VideoAdvancedMenu";
import { VideoControls } from "./components/VideoControls";
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
  videoId?: string;
  resumePlayback?: boolean;
  playlist?: { src: string; title?: string; poster?: string }[];
  autoPlayNext?: boolean;
  qualities?: { label: string; src: string }[];
  /** 読み込み設定。"lazy" の場合に Intersection Observer が有効化されます */
  loading?: "eager" | "lazy";
  /** 読み込み完了時にフェードインさせるか */
  fadeIn?: boolean;
  /** デモ用：読み込み完了を意図的に遅らせるミリ秒 */
  demoDelay?: number;
};

export const Video = ({
  src,
  width: _width,
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
  loading = "lazy",
  fadeIn = false,
  demoDelay,
  ...props
}: VideoProps) => {
  const {
    containerRef: mediaLoaderRef,
    isLoaded,
    isIntersecting,
    notifyLoaded,
    shouldShowSkeleton,
  } = useMediaLoader({
    loading,
    src: qualities?.[0]?.src || playlist?.[0]?.src || src,
    demoDelay,
  });

  const player = useVideoPlayer({
    src,
    autoPlay,
    loop,
    muted,
    fit,
    videoId,
    resumePlayback,
    playlist,
    autoPlayNext,
    qualities,
    customControls,
    advancedControls,
    poster,
    containerRef: mediaLoaderRef,
  });

  const {
    videoRef,
    isPlaying,
    activeSrc,
    activePoster,
    showNativeControls,
    skipIndicator,
    activeMenu,
    setActiveMenu,
  } = player;

  const videoStyles: React.CSSProperties = {
    width: "100%",
    height: height || "auto",
    objectFit: player.activeFit,
    ...style,
  };

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
          fadeIn && "wim-video--fade-in",
          fadeIn && isLoaded && "wim-video--is-loaded",
          shouldShowSkeleton && "wim-video--loading",
        )}
        ref={mediaLoaderRef}
      >
        {/* eslint-disable jsx-a11y/media-has-caption */}
        {isIntersecting && (
          <video
            ref={videoRef}
            src={activeSrc}
            className="wim-video"
            style={videoStyles}
            autoPlay={autoPlay && isLoaded}
            loop={loop && (!playlist || playlist.length <= 1)}
            muted={muted}
            controls={showNativeControls && controls}
            poster={activePoster}
            preload={preload}
            playsInline
            onTimeUpdate={player.handleTimeUpdate}
            onLoadedMetadata={player.handleLoadedMetadata}
            onLoadedData={notifyLoaded}
            onEnded={player.handleEnded}
            onPlay={() => {}}
            onPause={() => {}}
            onClick={player.handleVideoClick}
            {...props}
          />
        )}
        {/* eslint-enable jsx-a11y/media-has-caption */}

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
          // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
          <div
            className="wim-video-custom-controls"
            onClick={() => activeMenu && setActiveMenu(null)}
          >
            {advancedControls && (
              <VideoAdvancedMenu
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                qualities={qualities}
                currentQualityIndex={player.currentQualityIndex}
                handleQualityChange={player.handleQualityChange}
                playbackRate={player.playbackRate}
                setPlaybackRate={player.setPlaybackRate}
                activeFit={player.activeFit}
                setActiveFit={player.setActiveFit}
                playlist={playlist}
                currentPlayIndex={player.currentPlayIndex}
                playPlaylistItem={player.playPlaylistItem}
              />
            )}

            <VideoControls
              playlist={playlist}
              advancedControls={advancedControls}
              currentPlayIndex={player.currentPlayIndex}
              setCurrentPlayIndex={player.setCurrentPlayIndex}
              skip={player.skip}
              isPlaying={isPlaying}
              togglePlay={player.togglePlay}
              currentTime={player.currentTime}
              duration={player.duration}
              handleSeek={player.handleSeek}
              volume={player.volume}
              isMuted={player.isMuted}
              toggleMute={player.toggleMute}
              handleVolumeChange={player.handleVolumeChange}
              activeMenu={activeMenu}
              setActiveMenu={setActiveMenu}
              togglePiP={player.togglePiP}
              isFullscreen={player.isFullscreen}
              toggleFullscreen={player.toggleFullscreen}
              formatTime={player.formatTime}
            />
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="wim-video__caption">{caption}</figcaption>
      )}
    </figure>
  );
};
