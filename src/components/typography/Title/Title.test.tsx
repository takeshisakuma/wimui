import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Title } from "./Title";

// Mock translation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Title", () => {
  it("renders with correct tag", () => {
    render(<Title tag="h2">Title Text</Title>);
    expect(screen.getByRole("heading", { level: 2 })).toBeInTheDocument();
  });

  it("applies styling classes", () => {
    render(
      <Title size="xl" color="primary" align="center">
        Title Text
      </Title>,
    );
    const heading = screen.getByRole("heading");
    expect(heading.className).toContain("xl");
    expect(heading.className).toContain("primary");
    expect(heading.className).toContain("center");
  });

  it("handles decoration", () => {
    render(<Title decoration="underline">Title Text</Title>);
    const textElement = screen.getByText("Title Text");
    expect(textElement.className).toContain("underline");
  });
});
