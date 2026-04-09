import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card, CardHeader, CardBody, CardFooter } from "./Card";
import styles from "./card.module.scss";

describe("Card", () => {
  it("renders children", () => {
    render(<Card>Content</Card>);
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("applies variant styles", () => {
    const { container } = render(<Card variant="outline" />);
    expect(container.firstChild).toHaveClass(styles.outline);
  });

  it("applies padding and radius", () => {
    const { container } = render(<Card padding="lg" radius="none" />);
    expect(container.firstChild).toHaveClass(styles["padding-lg"]);
    expect(container.firstChild).toHaveClass(styles["radius-none"]);
  });

  it("renders composed components correctly", () => {
    render(
      <Card>
        <CardHeader>Header</CardHeader>
        <CardBody>Body</CardBody>
        <CardFooter>Footer</CardFooter>
      </Card>,
    );
    expect(screen.getByText("Header")).toHaveClass(styles.header);
    expect(screen.getByText("Body")).toHaveClass(styles.body);
    expect(screen.getByText("Footer")).toHaveClass(styles.footer);
  });

  it("renders as custom element", () => {
    const { container } = render(<Card as="section">Content</Card>);
    expect(container.querySelector("section")).toBeInTheDocument();
  });
});
