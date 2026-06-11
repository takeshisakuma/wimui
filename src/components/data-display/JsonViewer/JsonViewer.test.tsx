import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { JsonViewer } from "./JsonViewer";
import styles from "./json-viewer.module.scss";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

const writeText = vi.fn();

beforeEach(() => {
  writeText.mockClear();
  Object.defineProperty(navigator, "clipboard", {
    value: { writeText },
    configurable: true,
  });
});

describe("JsonViewer", () => {
  it("renders correctly", () => {
    render(<JsonViewer data={{ key: "value" }} />);
    expect(screen.getByText("jsonViewer.title")).toBeInTheDocument();
    expect(screen.getByText("key:")).toBeInTheDocument();
    expect(screen.getByText(/"value"/)).toBeInTheDocument();
  });

  it("renders primitive value types", () => {
    render(<JsonViewer data={{ s: "x", n: 5, b: true, z: null }} />);
    expect(screen.getByText('"x"')).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("true")).toBeInTheDocument();
    expect(screen.getByText("null")).toBeInTheDocument();
  });

  it("collapses nodes beyond expandDepth and expands on click", () => {
    render(<JsonViewer data={{ a: { b: 1 } }} expandDepth={1} />);
    expect(screen.queryByText("b:")).not.toBeInTheDocument();
    fireEvent.click(screen.getByText("a:"));
    expect(screen.getByText("b:")).toBeInTheDocument();
    // 再クリックで折りたたみ
    fireEvent.click(screen.getByText("a:"));
    expect(screen.queryByText("b:")).not.toBeInTheDocument();
  });

  it("toggles a node with Enter and Space keys", () => {
    render(<JsonViewer data={{ a: { b: 1 } }} expandDepth={1} />);
    const header = screen.getByText("a:").closest(`.${styles.header}`)!;
    fireEvent.keyDown(header, { key: "Enter" });
    expect(screen.getByText("b:")).toBeInTheDocument();
    fireEvent.keyDown(header, { key: " " });
    expect(screen.queryByText("b:")).not.toBeInTheDocument();
  });

  it("shows item/key counts when expanded", () => {
    render(<JsonViewer data={{ list: [1, 2, 3] }} expandDepth={2} />);
    expect(screen.getByText("1 keys")).toBeInTheDocument();
    expect(screen.getByText("3 items")).toBeInTheDocument();
  });

  it("renders empty object without toggle affordance", () => {
    const { container } = render(<JsonViewer data={{}} />);
    const header = container.querySelector(`.${styles.header}`)!;
    expect(header).toHaveAttribute("tabindex", "-1");
    expect(header.className).not.toContain(styles.collapsible);
    fireEvent.click(header); // クラッシュしないこと
  });

  it("copies JSON to clipboard", () => {
    const data = { a: 1 };
    render(<JsonViewer data={data} />);
    fireEvent.click(screen.getByLabelText("jsonViewer.copy"));
    expect(writeText).toHaveBeenCalledWith(JSON.stringify(data, null, 2));
  });

  it("hides toolbar and copy button when disabled", () => {
    const { rerender } = render(<JsonViewer data={{}} showToolbar={false} />);
    expect(screen.queryByText("jsonViewer.title")).not.toBeInTheDocument();
    rerender(<JsonViewer data={{}} showCopy={false} />);
    expect(screen.queryByLabelText("jsonViewer.copy")).not.toBeInTheDocument();
  });

  it("resets internal state when the data prop changes", () => {
    const { rerender } = render(<JsonViewer data={{ a: 1 }} />);
    expect(screen.getByText("a:")).toBeInTheDocument();
    rerender(<JsonViewer data={{ b: 2 }} />);
    expect(screen.queryByText("a:")).not.toBeInTheDocument();
    expect(screen.getByText("b:")).toBeInTheDocument();
  });

  describe("editable mode", () => {
    it("shows edit title", () => {
      render(<JsonViewer data={{}} editable />);
      expect(screen.getByText("jsonViewer.edit")).toBeInTheDocument();
    });

    it("edits a string value via input and Enter", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={{ name: "foo" }} editable onChange={onChange} />);
      fireEvent.click(screen.getByText('"foo"'));
      const input = screen.getByDisplayValue("foo");
      fireEvent.change(input, { target: { value: "bar" } });
      fireEvent.keyDown(input, { key: "Enter" });
      expect(onChange).toHaveBeenCalledWith({ name: "bar" });
      expect(screen.getByText('"bar"')).toBeInTheDocument();
    });

    it("opens the editor with keyboard (Enter / Space)", () => {
      render(<JsonViewer data={{ name: "foo" }} editable />);
      fireEvent.keyDown(screen.getByText('"foo"'), { key: "Enter" });
      expect(screen.getByDisplayValue("foo")).toBeInTheDocument();
      fireEvent.keyDown(screen.getByDisplayValue("foo"), { key: "Escape" });
      fireEvent.keyDown(screen.getByText('"foo"'), { key: " " });
      expect(screen.getByDisplayValue("foo")).toBeInTheDocument();
    });

    it("preserves number type when editing", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={{ n: 5 }} editable onChange={onChange} />);
      fireEvent.click(screen.getByText("5"));
      const input = screen.getByDisplayValue("5");
      fireEvent.change(input, { target: { value: "10" } });
      fireEvent.blur(input);
      expect(onChange).toHaveBeenCalledWith({ n: 10 });
    });

    it("preserves boolean type when editing", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={{ b: true }} editable onChange={onChange} />);
      fireEvent.click(screen.getByText("true"));
      const input = screen.getByDisplayValue("true");
      fireEvent.change(input, { target: { value: "false" } });
      fireEvent.blur(input);
      expect(onChange).toHaveBeenCalledWith({ b: false });
    });

    it("converts the literal 'null' to null", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={{ s: "x" }} editable onChange={onChange} />);
      fireEvent.click(screen.getByText('"x"'));
      const input = screen.getByDisplayValue("x");
      fireEvent.change(input, { target: { value: "null" } });
      fireEvent.blur(input);
      expect(onChange).toHaveBeenCalledWith({ s: null });
    });

    it("cancels editing with Escape without saving", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={{ s: "x" }} editable onChange={onChange} />);
      fireEvent.click(screen.getByText('"x"'));
      const input = screen.getByDisplayValue("x");
      fireEvent.change(input, { target: { value: "changed" } });
      fireEvent.keyDown(input, { key: "Escape" });
      expect(onChange).not.toHaveBeenCalled();
      expect(screen.getByText('"x"')).toBeInTheDocument();
    });

    it("edits a nested value inside an array", () => {
      const onChange = vi.fn();
      render(
        <JsonViewer data={{ list: ["a", "b"] }} editable expandDepth={2} onChange={onChange} />,
      );
      fireEvent.click(screen.getByText('"b"'));
      const input = screen.getByDisplayValue("b");
      fireEvent.change(input, { target: { value: "b2" } });
      fireEvent.blur(input);
      expect(onChange).toHaveBeenCalledWith({ list: ["a", "b2"] });
    });

    it("adds a key to an object", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={{ a: 1 }} editable onChange={onChange} />);
      fireEvent.click(screen.getAllByTitle("jsonViewer.addItem")[0]);
      expect(onChange).toHaveBeenCalledWith({ a: 1, new_key: "" });
      expect(screen.getByText("new_key:")).toBeInTheDocument();
    });

    it("appends an item to an array", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={[1]} editable onChange={onChange} />);
      fireEvent.click(screen.getAllByTitle("jsonViewer.addItem")[0]);
      expect(onChange).toHaveBeenCalledWith([1, ""]);
    });

    it("deletes a key from an object", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={{ a: 1, b: 2 }} editable onChange={onChange} />);
      fireEvent.click(screen.getAllByTitle("jsonViewer.deleteItem")[0]);
      expect(onChange).toHaveBeenCalledWith({ b: 2 });
      expect(screen.queryByText("a:")).not.toBeInTheDocument();
    });

    it("deletes an item from an array", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={[1, 2]} editable onChange={onChange} />);
      fireEvent.click(screen.getAllByTitle("jsonViewer.deleteItem")[0]);
      expect(onChange).toHaveBeenCalledWith([2]);
    });

    it("deletes a nested key", () => {
      const onChange = vi.fn();
      render(<JsonViewer data={{ o: { x: 1 } }} editable expandDepth={2} onChange={onChange} />);
      // ネストの delete ボタンは後ろ側（x の行）
      const buttons = screen.getAllByTitle("jsonViewer.deleteItem");
      fireEvent.click(buttons[buttons.length - 1]);
      expect(onChange).toHaveBeenCalledWith({ o: {} });
    });
  });
});
