import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Autosave } from "./Autosave";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string, params?: Record<string, unknown>) => {
    if (params) return `${key}:${JSON.stringify(params)}`;
    return key;
  }}),
}));

describe("Autosave", () => {
  it("renders nothing when idle", () => {
    const { container } = render(<Autosave status="idle" />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders saving state", () => {
    render(<Autosave status="saving" />);
    expect(screen.getByText("Saving...")).toBeInTheDocument();
  });

  it("renders saved state", () => {
    render(<Autosave status="saved" />);
    expect(screen.getByText("Saved")).toBeInTheDocument();
  });

  it("renders saved state with time", () => {
    const date = new Date("2024-01-01T12:30:00");
    render(<Autosave status="saved" savedAt={date} />);
    expect(screen.getByText(/Saved at/)).toBeInTheDocument();
  });

  it("renders error state with default message", () => {
    render(<Autosave status="error" />);
    expect(screen.getByText("Failed to save")).toBeInTheDocument();
  });

  it("renders error state with custom message", () => {
    render(<Autosave status="error" errorMessage="Network error" />);
    expect(screen.getByText("Network error")).toBeInTheDocument();
  });

  it("has role status and aria-live", () => {
    render(<Autosave status="saving" />);
    const el = screen.getByRole("status");
    expect(el).toHaveAttribute("aria-live", "polite");
  });
});
