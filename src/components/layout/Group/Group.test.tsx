import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Group } from "./Group";

describe("Group", () => {
  it("renders children", () => {
    render(
      <Group>
        <div>Item 1</div>
        <div>Item 2</div>
      </Group>,
    );
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  // 既定の gap が px 直書きだと、`--wim-spacing-*` を差し替えたテーマでもここだけ
  // 16px のまま残る（必須ルール 4）。`2xl` = 1rem なので見た目は変わらない。
  it("uses a spacing token for the default gap", () => {
    const { container } = render(
      <Group>
        <div>Only child</div>
      </Group>,
    );
    expect((container.firstChild as HTMLElement).style.gap).toBe(
      "var(--wim-spacing-2xl)",
    );
  });

  it("applies grow styles to children", () => {
    render(
      <Group grow>
        <div data-testid="item">Item 1</div>
      </Group>,
    );
    const item = screen.getByTestId("item");
    expect(item).toHaveStyle({ flexGrow: "1" });
  });
});
