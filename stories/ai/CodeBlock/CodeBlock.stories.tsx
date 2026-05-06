import type { Meta, StoryObj } from "@storybook/react-vite";
import { CodeBlock } from "@/components/ai/CodeBlock/CodeBlock";

const meta: Meta<typeof CodeBlock> = {
  title: "Components/AI/CodeBlock",
  component: CodeBlock,
  parameters: { layout: "padded" },
  argTypes: {
    language: { control: "text" },
    filename: { control: "text" },
    showCopy: { control: "boolean" },
    showLineNumbers: { control: "boolean" },
    maxLines: { control: "number" },
  },
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const tsxCode = `import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button = ({ label, onClick, disabled = false }: ButtonProps) => (
  <button
    className="btn"
    onClick={onClick}
    disabled={disabled}
  >
    {label}
  </button>
);`;

const bashCode = `# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build`;

const jsonCode = `{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "react": "^18.0.0",
    "react-dom": "^18.0.0"
  }
}`;

export const Default: Story = {
  args: {
    code: tsxCode,
    language: "tsx",
    showCopy: true,
    showLineNumbers: false,
  },
};

export const WithLineNumbers: Story = {
  args: {
    code: tsxCode,
    language: "tsx",
    showLineNumbers: true,
    showCopy: true,
  },
};

export const WithFilename: Story = {
  args: {
    code: tsxCode,
    filename: "Button.tsx",
    showLineNumbers: true,
    showCopy: true,
  },
};

export const Collapsible: Story = {
  args: {
    code: tsxCode,
    language: "tsx",
    showCopy: true,
    maxLines: 5,
  },
};

export const Bash: Story = {
  args: {
    code: bashCode,
    language: "bash",
    showCopy: true,
  },
};

export const JSON: Story = {
  args: {
    code: jsonCode,
    language: "json",
    showCopy: true,
    showLineNumbers: true,
  },
};

export const CustomMaxLines: Story = {
  args: {
    code: tsxCode,
    language: "tsx",
    showCopy: true,
    maxLines: 10,
  },
};

export const NoCopyButton: Story = {
  args: {
    code: "const x = 1;",
    language: "js",
    showCopy: false,
  },
};
