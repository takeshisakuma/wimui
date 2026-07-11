import React, { useMemo } from "react";
import classNames from "classnames";
import styles from "./voice-visualizer.module.scss";

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

/* SVG coordinate constants */
const VB_W = 100; // viewBox width units
const MIN_BAR = 0.05; // minimum visible bar height ratio

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
export const VoiceVisualizer = React.forwardRef<SVGSVGElement, VoiceVisualizerProps>(
  (
    {
      mode = "bars",
      data,
      isActive = true,
      barCount = 24,
      height = 40,
      className,
      sentiment = "neutral",
      style,
      ...props
    },
    ref
  ) => {
    const useIdle = isActive && !data;

    /* ── Bars geometry ── */
    const barW = useMemo(() => (VB_W / barCount) * 0.55, [barCount]);
    const barGap = useMemo(() => (VB_W / barCount) * 0.45, [barCount]);

    const bars = useMemo(() => {
      return Array.from({ length: barCount }, (_, i) => {
        const norm = data ? Math.min(1, Math.max(MIN_BAR, data[i] ?? MIN_BAR)) : MIN_BAR;
        const barH = norm * height;
        const x = i * (barW + barGap) + barGap / 2;
        return { x, barH, norm };
      });
    }, [data, barCount, height, barW, barGap]);

    /* ── Waveform points (data-driven) ── */
    const wavePoints = useMemo(() => {
      if (!data || data.length < 2) return null;
      return data
        .map((v, i) => {
          const x = (i / (data.length - 1)) * VB_W;
          const y = height * (1 - Math.min(1, Math.max(0, v)));
          return `${x.toFixed(2)},${y.toFixed(2)}`;
        })
        .join(" ");
    }, [data, height]);

    /* ── Idle waveform — two full periods for seamless CSS scroll ── */
    const idleWavePoints = useMemo(() => {
      const n = 80;
      return Array.from({ length: n }, (_, i) => {
        const x = (i / (n - 1)) * VB_W * 2; // 0 → 200 (double width)
        const y = height / 2 - height * 0.22 * Math.sin((i / (n - 1)) * 4 * Math.PI);
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      }).join(" ");
    }, [height]);

    /* ── Render ── */
    return (
      <svg
        ref={ref}
        role="img"
        aria-hidden="true"
        viewBox={`0 0 ${VB_W} ${height}`}
        width="100%"
        height={height}
        preserveAspectRatio="none"
        className={classNames("wim-voice-visualizer", 
          styles.root,
          styles[mode],
          styles[sentiment],
          isActive && styles.active,
          !isActive && styles.muted,
          className
        )}
        /* グローバルリセット svg { height: auto } が height 属性を打ち消すため CSS でも指定する */
        style={{ height: `${height}px`, ...style }}
        {...props}
      >
        {mode === "bars" &&
          bars.map(({ x, barH, norm }, i) => (
            <rect
              key={i}
              className={classNames(styles.bar, useIdle && styles.idle)}
              style={
                useIdle
                  ? ({ "--delay": `${((i / barCount) * 0.5).toFixed(3)}s` } as React.CSSProperties)
                  : undefined
              }
              x={x}
              y={norm > MIN_BAR ? height - barH : height * 0.45}
              width={barW}
              height={norm > MIN_BAR ? barH : height * 0.1}
              rx={barW * 0.5}
            />
          ))}

        {mode === "waveform" && (
          <g
            className={classNames(styles.waveGroup, useIdle && styles.idle)}
            style={{ overflow: "hidden" }}
          >
            <polyline
              className={styles.wave}
              points={wavePoints ?? idleWavePoints}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
        )}
      </svg>
    );
  }
);

VoiceVisualizer.displayName = "VoiceVisualizer";
