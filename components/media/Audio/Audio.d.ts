import { default as React } from '../../../../node_modules/react';
import { MediaRadius } from '../../../types/tokens';
import { AudioLabels } from './components/AudioCustomControls';
export type { AudioLabels };
export type AudioTrack = {
    src: string;
    title?: string;
    artist?: string;
    coverArt?: string;
};
type AudioProps = Omit<React.ComponentPropsWithoutRef<"audio">, "src"> & {
    /** Source: a URL, list of URLs, or track object(s) */
    src?: string | string[] | AudioTrack | AudioTrack[];
    /** Whether to start playing automatically */
    autoPlay?: boolean;
    /** Whether to loop playback */
    loop?: boolean;
    /** Whether to start muted */
    muted?: boolean;
    /** Whether to show playback controls */
    controls?: boolean;
    /** Preload behavior */
    preload?: "auto" | "metadata" | "none";
    /** Corner radius size */
    radius?: MediaRadius;
    /** Whether to show a shadow */
    shadow?: boolean;
    /** Whether to show a border */
    border?: boolean;
    /** Caption shown below the player */
    caption?: React.ReactNode;
    /** Whether to use the custom control bar instead of native controls */
    customControls?: boolean;
    /** Whether to show the audio visualizer */
    visualizer?: boolean;
    /** Whether to show track metadata (title, artist, cover art) */
    showMetadata?: boolean;
    /** Whether to fade in when playback starts (or the duration in seconds) */
    fadeIn?: boolean | number;
    /** Whether to fade out when playback ends (or the duration in seconds) */
    fadeOut?: boolean | number;
    /** Whether to crossfade between tracks (or the duration in seconds) */
    crossfade?: boolean | number;
    /** Whether to show the playback-rate control */
    playbackRate?: boolean;
    /** Whether to enable keyboard hotkeys */
    hotkeys?: boolean;
    /** Whether to show equalizer presets */
    presets?: boolean;
    /** Whether to show the sleep timer */
    sleepTimer?: boolean;
    /** Loading behavior. With "lazy", an Intersection Observer is enabled. */
    loading?: "eager" | "lazy";
    /** Demo only: milliseconds to intentionally delay load completion */
    demoDelay?: number;
    /** Labels for manual translation */
    labels?: AudioLabels;
    /** Subtitle/caption tracks passed as <track> elements (kind, src, srcLang, label). */
    tracks?: React.ComponentPropsWithoutRef<"track">[];
};
export declare const Audio: ({ src, autoPlay, loop, muted, controls, radius, shadow, border, preload, caption, className, style, customControls, visualizer, showMetadata, fadeIn, fadeOut, crossfade, playbackRate, hotkeys, presets, sleepTimer, loading, demoDelay, labels, tracks, ...props }: AudioProps) => React.JSX.Element;
