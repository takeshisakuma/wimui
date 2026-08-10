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
  const [items, setItems] = useState([
    { id: 1, text: t("story.pull_initial_item", { n: 1 }), count: 0 },
    { id: 2, text: t("story.pull_initial_item", { n: 2 }), count: 0 },
    { id: 3, text: t("story.pull_initial_item", { n: 3 }), count: 0 },
  ]);

  const handleRefresh = async () => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    setItems((prev) => {
      const nextCount = (prev[0]?.count ?? 0) + 1;
      const newItem = {
        id: Date.now(),
        text: `Refreshed Item`,
        count: nextCount,
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
                    Count: {item.count} | {new Date(item.id).toLocaleTimeString()}
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
