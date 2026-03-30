import React from "react";
import classNames from "classnames";
import { Icon } from "../../Icon/Icon";
import { useTranslation } from "react-i18next";

interface AudioCustomControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  isMuted: boolean;
  repeatMode: 0 | 1 | 2;
  shuffleMode: boolean;
  currentPlaybackRate: number;
  isBassBoost: boolean;
  remainingSleepTime: number | null;
  playbackRate: boolean;
  presets: boolean;
  sleepTimer: boolean;
  setRepeatMode: React.Dispatch<React.SetStateAction<0 | 1 | 2>>;
  setShuffleMode: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentPlaybackRate: (rate: number) => void;
  setIsBassBoost: (boost: boolean) => void;
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
  togglePlay: () => void;
  handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  playNext: (dir: 1 | -1) => void;
  toggleSleepTimer: () => void;
  formatTime: (time: number) => string;
}

export function AudioCustomControls({
  isPlaying,
  currentTime,
  duration,
  volume,
  isMuted,
  repeatMode,
  shuffleMode,
  currentPlaybackRate,
  isBassBoost,
  remainingSleepTime,
  playbackRate,
  presets,
  sleepTimer,
  setRepeatMode,
  setShuffleMode,
  setCurrentPlaybackRate,
  setIsBassBoost,
  setIsMuted,
  togglePlay,
  handleSeek,
  handleVolumeChange,
  playNext,
  toggleSleepTimer,
  formatTime,
}: AudioCustomControlsProps) {
  const { t } = useTranslation();

  return (
    <div className="wim-audio-custom-controls">
      {/* Row 1: Progress & Time */}
      <div className="wim-audio-time">
        <span className="wim-audio-time__current">{formatTime(currentTime)}</span>
        <div className="wim-audio-progress-container">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            step="0.1"
            onChange={handleSeek}
            className="wim-audio-progress"
            aria-label={t("a11y.seek")}
          />
          <div
            className="wim-audio-progress-fill"
            style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
          />
        </div>
        <span className="wim-audio-time__total">{formatTime(duration)}</span>
      </div>

      {/* Row 2: Secondary Features & Volume */}
      <div className="wim-audio-controls-row">
        <div className="wim-audio-controls-group">
          <button
            type="button"
            className={classNames("wim-audio-btn", repeatMode > 0 && "active")}
            onClick={() => setRepeatMode((m) => ((m + 1) % 3) as 0 | 1 | 2)}
            title={`Repeat ${repeatMode === 0 ? "Off" : repeatMode === 1 ? "One" : "All"}`}
          >
            <Icon name="RepeatIcon" size="sm" />
            {repeatMode === 1 && <span className="wim-audio-badge">1</span>}
          </button>
          <button
            type="button"
            className={classNames("wim-audio-btn", shuffleMode && "active")}
            onClick={() => setShuffleMode((s) => !s)}
            title="Shuffle"
          >
            <Icon name="ShuffleIcon" size="sm" />
          </button>
          {playbackRate && (
            <button
              type="button"
              className="wim-audio-btn wim-audio-btn--text"
              onClick={() => {
                const rates = [0.5, 1, 1.5, 2];
                const nextRate =
                  rates[(rates.indexOf(currentPlaybackRate) + 1) % rates.length];
                setCurrentPlaybackRate(nextRate);
              }}
              title="Playback Speed"
            >
              {currentPlaybackRate}x
            </button>
          )}
        </div>

        <div className="wim-audio-controls-group">
          {presets && (
            <button
              type="button"
              className={classNames("wim-audio-btn", isBassBoost && "active")}
              onClick={() => setIsBassBoost(!isBassBoost)}
              title="Bass Boost"
            >
              <Icon name="ChartIcon" size="sm" />
            </button>
          )}

          {sleepTimer && (
            <button
              type="button"
              className={classNames(
                "wim-audio-btn",
                remainingSleepTime !== null && "active",
              )}
              onClick={toggleSleepTimer}
              title="Sleep Timer (15m)"
            >
              <Icon name="ClockIcon" size="sm" />
              {remainingSleepTime !== null && (
                <span className="wim-audio-badge" style={{ fontSize: "7px" }}>
                  {Math.ceil(remainingSleepTime / 60)}
                </span>
              )}
            </button>
          )}

          <div className="wim-audio-volume-container">
            <button
              type="button"
              className="wim-audio-btn wim-audio-btn--volume"
              onClick={() => setIsMuted((m) => !m)}
              aria-label={isMuted ? t("a11y.unmute") : t("a11y.mute")}
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
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="wim-audio-volume"
              aria-label={t("a11y.volume")}
            />
          </div>
        </div>
      </div>

      {/* Row 3: Primary Playback Controls */}
      <div
        className="wim-audio-controls-row"
        style={{ justifyContent: "center", marginTop: "0.2rem" }}
      >
        <div className="wim-audio-controls-group">
          <button
            type="button"
            className="wim-audio-btn"
            onClick={() => playNext(-1)}
            title="Previous"
          >
            <Icon name="ChevronLeftIcon" size="sm" />
          </button>
          <button
            type="button"
            className="wim-audio-btn wim-audio-btn--play"
            onClick={togglePlay}
            title={isPlaying ? t("a11y.pause") : t("a11y.play")}
            aria-label={isPlaying ? t("a11y.pause") : t("a11y.play")}
          >
            <Icon name={isPlaying ? "PauseIcon" : "PlayIcon"} size="sm" />
          </button>
          <button
            type="button"
            className="wim-audio-btn"
            onClick={() => playNext(1)}
            title="Next"
          >
            <Icon name="ChevronRightIcon" size="sm" />
          </button>
        </div>
      </div>
    </div>
  );
}
