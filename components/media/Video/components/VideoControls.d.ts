import { default as React } from '../../../../../node_modules/react';
type ActiveMenu = "main" | "quality" | "rate" | "fit" | "playlist" | null;
interface VideoControlsProps {
    playlist?: {
        src: string;
        title?: string;
        poster?: string;
    }[];
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
export declare function VideoControls({ playlist, advancedControls, currentPlayIndex, setCurrentPlayIndex, skip, isPlaying, togglePlay, currentTime, duration, handleSeek, volume, isMuted, toggleMute, handleVolumeChange, activeMenu, setActiveMenu, togglePiP, isFullscreen, toggleFullscreen, formatTime, }: VideoControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
