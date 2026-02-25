import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmptyState } from "@/components/EmptyState/EmptyState";
import { Icon } from "@/components/Icon/Icon";
import { Button } from "@/components/Button/Button";

const meta: Meta<typeof EmptyState> = {
  title: "Components/Data Indicators/EmptyState",
  component: EmptyState,
  tags: [],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No data found",
    description:
      "We couldn't find any data matching your search. Please try again with different keywords.",
    icon: <Icon name="SearchIcon" size="large" />,
    action: <Button label="Clear search" />,
  },
};

export const Simple: Story = {
  args: {
    title: "No messages yet",
    description: "When you receive messages, they will appear here.",
    variant: "simple",
  },
};

export const WithoutDescription: Story = {
  args: {
    title: "List is empty",
    icon: <Icon name="CircleIcon" size="large" />,
  },
};

export const CustomAction: Story = {
  args: {
    title: "Ready to start?",
    description: "Create your first project to begin tracking your progress.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="48"
        height="48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
    action: (
      <>
        <Button label="Browse templates" priority="secondary" />
        <Button label="Create project" priority="primary" />
      </>
    ),
  },
};

export const NoMessages: Story = {
  args: {
    title: "メールがありません",
    description:
      "受信トレイは空です。新しいメッセージが届くとここに表示されます。",
    icon: <Icon name="EmailIcon" size="large" />,
  },
};

export const NoVideos: Story = {
  args: {
    title: "動画が見つかりません",
    description:
      "アップロードされた動画がまだありません。最初の動画を追加しましょう。",
    icon: <Icon name="VideoIcon" size="large" />,
    action: <Button label="動画をアップロード" priority="primary" />,
  },
};

export const NoFiles: Story = {
  args: {
    title: "ファイルがありません",
    description: "このフォルダにはドキュメントが含まれていません。",
    icon: <Icon name="DocumentIcon" size="large" />,
  },
};
