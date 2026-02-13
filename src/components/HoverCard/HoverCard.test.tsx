import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "./HoverCard";

describe("HoverCard", () => {
    beforeEach(() => {
        vi.useFakeTimers();
    });

    afterEach(() => {
        vi.useRealTimers();
    });

    it("shows content on hover after delay", () => {
        render(
            <HoverCard openDelay={100} closeDelay={100}>
                <HoverCardTrigger>Trigger</HoverCardTrigger>
                <HoverCardContent>Content</HoverCardContent>
            </HoverCard>
        );

        expect(screen.queryByText("Content")).not.toBeInTheDocument();

        fireEvent.mouseEnter(screen.getByText("Trigger"));

        expect(screen.queryByText("Content")).not.toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(150);
        });

        expect(screen.getByText("Content")).toBeInTheDocument();
    });

    it("hides content on leave after delay", () => {
        render(
            <HoverCard openDelay={0} closeDelay={100}>
                <HoverCardTrigger>Trigger</HoverCardTrigger>
                <HoverCardContent>Content</HoverCardContent>
            </HoverCard>
        );

        fireEvent.mouseEnter(screen.getByText("Trigger"));
        act(() => {
            vi.advanceTimersByTime(10);
        });
        expect(screen.getByText("Content")).toBeInTheDocument();

        fireEvent.mouseLeave(screen.getByText("Trigger"));
        expect(screen.getByText("Content")).toBeInTheDocument();

        act(() => {
            vi.advanceTimersByTime(150);
        });

        expect(screen.queryByText("Content")).not.toBeInTheDocument();
    });
});
