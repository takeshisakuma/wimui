import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import { VoiceVisualizer } from "./VoiceVisualizer";

describe("VoiceVisualizer", () => {
  it("renders bars by default", () => {
    const { container } = render(<VoiceVisualizer />);
    const rects = container.querySelectorAll("rect");
    expect(rects.length).toBe(24); // default barCount
  });

  it("renders custom barCount", () => {
    const { container } = render(<VoiceVisualizer barCount={16} />);
    expect(container.querySelectorAll("rect").length).toBe(16);
  });

  it("renders waveform mode with polyline", () => {
    const { container } = render(<VoiceVisualizer mode="waveform" />);
    expect(container.querySelector("polyline")).toBeInTheDocument();
    expect(container.querySelectorAll("rect").length).toBe(0);
  });

  it("renders as svg element", () => {
    const { container } = render(<VoiceVisualizer />);
    expect(container.firstChild?.nodeName).toBe("svg");
  });

  it("applies data-driven bar heights without idle class", () => {
    const data = Array.from({ length: 24 }, (_, i) => i / 23);
    const { container } = render(<VoiceVisualizer data={data} />);
    const bars = container.querySelectorAll("rect");
    expect(bars.length).toBe(24);
    // bars that have idle class should be absent when data is provided
    const idleBars = container.querySelectorAll("rect[class*='idle']");
    expect(idleBars.length).toBe(0);
  });

  it("adds idle class on bars when no data and isActive", () => {
    const { container } = render(<VoiceVisualizer isActive />);
    const idleBars = container.querySelectorAll("rect[class*='idle']");
    expect(idleBars.length).toBe(24);
  });

  it("applies muted class when not active", () => {
    const { container } = render(<VoiceVisualizer isActive={false} />);
    expect(container.firstChild).toHaveClass("muted");
  });

  it("exposes an accessible label when provided (T168)", () => {
    const { getByRole } = render(<VoiceVisualizer ariaLabel="Recording in progress" />);
    expect(getByRole("img")).toHaveAttribute("aria-label", "Recording in progress");
    expect(getByRole("img")).not.toHaveAttribute("aria-hidden");
  });

  it("is hidden from assistive tech without a label (T168)", () => {
    const { container } = render(<VoiceVisualizer />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
    expect(container.firstChild).not.toHaveAttribute("role");
  });

  it("does not leave a nameless img role when aria-hidden is overridden (T168)", () => {
    const { container } = render(<VoiceVisualizer aria-hidden={false} />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
    expect(container.firstChild).not.toHaveAttribute("role");
  });
});
