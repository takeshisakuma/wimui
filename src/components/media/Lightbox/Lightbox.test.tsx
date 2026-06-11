import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Lightbox } from "./Lightbox";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Lightbox", () => {
  it("renders correctly", () => {
    render(<Lightbox>Test content</Lightbox>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});
