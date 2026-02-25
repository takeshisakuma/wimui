import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  PopoverClose,
} from "@/components/Popover/Popover";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { useState } from "react";

const meta: Meta<typeof Popover> = {
  title: "Components/Overlays/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A popover component for displaying rich content in a portal-like overlay triggered by a button.",
      },
    },
  },
  // tags: ["autodocs"],
  argTypes: {
    defaultOpen: { control: "boolean" },
    isOpen: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: (args) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button priority="secondary" label="Open Popover" />
      </PopoverTrigger>
      <PopoverContent>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <h4 style={{ margin: 0 }}>Dimensions</h4>
          <p
            style={{
              margin: 0,
              color: "var(--text-secondary)",
              fontSize: "0.9rem",
            }}
          >
            Set the dimensions for the layer.
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <div>
              <Label
                label="Width"
                htmlFor="width"
                style={{ marginBottom: "5px" }}
              />
              <Input id="width" defaultValue="100%" />
            </div>
            <div>
              <Label
                label="Height"
                htmlFor="height"
                style={{ marginBottom: "5px" }}
              />
              <Input id="height" defaultValue="25px" />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
};

export const Interactive: Story = {
  render: (args) => {
    const [width, setWidth] = useState("300px");
    const [height, setHeight] = useState("auto");

    return (
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button priority="secondary" label="Interactive Popover" />
        </PopoverTrigger>
        <PopoverContent
          className="custom-width-popover"
          style={{ width, height }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h4 style={{ margin: 0 }}>Interactive Dimensions</h4>
            <p
              style={{
                margin: 0,
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
              }}
            >
              Change value to see it resize immediately.
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <Label
                  label="Width"
                  htmlFor="interactive-width"
                  style={{ marginBottom: "5px" }}
                />
                <Input
                  id="interactive-width"
                  value={width}
                  onChange={(e) => setWidth(e.target.value)}
                />
              </div>
              <div>
                <Label
                  label="Height"
                  htmlFor="interactive-height"
                  style={{ marginBottom: "5px" }}
                />
                <Input
                  id="interactive-height"
                  value={height}
                  onChange={(e) => setHeight(e.target.value)}
                />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const Alignment: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
        justifyContent: "center",
        padding: "40px 20px",
      }}
    >
      <Popover placement="bottom-start">
        <PopoverTrigger asChild>
          <Button label="Left Align" />
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ padding: "10px" }}>Left aligned content</div>
        </PopoverContent>
      </Popover>
      <Popover placement="bottom">
        <PopoverTrigger asChild>
          <Button label="Center Align" />
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ padding: "10px" }}>Center aligned content</div>
        </PopoverContent>
      </Popover>
      <Popover placement="bottom-end">
        <PopoverTrigger asChild>
          <Button label="Right Align" />
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ padding: "10px" }}>Right aligned content</div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};

export const Placement: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "50px",
        padding: "50px",
      }}
    >
      <Popover placement="top">
        <PopoverTrigger asChild>
          <Button label="Top Placement" />
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ padding: "10px" }}>Appears above</div>
        </PopoverContent>
      </Popover>
      <Popover placement="bottom">
        <PopoverTrigger asChild>
          <Button label="Bottom Placement" />
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ padding: "10px" }}>Appears below</div>
        </PopoverContent>
      </Popover>
    </div>
  ),
};
