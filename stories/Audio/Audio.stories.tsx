import type { Meta, StoryObj } from "@storybook/react";
import { Audio } from "./Audio";
import audioSample from "../../src/media/audiosample.mp3";

const meta: Meta<typeof Audio> = {
    title: "Component/Media/Audio",
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
} satisfies Meta<typeof Audio>;

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
    args: {
        src: audioSample,
        controls: true,
        radius: "none",
        caption: "オーディオサンプルのキャプション",
    },
};

export const Rounded: Story = {
    args: {
        src: audioSample,
        controls: true,
        radius: "full",
        shadow: true,
        border: true,
    },
};

export const AutoPlay: Story = {
    args: {
        src: audioSample,
        controls: true,
        autoPlay: false, // ブラウザの制限を考慮してデフォルトはオフ
        muted: true,
    },
};
