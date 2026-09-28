import React, { useEffect, useRef, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { VoiceVisualizer } from "@/components/ai/VoiceVisualizer/VoiceVisualizer";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof VoiceVisualizer> = {
  title: "Components/AI/VoiceVisualizer",
  component: VoiceVisualizer,
  parameters: {
    layout: "padded",
  },
  args: {
    mode: "bars",
    isActive: true,
    height: 40,
  },
};

/** 録音済みの音声の振幅（決定的な値。VRT で揺れないように乱数を使わない）。 */
const RECORDED: readonly number[] = Array.from({ length: 120 }, (_, i) => {
  const t = i / 119;
  const envelope = Math.sin(Math.PI * t) * (0.5 + 0.5 * Math.sin(t * 7 * Math.PI) ** 2);
  return 0.08 + 0.85 * envelope * Math.abs(Math.sin(i * 0.9));
});

/** 波形モード用の時間領域のサンプル（0.5 が無音）。 */
const RECORDED_WAVE: readonly number[] = Array.from({ length: 360 }, (_, i) => {
  const t = i / 359;
  const envelope = Math.sin(Math.PI * t) * (0.55 + 0.45 * Math.sin(t * 5 * Math.PI) ** 2);
  return 0.5 + 0.45 * envelope * Math.sin(i * 0.28);
});

export default meta;
type Story = StoryObj<typeof VoiceVisualizer>;

export const BarsIdle: Story = {
  name: "Bars — Idle Animation",
  args: {
    mode: "bars",
    isActive: true,
  },
};

export const WaveformIdle: Story = {
  name: "Waveform — Idle Animation",
  args: {
    mode: "waveform",
    isActive: true,
    height: 40,
  },
};

export const BarsWithData: Story = {
  name: "Bars — Live Data",
  render: () => {
    const [data, setData] = useState<number[]>(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) {
        return Array.from({ length: 24 }, (_, i) => 0.2 + 0.7 * Math.abs(Math.sin(i * 0.5)));
      }
      return Array(24).fill(0.05);
    });
    const frameRef = useRef<number>(0);
    const tRef = useRef(0);

    useEffect(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) return;

      const tick = () => {
        tRef.current += 0.07;
        const t = tRef.current;
        setData(
          Array.from({ length: 24 }, (_, i) => {
            const base = 0.5 + 0.45 * Math.sin(t + i * 0.4);
            const noise = 0.05 * Math.random();
            return Math.min(1, Math.max(0.05, base + noise));
          })
        );
        frameRef.current = requestAnimationFrame(tick);
      };
      frameRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frameRef.current);
    }, []);

    return <VoiceVisualizer mode="bars" data={data} isActive height={40} />;
  },
};

export const WaveformWithData: Story = {
  name: "Waveform — Live Data",
  render: () => {
    const [data, setData] = useState<number[]>(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) {
        return Array.from({ length: 64 }, (_, i) => {
          const phase = (i / 63) * Math.PI * 4;
          return 0.5 + 0.4 * Math.sin(phase);
        });
      }
      return Array(64).fill(0.5);
    });
    const frameRef = useRef<number>(0);
    const tRef = useRef(0);

    useEffect(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) return;

      const tick = () => {
        tRef.current += 0.05;
        const t = tRef.current;
        setData(
          Array.from({ length: 64 }, (_, i) => {
            const phase = (i / 63) * Math.PI * 4;
            return 0.5 + 0.4 * Math.sin(phase + t) * (0.7 + 0.3 * Math.sin(t * 0.5));
          })
        );
        frameRef.current = requestAnimationFrame(tick);
      };
      frameRef.current = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(frameRef.current);
    }, []);

    return <VoiceVisualizer mode="waveform" data={data} isActive height={40} />;
  },
};

/** 録音が終わった音声。止まっているが、薄くはしない（使えないわけではないため）。 */
export const Inactive: Story = {
  args: {
    isActive: false,
    mode: "waveform",
    data: RECORDED_WAVE,
    height: 48,
  },
};

/** 音声を拾えない・流せない（マイクの許可が無いなど）ときだけ薄くする。 */
export const Disabled: Story = {
  args: {
    disabled: true,
    isActive: false,
    mode: "bars",
  },
};

/** 録音の再生。`progress` より手前を色付き、後ろを中立色で描く。 */
export const Playback: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-xl)" }}>
        <VoiceVisualizer
          mode="bars"
          isActive={false}
          data={RECORDED}
          progress={0.35}
          height={32}
          aria-label={t("story.voice_label_playback")}
        />
        <VoiceVisualizer
          mode="waveform"
          isActive={false}
          data={RECORDED_WAVE}
          progress={0.62}
          height={48}
          aria-label={t("story.voice_label_playback")}
        />
      </div>
    );
  },
};

/** `height="fill"` は親の高さに合わせる（親の高さが決まっていること）。棒の本数は幅から決まる。 */
export const FillHeight: Story = {
  render: () => (
    <div style={{ height: 96, display: "flex" }}>{/* 親の高さ（デモ用の固定値） */}
      <VoiceVisualizer mode="bars" height="fill" isActive={false} data={RECORDED} />
    </div>
  ),
};

export const LargeHeight: Story = {
  args: {
    height: 64,
    barCount: 32,
    isActive: true,
  },
};

export const WithAriaLabel: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <p style={{ marginBottom: "var(--wim-spacing-sm)", fontSize: "var(--wim-font-size-xs)", color: "var(--wim-color-text-secondary)" }}>
            {t("story.voice_label_recording")}
          </p>
          <VoiceVisualizer mode="bars" isActive aria-label={t("story.voice_label_recording")} />
        </div>
        <div>
          <p style={{ marginBottom: "var(--wim-spacing-sm)", fontSize: "var(--wim-font-size-xs)", color: "var(--wim-color-text-secondary)" }}>
            {t("story.voice_label_playback")}
          </p>
          <VoiceVisualizer mode="waveform" isActive aria-label={t("story.voice_label_playback")} />
        </div>
      </div>
    );
  },
};
export const SentimentVariants: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "var(--wim-color-text-tertiary)" }}>{t("story.voice_sentiment_positive")}</p>
        <VoiceVisualizer sentiment="positive" isActive />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "var(--wim-color-text-tertiary)" }}>{t("story.voice_sentiment_negative")}</p>
        <VoiceVisualizer sentiment="negative" isActive />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "var(--wim-color-text-tertiary)" }}>{t("story.voice_sentiment_caution")}</p>
        <VoiceVisualizer sentiment="caution" isActive />
      </div>
      <div>
        <p style={{ marginBottom: "8px", fontSize: "12px", color: "var(--wim-color-text-tertiary)" }}>{t("story.voice_sentiment_informative")}</p>
        <VoiceVisualizer sentiment="informative" isActive />
      </div>
    </div>
    );
  },
};
