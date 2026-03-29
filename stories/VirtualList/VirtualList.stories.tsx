import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { VirtualList } from "@/components/VirtualList/VirtualList";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";

const meta: Meta<typeof VirtualList> = {
  title: "Components/Data Structures/VirtualList",
  component: VirtualList,
  argTypes: {
    itemHeight: { control: "number" },
    height: { control: "number" },
    overscan: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof VirtualList>;

const generateItems = (count: number) =>
  Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    label: `Item ${i + 1}`,
  }));

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(1000);
    return (
      <VirtualList
        {...args}
        items={items}
        itemHeight={48}
        height={300}
        renderItem={(item) => (
          <div style={{ padding: "0 16px", width: "100%" }}>
            {t("story_virtuallist_item_label", { id: item.id })}
          </div>
        )}
      />
    );
  },
};

export const LargeDataset: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(10000);
    return (
      <VirtualList
        {...args}
        items={items}
        itemHeight={40}
        height={400}
        renderItem={(item) => (
          <div style={{ padding: "0 16px", width: "100%" }}>
            {t("story_virtuallist_item_label", { id: item.id })}
          </div>
        )}
      />
    );
  },
};

export const WithCustomItemHeight: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(500);
    return (
      <VirtualList
        {...args}
        items={items}
        itemHeight={64}
        height={320}
        renderItem={(item) => (
          <div
            style={{
              padding: "8px 16px",
              width: "100%",
              borderBottom: "1px solid var(--wim-color-border, #e5e7eb)",
            }}
          >
            <div style={{ fontWeight: "bold" }}>
              {t("story_virtuallist_item_label", { id: item.id })}
            </div>
            <div style={{ fontSize: "var(--wim-font-size-sm)", color: "var(--wim-color-text-muted, #6b7280)" }}>
              {t("story_virtuallist_item_sublabel")}
            </div>
          </div>
        )}
      />
    );
  },
};

export const WithOverscan: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const items = generateItems(1000);
    return (
      <VirtualList
        {...args}
        items={items}
        itemHeight={48}
        height={300}
        overscan={10}
        renderItem={(item) => (
          <div style={{ padding: "0 16px", width: "100%" }}>
            {t("story_virtuallist_item_label", { id: item.id })}
          </div>
        )}
      />
    );
  },
};
