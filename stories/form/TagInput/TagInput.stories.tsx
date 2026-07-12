import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { TagInput } from "@/components/form/TagInput/TagInput";

const meta: Meta<typeof TagInput> = {
  title: "Components/Advanced Inputs/TagInput",
  component: TagInput,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof TagInput>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    // Tag values are sample data / brand names, shared across locales.
    return (
      <TagInput
        {...args}
        placeholder={t("story.taginput_placeholder_default")}
        defaultValue={["React", "TypeScript", "SCSS"]}
      />
    );
  },
};

export const Controlled: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [tags, setTags] = React.useState(["WIM UI", "Premium", "Modern"]);
    return (
      <div style={{ width: "400px" }}>
        <p style={{ marginBottom: "8px", fontSize: "14px", color: "var(--wim-color-text-secondary)" }}>
          {t("story.taginput_current_tags")} {tags.join(", ")}
        </p>
        {/* placeholder "frontend" is a generic example tag, kept verbatim. i18n-ignore-next-line */}
        <TagInput value={tags} onChange={setTags} placeholder="frontend" />
      </div>
    );
  },
};

export const MaxTags: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <TagInput
        {...args}
        maxTags={5}
        placeholder={t("story.taginput_placeholder_max")}
        defaultValue={["One", "Two", "Three"]}
      />
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: ["Locked", "Tags"],
  },
};
