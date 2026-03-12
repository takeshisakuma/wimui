import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Video } from "@/components/Video/Video";
import sampleVideo from "@/media/videosample.mp4";
import videoPoster from "@/media/video_poster.webp";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof Video> = {
  title: "Components/Media/Video",
  component: Video,
  parameters: {
    layout: "centered",
  },
  // tags: ["autodocs"],
  argTypes: {
    radius: {
      control: "select",
      options: ["none", "small", "medium", "large", "full"],
    },
    fit: {
      control: "select",
      options: ["contain", "cover", "fill", "none", "scale-down"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 600,
  },
};

export const AutoPlay: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Video
        {...args}
        src={sampleVideo}
        poster={videoPoster}
        width={600}
        autoPlay={true}
        muted={true}
        loop={true}
        controls={false}
        caption={t("story_video_autoplay_caption")}
      />
    );
  },
};

export const Rounded: Story = {
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 400,
    radius: "large",
    shadow: true,
  },
};

export const CustomControls: Story = {
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Video
        {...args}
        src={sampleVideo}
        poster={videoPoster}
        width={600}
        customControls={true}
        radius="medium"
        shadow={true}
        caption={t("story_video_custom_caption")}
      />
    );
  },
};

export const FullFeatured: Story = {
  name: "Full Featured",
  render: function Render(args) {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <Video
        {...args}
        width={800}
        videoId="sample-demo-vid"
        resumePlayback={true}
        autoPlayNext={true}
        controls={false}
        radius="large"
        shadow={true}
        border={true}
        fit="cover"
        preload="auto"
        caption={t("story_video_full_caption")}
        customControls={true}
        advancedControls={true}
        qualities={[
          { label: "1080p", src: sampleVideo },
          { label: "720p", src: sampleVideo },
          { label: "Auto", src: sampleVideo },
        ]}
        playlist={[
          {
            src: sampleVideo,
            title: t("story_video_ep1"),
            poster: videoPoster,
          },
          { src: sampleVideo, title: t("story_video_ep2"), poster: videoPoster },
          { src: sampleVideo, title: t("story_video_ep3"), poster: videoPoster },
        ]}
      />
    );
  },
};
