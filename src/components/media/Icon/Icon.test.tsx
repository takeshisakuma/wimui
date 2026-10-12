import { render } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Icon } from "./Icon";
import styles from "./icon.module.scss";

describe("Icon", () => {
  it("renders icon", () => {
    const { container } = render(<Icon name="CircleIcon" />);
    // Checking if SVG is rendered.
    // Implementation: <IconComponent className=... />
    // IconComponent is SVG.
    const svg = container.querySelector("svg");
    expect(svg).toBeInTheDocument();
    expect(svg).toHaveClass(styles.root);
  });

  it("hides an unnamed icon from assistive technology", () => {
    const { container } = render(<Icon name="CircleIcon" />);
    const svg = container.querySelector("svg");
    // 飾りのアイコンが読み上げの対象に残ると、ボタンの中で「グラフィック」とだけ読まれる
    expect(svg).toHaveAttribute("aria-hidden", "true");
    expect(svg).not.toHaveAttribute("role");
  });

  it("exposes a named icon as an image", () => {
    const { container, getByRole } = render(<Icon name="CircleIcon" aria-label="Status" />);
    expect(getByRole("img", { name: "Status" })).toBe(container.querySelector("svg"));
    expect(container.querySelector("svg")).not.toHaveAttribute("aria-hidden");
  });

  it("lets the caller override aria-hidden and role", () => {
    const { container } = render(<Icon name="CircleIcon" aria-hidden={false} role="presentation" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("aria-hidden", "false");
    expect(svg).toHaveAttribute("role", "presentation");
  });

  it("applies size and color", () => {
    const { container } = render(
      <Icon name="CircleIcon" size="lg" color="primary" />,
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass(styles["size-lg"]);
    expect(svg).toHaveClass(styles.primary);
  });

  it("returns null if name not found", () => {
    // @ts-expect-error: Testing invalid icon name behavior
    const { container } = render(<Icon name="NonExistentIcon" />);
    expect(container.firstChild).toBeNull();
  });

  // Text は `color="text-tertiary"`、Icon は `color="text-tertiary"` しか受け付けず、
  // 同じ色を指す prop で綴りが割れていた。Icon 側を Text に合わせて広げる。
  it("accepts the token vocabulary Text uses", () => {
    const { container } = render(<Icon name="CircleIcon" color="text-tertiary" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveStyle({ color: "var(--wim-color-text-tertiary)" });
  });

  it("still resolves the semantic names through a class", () => {
    const { container } = render(<Icon name="CircleIcon" color="secondary" />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass(styles.secondary);
    expect(svg?.getAttribute("style")).toBeNull();
  });

  it("keeps a caller's own style when resolving a token colour", () => {
    const { container } = render(
      <Icon name="CircleIcon" color="text-tertiary" style={{ opacity: 0.5 }} />,
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveStyle({ color: "var(--wim-color-text-tertiary)", opacity: "0.5" });
  });
});
