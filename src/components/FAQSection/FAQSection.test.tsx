import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { FAQSection, FAQItem } from "./FAQSection";

// useTranslation is mocked globally in some projects, but SKILLS.md says to mock it in each test
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const mockItems: FAQItem[] = [
  {
    question: "What is WIM UI?",
    answer: "WIM UI is a modern design system.",
  },
  {
    question: "How to use it?",
    answer: "Install it via npm and import components.",
  },
];

describe("FAQSection", () => {
  it("renders correctly with title and items", () => {
    render(
      <FAQSection
        items={mockItems}
        title="Frequently Asked Questions"
        description="Find answers to common questions."
      />
    );

    expect(screen.getByText("Frequently Asked Questions")).toBeInTheDocument();
    expect(screen.getByText("Find answers to common questions.")).toBeInTheDocument();
    expect(screen.getByText("What is WIM UI?")).toBeInTheDocument();
    expect(screen.getByText("How to use it?")).toBeInTheDocument();
  });

  it("expands an item when clicked", () => {
    render(<FAQSection items={mockItems} />);

    const trigger = screen.getByText("What is WIM UI?");
    fireEvent.click(trigger);

    // Accordion uses aria-expanded
    expect(trigger.closest("button")).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText("WIM UI is a modern design system.")).toBeInTheDocument();
  });

  it("applies layout-left class when layout is set to left", () => {
    const { container } = render(
      <FAQSection items={mockItems} layout="left" />
    );

    expect(container.firstChild).toHaveClass("wim-faq-section--layout-left");
  });
});
