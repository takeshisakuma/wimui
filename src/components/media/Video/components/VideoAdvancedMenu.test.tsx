import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { VideoAdvancedMenu } from "./VideoAdvancedMenu";

// Mock Icon
vi.mock("../../../media/Icon/Icon", () => ({
  Icon: ({ name }: { name: string }) => <span data-testid="icon">{name}</span>,
}));

describe("VideoAdvancedMenu", () => {
  const defaultProps = {
    activeMenu: "main" as const,
    setActiveMenu: vi.fn(),
    qualities: [
      { label: "1080p", src: "1080.mp4" },
      { label: "720p", src: "720.mp4" },
    ],
    currentQualityIndex: 0,
    handleQualityChange: vi.fn(),
    playbackRate: 1.0,
    setPlaybackRate: vi.fn(),
    activeFit: "contain" as const,
    setActiveFit: vi.fn(),
    playlist: [
      { title: "Video 1", src: "v1.mp4" },
      { title: "Video 2", src: "v2.mp4" },
    ],
    currentPlayIndex: 0,
    playPlaylistItem: vi.fn(),
  };

  it("renders null when activeMenu is null", () => {
    const { container } = render(<VideoAdvancedMenu {...defaultProps} activeMenu={null} />);
    expect(container.firstChild).toBeNull();
  });

  it("renders main menu", () => {
    render(<VideoAdvancedMenu {...defaultProps} />);
    expect(screen.getByText(/Settings/i)).toBeInTheDocument();
    expect(screen.getByText(/Quality/i)).toBeInTheDocument();
    expect(screen.getByText(/Playback Speed/i)).toBeInTheDocument();
  });

  it("switches to quality menu", () => {
    render(<VideoAdvancedMenu {...defaultProps} />);
    fireEvent.click(screen.getByText(/Quality/i));
    expect(defaultProps.setActiveMenu).toHaveBeenCalledWith("quality");
  });

  it("renders quality menu and selects quality", () => {
    render(<VideoAdvancedMenu {...defaultProps} activeMenu="quality" />);
    expect(screen.getByText("720p")).toBeInTheDocument();
    const qualityBtn = screen.getByRole("button", { name: /720p/ });
    fireEvent.click(qualityBtn);
    expect(defaultProps.handleQualityChange).toHaveBeenCalledWith(1);
  });

  it("renders rate menu and selects rate", () => {
    render(<VideoAdvancedMenu {...defaultProps} activeMenu="rate" />);
    // In code, r === 1.0 ? standard : `${r}x`
    // standard defaults to "Standard"
    const rateBtn = screen.getByRole("button", { name: /2x/ });
    fireEvent.click(rateBtn);
    expect(defaultProps.setPlaybackRate).toHaveBeenCalledWith(2.0);
    expect(defaultProps.setActiveMenu).toHaveBeenCalledWith("main");
  });

  it("renders fit menu and selects fit", () => {
    render(<VideoAdvancedMenu {...defaultProps} activeMenu="fit" />);
    // getFitLabel("cover") returns "Cover"
    fireEvent.click(screen.getByText("Cover"));
    expect(defaultProps.setActiveFit).toHaveBeenCalledWith("cover");
    expect(defaultProps.setActiveMenu).toHaveBeenCalledWith("main");
  });

  it("renders playlist menu and selects item", () => {
    render(<VideoAdvancedMenu {...defaultProps} activeMenu="playlist" />);
    expect(screen.getByText("Video 1")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Video 2"));
    expect(defaultProps.playPlaylistItem).toHaveBeenCalledWith(1);
  });

  it("goes back to main menu from submenus", () => {
    const { container } = render(<VideoAdvancedMenu {...defaultProps} activeMenu="quality" />);
    const backBtn = container.querySelector(".wim-video-menu-title button");
    if (backBtn) fireEvent.click(backBtn);
    expect(defaultProps.setActiveMenu).toHaveBeenCalledWith("main");
  });
});
