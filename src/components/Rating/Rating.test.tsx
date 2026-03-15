import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Rating } from "./Rating";

describe("Rating", () => {
  it("renders correct number of stars", () => {
    const { container } = render(<Rating count={5} />);
    expect(container.querySelectorAll(".wim-rating__star")).toHaveLength(5);
  });

  it("calls onChange when a star is clicked", () => {
    const onChange = vi.fn();
    const { container } = render(<Rating count={5} onChange={onChange} />);
    const stars = container.querySelectorAll(".wim-rating__star");
    fireEvent.click(stars[2]); // 3rd star
    expect(onChange).toHaveBeenCalledWith(3);
  });

  it("shows half stars when displayValue has .5", () => {
    const { container } = render(<Rating value={2.5} allowHalf />);
    const stars = container.querySelectorAll(".wim-rating__star");
    expect(stars[2]).toHaveClass("wim-rating__star--half");
  });

  it("is disabled when disabled prop is true", () => {
    render(<Rating disabled />);
    expect(screen.getByRole("radiogroup")).toHaveClass("wim-rating--disabled");
  });

  describe("roving tabindex", () => {
    it("gives tabIndex=0 to the checked star", () => {
      const { container } = render(<Rating value={3} count={5} />);
      const stars = container.querySelectorAll('[role="radio"]');
      expect(stars[2]).toHaveAttribute("tabindex", "0");
      expect(stars[0]).toHaveAttribute("tabindex", "-1");
      expect(stars[4]).toHaveAttribute("tabindex", "-1");
    });

    it("gives tabIndex=0 to the first star when no value is set", () => {
      const { container } = render(<Rating count={5} />);
      const stars = container.querySelectorAll('[role="radio"]');
      expect(stars[0]).toHaveAttribute("tabindex", "0");
      expect(stars[1]).toHaveAttribute("tabindex", "-1");
    });

    it("gives tabIndex=0 to the star representing a half value", () => {
      const { container } = render(<Rating value={2.5} allowHalf count={5} />);
      const stars = container.querySelectorAll('[role="radio"]');
      // value=2.5 → star3 (index=2) is aria-checked
      expect(stars[2]).toHaveAttribute("tabindex", "0");
    });

    it("sets all stars to tabIndex=-1 when disabled", () => {
      const { container } = render(<Rating disabled value={3} count={5} />);
      const stars = container.querySelectorAll('[role="radio"]');
      stars.forEach((star) => {
        expect(star).toHaveAttribute("tabindex", "-1");
      });
    });
  });

  describe("keyboard navigation", () => {
    it("increases value on ArrowRight", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={2} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[1], { key: "ArrowRight" });
      expect(onChange).toHaveBeenCalledWith(3);
    });

    it("increases value on ArrowUp", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={2} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[1], { key: "ArrowUp" });
      expect(onChange).toHaveBeenCalledWith(3);
    });

    it("decreases value on ArrowLeft", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={3} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[2], { key: "ArrowLeft" });
      expect(onChange).toHaveBeenCalledWith(2);
    });

    it("decreases value on ArrowDown", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={3} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[2], { key: "ArrowDown" });
      expect(onChange).toHaveBeenCalledWith(2);
    });

    it("does not go below 0 on ArrowLeft", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={1} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[0], { key: "ArrowLeft" });
      expect(onChange).toHaveBeenCalledWith(0);
      fireEvent.keyDown(stars[0], { key: "ArrowLeft" });
      expect(onChange).toHaveBeenCalledTimes(2);
      expect(onChange).toHaveBeenLastCalledWith(0);
    });

    it("does not go above count on ArrowRight", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={5} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[4], { key: "ArrowRight" });
      expect(onChange).toHaveBeenCalledWith(5);
    });

    it("sets value to 0 on Home", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={3} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[2], { key: "Home" });
      expect(onChange).toHaveBeenCalledWith(0);
    });

    it("sets value to count on End", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={2} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[1], { key: "End" });
      expect(onChange).toHaveBeenCalledWith(5);
    });

    it("moves focus to next star on ArrowRight", () => {
      const { container } = render(<Rating defaultValue={2} count={5} />);
      const stars = container.querySelectorAll('[role="radio"]');
      (stars[1] as HTMLElement).focus();
      fireEvent.keyDown(stars[1], { key: "ArrowRight" });
      expect(document.activeElement).toBe(stars[2]);
    });

    it("moves focus to previous star on ArrowLeft", () => {
      const { container } = render(<Rating defaultValue={3} count={5} />);
      const stars = container.querySelectorAll('[role="radio"]');
      (stars[2] as HTMLElement).focus();
      fireEvent.keyDown(stars[2], { key: "ArrowLeft" });
      expect(document.activeElement).toBe(stars[1]);
    });

    it("selects star value on Enter", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={1} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[3], { key: "Enter" });
      expect(onChange).toHaveBeenCalledWith(4);
    });

    it("selects star value on Space", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={1} count={5} onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[3], { key: " " });
      expect(onChange).toHaveBeenCalledWith(4);
    });

    it("does not respond to keyboard when disabled", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={2} count={5} disabled onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[1], { key: "ArrowRight" });
      expect(onChange).not.toHaveBeenCalled();
    });

    it("steps by 0.5 on ArrowRight when allowHalf is true", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={2} count={5} allowHalf onChange={onChange} />,
      );
      const stars = container.querySelectorAll('[role="radio"]');
      fireEvent.keyDown(stars[1], { key: "ArrowRight" });
      expect(onChange).toHaveBeenCalledWith(2.5);
    });
  });

  describe("readOnly", () => {
    it("renders as role=img when readOnly", () => {
      render(<Rating value={3} count={5} readOnly />);
      expect(screen.getByRole("img")).toBeInTheDocument();
      expect(screen.queryByRole("radiogroup")).not.toBeInTheDocument();
    });

    it("sets aria-label describing the rating value when readOnly", () => {
      render(<Rating value={3} count={5} readOnly />);
      const img = screen.getByRole("img");
      expect(img).toHaveAttribute("aria-label");
      expect(img.getAttribute("aria-label")).toContain("3");
    });

    it("does not call onChange when clicked in readOnly mode", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={3} count={5} readOnly onChange={onChange} />,
      );
      const stars = container.querySelectorAll(".wim-rating__star");
      fireEvent.click(stars[4]);
      expect(onChange).not.toHaveBeenCalled();
    });

    it("does not call onChange on keyboard in readOnly mode", () => {
      const onChange = vi.fn();
      const { container } = render(
        <Rating value={3} count={5} readOnly onChange={onChange} />,
      );
      const stars = container.querySelectorAll(".wim-rating__star");
      fireEvent.keyDown(stars[2], { key: "ArrowRight" });
      expect(onChange).not.toHaveBeenCalled();
    });

    it("sets all stars to tabIndex=-1 in readOnly mode", () => {
      const { container } = render(<Rating value={3} count={5} readOnly />);
      const stars = container.querySelectorAll(".wim-rating__star");
      stars.forEach((star) => {
        expect(star).toHaveAttribute("tabindex", "-1");
      });
    });

    it("does not apply disabled styling in readOnly mode", () => {
      const { container } = render(<Rating value={3} count={5} readOnly />);
      expect(container.querySelector(".wim-rating")).not.toHaveClass(
        "wim-rating--disabled",
      );
    });
  });

  describe("ARIA attributes", () => {
    it("sets aria-required on radiogroup when required is true", () => {
      render(<Rating required />);
      expect(screen.getByRole("radiogroup")).toHaveAttribute(
        "aria-required",
        "true",
      );
    });

    it("sets aria-describedby on radiogroup when error is present", () => {
      render(<Rating error="Required field" />);
      const radiogroup = screen.getByRole("radiogroup");
      const describedBy = radiogroup.getAttribute("aria-describedby");
      expect(describedBy).toBeTruthy();
      expect(document.getElementById(describedBy!)).toBeTruthy();
    });

    it("does not set aria-describedby when no error", () => {
      render(<Rating />);
      expect(screen.getByRole("radiogroup")).not.toHaveAttribute(
        "aria-describedby",
      );
    });

    it("sets aria-checked=true on the checked star", () => {
      const { container } = render(<Rating value={3} count={5} />);
      const stars = container.querySelectorAll('[role="radio"]');
      expect(stars[2]).toHaveAttribute("aria-checked", "true");
      expect(stars[0]).toHaveAttribute("aria-checked", "false");
    });

    it("sets aria-checked=true on the half-star", () => {
      const { container } = render(<Rating value={2.5} allowHalf count={5} />);
      const stars = container.querySelectorAll('[role="radio"]');
      // value=2.5 → starValue=3 (index=2) is checked
      expect(stars[2]).toHaveAttribute("aria-checked", "true");
      expect(stars[1]).toHaveAttribute("aria-checked", "false");
    });
  });
});
