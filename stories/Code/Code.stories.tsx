import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Code } from "./Code";

const meta: Meta<typeof Code> = {
    title: "Component/Data Display/Code",
    component: Code,
    parameters: {
        layout: "centered",
    },
    // tags: ["autodocs"],
    argTypes: {
        block: { control: "boolean" },
        language: { control: "text" },
    },
};

export default meta;
type Story = StoryObj<typeof Code>;

export const Inline: Story = {
    args: {
        children: "const x = 10;",
        block: false,
    },
};

export const Block: Story = {
    args: {
        children: `function helloWorld() {
  console.log("Hello, world!");
}`,
        block: true,
        language: "javascript",
    },
};

export const LongContent: Story = {
    args: {
        block: true,
        children: `import React from "react";

// export を含む文字列が Indexing エラーの原因になる可能性があるため、コメントアウトなどで回避
// export const Example = () => {
const Example = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <p>This is a long code block to test scrolling behavior.</p>
        </div>
    );
};`,
        language: "tsx",
    },
};
