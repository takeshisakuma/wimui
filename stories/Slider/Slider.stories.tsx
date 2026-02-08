import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import { useState } from "react";

const MetaData: Meta<typeof Slider> = {
    title: "Component/Pickers & Sliders/Slider",
    component: Slider,

    argTypes: {
        onChange: { action: "changed" },
        onAfterChange: { action: "afterChanged" },
    },
};

export default MetaData;

type Story = StoryObj<typeof Slider>;

export const Default: Story = {
    args: {
        defaultValue: 50,
    },
};

export const Disabled: Story = {
    args: {
        defaultValue: 30,
        disabled: true,
    },
};

export const MinMax: Story = {
    args: {
        min: -50,
        max: 50,
        defaultValue: 0,
    },
};

export const Step: Story = {
    args: {
        min: 0,
        max: 100,
        step: 10,
        defaultValue: 20,
    },
};

export const Controlled = () => {
    const [val, setVal] = useState(25);
    return <Slider value={val} onChange={setVal} />;
}
