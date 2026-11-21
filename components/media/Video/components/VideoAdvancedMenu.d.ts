import { default as React } from '../../../../../node_modules/react';
import { VideoLabels } from './VideoControls';
type FitOption = "contain" | "cover" | "fill" | "none" | "scale-down";
type ActiveMenu = "main" | "quality" | "rate" | "fit" | "playlist" | null;
interface VideoAdvancedMenuProps {
    activeMenu: ActiveMenu;
    setActiveMenu: (menu: ActiveMenu) => void;
    qualities?: {
        label: string;
        src: string;
    }[];
    currentQualityIndex: number;
    handleQualityChange: (index: number) => void;
    playbackRate: number;
    setPlaybackRate: (rate: number) => void;
    activeFit: FitOption;
    setActiveFit: (fit: FitOption) => void;
    playlist?: {
        src: string;
        title?: string;
        poster?: string;
    }[];
    currentPlayIndex: number;
    playPlaylistItem: (index: number) => void;
    labels?: VideoLabels;
    styles: Record<string, string>;
}
export declare function VideoAdvancedMenu({ activeMenu, setActiveMenu, qualities, currentQualityIndex, handleQualityChange, playbackRate, setPlaybackRate, activeFit, setActiveFit, playlist, currentPlayIndex, playPlaylistItem, labels, styles, }: VideoAdvancedMenuProps): React.JSX.Element | null;
export {};
