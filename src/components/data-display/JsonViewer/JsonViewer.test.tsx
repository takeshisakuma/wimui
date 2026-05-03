import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { JsonViewer } from "./JsonViewer";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("JsonViewer", () => {
  it("renders correctly", () => {
    render(<JsonViewer data={{ key: "value" }} />);
    expect(screen.getByText("JSON Viewer")).toBeInTheDocument();
    expect(screen.getByText("key:")).toBeInTheDocument();
    expect(screen.getByText(/"value"/)).toBeInTheDocument();
  });

  it("supports asChild", () => {
    render(
      <JsonViewer asChild data={{}}>
        <div data-testid="child">JSON Viewer</div>
      </JsonViewer>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });
});
