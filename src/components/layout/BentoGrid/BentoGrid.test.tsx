import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { BentoGrid, BentoGridItem } from "./BentoGrid";

describe("BentoGrid", () => {
  it("renders children", () => {
    render(
      <BentoGrid>
        <div data-testid="child">Child Content</div>
      </BentoGrid>,
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<BentoGrid className="custom-grid" />);
    expect(container.firstChild?.firstChild).toHaveClass("custom-grid");
  });

  it("sets --wim-bento-row-height from the rowHeight prop", () => {
    const { container } = render(<BentoGrid rowHeight="13rem" />);
    const grid = container.firstChild?.firstChild as HTMLElement;
    expect(grid.style.getPropertyValue("--wim-bento-row-height")).toBe("13rem");
  });

  it("omits --wim-bento-row-height when rowHeight is not given (keeps the default)", () => {
    const { container } = render(<BentoGrid />);
    const grid = container.firstChild?.firstChild as HTMLElement;
    expect(grid.style.getPropertyValue("--wim-bento-row-height")).toBe("");
  });
});

describe("BentoGridItem", () => {
  it("renders title, description, and header", () => {
    render(
      <BentoGridItem
        title="Item Title"
        description="Item Description"
        header={<div data-testid="header">Header</div>}
        icon={<span data-testid="icon">Icon</span>}
      />,
    );
    expect(screen.getByText("Item Title")).toBeInTheDocument();
    expect(screen.getByText("Item Description")).toBeInTheDocument();
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<BentoGridItem className="custom-item" />);
    expect(container.firstChild).toHaveClass("custom-item");
  });

  // T249。span / rowSpan は**渡せるのに何も起きない**状態だった（生の文字列
  // クラスを className で渡しており、それを定義する CSS が repo に 1 行も無い）。
  // ここはクラス名が載ることまでしか見られない ── その名前の CSS が実在するかは
  // `check:prop-classes` が docgen の値 union と *.module.scss を突き合わせて見る。
  it("maps span and rowSpan onto the grid classes", () => {
    const { container } = render(<BentoGridItem span={2} rowSpan={2} />);
    expect(container.firstChild).toHaveClass("span-2");
    expect(container.firstChild).toHaveClass("row-2");
  });

  it("defaults to a single column and a single row", () => {
    const { container } = render(<BentoGridItem />);
    expect(container.firstChild).toHaveClass("span-1");
    expect(container.firstChild).toHaveClass("row-1");
  });
});
