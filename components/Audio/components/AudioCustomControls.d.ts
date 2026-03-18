import { default as React } from '../../../../node_modules/react';
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
export declare function AudioCustomControls({ isPlaying, currentTime, duration, volume, isMuted, repeatMode, shuffleMode, currentPlaybackRate, isBassBoost, remainingSleepTime, playbackRate, presets, sleepTimer, setRepeatMode, setShuffleMode, setCurrentPlaybackRate, setIsBassBoost, setIsMuted, togglePlay, handleSeek, handleVolumeChange, playNext, toggleSleepTimer, formatTime, }: AudioCustomControlsProps): import("react/jsx-runtime").JSX.Element;
export {};
