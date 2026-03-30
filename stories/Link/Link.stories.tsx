import type { Meta, StoryObj } from "@storybook/react-vite";
import { Link } from "@/components/Link/Link";

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
    label: "Primary Link",
    priority: "primary",
    href: "#",
  },
};

export const External: Story = {
  args: {
    label: "External Link",
    external: true,
    href: "https://storybook.js.org/",
  },
};

export const Secondary: Story = {
  args: {
    label: "Secondary Link",
    priority: "secondary",
    href: "#",
  },
};

export const Tertiary: Story = {
  args: {
    label: "Tertiary Link",
    priority: "tertiary",
    href: "#",
  },
};

export const WithIconLeft: Story = {
  args: {
    label: "Link with Icon",
    iconName: "CircleIcon",
    iconPosition: "left",
    href: "#",
  },
};

export const WithIconRight: Story = {
  args: {
    label: "Link with Icon",
    iconName: "SquareIcon",
    iconPosition: "right",
    href: "#",
  },
};

export const Small: Story = {
  args: {
    label: "Small Link",
    size: "sm",
    href: "#",
  },
};

export const Large: Story = {
  args: {
    label: "Large Link",
    size: "lg",
    href: "#",
  },
};
