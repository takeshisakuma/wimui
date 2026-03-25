import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import {
  CommandPalette,
  CommandPaletteInput,
  CommandPaletteList,
  CommandPaletteGroup,
  CommandPaletteItem,
  CommandPaletteEmpty,
  CommandPaletteFooter,
  CommandPaletteTrigger,
  CommandPaletteContent,
} from "@/components/CommandPalette/CommandPalette";
import { Icon } from "@/components/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof CommandPalette> = {
  title: "Components/Overlays/CommandPalette",
  component: CommandPalette,
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;
type Story = StoryObj<typeof CommandPalette>;

const DefaultTemplate = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [search, setSearch] = useState("");

  const items = [
    {
      id: "1",
      label: t("story_command_new"),
      icon: "CheckIcon",
      group: t("story_command_actions"),
      shortcut: ["⌘", "N"],
    },
    {
      id: "2",
      label: t("story_command_open"),
      icon: "ChevronRightIcon",
      group: t("story_command_actions"),
      shortcut: ["⌘", "O"],
    },
    {
      id: "3",
      label: t("story_command_save"),
      icon: "UploadIcon",
      group: t("story_command_actions"),
      shortcut: ["⌘", "S"],
    },
    {
      id: "4",
      label: t("story_command_settings"),
      icon: "SquareIcon",
      group: t("story_command_settings"),
      shortcut: ["⌘", ","],
    },
    { id: "5", label: t("story_command_profile"), icon: "CircleIcon", group: t("story_command_settings") },
    { id: "6", label: t("story_command_theme_dark"), icon: "EyeOffIcon", group: t("story_command_pref") },
    { id: "7", label: t("story_command_theme_light"), icon: "EyeIcon", group: t("story_command_pref") },
  ];

  const filteredItems = items.filter((item) =>
    item.label.toLowerCase().includes(search.toLowerCase()),
  );

  const groups = Array.from(new Set(filteredItems.map((item) => item.group)));

  return (
    <div style={{ padding: "100px 20px", textAlign: "center" }}>
      <CommandPalette>
        <CommandPaletteTrigger>
          <Icon name="SearchIcon" size="small" />
          <span>{t("story_command_search_commands")}</span>
          <kbd style={{ marginLeft: "12px", fontSize: "0.8em", opacity: 0.6 }}>
            ⌘K
          </kbd>
        </CommandPaletteTrigger>

        <CommandPaletteContent>
          <CommandPaletteInput
            placeholder={t("story_command_type_command")}
            onChange={setSearch}
          />
          <CommandPaletteList>
            <CommandPaletteEmpty />
            {groups.map((group) => (
              <CommandPaletteGroup key={group} heading={group}>
                {filteredItems
                  .filter((item) => item.group === group)
                  .map((item) => (
                    <CommandPaletteItem
                      key={item.id}
                      onSelect={() => console.log(`Selected: ${item.label}`)}
                      shortcut={item.shortcut}
                      icon={<Icon name={item.icon as Parameters<typeof Icon>[0]["name"]} size="small" />}
                    >
                      {item.label}
                    </CommandPaletteItem>
                  ))}
              </CommandPaletteGroup>
            ))}
          </CommandPaletteList>
          <CommandPaletteFooter>
            <div className="wim-command-palette-shortcut-hint">
              <kbd className="wim-kbd wim-kbd--sm">↵</kbd> {t("story_command_to_select")}
            </div>
            <div className="wim-command-palette-shortcut-hint">
              <kbd className="wim-kbd wim-kbd--sm">↑</kbd>
              <kbd className="wim-kbd wim-kbd--sm">↓</kbd> {t("story_command_to_navigate")}
            </div>
            <div className="wim-command-palette-shortcut-hint">
              <kbd className="wim-kbd wim-kbd--sm">esc</kbd> {t("story_command_to_close")}
            </div>
          </CommandPaletteFooter>
        </CommandPaletteContent>
      </CommandPalette>
    </div>
  );
};

export const Default: Story = {
  render: () => <DefaultTemplate />,
};

const ControlledTemplate = () => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [open, setOpen] = useState(false);
  return (
    <div style={{ padding: "100px 20px", textAlign: "center" }}>
      <button
        onClick={() => setOpen(true)}
        style={{
          padding: "10px 20px",
          backgroundColor: "var(--color-primary)",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        {t("story_command_open_controlled")}
      </button>

      <CommandPalette open={open} onOpenChange={setOpen}>
        <CommandPaletteContent>
          <CommandPaletteInput placeholder={t("story_selectbox_placeholder")} />
          <CommandPaletteList>
            <CommandPaletteGroup heading={t("story_command_quick_links")}>
              <CommandPaletteItem
                onSelect={() => {}}
                icon={<Icon name="SearchIcon" size="small" />}
              >
                {t("story_command_search_docs")}
              </CommandPaletteItem>
              <CommandPaletteItem
                onSelect={() => {}}
                icon={<Icon name="CopyIcon" size="small" />}
              >
                {t("story_command_copy_link")}
              </CommandPaletteItem>
              <CommandPaletteItem
                onSelect={() => {}}
                icon={<Icon name="StarIcon" size="small" />}
              >
                {t("story_command_add_favorites")}
              </CommandPaletteItem>
            </CommandPaletteGroup>
          </CommandPaletteList>
        </CommandPaletteContent>
      </CommandPalette>
    </div>
  );
};

export const Controlled: Story = {
  render: () => <ControlledTemplate />,
};
