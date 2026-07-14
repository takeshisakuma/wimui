import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { Toolbar } from "@/components/layout/Toolbar/Toolbar";
import { IconButton } from "@/components/form/IconButton/IconButton";
import { Button } from "@/components/form/Button/Button";
import { ToggleGroup } from "@/components/form/ToggleGroup/ToggleGroup";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof Toolbar> = {
  title: "Components/Layout/Toolbar",
  component: Toolbar,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
    size: { control: "radio", options: ["sm", "md", "lg"] },
    orientation: { control: "radio", options: ["horizontal", "vertical"] },
  },
  args: {
    size: "md",
    orientation: "horizontal",
  },
};

export default meta;
type Story = StoryObj<typeof Toolbar>;

export const Default: Story = {
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toolbar {...args} aria-label={t("story.toolbar_formatting")}>
        <Toolbar.Group aria-label={t("story.toolbar_text_style")}>
          <IconButton
            iconName="EditIcon"
            aria-label={t("story.dropdown_edit")}
            variant="ghost"
            size="sm"
          />
          <IconButton
            iconName="CopyIcon"
            aria-label={t("story.toolbar_copy")}
            variant="ghost"
            size="sm"
          />
          <IconButton
            iconName="TrashIcon"
            aria-label={t("story.dropdown_delete")}
            variant="ghost"
            size="sm"
          />
        </Toolbar.Group>
        <Toolbar.Separator />
        <Toolbar.Group aria-label={t("story.toolbar_view")}>
          <ToggleGroup
            size="sm"
            selectionMode="single"
            aria-label={t("story.toolbar_view_mode")}
            options={[
              { value: "list", iconName: "AlignJustifyIcon", label: t("story.toolbar_list") },
              { value: "grid", iconName: "ColumnsIcon", label: t("story.toolbar_columns") },
              { value: "focus", iconName: "MaximizeIcon", label: t("story.toolbar_focus") },
            ]}
            defaultValue="list"
          />
        </Toolbar.Group>
        <Toolbar.Separator />
        <Toolbar.Group>
          <Button size="sm" variant="ghost">
            {t("story.toolbar_clear")}
          </Button>
        </Toolbar.Group>
      </Toolbar>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "var(--wim-spacing-md)" }}>
        {(["sm", "md", "lg"] as const).map((size) => (
          <Toolbar key={size} size={size} aria-label={t("story.toolbar_size", { size })}>
            <IconButton
              iconName="EditIcon"
              aria-label={t("story.dropdown_edit")}
              variant="ghost"
              size="sm"
            />
            <IconButton
              iconName="CopyIcon"
              aria-label={t("story.toolbar_copy")}
              variant="ghost"
              size="sm"
            />
            <Toolbar.Separator />
            <Button size="sm" variant="ghost">
              {size}
            </Button>
          </Toolbar>
        ))}
      </div>
    );
  },
};

export const Vertical: Story = {
  args: {
    orientation: "vertical",
  },
  render: (args) => {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Toolbar {...args} aria-label={t("story.toolbar_sidebar_actions")}>
        <IconButton
          iconName="EditIcon"
          aria-label={t("story.dropdown_edit")}
          variant="ghost"
          size="sm"
        />
        <IconButton
          iconName="CopyIcon"
          aria-label={t("story.toolbar_copy")}
          variant="ghost"
          size="sm"
        />
        <Toolbar.Separator />
        <IconButton
          iconName="ExternalLinkIcon"
          aria-label={t("story.toolbar_open")}
          variant="ghost"
          size="sm"
        />
      </Toolbar>
    );
  },
};
