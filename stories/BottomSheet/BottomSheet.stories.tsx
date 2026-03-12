import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  BottomSheet,
  BottomSheetTrigger,
  BottomSheetContent,
  BottomSheetHeader,
  BottomSheetFooter,
  BottomSheetTitle,
  BottomSheetDescription,
  BottomSheetClose,
  BottomSheetBody,
} from "@/components/BottomSheet/BottomSheet";
import { Button } from "@/components/Button/Button";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof BottomSheet> = {
  title: "Components/Overlays/BottomSheet",
  component: BottomSheet,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Controlled open state of the bottom sheet.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Default open state when uncontrolled.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Event handler called when the open state changes.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof BottomSheet>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <BottomSheet {...args}>
        <BottomSheetTrigger asChild>
          <Button
            priority="primary"
            label={t("story_bottomsheet_open")}
            aria-label={false as any}
          />
        </BottomSheetTrigger>
        <BottomSheetContent>
          <BottomSheetHeader>
            <BottomSheetTitle>{t("story_bottomsheet_title")}</BottomSheetTitle>
            <BottomSheetDescription>
              {t("story_bottomsheet_desc")}
            </BottomSheetDescription>
          </BottomSheetHeader>
          <BottomSheetBody>
            <div
              className="space-y-4"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <p>{t("story_bottomsheet_body")}</p>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#f3f4f6",
                  borderRadius: "0.5rem",
                }}
              >
                <p style={{ fontSize: "0.875rem" }}>
                  {t("story_bottomsheet_hint")}
                </p>
              </div>
              {Array.from({ length: 10 }).map((_, i) => (
                <p key={i}>
                  {t("story_bottomsheet_scroll_item")} {i + 1}
                </p>
              ))}
            </div>
          </BottomSheetBody>
          <BottomSheetFooter>
            <BottomSheetClose asChild>
              <Button
                priority="secondary"
                label={t("story_bottomsheet_cancel")}
                aria-label={false as any}
              />
            </BottomSheetClose>
            <Button
              priority="primary"
              label={t("story_bottomsheet_action")}
              aria-label={false as any}
            />
          </BottomSheetFooter>
        </BottomSheetContent>
      </BottomSheet>
    );
  },
};

export const SingleAction: Story = {
  render: (args) => {
    const { t } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return (
      <BottomSheet {...args}>
        <BottomSheetTrigger asChild>
          <Button
            priority="secondary"
            label={t("story_bottomsheet_quick_actions")}
            aria-label={false as any}
          />
        </BottomSheetTrigger>
        <BottomSheetContent>
          <BottomSheetHeader>
            <BottomSheetTitle>{t("story_bottomsheet_select_option")}</BottomSheetTitle>
          </BottomSheetHeader>
          <BottomSheetBody>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
            >
              <button
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  borderRadius: "0.375rem",
                }}
              >
                <span>{t("story_bottomsheet_share")}</span>
              </button>
              <button
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  borderRadius: "0.375rem",
                }}
              >
                <span>{t("story_bottomsheet_favorite")}</span>
              </button>
              <button
                style={{
                  width: "100%",
                  textAlign: "left",
                  padding: "0.75rem",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                  borderRadius: "0.375rem",
                  color: "#dc2626",
                }}
              >
                <span>{t("story_bottomsheet_delete")}</span>
              </button>
            </div>
          </BottomSheetBody>
        </BottomSheetContent>
      </BottomSheet>
    );
  },
};
