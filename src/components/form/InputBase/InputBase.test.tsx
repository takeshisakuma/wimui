import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { InputBase } from "./InputBase";
import styles from "./input-base.module.scss";

vi.mock("../../media/Icon/Icon", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid="icon">{name}</span>,
}));

describe("InputBase", () => {
  it("renders children", () => {
    render(<InputBase><input data-testid="inner" /></InputBase>);
    expect(screen.getByTestId("inner")).toBeInTheDocument();
  });

  it("applies default intent class", () => {
    const { container } = render(<InputBase><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.default);
  });

  it("applies error intent class", () => {
    const { container } = render(<InputBase intent="danger"><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.danger);
  });

  it("applies outline variant class by default", () => {
    const { container } = render(<InputBase><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.outline);
  });

  it("applies ghost variant class when specified", () => {
    const { container } = render(<InputBase variant="ghost"><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.ghost);
  });

  it("applies fullWidth class when fullWidth is true", () => {
    const { container } = render(<InputBase fullWidth><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.fullWidth);
  });

  it("does not apply fullWidth class by default", () => {
    const { container } = render(<InputBase><input /></InputBase>);
    expect(container.firstChild).not.toHaveClass(styles.fullWidth);
  });

  it("renders left icon when leftIcon is provided", () => {
    render(<InputBase leftIcon="SearchIcon"><input /></InputBase>);
    expect(screen.getByText("SearchIcon")).toBeInTheDocument();
  });

  it("applies has-left-icon class when leftIcon is provided", () => {
    const { container } = render(<InputBase leftIcon="SearchIcon"><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.hasLeftIcon);
  });

  it("renders left icon as button when onLeftIconClick is provided", () => {
    render(<InputBase leftIcon="SearchIcon" onLeftIconClick={vi.fn()}><input /></InputBase>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onLeftIconClick when left icon button is clicked", () => {
    const handler = vi.fn();
    render(<InputBase leftIcon="SearchIcon" onLeftIconClick={handler}><input /></InputBase>);
    fireEvent.click(screen.getByRole("button"));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("uses leftIconAriaLabel on left icon button", () => {
    render(
      <InputBase leftIcon="SearchIcon" onLeftIconClick={vi.fn()} leftIconAriaLabel="Search">
        <input />
      </InputBase>,
    );
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("renders right icons", () => {
    render(
      <InputBase rightIcons={[{ name: "CloseIcon" }]}><input /></InputBase>,
    );
    expect(screen.getByText("CloseIcon")).toBeInTheDocument();
  });

  it("applies has-right-icon class when rightIcons has items", () => {
    const { container } = render(
      <InputBase rightIcons={[{ name: "CloseIcon" }]}><input /></InputBase>,
    );
    expect(container.firstChild).toHaveClass(styles.hasRightIcon);
  });

  it("applies has-multiple-right-icons class when rightIcons has 2+ items", () => {
    const { container } = render(
      <InputBase rightIcons={[{ name: "CloseIcon" }, { name: "SearchIcon" }]}><input /></InputBase>,
    );
    expect(container.firstChild).toHaveClass(styles.hasMultipleRightIcons);
  });

  it("calls right icon onClick handler when clicked", () => {
    const handler = vi.fn();
    render(
      <InputBase rightIcons={[{ name: "CloseIcon", onClick: handler, ariaLabel: "Close" }]}>
        <input />
      </InputBase>,
    );
    fireEvent.click(screen.getByRole("button", { name: "Close" }));
    expect(handler).toHaveBeenCalledTimes(1);
  });

  it("shows clear button when allowClear=true and hasValue=true", () => {
    render(<InputBase allowClear hasValue onClear={vi.fn()}><input /></InputBase>);
    expect(screen.getByRole("button", { name: /clear input/i })).toBeInTheDocument();
  });

  it("does not show clear button when hasValue=false", () => {
    render(<InputBase allowClear hasValue={false}><input /></InputBase>);
    expect(screen.queryByRole("button", { name: /clear input/i })).not.toBeInTheDocument();
  });

  it("does not show clear button when allowClear=false", () => {
    render(<InputBase allowClear={false} hasValue><input /></InputBase>);
    expect(screen.queryByRole("button", { name: /clear input/i })).not.toBeInTheDocument();
  });

  it("calls onClear when clear button is clicked", () => {
    const onClear = vi.fn();
    render(<InputBase allowClear hasValue onClear={onClear}><input /></InputBase>);
    fireEvent.click(screen.getByRole("button", { name: /clear input/i }));
    expect(onClear).toHaveBeenCalledTimes(1);
  });

  it("uses clearAriaLabel for clear button", () => {
    render(
      <InputBase allowClear hasValue onClear={vi.fn()} clearAriaLabel="フィールドをクリア">
        <input />
      </InputBase>,
    );
    expect(screen.getByRole("button", { name: "フィールドをクリア" })).toBeInTheDocument();
  });

  it("applies disabled intent class when disabled", () => {
    const { container } = render(<InputBase disabled><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.disabled);
  });

  it("does not show clear button when disabled, even if allowClear and hasValue", () => {
    render(<InputBase disabled allowClear hasValue><input /></InputBase>);
    expect(screen.queryByRole("button", { name: /clear input/i })).not.toBeInTheDocument();
  });

  it("propagates disabled prop to child elements", () => {
    render(<InputBase disabled><input data-testid="inner" /></InputBase>);
    expect(screen.getByTestId("inner")).toBeDisabled();
  });

  it("applies semantic width class", () => {
    const { container } = render(<InputBase width="md"><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.widthMd);
  });

  it("applies has-custom-width class for numeric width", () => {
    const { container } = render(<InputBase width={300}><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.hasCustomWidth);
  });

  it("sets CSS custom property for numeric width", () => {
    const { container } = render(<InputBase width={300}><input /></InputBase>);
    const root = container.firstChild as HTMLElement;
    expect(root.style.getPropertyValue("--wim-input-width")).toBe("300px");
  });

  it("applies has-custom-width class for arbitrary string width", () => {
    const { container } = render(<InputBase width="50%"><input /></InputBase>);
    expect(container.firstChild).toHaveClass(styles.hasCustomWidth);
  });

  it("does not apply semantic width class when fullWidth is true", () => {
    const { container } = render(<InputBase width="md" fullWidth><input /></InputBase>);
    expect(container.firstChild).not.toHaveClass(styles.widthMd);
  });

  it("renders rotated class on right icon when rotated=true", () => {
    const { container } = render(
      <InputBase rightIcons={[{ name: "ChevronDownIcon", rotated: true }]}><input /></InputBase>,
    );
    expect(container.querySelector(`.${styles.rotated}`)).toBeInTheDocument();
  });
});
