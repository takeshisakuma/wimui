import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { openWith } from "../../playOpen";
import { Lightbox, LightboxTrigger, LightboxContent, LightboxGallery } from "@/components/media/Lightbox/Lightbox";
import { Image } from "@/components/media/Image/Image";

const meta: Meta<typeof Lightbox> = {
  title: "Components/Media/Lightbox",
  component: Lightbox,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Lightbox>;

const demoImages = (t: (k: string) => string) => [
  {
    src: "./demo/lightbox_1.png",
    alt: t("story.lightbox_alt_mountain"),
    title: t("story.lightbox_title_mountain"),
    caption: t("story.lightbox_caption_mountain"),
  },
  {
    src: "./demo/lightbox_2.png",
    alt: t("story.lightbox_alt_building"),
    title: t("story.lightbox_title_architecture"),
    caption: t("story.lightbox_caption_architecture"),
  },
  {
    src: "./demo/lightbox_3.png",
    alt: t("story.lightbox_alt_tropical"),
    title: t("story.lightbox_title_flora"),
    caption: t("story.lightbox_caption_flora"),
  },
];

export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const images = demoImages(t);
    return (
    <Lightbox>
      <LightboxGallery items={[{ src: images[0].src, alt: images[0].alt }]}>
        <LightboxTrigger src={images[0].src}>
          <Image
            src={images[0].src}
            alt={images[0].alt}
            width={300}
            radius="md"
            shadow
          />
        </LightboxTrigger>
      </LightboxGallery>
      <LightboxContent />
    </Lightbox>
    );
  },
};

export const Gallery: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const images = demoImages(t);
    return (
    <Lightbox>
      <LightboxGallery items={images}>
        {images.map((item, index) => (
          <LightboxTrigger key={index} index={index}>
            <Image
              src={item.src}
              alt={item.alt}
              width={200}
              height={150}
              radius="md"
              shadow
              zoom
            />
          </LightboxTrigger>
        ))}
      </LightboxGallery>
      <LightboxContent />
    </Lightbox>
    );
  },
};

export const WithCaptions: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const images = demoImages(t);
    return (
    <Lightbox>
      <LightboxGallery items={[images[2]]}>
        <LightboxTrigger src={images[2].src} title={t("story.lightbox_flower_title")} caption={t("story.lightbox_flower_caption")}>
          <Image
            src={images[2].src}
            alt={t("story.lightbox_alt_flower")}
            width={400}
            radius="lg"
            shadow
          />
        </LightboxTrigger>
      </LightboxGallery>
      <LightboxContent showCounter={false} />
    </Lightbox>
  );
  },
};

// 開いた姿。ほかのストーリーは閉じたまま撮られるので、開いた中身を変えても VRT と a11y の CI が
// 動かなかった（T293）。docs ページには載せない（play は docs では走らず、defaultOpen はページを開いた瞬間に開く）。
export const Open: Story = {
  ...WithCaptions,
  play: openWith("click", "button", ".wim-lightbox"),
};
