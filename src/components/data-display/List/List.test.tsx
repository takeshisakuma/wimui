import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
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
    expect(container.querySelector(`.${styles.iconContainer}.${styles.left}`)).toBeInTheDocument();
  });

  it("renders ListItem with right icon", () => {
    const { container } = render(
      <List>
        <ListItem iconName="SearchIcon" iconPosition="right">Item</ListItem>
      </List>,
    );
    expect(container.querySelector(`.${styles.iconContainer}.${styles.right}`)).toBeInTheDocument();
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
});
