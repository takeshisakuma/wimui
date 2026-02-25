import { render } from "@testing-library/react";
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
    expect(masonry).toHaveClass("wim-masonry");
    expect(masonry.style.columnCount).toBe("3");
    expect(container.querySelectorAll(".wim-masonry-item")).toHaveLength(3);
  });

  it("applies custom spacing", () => {
    const { container } = render(
      <Masonry spacing={20}>
        <div>Item</div>
      </Masonry>,
    );
    const masonry = container.firstChild as HTMLElement;
    expect(masonry.style.columnGap).toBe("20px");
    const item = container.querySelector(".wim-masonry-item") as HTMLElement;
    expect(item.style.marginBottom).toBe("20px");
  });
});
