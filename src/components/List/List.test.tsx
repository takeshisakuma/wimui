import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { List, ListItem } from "./List";

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

  it("renders as ol when as=ol", () => {
    const { container } = render(
      <List as="ol">
        <ListItem>Item 1</ListItem>
      </List>,
    );
    expect(container.querySelector("ol")).toBeInTheDocument();
  });

  it("applies small size class", () => {
    const { container } = render(<List size="small"><ListItem>X</ListItem></List>);
    expect(container.querySelector(".wim-list--sm")).toBeInTheDocument();
  });

  it("applies large size class", () => {
    const { container } = render(<List size="large"><ListItem>X</ListItem></List>);
    expect(container.querySelector(".wim-list--lg")).toBeInTheDocument();
  });

  it("applies medium size class by default", () => {
    const { container } = render(<List><ListItem>X</ListItem></List>);
    expect(container.querySelector(".wim-list--md")).toBeInTheDocument();
  });

  it("applies spacing classes", () => {
    const { container: c1 } = render(<List spacing="tight"><ListItem>X</ListItem></List>);
    expect(c1.querySelector(".wim-list--spacing-tight")).toBeInTheDocument();

    const { container: c2 } = render(<List spacing="loose"><ListItem>X</ListItem></List>);
    expect(c2.querySelector(".wim-list--spacing-loose")).toBeInTheDocument();
  });

  it("renders ListItem with left icon", () => {
    const { container } = render(
      <List>
        <ListItem iconName="SearchIcon" iconPosition="left">Item</ListItem>
      </List>,
    );
    expect(container.querySelector(".wim-list__icon-container--left")).toBeInTheDocument();
  });

  it("renders ListItem with right icon", () => {
    const { container } = render(
      <List>
        <ListItem iconName="SearchIcon" iconPosition="right">Item</ListItem>
      </List>,
    );
    expect(container.querySelector(".wim-list__icon-container--right")).toBeInTheDocument();
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
});
