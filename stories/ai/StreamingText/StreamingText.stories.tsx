import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { StreamingText } from "@/components/ai/StreamingText/StreamingText";

const meta: Meta<typeof StreamingText> = {
  title: "Components/AI/StreamingText",
  component: StreamingText,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isStreaming: { control: "boolean" },
    content: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof StreamingText>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: 560 }}>
        <StreamingText {...args} content={args.content ?? t("story.streamingtext_sample")} />
      </div>
    );
  },
  args: {
    isStreaming: false,
  },
};

export const Streaming: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [displayed, setDisplayed] = useState("");
    const full = args.content ?? t("story.streamingtext_sample");

    useEffect(() => {
      setDisplayed("");
      let i = 0;
      const timer = setInterval(() => {
        i += 3;
        setDisplayed(full.slice(0, i));
        if (i >= full.length) clearInterval(timer);
      }, 30);
      return () => clearInterval(timer);
    }, [full]);

    const isStreaming = displayed.length < full.length;
    return (
      <div style={{ width: 560 }}>
        <StreamingText {...args} content={displayed} isStreaming={isStreaming} />
      </div>
    );
  },
  args: {},
};

export const WithCursor: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ width: 560 }}>
        <StreamingText {...args} content={args.content ?? t("story.streamingtext_thinking")} />
      </div>
    );
  },
  args: {
    isStreaming: true,
  },
};
