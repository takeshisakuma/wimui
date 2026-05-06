import type { Meta, StoryObj } from "@storybook/react-vite";
import { SourceCitation, SourceCitationList } from "@/components/ai/SourceCitation/SourceCitation";

const meta: Meta<typeof SourceCitation> = {
  title: "Components/AI/SourceCitation",
  component: SourceCitation,
  parameters: { layout: "centered" },
};

export default meta;
type Story = StoryObj<typeof SourceCitation>;

export const Default: Story = {
  args: {
    title: "React Documentation",
    url: "https://react.dev",
    index: 1,
  },
};

export const WithDescription: Story = {
  args: {
    title: "React Documentation",
    url: "https://react.dev",
    description: "The official React documentation covering core concepts, hooks, and API reference.",
    index: 1,
  },
};

export const NoLink: Story = {
  args: {
    title: "Internal Design System Guide",
    description: "This document is for internal use only.",
    index: 2,
  },
};

export const List: Story = {
  render: () => (
    <SourceCitationList
      sources={[
        {
          title: "React Documentation",
          url: "https://react.dev",
          description: "Official React docs",
        },
        {
          title: "MDN Web Docs",
          url: "https://developer.mozilla.org",
          description: "Comprehensive web technology reference",
        },
        {
          title: "TypeScript Handbook",
          url: "https://www.typescriptlang.org/docs/",
        },
      ]}
    />
  ),
};
