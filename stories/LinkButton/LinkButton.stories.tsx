import type { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "./LinkButton";

const meta: Meta<typeof LinkButton> = {
    title: "Component/Buttons & Actions/LinkButton",
    component: LinkButton,
    tags: ["autodocs"],
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
