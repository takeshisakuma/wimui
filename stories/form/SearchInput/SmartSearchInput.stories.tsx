import React, { useState } from "react";
import { SmartSearchInput } from "../../../src/components/form/SearchInput/SmartSearchInput";
import type { Meta, StoryObj } from "@storybook/react-vite";

const meta: Meta<typeof SmartSearchInput> = {
  title: "Components/Form/SmartSearchInput",
  component: SmartSearchInput,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof SmartSearchInput>;

export const Basic: Story = {
  args: {
    placeholder: "Search anything...",
    width: "md",
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [submitted, setSubmitted] = useState<string[]>([]);

    const handleSubmit = (val: string) => {
      setSubmitted((prev) => [val, ...prev]);
      setValue("");
    };

    return (
      <div style={{ width: "100%", maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "24px" }}>
        <div>
          <h4 style={{ marginBottom: "8px" }}>Try typing a long search or multiline prompt (Shift+Enter)</h4>
          <SmartSearchInput
            value={value}
            onChange={setValue}
            onSubmit={handleSubmit}
            placeholder="Search or ask AI..."
            allowClear
            fullWidth
          />
        </div>
        
        {submitted.length > 0 && (
          <div>
            <h5 style={{ marginBottom: "8px", color: "var(--wim-color-text-secondary)" }}>Recent Queries:</h5>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {submitted.map((s, i) => (
                <div key={i} style={{ padding: "8px 12px", background: "var(--wim-color-ghost-bg)", borderRadius: "var(--wim-radius-md)", fontSize: "14px", border: "1px solid var(--wim-color-border)", overflowWrap: "break-word", minWidth: 0 }}>
                  {s}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px", width: "100%", maxWidth: "800px", margin: "0 auto" }}>
      <SmartSearchInput variant="outline" placeholder="Outline variant (Default)" fullWidth />
      <SmartSearchInput variant="ghost" placeholder="Ghost variant" fullWidth />
      <SmartSearchInput intent="error" placeholder="Error state" defaultValue="Invalid query" fullWidth />
    </div>
  ),
};
