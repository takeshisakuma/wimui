import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { CodeDiffViewer } from "@/components/ai/CodeDiffViewer/CodeDiffViewer";

const beforeCode = `function greet(name) {
  console.log("Hello, " + name);
  return name;
}`;

const afterCode = `function greet(name: string): string {
  console.log(\`Hello, \${name}!\`);
  return name.trim();
}`;

const meta: Meta<typeof CodeDiffViewer> = {
  title: "Components/AI/CodeDiffViewer",
  component: CodeDiffViewer,
  parameters: {
    layout: "padded",
  },
  args: {
    before: beforeCode,
    after: afterCode,
    language: "ts",
  },
};

export default meta;
type Story = StoryObj<typeof CodeDiffViewer>;

export const Default: Story = {};

export const WithFilename: Story = {
  args: {
    filename: "greet.ts",
  },
};

export const WithActions: Story = {
  args: {
    filename: "greet.ts",
    onApply: fn(),
    onReject: fn(),
  },
};

export const UnifiedView: Story = {
  args: {
    filename: "greet.ts",
    view: "unified",
    onApply: fn(),
    onReject: fn(),
  },
};

export const LargeDiff: Story = {
  args: {
    filename: "utils.ts",
    onApply: fn(),
    onReject: fn(),
    before: `import { useState } from "react";

export function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);
  const increment = () => setCount(c => c + 1);
  const decrement = () => setCount(c => c - 1);
  return { count, increment, decrement };
}

export function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}`,
    after: `import { useState, useCallback } from "react";

export function useCounter(initial = 0, step = 1) {
  const [count, setCount] = useState(initial);
  const increment = useCallback(() => setCount(c => c + step), [step]);
  const decrement = useCallback(() => setCount(c => c - step), [step]);
  const reset = useCallback(() => setCount(initial), [initial]);
  return { count, increment, decrement, reset };
}

export function clamp(value: number, min: number, max: number): number {
  if (min > max) throw new RangeError("min must be <= max");
  return Math.min(Math.max(value, min), max);
}`,
  },
};
export const Applying: Story = {
  args: {
    filename: "greet.ts",
    onApply: fn(),
    onReject: fn(),
    isApplying: true,
  },
};

export const Applied: Story = {
  args: {
    filename: "greet.ts",
    onApply: fn(),
    onReject: fn(),
    isApplied: true,
  },
};
