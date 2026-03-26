import type { Meta, StoryObj } from "@storybook/react-vite";
import { FAQSection } from "@/components/FAQSection/FAQSection";

const meta: Meta<typeof FAQSection> = {
  title: "Components/Layout/FAQSection",
  component: FAQSection,
  parameters: {
    layout: "padded",
  },
};

export default meta;
type Story = StoryObj<typeof FAQSection>;

const mockItems = [
  {
    question: "faq_q1",
    answer: "faq_a1",
  },
  {
    question: "faq_q2",
    answer: "faq_a2",
  },
  {
    question: "faq_q3",
    answer: "faq_a3",
  },
  {
    question: "faq_q4",
    answer: "faq_a4",
  },
];

export const Default: Story = {
  args: {
    title: "faq_section_default_title",
    description: "faq_section_default_desc",
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
