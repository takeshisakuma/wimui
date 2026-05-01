import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { StreamingText } from "./StreamingText";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

describe("StreamingText", () => {
  it("renders markdown content as HTML", () => {
    render(<StreamingText content="**bold text**" />);
    expect(screen.getByText("bold text")).toBeInTheDocument();
  });

  it("shows a cursor when isStreaming is true", () => {
    const { container } = render(<StreamingText content="Typing..." isStreaming />);
    expect(container.querySelector("[aria-hidden='true']")).toBeInTheDocument();
  });

  it("hides the cursor when isStreaming is false", () => {
    const { container } = render(<StreamingText content="Done" />);
    expect(container.querySelector("[aria-hidden='true']")).not.toBeInTheDocument();
  });

  it("sets aria-live when streaming", () => {
    const { container } = render(<StreamingText content="..." isStreaming />);
    expect(container.firstChild).toHaveAttribute("aria-live", "polite");
  });

  it("does not set aria-live when not streaming", () => {
    const { container } = render(<StreamingText content="Done" />);
    expect(container.firstChild).not.toHaveAttribute("aria-live");
  });

  it("applies className to the root element", () => {
    const { container } = render(<StreamingText content="" className="custom" />);
    expect(container.firstChild).toHaveClass("custom");
  });
});
