import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { ThumbUpIcon, ThumbDownIcon, StarIcon, CheckCircleIcon } from "@/icon";
import { Reaction, ReactionItem } from "@/components/data-display/Reaction/Reaction";

const meta: Meta<typeof Reaction> = {
  title: "Components/Data Indicators/Reaction",
  component: Reaction,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: { control: "radio", options: ["sm", "md", "lg"] },
    disabled: { control: "boolean" },
    showAddButton: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Reaction>;

function useReactions(): ReactionItem[] {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { id: "thumbs-up", icon: <ThumbUpIcon />, label: t("story.reaction_thumbs_up"), count: 12, active: false },
    { id: "star", icon: <StarIcon />, label: t("story.reaction_star"), count: 5, active: true },
    { id: "check", icon: <CheckCircleIcon />, label: t("story.reaction_check"), count: 3, active: false },
    { id: "thumbs-down", icon: <ThumbDownIcon />, label: t("story.reaction_thumbs_down"), count: 1, active: false },
  ];
}

export const Default: Story = {
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="md" />;
  },
};

export const WithAddButton: Story = {
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} showAddButton size="md" />;
  },
};

export const Small: Story = {
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="sm" />;
  },
};

export const Large: Story = {
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="lg" />;
  },
};

export const Disabled: Story = {
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} disabled />;
  },
};

export const Interactive: Story = {
  render: function Render() {
    const initial = useReactions();
    const [reactions, setReactions] = useState<ReactionItem[]>(initial);
    const handleReact = (id: string, active: boolean) => {
      setReactions((prev) =>
        prev.map((r) =>
          r.id === id
            ? { ...r, active, count: active ? r.count + 1 : r.count - 1 }
            : r,
        ),
      );
    };
    return (
      <Reaction
        reactions={reactions}
        onReact={handleReact}
        showAddButton
      />
    );
  },
};
