import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { Divider } from "./Divider";

const scss = fs.readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "divider.module.scss"),
  "utf8",
);

describe("Divider", () => {
  it("renders horizontal divider by default", () => {
    render(<Divider data-testid="divider" />);
    const divider = screen.getByTestId("divider");
    expect(divider).toHaveAttribute("aria-orientation", "horizontal");
  });

  it("renders vertical divider", () => {
    render(<Divider orientation="vertical" data-testid="v-divider" />);
    const divider = screen.getByTestId("v-divider");
    expect(divider).toHaveAttribute("aria-orientation", "vertical");
  });

  // 既定は `1`（px）の直書きだった。変数を置かずに済ませ、太さは SCSS の
  // フォールバックでトークンから取る（必須ルール 4）。
  it("leaves the thickness to the theme unless it is given", () => {
    render(<Divider data-testid="divider" />);
    const divider = screen.getByTestId("divider");
    expect(divider.style.getPropertyValue("--wim-divider-thickness")).toBe("");
    expect(scss).toMatch(
      /var\(--wim-divider-thickness,\s*var\(--wim-border-width-thin\)\)/,
    );
    expect(scss).not.toMatch(/var\(--wim-divider-thickness,\s*\d/);
  });

  it("sets the custom property when thickness is given", () => {
    render(<Divider thickness={3} data-testid="divider" />);
    expect(
      screen.getByTestId("divider").style.getPropertyValue("--wim-divider-thickness"),
    ).toBe("3px");
  });
});
