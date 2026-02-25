import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Calendar } from "@/components/Calendar/Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Components/Data Indicators/Calendar",
  component: Calendar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    value: { control: "date" },
    defaultValue: { control: "date" },
    onChange: { action: "changed" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
  args: {
    defaultValue: new Date(),
  },
};

export const SelectedDate: Story = {
  args: {
    defaultValue: new Date(2023, 0, 1),
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: new Date(),
    disabled: true,
  },
};

export const Controlled: Story = {
  render: (args) => {
    const [date, setDate] = useState(new Date());
    return <Calendar {...(args as any)} value={date} onChange={setDate} />;
  },
};
