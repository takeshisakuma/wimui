import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Carousel } from "@/components/data-display/Carousel/Carousel";
import SampleImage from "@/media/imagesanple.webp";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof Carousel> = {
  title: "Components/Media/Carousel",
  component: Carousel,
  parameters: {
    layout: "fullscreen",
  },
  args: {
    loop: true,
  },
  argTypes: {
    autoPlay: { control: "boolean" },
    interval: { control: "number" },
    showIndicators: { control: "boolean" },
    showControls: { control: "boolean" },
    loop: { control: "boolean" },
    slidesToShow: { control: "number" },
    aspectRatio: { control: "text" },
    objectFit: {
      control: "select",
      options: ["fill", "contain", "cover", "none", "scale-down"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const ImagePlaceholder = ({
  index,
  label,
}: {
  index: number;
  label: string;
}) => (
  <div
    style={{
      width: "100%",
      height: "300px",
      backgroundColor: [
        "#f44336",
        "#2196f3",
        "#4caf50",
        "#ff9800",
        "#9c27b0",
        "#3f51b5",
      ][index % 6],
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      fontSize: "32px",
      fontWeight: "bold",
      border: "4px solid rgba(255,255,255,0.2)",
      boxSizing: "border-box",
    }}
  >
    {label} {index + 1}
  </div>
);

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({ length: 4 }).map((_, i) => (
      <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />
    ));
    return <Carousel {...args}>{slides}</Carousel>;
  },
};

export const MultipleItems: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({ length: 6 }).map((_, i) => (
      <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />
    ));
    return (
      <Carousel {...args} slidesToShow={3}>
        {slides}
      </Carousel>
    );
  },
  parameters: {
    layout: "padded",
  },
};

export const Responsive: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({ length: 6 }).map((_, i) => (
      <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />
    ));
    return (
      <Carousel
        {...args}
        slidesToShow={{
          base: 1,
          sm: 2,
          md: 3,
          lg: 4,
        }}
      >
        {slides}
      </Carousel>
    );
  },
  parameters: {
    layout: "fullscreen",
  },
};

export const AutoPlay: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({ length: 4 }).map((_, i) => (
      <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />
    ));
    return (
      <Carousel {...args} autoPlay={true} interval={3000}>
        {slides}
      </Carousel>
    );
  },
};

export const CustomContent: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Carousel {...args}>
        <div style={{ padding: "0 10px", width: "100%" }}>
          <div
            style={{
              padding: "20px",
              border: "1px solid var(--wim-color-border)",
              borderRadius: "8px",
              background: "var(--wim-color-surface-variant)",
            }}
          >
            <h3>
              {t("story.carousel_card")} 1
            </h3>
            <p>{t("story.carousel_msg_loop")}</p>
          </div>
        </div>
        <div style={{ padding: "0 10px", width: "100%" }}>
          <div
            style={{
              padding: "20px",
              border: "1px solid var(--wim-color-border)",
              borderRadius: "8px",
              background: "var(--wim-color-surface-variant)",
            }}
          >
            <h3>
              {t("story.carousel_card")} 2
            </h3>
            <p>{t("story.carousel_msg_multiple")}</p>
          </div>
        </div>
        <div style={{ padding: "0 10px", width: "100%" }}>
          <div
            style={{
              padding: "20px",
              border: "1px solid var(--wim-color-border)",
              borderRadius: "8px",
              background: "var(--wim-color-surface-variant)",
            }}
          >
            <h3>
              {t("story.carousel_card")} 3
            </h3>
            <p>{t("story.carousel_msg_smooth")}</p>
          </div>
        </div>
      </Carousel>
    );
  },
};

export const NoLoop: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const slides = Array.from({ length: 3 }).map((_, i) => (
      <ImagePlaceholder key={i} index={i} label={t("story.carousel_slide")} />
    ));
    return (
      <Carousel {...args} loop={false}>
        {slides}
      </Carousel>
    );
  },
};

export const WithImage: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Carousel {...args}>
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={`img-${i}`} style={{ width: "100%", height: "300px" }}>
            <img
              src={SampleImage}
              alt={`${t("story.carousel_sample_alt")} ${i + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        ))}
      </Carousel>
    );
  },
};

export const AspectRatioCheck: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Carousel {...args} aspectRatio="16/9" objectFit="cover">
        {Array.from({ length: 4 }).map((_, i) => (
          <img key={`img-${i}`} src={SampleImage} alt={`${t("story.carousel_sample_alt")} ${i + 1}`} />
        ))}
      </Carousel>
    );
  },
};
