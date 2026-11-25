import React, { useEffect, useId, useLayoutEffect, useRef } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { Icon } from "../../../media/Icon/Icon";
import { type VideoLabels } from "./VideoControls";
import { ChevronRightIcon, ChevronLeftIcon, CheckIcon, CloseIcon, PlayIcon } from "@/icon";
import { getRovingIndex, isRovingKey } from "../../../_internal/rovingIndex";
import { findTypeaheadIndex, isTypeaheadKey, useTypeahead } from "../../../_internal/typeahead";

type FitOption = "contain" | "cover" | "fill" | "none" | "scale-down";
type ActiveMenu = "main" | "quality" | "rate" | "fit" | "playlist" | null;
type SubMenu = "quality" | "rate" | "fit";

const RATES = [0.25, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0];
const FIT_OPTIONS: FitOption[] = [
  "contain",
  "cover",
  "fill",
  "scale-down",
  "none",
];

const ITEM_SELECTOR = '[role="menuitem"], [role="menuitemradio"]';

interface MenuPanelProps {
  title: string;
  styles: Record<string, string>;
  /** Tab。メニューを閉じて、開いた引き金へ戻る（Menu / Dropdown と同じく、Tab でメニューの外へ出ない） */
  onClose: () => void;
  /** ArrowLeft と Escape。設定の中の一覧で、設定へ戻る（無ければ Escape は閉じる） */
  onBack?: () => void;
  /** 開いたときにフォーカスする項目の data-key を持つ ref。無ければ選ばれている項目、それも無ければ先頭 */
  initialFocusRef?: React.RefObject<string | null>;
  /** 見出しの行に置く項目（戻る・閉じる） */
  titleStart?: React.ReactNode;
  titleEnd?: React.ReactNode;
  style?: React.CSSProperties;
  children: React.ReactNode;
}

/**
 * 設定・再生リストの 1 枚の面（T444）。
 *
 * 以前は `role="menu"` なのに中は素の button で、開いてもフォーカスが移らず、矢印も文字の先回りも
 * 効かなかった。Menu / Dropdown と同じく、開いたら項目へフォーカスを移し、矢印・Home / End・
 * 文字で項目を移る。項目は Tab の停止点にしない（面の中の移動は矢印が持つ）。
 */
function MenuPanel({
  title,
  styles,
  onClose,
  onBack,
  initialFocusRef,
  titleStart,
  titleEnd,
  style,
  children,
}: MenuPanelProps) {
  const ref = useRef<HTMLDivElement>(null);
  const titleId = useId();
  const { push, typing } = useTypeahead();

  useEffect(() => {
    const items = Array.from(ref.current?.querySelectorAll<HTMLElement>(ITEM_SELECTOR) ?? []);
    const initialFocus = initialFocusRef?.current;
    const target =
      (initialFocus ? items.find((el) => el.dataset.key === initialFocus) : undefined) ??
      items.find((el) => el.getAttribute("aria-checked") === "true") ??
      items[0];
    target?.focus();
  }, [initialFocusRef]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const items = Array.from(ref.current?.querySelectorAll<HTMLElement>(ITEM_SELECTOR) ?? []);
    const current = items.indexOf(document.activeElement as HTMLElement);

    if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      (onBack ?? onClose)();
      return;
    }
    if (e.key === "Tab") {
      e.preventDefault();
      onClose();
      return;
    }
    if (e.key === "ArrowLeft" && onBack) {
      e.preventDefault();
      onBack();
      return;
    }
    if (e.key === "ArrowRight") {
      // 設定の項目は、右で中の一覧を開く（押したのと同じ）
      const el = items[current];
      if (el?.getAttribute("aria-haspopup") === "menu") {
        e.preventDefault();
        el.click();
      }
      return;
    }
    if (isRovingKey(e.key, "vertical")) {
      const next = getRovingIndex({ key: e.key, current, count: items.length, orientation: "vertical" });
      if (next !== null) {
        e.preventDefault();
        items[next]?.focus();
      }
      return;
    }
    if (isTypeaheadKey(e.nativeEvent, typing())) {
      const next = findTypeaheadIndex({
        query: push(e.key),
        current,
        count: items.length,
        getText: (i) => items[i]?.textContent ?? "",
      });
      if (next >= 0) {
        e.preventDefault();
        items[next]?.focus();
      }
    }
  };

  return (
    <div
      ref={ref}
      className={styles.advancedMenu}
      onClick={(e) => e.stopPropagation()}
      onKeyDown={handleKeyDown}
      role="menu"
      aria-labelledby={titleId}
      tabIndex={-1}
      style={style}
    >
      <div className={styles.menuTitle} role="none">
        {titleStart}
        <span id={titleId}>{title}</span>
        {titleEnd}
      </div>
      <div className={styles.menuItems} role="none">
        {children}
      </div>
    </div>
  );
}

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
  const { t } = useWimTranslation(commonNs);
  const {
    settings = t("a11y.settings"),
    quality = t("quality"),
    playbackRate: playbackRateLabel = t("playback.speed"),
    aspectRatio = t("aspect.ratio"),
    standard = t("standard"),
    playlist: playlistLabel = t("a11y.playlist"),
    contain = t("video.fit_contain"),
    cover = t("video.fit_cover"),
    fill = t("video.fit_fill"),
    scaleDown = t("video.fit_scale_down"),
    none = t("common.none"),
  } = labels;

  // 開いた引き金を覚え、閉じたときにフォーカスをそこへ戻す。面の項目へフォーカスを移す
  // （子の useEffect）より先に読むため、layout effect で読む
  const openerRef = useRef<HTMLElement | null>(null);
  const wasOpenRef = useRef(false);
  // 設定の中の一覧から戻ったとき、その一覧を開いた項目へフォーカスを戻す
  const lastSubRef = useRef<SubMenu | null>(null);
  useLayoutEffect(() => {
    const isOpen = activeMenu !== null;
    if (isOpen && !wasOpenRef.current) {
      openerRef.current = document.activeElement as HTMLElement | null;
    }
    if (!isOpen && wasOpenRef.current) {
      lastSubRef.current = null;
      // 面の中にあったフォーカスは、面が消えると body に落ちる。ほかの操作ボタンを押して閉じたときは、そのボタンに残す
      if (!document.activeElement || document.activeElement === document.body) {
        openerRef.current?.focus();
      }
    }
    wasOpenRef.current = isOpen;
  }, [activeMenu]);

  if (!activeMenu) return null;

  const close = () => setActiveMenu(null);
  const backToMain = () => setActiveMenu("main");
  const openSub = (sub: SubMenu) => {
    lastSubRef.current = sub;
    setActiveMenu(sub);
  };

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

  // 項目は Tab の停止点にしない（面の中は矢印で移る）。属性をここにまとめる（UMD のサイズ予算）
  const item = (role: "menuitem" | "menuitemradio", checked?: boolean) => ({
    type: "button" as const,
    role,
    tabIndex: -1,
    "aria-checked": checked,
    "data-active": checked,
  });

  // 設定の項目: 押すと（または →）中の一覧を開く
  const subItem = (sub: SubMenu, label: string, value: React.ReactNode) => (
    <button {...item("menuitem")} aria-haspopup="menu" data-key={sub} className={styles.menuBtn} onClick={() => openSub(sub)}>
      <span>{label}</span>
      <span style={{ opacity: 0.7 }}>
        {value} <Icon component={ChevronRightIcon} size="sm" />
      </span>
    </button>
  );

  // 一覧の選択肢: 選ばれているものに印を付ける
  const choice = (key: React.Key, checked: boolean, label: React.ReactNode, onClick: () => void) => (
    <button key={key} {...item("menuitemradio", checked)} className={styles.menuBtn} onClick={onClick}>
      {checked && <Icon component={CheckIcon} size="sm" />}
      <span style={{ marginLeft: checked ? 0 : 24 }}>{label}</span>
    </button>
  );

  const titleButton = (label: string, icon: typeof CloseIcon, onClick: () => void, style?: React.CSSProperties) => (
    <button {...item("menuitem")} aria-label={label} onClick={onClick} style={style} className={styles.btn}>
      <Icon component={icon} size="sm" />
    </button>
  );

  const subProps = {
    styles,
    onBack: backToMain,
    onClose: close,
    titleStart: titleButton(t("action.back"), ChevronLeftIcon, backToMain),
  };

  return (
    <>
      {activeMenu === "main" && (
        <MenuPanel
          title={settings}
          styles={styles}
          onClose={close}
          initialFocusRef={lastSubRef}
        >
          {qualities && qualities.length > 0 && subItem("quality", quality, qualities[currentQualityIndex].label)}
          {subItem("rate", playbackRateLabel, `${playbackRate}x`)}
          {subItem("fit", aspectRatio, getFitLabel(activeFit))}
        </MenuPanel>
      )}

      {activeMenu === "quality" && (
        <MenuPanel title={quality} {...subProps}>
          {qualities?.map((q, i) => choice(i, currentQualityIndex === i, q.label, () => handleQualityChange(i)))}
        </MenuPanel>
      )}

      {activeMenu === "rate" && (
        <MenuPanel title={playbackRateLabel} {...subProps}>
          {RATES.map((r) =>
            choice(r, playbackRate === r, r === 1.0 ? standard : `${r}x`, () => {
              setPlaybackRate(r);
              backToMain();
            }),
          )}
        </MenuPanel>
      )}

      {activeMenu === "fit" && (
        <MenuPanel title={aspectRatio} {...subProps}>
          {FIT_OPTIONS.map((f) =>
            choice(f, activeFit === f, getFitLabel(f), () => {
              setActiveFit(f);
              backToMain();
            }),
          )}
        </MenuPanel>
      )}

      {activeMenu === "playlist" && (
        <MenuPanel
          title={playlistLabel}
          styles={styles}
          onClose={close}
          style={{ bottom: 60, right: 16, width: 250 }}
          titleEnd={titleButton(t("a11y.close_menu"), CloseIcon, close, { marginLeft: "auto" })}
        >
          {playlist?.map((p, i) => (
            <button
              key={i}
              {...item("menuitemradio", currentPlayIndex === i)}
              className={styles.menuBtn}
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
        </MenuPanel>
      )}
    </>
  );
}
