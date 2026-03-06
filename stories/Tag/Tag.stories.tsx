import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "@/components/Tag/Tag";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";

/**
 * Data Display/Tag Component
 */
const meta: Meta<typeof Tag> = {
  title: "Components/Data Indicators/Tag",
  component: Tag,
  tags: [], // mdxファイルがあるためautodocsは無効にする
  argTypes: {
    color: {
      control: "select",
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "neutral",
      ],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "subtle"],
    },
    size: {
      control: "select",
      options: ["small", "medium"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return <Tag {...args}>{t("story_tag_content")}</Tag>;
  },
  args: {
    color: "primary",
    variant: "solid",
    size: "medium",
  },
};

export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Tag {...args} variant="solid">
          {t("story_tag_solid")}
        </Tag>
        <Tag {...args} variant="outline">
          {t("story_tag_outline")}
        </Tag>
        <Tag {...args} variant="subtle">
          {t("story_tag_subtle")}
        </Tag>
      </div>
    );
  },
};

export const Colors: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Tag {...args} color="primary">
          {t("story_tag_primary")}
        </Tag>
        <Tag {...args} color="secondary">
          {t("story_tag_secondary")}
        </Tag>
        <Tag {...args} color="success">
          {t("story_tag_success")}
        </Tag>
        <Tag {...args} color="warning">
          {t("story_tag_warning")}
        </Tag>
        <Tag {...args} color="error">
          {t("story_tag_error")}
        </Tag>
        <Tag {...args} color="neutral">
          {t("story_tag_neutral")}
        </Tag>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Tag {...args} size="small">
          {t("story_tag_small")}
        </Tag>
        <Tag {...args} size="medium">
          {t("story_tag_medium")}
        </Tag>
      </div>
    );
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <Tag {...args} icon={<Icon name="CircleIcon" size="small" />}>
        {t("story_tag_with_icon")}
      </Tag>
    );
  },
};
