import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  FloatButton,
  FloatButtonProps,
} from "@/components/form/FloatButton/FloatButton";
import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof FloatButton> = {
  title: "Components/Navigation Utilities/FloatButton",
  component: FloatButton,
  tags: [],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    position: {
      control: "select",
      options: [
        "bottom-right",
        "bottom-left",
        "bottom-center",
        "top-right",
        "top-left",
        "static",
      ],
    },
    variant: {
      control: "radio",
      options: ["default", "primary"],
    },
    shape: {
      control: "radio",
      options: ["circle", "square"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof FloatButton>;

export const Basic: Story = {
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    shape: "circle",
    size: "md",
    position: "static",
  },
};

export const Extended: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <FloatButton {...args} label={t("story.floatbutton_send")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "md",
    position: "static",
    shrink: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <FloatButton
        iconName="CircleIcon"
        size="sm"
        variant="primary"
        position="static"
      />
      <FloatButton
        iconName="CircleIcon"
        size="md"
        variant="primary"
        position="static"
      />
      <FloatButton
        iconName="CircleIcon"
        size="lg"
        variant="primary"
        position="static"
      />
    </div>
  ),
};

export const ExtendedSizes: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
        }}
      >
        <FloatButton
          iconName="CircleIcon"
          label={t("story.floatbutton_small")}
          size="sm"
          variant="primary"
          position="static"
        />
        <FloatButton
          iconName="CircleIcon"
          label={t("story.floatbutton_medium")}
          size="md"
          variant="primary"
          position="static"
        />
        <FloatButton
          iconName="CircleIcon"
          label={t("story.floatbutton_large")}
          size="lg"
          variant="primary"
          position="static"
        />
      </div>
    );
  },
};

export const AutoShrink: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <AutoShrinkDemo {...args} label={t("story.floatbutton_shrink")} />;
  },
  args: {
    iconName: "CircleIcon",
    variant: "primary",
    size: "md",
    position: "static",
    shrink: false,
  },
};

export const Primary: Story = {
  args: {
    iconName: "LoadingIcon",
    variant: "primary",
    shape: "circle",
    size: "md",
    position: "static",
  },
};

export const Square: Story = {
  args: {
    iconName: "SquareIcon",
    variant: "default",
    shape: "square",
    size: "md",
    position: "static",
  },
};

export const WithBadge: Story = {
  args: {
    iconName: "CircleIcon",
    badge: 3,
    variant: "primary",
    size: "md",
    position: "static",
  },
};

export const FixedPosition: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ height: "150vh", padding: "20px" }}>
        <p>{t("story.floatbutton_look_bottom")}</p>
        <FloatButton
          {...args}
          iconName="ChevronUpIcon"
          variant="primary"
          shape="circle"
          size="md"
          position="bottom-right"
          description={t("story.floatbutton_click_me")}
        />
      </div>
    );
  },
};

export const BackTop: Story = {
  parameters: {
    layout: "fullscreen",
  },
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ height: "200vh", padding: "20px" }}>
        <p>{t("story.floatbutton_scroll_top_desc")}</p>
        <FloatButton
          {...args}
          backTop
          visibilityHeight={100}
          variant="primary"
          size="md"
        />
      </div>
    );
  },
};

// Demo component for auto-shrink
const AutoShrinkDemo = (args: FloatButtonProps) => {
  const [isShrunk, setIsShrunk] = useState(false);
  const scrollTimer = useRef<number | null>(null);
  const { t } = useTranslation(ALL_NAMESPACES);

  const handleScroll = () => {
    setIsShrunk(true);
    if (scrollTimer.current) {
      window.clearTimeout(scrollTimer.current);
    }
    scrollTimer.current = window.setTimeout(() => {
      setIsShrunk(false);
    }, 1000);
  };

  return (
    <div
      style={{
        height: "300px",
        width: "100%",
        maxWidth: "400px",
        overflow: "hidden",
        border: "1px solid #ccc",
        position: "relative",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        style={{ height: "100%", overflowY: "auto", padding: "20px" }}
        onScroll={handleScroll}
      >
        <div style={{ height: "1000px" }}>
          <p>{t("story.floatbutton_scroll_inside")}</p>
        </div>
      </div>
      <FloatButton
        {...args}
        shrink={isShrunk}
        style={{
          position: "absolute",
          bottom: "20px",
          right: "20px",
          ...args.style,
        }}
      />
    </div>
  );
};
