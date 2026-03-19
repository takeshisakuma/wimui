import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Watermark } from "./Watermark";

describe("Watermark", () => {
  beforeEach(() => {
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({
      translate: vi.fn(),
      rotate: vi.fn(),
      fillText: vi.fn(),
      drawImage: vi.fn(),
    } as unknown as CanvasRenderingContext2D);
    vi.spyOn(HTMLCanvasElement.prototype, "toDataURL").mockReturnValue(
      "data:image/png;base64,xxxx",
    );
  });

  it("renders children", () => {
    render(
      <Watermark content="Confidential">
        <div data-testid="child">Protected Content</div>
      </Watermark>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("renders watermark overlay", () => {
    const { container } = render(<Watermark content="Confidential" />);
    const watermarkDiv = container.querySelector(".wim-watermark");
    expect(watermarkDiv).toBeInTheDocument();
  });

  it("applies opacity and z-index", () => {
    const { container } = render(
      <Watermark content="Confidential" zIndex={100} />,
    );
    const watermarkDiv = container.querySelector(
      ".wim-watermark",
    ) as HTMLElement;
    expect(watermarkDiv.style.zIndex).toBe("100");
  });

  it("renders with array content", () => {
    const { container } = render(
      <Watermark content={["Line 1", "Line 2"]} />,
    );
    expect(container.querySelector(".wim-watermark")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <Watermark content="Test" className="custom-watermark" />,
    );
    expect(container.firstChild).toHaveClass("custom-watermark");
  });

  it("renders with no content and no image (no canvas drawing)", () => {
    const { container } = render(<Watermark />);
    expect(container.querySelector(".wim-watermark")).toBeInTheDocument();
  });

  it("renders with image prop", () => {
    const { container } = render(
      <Watermark image="https://example.com/logo.png" />,
    );
    expect(container.querySelector(".wim-watermark")).toBeInTheDocument();
  });

  it("renders with custom width, height, rotate", () => {
    const { container } = render(
      <Watermark content="Custom" width={200} height={80} rotate={-45} />,
    );
    expect(container.querySelector(".wim-watermark")).toBeInTheDocument();
  });
});
