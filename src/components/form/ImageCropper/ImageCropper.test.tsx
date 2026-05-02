import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { ImageCropper } from "./ImageCropper";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("ImageCropper", () => {
  it("renders correctly", () => {
    render(<ImageCropper>Test content</ImageCropper>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<ImageCropper />);
    expect(screen.getByText("image_cropper.no_image")).toBeInTheDocument();
  });
});
