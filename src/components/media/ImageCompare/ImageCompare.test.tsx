import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { ImageCompare } from "./ImageCompare";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("ImageCompare", () => {
  it("renders both images", () => {
    render(<ImageCompare before="/before.jpg" after="/after.jpg" beforeAlt="Before" afterAlt="After" />);
    expect(screen.getByAltText("Before")).toBeInTheDocument();
    expect(screen.getByAltText("After")).toBeInTheDocument();
  });

  it("exposes a slider with the default position", () => {
    render(<ImageCompare before="/b.jpg" after="/a.jpg" defaultPosition={40} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuenow", "40");
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "100");
  });

  it("moves the divider with arrow keys", () => {
    const onChange = vi.fn();
    render(<ImageCompare before="/b.jpg" after="/a.jpg" defaultPosition={50} onPositionChange={onChange} />);
    const slider = screen.getByRole("slider");
    fireEvent.keyDown(slider, { key: "ArrowRight" });
    expect(onChange).toHaveBeenCalledWith(52);
    fireEvent.keyDown(slider, { key: "ArrowLeft" });
    expect(slider).toHaveAttribute("aria-valuenow", "50");
  });

  it("jumps to the ends with Home and End", () => {
    render(<ImageCompare before="/b.jpg" after="/a.jpg" />);
    const slider = screen.getByRole("slider");
    fireEvent.keyDown(slider, { key: "End" });
    expect(slider).toHaveAttribute("aria-valuenow", "100");
    fireEvent.keyDown(slider, { key: "Home" });
    expect(slider).toHaveAttribute("aria-valuenow", "0");
  });

  it("clamps the position to the 0–100 range", () => {
    render(<ImageCompare before="/b.jpg" after="/a.jpg" defaultPosition={99} />);
    const slider = screen.getByRole("slider");
    fireEvent.keyDown(slider, { key: "ArrowRight", shiftKey: true });
    expect(slider).toHaveAttribute("aria-valuenow", "100");
  });

  it("respects a controlled position", () => {
    const { rerender } = render(<ImageCompare before="/b.jpg" after="/a.jpg" position={30} />);
    const slider = screen.getByRole("slider");
    expect(slider).toHaveAttribute("aria-valuenow", "30");
    fireEvent.keyDown(slider, { key: "ArrowRight" });
    // Controlled: value stays until the parent updates the prop.
    expect(slider).toHaveAttribute("aria-valuenow", "30");
    rerender(<ImageCompare before="/b.jpg" after="/a.jpg" position={70} />);
    expect(slider).toHaveAttribute("aria-valuenow", "70");
  });

  it("uses vertical orientation when requested", () => {
    render(<ImageCompare before="/b.jpg" after="/a.jpg" orientation="vertical" />);
    expect(screen.getByRole("slider")).toHaveAttribute("aria-orientation", "vertical");
  });
});
