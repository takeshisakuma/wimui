import type { Meta, StoryObj } from "@storybook/react-vite";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from "./Dialog";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { Label } from "../Label/Label";
import { useState } from "react";

const meta: Meta<typeof Dialog> = {
    title: "Component/Overlays/Dialog",
    component: Dialog,
    parameters: {
        layout: "centered",
    },

    argTypes: {
        open: {
            control: "boolean",
            description: "Controlled open state of the dialog.",
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
type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
    render: (args) => (
        <Dialog {...args}>
            <DialogTrigger asChild>
                <Button priority="primary" label="Open Dialog" aria-label={false as any} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div style={{ display: "grid", gap: "1.5rem", padding: "1rem 0" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <Label htmlFor="name" label="Name" />
                        <Input id="name" defaultValue="Pedro Duarte" fullWidth />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <Label htmlFor="username" label="Username" />
                        <Input id="username" defaultValue="@peduarte" fullWidth />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button priority="secondary" label="Cancel" aria-label={false as any} />
                    </DialogClose>
                    <Button priority="primary" label="Save changes" aria-label={false as any} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};

export const Uncontrolled: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button priority="secondary" label="Open Uncontrolled" aria-label={false as any} />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Uncontrolled Dialog</DialogTitle>
                    <DialogDescription>
                        This dialog manages its own state.
                    </DialogDescription>
                </DialogHeader>
                <p>You can close me with logic or the close button.</p>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button priority="secondary" label="Cancel" aria-label={false as any} />
                    </DialogClose>
                    <Button priority="primary" label="Confirm Action" onClick={() => alert('Confirmed!')} aria-label={false as any} />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
};

export const Controlled: Story = {
    render: () => {
        const [open, setOpen] = useState(false);
        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>
                <p>Current state: {open ? "Open" : "Closed"}</p>
                <Button priority="primary" label="Open via State" onClick={() => setOpen(true)} aria-label={false as any} />

                <Dialog open={open} onOpenChange={setOpen}>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Controlled Dialog</DialogTitle>
                            <DialogDescription>
                                This dialog is controlled by external state.
                            </DialogDescription>
                        </DialogHeader>
                        <p>Click outside or escape to close, creating a callback to setOpen(false).</p>
                        <DialogFooter>
                            <Button priority="secondary" label="Cancel" onClick={() => setOpen(false)} aria-label={false as any} />
                            <Button role="destructive" priority="primary" label="Close via State" onClick={() => setOpen(false)} aria-label={false as any} />
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
};


