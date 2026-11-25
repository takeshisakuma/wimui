import { useState, type ComponentProps } from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { VideoAdvancedMenu } from "./VideoAdvancedMenu";
import styles from "../video.module.scss";

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
    styles,
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
    const qualityBtn = screen.getByRole("menuitemradio", { name: /720p/ });
    fireEvent.click(qualityBtn);
    expect(defaultProps.handleQualityChange).toHaveBeenCalledWith(1);
  });

  it("renders rate menu and selects rate", () => {
    render(<VideoAdvancedMenu {...defaultProps} activeMenu="rate" />);
    // In code, r === 1.0 ? standard : `${r}x`
    // standard defaults to "Standard"
    const rateBtn = screen.getByRole("menuitemradio", { name: /2x/ });
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
    const backBtn = container.querySelector(`.${styles.menuTitle} button`);
    if (backBtn) fireEvent.click(backBtn);
    expect(defaultProps.setActiveMenu).toHaveBeenCalledWith("main");
  });

  describe("keyboard (T444)", () => {
    // 引き金と、状態を持つ親を組んで描く（開閉とフォーカスの戻りを見るため）
    const Harness = () => {
      const [menu, setMenu] = useState<ComponentProps<typeof VideoAdvancedMenu>["activeMenu"]>(null);
      const [rate, setRate] = useState(1);
      return (
        <>
          <button type="button" onClick={() => setMenu(menu ? null : "main")}>Settings trigger</button>
          <VideoAdvancedMenu {...defaultProps} activeMenu={menu} setActiveMenu={setMenu} playbackRate={rate} setPlaybackRate={setRate} />
        </>
      );
    };
    const open = () => {
      const trigger = screen.getByRole("button", { name: "Settings trigger" });
      trigger.focus();
      fireEvent.click(trigger);
      return trigger;
    };

    it("names every item as a menu item and moves focus to the first one on open", () => {
      render(<Harness />);
      open();
      const items = screen.getAllByRole("menuitem");
      expect(items.map((el) => el.textContent)).toEqual([expect.stringMatching(/Quality/), expect.stringMatching(/Playback Speed/), expect.stringMatching(/Aspect Ratio|Fit/i)]);
      expect(items[0]).toHaveFocus();
      // 項目は Tab の停止点にしない（面の中は矢印で移る）
      for (const el of items) expect(el).toHaveAttribute("tabindex", "-1");
    });

    it("moves with arrows, Home / End and typed characters", () => {
      render(<Harness />);
      open();
      const [quality, rate, fit] = screen.getAllByRole("menuitem");
      fireEvent.keyDown(quality, { key: "ArrowDown" });
      expect(rate).toHaveFocus();
      fireEvent.keyDown(rate, { key: "End" });
      expect(fit).toHaveFocus();
      fireEvent.keyDown(fit, { key: "ArrowDown" });
      expect(quality).toHaveFocus();
      fireEvent.keyDown(quality, { key: "ArrowUp" });
      expect(fit).toHaveFocus();
      fireEvent.keyDown(fit, { key: "p" });
      expect(rate).toHaveFocus();
    });

    it("opens a sub menu with ArrowRight on the checked item, and returns with ArrowLeft to the item that opened it", () => {
      render(<Harness />);
      open();
      const rateItem = screen.getAllByRole("menuitem")[1];
      fireEvent.keyDown(rateItem, { key: "ArrowDown" });
      fireEvent.keyDown(rateItem, { key: "ArrowRight" });
      const checked = screen.getByRole("menuitemradio", { checked: true });
      expect(checked).toHaveTextContent(/Standard/);
      expect(checked).toHaveFocus();
      fireEvent.keyDown(checked, { key: "ArrowLeft" });
      expect(screen.getAllByRole("menuitem")[1]).toHaveFocus();
    });

    it("choosing a rate returns to the settings with focus on the rate item", () => {
      render(<Harness />);
      open();
      fireEvent.click(screen.getAllByRole("menuitem")[1]);
      fireEvent.click(screen.getByRole("menuitemradio", { name: /2x/ }));
      const rateItem = screen.getAllByRole("menuitem")[1];
      expect(rateItem).toHaveTextContent(/2x/);
      expect(rateItem).toHaveFocus();
    });

    it("Escape closes a sub menu to the settings, then closes the settings and returns focus to the trigger", () => {
      render(<Harness />);
      const trigger = open();
      fireEvent.click(screen.getAllByRole("menuitem")[0]);
      fireEvent.keyDown(screen.getByRole("menuitemradio", { checked: true }), { key: "Escape" });
      expect(screen.getByRole("menu", { name: /Settings/ })).toBeInTheDocument();
      fireEvent.keyDown(screen.getAllByRole("menuitem")[0], { key: "Escape" });
      expect(screen.queryByRole("menu")).toBeNull();
      expect(trigger).toHaveFocus();
    });

    it("Tab closes the menu and returns focus to the trigger", () => {
      render(<Harness />);
      const trigger = open();
      fireEvent.keyDown(screen.getAllByRole("menuitem")[0], { key: "Tab" });
      expect(screen.queryByRole("menu")).toBeNull();
      expect(trigger).toHaveFocus();
    });

    it("names the back button", () => {
      render(<VideoAdvancedMenu {...defaultProps} activeMenu="quality" />);
      expect(screen.getByRole("menuitem", { name: "Back" })).toBeInTheDocument();
    });
  });
});
