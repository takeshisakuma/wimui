import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { List, ListItem } from "./List";
import styles from "./list.module.scss";

describe("List", () => {
  it("renders list items", () => {
    render(
      <List>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
      </List>,
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("renders as ol when using asChild", () => {
    const { container } = render(
      <List asChild>
        <ol>
          <ListItem>Item 1</ListItem>
        </ol>
      </List>,
    );
    expect(container.querySelector("ol")).toBeInTheDocument();
  });

  it("applies small size class", () => {
    const { container } = render(<List size="sm"><ListItem>X</ListItem></List>);
    expect(container.querySelector(`.${styles.sm}`)).toBeInTheDocument();
  });

  it("applies large size class", () => {
    const { container } = render(<List size="lg"><ListItem>X</ListItem></List>);
    expect(container.querySelector(`.${styles.lg}`)).toBeInTheDocument();
  });

  it("applies medium size class by default", () => {
    const { container } = render(<List><ListItem>X</ListItem></List>);
    expect(container.querySelector(`.${styles.md}`)).toBeInTheDocument();
  });

  it("applies spacing classes", () => {
    const { container: c1 } = render(<List spacing="tight"><ListItem>X</ListItem></List>);
    expect(c1.firstChild).toHaveClass(styles["spacing-tight"]);

    const { container: c2 } = render(<List spacing="loose"><ListItem>X</ListItem></List>);
    expect(c2.firstChild).toHaveClass(styles["spacing-loose"]);
  });

  it("renders ListItem with left icon", () => {
    const { container } = render(
      <List>
        <ListItem iconName="SearchIcon" iconPosition="left">Item</ListItem>
      </List>,
    );
    // 位置は DOM の前後で表す（間隔は `.item.withIcon .itemContent` の gap）。
    // 以前は位置クラスの有無を見ていたが、そのクラスには実体が無く、
    // **スタイルの当たらないクラスが付いていること**を固定していただけだった（T58）。
    const content = container.querySelector(`.${styles.itemContent}`)!;
    expect(content.firstElementChild).toHaveClass(styles.iconContainer);
  });

  it("renders ListItem with right icon", () => {
    const { container } = render(
      <List>
        <ListItem iconName="SearchIcon" iconPosition="right">Item</ListItem>
      </List>,
    );
    const content = container.querySelector(`.${styles.itemContent}`)!;
    expect(content.lastElementChild).toHaveClass(styles.iconContainer);
  });

  it("renders ListItem with non-string children", () => {
    render(
      <List>
        <ListItem><span data-testid="inner">JSX Child</span></ListItem>
      </List>,
    );
    expect(screen.getByTestId("inner")).toBeInTheDocument();
  });

  it("applies custom className to List", () => {
    const { container } = render(<List className="my-list"><ListItem>X</ListItem></List>);
    expect(container.querySelector(".my-list")).toBeInTheDocument();
  });

  it("supports asChild on List", () => {
    render(
      <List asChild>
        <div data-testid="list-slot">
          <ListItem>Item 1</ListItem>
        </div>
      </List>
    );
    const element = screen.getByTestId("list-slot");
    expect(element.tagName).toBe("DIV");
    expect(element).toHaveClass(styles.root);
  });

  it("supports asChild on ListItem", () => {
    render(
      <List>
        <ListItem asChild>
          <div data-testid="item-slot">Item 1</div>
        </ListItem>
      </List>
    );
    const element = screen.getByTestId("item-slot");
    expect(element.tagName).toBe("DIV");
    expect(element).toHaveClass(styles.item);
  });

  it("applies bordered class", () => {
    const { container } = render(
      <List bordered>
        <ListItem>X</ListItem>
      </List>,
    );
    expect(container.firstChild).toHaveClass(styles.bordered);
  });

  it("paints bordered markers with ::before so block children stay on the first line (T183)", () => {
    const scss = readFileSync(
      "src/components/data-display/List/list.module.scss",
      "utf8",
    );
    expect(scss).not.toMatch(/list-style-position:\s*inside/);
    expect(scss).not.toMatch(/text-indent:\s*-1rem/);
    expect(scss).toMatch(/\.item:not\(\.withIcon\)::before/);
    expect(scss).toMatch(
      /inset-inline:\s*auto\s+calc\(100% - var\(--wim-spacing-5xl\) \+ var\(--wim-spacing-sm\)\)/,
    );
    expect(scss).not.toMatch(
      /inset-inline-start:\s*var\(--wim-spacing-md\)/,
    );
  });
});
