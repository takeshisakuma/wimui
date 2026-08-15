import type { Meta, StoryObj } from "@storybook/react-vite";
import React, { useState } from "react";
import { Pagination } from "wimui";

const meta: Meta<typeof Pagination> = {
  title: "Components/Navigation Elements/Pagination",
  component: Pagination,
  parameters: {
    layout: "padded",
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
  render: (args) => {
    return <Pagination {...args} />;
  },
  args: {
    total: 50,
    current: 1,
    pageSize: 10,
  },
};

/** Wide: page numbers, not the mobile "1 / 2" (T188). */
export const WidePages: Story = {
  render: (args) => {
    return <Pagination {...args} />;
  },
  args: {
    total: 47,
    current: 3,
    pageSize: 8,
  },
};

export const ManyPages: Story = {
  render: (args) => {
    return <Pagination {...args} />;
  },
  args: {
    total: 1000,
    current: 5,
    pageSize: 10,
  },
};

export const LargeSiblingCount: Story = {
  render: (args) => {
    return <Pagination {...args} />;
  },
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
export const FullFeatures: Story = {
  render: (args) => {
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10);
    return (
      <Pagination
        {...args}
        current={current}
        pageSize={pageSize}
        onChange={(page) => setCurrent(page)}
        onPageSizeChange={(size) => setPageSize(size)}
      />
    );
  },
  args: {
    total: 100,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: (total) => `Total ${total} items`,
  },
};
