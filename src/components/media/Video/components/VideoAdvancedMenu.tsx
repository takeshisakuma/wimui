import React from "react";
import { Icon } from "../../../media/Icon/Icon";
import { type VideoLabels } from "./VideoControls";

type FitOption = "contain" | "cover" | "fill" | "none" | "scale-down";
type ActiveMenu = "main" | "quality" | "rate" | "fit" | "playlist" | null;

const RATES = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
const FIT_OPTIONS: FitOption[] = [
  "contain",
  "cover",
  "fill",
  "scale-down",
  "none",
];

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
  labels?: VideoLabels;
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
  labels = {},
}: VideoAdvancedMenuProps) {
  const {
    settings = "Settings",
    quality = "Quality",
    playbackRate: playbackRateLabel = "Playback Speed",
    aspectRatio = "Aspect Ratio",
    standard = "Standard",
    playlist: playlistLabel = "Playlist",
    contain = "Contain",
    cover = "Cover",
    fill = "Fill",
    scaleDown = "Scale Down",
    none = "None",
  } = labels;

  if (!activeMenu) return null;

  const getFitLabel = (f: FitOption) => {
    switch (f) {
      case "contain": return contain;
      case "cover": return cover;
      case "fill": return fill;
      case "scale-down": return scaleDown;
      case "none": return none;
      default: return f;
    }
  };

  return (
    <>
      {activeMenu === "main" && (
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu(null);
          }}
          role="menu"
          tabIndex={-1}
        >
          <div className="wim-video-menu-title">
            <span>{settings}</span>
          </div>
          <div className="wim-video-menu-items">
            {qualities && qualities.length > 0 && (
              <button
                className="wim-video-menu-btn"
                onClick={() => setActiveMenu("quality")}
              >
                <span>{quality}</span>
                <span style={{ opacity: 0.7 }}>
                  {qualities[currentQualityIndex].label}{" "}
                  <Icon name="ChevronRightIcon" size="sm" />
                </span>
              </button>
            )}
            <button
              className="wim-video-menu-btn"
              onClick={() => setActiveMenu("rate")}
            >
              <span>{playbackRateLabel}</span>
              <span style={{ opacity: 0.7 }}>
                {playbackRate}x <Icon name="ChevronRightIcon" size="sm" />
              </span>
            </button>
            <button
              className="wim-video-menu-btn"
              onClick={() => setActiveMenu("fit")}
            >
              <span>{aspectRatio}</span>
              <span style={{ opacity: 0.7 }}>
                {getFitLabel(activeFit)} <Icon name="ChevronRightIcon" size="sm" />
              </span>
            </button>
          </div>
        </div>
      )}

      {activeMenu === "quality" && (
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu("main");
          }}
          role="menu"
          tabIndex={-1}
        >
          <div className="wim-video-menu-title">
            <button
              onClick={() => setActiveMenu("main")}
              className="wim-video-btn"
            >
              <Icon name="ChevronLeftIcon" size="sm" />
            </button>
            <span>{quality}</span>
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
                  <Icon name="CheckIcon" size="sm" />
                )}
                <span
                  style={{ marginLeft: currentQualityIndex === i ? 0 : 24 }}
                >
                  {q.label}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeMenu === "rate" && (
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu("main");
          }}
          role="menu"
          tabIndex={-1}
        >
          <div className="wim-video-menu-title">
            <button
              onClick={() => setActiveMenu("main")}
              className="wim-video-btn"
            >
              <Icon name="ChevronLeftIcon" size="sm" />
            </button>
            <span>{playbackRateLabel}</span>
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
                {playbackRate === r && <Icon name="CheckIcon" size="sm" />}
                <span style={{ marginLeft: playbackRate === r ? 0 : 24 }}>
                  {r === 1.0 ? standard : `${r}x`}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeMenu === "fit" && (
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu("main");
          }}
          role="menu"
          tabIndex={-1}
        >
          <div className="wim-video-menu-title">
            <button
              onClick={() => setActiveMenu("main")}
              className="wim-video-btn"
            >
              <Icon name="ChevronLeftIcon" size="sm" />
            </button>
            <span>{aspectRatio}</span>
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
                {activeFit === f && <Icon name="CheckIcon" size="sm" />}
                <span style={{ marginLeft: activeFit === f ? 0 : 24 }}>
                  {getFitLabel(f)}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}

      {activeMenu === "playlist" && (
        <div
          className="wim-video-advanced-menu"
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu(null);
          }}
          style={{ bottom: 60, right: 16, width: 250 }}
          role="menu"
          tabIndex={-1}
        >
          <div className="wim-video-menu-title">
            <span>{playlistLabel}</span>
            <button
              onClick={() => setActiveMenu(null)}
              style={{ marginLeft: "auto" }}
              className="wim-video-btn"
            >
              <Icon name="CloseIcon" size="sm" />
            </button>
          </div>
          <div className="wim-video-menu-items">
            {playlist?.map((p, i) => (
              <button
                key={i}
                className="wim-video-menu-btn"
                data-active={currentPlayIndex === i}
                onClick={() => playPlaylistItem(i)}
                style={{
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 4,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  {currentPlayIndex === i ? (
                    <Icon name="PlayIcon" size="sm" />
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
