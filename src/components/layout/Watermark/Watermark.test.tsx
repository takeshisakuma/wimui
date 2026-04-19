import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
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

  afterEach(() => {
    vi.restoreAllMocks();
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
    render(<Watermark content="Confidential" />);
    const watermarkDiv = screen.getByTestId("watermark");
    expect(watermarkDiv).toBeInTheDocument();
  });

  it("applies opacity and z-index", () => {
    render(<Watermark content="Confidential" zIndex={100} />);
    const watermarkDiv = screen.getByTestId("watermark");
    expect(watermarkDiv.style.zIndex).toBe("100");
  });

  it("renders with array content", () => {
    render(<Watermark content={["Line 1", "Line 2"]} />);
    expect(screen.getByTestId("watermark")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    const { container } = render(
      <Watermark content="Test" className="custom-watermark" />,
    );
    expect(container.firstChild).toHaveClass("custom-watermark");
  });

  it("renders with no content and no image (no canvas drawing)", () => {
    render(<Watermark />);
    expect(screen.getByTestId("watermark")).toBeInTheDocument();
  });

  it("renders with image prop", () => {
    render(<Watermark image="https://example.com/logo.png" />);
    expect(screen.getByTestId("watermark")).toBeInTheDocument();
  });

  it("renders with custom width, height, rotate", () => {
    render(<Watermark content="Custom" width={200} height={80} rotate={-45} />);
    expect(screen.getByTestId("watermark")).toBeInTheDocument();
  });

});
