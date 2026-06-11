import React from "react";
import classNames from "classnames";
import { Icon } from "../../../media/Icon/Icon";
import { RepeatIcon, ShuffleIcon, ChartIcon, ClockIcon, ChevronLeftIcon, ChevronRightIcon, MuteIcon, VolumeIcon, PauseIcon, PlayIcon } from "@/icon";

export type AudioLabels = {
  seek?: string;
  mute?: string;
  unmute?: string;
  volume?: string;
  play?: string;
  pause?: string;
  next?: string;
  prev?: string;
  repeatMode0?: string; // Off
  repeatMode1?: string; // One
  repeatMode2?: string; // All
  shuffle?: string;
  playbackSpeed?: string;
  bassBoost?: string;
  sleepTimer?: string;
  unknownTitle?: string;
  unknownArtist?: string;
};

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
  labels?: AudioLabels;
  styles: Record<string, string>;
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
  labels = {},
  styles,
}: AudioCustomControlsProps) {
  const {
    seek = "Seek",
    mute = "Mute",
    unmute = "Unmute",
    volume: volumeLabel = "Volume",
    play = "Play",
    pause = "Pause",
    next = "Next",
    prev = "Previous",
    repeatMode0 = "Repeat Off",
    repeatMode1 = "Repeat One",
    repeatMode2 = "Repeat All",
    shuffle = "Shuffle",
    playbackSpeed = "Playback Speed",
    bassBoost = "Bass Boost",
    sleepTimer: sleepTimerLabel = "Sleep Timer (15m)",
  } = labels;

  const repeatTitle =
    repeatMode === 0 ? repeatMode0 : repeatMode === 1 ? repeatMode1 : repeatMode2;

  return (
    <div className={classNames(styles.customControls)}>
      {/* Row 1: Progress & Time */}
      <div className={classNames(styles.time)}>
        <span className={styles.timeCurrent}>{formatTime(currentTime)}</span>
        <div className={classNames(styles.progressContainer)}>
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            step="0.1"
            onChange={handleSeek}
            className={classNames(styles.progress)}
            aria-label={seek}
          />
          <div
            className={classNames(styles.progressFill)}
            style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
          />
        </div>
        <span className={styles.timeTotal}>{formatTime(duration)}</span>
      </div>

      {/* Row 2: Secondary Features & Volume */}
      <div className={classNames(styles.controlsRow)}>
        <div className={classNames(styles.controlsGroup)}>
          <button
            type="button"
            className={classNames(styles.btn, repeatMode > 0 && styles.active)}
            onClick={() => setRepeatMode((m) => ((m + 1) % 3) as 0 | 1 | 2)}
            title={repeatTitle}
          >
            <Icon component={RepeatIcon} size="sm" />
            {repeatMode === 1 && <span className={classNames(styles.badge)}>1</span>}
          </button>
          <button
            type="button"
            className={classNames(styles.btn, shuffleMode && styles.active)}
            onClick={() => setShuffleMode((s) => !s)}
            title={shuffle}
          >
            <Icon component={ShuffleIcon} size="sm" />
          </button>
          {playbackRate && (
            <button
              type="button"
              className={classNames(styles.btn, styles.btnText)}
              onClick={() => {
                const rates = [0.5, 1, 1.5, 2];
                const nextRate =
                  rates[(rates.indexOf(currentPlaybackRate) + 1) % rates.length];
                setCurrentPlaybackRate(nextRate);
              }}
              title={playbackSpeed}
            >
              {currentPlaybackRate}x
            </button>
          )}
        </div>

        <div className={classNames(styles.controlsGroup)}>
          {presets && (
            <button
              type="button"
              className={classNames(styles.btn, isBassBoost && styles.active)}
              onClick={() => setIsBassBoost(!isBassBoost)}
              title={bassBoost}
            >
              <Icon component={ChartIcon} size="sm" />
            </button>
          )}

          {sleepTimer && (
            <button
              type="button"
              className={classNames(
                styles.btn,
                remainingSleepTime !== null && styles.active,
              )}
              onClick={toggleSleepTimer}
              title={sleepTimerLabel}
            >
              <Icon component={ClockIcon} size="sm" />
              {remainingSleepTime !== null && (
                <span className={classNames(styles.badge)} style={{ fontSize: "7px" }}>
                  {Math.ceil(remainingSleepTime / 60)}
                </span>
              )}
            </button>
          )}

          <div className={classNames(styles.volumeContainer)}>
            <button
              type="button"
              className={classNames(styles.btn)}
              onClick={() => setIsMuted((m) => !m)}
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
              step="0.05"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className={classNames(styles.volume)}
              aria-label={volumeLabel}
            />
          </div>
        </div>
      </div>

      {/* Row 3: Primary Playback Controls */}
      <div
        className={classNames(styles.controlsRow)}
        style={{ justifyContent: "center", marginTop: "0.2rem" }}
      >
        <div className={classNames(styles.controlsGroup)}>
          <button
            type="button"
            className={classNames(styles.btn)}
            onClick={() => playNext(-1)}
            title={prev}
          >
            <Icon component={ChevronLeftIcon} size="sm" />
          </button>
          <button
            type="button"
            className={classNames(styles.btn, styles.btnPlay)}
            onClick={togglePlay}
            title={isPlaying ? pause : play}
            aria-label={isPlaying ? pause : play}
          >
            <Icon component={isPlaying ? PauseIcon : PlayIcon} size="sm" />
          </button>
          <button
            type="button"
            className={classNames(styles.btn)}
            onClick={() => playNext(1)}
            title={next}
          >
            <Icon component={ChevronRightIcon} size="sm" />
          </button>
        </div>
      </div>

    </div>
  );
}
