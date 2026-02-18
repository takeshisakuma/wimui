import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Markdown } from "@/components/Markdown/Markdown";

const meta: Meta<typeof Markdown> = {
    title: "Component/DataDisplay/Markdown",
    component: Markdown,
};

export default meta;
type Story = StoryObj<typeof Markdown>;

const sampleContent = `
# Markdown Preview

This is a **Markdown** component. It supports various elements:

## Typography
- **Bold text**
- *Italic text*
- ~~Strikethrough~~

## Lists
1. First item
2. Second item
   - Sub item A
   - Sub item B

## Code
Inline \`const x = 10;\` and blocks:

\\\`\\\`\\\`javascript
function hello() {
  console.log("Hello, world!");
}
\\\`\\\`\\\`

## Tables
| Feature | Supported |
| --- | --- |
| GFM | Yes |
| Custom Styles | Yes |

---

> This is a quote.
`;

export const Default: Story = {
    args: {
        children: sampleContent,
    },
};
