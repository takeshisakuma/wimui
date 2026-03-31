import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { OverlayBase } from "../../../src/components/_internal/OverlayBase";
import { Button } from "../../../src/components/form/Button/Button";
import { Card } from "../../../src/components/data-display/Card/Card";
import { Stack } from "../../../src/components/layout/Stack/Stack";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof OverlayBase> = {
  title: "Components/Internal/OverlayBase",
  component: OverlayBase,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof OverlayBase>;

export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "40px", height: "100vh" }}>
        <Button onClick={() => setOpen(true)} variant="filled">
          {t("doc.ob_open")}
        </Button>
        <OverlayBase 
            open={open} 
            onOpenChange={setOpen}
            contentClassName="wim-overlay-content-centered"
        >
          <Card style={{ width: "400px" }}>
            <Card.Header>
              <strong>{t("doc.ob_title")}</strong>
            </Card.Header>
            <Card.Body>
              <Stack gap="md">
                <p>{t("doc.ob_desc")}</p>
                <Button onClick={() => setOpen(false)} variant="filled">{t("button.close") || "Close"}</Button>
              </Stack>
            </Card.Body>
          </Card>
        </OverlayBase>
      </div>
    );
  },
};

export const CustomTransition: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ padding: "40px", height: "100vh" }}>
        <Button onClick={() => setOpen(true)} variant="filled">
          {t("doc.ob_slide_open")}
        </Button>
        <OverlayBase 
            open={open} 
            onOpenChange={setOpen}
            contentClassName="wim-overlay-content-top"
            transitionProps={{
                enter: "slide-down-enter",
                enterFrom: "slide-down-enter-from",
                enterTo: "slide-down-enter-to",
                leave: "slide-down-leave",
                leaveFrom: "slide-down-leave-from",
                leaveTo: "slide-down-leave-to",
            }}
        >
          <Card style={{ width: "100%", borderRadius: "0 0 16px 16px" }}>
            <Card.Body>
              <Stack direction="row" justify="space-between" align="center">
                <p>{t("doc.ob_slide_desc")}</p>
                <Button onClick={() => setOpen(false)} variant="outlined" label={t("button.dismiss") || "Dismiss"} />
              </Stack>
            </Card.Body>
          </Card>
        </OverlayBase>
      </div>
    );
  },
};
