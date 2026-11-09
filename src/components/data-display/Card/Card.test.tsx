import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Card, CardHeader, CardBody, CardFooter, CardLink } from "./Card";
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

  it("renders as custom element via asChild", () => {
    const { container } = render(
      <Card asChild>
        <section>Content</section>
      </Card>,
    );
    expect(container.querySelector("section")).toBeInTheDocument();
  });

  // T250 ②。素で置いた Card が影を持たないことを固定する。クラス名を直書きする
  // のは、`styles.outline` が CSS Modules のプロキシで必ずキー名を返すため
  // （実在の証拠にならない）。面そのものは card.module.scss の `.outline` が
  // 実装している。
  it("defaults to the outline variant, not elevated", () => {
    const { container } = render(<Card>plain</Card>);
    expect(container.firstChild).toHaveClass("outline");
    expect(container.firstChild).not.toHaveClass("elevated");
  });
});

describe("Card.Link (T365)", () => {
  it("renders the main link without nesting the card's other controls in it", () => {
    render(
      <Card interactive>
        <Card.Link href="/orders/4281">Order 4281</Card.Link>
        <button type="button">Cancel</button>
      </Card>,
    );
    const link = screen.getByRole("link", { name: "Order 4281" });
    const button = screen.getByRole("button", { name: "Cancel" });
    expect(link).toHaveAttribute("href", "/orders/4281");
    expect(link).not.toContainElement(button);
  });

  it("is the same component as CardLink and renders a custom element with asChild", () => {
    expect(Card.Link).toBe(CardLink);
    render(
      <Card>
        <Card.Link asChild>
          <button type="button">Open</button>
        </Card.Link>
      </Card>,
    );
    expect(screen.getByRole("button", { name: "Open" })).toBeInTheDocument();
    expect(screen.queryByRole("link")).toBeNull();
  });
});
