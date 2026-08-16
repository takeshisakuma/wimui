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

  it("sizes a bare SVG in the icon slot (T198)", () => {
    expect(scss).toMatch(/\.icon[\s\S]*& > \*[\s\S]*width:\s*1em/);
    expect(scss).toMatch(/\.icon[\s\S]*& > \*[\s\S]*height:\s*1em/);
  });
});
