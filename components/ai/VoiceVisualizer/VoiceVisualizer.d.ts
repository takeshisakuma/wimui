import { default as React } from '../../../../node_modules/react';
export type VoiceVisualizerMode = "bars" | "waveform";
export interface VoiceVisualizerProps extends React.ComponentPropsWithoutRef<"svg"> {
    /** Visualization style */
    mode?: VoiceVisualizerMode;
    /**
     * Normalized amplitude values (0–1) per slot.
     * When omitted, a looping idle animation plays.
     * For bars: one value per bar (with `barCount="auto"` the values are resampled to the bar count).
     * For waveform: time-domain samples.
     */
    data?: readonly number[];
    /**
     * Whether audio is live (recording or playing). When false the visualizer holds still
     * at full strength — a finished recording is not dimmed. Use `disabled` to dim it.
     */
    isActive?: boolean;
    /**
     * Dims the visualizer to show that no audio can be captured or played
     * (e.g. microphone permission not granted)
     */
    disabled?: boolean;
    /**
     * Playback position (0–1) of a recorded clip. The part before it is drawn in the
     * sentiment color and the rest in a neutral color. Has effect only with `data`.
     */
    progress?: number;
    /**
     * Number of bars — bars mode only. `"auto"` fits as many bars as the width allows
     * (bar width and gap stay fixed); a number draws that many bars as a centered cluster.
     */
    barCount?: number | "auto";
    /**
     * Rendered height in pixels, or `"fill"` to follow the parent's height
     * (the parent needs a definite height)
     */
    height?: number | "fill";
    /** Additional CSS class */
    className?: string;
    /** Sentiment context for coloring (default 'neutral') */
    sentiment?: "neutral" | "positive" | "caution" | "negative" | "informative";
    /**
     * Accessible label describing the audio; when omitted the visualizer is
     * hidden from assistive tech
     */
    ariaLabel?: string;
}
/**
 * VoiceVisualizer renders an SVG audio-level indicator.
 * In bars mode it shows animated vertical bars; in waveform mode it shows
 * a smooth time-domain waveform. Both modes accept live amplitude data from
 * the Web Audio API AnalyserNode, and fall back to a looping idle animation
 * when no data is provided. With `progress` it shows how far a recorded clip
 * has been played.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const VoiceVisualizer: React.ForwardRefExoticComponent<VoiceVisualizerProps & React.RefAttributes<SVGSVGElement>>;
