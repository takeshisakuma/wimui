import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Notification } from "./Notification";

// Mock useTranslation
vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (str: string) => str,
    }),
}));

describe("Notification", () => {
    it("renders title and description", () => {
        render(
            <Notification
                title="System Update"
                description="The system has been updated."
            />
        );
        expect(screen.getByText("System Update")).toBeInTheDocument();
        expect(screen.getByText("The system has been updated.")).toBeInTheDocument();
    });

    it("renders type-specific icon", () => {
        const { container } = render(<Notification title="Success" type="success" />);
        const icon = container.querySelector(".wim-notification-icon");
        expect(icon).toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", () => {
        const handleClose = vi.fn();
        render(<Notification title="Title" onClose={handleClose} />);

        const closeButton = screen.getByLabelText("Close");
        fireEvent.click(closeButton);

        expect(handleClose).toHaveBeenCalledTimes(1);
    });

    it("does not render close button when closable is false", () => {
        render(<Notification title="Title" closable={false} />);
        expect(screen.queryByLabelText("Close")).not.toBeInTheDocument();
    });

    it("applies custom className", () => {
        render(<Notification title="Title" className="custom-notification" />);
        expect(screen.getByRole("alert")).toHaveClass("custom-notification");
    });
});
