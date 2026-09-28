import { readFileSync } from "node:fs";
import { describe, it, expect, vi, afterEach } from "vitest";
import { render, act } from "@testing-library/react";
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
    // 棒 4px・間隔 3px の塊（4 本で 25px）を、中心を原点にして並べる
    expect(rects.map((r) => r.getAttribute("x"))).toEqual(["-12.5", "-5.5", "1.5", "8.5"]);
    rects.forEach((r) => {
      expect(r).toHaveAttribute("width", "4");
      expect(r).toHaveAttribute("rx", "2");
    });
  });

  it("centers the bars as one cluster instead of spreading them across the box", () => {
    // 全幅に等間隔で広げると、広い画面では 4px の棒が 50px 以上離れてまばらになる
    const { container } = render(<VoiceVisualizer barCount={4} height={40} />);
    const cluster = container.querySelector("svg svg")!;
    expect(cluster).toHaveAttribute("x", "50%");
    expect(cluster).toHaveAttribute("overflow", "visible");
    expect(cluster.querySelectorAll("rect")).toHaveLength(4);
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
    // アニメーションが無いとき（VRT・静止画）は reduced-motion と同じ高さで止まる
    const idle = scss.match(/&\.idle\s*\{([^}]+)\}/);
    expect(idle?.[1]).toMatch(/transform:\s*scaleY\(0\.25\)/);
    const dimmed = scss.match(/&\.disabled\s*\{([\s\S]*?)\n {4}\}/);
    expect(dimmed?.[1]).toBeDefined();
    expect(dimmed?.[1]).not.toMatch(/animation/);
  });

  it("does not dim a finished (inactive) visualizer", () => {
    // 以前は isActive={false} で薄くしていたため、分析済みの録音まで「使えない」ように見えた
    const { container } = render(<VoiceVisualizer isActive={false} data={[0.2, 0.8, 0.4]} />);
    expect(container.firstChild).not.toHaveClass("disabled");
    expect(container.firstChild).not.toHaveClass("active");
  });

  it("dims only when disabled", () => {
    const { container } = render(<VoiceVisualizer disabled />);
    expect(container.firstChild).toHaveClass("disabled");
  });

  describe("fitting the container", () => {
    let size = { width: 0, height: 0 };
    const observers: Array<() => void> = [];

    const install = (width: number, height: number) => {
      size = { width, height };
      vi.stubGlobal(
        "ResizeObserver",
        class {
          cb: () => void;
          constructor(cb: () => void) {
            this.cb = cb;
            observers.push(() => cb());
          }
          observe() {}
          disconnect() {}
        },
      );
      vi.spyOn(SVGElement.prototype, "getBoundingClientRect").mockImplementation(
        () => ({ width: size.width, height: size.height }) as DOMRect,
      );
    };

    afterEach(() => {
      vi.unstubAllGlobals();
      vi.restoreAllMocks();
      observers.length = 0;
    });

    it("fits as many bars as the width allows by default", () => {
      // 棒 4px・間隔 3px: 700px なら (700 + 3) / 7 = 100 本
      install(700, 40);
      const { container } = render(<VoiceVisualizer />);
      expect(container.querySelectorAll("rect")).toHaveLength(100);
    });

    it("follows width changes", () => {
      install(700, 40);
      const { container } = render(<VoiceVisualizer />);
      size = { width: 350, height: 40 };
      act(() => observers.forEach((notify) => notify()));
      expect(container.querySelectorAll("rect")).toHaveLength(50);
    });

    it("keeps a numeric barCount as a centered cluster", () => {
      install(700, 40);
      const { container } = render(<VoiceVisualizer barCount={24} />);
      expect(container.querySelectorAll("rect")).toHaveLength(24);
    });

    it("resamples data to the fitted bar count", () => {
      install(4 * 7 - 3, 40); // 4 本
      const { container } = render(<VoiceVisualizer data={[0, 1]} height={40} />);
      const heights = [...container.querySelectorAll("rect")].map((r) => Number(r.getAttribute("height")));
      // 0 → 1 を 4 本へ線形補間（先頭は最小の高さの印）
      expect(heights.slice(1).map((v) => Math.round(v))).toEqual([13, 27, 40]);
    });

    it("draws with the parent's height when height is fill", () => {
      install(700, 96);
      const { container } = render(<VoiceVisualizer height="fill" barCount={4} />);
      const svg = container.querySelector("svg")!;
      expect(svg.style.height).toBe("100%");
      expect(container.querySelector("rect")).toHaveAttribute("height", "96");
    });
  });

  describe("progress", () => {
    it("splits bars into played and unplayed at the progress position", () => {
      const data = [0.5, 0.5, 0.5, 0.5];
      const { container } = render(<VoiceVisualizer barCount={4} data={data} progress={0.5} />);
      const unplayed = [...container.querySelectorAll("rect")].map((r) => r.classList.contains("unplayed"));
      expect(unplayed).toEqual([false, false, true, true]);
    });

    it("clips the played part of the waveform", () => {
      const { container } = render(
        <VoiceVisualizer mode="waveform" data={[0.2, 0.8, 0.4]} progress={0.25} isActive={false} />,
      );
      const lines = container.querySelectorAll("polyline");
      expect(lines).toHaveLength(2);
      expect(lines[0]).toHaveClass("unplayed");
      const clipRect = container.querySelector("clipPath rect")!;
      expect(clipRect).toHaveAttribute("width", "25");
      expect(lines[1].getAttribute("clip-path")).toContain(container.querySelector("clipPath")!.id);
    });

    it("ignores progress without data", () => {
      const { container } = render(<VoiceVisualizer barCount={4} progress={0.5} />);
      expect(container.querySelectorAll("rect.unplayed")).toHaveLength(0);
    });
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
