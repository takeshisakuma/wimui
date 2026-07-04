import React from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import classNames from "classnames";
import { Icon } from "../../../media/Icon/Icon";
import { DocumentIcon, ChevronLeftIcon, ChevronRightIcon, SettingsIcon, MonitorIcon, PauseIcon, PlayIcon, MuteIcon, VolumeIcon, MinimizeIcon, MaximizeIcon } from "@/icon";

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
  styles: Record<string, string>;
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
  styles,
}: VideoControlsProps) {
  const { t } = useWimTranslation("common");
  const {
    playlist: playlistLabel = t("a11y.playlist"),
    skipBackward = t("a11y.skip_backward"),
    skipForward = t("a11y.skip_forward"),
    play = t("a11y.play"),
    pause = t("a11y.pause"),
    nextTrack = t("a11y.next_track"),
    seek = t("a11y.seek"),
    mute = t("a11y.mute"),
    unmute = t("a11y.unmute"),
    volume: volumeLabel = t("a11y.volume"),
    settings = t("a11y.settings"),
    pip = t("a11y.picture_in_picture"),
    fullscreen = t("a11y.fullscreen"),
    exitFullscreen = t("a11y.exit_fullscreen"),
  } = labels;

  return (
    <div className={classNames(styles.controlsBottom)}>
      {playlist && playlist.length > 0 && advancedControls && (
        <button
          type="button"
          className={classNames(styles.btn)}
          onClick={(e) => {
            e.stopPropagation();
            setActiveMenu(activeMenu === "playlist" ? null : "playlist");
          }}
          aria-label={playlistLabel}
        >
          <Icon component={DocumentIcon} size="sm" />
        </button>
      )}

      {advancedControls && (
        <button
          type="button"
          className={classNames(styles.btn)}
          onClick={(e) => {
            e.stopPropagation();
            skip(-10);
          }}
          aria-label={skipBackward}
        >
          <Icon component={ChevronLeftIcon} size="sm" />
        </button>
      )}

      <button
        type="button"
        className={classNames(styles.btn, styles.btnPlay)}
        onClick={(e) => {
          e.stopPropagation();
          togglePlay();
        }}
        aria-label={isPlaying ? pause : play}
      >
        <Icon component={isPlaying ? PauseIcon : PlayIcon} size="sm" />
      </button>

      {advancedControls && (
        <button
          type="button"
          className={classNames(styles.btn)}
          onClick={(e) => {
            e.stopPropagation();
            skip(10);
          }}
          aria-label={skipForward}
        >
          <Icon component={ChevronRightIcon} size="sm" />
        </button>
      )}

      {playlist && playlist.length > 0 && advancedControls && (
        <button
          type="button"
          className={classNames(styles.btn)}
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
          <Icon component={ChevronRightIcon} size="md" />
        </button>
      )}

      <div className={classNames(styles.timeContainer)}>
        <span className={styles.timeCurrent}>{formatTime(currentTime)}</span>
        <div className={classNames(styles.progressContainer)}>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className={classNames(styles.progress)}
            aria-label={seek}
            onClick={(e) => e.stopPropagation()}
          />
          <div
            className={classNames(styles.progressFill)}
            style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
          />
        </div>
        <span className={styles.timeTotal}>{formatTime(duration)}</span>
      </div>

      <div className={classNames(styles.volumeContainer)}>
        <button
          type="button"
          className={classNames(styles.btn)}
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          aria-label={isMuted ? unmute : mute}
        >
          <Icon
            component={isMuted || volume === 0 ? MuteIcon : VolumeIcon}
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
          className={classNames(styles.volume)}
          aria-label={volumeLabel}
          onClick={(e) => e.stopPropagation()}
        />
      </div>

      {advancedControls && (
        <button
          type="button"
          className={classNames(styles.btn)}
          onClick={(e) => {
            e.stopPropagation();
            setActiveMenu(activeMenu === "main" ? null : "main");
          }}
          aria-label={settings}
        >
          <Icon component={SettingsIcon} size="sm" />
        </button>
      )}

      {advancedControls && (
        <button
          type="button"
          className={classNames(styles.btn)}
          onClick={(e) => {
            e.stopPropagation();
            togglePiP();
          }}
          aria-label={pip}
          title={pip}
        >
          <Icon component={MonitorIcon} size="sm" />
        </button>
      )}

      <button
        type="button"
        className={classNames(styles.btn)}
        onClick={(e) => {
          e.stopPropagation();
          toggleFullscreen();
        }}
        aria-label={isFullscreen ? exitFullscreen : fullscreen}
      >
        <Icon
          component={isFullscreen ? MinimizeIcon : MaximizeIcon}
          size="sm"
        />
      </button>

    </div>
  );
}
