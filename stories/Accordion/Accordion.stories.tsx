import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "@/components/Accordion/Accordion";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


const meta: Meta<typeof Accordion> = {
  title: "Components/Data Containers/Accordion",
  component: Accordion,
  tags: [],
  argTypes: {
    type: {
      control: "select",
      options: ["single", "multiple"],
    },
    collapsible: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Single: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Accordion {...args} defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>{t("story_accordion_trigger_1")}</Accordion.Trigger>
          <Accordion.Content>
            {t("story_accordion_content_1")}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>{t("story_accordion_trigger_2")}</Accordion.Trigger>
          <Accordion.Content>
            {t("story_accordion_content_2")}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>{t("story_accordion_trigger_3")}</Accordion.Trigger>
          <Accordion.Content>
            {t("story_accordion_content_3")}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  },
  args: {
    type: "single",
    collapsible: true,
  },
};

export const Multiple: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Accordion {...args}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>{t("story_accordion_trigger_1")}</Accordion.Trigger>
          <Accordion.Content>
            {t("story_accordion_content_multiple_1")}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>{t("story_accordion_trigger_2")}</Accordion.Trigger>
          <Accordion.Content>{t("story_accordion_content_multiple_2")}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>{t("story_accordion_trigger_3")}</Accordion.Trigger>
          <Accordion.Content>{t("story_accordion_content_multiple_3")}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  },
  args: {
    type: "multiple",
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Accordion {...args}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>{t("story_accordion_trigger_enabled")}</Accordion.Trigger>
          <Accordion.Content>{t("story_accordion_content_enabled")}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" disabled>
          <Accordion.Trigger>{t("story_accordion_trigger_disabled")}</Accordion.Trigger>
          <Accordion.Content>{t("story_accordion_content_disabled")}</Accordion.Content>
        </Accordion.Item>
      </Accordion>
    );
  },
};
