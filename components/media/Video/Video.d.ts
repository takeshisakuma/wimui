import { default as React } from '../../../../node_modules/react';
import { MediaRadius } from '../../../types/tokens';
import { VideoLabels } from './components/VideoControls';
export type { VideoLabels };
type VideoProps = Omit<React.ComponentPropsWithoutRef<"video">, "src"> & {
    /** Source URL of the video */
    src?: string;
    /** Width of the video */
    width?: string | number;
    /** Height of the video */
    height?: string | number;
    /** Whether to start playing automatically */
    autoPlay?: boolean;
    /** Whether to loop playback */
    loop?: boolean;
    /** Whether to start muted */
    muted?: boolean;
    /** Whether to show playback controls */
    controls?: boolean;
    /** Poster image shown before playback */
    poster?: string;
    /** Corner radius size */
    radius?: MediaRadius;
    /** Whether to show a shadow */
    shadow?: boolean;
    /** Whether to show a border */
    border?: boolean;
    /** How the video fits its box */
    fit?: "contain" | "cover" | "fill" | "none" | "scale-down";
    /** Preload behavior */
    preload?: "auto" | "metadata" | "none";
    /** Caption shown below the video */
    caption?: React.ReactNode;
    /** Whether to use the custom control bar instead of native controls */
    customControls?: boolean;
    /** Whether to enable advanced controls (quality, playback rate, etc.) */
    advancedControls?: boolean;
    /** Unique ID used to persist and resume playback position */
    videoId?: string;
    /** Whether to resume playback from the last saved position */
    resumePlayback?: boolean;
    /** Playlist of videos to play in sequence */
    playlist?: {
        src: string;
        title?: string;
        poster?: string;
    }[];
    /** Whether to automatically play the next playlist item */
    autoPlayNext?: boolean;
    /** Selectable quality sources */
    qualities?: {
        label: string;
        src: string;
    }[];
    /** Loading behavior. With "lazy", an Intersection Observer is enabled. */
    loading?: "eager" | "lazy";
    /** Whether to fade in when loading completes */
    fadeIn?: boolean;
    /** Demo only: milliseconds to intentionally delay load completion */
    demoDelay?: number;
    /** Labels for manual translation */
    labels?: VideoLabels;
    /** Subtitle/caption tracks passed as <track> elements (kind, src, srcLang, label). */
    tracks?: React.ComponentPropsWithoutRef<"track">[];
};
export declare const Video: ({ src, width: _width, height, autoPlay, loop, muted, controls, poster, radius, shadow, border, fit, preload, caption, className, style, customControls, advancedControls, videoId, resumePlayback, playlist, autoPlayNext, qualities, loading, fadeIn, demoDelay, labels, tracks, ...props }: VideoProps) => React.JSX.Element;
