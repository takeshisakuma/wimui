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

  it("applies size and color", () => {
    const { container } = render(
      <Icon name="CircleIcon" size="lg" color="primary" />,
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveClass(styles.lg);
    expect(svg).toHaveClass(styles.primary);
  });

  it("returns null if name not found", () => {
    // @ts-expect-error: Testing invalid icon name behavior
    const { container } = render(<Icon name="NonExistentIcon" />);
    expect(container.firstChild).toBeNull();
  });
});
