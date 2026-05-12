import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { KeyboardShortcuts } from "@/components/navigation/KeyboardShortcuts/KeyboardShortcuts";

const meta: Meta<typeof KeyboardShortcuts> = {
  title: "Components/Navigation Utilities/KeyboardShortcuts",
  component: KeyboardShortcuts,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    separator: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof KeyboardShortcuts>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <KeyboardShortcuts
        {...args}
        size="md"
        shortcuts={[
          { label: t("story.ks_open_cmd_palette"), keys: ["Ctrl", "K"] },
          { label: t("story.ks_save"), keys: ["Ctrl", "S"] },
          { label: t("story.ks_undo"), keys: ["Ctrl", "Z"] },
          { label: t("story.ks_redo"), keys: ["Ctrl", "Shift", "Z"] },
          { label: t("story.ks_find"), keys: ["Ctrl", "F"] },
        ]}
      />
    );
  },
};

export const WithTitle: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <KeyboardShortcuts
        {...args}
        size="md"
        title={t("story.ks_general")}
        shortcuts={[
          { label: t("story.ks_open_cmd_palette"), keys: ["Ctrl", "K"] },
          { label: t("story.ks_save"), keys: ["Ctrl", "S"] },
          { label: t("story.ks_undo"), keys: ["Ctrl", "Z"] },
          { label: t("story.ks_redo"), keys: ["Ctrl", "Shift", "Z"] },
          { label: t("story.ks_find"), keys: ["Ctrl", "F"] },
        ]}
      />
    );
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <KeyboardShortcuts
        {...args}
        size="sm"
        shortcuts={[
          { label: t("story.ks_open_cmd_palette"), keys: ["Ctrl", "K"] },
          { label: t("story.ks_save"), keys: ["Ctrl", "S"] },
          { label: t("story.ks_undo"), keys: ["Ctrl", "Z"] },
          { label: t("story.ks_redo"), keys: ["Ctrl", "Shift", "Z"] },
          { label: t("story.ks_find"), keys: ["Ctrl", "F"] },
        ]}
      />
    );
  },
};

export const Large: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <KeyboardShortcuts
        {...args}
        size="lg"
        shortcuts={[
          { label: t("story.ks_open_cmd_palette"), keys: ["Ctrl", "K"] },
          { label: t("story.ks_save"), keys: ["Ctrl", "S"] },
          { label: t("story.ks_undo"), keys: ["Ctrl", "Z"] },
          { label: t("story.ks_redo"), keys: ["Ctrl", "Shift", "Z"] },
          { label: t("story.ks_find"), keys: ["Ctrl", "F"] },
        ]}
      />
    );
  },
};

export const MacStyle: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <KeyboardShortcuts
        {...args}
        size="md"
        title={t("story.ks_editing")}
        shortcuts={[
          { label: t("story.ks_open_cmd_palette"), keys: ["⌘", "K"] },
          { label: t("story.ks_save"), keys: ["⌘", "S"] },
          { label: t("story.ks_undo"), keys: ["⌘", "Z"] },
          { label: t("story.ks_redo"), keys: ["⌘", "⇧", "Z"] },
          { label: t("story.ks_select_all"), keys: ["⌘", "A"] },
        ]}
      />
    );
  },
};
