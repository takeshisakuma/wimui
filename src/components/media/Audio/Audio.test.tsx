import { render, screen, fireEvent, act, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { Audio } from "./Audio";
import styles from "./audio.module.scss";

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
    render(<Audio src={src} />);
    const audioElement = screen.getByTestId("audio-active");
    expect(audioElement).toHaveAttribute("src", src);
  });

  it("renders custom controls when customControls is true", () => {
    render(<Audio src={src} customControls />);
    expect(screen.getByRole("button", { name: /Play/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Mute/i })).toBeInTheDocument();
  });

  it("toggles play/pause with custom controls", async () => {
    render(<Audio src={src} customControls />);
    const playBtn = screen.getByRole("button", { name: /Play/i });

    act(() => {
      fireEvent.click(playBtn);
    });
    expect(window.HTMLMediaElement.prototype.play).toHaveBeenCalled();
    // Wait for internal isPlaying state update
    await waitFor(() => expect(screen.getByRole("button", { name: /Pause/i })).toBeInTheDocument());
  });

  it("renders caption", () => {
    render(<Audio src={src} caption="Example Audio" />);
    expect(screen.getByText("Example Audio")).toBeInTheDocument();
  });

  it("handles onLoadedMetadata, onLoadedData, and onCanPlay events", async () => {
    const onLoadedMetadata = vi.fn();
    const onLoadedData = vi.fn();
    const onCanPlay = vi.fn();

    render(
      <Audio
        src={src}
        onLoadedMetadata={onLoadedMetadata}
        onLoadedData={onLoadedData}
        onCanPlay={onCanPlay}
      />
    );
    const audioElement = screen.getByTestId("audio-active");

    // Simulate events
    act(() => {
      fireEvent.loadedMetadata(audioElement);
      fireEvent.loadedData(audioElement);
      fireEvent.canPlay(audioElement);
    });

    expect(onLoadedMetadata).toHaveBeenCalled();
    expect(onLoadedData).toHaveBeenCalled();
    expect(onCanPlay).toHaveBeenCalled();
  });

  it("handles array of sources", async () => {
    const { rerender } = render(<Audio src={["src1.mp3", "src2.mp3"]} />);
    let audioElement = screen.getByTestId("audio-active");
    expect(audioElement).toHaveAttribute("src", "src1.mp3");

    // Re-render with array of objects
    act(() => {
      rerender(<Audio src={[{ src: "obj1.mp3" }]} />);
    });
    audioElement = screen.getByTestId("audio-active");
    expect(audioElement).toHaveAttribute("src", "obj1.mp3");
  });

  it("renders visualizer canvas when customControls and visualizer are true", () => {
    render(<Audio src={src} customControls visualizer />);
    const canvas = screen.getByTestId("audio-canvas");
    expect(canvas).toBeInTheDocument();
    expect(canvas).toHaveClass(styles.visualizerCanvas);
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
    render(<Audio src={src} radius="md" />);
    const inner = screen.getByTestId("audio-inner");
    expect(inner).toHaveClass(styles.radiusMd);
  });

  it("does not apply radius class when radius is none", () => {
    render(<Audio src={src} radius="none" />);
    const inner = screen.getByTestId("audio-inner");
    expect(inner.className).not.toMatch(/radius/);
  });

  it("applies shadow and border classes when customControls is true", () => {
    render(<Audio src={src} customControls shadow border />);
    const inner = screen.getByTestId("audio-inner");
    expect(inner).toHaveClass(styles.shadow);
    expect(inner).toHaveClass(styles.border);
  });

  it("does not apply shadow/border without customControls", () => {
    render(<Audio src={src} shadow border />);
    const inner = screen.getByTestId("audio-inner");
    expect(inner.className).not.toContain(styles.shadow);
    expect(inner.className).not.toContain(styles.border);
  });

  it("applies styles.custom class when customControls is true", () => {
    render(<Audio src={src} customControls />);
    const inner = screen.getByTestId("audio-inner");
    expect(inner).toHaveClass(styles.custom);
  });

  it("applies styles.hasVisualizer class when both customControls and visualizer are true", () => {
    render(<Audio src={src} customControls visualizer />);
    const inner = screen.getByTestId("audio-inner");
    expect(inner).toHaveClass(styles.hasVisualizer);
  });


  it("does not render canvas when visualizer is true but customControls is false", () => {
    render(<Audio src={src} visualizer />);
    expect(screen.queryByTestId("audio-canvas")).not.toBeInTheDocument();
  });

  it("renders native controls on the audio element by default", () => {
    render(<Audio src={src} />);
    const audioEl = screen.getByTestId("audio-active");
    expect(audioEl).toHaveAttribute("controls");
  });

  it("does not apply controls attribute to audio element when customControls is true", () => {
    render(<Audio src={src} customControls />);
    const audioActive = screen.getByTestId("audio-active");
    const audioNext = screen.getByTestId("audio-next");
    expect(audioActive).not.toHaveAttribute("controls");
    expect(audioNext).not.toHaveAttribute("controls");
  });

  it("renders src from a single AudioTrack object", () => {
    render(
      <Audio src={{ src: "track.mp3", title: "Track Title" }} />
    );
    const audioEl = screen.getByTestId("audio-active");
    expect(audioEl).toHaveAttribute("src", "track.mp3");
  });

  it("renders figcaption element with the correct class", () => {
    const { container } = render(<Audio src={src} caption="My Caption" />);
    const figcaption = container.querySelector("figcaption");
    expect(figcaption).toBeInTheDocument();
    expect(figcaption).toHaveClass(styles.caption);
    expect(figcaption).toHaveTextContent("My Caption");
  });

  it("does not render metadata section when showMetadata is false", () => {
    render(
      <Audio
        src={{ src, title: "Title", artist: "Artist" }}
        customControls
        showMetadata={false}
      />
    );
    expect(screen.queryByTestId("audio-metadata")).not.toBeInTheDocument();
  });

  it("renders cover art image when coverArt is provided with showMetadata", () => {
    render(
      <Audio
        src={{ src, title: "Title", artist: "Artist", coverArt: "cover.jpg" }}
        customControls
        showMetadata
      />
    );
    const img = screen.getByTestId("audio-cover");
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
    render(<Audio src={src} />);
    expect(screen.getByTestId("audio-root")).toBeInTheDocument();
  });
});
