import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Toast, ToastProvider, useToast } from "@/components/Toast/Toast";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Toast> = {
    title: "Components/Alerts & Notifications/Toast",
    component: Toast,
    tags: ["!autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["info", "success", "warning", "error"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    args: {
        title: "Successfully saved",
        description: "Your changes have been saved to the cloud.",
        variant: "success",
    },
};

export const Success: Story = {
    args: {
        title: "Success",
        description: "The operation was completed successfully.",
        variant: "success",
    },
};

export const Info: Story = {
    args: {
        title: "New update available",
        description: "A new version of the app is available. Please refresh.",
        variant: "info",
    },
};

export const Warning: Story = {
    args: {
        title: "Check your connection",
        description: "The internet connection seems unstable.",
        variant: "warning",
    },
};

export const ErrorStatus: Story = {
    args: {
        title: "Failed to upload",
        description: "There was an error while uploading your file.",
        variant: "error",
    },
};

// Interactive example using the hook
const ToastTrigger = () => {
    const { show } = useToast();

    return (
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Button
                priority="primary"
                label="Show Success"
                onClick={() =>
                    show({
                        title: "Success!",
                        description: "Action completed successfully.",
                        variant: "success",
                    })
                }
            />
            <Button
                priority="secondary"
                label="Show Error"
                onClick={() =>
                    show({
                        title: "Error!",
                        description: "Something went wrong.",
                        variant: "error",
                    })
                }
            />
            <Button
                priority="tertiary"
                label="Show 5s Toast"
                onClick={() =>
                    show({
                        title: "System Notification",
                        description: "This will disappear in 5 seconds.",
                        variant: "info",
                        duration: 5000,
                    })
                }
            />
        </div>
    );
};

export const Interactive = {
    render: () => (
        <ToastProvider position="bottom-right">
            <ToastTrigger />
        </ToastProvider>
    ),
};


