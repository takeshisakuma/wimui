import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { AIResponseFeedback } from "@/components/ai/AIResponseFeedback/AIResponseFeedback";

const meta: Meta<typeof AIResponseFeedback> = {
  title: "Components/AI/AIResponseFeedback",
  component: AIResponseFeedback,
  parameters: { layout: "centered" },
  argTypes: {
    feedback: {
      control: "select",
      options: [undefined, "positive", "negative", null],
    },
    disabled: { control: "boolean" },
    showRegenerate: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof AIResponseFeedback>;

export const Default: Story = {
  args: { showRegenerate: false },
};

export const WithRegenerate: Story = {
  args: { showRegenerate: true },
};

export const PreselectedPositive: Story = {
  args: { defaultFeedback: "positive", showRegenerate: true },
};

export const Disabled: Story = {
  args: { disabled: true, showRegenerate: true },
};

export const InContext: Story = {
  render: () => {
    const [feedback, setFeedback] = React.useState<"positive" | "negative" | null>(null);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-sm)", maxWidth: 480 }}>
        <p style={{ margin: 0, fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-primary)" }}>
          React is a JavaScript library for building user interfaces. It lets you compose
          complex UIs from small isolated pieces of code called components.
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: "var(--wim-spacing-sm)" }}>
          <AIResponseFeedback
            feedback={feedback}
            onFeedback={setFeedback}
            showRegenerate
            onRegenerate={() => alert("Regenerate triggered")}
          />
          {feedback && (
            <span style={{ fontSize: "var(--wim-font-size-xs)", color: "var(--wim-color-text-secondary)" }}>
              {feedback === "positive" ? "Thanks for your feedback!" : "Thanks for letting us know."}
            </span>
          )}
        </div>
      </div>
    );
  },
};
