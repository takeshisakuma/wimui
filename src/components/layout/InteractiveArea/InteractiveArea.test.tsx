import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { InteractiveArea } from "./InteractiveArea";

const scss = fs.readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), "interactive-area.module.scss"),
  "utf8",
);

describe("InteractiveArea", () => {
  it("renders title and description", () => {
    render(<InteractiveArea title="Title" description="Description" />);
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders icon and actions", () => {
    render(
      <InteractiveArea
        icon={<span data-testid="icon">Icon</span>}
        actions={<button>Action</button>}
      />
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });

  it("handles clicks when isClickable is true", () => {
    const onClick = vi.fn();
    render(<InteractiveArea isClickable onClick={onClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
  });

  it("does not handle clicks when disabled", () => {
    const onClick = vi.fn();
    const { container } = render(<InteractiveArea isClickable disabled onClick={onClick} />);
    const area = container.firstChild as HTMLElement;
    
    expect(area).not.toHaveAttribute("role", "button");
    expect(area).not.toHaveAttribute("tabIndex");
    
    fireEvent.click(area);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("applies variant attributes", () => {
    const { container } = render(<InteractiveArea variant="solid" bgVariant="muted" size="lg" />);
    const area = container.firstChild as HTMLElement;
    expect(area).toHaveAttribute("data-variant", "solid");
    expect(area).toHaveAttribute("data-bg-variant", "muted");
    expect(area).toHaveAttribute("data-size", "lg");
  });


  it("triggers onClick with Enter key when isClickable", () => {
    const onClick = vi.fn();
    render(<InteractiveArea isClickable onClick={onClick} />);
    fireEvent.keyDown(screen.getByRole("button"), { key: "Enter" });
    expect(onClick).toHaveBeenCalled();
  });

  it("triggers onClick with Space key when isClickable", () => {
    const onClick = vi.fn();
    render(<InteractiveArea isClickable onClick={onClick} />);
    fireEvent.keyDown(screen.getByRole("button"), { key: " " });
    expect(onClick).toHaveBeenCalled();
  });

  it("calls custom onKeyDown handler", () => {
    const onKeyDown = vi.fn();
    render(<InteractiveArea isClickable onKeyDown={onKeyDown} />);
    fireEvent.keyDown(screen.getByRole("button"), { key: "Tab" });
    expect(onKeyDown).toHaveBeenCalled();
  });

  it("does not trigger onClick when disabled and Enter pressed", () => {
    const onClick = vi.fn();
    const { container } = render(<InteractiveArea isClickable disabled onClick={onClick} />);
    const area = container.firstChild as HTMLElement;
    fireEvent.keyDown(area, { key: "Enter" });
    expect(onClick).not.toHaveBeenCalled();
  });

  it("centres by default and switches to start alignment on demand", () => {
    const { container, rerender } = render(<InteractiveArea title="Title" />);
    const area = container.firstChild as HTMLElement;
    expect(area).toHaveAttribute("data-align", "center");
    expect(area).toHaveClass("alignCenter");

    rerender(<InteractiveArea title="Title" align="start" />);
    expect(container.firstChild).toHaveAttribute("data-align", "start");
    expect(container.firstChild).toHaveClass("alignStart");
  });

  // クラス名は CSS モジュールのプロキシが返すだけなので、**揃えの実体が SCSS に
  // 在ること**は綴りではなく file を読んで確かめる（`styles.x` は常に "x" を返す）。
  it("defines both alignments in the stylesheet, and no centring outside them", () => {
    expect(scss).toMatch(/&\.alignCenter[\s\S]*align-items:\s*center/);
    expect(scss).toMatch(/&\.alignStart[\s\S]*align-items:\s*flex-start/);
    // `.inner` / `.text` / `.actions` の既定に揃えを書き戻すと、`align="start"` でも
    // 中身だけ中央に残る（この部品はそれで中央固定になっていた）。
    const inner = scss.slice(scss.indexOf("\n  .inner {"), scss.indexOf("\n  .icon {"));
    expect(inner).not.toMatch(/align-items:\s*center/);
    expect(inner).not.toMatch(/text-align:\s*center/);
  });

  it("sizes a bare SVG in the icon slot (T198)", () => {
    expect(scss).toMatch(/@layer component/);
    expect(scss).toMatch(/\.icon[\s\S]*& > \*[\s\S]*width:\s*1em/);
    expect(scss).toMatch(/\.icon[\s\S]*& > \*[\s\S]*height:\s*1em/);
    const layer = scss.indexOf("@layer component");
    const childWidth = scss.search(/& > \*[\s\S]*width:\s*1em/);
    expect(layer).toBeGreaterThanOrEqual(0);
    expect(childWidth).toBeGreaterThan(layer);
  });
});
