import React from "react";
import { Icon } from "../../../media/Icon/Icon";

type ActiveMenu = "main" | "quality" | "rate" | "fit" | "playlist" | null;

export type VideoLabels = {
  playlist?: string;
  skipBackward?: string;
  skipForward?: string;
  play?: string;
  pause?: string;
  nextTrack?: string;
  seek?: string;
  mute?: string;
  unmute?: string;
  volume?: string;
  settings?: string;
  pip?: string;
  fullscreen?: string;
  exitFullscreen?: string;
  quality?: string;
  playbackRate?: string;
  aspectRatio?: string;
  standard?: string;
  back?: string;
  auto?: string;
  fit?: string;
  fill?: string;
  contain?: string;
  cover?: string;
  scaleDown?: string;
  none?: string;
  videoAriaLabel?: string;
  seconds?: string; // e.g. "seconds" or "秒"
};

interface VideoControlsProps {
  playlist?: { src: string; title?: string; poster?: string }[];
  advancedControls: boolean;
  currentPlayIndex: number;
  setCurrentPlayIndex: React.Dispatch<React.SetStateAction<number>>;
  skip: (seconds: number) => void;
  isPlaying: boolean;
  togglePlay: () => void;
  currentTime: number;
  duration: number;
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  volume: number;
  isMuted: boolean;
  toggleMute: () => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  activeMenu: ActiveMenu;
  setActiveMenu: (menu: ActiveMenu) => void;
  togglePiP: () => void;
  isFullscreen: boolean;
  toggleFullscreen: () => void;
  formatTime: (time: number) => string;
  labels?: VideoLabels;
}

export function VideoControls({
  playlist,
  advancedControls,
  currentPlayIndex,
  setCurrentPlayIndex,
  skip,
  isPlaying,
  togglePlay,
  currentTime,
  duration,
  handleSeek,
  volume,
  isMuted,
  toggleMute,
  handleVolumeChange,
  activeMenu,
  setActiveMenu,
  togglePiP,
  isFullscreen,
  toggleFullscreen,
  formatTime,
  labels = {},
}: VideoControlsProps) {
  const {
    playlist: playlistLabel = "Playlist",
    skipBackward = "Skip Backward",
    skipForward = "Skip Forward",
    play = "Play",
    pause = "Pause",
    nextTrack = "Next Track",
    seek = "Seek",
    mute = "Mute",
    unmute = "Unmute",
    volume: volumeLabel = "Volume",
    settings = "Settings",
    pip = "Picture in Picture",
    fullscreen = "Fullscreen",
    exitFullscreen = "Exit Fullscreen",
  } = labels;

  return (
    <div className="wim-video-controls-bottom">
      {playlist && playlist.length > 0 && advancedControls && (
        <button
          type="button"
          className="wim-video-btn"
          onClick={(e) => {
            e.stopPropagation();
            setActiveMenu(activeMenu === "playlist" ? null : "playlist");
          }}
          aria-label={playlistLabel}
        >
          <Icon name="DocumentIcon" size="sm" />
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
          aria-label={skipBackward}
        >
          <Icon name="ChevronLeftIcon" size="sm" />
        </button>
      )}

      <button
        type="button"
        className="wim-video-btn wim-video-btn--play"
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        aria-label={isPlaying ? pause : play}
      >
        <Icon name={isPlaying ? "PauseIcon" : "PlayIcon"} size="sm" />
      </button>

      {advancedControls && (
        <button
          type="button"
          className="wim-video-btn"
          onClick={(e) => {
            e.stopPropagation();
            skip(10);
          }}
          aria-label={skipForward}
        >
          <Icon name="ChevronRightIcon" size="sm" />
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
          aria-label={nextTrack}
        >
          <Icon name="ChevronRightIcon" size="md" />
        </button>
      )}

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
            aria-label={seek}
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
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          aria-label={isMuted ? unmute : mute}
        >
          <Icon
            name={isMuted || volume === 0 ? "MuteIcon" : "VolumeIcon"}
            size="sm"
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
          aria-label={volumeLabel}
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
          aria-label={settings}
        >
          <Icon name="SettingsIcon" size="sm" />
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
          aria-label={pip}
          title={pip}
        >
          <Icon name="MonitorIcon" size="sm" />
        </button>
      )}

      <button
        type="button"
        className="wim-video-btn wim-video-btn--fullscreen"
        onClick={(e) => {
          e.stopPropagation();
          toggleFullscreen();
        }}
        aria-label={isFullscreen ? exitFullscreen : fullscreen}
      >
        <Icon
          name={isFullscreen ? "MinimizeIcon" : "MaximizeIcon"}
          size="sm"
        />
      </button>
    </div>
  );
}
