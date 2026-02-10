import type { Meta, StoryObj } from "@storybook/react-vite";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./HoverCard";
import React from "react";
import { Avatar } from "../Avatar/Avatar";

const meta: Meta<typeof HoverCard> = {
    title: "Component/Overlays/HoverCard",
    component: HoverCard,
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
    render: () => (
        <div style={{ padding: "100px", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "600px" }}>
            <HoverCard>
                <HoverCardTrigger asChild>
                    <a
                        href="#"
                        style={{
                            borderRadius: "50%",
                            display: "inline-block",
                            cursor: "pointer",
                        }}
                    >
                        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120" alt="Sarah Miller" />
                    </a>
                </HoverCardTrigger>
                <HoverCardContent side="bottom">
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                        <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120" alt="Sarah Miller" size="lg" />
                        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                            <div style={{ fontWeight: "bold", fontSize: "16px" }}>Sarah Miller</div>
                            <div style={{ color: "var(--text-secondary)", fontSize: "14px" }}>@sarah_m</div>
                        </div>
                        <div style={{ fontSize: "14px" }}>
                            Product Designer and Creative Director. Obsessed with detail and digital experiences.
                        </div>
                        <div style={{ display: "flex", gap: "16px", fontSize: "12px", color: "var(--text-secondary)" }}>
                            <div>
                                <span style={{ fontWeight: "bold", color: "var(--text-primary)" }}>452</span> Following
                            </div>
                            <div>
                                <span style={{ fontWeight: "bold", color: "var(--text-primary)" }}>2.8k</span> Followers
                            </div>
                        </div>
                    </div>
                </HoverCardContent>
            </HoverCard>
        </div>
    ),
};

export const Instant: Story = {
    render: () => (
        <div style={{ padding: "100px", display: "flex", justifyContent: "center", minHeight: "200px" }}>
            <HoverCard openDelay={0} closeDelay={0}>
                <HoverCardTrigger>
                    Hover me (Instant)
                </HoverCardTrigger>
                <HoverCardContent>
                    This hover card appears and disappears immediately.
                </HoverCardContent>
            </HoverCard>
        </div>
    ),
};

