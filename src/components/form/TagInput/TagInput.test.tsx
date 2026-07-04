import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TagInput } from "./TagInput";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const getInput = () => screen.getByRole("textbox") as HTMLInputElement;

const typeAndEnter = (text: string) => {
  fireEvent.change(getInput(), { target: { value: text } });
  fireEvent.keyDown(getInput(), { key: "Enter" });
};

describe("TagInput", () => {
  it("renders with default values", () => {
    render(<TagInput defaultValue={["Tag1"]} />);
    expect(screen.getByText("Tag1")).toBeInTheDocument();
  });

  it("shows placeholder only while empty", () => {
    const { unmount } = render(<TagInput placeholder="frontend" />);
    expect(getInput()).toHaveAttribute("placeholder", "frontend");
    unmount();
    render(<TagInput placeholder="frontend" defaultValue={["a"]} />);
    expect(getInput()).toHaveAttribute("placeholder", "");
  });

  it("adds a tag with Enter and clears the input", () => {
    const onChange = vi.fn();
    render(<TagInput onChange={onChange} />);
    typeAndEnter("apple");
    expect(onChange).toHaveBeenCalledWith(["apple"]);
    expect(screen.getByText("apple")).toBeInTheDocument();
    expect(getInput().value).toBe("");
  });

  it("adds a tag with the comma key", () => {
    const onChange = vi.fn();
    render(<TagInput onChange={onChange} />);
    fireEvent.change(getInput(), { target: { value: "banana" } });
    fireEvent.keyDown(getInput(), { key: "," });
    expect(onChange).toHaveBeenCalledWith(["banana"]);
  });

  it("trims whitespace and ignores empty input", () => {
    const onChange = vi.fn();
    render(<TagInput onChange={onChange} />);
    typeAndEnter("   ");
    expect(onChange).not.toHaveBeenCalled();
    typeAndEnter("  spaced  ");
    expect(onChange).toHaveBeenCalledWith(["spaced"]);
  });

  it("ignores duplicate tags but clears the input", () => {
    const onChange = vi.fn();
    render(<TagInput defaultValue={["dup"]} onChange={onChange} />);
    typeAndEnter("dup");
    expect(onChange).not.toHaveBeenCalled();
    expect(getInput().value).toBe("");
  });

  it("respects maxTags", () => {
    const onChange = vi.fn();
    render(<TagInput defaultValue={["a", "b"]} maxTags={2} onChange={onChange} />);
    typeAndEnter("c");
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.queryByText("c")).not.toBeInTheDocument();
  });

  it("removes the last tag with Backspace when input is empty", () => {
    const onChange = vi.fn();
    render(<TagInput defaultValue={["a", "b"]} onChange={onChange} />);
    fireEvent.keyDown(getInput(), { key: "Backspace" });
    expect(onChange).toHaveBeenCalledWith(["a"]);
  });

  it("does not remove tags with Backspace while typing", () => {
    const onChange = vi.fn();
    render(<TagInput defaultValue={["a"]} onChange={onChange} />);
    fireEvent.change(getInput(), { target: { value: "x" } });
    fireEvent.keyDown(getInput(), { key: "Backspace" });
    expect(onChange).not.toHaveBeenCalled();
  });

  it("removes a tag via its delete button", () => {
    const onChange = vi.fn();
    render(<TagInput defaultValue={["a", "b"]} onChange={onChange} />);
    fireEvent.click(screen.getAllByLabelText("Close")[0]);
    expect(onChange).toHaveBeenCalledWith(["b"]);
  });

  it("hides delete buttons and disables Backspace removal when allowDelete is false", () => {
    const onChange = vi.fn();
    render(<TagInput defaultValue={["a"]} allowDelete={false} onChange={onChange} />);
    expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
    fireEvent.keyDown(getInput(), { key: "Backspace" });
    expect(onChange).not.toHaveBeenCalled();
    expect(screen.getByText("a")).toBeInTheDocument();
  });

  it("disables interaction when disabled", () => {
    render(<TagInput defaultValue={["a"]} disabled />);
    expect(getInput()).toBeDisabled();
    expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
  });

  it("works as a controlled component", () => {
    const onChange = vi.fn();
    const { rerender } = render(<TagInput value={["a"]} onChange={onChange} />);
    typeAndEnter("b");
    expect(onChange).toHaveBeenCalledWith(["a", "b"]);
    // 親が value を更新するまで表示は変わらない
    expect(screen.queryByText("b")).not.toBeInTheDocument();
    rerender(<TagInput value={["a", "b"]} onChange={onChange} />);
    expect(screen.getByText("b")).toBeInTheDocument();
  });

  it("shows error state and message", () => {
    render(<TagInput error="Something wrong" />);
    expect(screen.getByText("Something wrong")).toBeInTheDocument();
    expect(getInput()).toHaveAttribute("aria-invalid", "true");
  });

  it("renders label and required attributes", () => {
    render(<TagInput label="Tags" required />);
    expect(screen.getByText("Tags")).toBeInTheDocument();
    expect(getInput()).toHaveAttribute("aria-required", "true");
  });

  it("focuses the input when the container is clicked", () => {
    render(<TagInput defaultValue={["a"]} />);
    fireEvent.click(screen.getByText("a").closest("div")!);
    expect(document.activeElement).toBe(getInput());
  });
});
