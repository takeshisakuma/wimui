import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { AudioCustomControls } from "./AudioCustomControls";

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

describe("AudioCustomControls", () => {
  const defaultProps = {
    isPlaying: false,
    currentTime: 10,
    duration: 100,
    volume: 0.5,
    isMuted: false,
    activeMenu: null as string | null,
    repeatMode: 0 as const,
    shuffleMode: false,
    currentPlaybackRate: 1,
    isBassBoost: false,
    remainingSleepTime: null,
    playbackRate: true,
    presets: true,
    sleepTimer: true,
    setRepeatMode: vi.fn(),
    setShuffleMode: vi.fn(),
    setCurrentPlaybackRate: vi.fn(),
    setIsBassBoost: vi.fn(),
    setIsMuted: vi.fn(),
    togglePlay: vi.fn(),
    handleSeek: vi.fn(),
    handleVolumeChange: vi.fn(),
    playNext: vi.fn(),
    toggleSleepTimer: vi.fn(),
    formatTime: (s: number) => `00:${s}`,
  };

  it("renders progress and time", () => {
    render(<AudioCustomControls {...defaultProps} />);
    expect(screen.getByText("00:10")).toBeInTheDocument();
    expect(screen.getByText("00:100")).toBeInTheDocument();
    const progressInput = screen.getByLabelText("a11y_seek");
    expect(progressInput).toHaveValue("10");
  });

  it("calls togglePlay when play button is clicked", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const playBtn = screen.getByLabelText("a11y_play");
    fireEvent.click(playBtn);
    expect(defaultProps.togglePlay).toHaveBeenCalled();
  });

  it("calls playNext when prev/next buttons are clicked", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const prevBtn = screen.getByTitle("Previous");
    const nextBtn = screen.getByTitle("Next");
    fireEvent.click(prevBtn);
    expect(defaultProps.playNext).toHaveBeenCalledWith(-1);
    fireEvent.click(nextBtn);
    expect(defaultProps.playNext).toHaveBeenCalledWith(1);
  });

  it("calls setIsMuted when volume icon is clicked", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const muteBtn = screen.getByLabelText("a11y_mute");
    fireEvent.click(muteBtn);
    expect(defaultProps.setIsMuted).toHaveBeenCalled();
  });

  it("calls handleVolumeChange when volume slider is moved", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const volumeSlider = screen.getByLabelText("a11y_volume");
    fireEvent.change(volumeSlider, { target: { value: "0.8" } });
    expect(defaultProps.handleVolumeChange).toHaveBeenCalled();
  });

  it("calls setRepeatMode when repeat button is clicked", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const repeatBtn = screen.getByTitle("Repeat Off");
    fireEvent.click(repeatBtn);
    expect(defaultProps.setRepeatMode).toHaveBeenCalled();
  });

  it("calls setShuffleMode when shuffle button is clicked", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const shuffleBtn = screen.getByTitle("Shuffle");
    fireEvent.click(shuffleBtn);
    expect(defaultProps.setShuffleMode).toHaveBeenCalled();
  });

  it("cycles playback rate when rate button is clicked", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const rateBtn = screen.getByTitle("Playback Speed");
    fireEvent.click(rateBtn);
    expect(defaultProps.setCurrentPlaybackRate).toHaveBeenCalledWith(1.5);
  });

  it("calls setIsBassBoost when presets/bass boost button is clicked", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const bassBtn = screen.getByTitle("Bass Boost");
    fireEvent.click(bassBtn);
    expect(defaultProps.setIsBassBoost).toHaveBeenCalledWith(true);
  });

  it("calls toggleSleepTimer when sleep timer button is clicked", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const sleepBtn = screen.getByTitle("Sleep Timer (15m)");
    fireEvent.click(sleepBtn);
    expect(defaultProps.toggleSleepTimer).toHaveBeenCalled();
  });
});
