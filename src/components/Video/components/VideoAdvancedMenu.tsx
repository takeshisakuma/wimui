import React from "react";
import { Icon } from "../../Icon/Icon";

type FitOption = "contain" | "cover" | "fill" | "none" | "scale-down";
type ActiveMenu = "main" | "quality" | "rate" | "fit" | "playlist" | null;

const RATES = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
const FIT_OPTIONS: FitOption[] = ["contain", "cover", "fill", "scale-down", "none"];

interface VideoAdvancedMenuProps {
  activeMenu: ActiveMenu;
  setActiveMenu: (menu: ActiveMenu) => void;
  qualities?: { label: string; src: string }[];
  currentQualityIndex: number;
  handleQualityChange: (index: number) => void;
  playbackRate: number;
  setPlaybackRate: (rate: number) => void;
  activeFit: FitOption;
  setActiveFit: (fit: FitOption) => void;
  playlist?: { src: string; title?: string; poster?: string }[];
  currentPlayIndex: number;
  playPlaylistItem: (index: number) => void;
}

export function VideoAdvancedMenu({
  activeMenu,
  setActiveMenu,
  qualities,
  currentQualityIndex,
  handleQualityChange,
  playbackRate,
  setPlaybackRate,
  activeFit,
  setActiveFit,
  playlist,
  currentPlayIndex,
  playPlaylistItem,
}: VideoAdvancedMenuProps) {
  if (!activeMenu) return null;

  return (
    <>
      {activeMenu === "main" && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="wim-video-menu-title">
            <span>設定</span>
          </div>
          <div className="wim-video-menu-items">
            {qualities && qualities.length > 0 && (
              <button
                className="wim-video-menu-btn"
                onClick={() => setActiveMenu("quality")}
              >
                <span>画質</span>
                <span style={{ opacity: 0.7 }}>
                  {qualities[currentQualityIndex].label}{" "}
                  <Icon name="ChevronRightIcon" size="small" />
                </span>
              </button>
            )}
            <button
              className="wim-video-menu-btn"
              onClick={() => setActiveMenu("rate")}
            >
              <span>再生速度</span>
              <span style={{ opacity: 0.7 }}>
                {playbackRate}x <Icon name="ChevronRightIcon" size="small" />
              </span>
            </button>
            <button
              className="wim-video-menu-btn"
              onClick={() => setActiveMenu("fit")}
            >
              <span>アスペクト比</span>
              <span style={{ opacity: 0.7 }}>
                {activeFit} <Icon name="ChevronRightIcon" size="small" />
              </span>
            </button>
          </div>
        </div>
      )}

      {activeMenu === "quality" && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="wim-video-menu-title">
            <button onClick={() => setActiveMenu("main")} className="wim-video-btn">
              <Icon name="ChevronLeftIcon" size="small" />
            </button>
            <span>画質</span>
          </div>
          <div className="wim-video-menu-items">
            {qualities?.map((q, i) => (
              <button
                key={i}
                className="wim-video-menu-btn"
                data-active={currentQualityIndex === i}
                onClick={() => handleQualityChange(i)}
              >
                {currentQualityIndex === i && (
                  <Icon name="CheckIcon" size="small" />
                )}
                <span style={{ marginLeft: currentQualityIndex === i ? 0 : 24 }}>
                  {q.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeMenu === "rate" && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="wim-video-menu-title">
            <button onClick={() => setActiveMenu("main")} className="wim-video-btn">
              <Icon name="ChevronLeftIcon" size="small" />
            </button>
            <span>再生速度</span>
          </div>
          <div className="wim-video-menu-items">
            {RATES.map((r) => (
              <button
                key={r}
                className="wim-video-menu-btn"
                data-active={playbackRate === r}
                onClick={() => {
                  setPlaybackRate(r);
                  setActiveMenu("main");
                }}
              >
                {playbackRate === r && <Icon name="CheckIcon" size="small" />}
                <span style={{ marginLeft: playbackRate === r ? 0 : 24 }}>
                  {r === 1.0 ? "標準" : `${r}x`}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeMenu === "fit" && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="wim-video-menu-title">
            <button onClick={() => setActiveMenu("main")} className="wim-video-btn">
              <Icon name="ChevronLeftIcon" size="small" />
            </button>
            <span>アスペクト比</span>
          </div>
          <div className="wim-video-menu-items">
            {FIT_OPTIONS.map((f) => (
              <button
                key={f}
                className="wim-video-menu-btn"
                data-active={activeFit === f}
                onClick={() => {
                  setActiveFit(f);
                  setActiveMenu("main");
                }}
              >
                {activeFit === f && <Icon name="CheckIcon" size="small" />}
                <span style={{ marginLeft: activeFit === f ? 0 : 24 }}>{f}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeMenu === "playlist" && (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions, jsx-a11y/click-events-have-key-events
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
          style={{ bottom: 60, right: 16, width: 250 }}
        >
          <div className="wim-video-menu-title">
            <span>プレイリスト</span>
            <button
              onClick={() => setActiveMenu(null)}
              style={{ marginLeft: "auto" }}
              className="wim-video-btn"
            >
              <Icon name="CloseIcon" size="small" />
            </button>
          </div>
          <div className="wim-video-menu-items">
            {playlist?.map((p, i) => (
              <button
                key={i}
                className="wim-video-menu-btn"
                data-active={currentPlayIndex === i}
                onClick={() => playPlaylistItem(i)}
                style={{ flexDirection: "column", alignItems: "flex-start", gap: 4 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {currentPlayIndex === i ? (
                    <Icon name="PlayIcon" size="small" />
                  ) : (
                    <div style={{ width: 20 }} />
                  )}
                  <span>{p.title || `Track ${i + 1}`}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
