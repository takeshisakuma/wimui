import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Transfer, TransferItem } from "../../src/components/Transfer/Transfer";

const meta: Meta<typeof Transfer> = {
    title: "Component/Advanced Inputs/Transfer",
    component: Transfer,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof Transfer>;

const dataSource: TransferItem[] = Array.from({ length: 20 }).map((_, i) => ({
    key: i.toString(),
    title: `Item ${i + 1}`,
    description: `Description of item ${i + 1}`,
    disabled: i % 5 === 0,
}));

export const Default: Story = {
    args: {
        dataSource,
        targetKeys: ["1", "3", "5"],
    },
};

const TransferWrapper = () => {
    const [targetKeys, setTargetKeys] = useState<string[]>(["1", "2"]);
    return (
        <Transfer
            dataSource={dataSource}
            targetKeys={targetKeys}
            onChange={(nextTargetKeys) => setTargetKeys(nextTargetKeys)}
        />
    );
};

export const Controlled: Story = {
    render: () => <TransferWrapper />,
};

export const CustomTitles: Story = {
    args: {
        dataSource,
        titles: ["Available", "Selected"],
        targetKeys: ["10", "11"],
    },
};

export const Disabled: Story = {
    args: {
        dataSource,
        disabled: true,
        targetKeys: ["1", "2"],
    },
};
