import React from "react";
import type { MediaRadius } from "../../../types/tokens";
import classNames from "classnames";
import { Icon } from "../../media/Icon/Icon";
import { useMediaLoader } from "@/hooks/useMediaLoader";
import { useVideoPlayer } from "./hooks/useVideoPlayer";
import { VideoAdvancedMenu } from "./components/VideoAdvancedMenu";
import { VideoControls, type VideoLabels } from "./components/VideoControls";
import styles from "./video.module.scss";

export type { VideoLabels };

type VideoProps = Omit<React.ComponentPropsWithoutRef<"video">, "src"> & {
  src?: string;
  width?: string | number;
  height?: string | number;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  poster?: string;
  radius?: MediaRadius;
  shadow?: boolean;
  border?: boolean;
  fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  preload?: "auto" | "metadata" | "none";
  caption?: React.ReactNode;
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
  /** 手動翻訳用のラベル */
  labels?: VideoLabels;
  /** Subtitle/caption tracks passed as <track> elements (kind, src, srcLang, label). */
  tracks?: React.ComponentPropsWithoutRef<"track">[];
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
  labels = {},
  tracks,
  ...props
}: VideoProps) => {
  const { videoAriaLabel = "Video", seconds = "s" } = labels;
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

  const radiusClass = radius !== "none" ? styles[`radius${radius.charAt(0).toUpperCase() + radius.slice(1)}`] : null;

  return (
    <figure
      className={classNames(styles.root, className)}
      style={{ width: "100%" }}
      role="region"
      aria-label={videoAriaLabel}
      data-testid="video-root"
    >
      <div
        className={classNames(
          styles.inner,
          radiusClass,
          shadow && styles.shadow,
          border && styles.border,
          (customControls || advancedControls) && styles.custom,
          fadeIn && styles.fadeIn,
          fadeIn && isLoaded && styles.isLoaded,
          shouldShowSkeleton && styles.loading,
        )}
        ref={mediaLoaderRef}
        data-testid="video-inner"
      >
        {/* Caption tracks are optional; consumers provide them via the `tracks` prop. */}
        {/* eslint-disable jsx-a11y/media-has-caption */}
        {isIntersecting && (
          <video
            ref={videoRef}
            src={activeSrc}
            className={styles.video}
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
            data-testid="video-element"
            {...props}
          >
            {tracks?.map((track, i) => <track key={i} {...track} />)}
          </video>
        )}
        {/* eslint-enable jsx-a11y/media-has-caption */}

        {skipIndicator.show && (
          <div className={styles.skipIndicator}>
            <Icon
              name={
                skipIndicator.direction === "forward"
                  ? "ChevronRightIcon"
                  : "ChevronLeftIcon"
              }
              size="lg"
            />
            <Icon
              name={
                skipIndicator.direction === "forward"
                  ? "ChevronRightIcon"
                  : "ChevronLeftIcon"
              }
              size="lg"
            />
            <Icon
              name={
                skipIndicator.direction === "forward"
                  ? "ChevronRightIcon"
                  : "ChevronLeftIcon"
              }
              size="lg"
            />
            <span>10{seconds}</span>
          </div>
        )}

        {(customControls || advancedControls) && (
          <div
            role="none"
            className={styles.customControls}
            onClick={() => activeMenu && setActiveMenu(null)}
          >
            {advancedControls && (
              <VideoAdvancedMenu
                styles={styles}
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
                labels={labels}
              />
            )}

            <VideoControls
              styles={styles}
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
              labels={labels}
            />
          </div>
        )}
      </div>
      {caption && (
        <figcaption className={styles.caption} data-testid="video-caption">{caption}</figcaption>
      )}
    </figure>
  );
};
