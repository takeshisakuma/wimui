import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { Snackbar } from "@/components/Snackbar/Snackbar";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Snackbar> = {
    title: "Components/Alerts & Notifications/Snackbar",
    component: Snackbar,
    parameters: {
        layout: "centered",
    },
    tags: ["!autodocs"],
    argTypes: {
        variant: {
            control: "select",
            options: ["default", "success", "warning", "error", "info"],
        },
        position: {
            control: "select",
            options: [
                "top-left",
                "top-center",
                "top-right",
                "bottom-left",
                "bottom-center",
                "bottom-right",
            ],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
    args: {
        message: "This is a snackbar message.",
        open: true,
        variant: "default",
        position: "bottom-center",
    },
};

export const WithAction: Story = {
    args: {
        message: "Successfully deleted the item.",
        open: true,
        actionLabel: "UNDO",
        onAction: () => alert("Undo clicked!"),
    },
};

export const WithCloseButton: Story = {
    args: {
        message: "This message stays until you close it.",
        open: true,
        showCloseButton: true,
        autoHideDuration: 0,
    },
};

export const Success: Story = {
    args: {
        message: "Data saved successfully!",
        open: true,
        variant: "success",
    },
};

export const ErrorStatus: Story = {
    args: {
        message: "Failed to upload file.",
        open: true,
        variant: "error",
    },
};

export const Warning: Story = {
    args: {
        message: "Your storage is almost full.",
        open: true,
        variant: "warning",
    },
};

export const Info: Story = {
    args: {
        message: "New update available.",
        open: true,
        variant: "info",
    },
};

export const InteractiveDemo: Story = {
    render: () => {
         
        const [open, setOpen] = useState(false);
        return (
            <div style={{ padding: "40px" }}>
                <Button onClick={() => setOpen(true)} label="Show Snackbar" priority="primary" />
                <Snackbar
                    message="Interactive Snackbar is here!"
                    open={open}
                    onClose={() => setOpen(false)}
                    actionLabel="RETRY"
                    showCloseButton
                />
            </div>
        );
    },
};



