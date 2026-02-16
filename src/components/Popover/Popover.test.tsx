import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from "./Popover";

describe("Popover", () => {
    it("renders trigger and opens content on click", () => {
        render(
            <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent>Popover Content</PopoverContent>
            </Popover>
        );

        expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
        fireEvent.click(screen.getByText("Open"));
        expect(screen.getByText("Popover Content")).toBeInTheDocument();
    });

    it("closes when close button is clicked", async () => {
        render(
            <Popover defaultOpen>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent>
                    Popover Content
                    <PopoverClose>Close</PopoverClose>
                </PopoverContent>
            </Popover>
        );

        expect(screen.getByText("Popover Content")).toBeInTheDocument();
        fireEvent.click(screen.getByText("Close"));
        await waitFor(() => {
            expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
        });
    });

    it("closes when clicking outside", async () => {
        render(
            <div>
                <div data-testid="outside">Outside</div>
                <Popover defaultOpen>
                    <PopoverTrigger>Open</PopoverTrigger>
                    <PopoverContent>Popover Content</PopoverContent>
                </Popover>
            </div>
        );

        expect(screen.getByText("Popover Content")).toBeInTheDocument();
        fireEvent.mouseDown(screen.getByTestId("outside"));
        await waitFor(() => {
            expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
        });
    });
});
