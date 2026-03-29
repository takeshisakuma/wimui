import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "@/components/Tag/Tag";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


/**
 * Data Display/Tag Component
 */
const meta: Meta<typeof Tag> = {
  title: "Components/Data Indicators/Tag",
  component: Tag,
  tags: [], // mdxファイルがあるためautodocsは無効にする
  argTypes: {
    status: {
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
      control: "radio",
      options: ["small", "medium", "large"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args}>{t("story_tag_content")}</Tag>;
  },
  args: {
    status: "primary",
    variant: "solid",
    size: "medium",
  },
};

export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        <Tag {...args} status="primary">
          {t("story_tag_primary")}
        </Tag>
        <Tag {...args} status="secondary">
          {t("story_tag_secondary")}
        </Tag>
        <Tag {...args} status="success">
          {t("story_tag_success")}
        </Tag>
        <Tag {...args} status="warning">
          {t("story_tag_warning")}
        </Tag>
        <Tag {...args} status="error">
          {t("story_tag_error")}
        </Tag>
        <Tag {...args} status="neutral">
          {t("story_tag_neutral")}
        </Tag>
      </div>
    );
  },
};

export const Sizes: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Tag {...args} icon={<Icon name="CircleIcon" size="small" />}>
        {t("story_tag_with_icon")}
      </Tag>
    );
  },
};
