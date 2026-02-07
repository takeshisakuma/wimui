import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./ScrollArea";

const meta: Meta<typeof ScrollArea> = {
    title: "Component/Utilities/ScrollArea",
    component: ScrollArea,
    parameters: {
        layout: "centered",
    },

    argTypes: {
        scrollAxis: {
            control: "select",
            options: ["x", "y", "both"],
        },
        maxHeight: {
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
    args: {
        text: "sampletextforscrollarea",
        scrollAxis: "y",
        maxHeight: "10rem",
    },
};

export const HorizontalScroll: Story = {
    args: {
        scrollAxis: "x",
        style: { width: "20rem" },
        children: (
            <div style={{ width: "50rem", background: "linear-gradient(to right, #f0f, #0ff)", padding: "1rem", color: "white" }}>
                This is a very wide content to demonstrate horizontal scrolling. 横方向に長いコンテンツです。
            </div>
        ),
    },
};

export const WithChildren: Story = {
    args: {
        scrollAxis: "y",
        maxHeight: "12rem",
        children: (
            <div style={{ padding: "1rem" }}>
                <h4 style={{ margin: "0 0 1rem 0" }}>Custom Content Area</h4>
                <p>You can wrap any React elements inside ScrollArea.</p>
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                    <li>Item 4</li>
                    <li>Item 5</li>
                </ul>
                <p>Scrolling works perfectly for complex layouts.</p>
            </div>
        ),
    },
};

export const Both: Story = {
    args: {
        scrollAxis: "both",
        maxHeight: "20rem",
        style: { width: "20rem" },
        children: (
            <div style={{ width: "40rem", height: "40rem", background: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)", padding: "1rem" }}>
                <h4 style={{ color: "#333" }}>Both Axes Scrolling</h4>
                <p style={{ color: "#555" }}>
                    This container has content that overflows both vertically and horizontally.
                    ScrollArea handles both directions when <code>scrollAxis="both"</code> is set.
                </p>
                <div style={{ marginTop: "2rem", display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "1rem" }}>
                    {[...Array(20)].map((_, i) => (
                        <div key={i} style={{ background: "rgba(255,255,255,0.5)", padding: "1rem", borderRadius: "4px" }}>
                            Box {i + 1}
                        </div>
                    ))}
                </div>
            </div>
        ),
    },
};
