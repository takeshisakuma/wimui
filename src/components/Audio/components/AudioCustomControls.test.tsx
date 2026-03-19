import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
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

  beforeEach(() => {
    vi.clearAllMocks();
  });

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

  it("calls setRepeatMode when repeat button is clicked and executes updater", () => {
    let mode = 0;
    const setRepeatMode = vi.fn((action) => {
      mode = typeof action === "function" ? action(mode) : action;
    });
    const { rerender } = render(<AudioCustomControls {...defaultProps} setRepeatMode={setRepeatMode} repeatMode={0} />);
    fireEvent.click(screen.getByTitle("Repeat Off"));
    expect(mode).toBe(1);

    rerender(<AudioCustomControls {...defaultProps} setRepeatMode={setRepeatMode} repeatMode={1} />);
    fireEvent.click(screen.getByTitle("Repeat One"));
    expect(mode).toBe(2);

    rerender(<AudioCustomControls {...defaultProps} setRepeatMode={setRepeatMode} repeatMode={2} />);
    fireEvent.click(screen.getByTitle("Repeat All"));
    expect(mode).toBe(0);
  });

  it("calls setShuffleMode when shuffle button is clicked and executes updater", () => {
    let shuf = false;
    const setShuffleMode = vi.fn((action) => {
      shuf = typeof action === "function" ? action(shuf) : action;
    });
    render(<AudioCustomControls {...defaultProps} setShuffleMode={setShuffleMode} />);
    fireEvent.click(screen.getByTitle("Shuffle"));
    expect(setShuffleMode).toHaveBeenCalled();
    expect(shuf).toBe(true);
  });

  it("calls setIsMuted when volume icon is clicked and executes updater", () => {
    let muted = false;
    const setIsMuted = vi.fn((action) => {
      muted = typeof action === "function" ? action(muted) : action;
    });
    render(<AudioCustomControls {...defaultProps} setIsMuted={setIsMuted} isMuted={false} />);
    fireEvent.click(screen.getByLabelText("a11y_mute"));
    expect(muted).toBe(true);
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

  it("renders sleep timer badge and toggleSleepTimer works", () => {
    render(<AudioCustomControls {...defaultProps} remainingSleepTime={120} />);
    const sleepBtn = screen.getByTitle("Sleep Timer (15m)");
    fireEvent.click(sleepBtn);
    expect(defaultProps.toggleSleepTimer).toHaveBeenCalled();
    expect(screen.getByText("2")).toBeInTheDocument(); // 120 / 60 = 2
  });

  it("renders proper muted states", () => {
    render(<AudioCustomControls {...defaultProps} isMuted={true} />);
    expect(screen.getByLabelText("a11y_unmute")).toBeInTheDocument();
  });

  it("does not render Playback Speed button when playbackRate is false", () => {
    render(<AudioCustomControls {...defaultProps} playbackRate={false} />);
    expect(screen.queryByTitle("Playback Speed")).not.toBeInTheDocument();
  });

  it("does not render Bass Boost button when presets is false", () => {
    render(<AudioCustomControls {...defaultProps} presets={false} />);
    expect(screen.queryByTitle("Bass Boost")).not.toBeInTheDocument();
  });

  it("does not render Sleep Timer button when sleepTimer is false", () => {
    render(<AudioCustomControls {...defaultProps} sleepTimer={false} />);
    expect(screen.queryByTitle("Sleep Timer (15m)")).not.toBeInTheDocument();
  });

  it("shows pause label when isPlaying is true", () => {
    render(<AudioCustomControls {...defaultProps} isPlaying={true} />);
    expect(screen.getByLabelText("a11y_pause")).toBeInTheDocument();
  });

  it("shows active class on Bass Boost button when isBassBoost is true", () => {
    render(<AudioCustomControls {...defaultProps} isBassBoost={true} />);
    expect(screen.getByTitle("Bass Boost")).toHaveClass("active");
  });

  it("shows active class on Shuffle button when shuffleMode is true", () => {
    render(<AudioCustomControls {...defaultProps} shuffleMode={true} />);
    expect(screen.getByTitle("Shuffle")).toHaveClass("active");
  });

  it("shows active class on Repeat button when repeatMode is greater than 0", () => {
    render(<AudioCustomControls {...defaultProps} repeatMode={1} />);
    expect(screen.getByTitle("Repeat One")).toHaveClass("active");
  });

  it("shows badge with 1 when repeatMode is 1", () => {
    render(<AudioCustomControls {...defaultProps} repeatMode={1} />);
    const badges = screen.getAllByText("1");
    const badge = badges.find((el) => el.classList.contains("wim-audio-badge"));
    expect(badge).toBeInTheDocument();
  });

  it("shows Repeat All title when repeatMode is 2", () => {
    render(<AudioCustomControls {...defaultProps} repeatMode={2} />);
    expect(screen.getByTitle("Repeat All")).toBeInTheDocument();
  });

  it("volume slider value is 0 when isMuted is true", () => {
    render(<AudioCustomControls {...defaultProps} isMuted={true} volume={0.5} />);
    const volumeSlider = screen.getByLabelText("a11y_volume");
    expect(volumeSlider).toHaveValue("0");
  });

  it("cycles playback rate from 2x back to 0.5x", () => {
    render(<AudioCustomControls {...defaultProps} currentPlaybackRate={2} />);
    fireEvent.click(screen.getByTitle("Playback Speed"));
    expect(defaultProps.setCurrentPlaybackRate).toHaveBeenCalledWith(0.5);
  });

  it("calls handleSeek when progress slider changes", () => {
    render(<AudioCustomControls {...defaultProps} />);
    const seekSlider = screen.getByLabelText("a11y_seek");
    fireEvent.change(seekSlider, { target: { value: "50" } });
    expect(defaultProps.handleSeek).toHaveBeenCalled();
  });

  it("toggles off isBassBoost when it is already true", () => {
    render(<AudioCustomControls {...defaultProps} isBassBoost={true} />);
    fireEvent.click(screen.getByTitle("Bass Boost"));
    expect(defaultProps.setIsBassBoost).toHaveBeenCalledWith(false);
  });

  it("does not render sleep timer badge when remainingSleepTime is null", () => {
    render(<AudioCustomControls {...defaultProps} remainingSleepTime={null} />);
    // The badge inside sleep timer should not exist
    const sleepBtn = screen.getByTitle("Sleep Timer (15m)");
    expect(sleepBtn.querySelector(".wim-audio-badge")).not.toBeInTheDocument();
  });
});
