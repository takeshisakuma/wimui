import type { Meta, StoryObj } from "@storybook/react-vite";
import { Video } from "@/components/Video/Video";
import sampleVideo from "@/media/videosample.mp4";
import videoPoster from "@/media/video_poster.webp";

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

export const CustomControls: Story = {
    args: {
        src: sampleVideo,
        poster: videoPoster,
        width: 600,
        customControls: true,
        radius: "medium",
        shadow: true,
        caption: "カスタムコントロール付きビデオ",
    },
};

export const FullFeatured: Story = {
    name: "Full Featured",
    args: {
        width: 800,
        height: 450,
        videoId: "sample-demo-vid",
        resumePlayback: true,
        autoPlayNext: true,
        controls: false,
        radius: "large",
        shadow: true,
        border: true,
        fit: "cover",
        preload: "auto",
        caption: "全機能（全部盛り）プレーヤー: 画質変更・速度・フィット・プレイリスト・レジューム再生",
        customControls: true,
        advancedControls: true,
        qualities: [
            { label: "1080p", src: sampleVideo },
            { label: "720p", src: sampleVideo },
            { label: "Auto", src: sampleVideo },
        ],
        playlist: [
            { src: sampleVideo, title: "エピソード 1: はじまり", poster: videoPoster },
            { src: sampleVideo, title: "エピソード 2: 展開", poster: videoPoster },
            { src: sampleVideo, title: "エピソード 3: 結末", poster: videoPoster },
        ]
    },
};

