import type { Meta, StoryObj } from "@storybook/react-vite";
import { Affix } from "@/components/Affix/Affix";
import { Button } from "@/components/Button/Button";
import React from "react";

const meta: Meta<typeof Affix> = {
    title: "Component/Navigation/Affix",
    component: Affix,
    tags: [],
    parameters: {
        layout: "fullscreen",
    },
};

export default meta;
type Story = StoryObj<typeof Affix>;

export const Basic: Story = {
    args: {
        offsetTop: 20,
        children: <Button label="Affix Top" size="medium" />,
    },
    render: (args) => (
        <div style={{ height: "200vh", padding: "20px" }}>
            <p>Scroll down to see the button stick to the top.</p>
            <div style={{ marginTop: "100px" }}>
                <Affix {...args} />
            </div>
        </div>
    ),
};

export const OffsetBottom: Story = {
    args: {
        offsetBottom: 20,
        children: <Button label="Affix Bottom" size="medium" />,
    },
    render: (args) => (
        <div style={{ height: "200vh", padding: "20px" }}>
            <p>Scroll down to the button. It will stick to the bottom until you scroll past it (upwards).</p>
            <div style={{ marginTop: "120vh" }}>
                <p>Scroll down here...</p>
                <Affix {...args} />
                <p>And more content below...</p>
            </div>
        </div>
    ),
};


