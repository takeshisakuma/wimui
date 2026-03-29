import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Image } from "@/components/Image/Image";
import { Button } from "@/components/Button/Button";
import vibrantLandscape from "@/media/vibrant_landscape.png";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Image> = {
  title: "Components/Media/Image",
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
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story.image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400,
  },
};

export const WithCaption: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Image
        {...args}
        alt={t("story.image_alt")}
        caption={t("story.image_caption")}
      />
    );
  },
  args: {
    src: vibrantLandscape,
    width: 400,
  },
};

export const Rounded: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story.image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 200,
    height: 200,
    radius: "large",
    fit: "cover",
  },
};

export const Circular: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story.image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 150,
    height: 150,
    radius: "full",
    fit: "cover",
    border: true,
  },
};

export const WithShadow: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Image {...args} alt={t("story.image_alt")} />;
  },
  args: {
    src: vibrantLandscape,
    width: 400,
    shadow: true,
    radius: "medium",
  },
};

export const Filters: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <div>
          <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Grayscale to Color (Hover)</p>
          <Image
            {...args}
            alt={t("story.image_alt")}
            filter={{ grayscale: "lg" }}
            hoverFilter={{ grayscale: "none" }}
            width={260}
          />
        </div>
        <div>
          <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Blur to Clear (Hover)</p>
          <Image
            {...args}
            alt={t("story.image_alt")}
            filter={{ blur: "sm" }}
            hoverFilter={{ blur: "none" }}
            width={260}
          />
        </div>
        <div>
          <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>Sepia (Fixed)</p>
          <Image
            {...args}
            alt={t("story.image_alt")}
            filter={{ sepia: "md" }}
            width={260}
          />
        </div>
      </div>
    );
  },
  args: {
    src: vibrantLandscape,
  },
};

export const Glassmorphism: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          position: "relative",
          width: "600px",
          height: "300px",
          overflow: "hidden",
          borderRadius: "12px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* 背景画像 */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${vibrantLandscape})`,
            backgroundSize: "cover",
            filter: "saturate(1.5) brightness(0.8)",
          }}
        />
        {/* Backdrop Filterをかけた画像（透過素材を想定） */}
        <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
          <Image
            {...args}
            alt={t("story.image_alt")}
            backdropFilter={{ blur: "md" }}
            hoverBackdropFilter={{ blur: "none" }}
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              padding: "20px",
            }}
            width={300}
            radius="large"
            border
          />
          <p style={{ color: "white", marginTop: "1rem", fontWeight: "bold" }}>
            {t("story.image_backdrop_hover_clear", { defaultValue: "Hover to clear backdrop blur" })}
          </p>
        </div>
      </div>
    );
  },
  args: {
    src: vibrantLandscape,
  },
};

export const AdvancedEffects: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_advanced_noise")}</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Image {...args} alt="Low noise" noise="sm" width={200} caption={`${t("common.intensity", { defaultValue: "Intensity" })}: sm`} />
            <Image {...args} alt="Medium noise" noise="md" width={200} caption={`${t("common.intensity", { defaultValue: "Intensity" })}: md`} />
            <Image {...args} alt="High noise" noise="lg" width={200} caption={`${t("common.intensity", { defaultValue: "Intensity" })}: lg`} />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_advanced_duotone")}</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Image
              {...args}
              alt="Duotone gold"
              duotone={{ light: "#f0dfaf", dark: "#3f3f3f" }}
              width={300}
              caption={t("story.image_advanced_goldish")}
            />
            <Image
              {...args}
              alt="Duotone cyber"
              duotone={{ light: "#00fff2", dark: "#6000ff" }}
              width={300}
              caption={t("story.image_advanced_cyberpunk")}
            />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_advanced_overlay_vignette")}</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ position: "relative" }}>
              <Image
                {...args}
                alt="Overlay"
                overlay={{
                  color: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  intensity: "medium",
                }}
                width={300}
              />
              <div style={{ position: "absolute", bottom: "20px", left: "20px", color: "white", zIndex: 2 }}>
                <h4 style={{ margin: 0 }}>{t("story.image_advanced_text_over")}</h4>
                <p style={{ margin: 0, fontSize: "0.8rem" }}>{t("story.image_advanced_overlay_readability")}</p>
              </div>
            </div>
            
            <Image
              {...args}
              alt="Hover overlay"
              overlay={{
                color: "rgba(100, 108, 255, 0.4)",
                showOnHover: true,
              }}
              width={300}
              caption={t("story.image_advanced_hover_brand")}
            />
          </div>
        </div>
      </div>
    );
  },
  args: {
    src: vibrantLandscape,
    radius: "medium",
  },
};

export const MotionEffects: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [imageKey, setImageKey] = React.useState(0);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
          <div>
            <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_motion_effects_smooth_zoom")}</p>
            <Image
              {...args}
              alt="Zoom effect"
              zoom={1.1}
              width={300}
              radius="medium"
              caption={t("story.image_motion_effects_zoom_caption")}
            />
          </div>
          <div>
            <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_motion_effects_3d_tilt")}</p>
            <Image
              {...args}
              alt="Tilt effect"
              tilt
              width={300}
              radius="medium"
              shadow
              caption={t("story.image_motion_effects_tilt_caption")}
            />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_motion_effects_fade_in")}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button
                priority="primary"
                onClick={() => setImageKey((prev) => prev + 1)}
                label={t("story.image_motion_effects_reload")}
                icon="RefreshIcon"
              />
            </div>
            <Image
              {...args}
              key={imageKey}
              src={`${vibrantLandscape}?k=${imageKey}`}
              fadeIn
              demoDelay={2000}
              width={400}
              radius="medium"
              shadow
              caption={t("story.image_motion_effects_interactive_caption")}
            />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>Ultimate Combo</p>
          <div style={{ maxWidth: "500px" }}>
            <Image
              {...args}
              alt="Combo"
              zoom
              tilt
              noise="sm"
              overlay={{
                color: "linear-gradient(to top, rgba(100, 108, 255, 0.6), transparent)",
                showOnHover: true
              }}
              filter={{ grayscale: "sm" }}
              hoverFilter={{ grayscale: "none" }}
              width="100%"
              radius="large"
              shadow
              caption="Zoom + Tilt + Noise + Overlay + Filter"
            />
          </div>
        </div>
      </div>
    );
  },
  args: {
    src: vibrantLandscape,
  },
};
export const BlendingEffects: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_blending_overlay", { defaultValue: "Overlay Blending" })}</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Image
              {...args}
              alt={t("story.image_alt_multiply", { defaultValue: "Multiply overlay" })}
              overlay={{
                color: "#3498db",
                intensity: "medium",
                blendMode: "multiply",
              }}
              width={300}
              caption={t("story.image_caption_blue_multiply", { defaultValue: "Blue Multiply (Adds tint)" })}
            />
            <Image
              {...args}
              alt={t("story.image_alt_overlay", { defaultValue: "Overlay blend" })}
              overlay={{
                color: "#e74c3c",
                intensity: "medium",
                blendMode: "overlay",
              }}
              width={300}
              caption={t("story.image_caption_red_overlay", { defaultValue: "Red Overlay (Increases contrast)" })}
            />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_blending_image", { defaultValue: "Image Blending with Background" })}</p>
          <div style={{ display: "flex", gap: "1rem" }}>
            <div style={{ padding: "20px", background: "linear-gradient(45deg, #f3f3f3, #ddd)" }}>
              <Image
                {...args}
                alt={t("story.image_alt_multiply_bg", { defaultValue: "Multiply image" })}
                blendMode="multiply"
                bgColor="#f1c40f"
                width={300}
                caption={t("story.image_caption_yellow_multiply", { defaultValue: "Image Multiply with Yellow BG" })}
              />
            </div>
            <div style={{ padding: "20px", background: "black" }}>
              <Image
                {...args}
                alt={t("story.image_alt_screen", { defaultValue: "Screen image" })}
                blendMode="screen"
                width={300}
                caption={t("story.image_caption_screen", { defaultValue: "Image Screen (Whitening effect)" })}
              />
            </div>
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_blending_difference", { defaultValue: "Creative: Difference Mode" })}</p>
          <div style={{ position: "relative", width: "400px" }}>
            <Image
              {...args}
              alt={t("story.image_alt_difference", { defaultValue: "Difference" })}
              overlay={{
                color: "white",
                intensity: 1,
                blendMode: "difference",
              }}
              width="100%"
            />
            <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", color: "white", fontSize: "2rem", fontWeight: "bold", mixBlendMode: "difference" }}>
              {t("story.image_inverted_text", { defaultValue: "INVERTED TEXT" })}
            </div>
          </div>
        </div>
      </div>
    );
  },
  args: {
    src: vibrantLandscape,
    radius: "medium",
  },
};
