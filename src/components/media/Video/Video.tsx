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
  /** Source URL of the video */
  src?: string;
  /** Width of the video */
  width?: string | number;
  /** Height of the video */
  height?: string | number;
  /** Whether to start playing automatically */
  autoPlay?: boolean;
  /** Whether to loop playback */
  loop?: boolean;
  /** Whether to start muted */
  muted?: boolean;
  /** Whether to show playback controls */
  controls?: boolean;
  /** Poster image shown before playback */
  poster?: string;
  /** Corner radius size */
  radius?: MediaRadius;
  /** Whether to show a shadow */
  shadow?: boolean;
  /** Whether to show a border */
  border?: boolean;
  /** How the video fits its box */
  fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  /** Preload behavior */
  preload?: "auto" | "metadata" | "none";
  /** Caption shown below the video */
  caption?: React.ReactNode;
  /** Whether to use the custom control bar instead of native controls */
  customControls?: boolean;
  /** Whether to enable advanced controls (quality, playback rate, etc.) */
  advancedControls?: boolean;
  /** Unique ID used to persist and resume playback position */
  videoId?: string;
  /** Whether to resume playback from the last saved position */
  resumePlayback?: boolean;
  /** Playlist of videos to play in sequence */
  playlist?: { src: string; title?: string; poster?: string }[];
  /** Whether to automatically play the next playlist item */
  autoPlayNext?: boolean;
  /** Selectable quality sources */
  qualities?: { label: string; src: string }[];
  /** Loading behavior. With "lazy", an Intersection Observer is enabled. */
  loading?: "eager" | "lazy";
  /** Whether to fade in when loading completes */
  fadeIn?: boolean;
  /** Demo only: milliseconds to intentionally delay load completion */
  demoDelay?: number;
  /** Labels for manual translation */
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
    // `role="region"` は付けない。`figure` に許されるロールは figure / group /
    // none / presentation だけで、`region` は ARIA in HTML 違反になる
    // （axe-core 4.13 の `aria-allowed-role` が検出。T202）。`aria-label` は
    // figure ロールの名前として残るので、読み上げの手がかりは失われない。
    // `Audio` / `Image` も figure だが、どちらも最初からロールを付けていない。
    <figure
      className={classNames("wim-video", styles.root, className)}
      style={{ width: "100%" }}
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
