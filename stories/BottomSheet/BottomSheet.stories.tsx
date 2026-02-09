import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
    BottomSheet,
    BottomSheetTrigger,
    BottomSheetContent,
    BottomSheetHeader,
    BottomSheetFooter,
    BottomSheetTitle,
    BottomSheetDescription,
    BottomSheetClose,
    BottomSheetBody,
} from "./BottomSheet";
import { Button } from "../Button/Button";

const meta: Meta<typeof BottomSheet> = {
    title: "Component/Overlays/BottomSheet",
    component: BottomSheet,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        open: {
            control: "boolean",
            description: "Controlled open state of the bottom sheet.",
        },
        defaultOpen: {
            control: "boolean",
            description: "Default open state when uncontrolled.",
        },
        onOpenChange: {
            action: "onOpenChange",
            description: "Event handler called when the open state changes.",
        },
    },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
    render: (args) => (
        <BottomSheet {...args}>
            <BottomSheetTrigger asChild>
                <Button priority="primary" label="Open Bottom Sheet" aria-label={false as any} />
            </BottomSheetTrigger>
            <BottomSheetContent>
                <BottomSheetHeader>
                    <BottomSheetTitle>Bottom Sheet Title</BottomSheetTitle>
                    <BottomSheetDescription>
                        This is a description for the bottom sheet content.
                    </BottomSheetDescription>
                </BottomSheetHeader>
                <BottomSheetBody>
                    <div className="space-y-4" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                        <p>This is the main content area of the bottom sheet.</p>
                        <div style={{ padding: "1rem", backgroundColor: "#f3f4f6", borderRadius: "0.5rem" }}>
                            <p style={{ fontSize: "0.875rem" }}>You can put any content here, and it will scroll if it exceeds the maximum height.</p>
                        </div>
                        {Array.from({ length: 10 }).map((_, i) => (
                            <p key={i}>Scrollable item {i + 1}</p>
                        ))}
                    </div>
                </BottomSheetBody>
                <BottomSheetFooter>
                    <BottomSheetClose asChild>
                        <Button priority="secondary" label="Cancel" aria-label={false as any} />
                    </BottomSheetClose>
                    <Button priority="primary" label="Action" aria-label={false as any} />
                </BottomSheetFooter>
            </BottomSheetContent>
        </BottomSheet>
    ),
};

export const SingleAction: Story = {
    render: (args) => (
        <BottomSheet {...args}>
            <BottomSheetTrigger asChild>
                <Button priority="secondary" label="Quick Actions" aria-label={false as any} />
            </BottomSheetTrigger>
            <BottomSheetContent>
                <BottomSheetHeader>
                    <BottomSheetTitle>Select an Option</BottomSheetTitle>
                </BottomSheetHeader>
                <BottomSheetBody>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <button style={{ width: "100%", textAlign: "left", padding: "0.75rem", border: "none", background: "none", cursor: "pointer", borderRadius: "0.375rem" }}>
                            <span>Share</span>
                        </button>
                        <button style={{ width: "100%", textAlign: "left", padding: "0.75rem", border: "none", background: "none", cursor: "pointer", borderRadius: "0.375rem" }}>
                            <span>Add to favorites</span>
                        </button>
                        <button style={{ width: "100%", textAlign: "left", padding: "0.75rem", border: "none", background: "none", cursor: "pointer", borderRadius: "0.375rem", color: "#dc2626" }}>
                            <span>Delete</span>
                        </button>
                    </div>
                </BottomSheetBody>
            </BottomSheetContent>
        </BottomSheet>
    ),
};
