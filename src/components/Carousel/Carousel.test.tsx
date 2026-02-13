import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Carousel } from "./Carousel";

describe("Carousel", () => {
    it("renders children", () => {
        render(
            <Carousel>
                <div>Slide 1</div>
                <div>Slide 2</div>
            </Carousel>
        );
        expect(screen.getAllByText("Slide 1").length).toBeGreaterThan(0);
        expect(screen.getAllByText("Slide 2").length).toBeGreaterThan(0);
    });

    it("handles navigation", () => {
        render(
            <Carousel showControls={true} showIndicators={false} loop={false}>
                <div>Slide 1</div>
                <div>Slide 2</div>
            </Carousel>
        );
        // Assuming implementation detail: visible slide is based on transform. 
        // Testing DOM structure existence is easier.
        // It renders all slides in the track. 
        expect(screen.getAllByText(/Slide/)).toHaveLength(2);

        const nextButton = screen.getByLabelText("Next slide");
        fireEvent.click(nextButton);
        // Verify state change if possible, or just that it doesn't crash.
        // Since it uses transform, we can check style if we really want, or assume functional correctness via interaction.
        // Let's check if the button becomes disabled if loop is false and we are at the end.
        // Initial index 0. Click next -> index 1. Total 2. Display 1. Max index = 1.
        // Should be at end.
        expect(nextButton).toBeDisabled();
    });

    it("renders indicators", () => {
        render(
            <Carousel showIndicators={true}>
                <div>Slide 1</div>
                <div>Slide 2</div>
            </Carousel>
        );
        // 2 indicators
        const indicators = screen.getAllByLabelText(/Go to slide/);
        expect(indicators).toHaveLength(2);
    });
});
