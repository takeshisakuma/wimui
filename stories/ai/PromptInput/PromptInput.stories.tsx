import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { PromptInput } from "@/components/ai/PromptInput/PromptInput";

const meta: Meta<typeof PromptInput> = {
  title: "Components/AI/PromptInput",
  component: PromptInput,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
    loading: { control: "boolean" },
    showAttach: { control: "boolean" },
    maxRows: { control: { type: "number", min: 2, max: 20 } },
    maxLength: { control: "number" },
    placeholder: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof PromptInput>;

const InteractiveDemo = (args: React.ComponentProps<typeof PromptInput>) => {
  const [submitted, setSubmitted] = useState<string[]>([]);
  return (
    <div style={{ width: 480, display: "flex", flexDirection: "column", gap: "var(--wim-spacing-md)" }}>
      {submitted.length > 0 && (
        <div style={{ padding: "var(--wim-spacing-sm)", background: "var(--wim-color-ghost-bg)", borderRadius: "var(--wim-radius-md)", fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-secondary)" }}>
          Submitted: {submitted[submitted.length - 1]}
        </div>
      )}
      <PromptInput {...args} onSubmit={(v) => setSubmitted((prev) => [...prev, v])} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <InteractiveDemo {...args} />,
  args: {
    placeholder: "Ask anything...",
  },
};

export const WithAttachment: Story = {
  render: (args) => <InteractiveDemo {...args} />,
  args: {
    showAttach: true,
    placeholder: "Attach a file or type a message...",
  },
};

export const WithCharCount: Story = {
  render: (args) => <InteractiveDemo {...args} />,
  args: {
    maxLength: 500,
    placeholder: "Max 500 characters...",
  },
};

export const Disabled: Story = {
  render: (args) => <InteractiveDemo {...args} />,
  args: {
    disabled: true,
    defaultValue: "Input is disabled",
  },
};

export const Loading: Story = {
  render: (args) => <InteractiveDemo {...args} />,
  args: {
    loading: true,
    defaultValue: "Generating response...",
  },
};
