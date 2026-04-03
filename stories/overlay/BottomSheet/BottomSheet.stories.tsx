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
} from "@/components/overlay/BottomSheet/BottomSheet";
import { Button } from "@/components/form/Button/Button";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <BottomSheet {...args}>
        <BottomSheetTrigger asChild>
          <Button variant="filled">{t("story.bottomsheet_open")}</Button>
        </BottomSheetTrigger>
        <BottomSheetContent>
          <BottomSheetHeader>
            <BottomSheetTitle>{t("story.bottomsheet_title")}</BottomSheetTitle>
            <BottomSheetDescription>
              {t("story.bottomsheet_desc")}
            </BottomSheetDescription>
          </BottomSheetHeader>
          <BottomSheetBody>
            <div
              className="space-y-4"
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <p>{t("story.bottomsheet_body")}</p>
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "var(--wim-color-surface-variant)",
                  borderRadius: "0.5rem",
                }}
              >
                <p style={{ fontSize: "0.875rem" }}>
                  {t("story.bottomsheet_hint")}
                </p>
              </div>
              {Array.from({ length: 10 }).map((_, i) => (
                <p key={i}>
                  {t("story.bottomsheet_scroll_item")} {i + 1}
                </p>
              ))}
            </div>
          </BottomSheetBody>
          <BottomSheetFooter>
            <BottomSheetClose asChild>
              <Button variant="outline">{t("story.bottomsheet_cancel")}</Button>
            </BottomSheetClose>
            <Button variant="filled">{t("story.bottomsheet_action")}</Button>
          </BottomSheetFooter>
        </BottomSheetContent>
      </BottomSheet>
    );
  },
};

export const SingleAction: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <BottomSheet {...args}>
        <BottomSheetTrigger asChild>
          <Button variant="outline">{t("story.bottomsheet_quick_actions")}</Button>
        </BottomSheetTrigger>
        <BottomSheetContent>
          <BottomSheetHeader>
            <BottomSheetTitle>{t("story.bottomsheet_select_option")}</BottomSheetTitle>
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
                <span>{t("story.bottomsheet_share")}</span>
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
                <span>{t("story.bottomsheet_favorite")}</span>
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
                  color: "var(--wim-color-destructive)",
                }}
              >
                <span>{t("story.bottomsheet_delete")}</span>
              </button>
            </div>
          </BottomSheetBody>
        </BottomSheetContent>
      </BottomSheet>
    );
  },
};
