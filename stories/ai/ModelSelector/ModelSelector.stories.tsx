import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ModelSelector, ModelOption } from "@/components/ai/ModelSelector/ModelSelector";

// Model names and provider descriptions are brand identifiers, kept verbatim.
// i18n-ignore-start
const MODELS: ModelOption[] = [
  {
    id: "gpt-4o",
    name: "GPT-4o",
    description: "OpenAI · flagship multimodal",
    contextLength: 128000,
    pricing: { input: 2.5, output: 10 },
    badge: "New",
  },
  {
    id: "claude-sonnet",
    name: "Claude Sonnet",
    description: "Anthropic · balanced",
    contextLength: 200000,
    pricing: { input: 3, output: 15 },
  },
  {
    id: "claude-haiku",
    name: "Claude Haiku",
    description: "Anthropic · fast & cheap",
    contextLength: 200000,
    pricing: { input: 0.8, output: 4 },
  },
  {
    id: "llama-3",
    name: "Llama 3 70B",
    description: "Meta · open weights",
    contextLength: 8000,
    pricing: { input: 0.6, output: 0.6 },
  },
  {
    id: "legacy",
    name: "GPT-3.5",
    description: "OpenAI · legacy",
    contextLength: 16000,
    disabled: true,
  },
];
// i18n-ignore-end

const meta: Meta<typeof ModelSelector> = {
  title: "Components/AI/ModelSelector",
  component: ModelSelector,
  parameters: {
    layout: "padded",
  },
  args: {
    models: MODELS,
    size: "md",
    showPricing: true,
    showContext: true,
  },
};

export default meta;
type Story = StoryObj<typeof ModelSelector>;

export const Default: Story = {
  args: {
    defaultValue: "gpt-4o",
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = useState("claude-sonnet");
    return <ModelSelector {...args} value={value} onChange={(id) => setValue(id)} />;
  },
};

export const Placeholder: Story = {
  args: {
    defaultValue: undefined,
  },
};

export const NameOnly: Story = {
  args: {
    defaultValue: "claude-haiku",
    showPricing: false,
    showContext: false,
  },
};

export const FullWidth: Story = {
  args: {
    defaultValue: "gpt-4o",
    fullWidth: true,
  },
};

export const Sizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "flex-start" }}>
      <ModelSelector {...args} size="sm" defaultValue="gpt-4o" />
      <ModelSelector {...args} size="md" defaultValue="gpt-4o" />
      <ModelSelector {...args} size="lg" defaultValue="gpt-4o" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    defaultValue: "gpt-4o",
    disabled: true,
  },
};
