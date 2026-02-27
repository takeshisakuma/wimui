import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { FocusTrap } from "@/components/FocusTrap/FocusTrap";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";

const meta: Meta<typeof FocusTrap> = {
  title: "Components/Utilities/FocusTrap",
  component: FocusTrap,
  tags: [],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof FocusTrap>;

export const Default: Story = {
  render: (args) => {
    const [active, setActive] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          maxWidth: "90vw",
          boxSizing: "border-box",
        }}
      >
        <Button onClick={() => setActive(!active)}>
          {active ? "Deactivate Focus Trap" : "Activate Focus Trap"}
        </Button>

        <div
          style={{
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            maxWidth: "100%",
            boxSizing: "border-box",
          }}
        >
          <p>Outside the trap</p>
          <Button>Outside Button</Button>
        </div>

        {active && (
          <FocusTrap {...args} active={active}>
            <div
              style={{
                padding: "20px",
                border: "2px solid #007bff",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
            >
              <h3>Focus Trapped Area</h3>
              <p>
                Try tabbing through these elements. Focus will not leave this
                box.
              </p>
              <Input placeholder="First focusable" />
              <Input placeholder="Second focusable" />
              <Button onClick={() => setActive(false)}>Close Trap</Button>
            </div>
          </FocusTrap>
        )}
      </div>
    );
  },
};

export const AutoFocus: Story = {
  args: {
    autoFocus: true,
  },
  render: (args) => {
    const [active, setActive] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "center",
          maxWidth: "90vw",
          boxSizing: "border-box",
        }}
      >
        <Button onClick={() => setActive(!active)}>
          {active ? "Deactivate" : "Activate with AutoFocus"}
        </Button>

        {active && (
          <FocusTrap {...args} active={active}>
            <div
              style={{
                padding: "20px",
                border: "2px solid #28a745",
                borderRadius: "8px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
                maxWidth: "100%",
                boxSizing: "border-box",
              }}
            >
              <h3>AutoFocus enabled</h3>
              <Input placeholder="I get focus automatically" />
              <Button>Another element</Button>
              <Button onClick={() => setActive(false)}>Close</Button>
            </div>
          </FocusTrap>
        )}
      </div>
    );
  },
};
