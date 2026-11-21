import type React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { SkipLink } from "./SkipLink";

describe("SkipLink", () => {
  it("renders a link to #main with the built-in label", () => {
    render(<SkipLink />);
    const link = screen.getByRole("link", { name: "Skip to main content" });
    expect(link).toHaveAttribute("href", "#main");
  });

  it("uses children as the label", () => {
    render(<SkipLink href="#content">Skip navigation</SkipLink>);
    expect(screen.getByRole("link", { name: "Skip navigation" })).toHaveAttribute("href", "#content");
  });

  // 素の #id への移動は、フォーカスできない飛び先だとフォーカスが動かない。直接移す
  it("moves focus to the target and makes a non-focusable target focusable", () => {
    render(
      <>
        <SkipLink href="#content" />
        <div id="content">Content</div>
      </>,
    );
    const target = screen.getByText("Content");
    const link = screen.getByRole("link");
    const event = fireEvent.click(link);
    expect(event).toBe(false); // preventDefault: URL の # を書き換えない
    expect(target).toHaveFocus();
    expect(target).toHaveAttribute("tabindex", "-1");
  });

  it("keeps an existing tabindex on the target", () => {
    render(
      <>
        <SkipLink href="#content" />
        <main id="content" tabIndex={0}>Content</main>
      </>,
    );
    fireEvent.click(screen.getByRole("link"));
    const target = screen.getByRole("main");
    expect(target).toHaveFocus();
    expect(target).toHaveAttribute("tabindex", "0");
  });

  it("leaves the default navigation alone when the target does not exist", () => {
    render(<SkipLink href="#missing" />);
    expect(fireEvent.click(screen.getByRole("link"))).toBe(true);
  });

  it("does not move focus when onClick prevents default", () => {
    const onClick = vi.fn((e: React.MouseEvent) => e.preventDefault());
    render(
      <>
        <SkipLink href="#content" onClick={onClick} />
        <div id="content">Content</div>
      </>,
    );
    fireEvent.click(screen.getByRole("link"));
    expect(onClick).toHaveBeenCalled();
    expect(screen.getByText("Content")).not.toHaveFocus();
  });

  it("supports asChild", () => {
    render(
      <>
        <SkipLink asChild href="#content">
          <a href="#content" data-testid="child">Child</a>
        </SkipLink>
        <div id="content">Content</div>
      </>,
    );
    const child = screen.getByTestId("child");
    expect(child).toHaveClass("wim-skip-link");
    fireEvent.click(child);
    expect(screen.getByText("Content")).toHaveFocus();
  });
});
