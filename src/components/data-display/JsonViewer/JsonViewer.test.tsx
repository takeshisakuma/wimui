import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { JsonViewer } from "./JsonViewer";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("JsonViewer", () => {
  it("renders correctly", () => {
    render(<JsonViewer data={{}}>Test content</JsonViewer>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <JsonViewer asChild data={{}}>
        <span data-testid="child">Child</span>
      </JsonViewer>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
