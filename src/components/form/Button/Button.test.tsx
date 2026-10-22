import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Button } from "./Button";
import styles from "./button.module.scss";

// Mock Icon because it might use assets/etc
vi.mock("../../media/Icon/Icon", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid="icon">{name}</span>,
}));

describe("Button", () => {
  it("renders with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = vi.fn();
    const { container } = render(
      <Button onClick={handleClick} disabled>Click me</Button>,
    );
    expect(container.querySelector("button")).toBeDisabled();
    fireEvent.click(screen.getByText("Click me"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies correct classes for size and variant", () => {
    const { container } = render(
      <Button size="lg" variant="solid">Test</Button>,
    );
    const button = container.querySelector("button")!;
    expect(button).toHaveClass(styles.lg);
    expect(button).toHaveClass(styles.solid);
  });

  it("applies custom className", () => {
    const { container } = render(
      <Button className="custom-class">Test</Button>,
    );
    const button = container.querySelector("button")!;
    expect(button).toHaveClass("custom-class");
  });

  it("renders icon only when no label", () => {
    const { container } = render(<Button icon="SearchIcon" />);
    const button = container.querySelector("button")!;
    expect(button).toHaveClass(styles.iconOnly);
    expect(screen.getByTestId("icon")).toHaveTextContent("SearchIcon");
  });

  it("renders icon via icon prop (JSX element)", () => {
    const { container } = render(
      <Button icon={<span data-testid="custom-icon">★</span>}>Search</Button>,
    );
    const button = container.querySelector("button")!;
    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
    expect(button).not.toHaveClass(styles.iconOnly);
  });

  it("applies fullWidth class", () => {
    const { container } = render(<Button fullWidth>Full</Button>);
    const button = container.querySelector("button")!;
    expect(button).toHaveClass(styles.fullWidth);
  });

  it("does not apply fullWidth class by default", () => {
    const { container } = render(<Button>Normal</Button>);
    const button = container.querySelector("button")!;
    expect(button).not.toHaveClass(styles.fullWidth);
  });

  it("handles loading state properly", () => {
    const { container } = render(<Button loading>Load</Button>);
    const button = container.querySelector("button")!;
    expect(button).toHaveClass(styles.loading);
    expect(button).toHaveAttribute("aria-busy", "true");
    // 見えている文字を名前に残し、読み込み中は後ろに足す（WCAG 2.5.3）
    expect(button).not.toHaveAttribute("aria-label");
    expect(button).toHaveAccessibleName("Load Loading");
    expect(button).toBeDisabled();
  });

  it("names an icon-only loading button Loading", () => {
    const { container } = render(<Button loading icon={<span />} />);
    expect(container.querySelector("button")).toHaveAttribute("aria-label", "Loading");
  });

  it("calculates animated width on label change", () => {
    // We must mock getBoundingClientRect
    const originalRequestAnimationFrame = window.requestAnimationFrame;
    const originalCancelAnimationFrame = window.cancelAnimationFrame;
    window.requestAnimationFrame = (cb) => {
      cb(0);
      return 1;
    };
    window.cancelAnimationFrame = vi.fn();

    const { rerender, container } = render(<Button animateWidth>Initial</Button>);
    const button = container.querySelector("button") as HTMLButtonElement;
    
    // Mock getBoundingClientRect
    button.getBoundingClientRect = vi.fn().mockReturnValue({ width: 100 });

    // Rerender with new label to trigger effect
    rerender(<Button animateWidth>Updated</Button>);

    expect(button).toHaveStyle({ width: "102px" }); // targetWidth is 100 + 2=102

    window.requestAnimationFrame = originalRequestAnimationFrame;
    window.cancelAnimationFrame = originalCancelAnimationFrame;
  });

  it("renders children", () => {
    render(<Button>Children</Button>);
    expect(screen.getByText(/Children/)).toBeInTheDocument();
  });

  // T345: アイコンだけ・名前なしのボタンに、アイコン名（"CopyIcon"）を名前として付けない。
  describe("アイコンだけのボタンの名前", () => {
    it("名前を渡さなければ、aria-label を付けない（アイコン名を名前にしない）", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      render(<Button icon="CopyIcon" />);
      // 対照: 以前は aria-label="CopyIcon" が付き、「CopyIcon、ボタン」と読まれていた
      expect(screen.getByRole("button")).not.toHaveAttribute("aria-label");
      warn.mockRestore();
    });

    it("名前が無いと、開発時に 1 回だけ警告する（描き直しても増えない）", () => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      const { rerender } = render(<Button icon="CopyIcon" />);
      rerender(<Button icon="CopyIcon" />);
      expect(warn).toHaveBeenCalledTimes(1);
      expect(warn.mock.calls[0][0]).toContain("Button has an icon but no accessible name");
      warn.mockRestore();
    });

    it.each([
      ["aria-label", <Button key="a" icon="CopyIcon" aria-label="Copy" />],
      ["aria-labelledby", <Button key="b" icon="CopyIcon" aria-labelledby="ext" />],
      ["title", <Button key="c" icon="CopyIcon" title="Copy" />],
      ["文字の子", <Button key="d" icon="CopyIcon">Copy</Button>],
      ["アイコンなし", <Button key="e">Copy</Button>],
    ])("%s があれば、警告しない", (_label, element) => {
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      render(element);
      expect(warn).not.toHaveBeenCalled();
      warn.mockRestore();
    });

    it("渡した aria-label は、そのまま名前になる", () => {
      render(<Button icon="CopyIcon" aria-label="Copy link" />);
      expect(screen.getByRole("button", { name: "Copy link" })).toBeInTheDocument();
    });
  });
});
