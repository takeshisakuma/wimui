import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "@/components/Card/Card";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof Card> = {
    title: "Components/Data Containers/Card",
    component: Card,
    tags: [],
    parameters: {
        layout: "padded",
    },
    decorators: [
        (Story) => (
            <div style={{ display: "flex", justifyContent: "center", padding: "32px" }}>
                <Story />
            </div>
        ),
    ],
    argTypes: {
        variant: {
            control: "select",
            options: ["elevated", "outline", "flat"],
        },
        padding: {
            control: "select",
            options: ["none", "sm", "md", "lg"],
        },
        radius: {
            control: "select",
            options: ["none", "sm", "md", "lg"],
        },
    },
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        variant: "elevated",
        children: (
            <Card.Body>
                <h3>デフォルトカード</h3>
                <p>これは基本のカード（elevated）です。ホバーすると少し浮き上がります。</p>
            </Card.Body>
        ),
        style: { width: "300px" },
    },
};

export const Outline: Story = {
    args: {
        variant: "outline",
        children: (
            <Card.Body>
                <h3>アウトラインカード</h3>
                <p>枠線のみのシンプルなカードです。</p>
            </Card.Body>
        ),
        style: { width: "300px" },
    },
};

export const Flat: Story = {
    args: {
        variant: "flat",
        children: (
            <Card.Body>
                <h3>フラットカード</h3>
                <p>背景色のみで影のないカードです。</p>
            </Card.Body>
        ),
        style: { width: "300px" },
    },
};

export const WithHeaderAndFooter: Story = {
    render: (args) => (
        <Card {...args} style={{ width: "400px" }}>
            <Card.Header>
                <h4 style={{ margin: 0 }}>カードヘッダー</h4>
            </Card.Header>
            <Card.Body>
                <p>
                    ヘッダー、ボディ、フッターを組み合わせた構成です。
                    サブコンポーネントを使用することで柔軟にレイアウトを作成できます。
                </p>
            </Card.Body>
            <Card.Footer>
                <div style={{ display: "flex", justifyContent: "flex-end", gap: "8px" }}>
                    <Button priority="secondary" size="small" label="キャンセル" />
                    <Button priority="primary" size="small" label="保存" />
                </div>
            </Card.Footer>
        </Card>
    ),
    args: {
        variant: "elevated",
    },
};


