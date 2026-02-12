import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Toast, ToastProvider, useToast } from "./Toast";

describe("Toast", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    it("renders title and description", () => {
        render(<Toast title="Message" description="Toast description" />);
        expect(screen.getByText("Message")).toBeInTheDocument();
        expect(screen.getByText("Toast description")).toBeInTheDocument();
    });

    it("calls onClose after duration", () => {
        const handleClose = vi.fn();
        render(<Toast title="Message" duration={1000} onClose={handleClose} />);

        act(() => {
            vi.advanceTimersByTime(1000 + 300 + 10);
        });

        expect(handleClose).toHaveBeenCalled();
    });

    it("calls onClose when close button is clicked", () => {
        const handleClose = vi.fn();
        render(<Toast title="Message" onClose={handleClose} />);

        const closeButton = screen.getByLabelText("Close");
        fireEvent.click(closeButton);

        act(() => {
            vi.advanceTimersByTime(300);
        });

        expect(handleClose).toHaveBeenCalled();
    });

    it("applies variant class", () => {
        const { container } = render(<Toast title="Message" variant="success" />);
        expect(container.firstChild).toHaveClass("wim-toast--success");
    });
});

const ToastConsumer = () => {
    const { show } = useToast();
    return <button onClick={() => show({ title: "Live Message" })}>Show Toast</button>;
};

describe("ToastProvider", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    it("shows toast when show is called", () => {
        render(
            <ToastProvider>
                <ToastConsumer />
            </ToastProvider>
        );

        fireEvent.click(screen.getByText("Show Toast"));

        act(() => {
            vi.advanceTimersByTime(10);
        });

        expect(screen.getByText("Live Message")).toBeInTheDocument();
    });
});
