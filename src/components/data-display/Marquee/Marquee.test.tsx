import { render, screen } from "@testing-library/react";
import { Marquee } from "./Marquee";
import { describe, it, expect } from "vitest";

describe("Marquee", () => {
  it("should render children multiple times", () => {
    render(
      <Marquee repeat={3}>
        <div data-testid="item">Item</div>
      </Marquee>,
    );
    expect(screen.getAllByTestId("item")).toHaveLength(3);
  });

  it("should apply correct styles for duration", () => {
    const { container } = render(
      <Marquee duration={10}>
        <div>Item</div>
      </Marquee>,
    );
    const marquee = container.firstChild as HTMLElement;
    expect(marquee.style.getPropertyValue("--duration")).toBe("10s");
  });

  // T265。ループのための複製は見た目だけのもの。以前は複製にも何も付けておらず、
  // 支援技術は同じ内容を repeat 回読み、中のリンクには Tab で repeat 回止まった。
  it("hides the looping copies from assistive technology and the tab order", () => {
    const { container } = render(
      <Marquee repeat={3}>
        <a href="#sponsor">Sponsor</a>
      </Marquee>,
    );
    expect(screen.getAllByRole("link", { name: "Sponsor" })).toHaveLength(1);
    const copies = Array.from((container.firstChild as HTMLElement).children);
    expect(copies).toHaveLength(3);
    expect(copies[0]).not.toHaveAttribute("aria-hidden");
    expect(copies[0]).not.toHaveAttribute("inert");
    for (const c of copies.slice(1)) {
      expect(c).toHaveAttribute("aria-hidden", "true");
      expect(c).toHaveAttribute("inert");
    }
  });
});
