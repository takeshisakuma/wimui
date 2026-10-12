/**
 * 利用者が同じ名前のイベントを渡しても、部品の処理が消えないこと（T347 の残り 17 部品）。
 *
 * `composeEventHandlers.test.tsx` は、23 部品のうち 6 部品を描いて確かめた。ここは、機械的に書き換えた
 * だけで、描いて確かめていなかった残りの 17 部品。どのテストも、利用者の処理を渡したうえで、
 * 「部品の処理が動いた結果」と「利用者の処理が呼ばれたこと」の両方を見る。
 */
import React from "react";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Audio } from "../media/Audio/Audio";
import { Video } from "../media/Video/Video";
import { Image } from "../media/Image/Image";
import { Cascader } from "../form/Cascader/Cascader";
import { DatePicker } from "../form/DatePicker/DatePicker";
import { RangeSlider } from "../form/RangeSlider/RangeSlider";
import { Rating } from "../form/Rating/Rating";
import { Slider } from "../form/Slider/Slider";
import { SmartSearchInput } from "../form/SmartSearchInput/SmartSearchInput";
import { TimePicker } from "../form/TimePicker/TimePicker";
import { ChatInput } from "../ai/ChatUI/ChatUI";
import { PullToRefresh } from "../data-display/PullToRefresh/PullToRefresh";
import { SortableList } from "../data-display/SortableList/SortableList";
import { SwipeAction } from "../data-display/SwipeAction/SwipeAction";
import { SpeedDial } from "../navigation/SpeedDial/SpeedDial";
import { Splitter } from "../layout/Splitter/Splitter";
import { Transition } from "../layout/Transition/Transition";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

beforeEach(() => {
  window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
  window.HTMLMediaElement.prototype.pause = vi.fn();
  window.HTMLMediaElement.prototype.load = vi.fn();
});

describe("同じイベントを渡しても、部品が動く（残りの 17 部品）", () => {
  it("Audio: onTimeUpdate を渡しても、現在の時刻が進む", () => {
    const onTimeUpdate = vi.fn();
    render(<Audio src="a.mp3" customControls onTimeUpdate={onTimeUpdate} />);
    const audio = screen.getByTestId("audio-active") as HTMLAudioElement;
    expect(screen.queryByText("0:30")).not.toBeInTheDocument();
    audio.currentTime = 30;
    fireEvent.timeUpdate(audio);
    expect(screen.getByText("0:30")).toBeInTheDocument();
    expect(onTimeUpdate).toHaveBeenCalledTimes(1);
  });

  it("Audio: onEnded を渡しても、曲の終わりの処理が走る", () => {
    const onEnded = vi.fn();
    render(<Audio src="a.mp3" onEnded={onEnded} />);
    const pause = window.HTMLMediaElement.prototype.pause as ReturnType<typeof vi.fn>;
    pause.mockClear();
    fireEvent.ended(screen.getByTestId("audio-active"));
    expect(pause).toHaveBeenCalled();
    expect(onEnded).toHaveBeenCalledTimes(1);
  });

  it("Video: onClick を渡しても、2 回続けて押すと先へ送る", () => {
    const onClick = vi.fn();
    render(<Video src="v.mp4" customControls onClick={onClick} />);
    const video = screen.getByTestId("video-element") as HTMLVideoElement;
    Object.defineProperty(video, "duration", { value: 100 });
    fireEvent(video, new Event("loadedmetadata"));
    video.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 400, height: 300, right: 400, bottom: 300, x: 0, y: 0, toJSON: () => ({}) });
    fireEvent.click(video, { clientX: 300 });
    fireEvent.click(video, { clientX: 300 });
    expect(video.currentTime).toBeGreaterThan(0);
    expect(onClick).toHaveBeenCalledTimes(2);
  });

  it("Image: onError を渡しても、代わりの表示に切り替わる", () => {
    const onError = vi.fn();
    render(<Image src="broken.jpg" alt="x" onError={onError} />);
    expect(screen.queryByTestId("image-fallback")).not.toBeInTheDocument();
    fireEvent.error(screen.getByTestId("image-element"));
    expect(screen.getByTestId("image-fallback")).toBeInTheDocument();
    expect(onError).toHaveBeenCalledTimes(1);
  });

  it("Cascader: onMouseMove を渡しても、キーボード操作中の印が外れる", () => {
    const onMouseMove = vi.fn();
    const { container } = render(
      <Cascader options={[{ value: "a", label: "A" }]} onMouseMove={onMouseMove} />,
    );
    const root = container.querySelector("[data-keyboard-nav]") as HTMLElement;
    fireEvent.keyDown(screen.getByRole("combobox"), { key: "ArrowDown" });
    expect(root).toHaveAttribute("data-keyboard-nav", "true");
    fireEvent.mouseMove(root);
    expect(root).toHaveAttribute("data-keyboard-nav", "false");
    expect(onMouseMove).toHaveBeenCalledTimes(1);
  });

  it("DatePicker: onClick を渡しても、開く", () => {
    const onClick = vi.fn();
    render(<DatePicker onClick={onClick} />);
    const input = screen.getByRole("combobox");
    expect(input).toHaveAttribute("aria-expanded", "false");
    fireEvent.click(input);
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("DatePicker: onKeyDown を渡しても、Enter で開く", () => {
    const onKeyDown = vi.fn();
    render(<DatePicker onKeyDown={onKeyDown} />);
    const input = screen.getByRole("combobox");
    fireEvent.keyDown(input, { key: "Enter" });
    expect(input).toHaveAttribute("aria-expanded", "true");
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it("Slider: onMouseDown を渡しても、押した位置の値になる", () => {
    const onMouseDown = vi.fn();
    const onChange = vi.fn();
    const { container } = render(<Slider aria-label="volume" onChange={onChange} onMouseDown={onMouseDown} />);
    fireEvent.mouseDown(container.querySelector(".wim-slider") as HTMLElement, { clientX: 10 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onMouseDown).toHaveBeenCalledTimes(1);
  });

  it("RangeSlider: onMouseDown を渡しても、押した位置の値になる", () => {
    const onMouseDown = vi.fn();
    const onChange = vi.fn();
    const { container } = render(<RangeSlider onChange={onChange} onMouseDown={onMouseDown} />);
    fireEvent.mouseDown(container.querySelector(".wim-range-slider") as HTMLElement, { clientX: 10 });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onMouseDown).toHaveBeenCalledTimes(1);
  });

  it("Rating: onMouseLeave を渡しても、ホバーの見え方が元に戻る", () => {
    const onMouseLeave = vi.fn();
    render(<Rating defaultValue={1} count={5} onMouseLeave={onMouseLeave} />);
    const stars = screen.getAllByRole("radio");
    fireEvent.mouseMove(stars[3]);
    expect(stars[3].className).toContain("full");
    fireEvent.mouseLeave(screen.getByRole("radiogroup"));
    expect(stars[3].className).not.toContain("full");
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });

  it("SmartSearchInput: onKeyDown を渡しても、Enter で送信する", () => {
    const onKeyDown = vi.fn();
    const onSubmit = vi.fn();
    render(<SmartSearchInput defaultValue="hello" onSubmit={onSubmit} onKeyDown={onKeyDown} />);
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter" });
    expect(onSubmit).toHaveBeenCalledWith("hello");
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it("TimePicker: onRightIconClick を渡しても、時計がブラウザの選択画面を開く", () => {
    const onRightIconClick = vi.fn();
    const { container } = render(<TimePicker onRightIconClick={onRightIconClick} />);
    const showPicker = vi.fn();
    (container.querySelector('input[type="time"]') as HTMLInputElement).showPicker = showPicker;
    fireEvent.click(container.querySelector("button") as HTMLElement);
    expect(showPicker).toHaveBeenCalledTimes(1);
    expect(onRightIconClick).toHaveBeenCalledTimes(1);
  });

  it("ChatInput: onKeyDown を渡しても、Enter で送信する", () => {
    const onKeyDown = vi.fn();
    const onSend = vi.fn();
    render(<ChatInput placeholder="msg" onSend={onSend} onKeyDown={onKeyDown} />);
    const field = screen.getByPlaceholderText("msg");
    fireEvent.change(field, { target: { value: "hi" } });
    fireEvent.keyDown(field, { key: "Enter" });
    expect(onSend).toHaveBeenCalledWith("hi");
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it("PullToRefresh: onTouchStart を渡しても、引いて離すと更新する", async () => {
    const onTouchStart = vi.fn();
    const onRefresh = vi.fn().mockResolvedValue(undefined);
    const { container } = render(
      <PullToRefresh onRefresh={onRefresh} threshold={60} onTouchStart={onTouchStart}>
        content
      </PullToRefresh>,
    );
    fireEvent.touchStart(container.firstChild as HTMLElement, { touches: [{ clientY: 0 }] });
    fireEvent.touchMove(window, { touches: [{ clientY: 200 }] });
    await act(async () => {
      fireEvent.touchEnd(window);
    });
    expect(onRefresh).toHaveBeenCalledTimes(1);
    expect(onTouchStart).toHaveBeenCalledTimes(1);
  });

  it("SortableList.Item: onKeyDown を渡しても、矢印キーで並べ替える", () => {
    const onKeyDown = vi.fn();
    const onSortEnd = vi.fn();
    render(
      <SortableList onSortEnd={onSortEnd}>
        <SortableList.Item index={0} onKeyDown={onKeyDown}>
          Item 1
        </SortableList.Item>
        <SortableList.Item index={1}>Item 2</SortableList.Item>
      </SortableList>,
    );
    fireEvent.keyDown(screen.getByText("Item 1").closest("li") as HTMLElement, { key: "ArrowDown" });
    expect(onSortEnd).toHaveBeenCalledWith(0, 1);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it("SortableList.Item: onDragStart と onDrop を渡しても、ドラッグで並べ替える", () => {
    const onDragStart = vi.fn();
    const onDrop = vi.fn();
    const onSortEnd = vi.fn();
    render(
      <SortableList onSortEnd={onSortEnd}>
        <SortableList.Item index={0} onDragStart={onDragStart}>
          Item 1
        </SortableList.Item>
        <SortableList.Item index={1} onDrop={onDrop}>
          Item 2
        </SortableList.Item>
      </SortableList>,
    );
    const dataTransfer = { effectAllowed: "", setDragImage: () => {} };
    fireEvent.dragStart(screen.getByText("Item 1").closest("li") as HTMLElement, { dataTransfer });
    fireEvent.drop(screen.getByText("Item 2").closest("li") as HTMLElement, { dataTransfer });
    expect(onSortEnd).toHaveBeenCalledWith(0, 1);
    expect(onDragStart).toHaveBeenCalledTimes(1);
    expect(onDrop).toHaveBeenCalledTimes(1);
  });

  it("SwipeAction: onBlur を渡しても、フォーカスが行の外へ出たら閉じる", () => {
    const onBlur = vi.fn();
    const { container } = render(
      <>
        <SwipeAction leftActions={[{ icon: "CheckIcon", label: "Done", onClick: vi.fn() }]} onBlur={onBlur}>
          row
        </SwipeAction>
        <button type="button">outside</button>
      </>,
    );
    const content = container.querySelector('[style*="translateX"]') as HTMLElement;
    act(() => screen.getByRole("button", { name: "Done" }).focus());
    expect(content.style.transform).toBe("translateX(80px)");
    act(() => screen.getByRole("button", { name: "outside" }).focus());
    expect(content.style.transform).toBe("translateX(0px)");
    expect(onBlur).toHaveBeenCalled();
  });

  it("SpeedDial: onMouseEnter と onMouseLeave を渡しても、ホバーで開閉する", () => {
    const onMouseEnter = vi.fn();
    const onMouseLeave = vi.fn();
    const { container } = render(
      <SpeedDial
        actions={[{ icon: "EditIcon", label: "Edit" }]}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      />,
    );
    const root = container.firstChild as HTMLElement;
    const trigger = root.querySelector("[aria-haspopup]") as HTMLElement;
    fireEvent.mouseEnter(root);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    fireEvent.mouseLeave(root);
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onMouseEnter).toHaveBeenCalledTimes(1);
    expect(onMouseLeave).toHaveBeenCalledTimes(1);
  });

  it("SpeedDial: onKeyDown を渡しても、Escape で閉じる", () => {
    const onKeyDown = vi.fn();
    const { container } = render(<SpeedDial actions={[{ icon: "EditIcon", label: "Edit" }]} onKeyDown={onKeyDown} />);
    const root = container.firstChild as HTMLElement;
    const trigger = root.querySelector("[aria-haspopup]") as HTMLElement;
    fireEvent.mouseEnter(root);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    fireEvent.keyDown(root, { key: "Escape" });
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it("Splitter.Handle: onKeyDown を渡しても、矢印キーの既定の動き（スクロール）を止める", () => {
    const onKeyDown = vi.fn();
    render(
      <Splitter>
        <Splitter.Panel>Panel 1</Splitter.Panel>
        <Splitter.Handle onKeyDown={onKeyDown} />
        <Splitter.Panel>Panel 2</Splitter.Panel>
      </Splitter>,
    );
    // fireEvent は、preventDefault されたときに false を返す
    expect(fireEvent.keyDown(screen.getByTestId("splitter-handle"), { key: "ArrowLeft" })).toBe(false);
    expect(onKeyDown).toHaveBeenCalledTimes(1);
  });

  it("Splitter.Handle: onMouseDown を渡しても、ドラッグが始まり、動かすと幅が変わる", () => {
    const onMouseDown = vi.fn();
    render(
      <Splitter>
        <Splitter.Panel>Panel 1</Splitter.Panel>
        <Splitter.Handle onMouseDown={onMouseDown} />
        <Splitter.Panel>Panel 2</Splitter.Panel>
      </Splitter>,
    );
    const root = screen.getByTestId("splitter-root");
    root.getBoundingClientRect = () =>
      ({ left: 0, top: 0, width: 1000, height: 100, right: 1000, bottom: 100, x: 0, y: 0, toJSON: () => ({}) });
    const handle = screen.getByTestId("splitter-handle");
    const before = handle.getAttribute("aria-valuenow");
    fireEvent.mouseDown(handle, { clientX: 500 });
    fireEvent.mouseMove(window, { clientX: 300 });
    expect(handle.getAttribute("aria-valuenow")).not.toBe(before);
    expect(onMouseDown).toHaveBeenCalledTimes(1);
  });

  it("Transition: onTransitionEnd を渡しても、消える動きが終わったら中身を外す", () => {
    const onTransitionEnd = vi.fn();
    const tree = (show: boolean) => (
      <Transition show={show} unmount onTransitionEnd={onTransitionEnd} data-testid="transition">
        <div>Content</div>
      </Transition>
    );
    const { rerender } = render(tree(true));
    rerender(tree(false));
    // 対照: 動きが終わるまでは、まだ描かれている
    const el = screen.getByTestId("transition");
    fireEvent.transitionEnd(el);
    expect(screen.queryByTestId("transition")).not.toBeInTheDocument();
    expect(onTransitionEnd).toHaveBeenCalledTimes(1);
  });
});
