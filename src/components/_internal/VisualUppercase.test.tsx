import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { VisualUppercase } from "./VisualUppercase";

describe("VisualUppercase", () => {
  it("hides the uppercase copy and reads the original text", () => {
    render(
      <h2>
        <VisualUppercase>Recent files</VisualUppercase>
      </h2>,
    );
    // 名前は元の大小のまま（大文字の見た目の文字は aria-hidden）
    expect(screen.getByRole("heading", { name: "Recent files" })).toBeInTheDocument();
    // 見た目用の写しは読み上げから外れている
    expect(screen.getByText("Recent files", { selector: "[aria-hidden='true']" })).toBeInTheDocument();
  });

  it("does not render element children twice", () => {
    render(
      <h2>
        <VisualUppercase>
          <a href="#x" id="only-once">
            Docs
          </a>
        </VisualUppercase>
      </h2>,
    );
    expect(screen.getAllByRole("link", { name: "Docs" })).toHaveLength(1);
    expect(document.querySelectorAll("#only-once")).toHaveLength(1);
  });
});
