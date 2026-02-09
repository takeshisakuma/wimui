import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
    DescriptionList,
    DescriptionListItem,
    DescriptionListTerm,
    DescriptionListDetails,
} from "./DescriptionList";

const meta: Meta<typeof DescriptionList> = {
    title: "Component/Data Display/DescriptionList",
    component: DescriptionList,
    argTypes: {
        layout: {
            control: "select",
            options: ["horizontal", "vertical", "compact"],
        },
        size: {
            control: "select",
            options: ["small", "medium", "large"],
        },
        border: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof DescriptionList>;

const DefaultChildren = (
    <>
        <DescriptionListItem>
            <DescriptionListTerm>User Name</DescriptionListTerm>
            <DescriptionListDetails>Wim UI Persona</DescriptionListDetails>
        </DescriptionListItem>
        <DescriptionListItem>
            <DescriptionListTerm>Email Address</DescriptionListTerm>
            <DescriptionListDetails>contact@example.com</DescriptionListDetails>
        </DescriptionListItem>
        <DescriptionListItem>
            <DescriptionListTerm>Position</DescriptionListTerm>
            <DescriptionListDetails>UI/UX Designer</DescriptionListDetails>
        </DescriptionListItem>
        <DescriptionListItem>
            <DescriptionListTerm>Description</DescriptionListTerm>
            <DescriptionListDetails>
                Standard persona for Wim UI component library documentation.
            </DescriptionListDetails>
        </DescriptionListItem>
    </>
);

export const Horizontal: Story = {
    args: {
        layout: "horizontal",
        children: DefaultChildren,
    },
};

export const Vertical: Story = {
    args: {
        layout: "vertical",
        children: DefaultChildren,
    },
};

export const Compact: Story = {
    args: {
        layout: "compact",
        children: DefaultChildren,
    },
};

export const WithBorder: Story = {
    args: {
        border: true,
        children: DefaultChildren,
    },
};

export const Small: Story = {
    args: {
        size: "small",
        children: DefaultChildren,
    },
};

export const Large: Story = {
    args: {
        size: "large",
        children: DefaultChildren,
    },
};
