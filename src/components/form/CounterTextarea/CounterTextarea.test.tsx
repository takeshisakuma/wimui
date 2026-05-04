import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { CounterTextarea } from "./CounterTextarea";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("CounterTextarea", () => {
  it("renders correctly", () => {
    render(<CounterTextarea defaultValue="Test content" />);
    expect(screen.getByDisplayValue("Test content")).toBeInTheDocument();
  });
});
