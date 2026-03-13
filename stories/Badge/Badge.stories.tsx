import type { Meta, StoryObj } from "@storybook/react-vite";
import { Badge } from "@/components/Badge/Badge";
import { Icon } from "@/components/Icon/Icon";
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
    return <Badge {...args} content={t("story_badge_content")} />;
  },
  args: {
    status: "primary",
  },
};

export const Secondary: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_secondary")} />;
  },
  args: {
    status: "secondary",
  },
};

export const Destructive: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_error")} />;
  },
  args: {
    status: "error",
  },
};

export const Neutral: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_neutral")} />;
  },
  args: {
    status: "neutral",
  },
};

export const Outline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_outline")} />;
  },
  args: {
    variant: "outline",
    status: "primary",
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("story_badge_small")} />;
  },
  args: {
    size: "small",
  },
};

export const Required: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("required")} />;
  },
  args: {
    status: "error",
    size: "small",
  },
};

export const Optional: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Badge {...args} content={t("optional")} />;
  },
  args: {
    status: "neutral",
    size: "small",
  },
};

export const WithIcon: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Badge
        {...args}
        content={t("story_badge_verified")}
        icon={<Icon name="CheckIcon" />}
      />
    );
  },
  args: {
    status: "primary",
  },
};

export const IconOnly: Story = {
  args: {
    icon: (
      <Icon name="CheckIcon" />
    ),
    status: "primary",
  },
};
