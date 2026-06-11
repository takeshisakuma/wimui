import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CounterTextarea } from "./CounterTextarea";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("CounterTextarea", () => {
  it("renders correctly", () => {
    render(<CounterTextarea defaultValue="Test content" />);
    expect(screen.getByDisplayValue("Test content")).toBeInTheDocument();
  });
});
