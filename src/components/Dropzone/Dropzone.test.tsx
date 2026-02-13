import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Dropzone } from "./Dropzone";

describe("Dropzone", () => {
    it("renders label and description", () => {
        render(<Dropzone label="Upload Here" description="Drag file" />);
        expect(screen.getByText("Upload Here")).toBeInTheDocument();
        expect(screen.getByText("Drag file")).toBeInTheDocument();
    });

    it("handles drag events visually", () => {
        render(<Dropzone />);
        // dropzone container which is the click target as well
        // Look for the div with class wim-dropzone (which is inner div)
        // Since we don't have role on inner div easily (it says role="button"), let's find by role.
        const dropzone = screen.getByRole("button");

        fireEvent.dragOver(dropzone);
        expect(dropzone).toHaveClass("wim-dropzone--dragging");

        fireEvent.dragLeave(dropzone);
        expect(dropzone).not.toHaveClass("wim-dropzone--dragging");
    });

    it("handles file drop", () => {
        const handleChange = vi.fn();
        render(<Dropzone onChange={handleChange} />);
        const dropzone = screen.getByRole("button");

        const file = new File(["content"], "test.png", { type: "image/png" });

        fireEvent.drop(dropzone, {
            dataTransfer: {
                files: [file]
            }
        });

        expect(handleChange).toHaveBeenCalled();
        expect(screen.getByText("test.png")).toBeInTheDocument();
    });
});
