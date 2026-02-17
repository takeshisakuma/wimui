import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { TreeView } from "@/components/TreeView/TreeView";
import { Icon } from "@/components/Icon/Icon";

const meta: Meta<typeof TreeView> = {
    title: "Component/Data Structures/TreeView",
    component: TreeView,
    parameters: {
        layout: "centered",
    },
};

export default meta;
type Story = StoryObj<typeof TreeView>;

export const Default: Story = {
    args: {
        width: "400px",
    },
    render: (args) => (
        <TreeView {...args} defaultExpandedValues={["1", "2"]}>
            <TreeView.Item value="1" label="Documents" icon={<Icon name="CircleIcon" size="small" />}>
                <TreeView.Item value="1-1" label="Work" icon={<Icon name="SquareIcon" size="small" />}>
                    <TreeView.Item value="1-1-1" label="Project A.docx" icon={<Icon name="CopyIcon" size="small" />} />
                    <TreeView.Item value="1-1-2" label="Project B.docx" icon={<Icon name="CopyIcon" size="small" />} />
                </TreeView.Item>
                <TreeView.Item value="1-2" label="Personal" icon={<Icon name="SquareIcon" size="small" />}>
                    <TreeView.Item value="1-2-1" label="Photos" icon={<Icon name="CircleIcon" size="small" />} />
                </TreeView.Item>
            </TreeView.Item>
            <TreeView.Item value="2" label="Music" icon={<Icon name="CircleIcon" size="small" />}>
                <TreeView.Item value="2-1" label="Rock" icon={<Icon name="SquareIcon" size="small" />} />
                <TreeView.Item value="2-2" label="Jazz" icon={<Icon name="SquareIcon" size="small" />} />
            </TreeView.Item>
            <TreeView.Item value="3" label="Videos" icon={<Icon name="CircleIcon" size="small" />} />
        </TreeView>
    ),
};

export const MultiSelect: Story = {
    render: () => (
        <TreeView multiSelect defaultExpandedValues={["1"]}>
            <TreeView.Item value="1" label="System">
                <TreeView.Item value="1-1" label="Logs" />
                <TreeView.Item value="1-2" label="Config" />
            </TreeView.Item>
            <TreeView.Item value="2" label="Users">
                <TreeView.Item value="2-1" label="Admin" />
                <TreeView.Item value="2-2" label="Guest" />
            </TreeView.Item>
        </TreeView>
    ),
};

export const DisabledItems: Story = {
    render: () => (
        <TreeView defaultExpandedValues={["1"]}>
            <TreeView.Item value="1" label="Root (Enabled)">
                <TreeView.Item value="1-1" label="Disabled Item" disabled />
                <TreeView.Item value="1-2" label="Enabled Item" />
            </TreeView.Item>
            <TreeView.Item value="2" label="Disabled Root" disabled>
                <TreeView.Item value="2-1" label="Should not be reachable" />
            </TreeView.Item>
        </TreeView>
    ),
};


