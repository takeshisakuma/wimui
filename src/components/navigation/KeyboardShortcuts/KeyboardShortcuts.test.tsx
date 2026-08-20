import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { KeyboardShortcuts } from "./KeyboardShortcuts";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
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

  // T211 ②: 既定は見出しにしない。段を決め打つとページに `h1` / `h2` がある場合に
  // 段が飛び、axe の `heading-order` が鳴る（T191 で `Footer` が実際に踏んだ）。
  it("既定では title を見出しにしない", () => {
    render(<KeyboardShortcuts shortcuts={mockShortcuts} title="Shortcuts" />);
    expect(screen.getByText("Shortcuts").tagName).toBe("P");
    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });

  it("titleLevel を渡したときだけ見出しになる", () => {
    render(
      <KeyboardShortcuts shortcuts={mockShortcuts} title="Shortcuts" titleLevel={3} />,
    );
    expect(screen.getByRole("heading", { level: 3, name: "Shortcuts" })).toBeInTheDocument();
  });
});
