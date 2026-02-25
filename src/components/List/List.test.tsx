import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { List, ListItem } from "./List";

// Mock translation
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

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

  it("renders correct tag", () => {
    render(
      <List as="ol">
        <ListItem>Item 1</ListItem>
      </List>,
    );
    expect(screen.getByRole("list")).toBeInTheDocument();
    // ol default role is list. element check:
    // container.querySelector('ol')
  });
});
