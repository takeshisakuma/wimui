import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Audio } from "@/components/Audio/Audio";
import audioSample from "@/media/audiosample.mp3";
import { useTranslation } from "react-i18next";

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
      options: ["none", "small", "medium", "large", "full"],
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
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Audio {...args} caption={t("story_audio_caption")} />;
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
    radius: "medium",
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
    radius: "medium",
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
