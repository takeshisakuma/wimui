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
    barCount: 24,
    height: 40,
  },
};

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

export const Inactive: Story = {
  args: {
    isActive: false,
    mode: "bars",
  },
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
          <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>
            {t("story.voice_label_recording")}
          </p>
          <VoiceVisualizer mode="bars" isActive aria-label={t("story.voice_label_recording")} />
        </div>
        <div>
          <p style={{ marginBottom: "8px", fontSize: "12px", color: "#666" }}>
            {t("story.voice_label_playback")}
          </p>
          <VoiceVisualizer mode="waveform" isActive aria-label={t("story.voice_label_playback")} />
        </div>
      </div>
    );
  },
};
