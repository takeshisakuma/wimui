import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import classNames from "classnames";
// (jsmediatags is loaded via direct path to avoid resolution issues)
import { Icon } from "../Icon/Icon";
import "./audio.scss";

export type AudioTrack = {
  src: string;
  title?: string;
  artist?: string;
  coverArt?: string;
};

type AudioProps = Omit<React.ComponentPropsWithoutRef<"audio">, "src"> & {
  // Media sources
  src?: string | string[] | AudioTrack | AudioTrack[];

  // Standard audio options
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  preload?: "auto" | "metadata" | "none";

  // Appearance options
  radius?: "none" | "small" | "medium" | "large" | "full";
  shadow?: boolean;
  border?: boolean;
  caption?: string;
  customControls?: boolean;

  // Advanced options
  visualizer?: boolean;
  showMetadata?: boolean;
  fadeIn?: boolean | number;
  fadeOut?: boolean | number;
  crossfade?: boolean | number;
  playbackRate?: boolean;
  hotkeys?: boolean;
  presets?: boolean;
  sleepTimer?: boolean;
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
  ...props
}: AudioProps) => {
  // ------------------------------------------------------------------------
  // Playlist normalizer
  // ------------------------------------------------------------------------
  const playlist: AudioTrack[] = useMemo(() => {
    if (!src) return [];
    const arr = Array.isArray(src) ? src : [src];
    return arr.map((item) => (typeof item === "string" ? { src: item } : item));
  }, [src]);

  // ------------------------------------------------------------------------
  // State
  // ------------------------------------------------------------------------
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = playlist[currentTrackIndex] || null;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(muted);

  // Repeat options: 0 = none, 1 = one, 2 = all
  const [repeatMode, setRepeatMode] = useState<0 | 1 | 2>(loop ? 1 : 0);
  const [shuffleMode, setShuffleMode] = useState(false);

  // Track metadata state
  const [metaTitle, setMetaTitle] = useState<string>("");
  const [metaArtist, setMetaArtist] = useState<string>("");
  const [metaCover, setMetaCover] = useState<string>("");

  const [currentPlaybackRate, setCurrentPlaybackRate] = useState(1);
  const [isBassBoost, setIsBassBoost] = useState(false);
  const [remainingSleepTime, setRemainingSleepTime] = useState<number | null>(
    null,
  );

  // ------------------------------------------------------------------------
  // Web Audio / HTML5 Video Refs
  // ------------------------------------------------------------------------
  const audioContainerRef = useRef<HTMLDivElement>(null);
  const activeAudioRef = useRef<HTMLAudioElement>(null);
  const nextAudioRef = useRef<HTMLAudioElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);
  const bassFilterRef = useRef<BiquadFilterNode | null>(null);
  const analyzerRef = useRef<AnalyserNode | null>(null);
  const sourceNodeRef = useRef<MediaElementAudioSourceNode | null>(null);
  const sleepTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Audio node graphs
  const activeGainRef = useRef<GainNode | null>(null);
  const nextGainRef = useRef<GainNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);

  // Canvas / Visualizer
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawRequestIdRef = useRef<number | null>(null);
  const isCrossfadingRef = useRef(false);

  // Timings ms
  const fadeInt = typeof fadeIn === "number" ? fadeIn : fadeIn ? 1000 : 0;
  const fadeOutt = typeof fadeOut === "number" ? fadeOut : fadeOut ? 1000 : 0;
  const xfadet =
    typeof crossfade === "number" ? crossfade : crossfade ? 3000 : 0;

  // First user interaction init helper
  const initWebAudio = () => {
    if (audioCtxRef.current) return;
    const AudioContextCls =
      window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioContextCls) return; // unsupported runtime

    const ctx = new AudioContextCls();
    audioCtxRef.current = ctx;

    if (!activeAudioRef.current || !nextAudioRef.current) return;

    // we need to set crossOrigin for remote / jsmediatags
    const src1 = ctx.createMediaElementSource(activeAudioRef.current);
    const gain1 = ctx.createGain();

    const src2 = ctx.createMediaElementSource(nextAudioRef.current);
    const gain2 = ctx.createGain();

    // New: Bass Filter
    const bassFilter = ctx.createBiquadFilter();
    bassFilter.type = "lowshelf";
    bassFilter.frequency.value = 200;
    bassFilter.gain.value = isBassBoost ? 10 : 0;
    bassFilterRef.current = bassFilter;

    src1.connect(bassFilter);
    bassFilter.connect(gain1);
    src2.connect(gain2); // Next player doesn't strictly need bass boost since it's used for xfade

    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyserRef.current = analyser;

    gain1.connect(analyser);
    gain2.connect(analyser);
    analyser.connect(ctx.destination);

    activeGainRef.current = gain1;
    nextGainRef.current = gain2;
  };

  // Update bass value when state changes
  useEffect(() => {
    if (bassFilterRef.current && audioCtxRef.current) {
      bassFilterRef.current.gain.setTargetAtTime(
        isBassBoost ? 10 : 0,
        audioCtxRef.current.currentTime || 0,
        0.1,
      );
    }
  }, [isBassBoost]);

  // Handle playback rate
  useEffect(() => {
    if (activeAudioRef.current) {
      activeAudioRef.current.playbackRate = currentPlaybackRate;
    }
  }, [currentPlaybackRate]);

  // ------------------------------------------------------------------------
  // Fades & Playback core
  // ------------------------------------------------------------------------
  const doGainRamp = useCallback(
    (
      gainNode: GainNode,
      startVal: number,
      endVal: number,
      durationMs: number,
    ) => {
      if (!audioCtxRef.current) return;
      const ctx = audioCtxRef.current;
      gainNode.gain.cancelScheduledValues(ctx.currentTime);
      gainNode.gain.setValueAtTime(startVal, ctx.currentTime);
      gainNode.gain.linearRampToValueAtTime(
        endVal,
        ctx.currentTime + durationMs / 1000,
      );
    },
    [],
  );

  const playActivePlayer = useCallback(() => {
    if (!activeAudioRef.current) return;
    initWebAudio();
    const p = activeAudioRef.current.play();
    if (p !== undefined) {
      p.then(() => {
        if (audioCtxRef.current && activeGainRef.current && fadeInt > 0) {
          doGainRamp(activeGainRef.current, 0, volume, fadeInt);
        } else if (activeGainRef.current) {
          activeGainRef.current.gain.value = volume;
        }
        setIsPlaying(true);
      }).catch((e) => {
        console.warn("Playback prevented", e);
        setIsPlaying(false);
      });
    }
  }, [fadeInt, volume, doGainRamp]);

  const pauseActivePlayer = useCallback(() => {
    if (!activeAudioRef.current) return;
    if (audioCtxRef.current && activeGainRef.current && fadeOutt > 0) {
      doGainRamp(
        activeGainRef.current,
        activeGainRef.current.gain.value,
        0,
        fadeOutt,
      );
      setTimeout(() => {
        activeAudioRef.current?.pause();
        setIsPlaying(false);
      }, fadeOutt);
    } else {
      activeAudioRef.current.pause();
      setIsPlaying(false);
    }
  }, [fadeOutt, doGainRamp]);

  // ------------------------------------------------------------------------
  // Visualizer Loop
  // ------------------------------------------------------------------------
  const drawVisualizer = useCallback(() => {
    if (!visualizer || !canvasRef.current || !analyserRef.current) return;
    const canvas = canvasRef.current;
    const ctx2d = canvas.getContext("2d");
    if (!ctx2d) return;

    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    const draw = () => {
      drawRequestIdRef.current = requestAnimationFrame(draw);
      analyser.getByteFrequencyData(dataArray);

      ctx2d.clearRect(0, 0, canvas.width, canvas.height);

      const barWidth = (canvas.width / bufferLength) * 2.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArray[i];
        // Vibrant color logic based on active themes or primary blue
        ctx2d.fillStyle = `rgb(${barHeight + 100}, 100, 255)`;
        ctx2d.fillRect(
          x,
          canvas.height - barHeight / 2,
          barWidth,
          barHeight / 2,
        );
        x += barWidth + 1;
      }
    };

    draw();
  }, [visualizer]);

  useEffect(() => {
    if (isPlaying && visualizer) {
      initWebAudio();
      drawVisualizer();
      if (audioCtxRef.current && audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
    } else {
      if (drawRequestIdRef.current) {
        cancelAnimationFrame(drawRequestIdRef.current);
        drawRequestIdRef.current = null;
      }
      if (!isPlaying && canvasRef.current) {
        const ctx2d = canvasRef.current.getContext("2d");
        if (ctx2d)
          ctx2d.clearRect(
            0,
            0,
            canvasRef.current.width,
            canvasRef.current.height,
          );
      }
    }
    return () => {
      if (drawRequestIdRef.current)
        cancelAnimationFrame(drawRequestIdRef.current);
    };
  }, [isPlaying, visualizer, drawVisualizer]);

  // ------------------------------------------------------------------------
  // Meta loading
  // ------------------------------------------------------------------------
  useEffect(() => {
    if (!currentTrack) return;

    let title = currentTrack.title || "";
    let artist = currentTrack.artist || "";
    let cover = currentTrack.coverArt || "";

    if (showMetadata && !title && !artist && !cover) {
      // Import directly from the build file to avoid package.json resolution issues in Vite
      import("jsmediatags/build2/jsmediatags.js")
        .then((jsmediatagsModule) => {
          // In some environments, it might be the default export or the root object
          const jmt = jsmediatagsModule.default || jsmediatagsModule;
          jmt.read(currentTrack.src, {
            onSuccess: (tag: unknown) => {
              const t = (tag as { tags: any }).tags;
              if (t.title) setMetaTitle(t.title);
              if (t.artist) setMetaArtist(t.artist);

              if (t.picture) {
                const { data, format } = t.picture;
                let base64String = "";
                data.forEach((char: number) => {
                  base64String += String.fromCharCode(char);
                });
                const base64 = btoa(base64String);
                setMetaCover(`data:${format};base64,${base64}`);
              }
            },
            onError: (err: unknown) => {
              console.warn("jsmediatags parse error:", err);
            },
          });
        })
        .catch((err) => {
          console.warn("Failed to load jsmediatags dynamically:", err);
        });
    }

    setMetaTitle(title);
    setMetaArtist(artist);
    setMetaCover(cover);

    // Apply src to active audio ref
    if (activeAudioRef.current) {
      activeAudioRef.current.src = currentTrack.src;
      if (autoPlay || isPlaying) {
        playActivePlayer();
      }
    }
  }, [
    currentTrackIndex,
    currentTrack,
    showMetadata,
    autoPlay,
    isPlaying,
    playActivePlayer,
  ]);

  const handleVolUpdate = useCallback(() => {
    if (activeAudioRef.current) {
      activeAudioRef.current.volume = volume;
      activeAudioRef.current.muted = isMuted;
    }
    if (nextAudioRef.current) {
      nextAudioRef.current.volume = volume;
      nextAudioRef.current.muted = isMuted;
    }
  }, [volume, isMuted]);

  useEffect(() => {
    handleVolUpdate();
  }, [handleVolUpdate]);

  const togglePlay = useCallback(() => {
    initWebAudio();
    if (isPlaying) {
      pauseActivePlayer();
    } else {
      playActivePlayer();
    }
  }, [isPlaying, pauseActivePlayer, playActivePlayer]);

  // Keyboard Shortcuts
  useEffect(() => {
    if (!hotkeys) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      )
        return;

      switch (e.code) {
        case "Space":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowRight":
          if (activeAudioRef.current) activeAudioRef.current.currentTime += 5;
          break;
        case "ArrowLeft":
          if (activeAudioRef.current) activeAudioRef.current.currentTime -= 5;
          break;
        case "ArrowUp":
          e.preventDefault();
          setVolume((v) => Math.min(1, Math.round((v + 0.1) * 10) / 10));
          break;
        case "ArrowDown":
          e.preventDefault();
          setVolume((v) => Math.max(0, Math.round((v - 0.1) * 10) / 10));
          break;
        case "KeyM":
          setIsMuted((m) => !m);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hotkeys, togglePlay]);

  // Sleep Timer logic
  const toggleSleepTimer = () => {
    if (remainingSleepTime !== null) {
      setRemainingSleepTime(null);
      if (sleepTimerRef.current) {
        clearInterval(sleepTimerRef.current);
        sleepTimerRef.current = null;
      }
    } else {
      setRemainingSleepTime(15 * 60); // 15 mins
      sleepTimerRef.current = setInterval(() => {
        setRemainingSleepTime((prev) => {
          if (prev === null || prev <= 1) {
            pauseActivePlayer();
            if (sleepTimerRef.current) clearInterval(sleepTimerRef.current);
            return null;
          }
          return prev - 1;
        });
      }, 1000);
    }
  };

  useEffect(() => {
    return () => {
      if (sleepTimerRef.current) clearInterval(sleepTimerRef.current);
    };
  }, []);

  const getNextIndexBase = useCallback(
    (dir: 1 | -1 = 1) => {
      if (!playlist.length) return 0;
      if (shuffleMode && dir === 1) {
        let nextIndex = Math.floor(Math.random() * playlist.length);
        if (nextIndex === currentTrackIndex && playlist.length > 1) {
          nextIndex = (nextIndex + 1) % playlist.length;
        }
        return nextIndex;
      }

      let nextIndex = currentTrackIndex + dir;
      if (nextIndex >= playlist.length) {
        nextIndex = repeatMode >= 1 ? 0 : -1;
      } else if (nextIndex < 0) {
        nextIndex = repeatMode >= 1 ? playlist.length - 1 : 0;
      }
      return nextIndex;
    },
    [currentTrackIndex, playlist.length, repeatMode, shuffleMode],
  );

  const playNext = useCallback(
    (dir: 1 | -1 = 1) => {
      // Stop current if playing
      if (activeAudioRef.current && !isCrossfadingRef.current) {
        activeAudioRef.current.pause();
        activeAudioRef.current.currentTime = 0;
      }

      const nextIndex = getNextIndexBase(dir);
      if (nextIndex === -1) {
        setIsPlaying(false);
        if (activeAudioRef.current) activeAudioRef.current.currentTime = 0;
        return;
      }

      if (repeatMode === 1 && dir === 1 && currentTrackIndex === nextIndex) {
        if (activeAudioRef.current) {
          activeAudioRef.current.currentTime = 0;
          playActivePlayer();
        }
        return;
      }

      setCurrentTrackIndex(nextIndex);
      // Effects will trigger src change and play
      setIsPlaying(true);
    },
    [getNextIndexBase, repeatMode, currentTrackIndex, playActivePlayer],
  );

  const startCrossfadeToNext = useCallback(
    (nextIndex: number) => {
      if (!activeAudioRef.current || !nextAudioRef.current) return;
      if (
        !audioCtxRef.current ||
        !activeGainRef.current ||
        !nextGainRef.current
      )
        return;

      isCrossfadingRef.current = true;

      // Prepare next audio element
      nextAudioRef.current.src = playlist[nextIndex].src;
      nextAudioRef.current.currentTime = 0;
      nextAudioRef.current
        .play()
        .then(() => {
          const aGain = activeGainRef.current!;
          const nGain = nextGainRef.current!;

          // Start fading out active
          doGainRamp(aGain, aGain.gain.value, 0, xfadet);
          // Start fading in next
          doGainRamp(nGain, 0, volume, xfadet);

          // Once crossfade completes: swapping refs effectively
          setTimeout(() => {
            if (activeAudioRef.current) {
              activeAudioRef.current.pause();
            }

            // Swap refs variables manually (requires a bit of react tricky if rely on standard flow)
            // Actually an easier pattern is just to swap the src and time to activePlayer:
            // but since activeAudioRef is playing out, we wait, then just setCurrentTrackIndex.

            setCurrentTrackIndex(nextIndex);
            isCrossfadingRef.current = false;
          }, xfadet);
        })
        .catch((e) => {
          console.warn("Crossfade prevented", e);
          isCrossfadingRef.current = false;
        });
    },
    [playlist, volume, xfadet, doGainRamp],
  );

  const handleTimeUpdateInner = useCallback(() => {
    if (!activeAudioRef.current || isCrossfadingRef.current) return;
    const cur = activeAudioRef.current.currentTime;
    const dur = activeAudioRef.current.duration || 0;
    setCurrentTime(cur);

    // Crossfade check
    if (xfadet > 0 && dur > 0 && dur - cur <= xfadet / 1000 && isPlaying) {
      const nextIdx = getNextIndexBase(1);
      if (nextIdx !== -1 && nextIdx !== currentTrackIndex) {
        startCrossfadeToNext(nextIdx);
      }
    }
  }, [
    xfadet,
    isPlaying,
    currentTrackIndex,
    getNextIndexBase,
    startCrossfadeToNext,
  ]);

  const handleEndedInner = useCallback(() => {
    if (isCrossfadingRef.current) return; // handled by crossfade tick natively
    playNext(1);
  }, [playNext]);

  // ------------------------------------------------------------------------
  // UI Handlers
  // ------------------------------------------------------------------------
  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (activeAudioRef.current) {
      activeAudioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) setIsMuted(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60) || 0;
    const seconds = Math.floor(time % 60) || 0;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // ------------------------------------------------------------------------
  // Render
  // ------------------------------------------------------------------------
  return (
    <figure
      className={classNames("wim-audio-container", className)}
      style={style}
    >
      <div
        ref={audioContainerRef}
        className={classNames(
          "wim-audio-inner",
          customControls && radius !== "none" && `wim-audio--radius-${radius}`,
          customControls && shadow && "wim-audio--shadow",
          customControls && border && "wim-audio--border",
          customControls && "wim-audio--custom",
          visualizer && customControls && "wim-audio--has-visualizer",
        )}
      >
        {/* Visualizer Canvas overlay as background */}
        {visualizer && customControls && (
          <canvas ref={canvasRef} className="wim-audio-visualizer-canvas" />
        )}

        {/* Metadata block */}
        {customControls &&
          showMetadata &&
          (metaTitle || metaArtist || metaCover) && (
            <div
              className="wim-audio-metadata"
              style={{ position: "relative", zIndex: 2 }}
            >
              {metaCover && (
                <img src={metaCover} alt="Cover" className="wim-audio-cover" />
              )}
              <div className="wim-audio-info">
                <div className="wim-audio-title">
                  {metaTitle || "Unknown Title"}
                </div>
                <div className="wim-audio-artist">
                  {metaArtist || "Unknown Artist"}
                </div>
              </div>
            </div>
          )}

        {/* Native / Active audio elements. We hide it when using customControls */}
        <div
          style={{ display: customControls ? "none" : "block", width: "100%" }}
        >
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio
            ref={activeAudioRef}
            className="wim-audio"
            loop={repeatMode === 1 && playlist.length === 1}
            muted={isMuted}
            controls={!customControls && controls}
            preload={preload}
            crossOrigin="anonymous"
            onTimeUpdate={handleTimeUpdateInner}
            onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
            onEnded={handleEndedInner}
            {...props}
          />
          {/* Secondary player for crossfade */}
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <audio
            ref={nextAudioRef}
            muted={isMuted}
            preload="auto"
            crossOrigin="anonymous"
          />
        </div>

        {customControls && (
          <div className="wim-audio-custom-controls">
            {/* Row 1: Progress & Time */}
            <div className="wim-audio-time">
              <span className="wim-audio-time__current">
                {formatTime(currentTime)}
              </span>
              <div className="wim-audio-progress-container">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  value={currentTime}
                  step="0.1"
                  onChange={handleSeek}
                  className="wim-audio-progress"
                  aria-label="Seek"
                />
                <div
                  className="wim-audio-progress-fill"
                  style={{ width: `${(currentTime / (duration || 1)) * 100}%` }}
                />
              </div>
              <span className="wim-audio-time__total">
                {formatTime(duration)}
              </span>
            </div>

            {/* Row 2: Secondary Features & Volume */}
            <div className="wim-audio-controls-row">
              <div className="wim-audio-controls-group">
                <button
                  type="button"
                  className={classNames(
                    "wim-audio-btn",
                    repeatMode > 0 && "active",
                  )}
                  onClick={() =>
                    setRepeatMode((m) => ((m + 1) % 3) as 0 | 1 | 2)
                  }
                  title={`Repeat ${repeatMode === 0 ? "Off" : repeatMode === 1 ? "One" : "All"}`}
                >
                  <Icon name="RepeatIcon" size="small" />
                  {repeatMode === 1 && (
                    <span className="wim-audio-badge">1</span>
                  )}
                </button>
                <button
                  type="button"
                  className={classNames(
                    "wim-audio-btn",
                    shuffleMode && "active",
                  )}
                  onClick={() => setShuffleMode((s) => !s)}
                  title="Shuffle"
                >
                  <Icon name="ShuffleIcon" size="small" />
                </button>
                {playbackRate && (
                  <button
                    type="button"
                    className="wim-audio-btn wim-audio-btn--text"
                    onClick={() => {
                      const rates = [0.5, 1, 1.5, 2];
                      const nextRate =
                        rates[
                          (rates.indexOf(currentPlaybackRate) + 1) %
                            rates.length
                        ];
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
                    className={classNames(
                      "wim-audio-btn",
                      isBassBoost && "active",
                    )}
                    onClick={() => setIsBassBoost(!isBassBoost)}
                    title="Bass Boost"
                  >
                    <Icon name="ChartIcon" size="small" />
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
                    <Icon name="ClockIcon" size="small" />
                    {remainingSleepTime !== null && (
                      <span
                        className="wim-audio-badge"
                        style={{ fontSize: "7px" }}
                      >
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
                    step="0.05"
                    value={isMuted ? 0 : volume}
                    onChange={handleVolumeChange}
                    className="wim-audio-volume"
                    aria-label="Volume"
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
                  <Icon name="ChevronLeftIcon" size="small" />
                </button>
                <button
                  type="button"
                  className="wim-audio-btn wim-audio-btn--play"
                  onClick={togglePlay}
                  title={isPlaying ? "Pause" : "Play"}
                >
                  <Icon
                    name={isPlaying ? "PauseIcon" : "PlayIcon"}
                    size="small"
                  />
                </button>
                <button
                  type="button"
                  className="wim-audio-btn"
                  onClick={() => playNext(1)}
                  title="Next"
                >
                  <Icon name="ChevronRightIcon" size="small" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="wim-audio__caption">{caption}</figcaption>
      )}
    </figure>
  );
};
