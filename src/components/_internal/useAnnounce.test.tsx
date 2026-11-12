import React from "react";
import { describe, it, expect, vi, afterEach } from "vitest";
import { act, render, screen } from "@testing-library/react";
import { useAnnounce, useAnnounceValue } from "./useAnnounce";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));

let api: ReturnType<typeof useAnnounce>;
const capture = (value: ReturnType<typeof useAnnounce>) => {
  api = value;
};
// 戻り値は描画の外（効果）でテストへ渡す（描画の中で外の変数を書き換えない）
const Imperative = ({ role }: { role?: "status" | "alert" }) => {
  const value = useAnnounce({ role });
  React.useEffect(() => capture(value));
  return value.region;
};

const Valued = ({ text }: { text: string }) => <>{useAnnounceValue(text)}</>;

afterEach(() => {
  vi.useRealTimers();
});

describe("useAnnounce", () => {
  it("領域は最初から在り、空のまま", () => {
    render(<Imperative />);
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
  });

  it("announce で文を書き換える（同じ要素のまま）", () => {
    render(<Imperative />);
    const region = screen.getByRole("status");
    act(() => api.announce("Page 2 of 5"));
    expect(region).toHaveTextContent("Page 2 of 5");
    expect(screen.getByRole("status")).toBe(region);
  });

  it("同じ文を続けて告げるときは、いったん空にしてから入れ直す", () => {
    vi.useFakeTimers();
    render(<Imperative />);
    const region = screen.getByRole("status");
    act(() => api.announce("2 items moved"));
    act(() => api.announce("2 items moved"));
    expect(region).toBeEmptyDOMElement();
    act(() => vi.advanceTimersByTime(50));
    expect(region).toHaveTextContent("2 items moved");
  });

  it("delay のあいだは空にしておき、待ってから入れる", () => {
    vi.useFakeTimers();
    render(<Imperative />);
    const region = screen.getByRole("status");
    act(() => api.announce("first"));
    act(() => api.announce("photo.jpg selected", { delay: 700 }));
    expect(region).toBeEmptyDOMElement();
    act(() => vi.advanceTimersByTime(699));
    expect(region).toBeEmptyDOMElement();
    act(() => vi.advanceTimersByTime(1));
    expect(region).toHaveTextContent("photo.jpg selected");
  });

  it("待っているあいだに次の告知が来たら、前のものは入れない", () => {
    vi.useFakeTimers();
    render(<Imperative />);
    const region = screen.getByRole("status");
    act(() => api.announce("old", { delay: 700 }));
    act(() => api.announce("new"));
    act(() => vi.advanceTimersByTime(1000));
    expect(region).toHaveTextContent("new");
  });

  it("clear で空にし、待っている告知も取り消す", () => {
    vi.useFakeTimers();
    render(<Imperative />);
    const region = screen.getByRole("status");
    act(() => api.announce("pending", { delay: 700 }));
    act(() => api.clear());
    act(() => vi.advanceTimersByTime(1000));
    expect(region).toBeEmptyDOMElement();
  });

  it("role に alert を選べる", () => {
    render(<Imperative role="alert" />);
    expect(screen.getByRole("alert")).toBeEmptyDOMElement();
  });

  it("アンマウントしたあとで、待っている告知が状態を書き換えない", () => {
    vi.useFakeTimers();
    const errors = vi.spyOn(console, "error").mockImplementation(() => {});
    const { unmount } = render(<Imperative />);
    act(() => api.announce("late", { delay: 700 }));
    unmount();
    act(() => vi.advanceTimersByTime(1000));
    expect(errors).not.toHaveBeenCalled();
    errors.mockRestore();
  });
});

describe("useAnnounceValue", () => {
  it("最初の描画では告げない", () => {
    render(<Valued text="3 selected" />);
    expect(screen.getByRole("status")).toBeEmptyDOMElement();
  });

  it("文が変わったら告げ、空文字になったら空にする", () => {
    const { rerender } = render(<Valued text="" />);
    const region = screen.getByRole("status");
    rerender(<Valued text="3 selected" />);
    expect(region).toHaveTextContent("3 selected");
    rerender(<Valued text="" />);
    expect(region).toBeEmptyDOMElement();
  });

  it("initial を渡すと、最初の描画から領域に文を入れておく", () => {
    const Initial = ({ text }: { text: string }) => <>{useAnnounceValue(text, { initial: true })}</>;
    const { rerender } = render(<Initial text="Saved" />);
    const region = screen.getByRole("status");
    expect(region).toHaveTextContent("Saved");
    rerender(<Initial text="" />);
    expect(region).toBeEmptyDOMElement();
  });

  it("同じ文のまま描き直しても、告げ直さない", () => {
    vi.useFakeTimers();
    const { rerender } = render(<Valued text="" />);
    const region = screen.getByRole("status");
    rerender(<Valued text="Saved" />);
    rerender(<Valued text="Saved" />);
    expect(region).toHaveTextContent("Saved");
    act(() => vi.advanceTimersByTime(100));
    expect(region).toHaveTextContent("Saved");
  });
});
