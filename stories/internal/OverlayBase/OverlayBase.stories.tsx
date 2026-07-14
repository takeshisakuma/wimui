import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { OverlayBase } from "@/components/_internal/OverlayBase";
import { Button } from "wimui";
import { ALL_NAMESPACES } from "../../i18nConstants";
import demoStyles from "./overlay-base-demo.module.scss";

const meta: Meta<typeof OverlayBase> = {
  title: "Components/Internal/OverlayBase",
  component: OverlayBase,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof OverlayBase>;

export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>{t("story.overlaybase_open")}</Button>
        <OverlayBase
          open={open}
          onOpenChange={setOpen}
          overlayClassName={demoStyles.overlay}
          contentClassName={demoStyles.content}
        >
          <h3 style={{ margin: "0 0 var(--wim-spacing-sm) 0" }}>
            {t("story.overlaybase_title")}
          </h3>
          <p style={{ margin: 0, color: "var(--wim-color-text-secondary)" }}>
            {t("story.overlaybase_desc")}
          </p>
          <div className={demoStyles.actions}>
            <Button variant="outline" onClick={() => setOpen(false)}>
              {t("story.iconbutton_close")}
            </Button>
          </div>
        </OverlayBase>
      </>
    );
  },
};
