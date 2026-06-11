import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { JsonViewer } from "./JsonViewer";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("JsonViewer", () => {
  it("renders correctly", () => {
    render(<JsonViewer data={{ key: "value" }} />);
    expect(screen.getByText("jsonViewer.title")).toBeInTheDocument();
    expect(screen.getByText("key:")).toBeInTheDocument();
    expect(screen.getByText(/"value"/)).toBeInTheDocument();
  });
});
