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
        "info",
        "neutral",
      ],
    },
    variant: {
      control: "select",
      options: ["solid", "outline", "subtle"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Tag {...args}>{t("story.tag_content")}</Tag>;
  },
  args: {
    status: "primary",
    variant: "solid",
    size: "md",
  },
};

export const Variants: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", gap: "10px" }}>
        <Tag {...args} variant="solid">
          {t("story.tag_solid")}
        </Tag>
        <Tag {...args} variant="outline">
          {t("story.tag_outline")}
        </Tag>
        <Tag {...args} variant="subtle">
          {t("story.tag_subtle")}
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
          {t("story.tag_primary")}
        </Tag>
        <Tag {...args} status="secondary">
          {t("story.tag_secondary")}
        </Tag>
        <Tag {...args} status="success">
          {t("story.tag_success")}
        </Tag>
        <Tag {...args} status="warning">
          {t("story.tag_warning")}
        </Tag>
        <Tag {...args} status="error">
          {t("story.tag_error")}
        </Tag>
        <Tag {...args} status="neutral">
          {t("story.tag_neutral")}
        </Tag>
        <Tag {...args} status="info">
          {t("story.tag_info")}
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
        <Tag {...args} size="sm">
          {t("story.tag_small")}
        </Tag>
        <Tag {...args} size="md">
          {t("story.tag_medium")}
        </Tag>
      </div>
    );
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Tag {...args} icon={<Icon name="CircleIcon" size="sm" />}>
        {t("story.tag_with_icon")}
      </Tag>
    );
  },
};
