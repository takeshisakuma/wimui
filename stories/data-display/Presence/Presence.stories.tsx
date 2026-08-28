import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import React from "react";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Avatar, Presence, Stack, Text } from "wimui";
import type { PresenceProps } from "wimui";

const meta: Meta<typeof Presence> = {
  title: "Components/Data Indicators/Presence",
  component: Presence,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    status: {
      control: "radio",
      options: ["online", "away", "busy", "offline"],
    },
    size: {
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    position: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left"],
    },
    showLabel: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Presence>;

export const Default: Story = {
  args: {
    status: "online",
    showLabel: true,
  },
};

export const OnAvatar: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    return (
      <Presence {...args}>
        <Avatar initials="AF" alt={t("story.presence_name_1")} />
      </Presence>
    );
  },
  args: {
    status: "online",
  },
};

export const Statuses: Story = {
  render: (args: PresenceProps) => (
    <Stack direction="row" gap="lg" align="center">
      <Presence {...args} status="online" showLabel />
      <Presence {...args} status="away" showLabel />
      <Presence {...args} status="busy" showLabel />
      <Presence {...args} status="offline" showLabel />
    </Stack>
  ),
};

export const Sizes: Story = {
  render: (args: PresenceProps) => (
    <Stack direction="row" gap="lg" align="center">
      <Presence {...args} status="online" size="sm">
        <Avatar initials="AF" size="sm" intent="neutral" />
      </Presence>
      <Presence {...args} status="online" size="md">
        <Avatar initials="TB" size="md" intent="neutral" />
      </Presence>
      <Presence {...args} status="online" size="lg">
        <Avatar initials="NO" size="lg" intent="neutral" />
      </Presence>
    </Stack>
  ),
};

/**
 * 共同編集中のドキュメントの参加者一覧。**在席は名前の隣ではなくアバターの角**に付き、
 * 説明文の側は「いま何をしているか」を持つ。オフラインの行だけ最終アクセスに変わり、
 * 長い名前は 1 行に収まらない ── 揃っていない行が混ざるのが実際の一覧。
 */
export const Realistic: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);
    const people = [
      { initials: "AF", name: t("story.presence_name_1"), status: "online" as const, note: t("story.presence_role_editing") },
      { initials: "NO", name: t("story.presence_name_3"), status: "busy" as const, note: t("story.presence_role_comment") },
      { initials: "TB", name: t("story.presence_name_2"), status: "away" as const, note: t("story.presence_role_viewing") },
      { initials: "KV", name: t("story.presence_name_4"), status: "offline" as const, note: t("story.presence_last_seen") },
    ];

    return (
      <Stack gap="md" w="18rem">
        <Text size="sm" color="text-secondary">
          {t("story.presence_panel_title")}
        </Text>
        <Stack gap="sm">
          {people.map((person) => (
            <Stack key={person.initials} direction="row" gap="sm" align="center">
              <Presence status={person.status}>
                <Avatar initials={person.initials} size="sm" intent="neutral" />
              </Presence>
              <Stack gap="3xs">
                <Text size="sm" truncate>
                  {person.name}
                </Text>
                <Text size="xs" color="text-secondary">
                  {person.note}
                </Text>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Stack>
    );
  },
};
