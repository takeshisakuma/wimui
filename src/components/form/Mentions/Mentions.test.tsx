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

  it("keeps dropdown open when focus moves to a list item (relatedTarget inside container)", async () => {
    render(<Mentions options={options} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });
    const listbox = await screen.findByRole("listbox");

    // Blur whose relatedTarget stays within the container must not close the list.
    fireEvent.blur(textarea, { relatedTarget: listbox });

    expect(screen.getByRole("listbox")).toBeInTheDocument();
  });

  it("prevents default on option mousedown so the textarea keeps focus", async () => {
    render(<Mentions options={options} />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });
    await screen.findByRole("listbox");

    const aliceItem = screen.getByText("Alice").closest("[role='option']")!;
    const mousedown = fireEvent.mouseDown(aliceItem);

    // preventDefault() returns false from fireEvent when default was prevented.
    expect(mousedown).toBe(false);
  });

  describe("id の行き先", () => {
    it("渡した id は入力欄にだけ付き、同じ id の要素が 2 つにならない", () => {
      const { container } = render(<Mentions options={options} id="note" />);
      // 対照: 以前は、包みの div と入力欄の両方に id="note" が出ていた
      expect(container.querySelectorAll("#note")).toHaveLength(1);
      expect(screen.getByRole("textbox")).toHaveAttribute("id", "note");
      expect(container.querySelector(".wim-mentions")).not.toHaveAttribute("id");
    });

    it("外に置いたラベルを、htmlFor で入力欄に結べる", () => {
      render(
        <>
          <label htmlFor="note">Meeting note</label>
          <Mentions options={options} id="note" />
        </>,
      );
      expect(screen.getByRole("textbox", { name: "Meeting note" })).toBeInTheDocument();
    });

    it("候補のリストの id は、渡した id から作る（これまでどおり）", async () => {
      render(<Mentions options={options} id="note" />);
      const textarea = screen.getByRole("textbox");
      fireEvent.change(textarea, { target: { value: "@", selectionStart: 1 } });
      const listbox = await screen.findByRole("listbox");
      expect(listbox).toHaveAttribute("id", "note-list");
      expect(textarea).toHaveAttribute("aria-controls", "note-list");
    });
  });
});
