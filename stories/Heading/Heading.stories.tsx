import type { Meta, StoryObj } from "@storybook/react-vite";
import { Heading } from "./Heading";

const meta = {
    title: "Component/Typography & Action/Heading",
    component: Heading,
    parameters: {
        layout: "padded",
    },
    tags: ["autodocs"],
    argTypes: {
        tag: {
            control: "select",
            options: ["h1", "h2", "h3", "h4", "h5", "h6"],
        },
        size: {
            control: "select",
            options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl"],
        },
        color: {
            control: "select",
            options: ["black", "deepgray", "gray", "lightgray", "white", "error", "primary"],
        },
        align: {
            control: "radio",
            options: ["left", "center", "right"],
        },
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const h1_heading: Story = {
    args: {
        tag: "h1",
        size: "2xl",
        children: "heading_text",
        color: "black",
        align: "left",
    },
};

export const h2_heading: Story = {
    args: {
        tag: "h2",
        size: "xl",
        children: "heading_text",
        color: "black",
        align: "left",
    },
};

export const h3_heading: Story = {
    args: {
        tag: "h3",
        size: "lg",
        children: "heading_text",
        color: "black",
        align: "left",
    },
};

export const h4_heading: Story = {
    args: {
        tag: "h4",
        size: "md",
        children: "heading_text",
        color: "black",
        align: "left",
    },
};

export const h5_heading: Story = {
    args: {
        tag: "h5",
        size: "sm",
        children: "heading_text",
        color: "black",
        align: "left",
    },
};

export const h6_heading: Story = {
    args: {
        tag: "h6",
        size: "xs",
        children: "heading_text",
        color: "black",
        align: "left",
    },
};

