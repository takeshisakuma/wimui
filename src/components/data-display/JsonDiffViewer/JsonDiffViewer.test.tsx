import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { JsonDiffViewer } from "./JsonDiffViewer";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const before = { name: "Alice", age: 30 };
const after = { name: "Alice", age: 31, role: "admin" };

describe("JsonDiffViewer", () => {
  it("renders without crashing", () => {
    const { container } = render(<JsonDiffViewer before={before} after={after} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("shows language label 'json'", () => {
    render(<JsonDiffViewer before={before} after={after} />);
    expect(screen.getByText("json")).toBeInTheDocument();
  });

  it("renders changed value in diff", () => {
    render(<JsonDiffViewer before={before} after={after} />);
    expect(screen.getAllByText(/30/).length).toBeGreaterThan(0);
    expect(screen.getAllByText(/31/).length).toBeGreaterThan(0);
  });

  it("fires onApply callback", () => {
    const onApply = vi.fn();
    render(<JsonDiffViewer before={before} after={after} onApply={onApply} />);
    screen.getByText("code_diff_viewer.apply").click();
    expect(onApply).toHaveBeenCalledOnce();
  });

  it("handles null values without error", () => {
    const { container } = render(<JsonDiffViewer before={null} after={{ x: 1 }} />);
    expect(container.firstChild).toBeInTheDocument();
  });

  it("uses custom indent", () => {
    render(<JsonDiffViewer before={before} after={after} indent={4} />);
    expect(screen.getByText("json")).toBeInTheDocument();
  });
});
