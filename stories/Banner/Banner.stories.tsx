import type { Meta, StoryObj } from "@storybook/react-vite";
import { Banner } from "./Banner";
import { Button } from "../Button/Button";

const meta: Meta<typeof Banner> = {
    title: "Component/Feedback/Banner",
    component: Banner,
    tags: [],
    argTypes: {
        onClose: { action: "closed" },
        icon: { control: "boolean" },
    },
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
    args: {
        variant: "info",
        title: "Update Available",
        description: "A new version 2.0.0 is available.",
    },
};

export const Success: Story = {
    args: {
        variant: "success",
        title: "Success",
        description: "Your account has been successfully created.",
    },
};

export const Warning: Story = {
    args: {
        variant: "warning",
        title: "Maintenance",
        description: "Scheduled maintenance will occur tonight at 00:00 UTC.",
    },
};

export const Error: Story = {
    args: {
        variant: "error",
        title: "Connection Error",
        description: "Failed to connect to the server. Please check your internet connection.",
        onClose: () => { },
    },
};

export const WithAction: Story = {
    args: {
        variant: "info",
        title: "Cookie Policy",
        description: "We use cookies to improve your experience.",
        action: <Button size="small" priority="secondary" label="Accept" />,
    },
};

export const WithCloseAndAction: Story = {
    args: {
        variant: "warning",
        title: "Trial Expiring",
        description: "Your trial expires in 3 days.",
        action: <Button size="small" priority="primary" label="Upgrade" />,
        onClose: () => { },
    },
};

export const DescriptionOnly: Story = {
    args: {
        variant: "info",
        description: "This banner has no title, only a description.",
    },
};

export const NoIcon: Story = {
    args: {
        variant: "info",
        title: "Simple Banner",
        description: "This banner has no icon.",
        icon: false,
    },
};


