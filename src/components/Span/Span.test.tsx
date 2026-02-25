import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Span } from "./Span";

// Mock i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Span", () => {
  it("renders content", () => {
    render(<Span content="Hello" />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("applies size and color classes", () => {
    const { container } = render(
      <Span content="Test" size="large" color="error" />,
    );
    expect(container.firstChild).toHaveClass("wim-span--lg");
    expect(container.firstChild).toHaveClass("wim-span--error");
  });

  it("renders with icon", () => {
    const { container } = render(
      <Span content="Config" iconName="CheckIcon" />,
    );
    expect(container.querySelector("svg")).toBeInTheDocument();
  });
});
