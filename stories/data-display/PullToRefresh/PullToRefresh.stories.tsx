import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { PullToRefresh } from "@/components/data-display/PullToRefresh/PullToRefresh";
import { List, ListItem } from "@/components/data-display/List/List";
import { Stack } from "@/components/layout/Stack/Stack";
import { Text } from "@/components/typography/Text/Text";

const meta: Meta<typeof PullToRefresh> = {
  title: "Components/Utilities/PullToRefresh",
  component: PullToRefresh,
};

export default meta;
type Story = StoryObj<typeof PullToRefresh>;

const PullToRefreshWrapper = (args: { onRefresh: () => Promise<void> | void }) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  // 初期の 3 行は**配達側が持っている履歴**なので、メタは行ごとの実文にする。
  // 以前は `new Date(item.id)` を出しており、id が 1 / 2 / 3（= 1970-01-01）なので
  // 3 行とも「0:00:00」が並んでいた。引っ張って更新した行だけが「今」を持つ。
  const [items, setItems] = useState([
    { id: 1, text: t("story.pull_item_slip"), meta: t("story.pull_meta_slip") },
    { id: 2, text: t("story.pull_item_locker"), meta: t("story.pull_meta_locker") },
    { id: 3, text: t("story.pull_item_pickup"), meta: t("story.pull_meta_pickup") },
  ]);

  const handleRefresh = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setItems((prev) => {
      const newItem = {
        id: Date.now(),
        text: t("story.pull_refreshed"),
        meta: t("story.pull_meta_now", {
          time: new Date().toLocaleTimeString(),
        }),
      };
      return [newItem, ...prev].slice(0, 10);
    });
  };

  return (
    <div style={{ height: "400px", border: "1px solid var(--wim-color-border)", overflow: "auto" }}>
      <PullToRefresh {...args} onRefresh={handleRefresh}>
        <div style={{ padding: "16px", background: "var(--wim-color-surface)", minHeight: "100%" }}>
          <List>
            {items.map((item) => (
              <ListItem key={item.id}>
                <Stack gap="xs">
                  <Text weight="bold">{item.text}</Text>
                  <Text size="sm" color="text-tertiary">
                    {item.meta}
                  </Text>
                </Stack>
              </ListItem>
            ))}
          </List>
        </div>
      </PullToRefresh>
    </div>
  );
};

export const Default: Story = {
  render: (args) => <PullToRefreshWrapper {...args} />,
};

export const CustomThreshold: Story = {
  args: {
    threshold: 100,
    maxDistance: 200,
  },
  render: (args) => <PullToRefreshWrapper {...args} />,
};
