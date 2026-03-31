import React, { useMemo, useEffect } from "react";
import classNames from "classnames";
import { useMediaLoader } from "@/hooks/useMediaLoader";
import { useAudioPlayer } from "./hooks/useAudioPlayer";
import { useAudioMetadata } from "./hooks/useAudioMetadata";
import { AudioCustomControls } from "./components/AudioCustomControls";
import "./audio.scss";

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
  radius?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: boolean;
  border?: boolean;
  caption?: string;
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
  ...props
}: AudioProps) => {
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

  return (
    <figure
      className={classNames("wim-audio-container", className)}
      style={style}
    >
      <div
        ref={mediaLoaderRef}
        className={classNames(
          "wim-audio-inner",
          radius !== "none" && `wim-audio--radius-${radius}`,
          customControls && shadow && "wim-audio--shadow",
          customControls && border && "wim-audio--border",
          customControls && "wim-audio--custom",
          visualizer && customControls && "wim-audio--has-visualizer",
          fadeIn && "wim-audio--fade-in",
          fadeIn && isLoaded && "wim-audio--is-loaded",
          shouldShowSkeleton && "wim-audio--loading",
        )}
      >
        {visualizer && customControls && (
          <canvas ref={canvasRef} className="wim-audio-visualizer-canvas" />
        )}

        {customControls && showMetadata && (metaTitle || metaArtist || metaCover) && (
          <div
            className="wim-audio-metadata"
            style={{ position: "relative", zIndex: 2 }}
          >
            {metaCover && (
              <img src={metaCover} alt="Cover" className="wim-audio-cover" />
            )}
            <div className="wim-audio-info">
              <div className="wim-audio-title">{metaTitle || "Unknown Title"}</div>
              <div className="wim-audio-artist">{metaArtist || "Unknown Artist"}</div>
            </div>
          </div>
        )}

        <div
          style={{ display: customControls ? "none" : "block", width: "100%" }}
        >
          {/* eslint-disable jsx-a11y/media-has-caption */}
          {isIntersecting && (
            <audio
              ref={activeAudioRef}
              src={currentTrack?.src}
              className="wim-audio"
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
            />
          )}
          <audio
            ref={nextAudioRef}
            muted={player.isMuted}
            preload="auto"
            crossOrigin="anonymous"
          />
          {/* eslint-enable jsx-a11y/media-has-caption */}
        </div>

        {customControls && (
          <AudioCustomControls
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
          />
        )}
      </div>
      {caption && (
        <figcaption className="wim-audio__caption">{caption}</figcaption>
      )}
    </figure>
  );
};
