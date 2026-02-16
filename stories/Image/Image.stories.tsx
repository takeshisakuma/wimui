import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "@/components/Image/Image";
import sampleImage from "@/media/imagesanple.webp";

const meta: Meta<typeof Image> = {
    title: "Component/Media/Image",
    component: Image,
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
        src: sampleImage,
        alt: "Sample WebP Image",
        width: 400,
    },
};

export const WithCaption: Story = {
    args: {
        src: sampleImage,
        alt: "Sample WebP Image",
        width: 400,
        caption: "これはサンプルのキャプションです。",
    },
};

export const Rounded: Story = {
    args: {
        src: sampleImage,
        alt: "Sample WebP Image",
        width: 200,
        height: 200,
        radius: "large",
        fit: "cover",
    },
};

export const Circular: Story = {
    args: {
        src: sampleImage,
        alt: "Sample WebP Image",
        width: 150,
        height: 150,
        radius: "full",
        fit: "cover",
        border: true,
    },
};

export const WithShadow: Story = {
    args: {
        src: sampleImage,
        alt: "Sample WebP Image",
        width: 400,
        shadow: true,
        radius: "medium",
    },
};


