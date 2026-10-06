import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ButtonGroup } from "./ButtonGroup";
import styles from "./button-group.module.scss";

describe("ButtonGroup", () => {
  it("renders children", () => {
    render(
      <ButtonGroup>
        <button>Button 1</button>
        <button>Button 2</button>
      </ButtonGroup>,
    );
    expect(screen.getByText("Button 1")).toBeInTheDocument();
    expect(screen.getByText("Button 2")).toBeInTheDocument();
  });

  it("applies gap style", () => {
    const { container } = render(
      <ButtonGroup gap="20px">
        <button>Btn</button>
      </ButtonGroup>,
    );
    const group = container.firstChild as HTMLElement;
    expect(group.style.gap).toBe("20px");
  });

  it("applies joined class and no gap when joined=true", () => {
    const { container } = render(
      <ButtonGroup joined>
        <button>Btn</button>
      </ButtonGroup>,
    );
    const group = container.firstChild as HTMLElement;
    expect(group).toHaveClass(styles.joined);
    expect(group.style.gap).toBe("");
  });

  it("defaults justify to start", () => {
    render(
      <ButtonGroup>
        <button>Btn</button>
      </ButtonGroup>,
    );
    expect(screen.getByRole("button").parentElement).toHaveAttribute("data-justify", "start");
  });

  it.each(["center", "end", "stretch"] as const)("reflects justify=%s", (justify) => {
    render(
      <ButtonGroup justify={justify}>
        <button>Btn</button>
      </ButtonGroup>,
    );
    expect(screen.getByRole("button").parentElement).toHaveAttribute("data-justify", justify);
  });

  it("applies variant to child elements", () => {
    render(
      <ButtonGroup variant="solid">
        <button>Btn</button>
      </ButtonGroup>,
    );
    expect(screen.getByText("Btn")).toBeInTheDocument();
  });

  it("skips non-element children when variant is set", () => {
    render(
      <ButtonGroup variant="outline">
        {"text"}
        <button>Btn</button>
      </ButtonGroup>,
    );
    expect(screen.getByText("Btn")).toBeInTheDocument();
  });

  // joined の solid は面が同色で境目が消えるので、solid の子に区切りのための印を付ける。
  it("marks solid children of a joined group so a divider can sit between them", () => {
    render(
      <ButtonGroup joined variant="solid">
        <button className="own">One</button>
        <button>Two</button>
      </ButtonGroup>,
    );
    expect(screen.getByText("One")).toHaveClass("own", styles.solidItem);
    expect(screen.getByText("Two")).toHaveClass(styles.solidItem);
  });

  it("marks only the children that are solid when the group has no variant", () => {
    const Child = ({ variant, className }: { variant?: string; className?: string }) => (
      <button className={className}>{variant}</button>
    );
    render(
      <ButtonGroup joined>
        <Child variant="solid" />
        <Child variant="outline" />
      </ButtonGroup>,
    );
    expect(screen.getByText("solid")).toHaveClass(styles.solidItem);
    expect(screen.getByText("outline")).not.toHaveClass(styles.solidItem);
  });

  it("does not mark children when the group is not joined", () => {
    render(
      <ButtonGroup variant="solid">
        <button>Loose</button>
      </ButtonGroup>,
    );
    expect(screen.getByText("Loose")).not.toHaveClass(styles.solidItem);
  });

  it("applies custom className", () => {
    const { container } = render(
      <ButtonGroup className="my-group">
        <button>Btn</button>
      </ButtonGroup>,
    );
    expect(container.firstChild).toHaveClass("my-group");
  });

  it("supports asChild prop", () => {
    render(
      <ButtonGroup asChild>
        <section data-testid="group-slot">
          <button>Btn</button>
        </section>
      </ButtonGroup>,
    );
    const element = screen.getByTestId("group-slot");
    expect(element.tagName).toBe("SECTION");
    expect(element).toHaveClass(styles.root);
  });
});
