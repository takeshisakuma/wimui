import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";

import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Icon } from "wimui";


const meta: Meta<typeof Dropdown> = {
  title: "Components/Overlays/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dropdown {...args}>
        <DropdownTrigger asChild>
          <Button >{t("story.dropdown_open")}</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => console.log("Profile clicked")}>
            {t("story.dropdown_profile")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Settings clicked")}>
            {t("story.dropdown_settings")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Logout clicked")}>
            {t("story.dropdown_logout")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  },
};

export const WithIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Dropdown {...args}>
        <DropdownTrigger asChild>
          <Button variant="outline">{t("story.dropdown_options")}</Button>
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>
            <Icon name="CheckIcon" size="sm" /> {t("story.dropdown_edit")}
          </DropdownItem>
          <DropdownItem>
            <Icon name="CopyIcon" size="sm" /> {t("story.dropdown_duplicate")}
          </DropdownItem>
          <DropdownItem disabled>
            <Icon name="CloseIcon" size="sm" /> {t("story.dropdown_delete")}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  },
};

export const AlignmentRight: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ paddingLeft: "200px" }}>
        <Dropdown {...args}>
          <DropdownTrigger asChild>
            <Button >{t("story.dropdown_right_aligned")}</Button>
          </DropdownTrigger>
          <DropdownMenu align="right">
            <DropdownItem>
              {t("story.dropdown_item")} 1
            </DropdownItem>
            <DropdownItem>
              {t("story.dropdown_item")} 2
            </DropdownItem>
            <DropdownItem>
              {t("story.dropdown_item")} 3
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  },
};
