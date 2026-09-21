import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Stats } from "./Stats";
import styles from "./stats.module.scss";

describe("Stats", () => {
  it("renders labels and values", () => {
    render(
      <Stats>
        <Stats.Label>Total Users</Stats.Label>
        <Stats.Value>1,234</Stats.Value>
        <Stats.Description>Past 30 days</Stats.Description>
        <Stats.Trend direction="up">+12%</Stats.Trend>
      </Stats>,
    );

    expect(screen.getByText("Total Users")).toBeInTheDocument();
    expect(screen.getByText("1,234")).toBeInTheDocument();
    expect(screen.getByText("Past 30 days")).toBeInTheDocument();
    expect(screen.getByText("+12%")).toBeInTheDocument();
  });

  it("derives the color from the direction when intent is not given", () => {
    const { container } = render(
      <Stats.Trend direction="down">-5%</Stats.Trend>,
    );
    expect(container.firstChild).toHaveAttribute("data-direction", "down");
    expect(container.firstChild).toHaveAttribute("data-intent", "danger");
    expect(container.firstChild).toHaveClass(styles.danger);
  });

  // T250 ④。以前は direction が矢印と色を同時に決め、「増えると悪い指標」の上昇が
  // 成功色で描かれた。intent は色だけを決め、矢印は direction のまま。
  it("lets intent set the color independently of the arrow", () => {
    const { container } = render(
      <Stats.Trend direction="up" intent="danger">+8% errors</Stats.Trend>,
    );
    expect(container.firstChild).toHaveAttribute("data-direction", "up");
    expect(container.firstChild).toHaveAttribute("data-intent", "danger");
    expect(container.firstChild).not.toHaveClass(styles.success);
  });

  it.each([
    ["up", "success"],
    ["down", "danger"],
    ["neutral", "neutral"],
  ] as const)("keeps the old color for direction=%s (%s)", (direction, intent) => {
    const { container } = render(<Stats.Trend direction={direction}>x</Stats.Trend>);
    expect(container.firstChild).toHaveAttribute("data-intent", intent);
  });

  // T250 ②。Stats は Card へ委譲しているが**既定値は自前で持っている**ので、
  // Card だけ直しても Stats は elevated を明示的に渡し続ける。両方を固定する。
  it("defaults to the outline variant, not elevated", () => {
    const { container } = render(<Stats>plain</Stats>);
    expect(container.firstChild).toHaveClass("outline");
    expect(container.firstChild).not.toHaveClass("elevated");
  });
});
