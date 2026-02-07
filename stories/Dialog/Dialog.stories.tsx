import type { Meta, StoryObj } from "@storybook/react";
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
                <Button priority="primary" label="Open Dialog" />
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div style={{ display: "grid", gap: "1rem", padding: "1rem 0" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr", alignItems: "center", gap: "1rem" }}>
                        <Label htmlFor="name" style={{ textAlign: "right" }} label="Name" />
                        <Input id="name" defaultValue="Pedro Duarte" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button priority="secondary" label="Cancel" />
                    </DialogClose>
                    <Button priority="primary" label="Save changes" />
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};

export const Uncontrolled: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button priority="secondary" label="Open Uncontrolled" />
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
                        <Button priority="secondary" label="Cancel" />
                    </DialogClose>
                    <Button priority="primary" label="Confirm Action" onClick={() => alert('Confirmed!')} />
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
                <Button priority="primary" label="Open via State" onClick={() => setOpen(true)} />

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
                            <Button priority="secondary" label="Cancel" onClick={() => setOpen(false)} />
                            <Button role="destructive" priority="primary" label="Close via State" onClick={() => setOpen(false)} />
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        );
    }
};
