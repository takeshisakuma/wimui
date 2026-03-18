import { useRef, useState, useCallback, useEffect } from "react";
import type React from "react";
import type { AudioTrack } from "../Audio";

interface UseAudioPlayerOptions {
  playlist: AudioTrack[];
  loop: boolean;
  muted: boolean;
  fadeIn: boolean | number;
  fadeOut: boolean | number;
  crossfade: boolean | number;
  visualizer: boolean;
  hotkeys: boolean;
  autoPlay: boolean;
}

export function useAudioPlayer({
  playlist,
  loop,
  muted,
  fadeIn,
  fadeOut,
  crossfade,
  visualizer,
  hotkeys,
  autoPlay: _autoPlay,
}: UseAudioPlayerOptions) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(muted);
  const [repeatMode, setRepeatMode] = useState<0 | 1 | 2>(loop ? 1 : 0);
  const [shuffleMode, setShuffleMode] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [currentPlaybackRate, setCurrentPlaybackRate] = useState(1);
  const [isBassBoost, setIsBassBoost] = useState(false);
  const [remainingSleepTime, setRemainingSleepTime] = useState<number | null>(null);

  const currentTrack = playlist[currentTrackIndex] || null;

  const activeAudioRef = useRef<HTMLAudioElement>(null);
  const nextAudioRef = useRef<HTMLAudioElement>(null);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const bassFilterRef = useRef<BiquadFilterNode | null>(null);
  const sleepTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeGainRef = useRef<GainNode | null>(null);
  const nextGainRef = useRef<GainNode | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drawRequestIdRef = useRef<number | null>(null);
  const isCrossfadingRef = useRef(false);

  const fadeInt = typeof fadeIn === "number" ? fadeIn : fadeIn ? 1000 : 0;
  const fadeOutt = typeof fadeOut === "number" ? fadeOut : fadeOut ? 1000 : 0;
  const xfadet = typeof crossfade === "number" ? crossfade : crossfade ? 3000 : 0;

  const initWebAudio = useCallback(() => {
    if (audioCtxRef.current) return;
    const AudioContextCls =
      window.AudioContext ||
      (window as Window & { webkitAudioContext?: typeof AudioContext })
        .webkitAudioContext;
    if (!AudioContextCls) return;

    const ctx = new AudioContextCls();
    audioCtxRef.current = ctx;

    if (!activeAudioRef.current || !nextAudioRef.current) return;

    const src1 = ctx.createMediaElementSource(activeAudioRef.current);
    const gain1 = ctx.createGain();
    const src2 = ctx.createMediaElementSource(nextAudioRef.current);
    const gain2 = ctx.createGain();

    const bassFilter = ctx.createBiquadFilter();
    bassFilter.type = "lowshelf";
    bassFilter.frequency.value = 200;
    bassFilter.gain.value = isBassBoost ? 10 : 0;
    bassFilterRef.current = bassFilter;

    src1.connect(bassFilter);
    bassFilter.connect(gain1);
    src2.connect(gain2);

    const analyser = ctx.createAnalyser();
    analyser.fftSize = 256;
    analyserRef.current = analyser;

    gain1.connect(analyser);
    gain2.connect(analyser);
    analyser.connect(ctx.destination);

    activeGainRef.current = gain1;
    nextGainRef.current = gain2;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (bassFilterRef.current && audioCtxRef.current) {
      bassFilterRef.current.gain.setTargetAtTime(
        isBassBoost ? 10 : 0,
        audioCtxRef.current.currentTime || 0,
        0.1,
      );
    }
  }, [isBassBoost]);

  useEffect(() => {
    if (activeAudioRef.current) {
      activeAudioRef.current.playbackRate = currentPlaybackRate;
    }
  }, [currentPlaybackRate]);

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
  }, [fadeInt, volume, doGainRamp, initWebAudio]);

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
        ctx2d.fillStyle = `rgb(${barHeight + 100}, 100, 255)`;
        ctx2d.fillRect(x, canvas.height - barHeight / 2, barWidth, barHeight / 2);
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
          ctx2d.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
      }
    }
    return () => {
      if (drawRequestIdRef.current) cancelAnimationFrame(drawRequestIdRef.current);
    };
  }, [isPlaying, visualizer, drawVisualizer, initWebAudio]);

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
  }, [isPlaying, pauseActivePlayer, playActivePlayer, initWebAudio]);

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

  const toggleSleepTimer = () => {
    if (remainingSleepTime !== null) {
      setRemainingSleepTime(null);
      if (sleepTimerRef.current) {
        clearInterval(sleepTimerRef.current);
        sleepTimerRef.current = null;
      }
    } else {
      setRemainingSleepTime(15 * 60);
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
      setIsPlaying(true);
    },
    [getNextIndexBase, repeatMode, currentTrackIndex, playActivePlayer],
  );

  const startCrossfadeToNext = useCallback(
    (nextIndex: number) => {
      if (!activeAudioRef.current || !nextAudioRef.current) return;
      if (!audioCtxRef.current || !activeGainRef.current || !nextGainRef.current)
        return;

      isCrossfadingRef.current = true;

      nextAudioRef.current.src = playlist[nextIndex].src;
      nextAudioRef.current.currentTime = 0;
      nextAudioRef.current
        .play()
        .then(() => {
          const aGain = activeGainRef.current!;
          const nGain = nextGainRef.current!;

          doGainRamp(aGain, aGain.gain.value, 0, xfadet);
          doGainRamp(nGain, 0, volume, xfadet);

          setTimeout(() => {
            if (activeAudioRef.current) {
              activeAudioRef.current.pause();
            }
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

  const handleTimeUpdate = useCallback(() => {
    if (!activeAudioRef.current || isCrossfadingRef.current) return;
    const cur = activeAudioRef.current.currentTime;
    const dur = activeAudioRef.current.duration || 0;
    setCurrentTime(cur);

    if (xfadet > 0 && dur > 0 && dur - cur <= xfadet / 1000 && isPlaying) {
      const nextIdx = getNextIndexBase(1);
      if (nextIdx !== -1 && nextIdx !== currentTrackIndex) {
        startCrossfadeToNext(nextIdx);
      }
    }
  }, [xfadet, isPlaying, currentTrackIndex, getNextIndexBase, startCrossfadeToNext]);

  const handleEnded = useCallback(() => {
    if (isCrossfadingRef.current) return;
    playNext(1);
  }, [playNext]);

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

  return {
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    repeatMode,
    shuffleMode,
    currentTrackIndex,
    currentPlaybackRate,
    isBassBoost,
    remainingSleepTime,
    currentTrack,
    setVolume,
    setIsMuted,
    setRepeatMode,
    setShuffleMode,
    setCurrentPlaybackRate,
    setIsBassBoost,
    setDuration,
    activeAudioRef,
    nextAudioRef,
    canvasRef,
    togglePlay,
    handleSeek,
    handleVolumeChange,
    handleTimeUpdate,
    handleEnded,
    playNext,
    toggleSleepTimer,
    playActivePlayer,
    formatTime,
  };
}
