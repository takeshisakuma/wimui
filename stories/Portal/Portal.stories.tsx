import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Portal } from "@/components/Portal/Portal";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";

const meta: Meta<typeof Portal> = {
    title: "Component/Utilities/Portal",
    component: Portal,
    parameters: {
        layout: "centered",
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * overflow: hidden な親要素を突き抜ける例
 */
export const OverflowEscape: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        return (
            <div style={{
                width: "100%",
                maxWidth: "400px",
                height: "200px",
                border: "2px dashed #999",
                padding: "20px",
                position: "relative",
                overflow: "hidden", // これにより、通常の子要素はここからはみ出せない
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                background: "#f9f9f9",
                borderRadius: "8px"
            }}>
                <div style={{ textAlign: "center", marginBottom: "10px" }}>
                    <p>このグレーの枠線内は <strong>overflow: hidden</strong> です。</p>
                    <p>Portal を使わないと右下のポップアップは見切れてしまいます。</p>
                </div>

                <Button
                    onClick={() => setShow(!show)}
                    label={show ? "メッセージを閉じる" : "身代わり（Portal）を表示"}
                    priority="primary"
                />

                {show && (
                    <Portal>
                        <div style={{
                            position: "fixed",
                            bottom: "40px",
                            right: "40px",
                            width: "280px",
                            maxWidth: "calc(100vw - 80px)",
                            backgroundColor: "#333",
                            color: "white",
                            padding: "20px",
                            borderRadius: "12px",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                            zIndex: 10000,
                            border: "1px solid #444",
                            animation: "popUp 0.3s ease-out"
                        }}>
                            <style>{`
                                @keyframes popUp {
                                    from { transform: translateY(20px); opacity: 0; }
                                    to { transform: translateY(0); opacity: 1; }
                                }
                            `}</style>
                            <h4 style={{ margin: "0 0 8px 0", color: "#60a5fa" }}>Portal の力</h4>
                            <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.5" }}>
                                私は親要素の <code>overflow: hidden</code> を無視して、画面の右下に独立して表示されています。
                            </p>
                            <div style={{ marginTop: "12px", textAlign: "right" }}>
                                <Button size="small" label="了解" onClick={() => setShow(false)} />
                            </div>
                        </div>
                    </Portal>
                )}
            </div>
        );
    }
};

/**
 * 特定の DOM 要素へのレンダリング例
 */
export const CustomContainer: Story = {
    render: () => {
        const [container, setContainer] = useState<HTMLDivElement | null>(null);
        return (
            <div style={{ width: "100%", maxWidth: "500px" }}>
                <p>下の青い枠は Portal の「転送先（container）」です。</p>

                <div style={{ display: "flex", gap: "20px", marginTop: "20px", flexWrap: "wrap" }}>
                    <div style={{ flex: "1 1 200px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px" }}>
                        <h4>送信元</h4>
                        <p style={{ fontSize: "12px", color: "#666" }}>ここに Portal コンポーネントを配置しています。</p>
                        <Portal container={container}>
                            <div style={{
                                padding: "10px",
                                background: "#dcfce7",
                                border: "1px solid #166534",
                                color: "#166534",
                                borderRadius: "4px",
                                fontSize: "14px",
                                fontWeight: "bold",
                                textAlign: "center",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px"
                            }}>
                                <Icon name="CheckCircleIcon" style={{ width: "20px", height: "20px" }} />
                                送信完了！
                            </div>
                        </Portal>
                    </div>

                    <div
                        ref={setContainer}
                        style={{
                            flex: "1 1 200px",
                            padding: "20px",
                            border: "2px solid #3b82f6",
                            borderRadius: "8px",
                            background: "#eff6ff",
                            minHeight: "100px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }}
                    >
                        {/* ここに Portal の中身が表示される */}
                        {!container && <span style={{ color: "#3b82f6" }}>読み込み中...</span>}
                    </div>
                </div>
            </div>
        );
    },
};


