import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import {
  ContextMenu,
  ContextMenuItem,
  ContextMenuDivider,
  ContextMenuGroup,
} from "@/components/ContextMenu/ContextMenu";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof ContextMenu> = {
  title: "Components/Overlays/ContextMenu",
  component: ContextMenu,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

export const Basic: Story = {
  args: {
    disabled: false,
  },
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ContextMenu
        {...args}
        menu={
          <>
            <ContextMenuItem onClick={() => console.log("Edit clicked")}>
              {t("story.contextmenu_edit")}
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log("Copy clicked")}>
              {t("story.contextmenu_copy")}
            </ContextMenuItem>
            <ContextMenuItem onClick={() => console.log("Paste clicked")}>
              {t("story.contextmenu_paste")}
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem
              onClick={() => console.log("Delete clicked")}
              danger
            >
              {t("story.contextmenu_delete")}
            </ContextMenuItem>
          </>
        }
      >
        <div
          style={{
            padding: "60px 100px",
            backgroundColor: "#f0f0f0",
            border: "2px dashed #ccc",
            borderRadius: "8px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          {t("story.contextmenu_right_click")}
        </div>
      </ContextMenu>
    );
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ContextMenu
        {...args}
        menu={
          <>
            <ContextMenuItem>{t("story.contextmenu_edit")}</ContextMenuItem>
            <ContextMenuItem>{t("story.contextmenu_copy")}</ContextMenuItem>
            <ContextMenuItem>{t("story.contextmenu_paste")}</ContextMenuItem>
          </>
        }
      >
        <div
          style={{
            padding: "60px 100px",
            backgroundColor: "#f0f0f0",
            border: "2px dashed #ccc",
            borderRadius: "8px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          {t("story.contextmenu_disabled_menu")}
        </div>
      </ContextMenu>
    );
  },
};

export const WithIcons: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ContextMenu
        {...args}
        menu={
          <>
            <ContextMenuItem
              icon={<Icon name="CheckIcon" size="small" />}
              onClick={() => console.log("Edit clicked")}
            >
              {t("story.contextmenu_edit")}
            </ContextMenuItem>
            <ContextMenuItem
              icon={<Icon name="CopyIcon" size="small" />}
              onClick={() => console.log("Copy clicked")}
            >
              {t("story.contextmenu_copy")}
            </ContextMenuItem>
            <ContextMenuItem
              icon={<Icon name="CheckIcon" size="small" />}
              onClick={() => console.log("Paste clicked")}
            >
              {t("story.contextmenu_paste")}
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem
              icon={<Icon name="CloseIcon" size="small" />}
              onClick={() => console.log("Delete clicked")}
              danger
            >
              {t("story.contextmenu_delete")}
            </ContextMenuItem>
          </>
        }
      >
        <div
          style={{
            padding: "60px 100px",
            backgroundColor: "#e0f2fe",
            border: "2px dashed #0ea5e9",
            borderRadius: "8px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          {t("story.contextmenu_with_icons")}
        </div>
      </ContextMenu>
    );
  },
};

export const WithGroups: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ContextMenu
        {...args}
        menu={
          <>
            <ContextMenuGroup title={t("story.contextmenu_edit_actions")}>
              <ContextMenuItem>{t("story.contextmenu_cut")}</ContextMenuItem>
              <ContextMenuItem>{t("story.contextmenu_copy")}</ContextMenuItem>
              <ContextMenuItem>{t("story.contextmenu_paste")}</ContextMenuItem>
            </ContextMenuGroup>
            <ContextMenuDivider />
            <ContextMenuGroup title={t("story.contextmenu_file_actions")}>
              <ContextMenuItem>{t("story.contextmenu_rename")}</ContextMenuItem>
              <ContextMenuItem>{t("story.contextmenu_move")}</ContextMenuItem>
              <ContextMenuItem danger>
                {t("story.contextmenu_delete")}
              </ContextMenuItem>
            </ContextMenuGroup>
          </>
        }
      >
        <div
          style={{
            padding: "60px 100px",
            backgroundColor: "#fef3c7",
            border: "2px dashed #f59e0b",
            borderRadius: "8px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          {t("story.contextmenu_with_groups")}
        </div>
      </ContextMenu>
    );
  },
};

export const WithDisabledItems: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ContextMenu
        {...args}
        menu={
          <>
            <ContextMenuItem>{t("story.contextmenu_cut")}</ContextMenuItem>
            <ContextMenuItem>{t("story.contextmenu_copy")}</ContextMenuItem>
            <ContextMenuItem disabled>
              {t("story.contextmenu_paste")} (disabled)
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem>{t("story.contextmenu_select_all")}</ContextMenuItem>
          </>
        }
      >
        <div
          style={{
            padding: "60px 100px",
            backgroundColor: "#dcfce7",
            border: "2px dashed #22c55e",
            borderRadius: "8px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          {t("story.contextmenu_disabled")}
        </div>
      </ContextMenu>
    );
  },
};

export const OnImage: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ContextMenu
        {...args}
        menu={
          <>
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>
              {t("story.contextmenu_open_new_tab")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>
              {t("story.contextmenu_copy_image")}
            </ContextMenuItem>
            <ContextMenuItem icon={<Icon name="CopyIcon" size="small" />}>
              {t("story.contextmenu_copy_image_address")}
            </ContextMenuItem>
            <ContextMenuDivider />
            <ContextMenuItem icon={<Icon name="CheckIcon" size="small" />}>
              {t("story.contextmenu_save_image_as")}
            </ContextMenuItem>
          </>
        }
      >
        <div
          style={{
            width: "300px",
            height: "200px",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          {t("story.contextmenu_on_image")}
        </div>
      </ContextMenu>
    );
  },
};
