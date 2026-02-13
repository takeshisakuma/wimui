import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Banner } from "./Banner";
import React from "react";

vi.mock("react-i18next", () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe("Banner", () => {
    it("renders title and description", () => {
        render(<Banner title="Alert" description="Something happened" />);
        expect(screen.getByText("Alert")).toBeInTheDocument();
        expect(screen.getByText("Something happened")).toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", () => {
        const onClose = vi.fn();
        render(<Banner title="Close me" onClose={onClose} />);

        const closeBtn = screen.getByLabelText("Close");
        fireEvent.click(closeBtn);
        expect(onClose).toHaveBeenCalled();
    });

    it("renders actions", () => {
        render(<Banner title="T" action={<button>Action</button>} />);
        expect(screen.getByText("Action")).toBeInTheDocument();
    });
});
