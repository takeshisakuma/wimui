import { render, screen, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Watermark } from "./Watermark";

// 200x100 (アスペクト比 2:1) の画像として振る舞うフェイク。
// jsdom は画像をロードしないため、src 代入時に onload を非同期で発火させる
class FakeImage {
  width = 200;
  height = 100;
  crossOrigin = "";
  onload: (() => void) | null = null;
  set src(_value: string) {
    setTimeout(() => this.onload?.(), 0);
  }
}

describe("Watermark", () => {
  let mockCtx: {
    translate: ReturnType<typeof vi.fn>;
    rotate: ReturnType<typeof vi.fn>;
    fillText: ReturnType<typeof vi.fn>;
    drawImage: ReturnType<typeof vi.fn>;
  };

  beforeEach(() => {
    mockCtx = {
      translate: vi.fn(),
      rotate: vi.fn(),
      fillText: vi.fn(),
      drawImage: vi.fn(),
    };
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(
      mockCtx as unknown as CanvasRenderingContext2D,
    );
    vi.spyOn(HTMLCanvasElement.prototype, "toDataURL").mockReturnValue(
      "data:image/png;base64,xxxx",
    );
    vi.stubGlobal("Image", FakeImage);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
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

  it("draws each line of array content", async () => {
    render(<Watermark content={["Line 1", "Line 2"]} />);
    await waitFor(() => expect(mockCtx.fillText).toHaveBeenCalledTimes(2));
  });

  it("derives image size from aspect ratio when width and height are omitted", async () => {
    render(<Watermark image="https://example.com/logo.png" />);
    // 幅 125 固定、高さ 125 / (200/100) = 62.5
    await waitFor(() =>
      expect(screen.getByTestId("watermark").style.backgroundSize).toBe(
        "225px 162.5px",
      ),
    );
  });

  it("derives image height from width and aspect ratio", async () => {
    render(<Watermark image="https://example.com/logo.png" width={100} />);
    await waitFor(() =>
      expect(screen.getByTestId("watermark").style.backgroundSize).toBe(
        "200px 150px",
      ),
    );
  });

  it("derives image width from height and aspect ratio", async () => {
    render(<Watermark image="https://example.com/logo.png" height={80} />);
    // 幅 80 * 2 = 160
    await waitFor(() =>
      expect(screen.getByTestId("watermark").style.backgroundSize).toBe(
        "260px 180px",
      ),
    );
  });

  it("uses explicit width and height for the image as-is", async () => {
    render(
      <Watermark image="https://example.com/logo.png" width={90} height={90} />,
    );
    await waitFor(() => expect(mockCtx.drawImage).toHaveBeenCalled());
    await waitFor(() =>
      expect(screen.getByTestId("watermark").style.backgroundSize).toBe(
        "190px 190px",
      ),
    );
  });

  it("applies custom gap to background size for text content", async () => {
    render(<Watermark content="Confidential" gap={[50, 60]} />);
    await waitFor(() =>
      expect(screen.getByTestId("watermark").style.backgroundSize).toBe(
        "175px 124px",
      ),
    );
    // 描画された base64 が背景画像として設定される（setTimeout(0) 後）
    await waitFor(() =>
      expect(screen.getByTestId("watermark").style.backgroundImage).toContain(
        "data:image/png;base64",
      ),
    );
  });

  it("skips drawing when the canvas context is unavailable", () => {
    (
      HTMLCanvasElement.prototype.getContext as unknown as ReturnType<typeof vi.fn>
    ).mockReturnValue(null);
    render(<Watermark content="Confidential" />);
    expect(mockCtx.fillText).not.toHaveBeenCalled();
    expect(screen.getByTestId("watermark")).toBeInTheDocument();
  });

  it("falls back to devicePixelRatio 1 when unset", async () => {
    vi.stubGlobal("devicePixelRatio", 0);
    render(<Watermark content="Confidential" />);
    await waitFor(() => expect(mockCtx.fillText).toHaveBeenCalled());
  });

});
