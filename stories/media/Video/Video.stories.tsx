import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import sampleVideo from "@/media/videosample.mp4";
import sampleCaptions from "@/media/videosample.en.vtt?url";
import videoPoster from "@/media/video_poster.webp";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Video } from "wimui";


/**
 * T205: 字幕トラックが 1 つも無い `<video>` は、axe が `video-caption`（critical）
 * を「人が確かめろ」として出し続ける ── 音声があるかどうかは機械には分からない
 * ため。**サンプル動画には実際に音声トラックがある**ので、見本のほうが正しい
 * （＝ `tracks` を渡す）形にする。全ストーリーに効かせたいので meta の args に置く。
 */
const sampleTracks = [
  {
    kind: "captions",
    src: sampleCaptions,
    srcLang: "en",
    label: "English",
  },
];

const meta: Meta<typeof Video> = {
  title: "Components/Media/Video",
  component: Video,
  parameters: {
    layout: "centered",
  },
  args: {
    tracks: sampleTracks,
  },
  // tags: ["autodocs"],
  argTypes: {
    radius: {
      control: "select",
      options: ["none", "sm", "md", "lg", "full"],
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
    const { t } = useTranslation(ALL_NAMESPACES);
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
        caption={t("story.video_autoplay_caption")}
      />
    );
  },
};

export const Rounded: Story = {
  args: {
    src: sampleVideo,
    poster: videoPoster,
    width: 400,
    radius: "lg",
    shadow: true,
  },
};

export const CustomControls: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Video
        {...args}
        src={sampleVideo}
        poster={videoPoster}
        width={600}
        customControls={true}
        radius="md"
        shadow={true}
        caption={t("story.video_custom_caption")}
      />
    );
  },
};

export const FullFeatured: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Video
        {...args}
        width={800}
        videoId="sample-demo-vid"
        resumePlayback={true}
        autoPlayNext={true}
        controls={false}
        radius="lg"
        shadow={true}
        border={true}
        fit="cover"
        preload="auto"
        caption={t("story.video_full_caption")}
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
            title: t("story.video_ep1"),
            poster: videoPoster,
          },
          { src: sampleVideo, title: t("story.video_ep2"), poster: videoPoster },
          { src: sampleVideo, title: t("story.video_ep3"), poster: videoPoster },
        ]}
      />
    );
  },
};
export const PremiumFeatures: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [videoKey, setVideoKey] = React.useState(0);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.video_premium_features_lazy_load")}</p>
          <div style={{ marginBottom: "1rem" }}>
            <Button
              variant="solid"
              onClick={() => setVideoKey((prev) => prev + 1)}
              icon="RefreshIcon"

            >{t("story.video_premium_features_reload")}</Button>
          </div>
          <Video
            {...args}
            key={videoKey}
            src={`${sampleVideo}?k=${videoKey}`}
            poster={videoPoster}
            width={600}
            fadeIn
            demoDelay={2000}
            radius="md"
            shadow
            caption={t("story.video_premium_features_caption")}
          />
        </div>
      </div>
    );
  },
};
