import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Audio } from "./Audio";

describe("Audio", () => {
  const src = "https://example.com/audio.mp3";

  beforeEach(() => {
    // Mocking HTMLMediaElement methods
    window.HTMLMediaElement.prototype.play = vi
      .fn()
      .mockResolvedValue(undefined);
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
    expect(screen.getByRole("button", { name: /Play/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Mute/i })).toBeInTheDocument();
  });

  it("toggles play/pause with custom controls", () => {
    render(<Audio src={src} customControls />);
    const playBtn = screen.getByRole("button", { name: /Play/i });

    fireEvent.click(playBtn);
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
  });

  it("renders caption", () => {
    render(<Audio src={src} caption="Example Audio" />);
    expect(screen.getByText("Example Audio")).toBeInTheDocument();
  });

  it("handles onLoadedMetadata, onLoadedData, and onCanPlay events", () => {
    const onLoadedMetadata = vi.fn();
    const onLoadedData = vi.fn();
    const onCanPlay = vi.fn();

    const { container } = render(
      <Audio
        src={src}
        onLoadedMetadata={onLoadedMetadata}
        onLoadedData={onLoadedData}
        onCanPlay={onCanPlay}
      />
    );
    const audioElement = container.querySelector("audio");

    // Simulate events
    if (audioElement) {
      fireEvent.loadedMetadata(audioElement);
      fireEvent.loadedData(audioElement);
      fireEvent.canPlay(audioElement);
    }

    expect(onLoadedMetadata).toHaveBeenCalled();
    expect(onLoadedData).toHaveBeenCalled();
    expect(onCanPlay).toHaveBeenCalled();
  });

  it("handles array of sources", () => {
    const { container, rerender } = render(<Audio src={["src1.mp3", "src2.mp3"]} />);
    let audioElement = container.querySelector("audio");
    expect(audioElement).toHaveAttribute("src", "src1.mp3");

    // Re-render with array of objects
    rerender(<Audio src={[{ src: "obj1.mp3" }]} />);
    audioElement = container.querySelector("audio");
    expect(audioElement).toHaveAttribute("src", "obj1.mp3");
  });

  it("renders visualizer canvas when customControls and visualizer are true", () => {
    const { container } = render(<Audio src={src} customControls visualizer />);
    const canvas = container.querySelector("canvas");
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass("wim-audio-visualizer-canvas");
  });

  it("renders metadata when showMetadata is true", () => {
    render(
      <Audio
        src={{ src, title: "My Song", artist: "My Artist" }}
        customControls
        showMetadata
      />
    );
    // Since mock or hook resolution might prevent meta from instantly rendering,
    // we just check if it renders the info when we rerender.
    expect(screen.getByText("My Song")).toBeInTheDocument();
    expect(screen.getByText("My Artist")).toBeInTheDocument();
  });

  it("applies radius CSS class to inner container", () => {
    const { container } = render(<Audio src={src} radius="md" />);
    const inner = container.querySelector(".wim-audio-inner");
    expect(inner).toHaveClass("wim-audio--radius-md");
  });

  it("does not apply radius class when radius is none", () => {
    const { container } = render(<Audio src={src} radius="none" />);
    const inner = container.querySelector(".wim-audio-inner");
    expect(inner?.className).not.toMatch(/wim-audio--radius/);
  });

  it("applies shadow and border classes when customControls is true", () => {
    const { container } = render(<Audio src={src} customControls shadow border />);
    const inner = container.querySelector(".wim-audio-inner");
    expect(inner).toHaveClass("wim-audio--shadow");
    expect(inner).toHaveClass("wim-audio--border");
  });

  it("does not apply shadow/border without customControls", () => {
    const { container } = render(<Audio src={src} shadow border />);
    const inner = container.querySelector(".wim-audio-inner");
    expect(inner?.className).not.toContain("wim-audio--shadow");
    expect(inner?.className).not.toContain("wim-audio--border");
  });

  it("applies wim-audio--custom class when customControls is true", () => {
    const { container } = render(<Audio src={src} customControls />);
    const inner = container.querySelector(".wim-audio-inner");
    expect(inner).toHaveClass("wim-audio--custom");
  });

  it("applies wim-audio--has-visualizer class when both customControls and visualizer are true", () => {
    const { container } = render(<Audio src={src} customControls visualizer />);
    const inner = container.querySelector(".wim-audio-inner");
    expect(inner).toHaveClass("wim-audio--has-visualizer");
  });

  it("does not render canvas when visualizer is true but customControls is false", () => {
    const { container } = render(<Audio src={src} visualizer />);
    expect(container.querySelector("canvas")).not.toBeInTheDocument();
  });

  it("renders native controls on the audio element by default", () => {
    const { container } = render(<Audio src={src} />);
    const audioEl = container.querySelector("audio.wim-audio");
    expect(audioEl).toHaveAttribute("controls");
  });

  it("does not apply controls attribute to audio element when customControls is true", () => {
    const { container } = render(<Audio src={src} customControls />);
    const audioEls = container.querySelectorAll("audio");
    audioEls.forEach((el) => {
      expect(el).not.toHaveAttribute("controls");
    });
  });

  it("renders src from a single AudioTrack object", () => {
    const { container } = render(
      <Audio src={{ src: "track.mp3", title: "Track Title" }} />
    );
    const audioEl = container.querySelector("audio");
    expect(audioEl).toHaveAttribute("src", "track.mp3");
  });

  it("renders figcaption element with the correct class", () => {
    const { container } = render(<Audio src={src} caption="My Caption" />);
    const figcaption = container.querySelector("figcaption");
    expect(figcaption).toBeInTheDocument();
    expect(figcaption).toHaveClass("wim-audio__caption");
    expect(figcaption).toHaveTextContent("My Caption");
  });

  it("does not render metadata section when showMetadata is false", () => {
    const { container } = render(
      <Audio
        src={{ src, title: "Title", artist: "Artist" }}
        customControls
        showMetadata={false}
      />
    );
    expect(container.querySelector(".wim-audio-metadata")).not.toBeInTheDocument();
  });

  it("renders cover art image when coverArt is provided with showMetadata", () => {
    const { container } = render(
      <Audio
        src={{ src, title: "Title", artist: "Artist", coverArt: "cover.jpg" }}
        customControls
        showMetadata
      />
    );
    const img = container.querySelector(".wim-audio-cover");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "cover.jpg");
  });

  it("passes playbackRate, presets, sleepTimer props to AudioCustomControls", () => {
    render(<Audio src={src} customControls playbackRate presets sleepTimer />);
    expect(screen.getByTitle("Playback Speed")).toBeInTheDocument();
    expect(screen.getByTitle("Bass Boost")).toBeInTheDocument();
    expect(screen.getByTitle("Sleep Timer (15m)")).toBeInTheDocument();
  });

  it("does not render Playback Speed, Bass Boost, Sleep Timer by default", () => {
    render(<Audio src={src} customControls />);
    expect(screen.queryByTitle("Playback Speed")).not.toBeInTheDocument();
    expect(screen.queryByTitle("Bass Boost")).not.toBeInTheDocument();
    expect(screen.queryByTitle("Sleep Timer (15m)")).not.toBeInTheDocument();
  });

  it("wraps content in a figure element", () => {
    const { container } = render(<Audio src={src} />);
    expect(container.querySelector("figure.wim-audio-container")).toBeInTheDocument();
  });
});
