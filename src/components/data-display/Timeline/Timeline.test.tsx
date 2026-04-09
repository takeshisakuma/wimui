import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelinePoint,
  TimelineContent,
  TimelineOppositeContent,
} from "./Timeline";
import styles from "./timeline.module.scss";

describe("Timeline", () => {
  it("renders timeline items correctly", () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent>09:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint />
          </TimelineSeparator>
          <TimelineContent>Eat Breakfast</TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>10:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint variant="primary" />
          </TimelineSeparator>
          <TimelineContent>Go to work</TimelineContent>
        </TimelineItem>
      </Timeline>,
    );

    expect(screen.getByText("Eat Breakfast")).toBeInTheDocument();
    expect(screen.getByText("09:00 AM")).toBeInTheDocument();
    expect(screen.getByText("Go to work")).toBeInTheDocument();
    expect(screen.getByText("10:00 AM")).toBeInTheDocument();
  });

  it("applies alignment classes", () => {
    const { container } = render(
      <Timeline align="alternate">
        <TimelineItem>Content</TimelineItem>
      </Timeline>,
    );
    expect(container.firstChild).toHaveClass(styles.alternate);
    expect(container.querySelector(`.${styles.item}`)).toHaveClass(
      styles.alternate,
    );
  });

  it("applies variant classes to points", () => {
    const { container } = render(<TimelinePoint variant="success" />);
    expect(container.firstChild).toHaveClass(styles.success);
  });

  it("handles non-element children in Timeline", () => {
    const { container } = render(
      <Timeline>
        <TimelineItem>Item 1</TimelineItem>
        {"Literal String"}
        {null}
      </Timeline>
    );
    expect(container.textContent).toContain("Item 1Literal String");
  });

  it("renders point with icon and custom class", () => {
    const { container } = render(
      <TimelinePoint>
        <span data-testid="icon" />
      </TimelinePoint>,
    );
    expect(container.firstChild).toHaveClass(styles.icon);
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });

  it("renders point with icon and custom class", () => {
    const { container } = render(
      <TimelinePoint className="custom-point">
        <span data-testid="icon" />
      </TimelinePoint>,
    );
    expect(container.firstChild).toHaveClass(styles.icon);
    expect(container.firstChild).toHaveClass("custom-point");
    expect(screen.getByTestId("icon")).toBeInTheDocument();
  });
});
