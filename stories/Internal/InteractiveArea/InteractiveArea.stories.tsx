import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { InteractiveArea } from "../../../src/components/layout/InteractiveArea/InteractiveArea";
import { Icon } from "../../../src/components/media/Icon/Icon";
import { Button } from "../../../src/components/form/Button/Button";
import { ContextMenu, ContextMenuItem } from "../../../src/components/overlay/ContextMenu/ContextMenu";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";


const meta: Meta<typeof InteractiveArea> = {
  title: "Components/Internal/InteractiveArea",
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
            <Button label={t("upload")} variant="filled" />
            <Button label={t("learn.more")} variant="outlined" />
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
  },
};

export const WithContextMenu: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <ContextMenu
        menu={
          <>
            <ContextMenuItem icon={<Icon name="EditIcon" />}>{t("a11y.edit") || "Edit"}</ContextMenuItem>
            <ContextMenuItem icon={<Icon name="TrashIcon" />} danger>{t("a11y.delete") || "Delete"}</ContextMenuItem>
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
