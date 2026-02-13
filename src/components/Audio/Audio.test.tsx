import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Audio } from "./Audio";

describe("Audio", () => {
    const src = "https://example.com/audio.mp3";

    beforeEach(() => {
        // Mocking HTMLMediaElement methods
        window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
        window.HTMLMediaElement.prototype.pause = vi.fn();
        window.HTMLMediaElement.prototype.load = vi.fn();
    });

    it("renders audio element with src", () => {
        const { container } = render(<Audio src={src} />);
        const audioElement = container.querySelector("audio");
        expect(audioElement).toHaveAttribute("src", src);
    });

    it("renders custom controls when customControls is true", () => {
        render(<Audio src={src} customControls />);
        expect(screen.getByLabelText("Play")).toBeInTheDocument();
        expect(screen.getByLabelText("Mute")).toBeInTheDocument();
    });

    it("toggles play/pause with custom controls", () => {
        render(<Audio src={src} customControls />);
        const playBtn = screen.getByLabelText("Play");

        fireEvent.click(playBtn);
        expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
    });

    it("renders caption", () => {
        render(<Audio src={src} caption="Example Audio" />);
        expect(screen.getByText("Example Audio")).toBeInTheDocument();
    });
});
