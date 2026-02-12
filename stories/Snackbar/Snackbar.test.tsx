import { render, screen, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Snackbar } from "./Snackbar";

describe("Snackbar", () => {
    it("does not render when open is false", () => {
        const { container } = render(<Snackbar message="Test" open={false} />);
        expect(container.firstChild).toBeNull();
    });

    it("renders message when open is true", async () => {
        render(<Snackbar message="Hello World" open={true} />);
        expect(screen.getByText("Hello World")).toBeInTheDocument();
    });

    it("calls onClose after timeout", async () => {
        vi.useFakeTimers();
        const onClose = vi.fn();
        render(<Snackbar message="Test" open={true} autoHideDuration={1000} onClose={onClose} />);

        act(() => {
            vi.advanceTimersByTime(1500);
        });

        expect(onClose).toHaveBeenCalled();
        vi.useRealTimers();
    });
});
