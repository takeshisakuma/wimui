import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { JsonDiffViewer } from "@/components/data-display/JsonDiffViewer/JsonDiffViewer";

const before = {
  id: "user_123",
  name: "Alice",
  age: 30,
  role: "member",
  preferences: {
    theme: "light",
    notifications: true,
  },
};

const after = {
  id: "user_123",
  name: "Alice",
  age: 31,
  role: "admin",
  preferences: {
    theme: "dark",
    notifications: true,
    language: "ja",
  },
};

const meta: Meta<typeof JsonDiffViewer> = {
  title: "Components/Data Indicators/JsonDiffViewer",
  component: JsonDiffViewer,
  parameters: {
    layout: "padded",
  },
  args: {
    before,
    after,
  },
};

export default meta;
type Story = StoryObj<typeof JsonDiffViewer>;

export const Default: Story = {};

export const WithActions: Story = {
  args: {
    onApply: fn(),
    onReject: fn(),
  },
};

export const UnifiedView: Story = {
  args: {
    view: "unified",
    onApply: fn(),
    onReject: fn(),
  },
};

export const NullToObject: Story = {
  args: {
    before: null,
    after: { status: "active", createdAt: "2026-01-01" },
    onApply: fn(),
  },
};

export const ArrayDiff: Story = {
  args: {
    before: { tags: ["react", "typescript"], count: 2 },
    after: { tags: ["react", "typescript", "vite"], count: 3 },
    onApply: fn(),
    onReject: fn(),
  },
};
