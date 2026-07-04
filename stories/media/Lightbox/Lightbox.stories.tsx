import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
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

const DEMO_IMAGES = [
  {
    src: "/demo/lightbox_1.png",
    alt: "Mountain landscape",
    title: "Mountain Sunset",
    caption: "A stunning mountain landscape at sunset with a lake in the foreground.",
  },
  {
    src: "/demo/lightbox_2.png",
    alt: "Modern building",
    title: "Minimalist Architecture",
    caption: "A modern architectural building with glass facade and blue sky.",
  },
  {
    src: "/demo/lightbox_3.png",
    alt: "Tropical flower",
    title: "Exotic Flora",
    caption: "A close-up of a vibrant tropical flower with dew drops.",
  },
];

export const Default: Story = {
  render: () => (
    <Lightbox>
      <LightboxGallery items={[{ src: DEMO_IMAGES[0].src, alt: DEMO_IMAGES[0].alt }]}>
        <LightboxTrigger src={DEMO_IMAGES[0].src}>
          <Image
            src={DEMO_IMAGES[0].src}
            alt={DEMO_IMAGES[0].alt}
            width={300}
            radius="md"
            shadow
          />
        </LightboxTrigger>
      </LightboxGallery>
      <LightboxContent />
    </Lightbox>
  ),
};

export const Gallery: Story = {
  render: () => (
    <Lightbox>
      <LightboxGallery items={DEMO_IMAGES}>
        {DEMO_IMAGES.map((item, index) => (
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
  ),
};

export const WithCaptions: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
    <Lightbox>
      <LightboxGallery items={[DEMO_IMAGES[2]]}>
        <LightboxTrigger src={DEMO_IMAGES[2].src} title={t("story.lightbox_flower_title")} caption={t("story.lightbox_flower_caption")}>
          <Image
            src={DEMO_IMAGES[2].src}
            alt="Flower"
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
