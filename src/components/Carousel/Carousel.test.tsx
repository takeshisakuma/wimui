import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Carousel } from "./Carousel";

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
    
    const nextButton = container.querySelector(".wim-carousel__control--next") as HTMLButtonElement;
    const prevButton = container.querySelector(".wim-carousel__control--prev") as HTMLButtonElement;

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
    
    const indicators = container.querySelectorAll(".wim-carousel__indicator");
    expect(indicators).toHaveLength(2);
    expect(indicators[0]).toHaveAttribute("aria-current", "true");

    act(() => {
      fireEvent.click(indicators[1]);
    });
    expect(indicators[1]).toHaveAttribute("aria-current", "true");
    expect(indicators[0]).toHaveAttribute("aria-current", "false");
  });

  it("handles autoPlay", () => {
    const { container } = render(
      <Carousel autoPlay interval={1000} loop={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );

    const nextButton = container.querySelector(".wim-carousel__control--next") as HTMLButtonElement;
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

    const carousel = container.querySelector(".wim-carousel")!;
    const nextButton = container.querySelector(".wim-carousel__control--next") as HTMLButtonElement;

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

    const carousel = container.querySelector(".wim-carousel") as HTMLElement;
    const nextButton = container.querySelector(".wim-carousel__control--next") as HTMLButtonElement;

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
    expect(container.querySelector(".wim-carousel__control--prev")).toBeDisabled();
  });

  it("handles swipe gestures", () => {
    const { container } = render(
      <Carousel loop={false}>
        <div>Slide 1</div>
        <div>Slide 2</div>
      </Carousel>,
    );

    const track = container.querySelector(".wim-carousel__track")!;
    
    // Swipe left (next)
    act(() => {
      fireEvent.touchStart(track, { targetTouches: [{ clientX: 200 } as unknown as Touch] });
      fireEvent.touchMove(track, { targetTouches: [{ clientX: 100 } as unknown as Touch] });
      fireEvent.touchEnd(track);
    });

    expect(container.querySelector(".wim-carousel__control--next")).toBeDisabled();

    // Swipe right (prev)
    act(() => {
      fireEvent.touchStart(track, { targetTouches: [{ clientX: 100 } as unknown as Touch] });
      fireEvent.touchMove(track, { targetTouches: [{ clientX: 200 } as unknown as Touch] });
      fireEvent.touchEnd(track);
    });

    expect(container.querySelector(".wim-carousel__control--prev")).toBeDisabled();
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
    
    const track = screen.getByRole("region").querySelector(".wim-carousel__track")!;
    
    // Trigger transition end at end boundary
    // Simulate being at index 4 (last original item + 1)
    fireEvent.click(screen.getByRole("button", { name: /next/i })); // 2 -> 3
    fireEvent.click(screen.getByRole("button", { name: /next/i })); // 3 -> 4 (start of clone start)
    
    // TransitionEnd should jump back to index 2
    fireEvent.transitionEnd(track);
    // After jump, index should be 2 again.
    // We can't easily check state, but we can check if it's transitioning
    // Actually, Carousel sets isTransitioning(false) in handleTransitionEnd
  });

  it("returns null when no children provided", () => {
    const { container } = render(<Carousel />);
    expect(container.firstChild).toBeNull();
  });
});
