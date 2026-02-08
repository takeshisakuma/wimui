import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { QRCode } from "./QRCode";

const meta: Meta<typeof QRCode> = {
    title: "Component/Data Display/QRCode",
    component: QRCode,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        level: {
            control: "select",
            options: ["L", "M", "Q", "H"],
        },
        renderAs: {
            control: "select",
            options: ["svg", "canvas"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof QRCode>;

export const Default: Story = {
    args: {
        value: "https://takeshisakuma.github.io/wimui/",
    },
};

export const Large: Story = {
    args: {
        value: "https://takeshisakuma.github.io/wimui/",
        size: 256,
    },
};

export const CustomColors: Story = {
    args: {
        value: "https://takeshisakuma.github.io/wimui/",
        bgColor: "#f4f4f7",
        fgColor: "#0052cc",
    },
};

export const WithImage: Story = {
    args: {
        value: "https://takeshisakuma.github.io/wimui/",
        imageSettings: {
            src: "https://avatars.githubusercontent.com/u/1000000?v=4",
            x: undefined,
            y: undefined,
            height: 24,
            width: 24,
            excavate: true,
        },
    },
};
