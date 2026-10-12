import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Carousel } from "./Carousel";
import styles from "./carousel.module.scss";

describe("Carousel", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders children and cloned items in loop mode", () => {
    render(
      <Carousel loop>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    // In loop mode, it renders 3x items: [Cloned] + [Original] + [Cloned]
    const slides = screen.getAllByRole("group", { name: /slide/i });
    expect(slides).toHaveLength(6);
  });

  it("handles navigation in non-loop mode", () => {
    const { container } = render(
      <Carousel showControls={true} showIndicators={false} loop={false}>
        <div data-testid="slide-1">Slide 1</div>
        <div data-testid="slide-2">Slide 2</div>
      </Carousel>,
    );
    
    const nextButton = container.querySelector(`.${styles.control}.${styles.next}`) as HTMLButtonElement;
    const prevButton = container.querySelector(`.${styles.control}.${styles.prev}`) as HTMLButtonElement;

    expect(prevButton).toBeDisabled();
    expect(nextButton).not.toBeDisabled();

    act(() => {
      fireEvent.click(nextButton);
    });
    expect(nextButton).toBeDisabled();
    expect(prevButton).not.toBeDisabled();
  });

  it("handles indicators and goToSlide", () => {
    const { container } = render(
      <Carousel showIndicators={true} loop={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );
    
    const indicators = container.querySelectorAll(`.${styles.indicator}`);
    expect(indicators).toHaveLength(2);
    expect(indicators[0]).toHaveAttribute("aria-current", "true");

    act(() => {
      fireEvent.click(indicators[1]);
    });
    expect(indicators[1]).toHaveAttribute("aria-current", "true");
    expect(indicators[0]).toHaveAttribute("aria-current", "false");
  });

  describe("previous / next buttons as Tab stops", () => {
    const slides = [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>];

    it("leaves the buttons in the Tab order", () => {
      render(<Carousel>{slides}</Carousel>);
      expect(screen.getByLabelText("Previous slide")).not.toHaveAttribute("tabindex");
      expect(screen.getByLabelText("Next slide")).not.toHaveAttribute("tabindex");
    });

    it("moves focus to the slide region when the pressed button reaches the end and disappears", () => {
      render(<Carousel loop={false}>{slides}</Carousel>);
      const region = screen.getByRole("region");
      const next = screen.getByLabelText("Next slide");
      const prev = screen.getByLabelText("Previous slide");
      act(() => next.focus());
      act(() => {
        fireEvent.click(next);
      });
      // 端に着いたボタンは無効になって消える。フォーカスを持ったままだと body へ落ちる。
      // 反対側のボタンへは移さない（押し続けると、端で向きが変わって戻っていく）
      expect(next).toBeDisabled();
      expect(region).toHaveFocus();

      act(() => prev.focus());
      act(() => {
        fireEvent.click(prev);
      });
      expect(prev).toBeDisabled();
      expect(region).toHaveFocus();
    });

    it("keeps focus on the button while there are slides left in that direction", () => {
      render(
        <Carousel loop={false}>
          {[...slides, <div key="3">Slide 3</div>]}
        </Carousel>,
      );
      const next = screen.getByLabelText("Next slide");
      act(() => next.focus());
      act(() => {
        fireEvent.click(next);
      });
      expect(next).toHaveFocus();
    });
  });

  describe("slide status announcement", () => {
    const labels = { slideStatus: (current: number, total: number) => `Slide ${current} of ${total}` };
    const slides = [<div key="1">Slide 1</div>, <div key="2">Slide 2</div>, <div key="3">Slide 3</div>];

    it("announces the slide the user moved to (indicator, button, arrow key)", () => {
      const { container } = render(
        <Carousel loop={false} labels={labels}>
          {slides}
        </Carousel>,
      );
      const status = screen.getByRole("status");
      expect(status).toBeEmptyDOMElement();

      // 押してもフォーカスは同じボタンに残り、スライドは位置が動くだけ。ここが空のままだと、何も読まれない
      act(() => {
        fireEvent.click(container.querySelectorAll(`.${styles.indicator}`)[2]);
      });
      expect(status).toHaveTextContent("Slide 3 of 3");

      act(() => {
        fireEvent.click(screen.getByLabelText("Previous slide"));
      });
      expect(status).toHaveTextContent("Slide 2 of 3");

      act(() => {
        fireEvent.keyDown(container.firstChild as HTMLElement, { key: "ArrowLeft" });
      });
      expect(status).toHaveTextContent("Slide 1 of 3");
    });

    it("wraps around in loop mode", () => {
      render(
        <Carousel loop labels={labels}>
          {slides}
        </Carousel>,
      );
      act(() => {
        fireEvent.click(screen.getByLabelText("Previous slide"));
      });
      expect(screen.getByRole("status")).toHaveTextContent("Slide 3 of 3");
    });

    it("stays silent while auto-playing", () => {
      render(
        <Carousel autoPlay interval={1000} loop={false} labels={labels}>
          {slides}
        </Carousel>,
      );
      act(() => {
        vi.advanceTimersByTime(1000);
      });
      // 対照: スライドは進んでいる
      expect(screen.getByLabelText("Go to slide 2")).toHaveAttribute("aria-current", "true");
      expect(screen.getByRole("status")).toBeEmptyDOMElement();
    });
  });

  it("handles autoPlay", () => {
    const { container } = render(
      <Carousel autoPlay interval={1000} loop={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );

    const nextButton = container.querySelector(`.${styles.control}.${styles.next}`) as HTMLButtonElement;
    expect(nextButton).not.toBeDisabled();

    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(nextButton).toBeDisabled();
  });

  it("pauses autoPlay on hover", () => {
    const { container } = render(
      <Carousel autoPlay interval={1000} loop={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );

    const carousel = container.querySelector(`.${styles.root}`)!;
    const nextButton = container.querySelector(`.${styles.control}.${styles.next}`) as HTMLButtonElement;

    act(() => {
      fireEvent.mouseEnter(carousel);
    });
    
    act(() => {
      vi.advanceTimersByTime(2000);
    });

    // Should still be on first slide
    expect(nextButton).not.toBeDisabled();

    act(() => {
      fireEvent.mouseLeave(carousel);
    });
    
    act(() => {
      vi.advanceTimersByTime(1000);
    });

    expect(nextButton).toBeDisabled();
  });

  it("handles keyboard navigation", () => {
    const { container } = render(
      <Carousel loop={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );

    const carousel = container.querySelector(`.${styles.root}`) as HTMLElement;
    const nextButton = container.querySelector(`.${styles.control}.${styles.next}`) as HTMLButtonElement;

    act(() => {
      carousel.focus();
    });
    act(() => {
      fireEvent.keyDown(carousel, { key: "ArrowRight" });
    });
    expect(nextButton).toBeDisabled();

    act(() => {
      fireEvent.keyDown(carousel, { key: "ArrowLeft" });
    });
    expect(container.querySelector(`.${styles.control}.${styles.prev}`)).toBeDisabled();
  });

  it("handles swipe gestures", () => {
    const { container } = render(
      <Carousel loop={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );

    const track = container.querySelector(`.${styles.track}`)!;
    
    // Swipe left (next)
    act(() => {
      fireEvent.touchStart(track, { targetTouches: [{ clientX: 200 } as unknown as Touch] });
      fireEvent.touchMove(track, { targetTouches: [{ clientX: 100 } as unknown as Touch] });
      fireEvent.touchEnd(track);
    });

    expect(container.querySelector(`.${styles.control}.${styles.next}`)).toBeDisabled();

    // Swipe right (prev)
    act(() => {
      fireEvent.touchStart(track, { targetTouches: [{ clientX: 100 } as unknown as Touch] });
      fireEvent.touchMove(track, { targetTouches: [{ clientX: 200 } as unknown as Touch] });
      fireEvent.touchEnd(track);
    });

    expect(container.querySelector(`.${styles.control}.${styles.prev}`)).toBeDisabled();
  });

  it("handles window resize and slidesToShow", () => {
    render(
      <Carousel slidesToShow={{ base: 1, md: 2, lg: 3 }}>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </Carousel>,
    );

    // Default width is mocked in tests, usually 1024 if not specified or just uses window.innerWidth
    // We can mock innerWidth
    window.innerWidth = 500;
    fireEvent(window, new Event("resize"));
    // Wait for effect
    
    // We can check if items have correct width
    let items = screen.getAllByRole("group", { name: /slide/i });
    // item width = 100% / slidesToShow
    expect(items[0]).toHaveStyle({ width: "100%" });

    window.innerWidth = 800; // md
    fireEvent(window, new Event("resize"));
    expect(items[0]).toHaveStyle({ width: "50%" });

    window.innerWidth = 1200; // lg
    fireEvent(window, new Event("resize"));
    expect(items[0]).toHaveStyle({ width: "33.333333333333336%" });
  });

  it("applies aspectRatio and objectFit", () => {
    render(
      <Carousel aspectRatio="16/9" objectFit="contain">
        <img src="test.jpg" alt="test" />
      </Carousel>,
    );
    const item = screen.getAllByRole("group", { name: /slide/i })[0];
    expect(item).toHaveStyle({ aspectRatio: "16/9" });
    // CSS variable check
    expect(item).toHaveStyle({ "--wim-carousel-object-fit": "contain" });
  });

  it("handles infinite loop jump", () => {
    render(
      <Carousel loop>
        <div data-testid="slide-1">1</div>
        <div data-testid="slide-2">2</div>
      </Carousel>,
    );
    // Initial index: 2 (if loop: true and items: 2)
    // Extended items: [End1, End2, Orig1, Orig2, Start1, Start2]
    // Indices: 0, 1, 2, 3, 4, 5
    // Initial: 2
    
    const track = screen.getByRole("region").querySelector(`.${styles.track}`) as HTMLElement;
    // 動いた先（トラックの位置）を見る（CI-19）。以前は、期待が 1 つも無かった。
    const initial = track.style.transform;
    
    // 位置は、複製を含む並びの中の番号 × 100%。最初は 2 番目（Orig1）＝ -200%。
    expect(initial).toBe("translateX(-200%)");

    // 動いている最中のクリックは捨てられるので、1 回ごとにトランジションを終わらせる。
    // **以前のテストは、続けて 2 回クリックしていた** ── 2 回目が捨てられて端に届かず、
    // 「端で元の位置へ飛ぶ」という題の動きは、一度も起きていなかった。
    fireEvent.click(screen.getByRole("button", { name: /next/i })); // 2 -> 3（Orig2）
    expect(track.style.transform).toBe("translateX(-300%)");
    fireEvent.transitionEnd(track); // 端ではないので、飛ばない
    expect(track.style.transform).toBe("translateX(-300%)");

    fireEvent.click(screen.getByRole("button", { name: /next/i })); // 3 -> 4（先頭の複製）
    expect(track.style.transform).toBe("translateX(-400%)");

    // 端（複製）で動き終わると、同じ中身の元の位置（2 番目）へ飛ぶ
    fireEvent.transitionEnd(track);
    expect(track.style.transform).toBe(initial);
  });

  // T263: 操作の置き場。**jsdom で確かめられるのはクラスが付くところまで**で、
  // 「矢印が文字に乗らない」ことは CSS でしか起きないので VRT 側（CustomContent）で見る。
  // vitest は CSS Modules をプロキシしていて styles.x は常に "x" を返すため、
  // このアサーションは「prop がクラス名まで届いた」ことの証拠であって、見た目の証拠ではない。
  it("moves the controls out of the slide when controlsPlacement is outside", () => {
    const { rerender } = render(
      <Carousel>
        <div>A</div>
        <div>B</div>
      </Carousel>,
    );
    expect(screen.getByRole("region").className).not.toContain(styles.controlsOutside);

    rerender(
      <Carousel controlsPlacement="outside">
        <div>A</div>
        <div>B</div>
      </Carousel>,
    );
    expect(screen.getByRole("region").className).toContain(styles.controlsOutside);
  });

  it("returns null when no children provided", () => {
    const { container } = render(<Carousel />);
    expect(container.firstChild).toBeNull();
  });
});
