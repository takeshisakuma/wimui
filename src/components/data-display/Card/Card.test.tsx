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
