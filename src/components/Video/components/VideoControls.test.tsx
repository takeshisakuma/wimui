import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { VideoControls } from "./VideoControls";

// Mock i18next
vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (str: string) => str,
  }),
}));

// Mock Icon
vi.mock("../../Icon/Icon", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid="icon">{name}</span>,
}));

describe("VideoControls", () => {
  const defaultProps = {
    playlist: [{ src: "v1.mp4", title: "v1" }],
    advancedControls: true,
    currentPlayIndex: 0,
    setCurrentPlayIndex: vi.fn(),
    skip: vi.fn(),
    isPlaying: false,
    togglePlay: vi.fn(),
    currentTime: 10,
    duration: 100,
    handleSeek: vi.fn(),
    volume: 0.5,
    isMuted: false,
    toggleMute: vi.fn(),
    handleVolumeChange: vi.fn(),
    activeMenu: null as "main" | "quality" | "rate" | "fit" | "playlist" | null,
    setActiveMenu: vi.fn(),
    togglePiP: vi.fn(),
    isFullscreen: false,
    toggleFullscreen: vi.fn(),
    formatTime: (s: number) => `00:${s}`,
  };

  it("renders playback controls", () => {
    render(<VideoControls {...defaultProps} />);
    expect(screen.getByLabelText("Play")).toBeInTheDocument();
    expect(screen.getByLabelText("a11y.skip_backward")).toBeInTheDocument();
    expect(screen.getByLabelText("a11y.skip_forward")).toBeInTheDocument();
  });

  it("calls togglePlay when play button is clicked", () => {
    render(<VideoControls {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Play"));
    expect(defaultProps.togglePlay).toHaveBeenCalled();
  });

  it("calls skip when skip buttons are clicked", () => {
    render(<VideoControls {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("a11y.skip_backward"));
    expect(defaultProps.skip).toHaveBeenCalledWith(-10);
    fireEvent.click(screen.getByLabelText("a11y.skip_forward"));
    expect(defaultProps.skip).toHaveBeenCalledWith(10);
  });

  it("renders time and progress", () => {
    render(<VideoControls {...defaultProps} />);
    expect(screen.getByText("00:10")).toBeInTheDocument();
    expect(screen.getByText("00:100")).toBeInTheDocument();
  });

  it("calls toggleMute when mute button is clicked", () => {
    render(<VideoControls {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Mute"));
    expect(defaultProps.toggleMute).toHaveBeenCalled();
  });

  it("calls handleVolumeChange when volume slider is moved", () => {
    render(<VideoControls {...defaultProps} />);
    fireEvent.change(screen.getByLabelText("a11y.volume"), { target: { value: "0.8" } });
    expect(defaultProps.handleVolumeChange).toHaveBeenCalled();
  });

  it("calls setActiveMenu when settings button is clicked", () => {
    render(<VideoControls {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("a11y.settings"));
    expect(defaultProps.setActiveMenu).toHaveBeenCalledWith("main");
  });

  it("calls togglePiP when PiP button is clicked", () => {
    render(<VideoControls {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("a11y.picture_in_picture"));
    expect(defaultProps.togglePiP).toHaveBeenCalled();
  });

  it("calls toggleFullscreen when fullscreen button is clicked", () => {
    render(<VideoControls {...defaultProps} />);
    fireEvent.click(screen.getByLabelText("Fullscreen"));
    expect(defaultProps.toggleFullscreen).toHaveBeenCalled();
  });

  it("calls setCurrentPlayIndex when next track button is clicked", () => {
    const playlist = [
      { src: "v1.mp4", title: "v1" },
      { src: "v2.mp4", title: "v2" },
    ];
    render(<VideoControls {...defaultProps} playlist={playlist} />);
    fireEvent.click(screen.getByLabelText("a11y.next_track"));
    expect(defaultProps.setCurrentPlayIndex).toHaveBeenCalled();
  });
});
