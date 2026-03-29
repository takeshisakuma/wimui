import React from "react";
import { Icon } from "../../Icon/Icon";
import { useTranslation } from "react-i18next";

type ActiveMenu = "main" | "quality" | "rate" | "fit" | "playlist" | null;

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
}: VideoControlsProps) {
  const { t } = useTranslation();

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
          aria-label={t("a11y.playlist")}
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
          aria-label={t("a11y.skip_backward")}
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
        <Icon name={isPlaying ? "PauseIcon" : "PlayIcon"} size="small" />
      </button>

      {advancedControls && (
        <button
          type="button"
          className="wim-video-btn"
          onClick={(e) => {
            e.stopPropagation();
            skip(10);
          }}
          aria-label={t("a11y.skip_forward")}
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
          aria-label={t("a11y.next_track")}
        >
          <Icon name="ChevronRightIcon" size="medium" />
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
            aria-label={t("a11y.seek")}
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
          aria-label={t("a11y.volume")}
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
          aria-label={t("a11y.settings")}
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
          aria-label={t("a11y.picture_in_picture")}
          title={t("a11y.picture_in_picture")}
        >
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
  );
}
