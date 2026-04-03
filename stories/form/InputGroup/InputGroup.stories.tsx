import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InputGroup, InputGroupText } from "@/components/form/InputGroup/InputGroup";
import { Input } from "@/components/form/Input/Input";
import { Button } from "@/components/form/Button/Button";

const meta: Meta<typeof InputGroup> = {
  title: "Components/Form Layout/InputGroup",
  component: InputGroup,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof InputGroup>;

export const Basic: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupText>@</InputGroupText>
      <Input placeholder="username" />
    </InputGroup>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Search..." />
      <Button variant="filled" icon="SearchIcon">Search</Button>
    </InputGroup>
  ),
};

export const Suffix: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <Input placeholder="Recipient's username" />
      <InputGroupText>@example.com</InputGroupText>
    </InputGroup>
  ),
};

export const MultipleAddons: Story = {
  render: (args) => (
    <InputGroup {...args}>
      <InputGroupText>$</InputGroupText>
      <InputGroupText>0.00</InputGroupText>
      <Input placeholder="Price" />
      <InputGroupText>.00</InputGroupText>
    </InputGroup>
  ),
};

export const FullWidth: Story = {
  args: {
    fullWidth: true,
  },
  render: (args) => (
    <div style={{ width: "100%", maxWidth: "600px" }}>
      <InputGroup {...args}>
        <InputGroupText>Search</InputGroupText>
        <Input placeholder="Type something..." />
        <Button variant="filled">Go</Button>
      </InputGroup>
    </div>
  ),
};
