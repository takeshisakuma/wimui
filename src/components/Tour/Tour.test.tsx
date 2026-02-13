import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Tour } from "./Tour";

describe("Tour", () => {
    const steps = [
        { target: "#step1", title: "Step 1", description: "First step" },
        { target: "#step2", title: "Step 2", description: "Second step" },
    ];

    beforeEach(() => {
        // Set up DOM elements for tour targets
        document.body.innerHTML = `
            <div id="step1" style="width: 100px; height: 50px; position: absolute; top: 100px; left: 100px;">Step 1 Target</div>
            <div id="step2" style="width: 100px; height: 50px; position: absolute; top: 500px; left: 100px;">Step 2 Target</div>
        `;

        // Mock getBoundingClientRect
        Element.prototype.getBoundingClientRect = vi.fn().mockImplementation(function (this: HTMLElement) {
            if (this.id === "step1") {
                return { top: 100, left: 100, width: 100, height: 50, bottom: 150, right: 200 } as DOMRect;
            }
            if (this.id === "step2") {
                return { top: 500, left: 100, width: 100, height: 50, bottom: 550, right: 200 } as DOMRect;
            }
            return { top: 0, left: 0, width: 0, height: 0, bottom: 0, right: 0 } as DOMRect;
        });

        // Mock scrollIntoView
        Element.prototype.scrollIntoView = vi.fn();

        vi.useFakeTimers();
    });

    it("renders nothing when open is false", () => {
        render(<Tour steps={steps} open={false} onClose={() => { }} />);
        expect(screen.queryByText("Step 1")).not.toBeInTheDocument();
    });

    it("renders first step when open is true", () => {
        render(<Tour steps={steps} open={true} onClose={() => { }} />);

        act(() => {
            vi.advanceTimersByTime(100);
        });

        expect(screen.getByText("Step 1")).toBeInTheDocument();
        expect(screen.getByText("First step")).toBeInTheDocument();
        expect(screen.getByText("1 / 2")).toBeInTheDocument();
    });

    it("moves to next step when Next is clicked", () => {
        render(<Tour steps={steps} open={true} onClose={() => { }} />);

        act(() => {
            vi.advanceTimersByTime(100);
        });

        fireEvent.click(screen.getByText("Next"));

        act(() => {
            vi.advanceTimersByTime(100);
        });

        expect(screen.getByText("Step 2")).toBeInTheDocument();
        expect(screen.getByText("2 / 2")).toBeInTheDocument();
    });

    it("calls onFinish when Finish is clicked", () => {
        const handleFinish = vi.fn();
        render(<Tour steps={steps} open={true} onClose={() => { }} onFinish={handleFinish} />);

        act(() => {
            vi.advanceTimersByTime(100);
        });

        fireEvent.click(screen.getByText("Next"));

        act(() => {
            vi.advanceTimersByTime(100);
        });

        fireEvent.click(screen.getByText("Finish"));
        expect(handleFinish).toHaveBeenCalled();
    });

    it("calls onClose when mask is clicked", () => {
        const handleClose = vi.fn();
        render(<Tour steps={steps} open={true} onClose={handleClose} />);

        const mask = document.querySelector(".wim-tour-mask");
        if (mask) fireEvent.click(mask);

        expect(handleClose).toHaveBeenCalled();
    });
});
