import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Button, ContextMenu, ContextMenuItem, Icon, InteractiveArea } from "wimui";


const meta: Meta<typeof InteractiveArea> = {
  title: "Components/Layout/InteractiveArea",
  component: InteractiveArea,
};

export default meta;
type Story = StoryObj<typeof InteractiveArea>;

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InteractiveArea 
        {...args} 
        title={t("doc.ia_empty_title")} 
        description={t("doc.ia_empty_desc")} 
      />
    );
  },
  args: {
    icon: <Icon name="DocumentIcon" />,
    variant: "dashed",
  },
};

export const Clickable: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InteractiveArea 
        {...args} 
        title={t("doc.ia_empty_title")} 
        description={t("doc.ia_clickable_desc")} 
      />
    );
  },
  args: {
    ...Default.args,
    isClickable: true,
  },
};

export const WithActions: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InteractiveArea 
        {...args} 
        title={t("doc.ia_empty_title")} 
        description={t("doc.ia_empty_desc")} 
        actions={
          <>
            <Button variant="solid">{t("upload")}</Button>
            <Button variant="outline">{t("learn.more")}</Button>
          </>
        }
      />
    );
  },
  args: {
    ...Default.args,
  },
};

export const Large: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InteractiveArea 
        {...args} 
        title={t("doc.ia_empty_title")} 
        description={t("doc.ia_empty_desc")} 
      />
    );
  },
  args: {
    ...Default.args,
    size: "lg",
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <InteractiveArea 
        {...args} 
        title={t("doc.ia_empty_title")} 
        description={t("doc.ia_compact_desc")} 
      />
    );
  },
  args: {
    ...Default.args,
    size: "sm",
    icon: <Icon name="DocumentIcon" />,
  },
};

export const WithContextMenu: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ContextMenu
        menu={
          <>
            <ContextMenuItem icon={<Icon name="EditIcon" size="xl" />}>{t("a11y.edit") || "Edit"}</ContextMenuItem>
            <ContextMenuItem icon={<Icon name="TrashIcon" size="xl" />} danger>{t("a11y.delete") || "Delete"}</ContextMenuItem>
          </>
        }
      >
        <InteractiveArea 
          {...args} 
          title={t("doc.ia_context_title")} 
          description={t("doc.ia_context_desc")} 
        />
      </ContextMenu>
    );
  },
  args: {
    variant: "solid",
    bgVariant: "muted",
  },
};
