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
    expect(screen.getByText("Very weak")).toBeInTheDocument();
  });

  it.each([
    ["abc", "Very weak"],
    ["abcdefgh", "Weak"],
    ["Abcdefgh", "Fair"],
    ["Abcdefg1", "Strong"],
    ["Abcdefg1!", "Very strong"],
  ])("calculates level from password %s", (password, expected) => {
    render(<PasswordStrength password={password} />);
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it("hides the label when password is empty and no score is given", () => {
    render(<PasswordStrength />);
    expect(screen.queryByText(/password_strength\./)).not.toBeInTheDocument();
  });

  it("hides the label when showLabel is false", () => {
    render(<PasswordStrength password="Abcdefg1!" showLabel={false} />);
    expect(screen.queryByText(/password_strength\./)).not.toBeInTheDocument();
  });

  it.each([
    [1, "Weak"],
    [2, "Fair"],
    [3, "Strong"],
    [4, "Very strong"],
  ] as const)("renders label for explicit score %i", (score, expected) => {
    render(<PasswordStrength score={score} />);
    expect(screen.getByText(expected)).toBeInTheDocument();
  });

  it("uses success intent for score 3 and 4", () => {
    const { container, rerender } = render(<PasswordStrength score={3} />);
    expect(container.querySelector(".success")).toBeInTheDocument();
    rerender(<PasswordStrength score={4} />);
    expect(container.querySelector(".success")).toBeInTheDocument();
  });

  it("prefers explicit score over calculated level", () => {
    render(<PasswordStrength password="Abcdefg1!" score={1} />);
    expect(screen.getByText("Weak")).toBeInTheDocument();
    expect(screen.queryByText("Very strong")).not.toBeInTheDocument();
  });

  it("uses a custom calculateLevel function", () => {
    const calculateLevel = vi.fn().mockReturnValue(4);
    render(<PasswordStrength password="abc" calculateLevel={calculateLevel} />);
    expect(calculateLevel).toHaveBeenCalledWith("abc");
    expect(screen.getByText("Very strong")).toBeInTheDocument();
  });

  it("renders an empty label for an out-of-range score", () => {
    const { container } = render(
      <PasswordStrength score={5 as unknown as 4} />
    );
    expect(container).toBeInTheDocument();
    expect(screen.queryByText(/password_strength\./)).not.toBeInTheDocument();
  });

  it("merges a custom className", () => {
    const { container } = render(
      <PasswordStrength score={2} className="custom-strength" />
    );
    expect(container.firstChild).toHaveClass("custom-strength");
  });
});
