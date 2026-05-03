import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SpeedDial } from "./SpeedDial";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("SpeedDial", () => {
  it("renders correctly", () => {
    render(<SpeedDial actions={[]}>Test content</SpeedDial>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <SpeedDial asChild actions={[]}>
        <span data-testid="child">Child</span>
      </SpeedDial>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
