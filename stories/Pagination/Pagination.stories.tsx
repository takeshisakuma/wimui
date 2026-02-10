import type { Meta, StoryObj } from "@storybook/react-vite";
import { Pagination } from "./Pagination";
import React, { useState } from "react";

const meta: Meta<typeof Pagination> = {
    title: "Component/Navigation/Pagination",
    component: Pagination,
    parameters: {
        layout: "centered",
    },
    tags: [],
    argTypes: {
        total: { control: "number" },
        pageSize: { control: "number" },
        current: { control: "number" },
        siblingCount: { control: "number" },
        hideOnSinglePage: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
    args: {
        total: 50,
        current: 1,
        pageSize: 10,
    },
};

export const ManyPages: Story = {
    args: {
        total: 1000,
        current: 5,
        pageSize: 10,
    },
};

export const LargeSiblingCount: Story = {
    args: {
        total: 1000,
        current: 10,
        pageSize: 10,
        siblingCount: 2,
    },
};

export const Interactive: Story = {
    render: (args) => {
        const [currentPage, setCurrentPage] = useState(1);
        return (
            <Pagination
                {...args}
                current={currentPage}
                onChange={(page) => setCurrentPage(page)}
            />
        );
    },
    args: {
        total: 100,
        pageSize: 10,
    },
};

