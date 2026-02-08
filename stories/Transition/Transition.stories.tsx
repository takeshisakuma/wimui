import React, { useState, useRef, useLayoutEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Transition } from "./Transition";
import { Button } from "../Button/Button";

const meta: Meta<typeof Transition> = {
    title: "Utilities/Transition",
    component: Transition,
    parameters: {
        layout: "centered",
    },
    tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * 幅のアニメーション付きボタンのカスタムレンダー
 */
const AnimatedButton = ({ show, onClick, label }: { show: boolean, onClick: () => void, label: string }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [width, setWidth] = useState<number | "auto">("auto");

    useLayoutEffect(() => {
        if (buttonRef.current) {
            // 現在の幅を一旦固定
            const currentWidth = buttonRef.current.offsetWidth;
            setWidth(currentWidth);

            // ラベル変更後の真のサイズを計測
            const node = buttonRef.current;
            const originalWidthStyle = node.style.width;
            node.style.width = "auto";
            node.style.minWidth = "0";
            const targetWidth = node.offsetWidth;
            node.style.width = originalWidthStyle;

            // 次のフレームで新しい幅を適用して transition を発動
            const frame = requestAnimationFrame(() => {
                setWidth(targetWidth);
            });
            return () => cancelAnimationFrame(frame);
        }
    }, [label]);

    return (
        <Button
            ref={buttonRef}
            onClick={onClick}
            label={label}
            priority="primary"
            style={{
                transition: "width 300ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.2s, background-color 0.2s",
                width: width === "auto" ? "auto" : `${width}px`,
                minWidth: "0",
                overflow: "hidden",
                whiteSpace: "nowrap"
            }}
        />
    );
};

export const Fade: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                <AnimatedButton
                    show={show}
                    onClick={() => setShow(!show)}
                    label={show ? "非表示にする" : "コンテンツを表示する"}
                />
                <div style={{ height: "100px" }}>
                    <Transition
                        show={show}
                        enter="fade-enter"
                        enterFrom="fade-enter-from"
                        enterTo="fade-enter-to"
                        leave="fade-leave"
                        leaveFrom="fade-leave-from"
                        leaveTo="fade-leave-to"
                    >
                        <div style={{
                            width: "100px",
                            height: "100px",
                            background: "var(--wim-primary, #0070f3)",
                            color: "white",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "8px",
                            boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
                        }}>
                            Fade!
                        </div>
                    </Transition>
                </div>
            </div>
        );
    },
};

export const Slide: Story = {
    render: () => {
        const [show, setShow] = useState(false);
        return (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
                <style>{`
                    .slide-enter { transition: all 300ms ease-out; }
                    .slide-enter-from { opacity: 0; transform: translateY(-20px); }
                    .slide-enter-to { opacity: 1; transform: translateY(0); }
                    .slide-leave { transition: all 200ms ease-in; }
                    .slide-leave-from { opacity: 1; transform: translateY(0); }
                    .slide-leave-to { opacity: 0; transform: translateY(20px); }
                `}</style>
                <AnimatedButton
                    show={show}
                    onClick={() => setShow(!show)}
                    label={show ? "スライドを閉じる" : "スライドコンテンツを展開"}
                />
                <div style={{ height: "100px" }}>
                    <Transition
                        show={show}
                        enter="slide-enter"
                        enterFrom="slide-enter-from"
                        enterTo="slide-enter-to"
                        leave="slide-leave"
                        leaveFrom="slide-leave-from"
                        leaveTo="slide-leave-to"
                    >
                        <div style={{
                            padding: "20px",
                            background: "#f0f0f0",
                            borderRadius: "12px",
                            border: "1px solid #ddd"
                        }}>
                            Slide!
                        </div>
                    </Transition>
                </div>
            </div>
        );
    },
};
