import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/Popover/Popover";
import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Label } from "@/components/Label/Label";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import React from "react";

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
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button priority="secondary" label={t("story_popover_open")} />
        </PopoverTrigger>
        <PopoverContent>
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <h4 style={{ margin: 0 }}>{t("story_popover_dimensions")}</h4>
            <p
              style={{
                margin: 0,
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
              }}
            >
              {t("story_popover_set_dim")}
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <Label
                  label={t("story_popover_width")}
                  htmlFor="width"
                  style={{ marginBottom: "5px" }}
                />
                <Input id="width" defaultValue="100%" />
              </div>
              <div>
                <Label
                  label={t("story_popover_height")}
                  htmlFor="height"
                  style={{ marginBottom: "5px" }}
                />
                <Input id="height" defaultValue="25px" />
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    );
  },
};

export const Interactive: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    const [width, setWidth] = useState("300px");
    const [height, setHeight] = useState("auto");

    return (
      <Popover {...args}>
        <PopoverTrigger asChild>
          <Button priority="secondary" label={t("story_popover_interactive")} />
        </PopoverTrigger>
        <PopoverContent
          className="custom-width-popover"
          style={{ width, height }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <h4 style={{ margin: 0 }}>{t("story_popover_interactive_dim")}</h4>
            <p
              style={{
                margin: 0,
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
              }}
            >
              {t("story_popover_change_val")}
            </p>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div>
                <Label
                  label={t("story_popover_width")}
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
                  label={t("story_popover_height")}
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
  render: function Render() {
    const { t } = useTranslation();
    return (
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
            <Button label={t("story_popover_left_align")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{ padding: "10px" }}>{t("story_popover_left_cont")}</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger asChild>
            <Button label={t("story_popover_center_align")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{ padding: "10px" }}>{t("story_popover_center_cont")}</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom-end">
          <PopoverTrigger asChild>
            <Button label={t("story_popover_right_align")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{ padding: "10px" }}>{t("story_popover_right_cont")}</div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};

export const Placement: Story = {
  render: function Render() {
    const { t } = useTranslation();
    return (
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
            <Button label={t("story_popover_top_place")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{ padding: "10px" }}>{t("story_popover_appears_above")}</div>
          </PopoverContent>
        </Popover>
        <Popover placement="bottom">
          <PopoverTrigger asChild>
            <Button label={t("story_popover_bottom_place")} />
          </PopoverTrigger>
          <PopoverContent>
            <div style={{ padding: "10px" }}>{t("story_popover_appears_below")}</div>
          </PopoverContent>
        </Popover>
      </div>
    );
  },
};
