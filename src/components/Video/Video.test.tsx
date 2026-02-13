import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Video } from "./Video";

describe("Video", () => {
    const src = "https://example.com/video.mp4";

    beforeEach(() => {
        // Mocking HTMLMediaElement methods
        window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
        window.HTMLMediaElement.prototype.pause = vi.fn();
        window.HTMLMediaElement.prototype.load = vi.fn();
    });

    it("renders video element with src", () => {
        const { container } = render(<Video src={src} />);
        const videoElement = container.querySelector("video");
        expect(videoElement).toHaveAttribute("src", src);
    });

    it("renders custom controls when customControls is true", () => {
        render(<Video src={src} customControls />);
        expect(screen.getByLabelText("Play")).toBeInTheDocument();
        expect(screen.getByLabelText("Mute")).toBeInTheDocument();
        expect(screen.getByLabelText("Fullscreen")).toBeInTheDocument();
    });

    it("toggles play/pause with custom controls", () => {
        render(<Video src={src} customControls />);
        const playBtn = screen.getByLabelText("Play");

        fireEvent.click(playBtn);
        expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();

        // State change is internal, but RTL should see the updated label if we mock the play event correctly
        // However, we'll just check if the method was called for now.
    });

    it("renders caption", () => {
        render(<Video src={src} caption="Example Video" />);
        expect(screen.getByText("Example Video")).toBeInTheDocument();
    });

    it("applies styling props", () => {
        const { container } = render(<Video src={src} radius="large" shadow border />);
        const inner = container.querySelector(".wim-video-inner");
        expect(inner).toHaveClass("wim-video--radius-large");
        expect(inner).toHaveClass("wim-video--shadow");
        expect(inner).toHaveClass("wim-video--border");
    });
});
