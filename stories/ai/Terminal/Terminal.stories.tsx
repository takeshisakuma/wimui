import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";
import { Terminal, type TerminalLine } from "@/components/ai/Terminal/Terminal";

const buildLines: TerminalLine[] = [
  { id: "1", type: "input", content: "npm run build" },
  { id: "2", type: "output", content: "> wimui@1.0.0 build" },
  { id: "3", type: "output", content: "> vite build" },
  { id: "4", type: "output", content: "" },
  { id: "5", type: "output", content: "\x1b[32m✓\x1b[0m 42 modules transformed." },
  { id: "6", type: "output", content: "\x1b[32m✓\x1b[0m built in 1.23s" },
];

const errorLines: TerminalLine[] = [
  { id: "1", type: "input", content: "node server.js" },
  { id: "2", type: "output", content: "Starting server on port 3000..." },
  { id: "3", type: "error", content: "Error: EADDRINUSE: address already in use :::3000" },
  { id: "4", type: "info", content: "Tip: run `lsof -i :3000` to find the conflicting process" },
];

const agentLines: TerminalLine[] = [
  { id: "1", type: "input", content: "cat src/App.tsx" },
  { id: "2", type: "output", content: "import React from 'react';" },
  { id: "3", type: "output", content: "export default function App() {" },
  { id: "4", type: "output", content: "  return <div>Hello</div>;" },
  { id: "5", type: "output", content: "}" },
  { id: "6", type: "input", content: "npm test" },
  { id: "7", type: "output", content: "\x1b[33mRUNNING\x1b[0m App.test.tsx" },
  { id: "8", type: "output", content: "\x1b[32mPASS\x1b[0m  3 tests completed" },
];

const meta: Meta<typeof Terminal> = {
  title: "Components/AI/Terminal",
  component: Terminal,
  parameters: {
    layout: "padded",
  },
  args: {
    lines: buildLines,
    title: "zsh",
    height: 280,
  },
};

export default meta;
type Story = StoryObj<typeof Terminal>;

export const Default: Story = {};

export const WithError: Story = {
  args: {
    lines: errorLines,
    title: "node",
    height: 200,
  },
};

export const AgentSession: Story = {
  args: {
    lines: agentLines,
    title: "agent — bash",
    height: 320,
    onClear: fn(),
  },
};

export const GrowWithContent: Story = {
  args: {
    height: undefined,
    lines: buildLines,
  },
};
