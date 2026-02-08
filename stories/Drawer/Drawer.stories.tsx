import type { Meta, StoryObj } from "@storybook/react";
import { Drawer, DrawerTrigger, DrawerContent, DrawerHeader, DrawerFooter, DrawerTitle, DrawerDescription, DrawerClose } from "./Drawer";
import { Button } from "../Button/Button";
import { useState } from "react";

const meta: Meta<typeof Drawer> = {
    title: "Component/Overlays/Drawer",
    component: Drawer,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        side: {
            control: "select",
            options: ["top", "right", "bottom", "left"],
            description: "The side where the drawer appears.",
        },
        open: {
            control: "boolean",
            description: "Controlled open state of the drawer.",
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
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
    args: {
        side: "right",
    },
    render: (args) => (
        <Drawer {...args}>
            <DrawerTrigger asChild>
                <Button priority="primary" label="Open Drawer (Right)" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Drawer Title</DrawerTitle>
                    <DrawerDescription>
                        This is a description of the drawer content.
                    </DrawerDescription>
                </DrawerHeader>
                <div style={{ padding: "20px" }}>
                    <p>This is the main content area of the drawer.</p>
                    <p>You can put any React components here.</p>
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button priority="secondary" label="Close" />
                    </DrawerClose>
                    <Button priority="primary" label="Confirm" />
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ),
};

export const Left: Story = {
    args: {
        side: "left",
    },
    render: (args) => (
        <Drawer {...args}>
            <DrawerTrigger asChild>
                <Button priority="secondary" label="Open Drawer (Left)" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Left Drawer</DrawerTitle>
                    <DrawerDescription>
                        Sliding in from the left side.
                    </DrawerDescription>
                </DrawerHeader>
                <div style={{ padding: "20px" }}>
                    <p>Navigation menus often go here.</p>
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button priority="secondary" label="Close" />
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ),
};

export const Top: Story = {
    args: {
        side: "top",
    },
    render: (args) => (
        <Drawer {...args}>
            <DrawerTrigger asChild>
                <Button priority="secondary" label="Open Drawer (Top)" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Top Drawer</DrawerTitle>
                    <DrawerDescription>
                        Sliding in from the top.
                    </DrawerDescription>
                </DrawerHeader>
                <div style={{ padding: "20px" }}>
                    <p>Useful for notifications or global search.</p>
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button priority="secondary" label="Close" />
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ),
};

export const Bottom: Story = {
    args: {
        side: "bottom",
    },
    render: (args) => (
        <Drawer {...args}>
            <DrawerTrigger asChild>
                <Button priority="secondary" label="Open Drawer (Bottom)" />
            </DrawerTrigger>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerTitle>Bottom Drawer</DrawerTitle>
                    <DrawerDescription>
                        Sliding in from the bottom.
                    </DrawerDescription>
                </DrawerHeader>
                <div style={{ padding: "20px" }}>
                    <p>Often used for mobile menus or settings.</p>
                </div>
                <DrawerFooter>
                    <DrawerClose asChild>
                        <Button priority="secondary" label="Close" />
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    ),
};

export const Controlled: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                <p>Current state: {open ? "Open" : "Closed"}</p>
                <Button priority="primary" label="Open via State" onClick={() => setOpen(true)} />

                <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerContent>
                        <DrawerHeader>
                            <DrawerTitle>Controlled Drawer</DrawerTitle>
                            <DrawerDescription>
                                This drawer is controlled by external state.
                            </DrawerDescription>
                        </DrawerHeader>
                        <div style={{ padding: "20px" }}>
                            <p>Click outside or escape to close.</p>
                        </div>
                        <DrawerFooter>
                            <Button priority="secondary" label="Cancel" onClick={() => setOpen(false)} />
                            <Button priority="primary" label="Close via State" onClick={() => setOpen(false)} />
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        );
    }
};
