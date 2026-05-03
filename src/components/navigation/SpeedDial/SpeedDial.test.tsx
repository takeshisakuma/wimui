import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { SpeedDial } from "./SpeedDial";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("SpeedDial", () => {
  it("renders correctly", () => {
    render(<SpeedDial actions={[]} />);
    expect(screen.getByLabelText("PlusIcon")).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <SpeedDial asChild actions={[]}>
        <div data-testid="child">
          <button type="button">Trigger</button>
        </div>
      </SpeedDial>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
