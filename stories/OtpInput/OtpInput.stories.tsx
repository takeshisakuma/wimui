import type { Meta, StoryObj } from "@storybook/react-vite";
import { OtpInput } from "@/components/OtpInput/OtpInput";
import { useState } from "react";

const meta: Meta<typeof OtpInput> = {
    title: "Components/Basic Inputs/OtpInput",
    component: OtpInput,
    argTypes: {
        onChange: { action: "changed" },
    },
};

export default meta;
type Story = StoryObj<typeof OtpInput>;

export const Default: Story = {
    args: {
        length: 4,
    },
};

export const Length6: Story = {
    args: {
        length: 6,
    },
};

export const Disabled: Story = {
    args: {
        length: 4,
        disabled: true,
        value: "1234",
    },
};

export const ErrorStatus: Story = {
    args: {
        length: 6,
        error: true,
        value: "123456",
    },
};

export const Controlled = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <OtpInput value={value} onChange={setValue} length={6} />
            <p style={{ marginTop: "1rem" }}>Current Value: {value}</p>
            <button onClick={() => setValue("")} style={{ marginTop: "0.5rem" }}>Clear</button>
        </div>
    );
};


