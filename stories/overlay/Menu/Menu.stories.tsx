import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  Menu,
  MenuItem,
  MenuItemGroup,
  SubMenu,
  MenuDivider,
} from "@/components/overlay/Menu/Menu";
import { Icon } from "@/components/media/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof Menu> = {
  title: "Components/Overlays/Menu",
  component: Menu,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

export const Basic: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Menu {...args}>
        <MenuItem>{t("story.menu_home")}</MenuItem>
        <MenuItem>{t("story.menu_about")}</MenuItem>
        <MenuItem>{t("story.menu_services")}</MenuItem>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>
    );
  },
};

export const WithIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Menu {...args}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <MenuItem icon={<Icon name="CopyIcon" size="sm" />}>
          {t("story.menu_projects")}
        </MenuItem>
        <MenuItem icon={<Icon name="CloseIcon" size="sm" />}>
          {t("story.menu_settings")}
        </MenuItem>
      </Menu>
    );
  },
};

export const WithSubMenu: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Menu {...args} defaultOpenKeys={["sub1"]}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <SubMenu
          itemKey="sub1"
          title={t("story.menu_products")}
          icon={<Icon name="CopyIcon" size="sm" />}
        >
          <MenuItem>{t("story.menu_product")} 1</MenuItem>
          <MenuItem>{t("story.menu_product")} 2</MenuItem>
          <MenuItem>{t("story.menu_product")} 3</MenuItem>
        </SubMenu>
        <SubMenu
          itemKey="sub2"
          title={t("story.menu_services")}
          icon={<Icon name="CloseIcon" size="sm" />}
        >
          <MenuItem>{t("story.menu_service")} A</MenuItem>
          <MenuItem>{t("story.menu_service")} B</MenuItem>
        </SubMenu>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>
    );
  },
};

export const WithGroups: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Menu {...args}>
        <MenuItemGroup title={t("story.menu_main_pages")}>
          <MenuItem>{t("story.menu_home")}</MenuItem>
          <MenuItem>{t("story.menu_about")}</MenuItem>
          <MenuItem>{t("story.menu_contact")}</MenuItem>
        </MenuItemGroup>
        <MenuDivider />
        <MenuItemGroup title={t("story.menu_user_actions")}>
          <MenuItem>{t("story.menu_profile")}</MenuItem>
          <MenuItem>{t("story.menu_settings")}</MenuItem>
          <MenuItem>{t("story.menu_logout")}</MenuItem>
        </MenuItemGroup>
      </Menu>
    );
  },
};

export const Horizontal: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Menu {...args} mode="horizontal">
        <MenuItem>{t("story.menu_home")}</MenuItem>
        <MenuItem>{t("story.menu_about")}</MenuItem>
        <MenuItem>{t("story.menu_services")}</MenuItem>
        <MenuItem>{t("story.menu_contact")}</MenuItem>
      </Menu>
    );
  },
};

export const Inline: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Menu {...args} mode="inline" defaultOpenKeys={["sub1"]}>
        <MenuItem icon={<Icon name="CheckIcon" size="sm" />}>
          {t("story.menu_dashboard")}
        </MenuItem>
        <SubMenu
          itemKey="sub1"
          title={t("story.menu_settings")}
          icon={<Icon name="CopyIcon" size="sm" />}
        >
          <MenuItem>{t("story.menu_profile_settings")}</MenuItem>
          <MenuItem>{t("story.menu_account_settings")}</MenuItem>
          <MenuItem>{t("story.menu_privacy_settings")}</MenuItem>
        </SubMenu>
        <MenuItem icon={<Icon name="CloseIcon" size="sm" />}>
          {t("story.menu_logout")}
        </MenuItem>
      </Menu>
    );
  },
};

export const WithDisabledItems: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Menu {...args}>
        <MenuItem>{t("story.menu_active_item")}</MenuItem>
        <MenuItem disabled>{t("story.menu_disabled_item")}</MenuItem>
        <MenuItem>{t("story.menu_another_active_item") || "Another Active Item"}</MenuItem>
      </Menu>
    );
  },
};
