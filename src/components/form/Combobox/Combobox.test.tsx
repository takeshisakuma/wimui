import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Combobox } from "./Combobox";

describe("Combobox", () => {
  const options = [
    { label: "Apple", value: "apple" },
    { label: "Banana", value: "banana" },
    { label: "Cherry", value: "cherry" },
  ];

  it("renders input field", () => {
    render(<Combobox options={options} placeholder="Select fruit" />);
    expect(screen.getByPlaceholderText("Select fruit")).toBeInTheDocument();
  });

  it("shows options on focus/input", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  it("filters options", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.change(input, { target: { value: "Ban" } });

    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
  });

  it("calls onChange when option is clicked", () => {
    const handleSelect = vi.fn();
    render(<Combobox options={options} onChange={handleSelect} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    fireEvent.click(screen.getByText("Cherry"));

    expect(handleSelect).toHaveBeenCalledWith({
      label: "Cherry",
      value: "cherry",
    });
    expect(input).toHaveValue("Cherry");
  });

  it("selects option without onChange handler", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    fireEvent.click(screen.getByText("Apple"));

    expect(input).toHaveValue("Apple");
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("shows empty state when no options match filter", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.change(input, { target: { value: "xyz" } });

    expect(screen.getByText("No results found")).toBeInTheDocument();
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("opens dropdown with ArrowDown when closed", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.keyDown(input, { key: "ArrowDown" });

    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("navigates down through options with ArrowDown", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "ArrowDown" });

    // 2回押すと index=1 (Banana) がアクティブ
    expect(input).toHaveAttribute("aria-activedescendant");
  });

  it("wraps ArrowDown at end of list", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    // options.length(3) 回押すと末尾を超えて先頭に戻る
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "ArrowDown" });
    fireEvent.keyDown(input, { key: "ArrowDown" });

    // 4回目で 0 に戻る
    const descendant = input.getAttribute("aria-activedescendant");
    expect(descendant).toMatch(/-option-0$/);
  });

  it("navigates up through options with ArrowUp", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    // ArrowUp で末尾から開始
    fireEvent.keyDown(input, { key: "ArrowUp" });

    expect(input).toHaveAttribute("aria-activedescendant");
    const descendant = input.getAttribute("aria-activedescendant");
    expect(descendant).toMatch(/-option-2$/);
  });

  it("wraps ArrowUp at top of list", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" }); // index=0
    fireEvent.keyDown(input, { key: "ArrowUp" });   // index=-1 → length-1=2

    const descendant = input.getAttribute("aria-activedescendant");
    expect(descendant).toMatch(/-option-2$/);
  });

  it("selects active option with Enter key", () => {
    const handleSelect = vi.fn();
    render(<Combobox options={options} onChange={handleSelect} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "ArrowDown" }); // index=0 (Apple)
    fireEvent.keyDown(input, { key: "Enter" });

    expect(handleSelect).toHaveBeenCalledWith({ label: "Apple", value: "apple" });
    expect(input).toHaveValue("Apple");
  });

  it("does nothing on Enter when no option is active", () => {
    const handleSelect = vi.fn();
    render(<Combobox options={options} onChange={handleSelect} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    fireEvent.keyDown(input, { key: "Enter" }); // activeIndex=-1

    expect(handleSelect).not.toHaveBeenCalled();
  });

  it("closes dropdown with Escape key", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    fireEvent.keyDown(input, { key: "Escape" });
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("closes dropdown with Tab key", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    fireEvent.keyDown(input, { key: "Tab" });
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("closes dropdown on outside click", () => {
    render(
      <div>
        <Combobox options={options} />
        <button>Outside</button>
      </div>,
    );
    const input = screen.getByRole("combobox");
    fireEvent.focus(input);
    expect(screen.getByRole("listbox")).toBeInTheDocument();

    fireEvent.mouseDown(screen.getByText("Outside"));
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("sets hover active index on mouse enter", () => {
    render(<Combobox options={options} />);
    const input = screen.getByRole("combobox");

    fireEvent.focus(input);
    const bananaOption = screen.getByText("Banana").closest("li")!;
    fireEvent.mouseEnter(bananaOption);

    expect(
      screen.getByRole("option", { name: "Banana" }),
    ).toHaveAttribute("aria-selected", "true");
  });

  it("renders with defaultValue pre-filled", () => {
    render(<Combobox options={options} defaultValue="Banana" />);
    expect(screen.getByRole("combobox")).toHaveValue("Banana");
  });

  it("renders label when provided", () => {
    render(<Combobox options={options} label="Fruit" />);
    expect(screen.getByText("Fruit")).toBeInTheDocument();
  });

  it("renders error when provided", () => {
    render(<Combobox options={options} error="Required field" />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("marks input as invalid when error is set", () => {
    render(<Combobox options={options} error="Error" />);
    expect(screen.getByRole("combobox")).toHaveAttribute("aria-invalid", "true");
  });

  it("disables input when disabled is true", () => {
    render(<Combobox options={options} disabled />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("uses custom id when provided", () => {
    render(<Combobox options={options} id="my-combobox" />);
    expect(screen.getByRole("combobox")).toHaveAttribute("id", "my-combobox");
  });

  it("resets keyboard navigation flag on mouse move", () => {
    render(<Combobox options={options} />);
    const combobox = document.querySelector(".wim-combobox")!;

    fireEvent.focus(screen.getByRole("combobox"));
    fireEvent.keyDown(screen.getByRole("combobox"), { key: "ArrowDown" });
    expect(combobox).toHaveAttribute("data-keyboard-nav", "true");

    fireEvent.mouseMove(combobox);
    expect(combobox).toHaveAttribute("data-keyboard-nav", "false");
  });
});
