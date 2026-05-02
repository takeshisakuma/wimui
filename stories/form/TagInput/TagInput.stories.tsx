import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TagInput } from "@/components/form/TagInput/TagInput";

const meta: Meta<typeof TagInput> = {
  title: "Components/Form/TagInput",
  component: TagInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TagInput>;

export const Default: Story = {
  args: {
    placeholder: "Type and press Enter...",
    defaultValue: ["React", "TypeScript", "SCSS"],
  },
};

export const Controlled: Story = {
  render: () => {
    const [tags, setTags] = React.useState(["WIM UI", "Premium", "Modern"]);
    return (
      <div style={{ width: "400px" }}>
        <p style={{ marginBottom: "8px", fontSize: "14px", color: "var(--wim-color-text-secondary)" }}>
          Current tags: {tags.join(", ")}
        </p>
        <TagInput 
          value={tags} 
          onChange={setTags} 
          placeholder="Add tags..." 
        />
      </div>
    );
  }
};

export const MaxTags: Story = {
  args: {
    maxTags: 5,
    placeholder: "Max 5 tags allowed...",
    defaultValue: ["One", "Two", "Three"],
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: ["Locked", "Tags"],
  },
};
