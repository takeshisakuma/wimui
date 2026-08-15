import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { List, ListItem, Stack, Text } from "wimui";


const meta: Meta<typeof List> = {
  title: "Components/Data Structures/List",
  component: List,
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
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
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <List {...args}>
        <ListItem>{t("story.list_item1")}</ListItem>
        <ListItem>{t("story.list_item2")}</ListItem>
        <ListItem>
          {t("story.list_item3")} {t("story.list_item3_desc")}
        </ListItem>
      </List>
    );
  },
};

export const Ordered: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <List {...args} asChild>
        <ol>
          <ListItem>{t("story.list_step1")}</ListItem>
          <ListItem>{t("story.list_step2")}</ListItem>
          <ListItem>{t("story.list_step3")}</ListItem>
        </ol>
      </List>
    );
  },
};

export const Small: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <List {...args} size="sm">
        <ListItem>
          {t("story.list_item_small")} 1
        </ListItem>
        <ListItem>
          {t("story.list_item_small")} 2
        </ListItem>
      </List>
    );
  },
};

export const Large: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <List {...args} size="lg">
        <ListItem>
          {t("story.list_item_large")} 1
        </ListItem>
        <ListItem>
          {t("story.list_item_large")} 2
        </ListItem>
      </List>
    );
  },
};

export const LooseSpacing: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <List {...args} spacing="loose">
        <ListItem>
          {t("story.list_loose")} 1
        </ListItem>
        <ListItem>
          {t("story.list_loose")} 2
        </ListItem>
      </List>
    );
  },
};

export const WithIcons: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <List {...args}>
        <ListItem iconName="CheckIcon">{t("story.list_task_completed")}</ListItem>
        <ListItem iconName="PdfIcon">{t("story.list_manual_pdf")}</ListItem>
        <ListItem iconName="ImageIcon">{t("story.list_gallery")}</ListItem>
        <ListItem iconName="EmailIcon">{t("story.list_email")}</ListItem>
        <ListItem iconName="PhoneIcon">{t("story.list_phone")}</ListItem>
        <ListItem iconName="ExternalLinkIcon" iconPosition="right">
          {t("story.list_view_details")}
        </ListItem>
      </List>
    );
  },
};

/**
 * bordered の単体 Default はテキスト子だけ。実際の行はタイトル＋メタのブロック。
 * inside マーカーだとブロックが次行へ落ちる（T183）。
 */
export const Bordered: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <List {...args} bordered fullWidth>
        <ListItem>
          <Stack gap="2xs">
            <Text>{t("story.list_found_umbrella")}</Text>
            <Text size="xs" color="text-tertiary">
              {t("story.list_found_umbrella_meta")}
            </Text>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack gap="2xs">
            <Text>{t("story.list_found_bottle")}</Text>
            <Text size="xs" color="text-tertiary">
              {t("story.list_found_bottle_meta")}
            </Text>
          </Stack>
        </ListItem>
      </List>
    );
  },
};
