import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { SignaturePad } from "./SignaturePad";

describe("SignaturePad", () => {
  let mockCtx: {
    beginPath: ReturnType<typeof vi.fn>;
    moveTo: ReturnType<typeof vi.fn>;
    lineTo: ReturnType<typeof vi.fn>;
    stroke: ReturnType<typeof vi.fn>;
    clearRect: ReturnType<typeof vi.fn>;
    scale: ReturnType<typeof vi.fn>;
    getImageData: ReturnType<typeof vi.fn>;
    strokeStyle: string;
    lineWidth: number;
    lineCap: string;
    lineJoin: string;
  };

  beforeEach(() => {
    mockCtx = {
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      stroke: vi.fn(),
      clearRect: vi.fn(),
      scale: vi.fn(),
      getImageData: vi.fn().mockReturnValue({
        data: new Uint8ClampedArray([0, 0, 0, 0]),
      }),
      strokeStyle: "",
      lineWidth: 0,
      lineCap: "",
      lineJoin: "",
    };

    // Mock getContext for canvas using spyOn to allow restoration
    vi.spyOn(HTMLCanvasElement.prototype, "getContext").mockReturnValue(mockCtx as unknown as CanvasRenderingContext2D);

    // Mock getBoundingClientRect for coordinates
    vi.spyOn(HTMLCanvasElement.prototype, "getBoundingClientRect").mockReturnValue({
      left: 0,
      top: 0,
      width: 400,
      height: 200,
    } as DOMRect);

    // Mock toDataURL
    vi.spyOn(HTMLCanvasElement.prototype, "toDataURL").mockReturnValue("data:image/png;base64,test");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("renders canvas and clear button", () => {
    render(<SignaturePad label="Sign here" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("Clear")).toBeInTheDocument();
  });

  it("becomes non-empty when drawing starts", () => {
    render(<SignaturePad />);
    const canvas = screen.getByRole("img");
    
    // Simulate drawing
    fireEvent.mouseDown(canvas, { clientX: 10, clientY: 10 });
    fireEvent.mouseMove(canvas, { clientX: 20, clientY: 20 });
    
    // Clear button should become enabled
    const clearBtn = screen.getByText("Clear");
    expect(clearBtn.closest("button")).not.toBeDisabled();
  });

  it("calls onChange when drawing stops", () => {
    const handleChange = vi.fn();
    render(<SignaturePad onChange={handleChange} />);
    const canvas = screen.getByRole("img");
    
    // Mock getImageData to return non-empty data
    vi.mocked(mockCtx.getImageData).mockReturnValue({
      data: new Uint8ClampedArray([0, 0, 0, 255]), // One pixel with alpha=255
    } as unknown as ImageData);
    
    fireEvent.mouseDown(canvas, { clientX: 10, clientY: 10 });
    fireEvent.mouseMove(canvas, { clientX: 20, clientY: 20 });
    fireEvent.mouseUp(canvas);
    
    expect(handleChange).toHaveBeenCalledWith("data:image/png;base64,test");
  });

  it("clears canvas when clear button is clicked", () => {
    const handleChange = vi.fn();
    render(<SignaturePad onChange={handleChange} />);
    const canvas = screen.getByRole("img");
    
    // Draw something
    fireEvent.mouseDown(canvas, { clientX: 10, clientY: 10 });
    fireEvent.mouseMove(canvas, { clientX: 20, clientY: 20 });
    fireEvent.mouseUp(canvas);
    
    // Click clear
    const clearBtn = screen.getByText("Clear");
    // We need pointerDown to set clearIntentRef.current = true
    fireEvent.pointerDown(clearBtn);
    fireEvent.click(clearBtn);
    
    expect(handleChange).toHaveBeenLastCalledWith(null);
  });

  it("respects disabled prop", () => {
    const handleChange = vi.fn();
    render(<SignaturePad disabled onChange={handleChange} />);
    const canvas = screen.getByRole("img");
    
    fireEvent.mouseDown(canvas, { clientX: 10, clientY: 10 });
    fireEvent.mouseMove(canvas, { clientX: 20, clientY: 20 });
    fireEvent.mouseUp(canvas);
    
    expect(handleChange).not.toHaveBeenCalled();
  });
});
