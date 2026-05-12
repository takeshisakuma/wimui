import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { KeyboardShortcuts } from "./KeyboardShortcuts";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

const mockShortcuts = [
  { label: "Open search", keys: ["Ctrl", "K"] },
  { label: "Save", keys: ["Ctrl", "S"] },
];

describe("KeyboardShortcuts", () => {
  it("renders shortcut labels", () => {
    render(<KeyboardShortcuts shortcuts={mockShortcuts} />);
    expect(screen.getByText("Open search")).toBeInTheDocument();
    expect(screen.getByText("Save")).toBeInTheDocument();
  });

  it("renders keys as kbd elements", () => {
    render(<KeyboardShortcuts shortcuts={mockShortcuts} />);
    expect(screen.getAllByText("Ctrl")).toHaveLength(2);
    expect(screen.getByText("K")).toBeInTheDocument();
    expect(screen.getByText("S")).toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(
      <KeyboardShortcuts shortcuts={mockShortcuts} title="Shortcuts" />,
    );
    expect(screen.getByText("Shortcuts")).toBeInTheDocument();
  });

  it("renders custom separator", () => {
    render(<KeyboardShortcuts shortcuts={mockShortcuts} separator="then" />);
    expect(screen.getAllByText("then")).toHaveLength(2);
  });
});
