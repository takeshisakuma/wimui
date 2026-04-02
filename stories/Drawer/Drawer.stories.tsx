import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/overlay/Drawer/Drawer";
import { Button } from "@/components/form/Button/Button";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Drawer> = {
  title: "Components/Overlays/Drawer",
  component: Drawer,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    side: {
      control: "select",
      options: ["top", "right", "bottom", "left"],
      description: "The side where the drawer appears.",
    },
    open: {
      control: "boolean",
      description: "Controlled open state of the drawer.",
    },
    defaultOpen: {
      control: "boolean",
      description: "Default open state when uncontrolled.",
    },
    onOpenChange: {
      action: "onOpenChange",
      description: "Event handler called when the open state changes.",
    },
    slideIn: {
      control: "boolean",
      description: "Whether the drawer should slide in when opening.",
    },
    slideOut: {
      control: "boolean",
      description: "Whether the drawer should slide out when closing.",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

export const Default: Story = {
  args: {
    side: "right",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="filled">{t("story.drawer_open_right")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_title")}</DrawerTitle>
            <DrawerDescription>{t("story.drawer_desc")}</DrawerDescription>
          </DrawerHeader>
          <div style={{ padding: "20px" }}>
            <p>{t("story.drawer_body1")}</p>
            <p>{t("story.drawer_body2")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outlined">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
            <Button variant="filled">{t("story.drawer_confirm")}</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const Left: Story = {
  args: {
    side: "left",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outlined">{t("story.drawer_open_left")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_left_title")}</DrawerTitle>
            <DrawerDescription>{t("story.drawer_left_desc")}</DrawerDescription>
          </DrawerHeader>
          <div style={{ padding: "20px" }}>
            <p>{t("story.drawer_left_body")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outlined">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const Top: Story = {
  args: {
    side: "top",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outlined">{t("story.drawer_open_top")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_top_title")}</DrawerTitle>
            <DrawerDescription>{t("story.drawer_top_desc")}</DrawerDescription>
          </DrawerHeader>
          <div style={{ padding: "20px" }}>
            <p>{t("story.drawer_top_body")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outlined">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const Bottom: Story = {
  args: {
    side: "bottom",
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="outlined">{t("story.drawer_open_bottom")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_bottom_title")}</DrawerTitle>
            <DrawerDescription>
              {t("story.drawer_bottom_desc")}
            </DrawerDescription>
          </DrawerHeader>
          <div style={{ padding: "20px" }}>
            <p>{t("story.drawer_bottom_body")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outlined">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};

export const Controlled: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const [open, setOpen] = useState(false);
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <p>
          {t("story.dialog_curr_state")}: {open ? "Open" : "Closed"}
        </p>
        <Button
          variant="filled"
          onClick={() => setOpen(true)}

        >{t("story.dialog_state_open")}</Button>

        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>{t("story.drawer_controlled_title")}</DrawerTitle>
              <DrawerDescription>
                {t("story.dialog_controlled_desc")}
              </DrawerDescription>
            </DrawerHeader>
            <div style={{ padding: "20px" }}>
              <p>{t("story.dialog_controlled_body")}</p>
            </div>
            <DrawerFooter>
              <Button
                variant="outlined"
                onClick={() => setOpen(false)}

              >{t("story.dialog_cancel")}</Button>
              <Button
                variant="filled"
                onClick={() => setOpen(false)}

              >{t("story.dialog_state_close")}</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>
    );
  },
};

export const WithoutSlide: Story = {
  args: {
    side: "right",
    slideIn: false,
    slideOut: false,
  },
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Drawer {...args}>
        <DrawerTrigger asChild>
          <Button variant="filled">{t("story.drawer_open_no_slide")}</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>{t("story.drawer_no_slide_title")}</DrawerTitle>
            <DrawerDescription>
              {t("story.drawer_no_slide_desc")}
            </DrawerDescription>
          </DrawerHeader>
          <div style={{ padding: "20px" }}>
            <p>{t("story.drawer_no_slide_body")}</p>
          </div>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outlined">{t("story.dialog_cancel")}</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  },
};
