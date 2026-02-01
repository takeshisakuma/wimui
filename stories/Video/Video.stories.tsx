import type { Meta, StoryObj } from "@storybook/react";
import { Video } from "./Video";
import sampleVideo from "../../src/media/videosample.mp4";
import videoPoster from "../../src/media/video_poster.webp";

const meta: Meta<typeof Video> = {
    title: "Component/Media/Video",
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
} satisfies Meta<typeof Video>;

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
    args: {
        src: sampleVideo,
        poster: videoPoster,
        width: 600,
        autoPlay: true,
        muted: true,
        loop: true,
        controls: false,
        caption: "自動再生＆ループ設定（ミュート必須）",
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
