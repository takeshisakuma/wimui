import React, { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ImageCompare } from "@/components/media/ImageCompare/ImageCompare";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

// A real bitmap photo (served from public/) is the "after"; the "before" is the
// same photo desaturated at runtime via a canvas, so both are pixel-aligned and
// the slider reveals a meaningful grayscale-to-color edit.
const PHOTO = "./demo/lightbox_1.png";

const useGrayscale = (src: string): string | null => {
  // VRT: skip async canvas desaturation — first paint would show the color
  // photo, then swap to grayscale after Image.onload (CI flake).
  // @ts-expect-error: __VRT__ is a custom global flag for testing
  const isVrt = typeof window !== "undefined" && Boolean(window.__VRT__);
  const [url, setUrl] = useState<string | null>(isVrt ? src : null);
  useEffect(() => {
    if (isVrt) return;
    let cancelled = false;
    const img = new window.Image();
    img.onload = () => {
      if (cancelled) return;
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.filter = "grayscale(1) contrast(0.95) brightness(1.05)";
      ctx.drawImage(img, 0, 0);
      try {
        setUrl(canvas.toDataURL("image/png"));
      } catch {
        setUrl(null);
      }
    };
    img.src = src;
    return () => {
      cancelled = true;
    };
  }, [src, isVrt]);
  return url;
};

const meta: Meta<typeof ImageCompare> = {
  title: "Components/Media/ImageCompare",
  component: ImageCompare,
  parameters: {
    layout: "centered",
  },
  args: {
    after: PHOTO,
    width: "min(480px, 100vw - 2rem)",
    height: 300,
  },
};

export default meta;
type Story = StoryObj<typeof ImageCompare>;

const useDemo = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const before = useGrayscale(PHOTO) ?? PHOTO;
  // @ts-expect-error: __VRT__ is a custom global flag for testing
  const isVrt = typeof window !== "undefined" && window.__VRT__;
  if (isVrt) {
    return {
      before,
      beforeAlt: "Original photo",
      afterAlt: "Edited photo",
      beforeLabel: "Before",
      afterLabel: "After",
    };
  }
  return {
    before,
    beforeAlt: t("story.imagecompare_before_alt"),
    afterAlt: t("story.imagecompare_after_alt"),
    beforeLabel: t("story.imagecompare_before"),
    afterLabel: t("story.imagecompare_after"),
  };
};

export const Default: Story = {
  render: (args) => {
    const { before, beforeAlt, afterAlt } = useDemo();
    return <ImageCompare {...args} before={before} beforeAlt={beforeAlt} afterAlt={afterAlt} />;
  },
};

export const WithLabels: Story = {
  render: (args) => {
    const demo = useDemo();
    return <ImageCompare {...args} {...demo} />;
  },
};

export const Vertical: Story = {
  render: (args) => {
    const demo = useDemo();
    return <ImageCompare {...args} {...demo} orientation="vertical" />;
  },
};

export const Controlled: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const demo = useDemo();
    const [pos, setPos] = useState(30);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
        <ImageCompare {...args} {...demo} position={pos} onPositionChange={setPos} />
        <input
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label={t("story.imagecompare_position_label")}
          style={{ width: "min(480px, 100vw - 2rem)" }}
        />
      </div>
    );
  },
};
