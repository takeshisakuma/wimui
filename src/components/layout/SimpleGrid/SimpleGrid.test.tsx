import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { SimpleGrid } from "./SimpleGrid";
import styles from "./simple-grid.module.scss";

describe("SimpleGrid", () => {
  it("renders children in grid layout", () => {
    render(
      <SimpleGrid cols={3}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </SimpleGrid>,
    );
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("applies correct grid style for columns", () => {
    const { container } = render(<SimpleGrid cols={4} />);
    const grid = container.querySelector(`.${styles.root}`) as HTMLElement;
    expect(grid).toHaveStyle({
      "--wim-simple-grid-cols": "repeat(4, minmax(0, 1fr))",
    });
  });

  // 既定の間隔が px 直書きだと、`--wim-spacing-*` を差し替えたテーマでもここだけ
  // 16px のまま残る（必須ルール 4）。`2xl` = 1rem なので見た目は変わらない。
  it("uses a spacing token for the default gap", () => {
    const { container } = render(<SimpleGrid cols={2} />);
    const grid = container.querySelector(`.${styles.root}`) as HTMLElement;
    expect(grid.style.gap).toBe("var(--wim-spacing-2xl)");
    expect(grid.style.rowGap).toBe("var(--wim-spacing-2xl)");
  });

  it("applies minChildWidth if provided", () => {
    const { container } = render(<SimpleGrid minChildWidth={200} />);
    const grid = container.querySelector(`.${styles.root}`) as HTMLElement;
    expect(grid.style.gridTemplateColumns).toBe(
      "repeat(auto-fill, minmax(200px, 1fr))",
    );
  });

  it("applies string minChildWidth", () => {
    const { container } = render(<SimpleGrid minChildWidth="20rem" />);
    const grid = container.querySelector(`.${styles.root}`) as HTMLElement;
    expect(grid.style.gridTemplateColumns).toBe(
      "repeat(auto-fill, minmax(20rem, 1fr))",
    );
  });
});
