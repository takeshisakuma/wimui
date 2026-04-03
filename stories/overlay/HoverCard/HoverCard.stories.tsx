import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/overlay/HoverCard/HoverCard";
import React from "react";
import { Avatar } from "@/components/data-display/Avatar/Avatar";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof HoverCard> = {
  title: "Components/Overlays/HoverCard",
  component: HoverCard,
};

export default meta;
type Story = StoryObj<typeof HoverCard>;

export const Default: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          padding: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "600px",
        }}
      >
        <HoverCard>
          <HoverCardTrigger asChild>
            <a
              href="/"
              style={{
                borderRadius: "50%",
                display: "inline-block",
                cursor: "pointer",
              }}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120"
                alt="Sarah Miller"
              />
            </a>
          </HoverCardTrigger>
          <HoverCardContent side="bottom">
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120"
                alt="Sarah Miller"
                size="lg"
              />
              <div
                style={{ display: "flex", flexDirection: "column", gap: "4px" }}
              >
                <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                  Sarah Miller
                </div>
                <div
                  style={{ color: "var(--wim-color-text-secondary)", fontSize: "14px" }}
                >
                  @sarah_m
                </div>
              </div>
              <div style={{ fontSize: "14px" }}>
                {t("story.hovercard_bio")}
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "16px",
                  fontSize: "12px",
                  color: "var(--wim-color-text-secondary)",
                }}
              >
                <div>
                  <span
                    style={{ fontWeight: "bold", color: "var(--wim-color-text-primary)" }}
                  >
                    452
                  </span>{" "}
                  {t("story.hovercard_following")}
                </div>
                <div>
                  <span
                    style={{ fontWeight: "bold", color: "var(--wim-color-text-primary)" }}
                  >
                    2.8k
                  </span>{" "}
                  {t("story.hovercard_followers")}
                </div>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </div>
    );
  },
};

export const Instant: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div
        style={{
          padding: "100px",
          display: "flex",
          justifyContent: "center",
          minHeight: "200px",
        }}
      >
        <HoverCard openDelay={0} closeDelay={0}>
          <HoverCardTrigger>{t("story.hovercard_hover_me")}</HoverCardTrigger>
          <HoverCardContent>{t("story.hovercard_instant_desc")}</HoverCardContent>
        </HoverCard>
      </div>
    );
  },
};
