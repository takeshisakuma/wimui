import type { Meta, StoryObj } from "@storybook/react-vite";
import { RangeSlider } from "./RangeSlider";
import { useState } from "react";

const MetaData: Meta<typeof RangeSlider> = {
    title: "Component/Pickers & Sliders/RangeSlider",
    component: RangeSlider,

    argTypes: {
        onChange: { action: "changed" },
        onAfterChange: { action: "afterChanged" },
    },
};

export default MetaData;

type Story = StoryObj<typeof RangeSlider>;

export const Default: Story = {
    args: {
        defaultValue: [20, 80],
    },
};

export const Disabled: Story = {
    args: {
        defaultValue: [30, 70],
        disabled: true,
    },
};

export const MinMax: Story = {
    args: {
        min: -50,
        max: 50,
        defaultValue: [-20, 20],
    },
};

export const Step: Story = {
    args: {
        min: 0,
        max: 100,
        step: 10,
        defaultValue: [20, 90],
    },
};

export const Controlled = () => {
    const [val, setVal] = useState<[number, number]>([20, 50]);
    return <RangeSlider value={val} onChange={setVal} />;
}


