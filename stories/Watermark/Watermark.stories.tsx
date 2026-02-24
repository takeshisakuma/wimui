import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Watermark } from "@/components/Watermark/Watermark";

const meta: Meta<typeof Watermark> = {
    title: "Components/Data Indicators/Watermark",
    component: Watermark,
    argTypes: {
        rotate: {
            control: { type: "range", min: -180, max: 180 },
        },
        opacity: {
            control: { type: "range", min: 0, max: 1, step: 0.1 },
        },
    },
};

export default meta;
type Story = StoryObj<typeof Watermark>;

export const Text: Story = {
    args: {
        content: "wimui watermark",
        children: (
            <div style={{ height: "400px", background: "#fff", padding: "20px" }}>
                <p>
                    このコンテンツはウォーターマークで保護されています。
                    コピーや転載を制限したい場合に有効です。
                </p>
                <div
                    style={{
                        height: "200px",
                        background: "#f0f0f0",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    機密情報エリア
                </div>
            </div>
        ),
    },
};

export const MultiLine: Story = {
    args: {
        content: ["wimui", "Confidential", "Wim UI Team"],
        gap: [120, 120],
        children: <div style={{ height: "400px" }} />,
    },
};

export const Image: Story = {
    args: {
        image: "./wimlogo.svg",
        width: 40,
        height: 40,
        opacity: 0.1,
        children: <div style={{ height: "400px" }} />,
    },
};


