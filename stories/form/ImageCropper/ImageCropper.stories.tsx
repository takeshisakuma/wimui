import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { Stack, Text } from "wimui";
import { ImageCropper, type ImageCropDetail } from "@/components/form/ImageCropper/ImageCropper";
import { ALL_NAMESPACES } from "../../i18nConstants";

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

/**
 * 切り抜いた結果を、その場に出す。`onApply` には、切り抜いた画像（data URL）と、切り抜きの数値が渡る。
 * 出力は元の画像の解像度で、`maxOutputSize` で長いほうの辺の上限を決められる。
 */
export const CropResult: Story = {
  args: {
    src: "./images/sample-landscape.png",
    aspectRatio: 1,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [result, setResult] = useState<{ dataUrl: string; detail: ImageCropDetail } | null>(null);
    return (
      <Stack gap="md">
        <ImageCropper {...args} onApply={(dataUrl, detail) => setResult({ dataUrl, detail })} />
        {result && (
          <Stack gap="sm">
            <img src={result.dataUrl} alt={t("story.imagecropper_result_alt")} data-testid="crop-output" />
            <Text size="sm" data-testid="crop-detail" data-detail={JSON.stringify(result.detail)}>
              {t("story.imagecropper_result_size", { width: result.detail.width, height: result.detail.height })}
            </Text>
          </Stack>
        )}
      </Stack>
    );
  },
};
