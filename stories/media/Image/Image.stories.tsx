import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import vibrantLandscape from "@/media/vibrant_landscape.png";
import galleryCity from "@/media/gallery_city.svg";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Image } from "wimui";


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
      options: ["none", "sm", "md", "lg", "full"],
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
    radius: "lg",
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
    radius: "md",
  },
};

export const Filters: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <div>
          <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>{t("story.image_filter_grayscale")}</p>
          <Image
            {...args}
            alt={t("story.image_alt")}
            filter={{ grayscale: "lg" }}
            hoverFilter={{ grayscale: "none" }}
            width={260}
          />
        </div>
        <div>
          <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>{t("story.image_filter_blur")}</p>
          <Image
            {...args}
            alt={t("story.image_alt")}
            filter={{ blur: "sm" }}
            hoverFilter={{ blur: "none" }}
            width={260}
          />
        </div>
        <div>
          <p style={{ marginBottom: "0.5rem", fontSize: "0.875rem" }}>{t("story.image_filter_sepia")}</p>
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
      <div>
        <div
          style={{
            position: "relative",
            width: "min(600px, 100%)",
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
                backgroundColor: "var(--wim-color-glass-bg)",
                padding: "20px",
                color: "var(--wim-color-text-primary)",
              }}
              width={300}
              radius="lg"
              border
            />
          </div>
        </div>
        {/* 説明文は枠の**外**（T213）。枠は `height: 300px` + `overflow: hidden` なので、
            中に置くと 22px のうち 19px が切り落とされ、残りは白文字のままキャンバス地
            （#e5e5e5）に乗って実測 1.25 だった。地は写真ではなくページなので、白ではなく
            本文の色で書く。 */}
        <p style={{ marginTop: "1rem", fontWeight: "bold" }}>
          {t("story.image_backdrop_hover_clear", { defaultValue: "Hover to clear backdrop blur" })}
        </p>
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
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Image {...args} alt={t("story.image_alt_low_noise")} noise="sm" width={200} caption={`${t("common.intensity", { defaultValue: "Intensity" })}: sm`} />
            <Image {...args} alt={t("story.image_alt_medium_noise")} noise="md" width={200} caption={`${t("common.intensity", { defaultValue: "Intensity" })}: md`} />
            <Image {...args} alt={t("story.image_alt_high_noise")} noise="lg" width={200} caption={`${t("common.intensity", { defaultValue: "Intensity" })}: lg`} />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_advanced_duotone")}</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Image
              {...args}
              alt={t("story.image_alt_duotone_gold")}
              duotone={{ light: "#f0dfaf", dark: "#3f3f3f" }}
              width={300}
              caption={t("story.image_advanced_goldish")}
            />
            <Image
              {...args}
              alt={t("story.image_alt_duotone_cyber")}
              duotone={{ light: "#00fff2", dark: "#6000ff" }}
              width={300}
              caption={t("story.image_advanced_cyberpunk")}
            />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_advanced_overlay_vignette")}</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ position: "relative" }}>
              <Image
                {...args}
                alt={t("story.image_alt_overlay")}
                overlay={{
                  color: "linear-gradient(to top, rgba(0,0,0,0.8), transparent)",
                  intensity: "md",
                }}
                width={300}
              />
              {/* 画像上のテキストはスクリム背景で実コントラストを担保する（axe: color-contrast） */}
              <div style={{ position: "absolute", bottom: "12px", left: "12px", padding: "8px 12px", color: "var(--wim-color-white)", background: "var(--wim-color-overlay-strong)", borderRadius: "var(--wim-radius-sm)", zIndex: 2 }}>
                <h4 style={{ margin: 0 }}>{t("story.image_advanced_text_over")}</h4>
                <p style={{ margin: 0, fontSize: "0.8rem" }}>{t("story.image_advanced_overlay_readability")}</p>
              </div>
            </div>
            
            <Image
              {...args}
              alt={t("story.image_alt_hover_overlay")}
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
    radius: "md",
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
              alt={t("story.image_alt_zoom")}
              zoom={1.1}
              width={300}
              radius="md"
              caption={t("story.image_motion_effects_zoom_caption")}
            />
          </div>
          <div>
            <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_motion_effects_3d_tilt")}</p>
            <Image
              {...args}
              alt={t("story.image_alt_tilt")}
              tilt
              width={300}
              radius="md"
              shadow
              caption={t("story.image_motion_effects_tilt_caption")}
            />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_motion_effects_fade_in")}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Button
                variant="solid"
                onClick={() => setImageKey((prev) => prev + 1)}
                icon="RefreshIcon"

              >{t("story.image_motion_effects_reload")}</Button>
            </div>
            <Image
              {...args}
              alt={t("story.image_alt")}
              key={imageKey}
              src={`${vibrantLandscape}?k=${imageKey}`}
              fadeIn
              demoDelay={2000}
              width={400}
              radius="md"
              shadow
              caption={t("story.image_motion_effects_interactive_caption")}
            />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_filter_combo")}</p>
          <div style={{ maxWidth: "500px" }}>
            <Image
              {...args}
              alt={t("story.image_alt_combo")}
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
              radius="lg"
              shadow
              caption={t("story.image_caption_combo")}
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
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Image
              {...args}
              alt={t("story.image_alt_multiply", { defaultValue: "Multiply overlay" })}
              overlay={{
                color: "#3498db",
                intensity: "md",
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
                intensity: "md",
                blendMode: "overlay",
              }}
              width={300}
              caption={t("story.image_caption_red_overlay", { defaultValue: "Red Overlay (Increases contrast)" })}
            />
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_blending_image", { defaultValue: "Image Blending with Background" })}</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <div style={{ padding: "20px", background: "var(--wim-color-surface-variant)" }}>
              <Image
                {...args}
                alt={t("story.image_alt_multiply_bg", { defaultValue: "Multiply image" })}
                blendMode="multiply"
                bgColor="#f1c40f"
                width={300}
                caption={t("story.image_caption_yellow_multiply", { defaultValue: "Image Multiply with Yellow BG" })}
              />
            </div>
            <div style={{ padding: "20px", background: "var(--wim-color-surface-inverse)", color: "var(--wim-color-text-on-inverse)" }}>
              <Image
                {...args}
                alt={t("story.image_alt_screen", { defaultValue: "Image Screen (Whitening effect)" })}
                blendMode="screen"
                width={300}
                caption={t("story.image_caption_screen", { defaultValue: "Image Screen (Whitening effect)" })}
              />
            </div>
          </div>
        </div>

        <div>
          <p style={{ marginBottom: "1rem", fontWeight: "bold" }}>{t("story.image_blending_difference", { defaultValue: "Creative: Difference Mode" })}</p>
          {/* このブロックだけ地の画像を差し替えている（T213）。
              `difference` は「地の反転」を描くので、**地が中間調だと原理的に
              コントラストが出ない**（地 128 なら文字も 127）。`vibrant_landscape` は
              色の粗いバケットが 265 ある豊かな写真で、まさに中間調が多く、
              ラベルが乗る中央の帯では**画素の 43.6% が 3:1 を割っていた**
              （実測の中央値 3.35 / 下位 5% は 1.15）。
              候補を全部測って選んだのが `gallery_city` ── 中央値 11.27 /
              下位 5% 8.47 / 3 未満は 1.7%。`imagesanple` は数値だけなら最良だが
              色バケットが 8 しかない実質フラットな画像で、ブレンドのデモにならない。
              **文言と blend の指定は変えていない。** */}
          <div style={{ position: "relative", width: "400px" }}>
            <Image
              {...args}
              src={galleryCity}
              alt={t("story.image_alt_difference", { defaultValue: "Difference" })}
              overlay={{
                color: "white",
                intensity: 1,
                blendMode: "difference",
              }}
              width="100%"
            />
            <div style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              color: "white",
              fontSize: "2rem",
              fontWeight: "bold",
              mixBlendMode: "difference",
              padding: "0.5rem 1rem",
              borderRadius: "4px"
            }}>
              {t("story.image_inverted_text", { defaultValue: "INVERTED TEXT" })}
            </div>
          </div>
        </div>
      </div>
    );
  },
  args: {
    src: vibrantLandscape,
    radius: "md",
  },
};
