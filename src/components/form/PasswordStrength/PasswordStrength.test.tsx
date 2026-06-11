import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PasswordStrength } from "./PasswordStrength";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("PasswordStrength", () => {
  it("renders with a score and label", () => {
    render(<PasswordStrength score={0} />);
    expect(screen.getByText("password_strength.very_weak")).toBeInTheDocument();
  });
});
