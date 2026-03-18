import React, { useCallback, useEffect, useState } from "react";

type FitOption = "contain" | "cover" | "fill" | "none" | "scale-down";
type ActiveMenu = "main" | "quality" | "rate" | "fit" | "playlist" | null;

interface UseVideoPlayerOptions {
  src?: string;
  autoPlay: boolean;
  loop: boolean;
  muted: boolean;
  fit: FitOption;
  videoId?: string;
  resumePlayback: boolean;
  playlist?: { src: string; title?: string; poster?: string }[];
  autoPlayNext: boolean;
  qualities?: { label: string; src: string }[];
  customControls: boolean;
  advancedControls: boolean;
  poster?: string;
  containerRef?: React.RefObject<HTMLDivElement | null>;
}

export function useVideoPlayer({
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
  containerRef: externalContainerRef,
}: UseVideoPlayerOptions) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const internalContainerRef = React.useRef<HTMLDivElement>(null);
  const containerRef = externalContainerRef ?? internalContainerRef;

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(muted);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1.0);
  const [activeFit, setActiveFit] = useState<FitOption>(fit);
  const [currentPlayIndex, setCurrentPlayIndex] = useState(0);
  const [currentQualityIndex, setCurrentQualityIndex] = useState(0);
  const [activeMenu, setActiveMenu] = useState<ActiveMenu>(null);
  const [lastTapInfo, setLastTapInfo] = useState<{ time: number; x: number } | null>(null);
  const [skipIndicator, setSkipIndicator] = useState<{
    show: boolean;
    direction: "forward" | "backward";
  }>({ show: false, direction: "forward" });

  const activeSrc =
    qualities && qualities.length > 0
      ? qualities[currentQualityIndex].src
      : playlist && playlist.length > 0
        ? playlist[currentPlayIndex].src
        : src;

  const activePoster =
    playlist && playlist.length > 0
      ? playlist[currentPlayIndex].poster || poster
      : poster;

  const showNativeControls = customControls || advancedControls ? false : true;

  // Load resume time on mount or video change
  useEffect(() => {
    if (videoId && resumePlayback && videoRef.current) {
      const trackId =
        playlist && playlist.length > 0
          ? `${videoId}-${currentPlayIndex}`
          : videoId;
      const savedTime = localStorage.getItem(`wimui-video-resume-${trackId}`);
      if (savedTime) {
        videoRef.current.currentTime = parseFloat(savedTime);
        // currentTime state syncs via handleTimeUpdate (timeupdate event fires on seek)
      }
    }
  }, [videoId, resumePlayback, currentPlayIndex, playlist]);

  useEffect(() => {
    if (autoPlay && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.warn("Autoplay was prevented:", error);
      });
    }
  }, [autoPlay, activeSrc]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
      videoRef.current.muted = isMuted;
      videoRef.current.playbackRate = playbackRate;
      videoRef.current.loop = loop && (!playlist || playlist.length <= 1);
    }
  }, [volume, isMuted, playbackRate, loop, playlist]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  const skip = useCallback(
    (seconds: number) => {
      if (videoRef.current) {
        const newTime = Math.max(
          0,
          Math.min(videoRef.current.currentTime + seconds, duration),
        );
        videoRef.current.currentTime = newTime;
        setCurrentTime(newTime);
      }
    },
    [duration],
  );

  const togglePlay = useCallback(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    setIsMuted(!isMuted);
  }, [isMuted]);

  const toggleFullscreen = useCallback(() => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.warn(
          `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`,
        );
      });
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, [containerRef]);

  const togglePiP = useCallback(async () => {
    if (!videoRef.current) return;
    try {
      if (document.pictureInPictureElement) {
        await document.exitPictureInPicture();
      } else if (document.pictureInPictureEnabled) {
        await videoRef.current.requestPictureInPicture();
      }
    } catch (error) {
      console.error("Failed to toggle PiP mode:", error);
    }
  }, []);

  const handleQualityChange = (index: number) => {
    if (!videoRef.current) return;
    const time = videoRef.current.currentTime;
    const wasPlaying = !videoRef.current.paused;
    setCurrentQualityIndex(index);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.currentTime = time;
        if (wasPlaying) videoRef.current.play();
      }
    }, 50);
    setActiveMenu("main");
  };

  const playPlaylistItem = useCallback((index: number) => {
    setCurrentPlayIndex(index);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      setTimeout(() => videoRef.current?.play(), 100);
    }
  }, []);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const time = videoRef.current.currentTime;
      setCurrentTime(time);

      if (
        videoId &&
        resumePlayback &&
        Math.floor(time) % 5 === 0 &&
        duration > 0 &&
        time < duration - 2
      ) {
        const trackId =
          playlist && playlist.length > 0
            ? `${videoId}-${currentPlayIndex}`
            : videoId;
        localStorage.setItem(`wimui-video-resume-${trackId}`, time.toString());
      }
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleEnded = () => {
    if (videoId && resumePlayback) {
      const trackId =
        playlist && playlist.length > 0
          ? `${videoId}-${currentPlayIndex}`
          : videoId;
      localStorage.removeItem(`wimui-video-resume-${trackId}`);
    }

    if (
      playlist &&
      playlist.length > 0 &&
      autoPlayNext &&
      currentPlayIndex < playlist.length - 1
    ) {
      setCurrentPlayIndex((prev) => prev + 1);
      if (videoRef.current) {
        setTimeout(() => {
          videoRef.current?.play();
        }, 100);
      }
    } else {
      setIsPlaying(false);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (newVolume > 0) {
      setIsMuted(false);
    }
  };

  const handleVideoClick = (e: React.MouseEvent<HTMLVideoElement>) => {
    if (!customControls && !advancedControls) return;

    const currentTimeMs = new Date().getTime();
    const rect = e.currentTarget.getBoundingClientRect();
    const xPos = e.clientX - rect.left;
    const width = rect.width;

    if (lastTapInfo && currentTimeMs - lastTapInfo.time < 300) {
      if (xPos > width / 2) {
        skip(10);
        setSkipIndicator({ show: true, direction: "forward" });
      } else {
        skip(-10);
        setSkipIndicator({ show: true, direction: "backward" });
      }
      setTimeout(
        () => setSkipIndicator({ show: false, direction: "forward" }),
        600,
      );
      setLastTapInfo(null);
    } else {
      setLastTapInfo({ time: currentTimeMs, x: xPos });
      setTimeout(() => {
        if (Date.now() - currentTimeMs >= 290) {
          togglePlay();
        }
      }, 300);
    }
  };

  // Keyboard Shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        ["INPUT", "TEXTAREA", "SELECT"].includes(
          (e.target as HTMLElement).tagName,
        ) ||
        !(customControls || advancedControls)
      )
        return;

      const isOurVideoFocused =
        containerRef.current?.contains(document.activeElement) ||
        document.fullscreenElement === containerRef.current;
      if (!isOurVideoFocused && document.activeElement !== document.body) return;

      switch (e.key.toLowerCase()) {
        case " ":
        case "k":
          e.preventDefault();
          togglePlay();
          break;
        case "arrowright":
          e.preventDefault();
          skip(10);
          break;
        case "arrowleft":
          e.preventDefault();
          skip(-10);
          break;
        case "arrowup": {
          e.preventDefault();
          const newVolUp = Math.min(1, volume + 0.1);
          setVolume(newVolUp);
          if (newVolUp > 0) setIsMuted(false);
          break;
        }
        case "arrowdown": {
          e.preventDefault();
          const newVolDown = Math.max(0, volume - 0.1);
          setVolume(newVolDown);
          break;
        }
        case "m":
          e.preventDefault();
          toggleMute();
          break;
        case "f":
          e.preventDefault();
          toggleFullscreen();
          break;
        case "p":
          e.preventDefault();
          togglePiP();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [
    isPlaying,
    volume,
    duration,
    customControls,
    advancedControls,
    skip,
    toggleMute,
    togglePlay,
    toggleFullscreen,
    togglePiP,
    containerRef,
  ]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return {
    videoRef,
    containerRef,
    isPlaying,
    currentTime,
    duration,
    volume,
    isMuted,
    isFullscreen,
    playbackRate,
    activeFit,
    currentPlayIndex,
    currentQualityIndex,
    activeMenu,
    skipIndicator,
    activeSrc,
    activePoster,
    showNativeControls,
    setVolume,
    setIsMuted,
    setPlaybackRate,
    setActiveFit,
    setCurrentPlayIndex,
    setActiveMenu,
    togglePlay,
    toggleMute,
    toggleFullscreen,
    togglePiP,
    skip,
    handleQualityChange,
    playPlaylistItem,
    handleTimeUpdate,
    handleLoadedMetadata,
    handleEnded,
    handleSeek,
    handleVolumeChange,
    handleVideoClick,
    formatTime,
  };
}
