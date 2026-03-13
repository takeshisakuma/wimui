import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@/components/Dropdown/Dropdown";
import { Button } from "@/components/Button/Button";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
        <DropdownTrigger>
          <Button label={t("story_dropdown_open")} />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem onClick={() => console.log("Profile clicked")}>
            {t("story_dropdown_profile")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Settings clicked")}>
            {t("story_dropdown_settings")}
          </DropdownItem>
          <DropdownItem onClick={() => console.log("Logout clicked")}>
            {t("story_dropdown_logout")}
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
        <DropdownTrigger>
          <Button priority="secondary" label={t("story_dropdown_options")} />
        </DropdownTrigger>
        <DropdownMenu>
          <DropdownItem>
            <Icon name="CheckIcon" size="small" /> {t("story_dropdown_edit")}
          </DropdownItem>
          <DropdownItem>
            <Icon name="CopyIcon" size="small" /> {t("story_dropdown_duplicate")}
          </DropdownItem>
          <DropdownItem disabled>
            <Icon name="CloseIcon" size="small" /> {t("story_dropdown_delete")}
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
          <DropdownTrigger>
            <Button label={t("story_dropdown_right_aligned")} />
          </DropdownTrigger>
          <DropdownMenu align="right">
            <DropdownItem>
              {t("story_dropdown_item")} 1
            </DropdownItem>
            <DropdownItem>
              {t("story_dropdown_item")} 2
            </DropdownItem>
            <DropdownItem>
              {t("story_dropdown_item")} 3
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    );
  },
};
