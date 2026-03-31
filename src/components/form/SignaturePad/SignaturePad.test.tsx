import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { SignaturePad } from "./SignaturePad";

// Mock i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

describe("SignaturePad", () => {
  beforeEach(() => {
    // Mock getContext for canvas
    HTMLCanvasElement.prototype.getContext = vi.fn().mockReturnValue({
      beginPath: vi.fn(),
      moveTo: vi.fn(),
      lineTo: vi.fn(),
      stroke: vi.fn(),
      clearRect: vi.fn(),
      strokeStyle: "",
      lineWidth: 0,
      lineCap: "",
      lineJoin: "",
    });
    // Mock toDataURL
    HTMLCanvasElement.prototype.toDataURL = vi.fn().mockReturnValue("data:image/png;base64,test");
  });

  it("renders canvas and clear button", () => {
    render(<SignaturePad label="Sign here" />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByText("signature.clear")).toBeInTheDocument();
  });

  it("becomes non-empty when drawing starts", () => {
    render(<SignaturePad />);
    const canvas = screen.getByRole("img");
    
    // Simulate drawing
    fireEvent.mouseDown(canvas, { clientX: 10, clientY: 10 });
    fireEvent.mouseMove(canvas, { clientX: 20, clientY: 20 });
    
    // Clear button should become enabled
    const clearBtn = screen.getByText("signature.clear");
    expect(clearBtn.closest("button")).not.toBeDisabled();
  });

  it("calls onChange when drawing stops", () => {
    const handleChange = vi.fn();
    render(<SignaturePad onChange={handleChange} />);
    const canvas = screen.getByRole("img");
    
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
    const clearBtn = screen.getByText("signature.clear");
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
