import type { Meta, StoryObj } from "@storybook/react-vite";
import { LinkButton } from "@/components/LinkButton/LinkButton";

const meta: Meta<typeof LinkButton> = {
    title: "Components/Buttons/LinkButton",
    component: LinkButton,
    tags: [],
};

export default meta;
type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {
    args: {
        label: "Googleへ移動",
        href: "https://google.com",
        target: "_blank",
        iconName: "ExternalLinkIcon",
        iconPosition: "right",
    },
};


