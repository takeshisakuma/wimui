import { default as React } from '../../../../../node_modules/react';
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
    playlist?: {
        src: string;
        title?: string;
        poster?: string;
    }[];
    autoPlayNext: boolean;
    qualities?: {
        label: string;
        src: string;
    }[];
    customControls: boolean;
    advancedControls: boolean;
    poster?: string;
    containerRef?: React.RefObject<HTMLDivElement | null>;
}
export declare function useVideoPlayer({ src, autoPlay, loop, muted, fit, videoId, resumePlayback, playlist, autoPlayNext, qualities, customControls, advancedControls, poster, containerRef: externalContainerRef, }: UseVideoPlayerOptions): {
    videoRef: React.RefObject<HTMLVideoElement | null>;
    containerRef: React.RefObject<HTMLDivElement | null>;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    isMuted: boolean;
    isFullscreen: boolean;
    playbackRate: number;
    activeFit: FitOption;
    currentPlayIndex: number;
    currentQualityIndex: number;
    activeMenu: ActiveMenu;
    skipIndicator: {
        show: boolean;
        direction: "forward" | "backward";
    };
    activeSrc: string | undefined;
    activePoster: string | undefined;
    showNativeControls: boolean;
    setVolume: React.Dispatch<React.SetStateAction<number>>;
    setIsMuted: React.Dispatch<React.SetStateAction<boolean>>;
    setPlaybackRate: React.Dispatch<React.SetStateAction<number>>;
    setActiveFit: React.Dispatch<React.SetStateAction<FitOption>>;
    setCurrentPlayIndex: React.Dispatch<React.SetStateAction<number>>;
    setActiveMenu: React.Dispatch<React.SetStateAction<ActiveMenu>>;
    togglePlay: () => void;
    toggleMute: () => void;
    toggleFullscreen: () => void;
    togglePiP: () => Promise<void>;
    skip: (seconds: number) => void;
    handleQualityChange: (index: number) => void;
    playPlaylistItem: (index: number) => void;
    handleTimeUpdate: () => void;
    handleLoadedMetadata: () => void;
    handleEnded: () => void;
    handleSeek: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleVolumeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleVideoClick: (e: React.MouseEvent<HTMLVideoElement>) => void;
    formatTime: (time: number) => string;
};
export {};
