import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Image } from "./Image";

describe("Image", () => {
  it("renders image with src and alt", () => {
    render(<Image src="test.jpg" alt="Test Image" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("src", "test.jpg");
    expect(img).toHaveAttribute("alt", "Test Image");
  });

  it("renders caption", () => {
    render(<Image src="test.jpg" alt="Test Image" caption="Image Caption" />);
    expect(screen.getByText("Image Caption")).toBeInTheDocument();
  });

  it("applies basic styles (radius, shadow, border)", () => {
    render(<Image src="test.jpg" alt="Test" radius="md" shadow border />);
    const inner = screen.getByRole("img").parentElement;
    expect(inner).toHaveClass("wim-image--radius-md");
    expect(inner).toHaveClass("wim-image--shadow");
    expect(inner).toHaveClass("wim-image--border");
  });

  it("applies width and height props", () => {
    const { container } = render(<Image src="test.jpg" alt="Test" width={500} height="300px" />);
    const figure = container.querySelector("figure");
    expect(figure).toHaveStyle({ maxWidth: "500px" });
    const img = screen.getByRole("img");
    expect(img).toHaveStyle({ height: "300px" });
  });

  it("applies fit prop", () => {
    render(<Image src="test.jpg" alt="Test" fit="contain" />);
    const img = screen.getByRole("img");
    expect(img).toHaveStyle({ objectFit: "contain" });
  });

  it("applies filter presets", () => {
    const { container } = render(
      <Image 
        src="test.jpg" 
        alt="Test" 
        filter={{ blur: "sm", grayscale: true, brightness: "md", contrast: "lg", sepia: "sm", saturate: "md", invert: "lg", opacity: "sm" }} 
      />
    );
    const figure = container.querySelector("figure");
    const style = figure?.getAttribute("style") || "";
    expect(style).toContain("--wim-image-filter: blur(4px) grayscale(100%) brightness(0.5) contrast(2) sepia(33%) saturate(2) invert(100%) opacity(0.8)");
  });

  it("applies hueRotate filter", () => {
    const { container } = render(<Image src="test.jpg" alt="Test" filter={{ hueRotate: "90" }} />);
    const figure = container.querySelector("figure");
    expect(figure?.getAttribute("style")).toContain("--wim-image-filter: hue-rotate(90deg)");
  });

  it("applies hoverFilter and backdropFilter", () => {
    const { container } = render(
      <Image 
        src="test.jpg" 
        alt="Test" 
        hoverFilter={{ blur: "md" }}
        backdropFilter={{ blur: "sm" }}
        hoverBackdropFilter={{ blur: "lg" }}
      />
    );
    const figure = container.querySelector("figure");
    const style = figure?.getAttribute("style") || "";
    expect(style).toContain("--wim-image-hover-filter: blur(8px)");
    expect(style).toContain("--wim-image-backdrop: blur(4px)");
    expect(style).toContain("--wim-image-hover-backdrop: blur(16px)");
  });

  it("applies noise effect", () => {
    const { container } = render(<Image src="test.jpg" alt="Test" noise="md" />);
    const figure = container.querySelector("figure");
    expect(figure?.getAttribute("style")).toContain("--wim-image-noise-opacity: 0.1");
    const inner = container.querySelector(".wim-image-inner");
    expect(inner).toHaveClass("wim-image--has-noise");
  });

  it("applies overlay settings", () => {
    const { container } = render(
      <Image 
        src="test.jpg" 
        alt="Test" 
        overlay={{ color: "red", intensity: "lg", blendMode: "multiply" }} 
      />
    );
    const figure = container.querySelector("figure");
    const style = figure?.getAttribute("style") || "";
    expect(style).toContain("--wim-image-overlay-color: red");
    expect(style).toContain("--wim-image-overlay-opacity: 0.9");
    expect(style).toContain("--wim-image-overlay-blend: multiply");
  });

  it("applies overlay with numeric intensity and showOnHover", () => {
    const { container } = render(
      <Image 
        src="test.jpg" 
        alt="Test" 
        overlay={{ intensity: 0.4, showOnHover: true }} 
      />
    );
    const figure = container.querySelector("figure");
    const style = figure?.getAttribute("style") || "";
    expect(style).toContain("--wim-image-overlay-opacity: 0");
    expect(style).toContain("--wim-image-overlay-hover-opacity: 0.4");
  });

  it("applies zoom effect", () => {
    const { container } = render(<Image src="test.jpg" alt="Test" zoom={1.2} />);
    const figure = container.querySelector("figure");
    expect(figure?.getAttribute("style")).toContain("--wim-image-zoom-scale: 1.2");
  });

  it("applies zoom boolean effect", () => {
    const { container } = render(<Image src="test.jpg" alt="Test" zoom />);
    const figure = container.querySelector("figure");
    expect(figure?.getAttribute("style")).toContain("--wim-image-zoom-scale: 1.05");
  });

  it("applies tilt effect on mouse move", () => {
    const { container } = render(<Image src="test.jpg" alt="Test" tilt />);
    const figure = container.querySelector("figure")!;
    
    // Resize figure to mock dimensions
    vi.spyOn(figure, "getBoundingClientRect").mockReturnValue({
      width: 200,
      height: 200,
      top: 0,
      left: 0,
      bottom: 200,
      right: 200,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    fireEvent.mouseMove(figure, { clientX: 150, clientY: 150 });
    expect(figure).toHaveStyle("transform: perspective(1000px) rotateX(-5deg) rotateY(5deg)");

    fireEvent.mouseLeave(figure);
    expect(figure).toHaveStyle("transform: perspective(1000px) rotateX(0deg) rotateY(0deg)");
  });

  it("renders duotone SVG filter", () => {
    const { container } = render(
      <Image src="test.jpg" alt="Test" duotone={{ light: "#ffffff", dark: "#000000" }} />
    );
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    const filter = svg?.querySelector("filter");
    expect(filter).toBeInTheDocument();
    const matrix = filter?.querySelector("feColorMatrix");
    expect(matrix).toHaveAttribute("type", "matrix");
    // #ffffff -> 1,1,1, #000000 -> 0,0,0
    // l.r - d.r = 1-0 = 1
    expect(matrix?.getAttribute("values")).toContain("1 0 0 0 0");
  });

  it("applies fadeIn effect class", () => {
    const { container } = render(<Image src="test.jpg" alt="Test" fadeIn />);
    const inner = container.querySelector(".wim-image-inner");
    expect(inner).toHaveClass("wim-image--fade-in");
  });

  it("applies blendMode and bgColor", () => {
    const { container } = render(<Image src="test.jpg" alt="Test" blendMode="screen" bgColor="blue" />);
    const figure = container.querySelector("figure");
    const style = figure?.getAttribute("style") || "";
    expect(style).toContain("--wim-image-blend-mode: screen");
    expect(style).toContain("--wim-image-bg-color: blue");
  });

  it("passes native props and priority to img", () => {
    render(<Image src="test.jpg" alt="Test" priority data-custom="test" />);
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("fetchpriority", "high");
    expect(img).toHaveAttribute("data-custom", "test");
  });

  it("handles transition preset none", () => {
    const { container } = render(<Image src="test.jpg" alt="Test" transition="none" />);
    const figure = container.querySelector("figure");
    expect(figure?.getAttribute("style")).toContain("--wim-image-transition-duration: 0s");
  });
});
