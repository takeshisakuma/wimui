import type { Meta, StoryObj } from "@storybook/react-vite";
import { LoadingOverlay } from "@/components/LoadingOverlay/LoadingOverlay";
import React from "react";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof LoadingOverlay> = {
  title: "Components/Loading States/LoadingOverlay",
  component: LoadingOverlay,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    visible: {
      control: "boolean",
    },
    loaderType: {
      control: "select",
      options: ["spinner", "bars", "dots", "pulse"],
    },
    loaderSize: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
    },
    loaderColor: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "neutral",
        "currentColor",
      ],
    },
    backdropVariant: {
      control: "select",
      options: ["light", "dark"],
    },
    blur: {
      control: "select",
      options: ["none", "sm", "md", "lg"],
    },
    fixed: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof LoadingOverlay>;

export const Basic: Story = {
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary",
  },
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div
        style={{
          position: "relative",
          height: "400px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3>{t("story_loading_overlay_content_title")}</h3>
          <p>{t("story_loading_overlay_content_desc")}</p>
        </div>
        <LoadingOverlay {...args} />
      </div>
    );
  },
};

export const WithMessage: Story = {
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary",
    message: "Loading data...",
  },
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div
        style={{
          position: "relative",
          height: "400px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3>{t("story_loading_overlay_content_title")}</h3>
          <p>{t("story_loading_overlay_with_msg_desc")}</p>
        </div>
        <LoadingOverlay {...args} message={t("story_loading_overlay_loading_data")} />
      </div>
    );
  },
};

export const DifferentLoaderTypes: Story = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "20px",
      }}
    >
      {(["spinner", "bars", "dots", "pulse"] as const).map((type) => (
        <div
          key={type}
          style={{
            position: "relative",
            height: "300px",
            border: "1px solid #ddd",
            borderRadius: "8px",
          }}
        >
          <div style={{ padding: "20px" }}>
            <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
          </div>
          <LoadingOverlay visible={true} loaderType={type} />
        </div>
      ))}
    </div>
  ),
};

export const BackdropVariants: Story = {
  render: function Render() {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "300px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          }}
        >
          <div style={{ padding: "20px", color: "white" }}>
            <h4>{t("story_loading_overlay_light_backdrop")}</h4>
          </div>
          <LoadingOverlay
            visible={true}
            backdropVariant="light"
            loaderColor="primary"
          />
        </div>
        <div
          style={{
            position: "relative",
            height: "300px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        >
          <div style={{ padding: "20px", color: "white" }}>
            <h4>{t("story_loading_overlay_dark_backdrop")}</h4>
          </div>
          <LoadingOverlay
            visible={true}
            backdropVariant="dark"
            loaderColor="currentColor"
          />
        </div>
      </div>
    );
  },
};

export const BlurEffects: Story = {
  render: function Render() {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
        }}
      >
        {(["none", "sm", "md", "lg"] as const).map((blurLevel) => (
          <div
            key={blurLevel}
            style={{
              position: "relative",
              height: "300px",
              border: "1px solid #ddd",
              borderRadius: "8px",
              backgroundImage: "url(https://picsum.photos/400/300)",
              backgroundSize: "cover",
            }}
          >
            <div
              style={{
                padding: "20px",
                color: "white",
                textShadow: "0 0 4px black",
              }}
            >
              <h4>
                {t("story_loading_overlay_blur")}: {blurLevel}
              </h4>
            </div>
            <LoadingOverlay visible={true} blur={blurLevel} />
          </div>
        ))}
      </div>
    );
  },
};

export const FullScreen: Story = {
  args: {
    visible: false,
    fixed: true,
    loaderType: "spinner",
    loaderSize: "xl",
    message: "Loading application...",
  },
  render: function FullScreenStory(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };

    return (
      <div style={{ padding: "20px" }}>
        <Button onClick={handleClick}>
          {t("story_loading_overlay_show_fullscreen")}
        </Button>
        <p>{t("story_loading_overlay_fullscreen_desc")}</p>
        <LoadingOverlay
          {...args}
          visible={loading}
          message={t("story_loading_overlay_loading_app")}
        />
      </div>
    );
  },
};

export const Interactive: Story = {
  render: function InteractiveStory() {
    const { t } = useTranslation(["docs", "common", "components"]);
    const [loading, setLoading] = React.useState(false);

    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };

    return (
      <div
        style={{
          position: "relative",
          height: "400px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "20px",
        }}
      >
        <h3>{t("story_loading_overlay_interactive_title")}</h3>
        <p>{t("story_loading_overlay_interactive_desc")}</p>
        <Button onClick={handleClick} disabled={loading} label={t("story_loading_overlay_load_data")} />
        <div style={{ marginTop: "20px" }}>
          <p>{t("story_loading_overlay_overlaid_desc")}</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <LoadingOverlay
          visible={loading}
          loaderType="spinner"
          loaderSize="lg"
          message={t("story_loading_overlay_fetching_data")}
        />
      </div>
    );
  },
};

export const CustomLoader: Story = {
  args: {
    visible: true,
    children: (
      <div style={{ textAlign: "center", color: "white" }}>
        <Icon
          name="ClockIcon"
          style={{ width: "48px", height: "48px", marginBottom: "16px" }}
        />
        <div style={{ fontSize: "18px", fontWeight: "bold" }}>
          Please wait...
        </div>
      </div>
    ),
  },
  render: function Render(args) {
    const { t } = useTranslation(["docs", "common", "components"]);
    return (
      <div
        style={{
          position: "relative",
          height: "400px",
          border: "1px solid #ddd",
          borderRadius: "8px",
        }}
      >
        <div style={{ padding: "20px" }}>
          <h3>{t("story_loading_overlay_custom_title")}</h3>
          <p>{t("story_loading_overlay_custom_desc")}</p>
        </div>
        <LoadingOverlay
          {...args}
          children={
            <div style={{ textAlign: "center", color: "white" }}>
              <Icon
                name="ClockIcon"
                style={{ width: "48px", height: "48px", marginBottom: "16px" }}
              />
              <div style={{ fontSize: "18px", fontWeight: "bold" }}>
                {t("story_loading_overlay_wait")}
              </div>
            </div>
          }
        />
      </div>
    );
  },
};
