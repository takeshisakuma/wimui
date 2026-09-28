import React, { useCallback, useEffect, useId, useLayoutEffect, useMemo, useRef, useState } from "react";
import classNames from "classnames";
import styles from "./voice-visualizer.module.scss";

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

const useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

/* SVG coordinate constants */
const VB_W = 100; // viewBox width units (waveform only)
const MIN_BAR = 0.05; // minimum visible bar height ratio
// 棒の幅（px）。以前は viewBox 幅 100 を `preserveAspectRatio="none"` で横にだけ
// 引き伸ばしていたので、棒の幅が箱の幅に比例し（1244px で 1 本 28px）、角丸も
// 横長の楕円に歪んでいた。棒モードは viewBox を持たず座標を px にそろえる。
const BAR_W = 4; /* Exception: Structural Logic — 棒の幅。箱の幅に比例させない固定の座標値 */
// 棒と棒の間隔（px）。間隔も固定する。全幅に等間隔で広げると、広い画面では 4px の棒が
// 50px 以上離れてまばらになるため。幅いっぱいに見せたいときは本数で埋める（`barCount="auto"`）。
const BAR_GAP = 3; /* Exception: Structural Logic — 棒の間隔。箱の幅に比例させない固定の座標値 */
// 幅・高さを測る前（初回描画・SSR・ResizeObserver の無い環境）に使う値。
const FALLBACK_BAR_COUNT = 24;
// 待機中の波の 1 周期の本数と、1 本の脈の周期（SCSS の voice-bar-idle の 1.2s と同じ）。
const IDLE_WAVE_BARS = 24;
const IDLE_PULSE_S = 1.2;
const FALLBACK_HEIGHT = 40; /* Exception: Structural Logic — `height="fill"` を測る前の仮の座標値（既定の高さと同じ） */

/** data を count 本へ線形補間で引き直す（`barCount="auto"` で本数が data の長さと違うとき）。 */
const resample = (data: readonly number[], count: number): number[] => {
  if (data.length === 0) return Array.from({ length: count }, () => MIN_BAR);
  if (data.length === 1 || count === 1) return Array.from({ length: count }, () => data[0]);
  return Array.from({ length: count }, (_, i) => {
    const pos = (i * (data.length - 1)) / (count - 1);
    const lo = Math.floor(pos);
    const hi = Math.min(data.length - 1, lo + 1);
    return data[lo] + (data[hi] - data[lo]) * (pos - lo);
  });
};

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
export const VoiceVisualizer = React.forwardRef<SVGSVGElement, VoiceVisualizerProps>(
  (
    {
      mode = "bars",
      data,
      isActive = true,
      disabled = false,
      progress,
      barCount = "auto",
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
    const clipId = useId();

    /* ── 置き場所の寸法 ── */
    // 幅は `barCount="auto"` の本数に、高さは `height="fill"` の座標に使う。
    // 測れないあいだ（初回・SSR・ResizeObserver の無い環境）は既定値で描く。
    const measureWidth = mode === "bars" && barCount === "auto";
    const measureHeight = height === "fill";
    const [box, setBox] = useState<{ w: number; h: number } | null>(null);
    const nodeRef = useRef<SVGSVGElement | null>(null);
    const setRefs = useCallback(
      (node: SVGSVGElement | null) => {
        nodeRef.current = node;
        if (typeof ref === "function") ref(node);
        else if (ref) ref.current = node;
      },
      [ref]
    );

    useIsomorphicLayoutEffect(() => {
      const node = nodeRef.current;
      if (!node || (!measureWidth && !measureHeight) || typeof ResizeObserver === "undefined") return;
      const read = () => {
        const rect = node.getBoundingClientRect();
        setBox((prev) =>
          prev && prev.w === rect.width && prev.h === rect.height ? prev : { w: rect.width, h: rect.height }
        );
      };
      read();
      const ro = new ResizeObserver(read);
      ro.observe(node);
      return () => ro.disconnect();
    }, [measureWidth, measureHeight]);

    const h = height === "fill" ? (box && box.h > 0 ? box.h : FALLBACK_HEIGHT) : height;
    const count =
      barCount === "auto"
        ? box && box.w > 0
          ? Math.max(1, Math.floor((box.w + BAR_GAP) / (BAR_W + BAR_GAP)))
          : FALLBACK_BAR_COUNT
        : barCount;
    const played = data && progress !== undefined ? Math.min(1, Math.max(0, progress)) : undefined;

    /* ── Bars geometry ── */
    // 棒の列は塊の中心を原点にして並べ、描画側で箱の中央（x=50%）に置く。
    // 待機中（useIdle）は全高で描き、CSS の scaleY で縮める。以前は高さ 10% の
    // 仮の棒をさらに scaleY(0.15〜0.65) していたため、40px の箱で 0.6〜2.6px しか
    // 出ていなかった。
    const clusterW = count * BAR_W + (count - 1) * BAR_GAP;
    const bars = useMemo(() => {
      const values = data ? (barCount === "auto" ? resample(data, count) : data) : undefined;
      return Array.from({ length: count }, (_, i) => {
        const norm = useIdle
          ? 1
          : values
            ? Math.min(1, Math.max(MIN_BAR, values[i] ?? MIN_BAR))
            : MIN_BAR;
        const barH = norm * h;
        const x = i * (BAR_W + BAR_GAP) - clusterW / 2;
        // 棒の中心が再生位置より手前なら再生済み
        const isPlayed = played === undefined || (i + 0.5) / count <= played;
        return { x, barH, norm, isPlayed };
      });
    }, [data, barCount, count, h, useIdle, clusterW, played]);

    /* ── Waveform points (data-driven) ── */
    const wavePoints = useMemo(() => {
      if (!data || data.length < 2) return null;
      return data
        .map((v, i) => {
          const x = (i / (data.length - 1)) * VB_W;
          const y = h * (1 - Math.min(1, Math.max(0, v)));
          return `${x.toFixed(2)},${y.toFixed(2)}`;
        })
        .join(" ");
    }, [data, h]);

    /* ── Idle waveform — two full periods for seamless CSS scroll ── */
    const idleWavePoints = useMemo(() => {
      const n = 80;
      return Array.from({ length: n }, (_, i) => {
        const x = (i / (n - 1)) * VB_W * 2; // 0 → 200 (double width)
        const y = h / 2 - h * 0.22 * Math.sin((i / (n - 1)) * 4 * Math.PI);
        return `${x.toFixed(2)},${y.toFixed(2)}`;
      }).join(" ");
    }, [h]);

    /* ── Render ── */
    return (
      <svg
        ref={setRefs}
        viewBox={mode === "waveform" ? `0 0 ${VB_W} ${h}` : undefined}
        width="100%"
        height={height === "fill" ? "100%" : height}
        preserveAspectRatio={mode === "waveform" ? "none" : undefined}
        className={classNames("wim-voice-visualizer",
          styles.root,
          styles[mode],
          styles[sentiment],
          isActive && styles.active,
          disabled && styles.disabled,
          className
        )}
        /* グローバルリセット svg { height: auto } が height 属性を打ち消すため CSS でも指定する */
        style={{ height: height === "fill" ? "100%" : `${height}px`, ...style }}
        {...props}
        /* T168: `{...props}` の後に置く。以前は role="img" と aria-hidden を
           同時にハードコードし、props で aria-hidden だけ上書きすると名前の無い
           img ロールが残った。ラベルがあるときだけ意味を持つ（Sparkline と同じ）。 */
        role={label ? "img" : undefined}
        aria-label={label}
        aria-hidden={label ? undefined : true}
      >
        {mode === "bars" && (
          /* 入れ子の svg を箱の中央に置き、その原点を塊の中心にする（幅を測らずに中央寄せ）。
             width は 0 だと描画されないため 1 にし、はみ出しは overflow で見せる。 */
          <svg x="50%" y={0} width={1} height={h} overflow="visible">
            {bars.map(({ x, barH, norm, isPlayed }, i) => (
              <rect
                key={i}
                className={classNames(styles.bar, useIdle && styles.idle, !isPlayed && styles.unplayed)}
                /* 待機中の波は IDLE_WAVE_BARS 本で 1 周期。以前は全本数に 0〜0.5s を割り振っており、
                   本数を幅で決めると幅いっぱいが 1 本の坂（左が低く右が高い）になった。
                   負の遅れで、最初から周期の途中の姿で描く。 */
                style={
                  useIdle
                    ? ({
                        "--delay": `${(-((i % IDLE_WAVE_BARS) / IDLE_WAVE_BARS) * IDLE_PULSE_S).toFixed(3)}s`,
                      } as React.CSSProperties)
                    : undefined
                }
                x={x}
                y={norm > MIN_BAR ? h - barH : h * 0.45}
                width={BAR_W}
                height={norm > MIN_BAR ? barH : h * 0.1}
                rx={BAR_W / 2}
              />
            ))}
          </svg>
        )}

        {mode === "waveform" && played !== undefined && wavePoints && (
          /* 再生位置: 全体を中立色で描き、再生済みの範囲だけ色付きの線を重ねる */
          <>
            <defs>
              <clipPath id={clipId}>
                <rect x={0} y={0} width={played * VB_W} height={h} />
              </clipPath>
            </defs>
            <polyline
              className={classNames(styles.wave, styles.unplayed)}
              points={wavePoints}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <polyline
              className={styles.wave}
              points={wavePoints}
              clipPath={`url(#${clipId})`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}

        {mode === "waveform" && (played === undefined || !wavePoints) && (
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
