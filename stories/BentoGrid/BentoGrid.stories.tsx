import type { Meta, StoryObj } from "@storybook/react-vite";
import { BentoGrid, BentoGridItem } from "@/components/BentoGrid/BentoGrid";
import React from "react";
import { Icon } from "@/components/Icon/Icon";

const meta: Meta<typeof BentoGrid> = {
  title: "Components/Layout/BentoGrid",
  component: BentoGrid,
  tags: [],
};

export default meta;
type Story = StoryObj<typeof meta>;

const Skeleton = () => (
  <div
    style={{
      flex: 1,
      width: "100%",
      height: "100%",
      minHeight: "6rem",
      borderRadius: "0.5rem",
      background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
    }}
  />
);

const items = [
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI into your workflow.",
    header: <Skeleton />,
    className: "wim-bento-grid-item--col-span-2",
    icon: <Icon name="CircleIcon" />,
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time.",
    header: <Skeleton />,
    className: "wim-bento-grid-item--col-span-1",
    icon: <Icon name="SquareIcon" />,
  },
  {
    title: "Advanced Analytics",
    description: "Discover insights with our powerful analytics tools.",
    header: <Skeleton />,
    className: "wim-bento-grid-item--col-span-1",
    icon: <Icon name="ChevronDownIcon" />,
  },
  {
    title: "Cloud Infrastructure",
    description: "Scalable and secure cloud hosting for your apps.",
    header: <Skeleton />,
    className: "wim-bento-grid-item--col-span-2",
    icon: <Icon name="ExternalLinkIcon" />,
  },
];

export const Default: Story = {
  render: () => (
    <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
          icon={item.icon}
        />
      ))}
    </BentoGrid>
  ),
};
