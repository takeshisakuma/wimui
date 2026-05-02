import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { PasswordStrength } from "./PasswordStrength";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("PasswordStrength", () => {
  it("renders correctly", () => {
    render(<PasswordStrength>Test content</PasswordStrength>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<PasswordStrength />);
    expect(screen.getByText("password_strength.very_weak")).toBeInTheDocument();
  });
});
