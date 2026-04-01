import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/data-display/Badge/Badge";
import { Icon } from "@/components/media/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Badge> = {
  title: "Components/Data Indicators/Badge",
  component: Badge,
  tags: [],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_content")} />;
  },
  args: {
    intent: "primary",
  },
};

export const Secondary: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_secondary")} />;
  },
  args: {
    intent: "secondary",
  },
};

export const Destructive: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_error")} />;
  },
  args: {
    intent: "error",
  },
};

export const Neutral: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_neutral")} />;
  },
  args: {
    intent: "neutral",
  },
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_outline")} />;
  },
  args: {
    variant: "outline",
    intent: "primary",
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story.badge_small")} />;
  },
  args: {
    size: "sm",
  },
};

export const Required: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("required")} />;
  },
  args: {
    intent: "error",
    size: "sm",
  },
};

export const Optional: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("optional")} />;
  },
  args: {
    intent: "neutral",
    size: "sm",
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Badge
        {...args}
        content={t("story.badge_verified")}
        icon={<Icon name="CheckIcon" />}
      />
    );
  },
  args: {
    intent: "primary",
  },
};

export const IconOnly: Story = {
  args: {
    icon: (
      <Icon name="CheckIcon" />
    ),
    intent: "primary",
  },
};
