import { render, screen } from "@testing-library/react";

import { describe, it, expect } from "vitest";
import { Masonry } from "./Masonry";

describe("Masonry", () => {
  it("renders masonry with children", () => {
    const { container } = render(
      <Masonry columns={3}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </Masonry>,
    );
    const masonry = container.firstChild as HTMLElement;
    expect(masonry).toBeInTheDocument();
    expect(masonry.style.columnCount).toBe("3");
    expect(screen.getAllByTestId("masonry-item")).toHaveLength(3);
  });

  it("applies custom spacing", () => {
    const { container } = render(
      <Masonry spacing={20}>
        <div>Item</div>
      </Masonry>,
    );
    const masonry = container.firstChild as HTMLElement;
    expect(masonry.style.columnGap).toBe("20px");
    const item = screen.getByTestId("masonry-item");
    expect(item.style.marginBottom).toBe("20px");
  });

  // 既定の間隔が px 直書きだと、`--wim-spacing-*` を差し替えたテーマでもここだけ
  // 16px のまま残る（必須ルール 4）。`2xl` = 1rem なので見た目は変わらない。
  it("spaces items with a token by default", () => {
    const { container } = render(
      <Masonry>
        <div>Item</div>
      </Masonry>,
    );
    const masonry = container.firstChild as HTMLElement;
    expect(masonry.style.columnGap).toBe("var(--wim-spacing-2xl)");
    expect(screen.getByTestId("masonry-item").style.marginBottom).toBe(
      "var(--wim-spacing-2xl)",
    );
  });

  it("accepts a token name for spacing", () => {
    const { container } = render(
      <Masonry spacing="md">
        <div>Item</div>
      </Masonry>,
    );
    expect((container.firstChild as HTMLElement).style.columnGap).toBe(
      "var(--wim-spacing-md)",
    );
  });

  it("skips non-element children", () => {
    render(
      <Masonry>
        {"text node"}
        <div>Element</div>
      </Masonry>,
    );
    expect(screen.getAllByTestId("masonry-item")).toHaveLength(1);
  });

});
