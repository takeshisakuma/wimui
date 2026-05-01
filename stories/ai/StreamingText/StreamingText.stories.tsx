import React, { useState, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { StreamingText } from "@/components/ai/StreamingText/StreamingText";

const meta: Meta<typeof StreamingText> = {
  title: "Components/AI/StreamingText",
  component: StreamingText,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    isStreaming: { control: "boolean" },
    content: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof StreamingText>;

const markdownSample = `## Summary

React is a **JavaScript library** for building user interfaces.

### Key Features

- Component-based architecture
- Virtual DOM for efficient rendering
- One-way data binding

\`\`\`tsx
const App = () => <h1>Hello, world!</h1>;
\`\`\`

> "Think in components, not in pages."
`;

export const Default: Story = {
  render: (args) => (
    <div style={{ width: 560 }}>
      <StreamingText {...args} />
    </div>
  ),
  args: {
    content: markdownSample,
    isStreaming: false,
  },
};

export const Streaming: Story = {
  render: (args) => {
    const [displayed, setDisplayed] = useState("");
    const full = markdownSample;

    useEffect(() => {
      setDisplayed("");
      let i = 0;
      const timer = setInterval(() => {
        i += 3;
        setDisplayed(full.slice(0, i));
        if (i >= full.length) clearInterval(timer);
      }, 30);
      return () => clearInterval(timer);
    }, [full]);

    const isStreaming = displayed.length < full.length;
    return (
      <div style={{ width: 560 }}>
        <StreamingText {...args} content={displayed} isStreaming={isStreaming} />
      </div>
    );
  },
  args: {},
};

export const WithCursor: Story = {
  render: (args) => (
    <div style={{ width: 560 }}>
      <StreamingText {...args} />
    </div>
  ),
  args: {
    content: "The assistant is thinking",
    isStreaming: true,
  },
};
