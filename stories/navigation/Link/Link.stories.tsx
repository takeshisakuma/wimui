import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Link } from "wimui";

const meta: Meta<typeof Link> = {
  title: "Components/Typography & Icons/Link",
  component: Link,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    priority: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
    },
    iconName: {
      control: "select",
      options: [
        undefined,
        "CircleIcon",
        "SquareIcon",
        "LoadingIcon",
        "ExternalLinkIcon",
      ],
    },
    iconPosition: {
      control: "radio",
      options: ["left", "right"],
    },
    external: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    priority: "primary",
    href: "#",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_primary")} />;
  },
};

export const External: Story = {
  args: {
    external: true,
    href: "https://storybook.js.org/",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_external")} />;
  },
};

export const Secondary: Story = {
  args: {
    priority: "secondary",
    href: "#",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_secondary")} />;
  },
};

export const Tertiary: Story = {
  args: {
    priority: "tertiary",
    href: "#",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_tertiary")} />;
  },
};

export const WithIconLeft: Story = {
  args: {
    iconName: "CircleIcon",
    iconPosition: "left",
    href: "#",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_with_icon")} />;
  },
};

export const WithIconRight: Story = {
  args: {
    iconName: "SquareIcon",
    iconPosition: "right",
    href: "#",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_with_icon")} />;
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    href: "#",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_small")} />;
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    href: "#",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return <Link {...args} label={t("story.link_large")} />;
  },
};
