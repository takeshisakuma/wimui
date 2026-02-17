import type { Meta, StoryObj } from "@storybook/react-vite";
import { Notification } from "@/components/Notification/Notification";

const meta: Meta<typeof Notification> = {
    title: "Component/Alerts & Notifications/Notification",
    component: Notification,
    tags: [],
    argTypes: {
        onClose: { action: "closed" },
    },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
    args: {
        title: "Notification Title",
        description: "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
    },
};

export const Success: Story = {
    args: {
        type: "success",
        title: "Success Notification",
        description: "Your changes have been saved successfully.",
    },
};

export const Warning: Story = {
    args: {
        type: "warning",
        title: "Warning Notification",
        description: "Please be careful with this action.",
    },
};

export const Error: Story = {
    args: {
        type: "error",
        title: "Error Notification",
        description: "Something went wrong while processing your request.",
    },
};

export const Info: Story = {
    args: {
        type: "info",
        title: "Info Notification",
        description: "New updates are available for your application.",
    },
};


