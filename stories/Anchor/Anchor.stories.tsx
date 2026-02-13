import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { Anchor } from "@/components/Anchor/Anchor";

const meta: Meta<typeof Anchor> = {
    title: "Component/Navigation/Anchor",
    component: Anchor,
    parameters: {
        layout: "fullscreen",
    },
    tags: [],
};

export default meta;

type Story = StoryObj<typeof Anchor>;

const items = [
    {
        key: "part-1",
        href: "#part-1",
        title: "Part 1: Introduction",
    },
    {
        key: "part-2",
        href: "#part-2",
        title: "Part 2: Features",
        children: [
            {
                key: "part-2-1",
                href: "#part-2-1",
                title: "Core Functionality",
            },
            {
                key: "part-2-2",
                href: "#part-2-2",
                title: "Advanced Options",
            },
        ],
    },
    {
        key: "part-3",
        href: "#part-3",
        title: "Part 3: Conclusion",
    },
];

export const Default: Story = {
    args: {
        items,
        offset: 20,
    },
    render: (args) => (
        <div style={{ display: "flex", padding: "20px" }}>
            <div style={{ flex: 1 }}>
                <section id="part-1" style={{ height: "600px", background: "#f0f2f5", padding: "20px", marginBottom: "20px" }}>
                    <h2>Part 1: Introduction</h2>
                    <p>Scroll down to see the anchor in action.</p>
                </section>
                <section id="part-2" style={{ height: "1000px", background: "#f9f9f9", padding: "20px", marginBottom: "20px" }}>
                    <h2>Part 2: Features</h2>
                    <div id="part-2-1" style={{ height: "400px", border: "1px dashed #ccc", margin: "20px 0", padding: "10px" }}>
                        <h3>Core Functionality</h3>
                    </div>
                    <div id="part-2-2" style={{ height: "400px", border: "1px dashed #ccc", margin: "20px 0", padding: "10px" }}>
                        <h3>Advanced Options</h3>
                    </div>
                </section>
                <section id="part-3" style={{ height: "600px", background: "#f0f2f5", padding: "20px" }}>
                    <h2>Part 3: Conclusion</h2>
                </section>
            </div>
            <div style={{ width: "200px", marginLeft: "40px" }}>
                <div style={{ position: "sticky", top: "20px" }}>
                    <Anchor {...args} />
                </div>
            </div>
        </div>
    ),
};


