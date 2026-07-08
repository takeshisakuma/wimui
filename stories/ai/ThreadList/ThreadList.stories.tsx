import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ThreadList, Thread } from "@/components/ai/ThreadList/ThreadList";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";

const meta: Meta<typeof ThreadList> = {
  title: "Components/AI/ThreadList",
  component: ThreadList,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof ThreadList>;

const useThreads = (): Thread[] => {
  const { t } = useTranslation(ALL_NAMESPACES);
  return [
    { id: "1", title: t("story.threadlist_t1_title"), preview: t("story.threadlist_t1_preview"), timestamp: "2m" },
    { id: "2", title: t("story.threadlist_t2_title"), preview: t("story.threadlist_t2_preview"), timestamp: "1h", unread: true },
    { id: "3", title: t("story.threadlist_t3_title"), preview: t("story.threadlist_t3_preview"), timestamp: "3h" },
    { id: "4", title: t("story.threadlist_t4_title"), preview: t("story.threadlist_t4_preview"), timestamp: "1d" },
  ];
};

const Frame = ({ children }: { children: React.ReactNode }) => (
  <div style={{ width: "300px", border: "1px solid var(--wim-color-border)", borderRadius: "8px" }}>
    {children}
  </div>
);

export const Default: Story = {
  render: () => {
    const threads = useThreads();
    const [active, setActive] = useState("1");
    return (
      <Frame>
        <ThreadList threads={threads} activeId={active} onSelect={setActive} />
      </Frame>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const initial = useThreads();
    const [threads, setThreads] = useState(initial);
    const [active, setActive] = useState("1");
    return (
      <Frame>
        <ThreadList
          threads={threads}
          activeId={active}
          onSelect={setActive}
          onNewThread={() => undefined}
          onDelete={(id) => setThreads((prev) => prev.filter((tItem) => tItem.id !== id))}
        />
      </Frame>
    );
  },
};

export const Empty: Story = {
  render: () => (
    <Frame>
      <ThreadList threads={[]} onNewThread={() => undefined} />
    </Frame>
  ),
};
