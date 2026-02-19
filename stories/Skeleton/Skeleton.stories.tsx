import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { Skeleton } from "@/components/Skeleton/Skeleton";

const meta: Meta<typeof Skeleton> = {
    title: "Component/Loading States/Skeleton",
    component: Skeleton,
    argTypes: {
        variant: {
            control: "select",
            options: ["text", "rect", "circle"],
        },
        animation: {
            control: "select",
            options: ["pulse", "wave", "none"],
        },
        width: {
            control: "text",
        },
        height: {
            control: "text",
        },
    },
};

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
    args: {
        width: "100%",
    },
};

export const Text: Story = {
    render: (args) => (
        <div style={{ maxWidth: "300px", width: "100%" }}>
            <Skeleton {...args} variant="text" width="100%" />
            <Skeleton {...args} variant="text" width="80%" />
            <Skeleton {...args} variant="text" width="60%" />
        </div>
    ),
};

export const Circle: Story = {
    args: {
        variant: "circle",
        width: 40,
        height: 40,
    },
};

export const Rect: Story = {
    args: {
        variant: "rect",
        width: 200,
        height: 100,
    },
};

export const WaveAnimation: Story = {
    args: {
        animation: "wave",
        width: "100%",
    },
};

export const CardExample: Story = {
    render: (args) => (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                maxWidth: "300px",
                width: "100%",
                padding: "16px",
                border: "1px solid #eee",
                borderRadius: "8px",
            }}
        >
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Skeleton {...args} variant="circle" width={40} height={40} />
                <div style={{ flex: 1 }}>
                    <Skeleton {...args} variant="text" width="60%" />
                    <Skeleton {...args} variant="text" width="40%" />
                </div>
            </div>
            <Skeleton {...args} variant="rect" width="100%" height={150} />
            <div>
                <Skeleton {...args} variant="text" width="100%" />
                <Skeleton {...args} variant="text" width="90%" />
                <Skeleton {...args} variant="text" width="70%" />
            </div>
        </div>
    ),
};

export const LoadingToggle: Story = {
    render: (args) => {
        const [loading, setLoading] = React.useState(true);

        return (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <button
                    onClick={() => setLoading(!loading)}
                    style={{
                        padding: "8px 16px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        cursor: "pointer",
                        width: "fit-content",
                    }}
                >
                    {loading ? "Show Content" : "Show Skeleton"}
                </button>

                <div
                    style={{
                        padding: "20px",
                        border: "1px solid #eee",
                        borderRadius: "12px",
                        maxWidth: "350px",
                        width: "100%",
                        boxSizing: "border-box",
                    }}
                >
                    {loading ? (
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <Skeleton {...args} variant="circle" width={48} height={48} />
                                <div style={{ flex: 1 }}>
                                    <Skeleton {...args} variant="text" width="50%" />
                                    <Skeleton {...args} variant="text" width="30%" />
                                </div>
                            </div>
                            <Skeleton {...args} variant="rect" width="100%" height={120} />
                            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                                <Skeleton {...args} variant="text" />
                                <Skeleton {...args} variant="text" />
                                <Skeleton {...args} variant="text" width="60%" />
                            </div>
                        </div>
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: "50%",
                                        backgroundColor: "#007bff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        color: "white",
                                        fontWeight: "bold",
                                    }}
                                >
                                    JD
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ fontWeight: "bold", fontSize: "1.1rem" }}>
                                        John Doe
                                    </div>
                                    <div style={{ color: "#666", fontSize: "0.9rem" }}>
                                        Software Engineer
                                    </div>
                                </div>
                            </div>
                            <img
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=350&q=80"
                                alt="Content"
                                style={{
                                    width: "100%",
                                    height: "120px",
                                    objectFit: "cover",
                                    borderRadius: "4px",
                                }}
                            />
                            <div style={{ lineHeight: "1.6", color: "#444" }}>
                                これは実際にコンテンツが読み込まれた状態のデモです。
                                スケルトンが提供したプレースホルダーと同じ位置に、
                                本来のテキストや画像が表示されます。
                            </div>
                        </div>
                    )}
                </div>
            </div>
        );
    },
};


