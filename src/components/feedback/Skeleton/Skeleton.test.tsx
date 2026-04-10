import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Skeleton } from "./Skeleton";

describe("Skeleton", () => {
  it("renders with default pulse animation and text variant", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveClass(/root/);
    expect(container.firstChild).toHaveClass(/text/);
    expect(container.firstChild).toHaveClass(/pulse/);
  });

  it("renders circle variant", () => {
    const { container } = render(<Skeleton variant="circle" />);
    expect(container.firstChild).toHaveClass(/circle/);
  });

  it("applies height and width", () => {
    const { container } = render(<Skeleton width={100} height={50} />);
    const skeleton = container.firstChild as HTMLElement;
    expect(skeleton.style.width).toBe("100px");
    expect(skeleton.style.height).toBe("50px");
  });

  it("applies wave animation class", () => {
    const { container } = render(<Skeleton animation="wave" />);
    expect(container.firstChild).toHaveClass(/wave/);
  });

  it("has aria-hidden and aria-busy by default", () => {
    const { container } = render(<Skeleton />);
    expect(container.firstChild).toHaveAttribute("aria-hidden", "true");
    expect(container.firstChild).toHaveAttribute("aria-busy", "true");
  });

  it("applies no animation class when animation is none", () => {
    const { container } = render(<Skeleton animation="none" />);
    expect(container.firstChild).not.toHaveClass(/pulse/);
    expect(container.firstChild).not.toHaveClass(/wave/);
  });
});
