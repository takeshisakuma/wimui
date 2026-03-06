import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { List, ListItem } from "@/components/List/List";
import { useTranslation } from "react-i18next";

const meta: Meta<typeof List> = {
  title: "Components/Data Structures/List",
  component: List,
  argTypes: {
    as: {
      control: "select",
      options: ["ul", "ol"],
    },
    size: {
      control: "select",
      options: ["small", "medium", "large"],
    },
    spacing: {
      control: "select",
      options: ["tight", "normal", "loose"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

export const Unordered: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <List {...args} as="ul">
        <ListItem>{t("story_list_item1")}</ListItem>
        <ListItem>{t("story_list_item2")}</ListItem>
        <ListItem>
          {t("story_list_item3")} {t("story_list_item3_desc")}
        </ListItem>
      </List>
    );
  },
};

export const Ordered: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <List {...args} as="ol">
        <ListItem>{t("story_list_step1")}</ListItem>
        <ListItem>{t("story_list_step2")}</ListItem>
        <ListItem>{t("story_list_step3")}</ListItem>
      </List>
    );
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <List {...args} size="small">
        <ListItem>
          {t("story_list_item_small")} 1
        </ListItem>
        <ListItem>
          {t("story_list_item_small")} 2
        </ListItem>
      </List>
    );
  },
};

export const Large: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <List {...args} size="large">
        <ListItem>
          {t("story_list_item_large")} 1
        </ListItem>
        <ListItem>
          {t("story_list_item_large")} 2
        </ListItem>
      </List>
    );
  },
};

export const LooseSpacing: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <List {...args} spacing="loose">
        <ListItem>
          {t("story_list_loose")} 1
        </ListItem>
        <ListItem>
          {t("story_list_loose")} 2
        </ListItem>
      </List>
    );
  },
};

export const WithIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation();
    return (
      <List {...args}>
        <ListItem iconName="CheckIcon">{t("story_list_task_completed")}</ListItem>
        <ListItem iconName="PdfIcon">{t("story_list_manual_pdf")}</ListItem>
        <ListItem iconName="ImageIcon">{t("story_list_gallery")}</ListItem>
        <ListItem iconName="EmailIcon">{t("story_list_email")}</ListItem>
        <ListItem iconName="PhoneIcon">{t("story_list_phone")}</ListItem>
        <ListItem iconName="ExternalLinkIcon" iconPosition="right">
          {t("story_list_view_details")}
        </ListItem>
      </List>
    );
  },
};
