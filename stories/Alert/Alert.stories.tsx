import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "@/components/Alert/Alert";

const meta: Meta<typeof Alert> = {
    title: "Component/Alerts & Notifications/Alert",
    component: Alert,
    tags: [],
    argTypes: {
        onClose: { action: "closed" },
    },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
    args: {
        variant: "info",
        title: "Information",
        description: "This is an informative message for the user.",
    },
};

export const Success: Story = {
    args: {
        variant: "success",
        title: "Success",
        description: "Your action has been completed successfully.",
    },
};

export const Warning: Story = {
    args: {
        variant: "warning",
        title: "Warning",
        description: "Please be careful with this action.",
    },
};

export const Error: Story = {
    args: {
        variant: "error",
        title: "Error",
        description: "Something went wrong. Please try again later.",
    },
};

export const WithoutTitle: Story = {
    args: {
        variant: "info",
        description: "This alert only has a description and no title.",
    },
};

export const WithCloseButton: Story = {
    args: {
        variant: "success",
        title: "Dismissible Alert",
        description: "You can close this alert by clicking the button on the right.",
        onClose: () => console.log("Alert closed"),
    },
};

export const LongContent: Story = {
    args: {
        variant: "info",
        title: "Update Available",
        description: "A new version of the software is available. Please update to get the latest features and security improvements. The update will take approximately 5 minutes to install.",
        onClose: () => { },
    },
};


