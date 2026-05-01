import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Lightbox } from "./Lightbox";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("Lightbox", () => {
  it("renders correctly", () => {
    render(<Lightbox>Test content</Lightbox>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });
});
