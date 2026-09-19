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

  it("applies trend direction classes", () => {
    const { container } = render(
      <Stats.Trend direction="down">-5%</Stats.Trend>,
    );
    expect(container.firstChild).toHaveClass(styles.down);
  });

  // T250 ②。Stats は Card へ委譲しているが**既定値は自前で持っている**ので、
  // Card だけ直しても Stats は elevated を明示的に渡し続ける。両方を固定する。
  it("defaults to the outline variant, not elevated", () => {
    const { container } = render(<Stats>plain</Stats>);
    expect(container.firstChild).toHaveClass("outline");
    expect(container.firstChild).not.toHaveClass("elevated");
  });
});
