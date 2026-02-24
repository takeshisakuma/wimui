import type { Meta, StoryObj } from "@storybook/react";
import { Highlight } from "@/components/Highlight/Highlight";

const meta: Meta<typeof Highlight> = {
    title: "Components/Typography & Icons/Highlight",
    component: Highlight,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Highlight>;

export const Default: Story = {
    args: {
        children: "You can highlight specific words in this sentence.",
        highlight: "highlight",
    },
};

export const MultipleHighlights: Story = {
    args: {
        children: "React, Vue, and Angular are popular frontend frameworks.",
        highlight: ["React", "Vue", "Angular"],
    },
};

export const CaseInsensitive: Story = {
    args: {
        children: "SEARCH RESULTS FOR SEARCH TERM",
        highlight: "search",
    },
};

export const CustomStyle: Story = {
    args: {
        children: "Custom highlight styles can be applied.",
        highlight: "Custom",
        highlightStyles: {
            backgroundColor: "var(--color-primary)",
            color: "var(--color-text-on-primary)",
            borderRadius: "4px",
            padding: "0 4px",
        },
    },
};

export const CustomComponent: Story = {
    args: {
        children: "This is a paragraph with a highlight.",
        highlight: "paragraph",
        component: "p",
        style: { fontSize: "20px", color: "gray" },
    },
};
