import React from "react";
import { Quote } from "./Quote";

export default {
    title: "Component/Typography/Quote",
    component: Quote,
    parameters: {
        layout: "centered",
    },
    tags: [],
    argTypes: {
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        color: {
            control: "select",
            options: ["black", "deepgray", "gray", "lightgray", "white"],
        },
    },
};

export const Default = {
    args: {
        content: "He who has a why to live can bear almost any how.",
    },
};

export const WithCite = {
    args: {
        content: "Design is not just what it looks like and feels like. Design is how it works.",
        cite: "Steve Jobs",
    },
};

export const Large = {
    args: {
        size: "large",
        content: "The only way to do great work is to love what you do.",
        cite: "Steve Jobs",
    },
};

export const NoBorder = {
    args: {
        border: false,
        content: "Simplicity is the ultimate sophistication.",
        cite: "Leonardo da Vinci",
    },
};

export const VariousColors = {
    render: (args: any) => (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Quote {...args} content="Black Quote" color="black" />
            <Quote {...args} content="Deep Gray Quote" color="deepgray" />
            <Quote {...args} content="Gray Quote" color="gray" />
            <Quote {...args} content="Light Gray Quote" color="lightgray" />
        </div>
    ),
};
