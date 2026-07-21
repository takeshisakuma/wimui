import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageCropper } from "@/components/form/ImageCropper/ImageCropper";

const meta: Meta<typeof ImageCropper> = {
  title: "Components/Advanced Inputs/ImageCropper",
  component: ImageCropper,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    showApplyButton: { control: "boolean" },
    showRotation: { control: "boolean" },
    showZoom: { control: "boolean" },
    aspectRatio: { control: "number" },
  }
};

export default meta;
type Story = StoryObj<typeof ImageCropper>;

export const Default: Story = {
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 1,
    onCrop: (data) => console.log("Cropped data:", data),
    onApply: (data) => console.log("Applied crop:", data),
  },
};

export const Landscape: Story = {
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 16 / 9,
    onApply: (data) => console.log("Applied landscape crop:", data),
  },
};

export const Circular: Story = {
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 1,
    circular: true,
    onApply: (data) => console.log("Applied circular crop:", data),
  },
};
