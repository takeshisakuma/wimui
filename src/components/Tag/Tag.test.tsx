import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Tag } from "./Tag";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Tag", () => {
  it("renders children", () => {
    render(<Tag>New</Tag>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("applies variant and color classes", () => {
    const { container } = render(
      <Tag variant="outline" color="success">
        Success
      </Tag>,
    );
    expect(container.firstChild).toHaveClass("wim-tag--outline");
    expect(container.firstChild).toHaveClass("wim-tag--success");
  });

  it("renders with icon", () => {
    const { container } = render(
      <Tag icon={<span data-testid="icon" />}>Icon</Tag>,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
