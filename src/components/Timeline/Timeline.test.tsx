import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelinePoint,
  TimelineContent,
  TimelineOppositeContent,
} from "./Timeline";

describe("Timeline", () => {
  it("renders timeline items correctly", () => {
    render(
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent>09:00 AM</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelinePoint />
            <TimelineConnector />
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
        <TimelineItem>Test</TimelineItem>
      </Timeline>,
    );
    expect(container.firstChild).toHaveClass("wim-timeline--alternate");
    expect(container.querySelector(".wim-timeline-item")).toHaveClass(
      "wim-timeline-item--alternate",
    );
  });

  it("applies variant classes to points", () => {
    const { container } = render(<TimelinePoint variant="success" />);
    expect(container.firstChild).toHaveClass("wim-timeline-point--success");
  });
});
