import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { TagInput } from "./TagInput";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("TagInput", () => {
  it("renders correctly", () => {
    render(<TagInput>Test content</TagInput>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders with default values", () => {
    render(<TagInput defaultValue={["Tag1"]} />);
    expect(screen.getByText("Tag1")).toBeInTheDocument();
  });
});
