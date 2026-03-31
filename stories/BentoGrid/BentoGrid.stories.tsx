import type { Meta, StoryObj } from "@storybook/react-vite";
import { BentoGrid, BentoGridItem } from "@/components/layout/BentoGrid/BentoGrid";
import React from "react";
import { Icon } from "@/components/media/Icon/Icon";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";


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
      background: "var(--wim-color-surface-variant)",
    }}
  />
);

export const Default: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const items = [
      {
        title: t("story.bento_ai_title", "AI Integration"),
        description: t("story.bento_ai_desc", "Seamlessly integrate AI into your workflow."),
        header: <Skeleton />,
        className: "wim-bento-grid-item--col-span-2",
        icon: <Icon name="CircleIcon" />,
      },
      {
        title: t("story.bento_collab_title", "Real-time Collaboration"),
        description: t("story.bento_collab_desc", "Work together with your team in real-time."),
        header: <Skeleton />,
        className: "wim-bento-grid-item--col-span-1",
        icon: <Icon name="SquareIcon" />,
      },
      {
        title: t("story.bento_analytics_title", "Advanced Analytics"),
        description: t("story.bento_analytics_desc", "Discover insights with our powerful analytics tools."),
        header: <Skeleton />,
        className: "wim-bento-grid-item--col-span-1",
        icon: <Icon name="ChevronDownIcon" />,
      },
      {
        title: t("story.bento_cloud_title", "Cloud Infrastructure"),
        description: t("story.bento_cloud_desc", "Scalable and secure cloud hosting for your apps."),
        header: <Skeleton />,
        className: "wim-bento-grid-item--col-span-2",
        icon: <Icon name="ExternalLinkIcon" />,
      },
    ];
    return (
      <BentoGrid {...args}>
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
    );
  },
};
