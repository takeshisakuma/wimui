import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "@/components/Accordion/Accordion";

const meta: Meta<typeof Accordion> = {
    title: "Components/Data Containers/Accordion",
    component: Accordion,
    tags: [],
    argTypes: {
        type: {
            control: "select",
            options: ["single", "multiple"],
        },
        collapsible: {
            control: "boolean",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
    render: (args) => (
        <Accordion {...args} defaultValue="item-1">
            <Accordion.Item value="item-1">
                <Accordion.Trigger>アコーディオン 1</Accordion.Trigger>
                <Accordion.Content>
                    アコーディオン 1 のコンテンツです。デフォルトで開いています。
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
                <Accordion.Trigger>アコーディオン 2</Accordion.Trigger>
                <Accordion.Content>
                    アコーディオン 2 のコンテンツです。
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3">
                <Accordion.Trigger>アコーディオン 3</Accordion.Trigger>
                <Accordion.Content>
                    アコーディオン 3 のコンテンツです。
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    ),
    args: {
        type: "single",
        collapsible: true,
    },
};

export const Multiple: Story = {
    render: (args) => (
        <Accordion {...args}>
            <Accordion.Item value="item-1">
                <Accordion.Trigger>アコーディオン 1</Accordion.Trigger>
                <Accordion.Content>
                    複数のアイテムを同時に開くことができます。
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2">
                <Accordion.Trigger>アコーディオン 2</Accordion.Trigger>
                <Accordion.Content>
                    これは 2 つ目のアイテムです。
                </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-3">
                <Accordion.Trigger>アコーディオン 3</Accordion.Trigger>
                <Accordion.Content>
                    これは 3 つ目のアイテムです。
                </Accordion.Content>
            </Accordion.Item>
        </Accordion>
    ),
    args: {
        type: "multiple",
    },
};

export const Disabled: Story = {
    render: (args) => (
        <Accordion {...args}>
            <Accordion.Item value="item-1">
                <Accordion.Trigger>有効なアイテム</Accordion.Trigger>
                <Accordion.Content>通常のアイテムです。</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="item-2" disabled>
                <Accordion.Trigger>無効なアイテム</Accordion.Trigger>
                <Accordion.Content>このコンテンツは見えません。</Accordion.Content>
            </Accordion.Item>
        </Accordion>
    ),
};


