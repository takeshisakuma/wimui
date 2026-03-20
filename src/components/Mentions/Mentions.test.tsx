import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Mentions } from "./Mentions";

describe("Mentions", () => {
  const options = [
    { id: 1, display: "Alice" },
    { id: 2, display: "Bob" },
    { id: 3, display: "Charlie" },
  ];

  it("renders textarea", () => {
    render(<Mentions options={options} placeholder="Type @" />);
    expect(screen.getByPlaceholderText("Type @")).toBeInTheDocument();
  });

  it("shows options when trigger character is typed", () => {
    render(<Mentions options={options} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("Charlie")).toBeInTheDocument();
  });

  it("filters options based on query", () => {
    render(<Mentions options={options} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "@A", selectionStart: 2 } });

    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.queryByText("Bob")).not.toBeInTheDocument();
  });

  it("inserts mention on click", () => {
    const handleSelect = vi.fn();
    render(<Mentions options={options} onSelect={handleSelect} />);
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });
    fireEvent.click(screen.getByText("Alice"));

    expect(textarea.value).toBe("@Alice ");
    expect(handleSelect).toHaveBeenCalledWith(options[0]);
  });

  it("navigates and selects with keyboard", async () => {
    render(<Mentions options={options} />);
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });

    // Wait for mention list to be open
    await screen.findByRole("listbox");

    // Down to Bob
    fireEvent.keyDown(textarea, { key: "ArrowDown" });
    fireEvent.keyDown(textarea, { key: "Enter" });

    expect(textarea.value).toBe("@Bob ");
  });

  it("closes dropdown on Escape key", async () => {
    render(<Mentions options={options} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });
    await screen.findByRole("listbox");

    fireEvent.keyDown(textarea, { key: "Escape" });
    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
  });

  it("selects with Tab key", async () => {
    render(<Mentions options={options} />);
    const textarea = screen.getByRole("textbox") as HTMLTextAreaElement;

    fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });
    await screen.findByRole("listbox");

    fireEvent.keyDown(textarea, { key: "ArrowDown" });
    fireEvent.keyDown(textarea, { key: "Tab" });

    expect(textarea.value).toBe("@Bob ");
  });

  it("highlights option on mouse enter", async () => {
    render(<Mentions options={options} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });
    await screen.findByRole("listbox");

    const charlieItem = screen.getByText("Charlie").closest("[role='option']")!;
    fireEvent.mouseEnter(charlieItem);

    fireEvent.keyDown(textarea, { key: "Enter" });
    expect((textarea as HTMLTextAreaElement).value).toBe("@Charlie ");
  });

  it("closes dropdown on blur", async () => {
    render(<Mentions options={options} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });
    await screen.findByRole("listbox");

    fireEvent.blur(textarea);

    await waitFor(
      () => expect(screen.queryByRole("listbox")).not.toBeInTheDocument(),
      { timeout: 500 },
    );
  });
});
