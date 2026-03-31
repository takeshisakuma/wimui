import { render, screen, fireEvent, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Video } from "./Video";

describe("Video", () => {
  const src = "https://example.com/video.mp4";

  beforeEach(() => {
    // Mocking HTMLMediaElement methods
    window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
    window.HTMLMediaElement.prototype.pause = vi.fn();
    window.HTMLMediaElement.prototype.load = vi.fn();
    
    // Mock requestFullscreen
    window.Element.prototype.requestFullscreen = vi.fn().mockResolvedValue(undefined);
    document.exitFullscreen = vi.fn().mockResolvedValue(undefined);
  });

  it("renders video element with src", () => {
    const { container } = render(<Video src={src} />);
    const videoElement = container.querySelector("video");
    expect(videoElement).toHaveAttribute("src", src);
  });

  it("renders custom controls when customControls is true", () => {
    render(<Video src={src} customControls />);
    expect(screen.getByLabelText(/play/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/mute/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/fullscreen/i)).toBeInTheDocument();
  });

  it("toggles play/pause with custom controls", () => {
    render(<Video src={src} customControls />);
    const playBtn = screen.getByLabelText(/play/i);

    fireEvent.click(playBtn);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it("handles time update and seeking", () => {
    const { container } = render(<Video src={src} customControls />);
    const video = container.querySelector("video")!;
    
    // Mock duration
    Object.defineProperty(video, "duration", { value: 100 });
    fireEvent(video, new Event("loadedmetadata"));
    
    // Time update
    let currentTime = 50;
    Object.defineProperty(video, "currentTime", {
      get: () => currentTime,
      set: function (val) {
        currentTime = val;
      },
      configurable: true,
    });
    fireEvent(video, new Event("timeupdate"));
    
    expect(screen.getByText("0:50")).toBeInTheDocument();
    expect(screen.getByText("1:40")).toBeInTheDocument();
    
    // Seek
    const slider = screen.getByRole("slider", { name: /seek/i });
    fireEvent.change(slider, { target: { value: "80" } });
    expect(video.currentTime).toBe(80);
  });

  it("handles volume change and mute toggle", () => {
    render(<Video src={src} customControls />);
    const muteBtn = screen.getByLabelText(/mute/i);
    const volumeSlider = screen.getByRole("slider", { name: /volume/i });

    fireEvent.click(muteBtn);
    const video = document.querySelector("video")!;
    expect(video.muted).toBe(true);

    fireEvent.change(volumeSlider, { target: { value: "0.5" } });
    expect(video.volume).toBe(0.5);
    expect(video.muted).toBe(false);
  });

  it("handles fullscreen toggle", () => {
    render(<Video src={src} customControls />);
    const fullscreenBtn = screen.getByLabelText(/fullscreen/i);

    fireEvent.click(fullscreenBtn);
    expect(window.Element.prototype.requestFullscreen).toHaveBeenCalled();
  });

  it("renders advanced controls", () => {
    const qualities = [{ label: "720p", src: "720.mp4" }, { label: "1080p", src: "1080.mp4" }];
    render(<Video src={src} advancedControls qualities={qualities} />);
    
    // Settings button
    const settingsBtn = screen.getByLabelText(/settings/i);
    fireEvent.click(settingsBtn);
    
    // Should see quality option
    expect(screen.getByText(/quality|画質/i)).toBeInTheDocument();
  });

  it("handles double skip on double click (simulation)", () => {
    render(<Video src={src} customControls />);
    const video = document.querySelector("video")!;
    
    // Mock duration
    Object.defineProperty(video, "duration", { value: 100, configurable: true });
    fireEvent(video, new Event("loadedmetadata"));
    // Mock getBoundingClientRect
    vi.spyOn(video, "getBoundingClientRect").mockReturnValue({
      left: 0,
      width: 400,
      top: 0,
      height: 300,
      right: 400,
      bottom: 300,
      x: 0,
      y: 0,
      toJSON: () => {},
    });

    // First click
    fireEvent.click(video, { clientX: 300 }); // Right side
    // Second click within 300ms
    fireEvent.click(video, { clientX: 300 });
    
    expect(video.currentTime).toBeGreaterThan(0);
  });

  it("handles keyboard shortcuts", () => {
    render(<Video src={src} customControls />);
    const container = screen.getByRole("region");
    container.focus();

    act(() => {
      fireEvent.keyDown(window, { key: " ", code: "Space" });
    });
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();

    act(() => {
      fireEvent.keyDown(window, { key: "m" });
    });
    const video = document.querySelector("video")!;
    expect(video.muted).toBe(true);
  });

  it("handles playlist navigation", () => {
    const playlist = [
      { src: "v1.mp4", title: "Video 1" },
      { src: "v2.mp4", title: "Video 2" },
    ];
    render(<Video playlist={playlist} advancedControls />);
    
    // Open playlist menu to see titles
    const playlistBtn = screen.getByLabelText(/playlist/i);
    fireEvent.click(playlistBtn);
    
    expect(screen.getByText("Video 1")).toBeInTheDocument();
    
    const nextBtn = screen.getByLabelText(/next track/i);
    fireEvent.click(nextBtn);
    
    expect(screen.getByText("Video 2")).toBeInTheDocument();
  });

  it("applies styling props", () => {
    const { container } = render(<Video src={src} radius="lg" shadow border />);
    const inner = container.querySelector(".wim-video-inner");
    expect(inner).toHaveClass("wim-video--radius-lg");
    expect(inner).toHaveClass("wim-video--shadow");
    expect(inner).toHaveClass("wim-video--border");
  });
});
