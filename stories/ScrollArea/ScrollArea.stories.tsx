import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./ScrollArea";

const meta: Meta<typeof ScrollArea> = {
    title: "Component/Structure/ScrollArea",
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
