import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { RangeCalendar, RangeCalendarValue } from "./RangeCalendar";

const meta: Meta<typeof RangeCalendar> = {
    title: "Component/Forms/RangeCalendar",
    component: RangeCalendar,
    parameters: {
        layout: "centered",
    },
    argTypes: {
        value: { control: "object" },
        defaultValue: { control: "object" },
        onChange: { action: "changed" },
        disabled: { control: "boolean" },
    },
};

export default meta;
type Story = StoryObj<typeof RangeCalendar>;

export const Default: Story = {
    args: {
        defaultValue: [null, null],
    },
};

const today = new Date();
const nextWeek = new Date();
nextWeek.setDate(today.getDate() + 7);

export const SelectedRange: Story = {
    args: {
        defaultValue: [today, nextWeek],
    },
};

export const Disabled: Story = {
    args: {
        defaultValue: [today, nextWeek],
        disabled: true,
    },
};

export const Controlled: Story = {
    render: (args) => {
        const [range, setRange] = useState<RangeCalendarValue>([today, nextWeek]);
        return <RangeCalendar {...(args as any)} value={range} onChange={setRange} />;
    },
};
