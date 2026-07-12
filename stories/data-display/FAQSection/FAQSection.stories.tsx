import type { Meta, StoryObj } from "@storybook/react-vite";
import { FAQSection } from "wimui";
import { T } from "../../T";

const meta: Meta<typeof FAQSection> = {
  title: "Components/Data Containers/FAQSection",
  component: FAQSection,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof FAQSection>;

const mockItems = [
  {
    question: <T k="docs_layout:faq.q1" />,
    answer: <T k="docs_layout:faq.a1" />,
  },
  {
    question: <T k="docs_layout:faq.q2" />,
    answer: <T k="docs_layout:faq.a2" />,
  },
  {
    question: <T k="docs_layout:faq.q3" />,
    answer: <T k="docs_layout:faq.a3" />,
  },
  {
    question: <T k="docs_layout:faq.q4" />,
    answer: <T k="docs_layout:faq.a4" />,
  },
];

export const Default: Story = {
  args: {
    title: <T k="docs_layout:faq.section_default_title" />,
    description: <T k="docs_layout:faq.section_default_desc" />,
    items: mockItems,
    layout: "top",
  },
};

export const LayoutLeft: Story = {
  args: {
    ...Default.args,
    layout: "left",
  },
};

export const WithoutHeader: Story = {
  args: {
    items: mockItems,
  },
};

export const CustomAccordionProps: Story = {
  args: {
    ...Default.args,
    accordionProps: {
      type: "single",
    },
  },
};
