import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { OverlayBase } from "@/components/_internal/OverlayBase";
import { Button } from "wimui";
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
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open Overlay</Button>
        <OverlayBase
          open={open}
          onOpenChange={setOpen}
          overlayClassName={demoStyles.overlay}
          contentClassName={demoStyles.content}
        >
          <h3 style={{ margin: "0 0 var(--wim-spacing-sm) 0" }}>Overlay Content</h3>
          <p style={{ margin: 0, color: "var(--wim-color-text-secondary)" }}>
            Backdrop, focus trap, Escape dismissal, and enter/exit transitions are handled here.
          </p>
          <div className={demoStyles.actions}>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Close
            </Button>
          </div>
        </OverlayBase>
      </>
    );
  },
};
