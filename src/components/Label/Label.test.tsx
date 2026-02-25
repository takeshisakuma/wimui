import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Label } from "./Label";

// Mock translation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

describe("Label", () => {
  it("renders label text", () => {
    render(<Label label="Username" />);
    expect(screen.getByText("Username")).toBeInTheDocument();
  });

  it("renders required badge", () => {
    render(<Label label="Username" required />);
    expect(screen.getByText("required")).toBeInTheDocument();
  });

  it("renders optional badge", () => {
    render(<Label label="Username" showOptional />);
    expect(screen.getByText("optional")).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Label label="Test">
        <input />
      </Label>,
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
});
