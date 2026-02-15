import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tour } from "@/components/Tour/Tour";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Tour> = {
    title: "Component/Overlays/Tour",
    component: Tour,
};

export default meta;
type Story = StoryObj<typeof Tour>;

export const Default: Story = {
    render: (args) => {
        const [open, setOpen] = useState(false);
        const steps = [
            {
                target: "#tour-step-1",
                title: "Welcome!",
                description: "This is the first step of the tour.",
                placement: "bottom" as const,
            },
            {
                target: "#tour-step-2",
                title: "Key Feature",
                description: "Here is a key feature you should know about.",
                placement: "right" as const,
            },
            {
                target: "#tour-step-3",
                title: "Need help?",
                description: "Click here to get help anytime.",
                placement: "top" as const,
            },
        ];

        return (
            <div style={{ padding: "40px", height: "1000px" }}>
                <Button label="Start Tour" onClick={() => setOpen(true)} />

                <div style={{ marginTop: "100px", display: "flex", gap: "200px" }}>
                    <div
                        id="tour-step-1"
                        style={{
                            padding: "20px",
                            background: "#eee",
                            border: "1px solid #ccc",
                        }}
                    >
                        Step 1 Target
                    </div>
                    <div
                        id="tour-step-2"
                        style={{
                            padding: "20px",
                            background: "#eee",
                            border: "1px solid #ccc",
                        }}
                    >
                        Step 2 Target
                    </div>
                </div>

                <div
                    id="tour-step-3"
                    style={{
                        marginTop: "400px",
                        padding: "20px",
                        background: "#eee",
                        border: "1px solid #ccc",
                        width: "150px",
                    }}
                >
                    Step 3 Target
                </div>

                <Tour
                    {...args}
                    open={open}
                    steps={steps}
                    onClose={() => setOpen(false)}
                />
            </div>
        );
    },
};


