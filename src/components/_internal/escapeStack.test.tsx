import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { useEscapeLayer } from "./escapeStack";

const Layer = ({ active, onEscape }: { active: boolean; onEscape: () => void }) => {
  useEscapeLayer(active, onEscape);
  return null;
};

describe("useEscapeLayer", () => {
  it("Escape を受けるのは一番最後に積んだ層だけ", () => {
    const outer = vi.fn();
    const inner = vi.fn();
    const { rerender } = render(
      <>
        <Layer active onEscape={outer} />
        <Layer active onEscape={inner} />
      </>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(inner).toHaveBeenCalledTimes(1);
    expect(outer).not.toHaveBeenCalled();

    // 上の層が外れたら、次の Escape は下の層が受ける
    rerender(
      <>
        <Layer active onEscape={outer} />
        <Layer active={false} onEscape={inner} />
      </>,
    );
    fireEvent.keyDown(document, { key: "Escape" });
    expect(outer).toHaveBeenCalledTimes(1);
    expect(inner).toHaveBeenCalledTimes(1);
  });

  it("中の部品が先に止めた Escape（defaultPrevented）は、どの層も受けない", () => {
    const outer = vi.fn();
    const { getByRole } = render(
      <>
        <Layer active onEscape={outer} />
        <input aria-label="inner" onKeyDown={(e) => e.key === "Escape" && e.preventDefault()} />
      </>,
    );
    fireEvent.keyDown(getByRole("textbox"), { key: "Escape" });
    expect(outer).not.toHaveBeenCalled();
  });

  it("Escape 以外のキーは受けず、層が無くなったらリスナーも外す", () => {
    const onEscape = vi.fn();
    const remove = vi.spyOn(document, "removeEventListener");
    const { unmount } = render(<Layer active onEscape={onEscape} />);
    fireEvent.keyDown(document, { key: "Enter" });
    expect(onEscape).not.toHaveBeenCalled();
    unmount();
    expect(remove).toHaveBeenCalledWith("keydown", expect.any(Function));
    remove.mockRestore();
  });
});
