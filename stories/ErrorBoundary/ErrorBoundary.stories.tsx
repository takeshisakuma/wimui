import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ErrorBoundary } from "@/components/ErrorBoundary/ErrorBoundary";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof ErrorBoundary> = {
    title: "Components/Utilities/ErrorBoundary",
    component: ErrorBoundary,
    parameters: {
        layout: "centered",
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

const BuggyComponent = () => {
    throw new Error("意図的なエラーが発生しました！");
};

export const Default: Story = {
    render: () => {
        const [shouldThrow, setShouldThrow] = useState(false);
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <p style={{ marginBottom: "16px" }}>下のボタンをクリックしてエラーを発生させます。</p>
                <Button
                    onClick={() => setShouldThrow(true)}
                    label="エラーを発生させる"
                    priority="primary"
                    style={{ marginBottom: "20px" }}
                />
                <ErrorBoundary onReset={() => setShouldThrow(false)}>
                    {shouldThrow ? <BuggyComponent /> : <div>現在、正常に動作しています。</div>}
                </ErrorBoundary>
            </div>
        );
    },
};

export const CustomFallback: Story = {
    render: () => {
        const [shouldThrow, setShouldThrow] = useState(false);
        return (
            <div style={{ padding: "20px", textAlign: "center" }}>
                <Button
                    onClick={() => setShouldThrow(true)}
                    label="カスタムエラーを発生させる"
                    priority="primary"
                    style={{ marginBottom: "20px" }}
                />
                <ErrorBoundary
                    onReset={() => setShouldThrow(false)}
                    fallback={(error, info, reset) => (
                        <div style={{ background: "#f5f5f5", padding: "24px", borderRadius: "12px", textAlign: "center", border: "1px solid #ddd" }}>
                            <h3 style={{ marginTop: 0 }}>おっと！エラーが発生しました</h3>
                            <p style={{ color: "#666", marginBottom: "20px" }}>{error.message}</p>
                            <Button
                                onClick={reset}
                                label="境界をリセットして再試行"
                                priority="secondary"
                            />
                        </div>
                    )}
                >
                    {shouldThrow ? <BuggyComponent /> : <div>安定したコンテンツ。</div>}
                </ErrorBoundary>
            </div>
        );
    },
};


