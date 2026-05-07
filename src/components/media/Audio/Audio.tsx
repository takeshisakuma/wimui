import React, { useMemo, useEffect } from "react";
import type { WimRadiusKey } from "../../../types/tokens";
import classNames from "classnames";
import { useMediaLoader } from "@/hooks/useMediaLoader";
import { useAudioPlayer } from "./hooks/useAudioPlayer";
import { useAudioMetadata } from "./hooks/useAudioMetadata";
import { AudioCustomControls, type AudioLabels } from "./components/AudioCustomControls";
import styles from "./audio.module.scss";

export type { AudioLabels };

export type AudioTrack = {
  src: string;
  title?: string;
  artist?: string;
  coverArt?: string;
};

type AudioProps = Omit<React.ComponentPropsWithoutRef<"audio">, "src"> & {
  src?: string | string[] | AudioTrack | AudioTrack[];
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  preload?: "auto" | "metadata" | "none";
  radius?: WimRadiusKey | "none";
  shadow?: boolean;
  border?: boolean;
  caption?: React.ReactNode;
  customControls?: boolean;
  visualizer?: boolean;
  showMetadata?: boolean;
  fadeIn?: boolean | number;
  fadeOut?: boolean | number;
  crossfade?: boolean | number;
  playbackRate?: boolean;
  hotkeys?: boolean;
  presets?: boolean;
  sleepTimer?: boolean;
  /** 読み込み設定。"lazy" の場合に Intersection Observer が有効化されます */
  loading?: "eager" | "lazy";
  /** デモ用：読み込み完了を意図的に遅らせるミリ秒 */
  demoDelay?: number;
  /** 手動翻訳用のラベル */
  labels?: AudioLabels;
  /** Subtitle/caption tracks passed as <track> elements (kind, src, srcLang, label). */
  tracks?: React.ComponentPropsWithoutRef<"track">[];
};

export const Audio = ({
  src,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  radius = "none",
  shadow = false,
  border = false,
  preload,
  caption,
  className,
  style,
  customControls = false,
  visualizer = false,
  showMetadata = false,
  fadeIn = false,
  fadeOut = false,
  crossfade = false,
  playbackRate = false,
  hotkeys = false,
  presets = false,
  sleepTimer = false,
  loading = "lazy",
  demoDelay,
  labels = {},
  tracks,
  ...props
}: AudioProps) => {
  const { unknownTitle = "Unknown Title", unknownArtist = "Unknown Artist" } = labels;
  const playlist: AudioTrack[] = useMemo(() => {
    if (!src) return [];
    const arr = Array.isArray(src) ? src : [src];
    return arr.map((item) => (typeof item === "string" ? { src: item } : item));
  }, [src]);

  const {
    containerRef: mediaLoaderRef,
    isLoaded,
    isIntersecting,
    notifyLoaded,
    shouldShowSkeleton,
  } = useMediaLoader({
    loading,
    demoDelay,
    src: playlist[0]?.src,
  });

  const player = useAudioPlayer({
    playlist,
    loop,
    muted,
    fadeIn,
    fadeOut,
    crossfade,
    visualizer,
    hotkeys,
    autoPlay,
  });

  const {
    isPlaying,
    currentTrack,
    currentTrackIndex,
    activeAudioRef,
    nextAudioRef,
    canvasRef,
    handleTimeUpdate,
    handleEnded,
    setDuration,
    playActivePlayer,
  } = player;

  const { metaTitle, metaArtist, metaCover } = useAudioMetadata({
    currentTrack,
    showMetadata,
  });

  // Apply src and start playback when track changes
  useEffect(() => {
    if (!currentTrack || !activeAudioRef.current) return;
    activeAudioRef.current.src = currentTrack.src;
    if (autoPlay || isPlaying) {
      playActivePlayer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentTrackIndex, currentTrack]);

  const radiusClass = radius !== "none" ? styles[`radius${radius.charAt(0).toUpperCase() + radius.slice(1)}`] : null;

  return (
    <figure
      className={classNames(styles.root, className)}
      style={style}
      data-testid="audio-root"
    >
      <div
        ref={mediaLoaderRef}
        className={classNames(
          styles.inner,
          radiusClass,
          customControls && shadow && styles.shadow,
          customControls && border && styles.border,
          customControls && styles.custom,
          visualizer && customControls && styles.hasVisualizer,
          fadeIn && styles.fadeIn,
          fadeIn && isLoaded && styles.isLoaded,
          shouldShowSkeleton && styles.loading,
        )}
        data-testid="audio-inner"
      >
        {visualizer && customControls && (
          <canvas ref={canvasRef} className={styles.visualizerCanvas} data-testid="audio-canvas" />
        )}

        {customControls && showMetadata && (metaTitle || metaArtist || metaCover) && (
          <div
            className={styles.metadata}
            style={{ position: "relative", zIndex: 2 }}
            data-testid="audio-metadata"
          >
            {metaCover && (
              <img src={metaCover} alt="Cover" className={styles.cover} data-testid="audio-cover" />
            )}
            <div className={styles.info}>
              <div className={styles.title} data-testid="audio-title">{metaTitle || unknownTitle}</div>
              <div className={styles.artist} data-testid="audio-artist">{metaArtist || unknownArtist}</div>
            </div>
          </div>
        )}

        <div
          style={{ display: customControls ? "none" : "block", width: "100%" }}
        >
          {/* Caption tracks are optional; consumers provide them via the `tracks` prop.
              The second <audio> is a silent preload buffer with no user-facing content. */}
          {/* eslint-disable jsx-a11y/media-has-caption */}
          {isIntersecting && (
            <audio
              ref={activeAudioRef}
              src={currentTrack?.src}
              className={styles.audio}
              data-testid="audio-active"
              loop={player.repeatMode === 1 && playlist.length === 1}
              muted={player.isMuted}
              controls={!customControls && controls}
              preload={preload}
              crossOrigin="anonymous"
              onTimeUpdate={handleTimeUpdate}
              onEnded={handleEnded}
              {...props}
              onLoadedMetadata={(e) => {
                setDuration(e.currentTarget.duration);
                notifyLoaded();
                props.onLoadedMetadata?.(e);
              }}
              onLoadedData={(e) => {
                notifyLoaded();
                props.onLoadedData?.(e);
              }}
              onCanPlay={(e) => {
                notifyLoaded();
                props.onCanPlay?.(e);
              }}
            >
              {tracks?.map((track, i) => <track key={i} {...track} />)}
            </audio>
          )}
          <audio
            ref={nextAudioRef}
            muted={player.isMuted}
            preload="auto"
            crossOrigin="anonymous"
            data-testid="audio-next"
          />
          {/* eslint-enable jsx-a11y/media-has-caption */}
        </div>

        {customControls && (
          <AudioCustomControls
            styles={styles}
            isPlaying={isPlaying}
            currentTime={player.currentTime}
            duration={player.duration}
            volume={player.volume}
            isMuted={player.isMuted}
            repeatMode={player.repeatMode}
            shuffleMode={player.shuffleMode}
            currentPlaybackRate={player.currentPlaybackRate}
            isBassBoost={player.isBassBoost}
            remainingSleepTime={player.remainingSleepTime}
            playbackRate={playbackRate}
            presets={presets}
            sleepTimer={sleepTimer}
            setRepeatMode={player.setRepeatMode}
            setShuffleMode={player.setShuffleMode}
            setCurrentPlaybackRate={player.setCurrentPlaybackRate}
            setIsBassBoost={player.setIsBassBoost}
            setIsMuted={player.setIsMuted}
            togglePlay={player.togglePlay}
            handleSeek={player.handleSeek}
            handleVolumeChange={player.handleVolumeChange}
            playNext={player.playNext}
            toggleSleepTimer={player.toggleSleepTimer}
            formatTime={player.formatTime}
            labels={labels}
          />
        )}
      </div>
      {caption && (
        <figcaption className={styles.caption}>{caption}</figcaption>
      )}
    </figure>
  );
};
