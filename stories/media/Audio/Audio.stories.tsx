import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Audio } from "@/components/media/Audio/Audio";
import { Button } from "@/components/form/Button/Button";
import audioSample from "@/media/audiosample.mp3";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof Audio> = {
  title: "Components/Media/Audio",
  component: Audio,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: audioSample,
    controls: true,
    radius: "none",
  },
};

export const WithCaption: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Audio {...args} caption={t("story.audio_caption")} />;
  },
  args: {
    src: audioSample,
    controls: true,
    radius: "none",
  },
};

export const AutoPlay: Story = {
  args: {
    src: audioSample,
    controls: true,
    autoPlay: true,
    muted: true,
  },
};

export const Rounded: Story = {
  args: {
    src: audioSample,
    customControls: true,
    controls: false,
    radius: "full",
    shadow: true,
    border: true,
  },
};

export const CustomControls: Story = {
  name: "Custom Design",
  args: {
    src: {
      src: audioSample,
      title: "Custom Player",
      artist: "Wim UI",
    },
    customControls: true,
    showMetadata: true,
    radius: "md",
    shadow: true,
    border: true,
  },
};

export const FullFeatured: Story = {
  args: {
    src: [
      {
        src: audioSample,
        title: "Sample Web Audio API",
        artist: "Wim UI",
      },
      {
        src: audioSample,
        title: "Track 2",
        artist: "Wim UI",
      },
    ],
    customControls: true,
    radius: "md",
    shadow: true,
    border: true,
    visualizer: true,
    showMetadata: true,
    fadeIn: 1500,
    fadeOut: 1500,
    crossfade: 2000,
    playbackRate: true,
    hotkeys: true,
    presets: true,
    sleepTimer: true,
  },
};
export const PremiumFeatures: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [audioKey, setAudioKey] = React.useState(0);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.audio_premium_features_lazy_load")}</p>
          <div style={{ marginBottom: "1rem" }}>
            <Button
              variant="filled"
              onClick={() => setAudioKey((prev) => prev + 1)}
              icon="RefreshIcon"

            >{t("story.audio_premium_features_reload")}</Button>
          </div>
          <Audio
            {...args}
            key={audioKey}
            src={audioSample}
            customControls
            showMetadata
            demoDelay={2000}
            radius="md"
            shadow
            caption={t("story.audio_premium_features_caption")}
          />
        </div>
      </div>
    );
  },
};
