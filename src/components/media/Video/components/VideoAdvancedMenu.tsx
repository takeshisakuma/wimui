import React from "react";
import { Icon } from "../../../media/Icon/Icon";
import { type VideoLabels } from "./VideoControls";
import { ChevronRightIcon, ChevronLeftIcon, CheckIcon, CloseIcon, PlayIcon } from "@/icon";

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
  styles: Record<string, string>;
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
  styles,
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
          className={styles.advancedMenu}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu(null);
          }}
          role="menu"
          tabIndex={-1}
        >
          <div className={styles.menuTitle}>
            <span>{settings}</span>
          </div>
          <div className={styles.menuItems}>
            {qualities && qualities.length > 0 && (
              <button
                className={styles.menuBtn}
                onClick={() => setActiveMenu("quality")}
              >
                <span>{quality}</span>
                <span style={{ opacity: 0.7 }}>
                  {qualities[currentQualityIndex].label}{" "}
                  <Icon component={ChevronRightIcon} size="sm" />
                </span>
              </button>
            )}
            <button
              className={styles.menuBtn}
              onClick={() => setActiveMenu("rate")}
            >
              <span>{playbackRateLabel}</span>
              <span style={{ opacity: 0.7 }}>
                {playbackRate}x <Icon component={ChevronRightIcon} size="sm" />
              </span>
            </button>
            <button
              className={styles.menuBtn}
              onClick={() => setActiveMenu("fit")}
            >
              <span>{aspectRatio}</span>
              <span style={{ opacity: 0.7 }}>
                {getFitLabel(activeFit)} <Icon component={ChevronRightIcon} size="sm" />
              </span>
            </button>
          </div>
        </div>
      )}

      {activeMenu === "quality" && (
        <div
          className={styles.advancedMenu}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu("main");
          }}
          role="menu"
          tabIndex={-1}
        >
          <div className={styles.menuTitle}>
            <button
              onClick={() => setActiveMenu("main")}
              className={styles.btn}
            >
              <Icon component={ChevronLeftIcon} size="sm" />
            </button>
            <span>{quality}</span>
          </div>
          <div className={styles.menuItems}>
            {qualities?.map((q, i) => (
              <button
                key={i}
                className={styles.menuBtn}
                data-active={currentQualityIndex === i}
                onClick={() => handleQualityChange(i)}
              >
                {currentQualityIndex === i && (
                  <Icon component={CheckIcon} size="sm" />
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
          className={styles.advancedMenu}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu("main");
          }}
          role="menu"
          tabIndex={-1}
        >
          <div className={styles.menuTitle}>
            <button
              onClick={() => setActiveMenu("main")}
              className={styles.btn}
            >
              <Icon component={ChevronLeftIcon} size="sm" />
            </button>
            <span>{playbackRateLabel}</span>
          </div>
          <div className={styles.menuItems}>
            {RATES.map((r) => (
              <button
                key={r}
                className={styles.menuBtn}
                data-active={playbackRate === r}
                onClick={() => {
                  setPlaybackRate(r);
                  setActiveMenu("main");
                }}
              >
                {playbackRate === r && <Icon component={CheckIcon} size="sm" />}
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
          className={styles.advancedMenu}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu("main");
          }}
          role="menu"
          tabIndex={-1}
        >
          <div className={styles.menuTitle}>
            <button
              onClick={() => setActiveMenu("main")}
              className={styles.btn}
            >
              <Icon component={ChevronLeftIcon} size="sm" />
            </button>
            <span>{aspectRatio}</span>
          </div>
          <div className={styles.menuItems}>
            {FIT_OPTIONS.map((f) => (
              <button
                key={f}
                className={styles.menuBtn}
                data-active={activeFit === f}
                onClick={() => {
                  setActiveFit(f);
                  setActiveMenu("main");
                }}
              >
                {activeFit === f && <Icon component={CheckIcon} size="sm" />}
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
          className={styles.advancedMenu}
          onClick={(e) => e.stopPropagation()}
          onKeyDown={(e) => {
            if (e.key === "Escape") setActiveMenu(null);
          }}
          style={{ bottom: 60, right: 16, width: 250 }}
          role="menu"
          tabIndex={-1}
        >
          <div className={styles.menuTitle}>
            <span>{playlistLabel}</span>
            <button
              onClick={() => setActiveMenu(null)}
              style={{ marginLeft: "auto" }}
              className={styles.btn}
            >
              <Icon component={CloseIcon} size="sm" />
            </button>
          </div>
          <div className={styles.menuItems}>
            {playlist?.map((p, i) => (
              <button
                key={i}
                className={styles.menuBtn}
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
                    <Icon component={PlayIcon} size="sm" />
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
