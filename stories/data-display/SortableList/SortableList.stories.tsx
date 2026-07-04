import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { SortableList } from "@/components/data-display/SortableList/SortableList";
import { Box } from "@/components/layout/Box/Box";
import { Text } from "@/components/typography/Text/Text";

const meta: Meta<typeof SortableList> = {
  title: "Components/Data Structures/SortableList",
  component: SortableList,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    asChild: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof SortableList>;

const InteractiveDemo = (args: React.ComponentProps<typeof SortableList>) => {
  const { t } = useTranslation(ALL_NAMESPACES);
  const [items, setItems] = useState([
    { id: "1", label: t("story.sortable_step_1") },
    { id: "2", label: t("story.sortable_step_2") },
    { id: "3", label: t("story.sortable_step_3") },
    { id: "4", label: t("story.sortable_step_4") },
    { id: "5", label: t("story.sortable_step_5") },
  ]);

  const handleSortEnd = (oldIndex: number, newIndex: number) => {
    const newItems = [...items];
    const [movedItem] = newItems.splice(oldIndex, 1);
    newItems.splice(newIndex, 0, movedItem);
    setItems(newItems);
  };

  return (
    <Box style={{ width: 400 }}>
      <SortableList {...args} onSortEnd={handleSortEnd}>
        {items.map((item, index) => (
          <SortableList.Item key={item.id} index={index}>
            <SortableList.DragHandle />
            <Text>{item.label}</Text>
          </SortableList.Item>
        ))}
      </SortableList>
    </Box>
  );
};

export const Default: Story = {
  render: (args) => <InteractiveDemo {...args} />,
};

export const Disabled: Story = {
  render: (args) => <InteractiveDemo {...args} />,
  args: {
    disabled: true,
  },
};
