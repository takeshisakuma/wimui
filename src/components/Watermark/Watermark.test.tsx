import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Watermark } from "./Watermark";

describe("Watermark", () => {
  beforeEach(() => {
    // Mocking canvas because it's not well supported in jsdom
    // But we want to test that it renders its children and the watermark div

    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue({
      translate: vi.fn(),
      rotate: vi.fn(),
      fillText: vi.fn(),
      drawImage: vi.fn(),
    } as any);
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
});
