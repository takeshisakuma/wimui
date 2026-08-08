import { default as React } from '../../../../node_modules/react';
export type VoiceVisualizerMode = "bars" | "waveform";
export interface VoiceVisualizerProps extends React.ComponentPropsWithoutRef<"svg"> {
    /** Visualization style */
    mode?: VoiceVisualizerMode;
    /**
     * Normalized amplitude values (0–1) per slot.
     * When omitted, a looping idle animation plays.
     * For bars: one value per bar. For waveform: time-domain samples.
     */
    data?: readonly number[];
    /** Whether the component is in an active (recording/playing) state */
    isActive?: boolean;
    /** Number of bars — bars mode only (default 24) */
    barCount?: number;
    /** Rendered height in pixels (default 40) */
    height?: number;
    /** Additional CSS class */
    className?: string;
    /** Sentiment context for coloring (default 'neutral') */
    sentiment?: "neutral" | "positive" | "caution" | "negative" | "informative";
}
/**
 * VoiceVisualizer renders an SVG audio-level indicator.
 * In bars mode it shows animated vertical bars; in waveform mode it shows
 * a smooth time-domain waveform. Both modes accept live amplitude data from
 * the Web Audio API AnalyserNode, and fall back to a looping idle animation
 * when no data is provided.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const VoiceVisualizer: React.ForwardRefExoticComponent<VoiceVisualizerProps & React.RefAttributes<SVGSVGElement>>;
