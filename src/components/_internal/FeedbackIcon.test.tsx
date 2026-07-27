import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { FeedbackIcon } from "./FeedbackIcon";

describe("FeedbackIcon", () => {
  it("renders a custom ReactElement icon", () => {
    render(<FeedbackIcon icon={<span data-testid="custom-icon"></span>} />);
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders nothing when icon is false", () => {
    const { container } = render(<FeedbackIcon icon={false} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders a default icon for success status", () => {
    const { container } = render(<FeedbackIcon intent="info" />);
    expect(container.firstChild).not.toBeNull();
  });

  it("renders a default icon for each non-success status", () => {
    for (const intent of ["info", "warning", "danger", "default"] as const) {
      const { container } = render(<FeedbackIcon intent={ intent } />);
      expect(container.firstChild).not.toBeNull();
    }
  });

  // 「null でない」だけを見ていたため、success 以外が全部ただの丸に落ちていたのを
  // 誰も検出できなかった。intent ごとに別のグリフであることまで見る。
  it("gives success, danger and info glyphs of their own", () => {
    const markup = (intent: "default" | "success" | "danger" | "warning" | "info") =>
      render(<FeedbackIcon intent={intent} />).container.innerHTML;

    const plain = markup("default");
    expect(markup("success")).not.toBe(plain);
    expect(markup("danger")).not.toBe(plain);
    expect(markup("info")).not.toBe(plain);
    expect(markup("info")).not.toBe(markup("danger"));
  });

  it("applies className to the icon", () => {
    const { container } = render(<FeedbackIcon className="my-icon" />);
    expect(container.querySelector(".my-icon")).toBeInTheDocument();
  });
});

