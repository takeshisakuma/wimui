import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import {
    BottomSheet,
    BottomSheetTrigger,
    BottomSheetContent,
    BottomSheetHeader,
    BottomSheetTitle,
} from "./BottomSheet";

describe("BottomSheet", () => {
    it("renders trigger and opens content when clicked", async () => {
        render(
            <BottomSheet>
                <BottomSheetTrigger>Open Sheet</BottomSheetTrigger>
                <BottomSheetContent>
                    <BottomSheetHeader>
                        <BottomSheetTitle>Sheet Title</BottomSheetTitle>
                    </BottomSheetHeader>
                    <div>Sheet Body Content</div>
                </BottomSheetContent>
            </BottomSheet>
        );

        // Content should not be in the document initially
        expect(screen.queryByText("Sheet Title")).not.toBeInTheDocument();

        // Click trigger
        fireEvent.click(screen.getByText("Open Sheet"));

        // Content should now be in the document
        await waitFor(() => {
            expect(screen.getByText("Sheet Title")).toBeInTheDocument();
            expect(screen.getByText("Sheet Body Content")).toBeInTheDocument();
        });
    });

    it("closes when the overlay is clicked", async () => {
        render(
            <BottomSheet defaultOpen={true}>
                <BottomSheetContent>
                    <div>Sheet Content</div>
                </BottomSheetContent>
            </BottomSheet>
        );

        expect(screen.getByText("Sheet Content")).toBeInTheDocument();

        // Click overlay (the parent of the content in the portal)
        // Note: portal renders into document.body
        const overlay = document.querySelector(".wim-bottom-sheet-overlay");
        if (overlay) {
            fireEvent.click(overlay);
        }

        await waitFor(() => {
            expect(screen.queryByText("Sheet Content")).not.toBeInTheDocument();
        });
    });

    it("closes when Escape key is pressed", async () => {
        render(
            <BottomSheet defaultOpen={true}>
                <BottomSheetContent>
                    <div>Sheet Content</div>
                </BottomSheetContent>
            </BottomSheet>
        );

        expect(screen.getByText("Sheet Content")).toBeInTheDocument();

        fireEvent.keyDown(document, { key: "Escape" });

        await waitFor(() => {
            expect(screen.queryByText("Sheet Content")).not.toBeInTheDocument();
        });
    });
});
