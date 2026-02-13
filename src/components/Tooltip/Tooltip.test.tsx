import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Tooltip, TooltipTrigger, TooltipContent } from "./Tooltip";

describe("Tooltip", () => {
    it("shows content on hover after delay", async () => {
        vi.useFakeTimers();
        render(
            <Tooltip delay={100}>
                <TooltipTrigger>Hover me</TooltipTrigger>
                <TooltipContent>Tooltip info</TooltipContent>
            </Tooltip>
        );

        const trigger = screen.getByText("Hover me");
        fireEvent.mouseEnter(trigger);

        // Initially not visible
        expect(screen.queryByText("Tooltip info")).not.toBeInTheDocument();

        // Advance timers
        act(() => {
            vi.advanceTimersByTime(150);
        });

        expect(screen.getByText("Tooltip info")).toBeInTheDocument();
        vi.useRealTimers();
    });

    it("hides content on mouse leave", async () => {
        vi.useFakeTimers();
        render(
            <Tooltip delay={0}>
                <TooltipTrigger>Hover me</TooltipTrigger>
                <TooltipContent>Tooltip info</TooltipContent>
            </Tooltip>
        );

        const trigger = screen.getByText("Hover me");
        fireEvent.mouseEnter(trigger);

        act(() => {
            vi.advanceTimersByTime(10);
        });

        expect(screen.getByText("Tooltip info")).toBeInTheDocument();

        fireEvent.mouseLeave(trigger);
        expect(screen.queryByText("Tooltip info")).not.toBeInTheDocument();
        vi.useRealTimers();
    });
});
