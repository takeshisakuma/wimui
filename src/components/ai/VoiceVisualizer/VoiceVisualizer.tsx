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
  /**
   * Accessible label describing the audio; when omitted the visualizer is
   * hidden from assistive tech
   */
  ariaLabel?: string;
}

/* SVG coordinate constants */
const VB_W = 100; // viewBox width units (waveform only)
const MIN_BAR = 0.05; // minimum visible bar height ratio
// 棒の幅（px）。以前は viewBox 幅 100 を `preserveAspectRatio="none"` で横にだけ
// 引き伸ばしていたので、棒の幅が箱の幅に比例し（1244px で 1 本 28px）、角丸も
// 横長の楕円に歪んでいた。棒モードは viewBox を持たず座標を px にそろえる。
const BAR_W = 4; /* Exception: Structural Logic — 棒の幅。箱の幅に比例させない固定の座標値 */

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
      height = 40, /* Exception: Structural Logic — 波形の描画領域の高さ。bar の尺度の基準になる座標値 */
      className,
      sentiment = "neutral",
      style,
      ariaLabel,
      "aria-label": ariaLabelAttr,
      ...props
    },
    ref
  ) => {
    const useIdle = isActive && !data;
    const label = ariaLabel ?? (typeof ariaLabelAttr === "string" ? ariaLabelAttr : undefined);

    /* ── Bars geometry ── */
    // 棒は各スロットの中心（百分率）に置き、`<g>` で幅の半分だけ戻す。
    // 待機中（useIdle）は全高で描き、CSS の scaleY で縮める。以前は高さ 10% の
    // 仮の棒をさらに scaleY(0.15〜0.65) していたため、40px の箱で 0.6〜2.6px しか
    // 出ていなかった。
    const bars = useMemo(() => {
      return Array.from({ length: barCount }, (_, i) => {
        const norm = useIdle
          ? 1
          : data
            ? Math.min(1, Math.max(MIN_BAR, data[i] ?? MIN_BAR))
            : MIN_BAR;
        const barH = norm * height;
        const cx = `${(((i + 0.5) / barCount) * 100).toFixed(3)}%`;
        return { cx, barH, norm };
      });
    }, [data, barCount, height, useIdle]);

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
        viewBox={mode === "waveform" ? `0 0 ${VB_W} ${height}` : undefined}
        width="100%"
        height={height}
        preserveAspectRatio={mode === "waveform" ? "none" : undefined}
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
        /* T168: `{...props}` の後に置く。以前は role="img" と aria-hidden を
           同時にハードコードし、props で aria-hidden だけ上書きすると名前の無い
           img ロールが残った。ラベルがあるときだけ意味を持つ（Sparkline と同じ）。 */
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
      >
        {mode === "bars" &&
          bars.map(({ cx, barH, norm }, i) => (
            <g key={i} transform={`translate(${-BAR_W / 2} 0)`}>
              <rect
                className={classNames(styles.bar, useIdle && styles.idle)}
                style={
                  useIdle
                    ? ({ "--delay": `${((i / barCount) * 0.5).toFixed(3)}s` } as React.CSSProperties)
                    : undefined
                }
                x={cx}
                y={norm > MIN_BAR ? height - barH : height * 0.45}
                width={BAR_W}
                height={norm > MIN_BAR ? barH : height * 0.1}
                rx={BAR_W / 2}
              />
            </g>
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
