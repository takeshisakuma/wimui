import { readFileSync } from "node:fs";
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

  it("draws idle bars at full height so the scaleY pulse is visible", () => {
    // 以前は高さ 10% の仮の棒を scaleY(0.15〜0.65) で縮め、40px の箱で 0.6〜2.6px だった
    const { container } = render(<VoiceVisualizer height={40} />);
    const bar = container.querySelector("rect")!;
    expect(bar).toHaveAttribute("y", "0");
    expect(bar).toHaveAttribute("height", "40");
  });

  it("keeps bar width fixed in px instead of stretching with the box", () => {
    // 以前は viewBox 幅 100 を preserveAspectRatio="none" で横に伸ばし、棒の幅が箱の幅に比例していた
    const { container } = render(<VoiceVisualizer barCount={4} />);
    const svg = container.querySelector("svg")!;
    expect(svg).not.toHaveAttribute("viewBox");
    expect(svg).not.toHaveAttribute("preserveAspectRatio");
    const rects = [...container.querySelectorAll("rect")];
    expect(rects.map((r) => r.getAttribute("x"))).toEqual(["12.500%", "37.500%", "62.500%", "87.500%"]);
    rects.forEach((r) => {
      expect(r).toHaveAttribute("width", "4");
      expect(r).toHaveAttribute("rx", "2");
    });
  });

  it("keeps the stretched viewBox for the waveform (stroke is non-scaling)", () => {
    const { container } = render(<VoiceVisualizer mode="waveform" height={60} />);
    const svg = container.querySelector("svg")!;
    expect(svg).toHaveAttribute("viewBox", "0 0 100 60");
    expect(svg).toHaveAttribute("preserveAspectRatio", "none");
  });

  it("scales bars from their own box and keeps the muted state still", () => {
    const scss = readFileSync(
      "src/components/ai/VoiceVisualizer/voice-visualizer.module.scss",
      "utf8",
    ).replace(/\/\/.*$/gm, "");
    const bar = scss.match(/^\s+\.bar\s*\{([^}]+)/m);
    expect(bar?.[1]).toMatch(/transform-box:\s*fill-box/);
    const muted = scss.match(/&\.muted\s*\{([\s\S]*?)\n {4}\}/);
    expect(muted?.[1]).toBeDefined();
    expect(muted?.[1]).not.toMatch(/animation/);
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
