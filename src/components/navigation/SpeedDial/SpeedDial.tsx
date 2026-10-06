import React, { useRef, useEffect, useState } from "react";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import classNames from "classnames";
import localStyles from "./speed-dial.module.scss";
import { FloatButton } from "../../form/FloatButton/FloatButton";
import { IconName } from "../../../icon";

export interface SpeedDialAction {
  icon: IconName;
  label: string;
  onClick?: () => void;
  className?: string;
  intent?: "default" | "danger" | "success";
}

export type SpeedDialProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Actions to display when SpeedDial is open */
  actions: SpeedDialAction[];
  /** Icon name for the main button when closed */
  icon?: IconName;
  /** Icon name for the main button when open */
  activeIcon?: IconName;
  /**
   * Direction in which actions expand.
   *
   * **The caller picks a direction that has room.** Actions are placed with
   * plain CSS (`left: 100%` and friends) and are never measured, so this
   * component does not flip when the viewport runs out — a `right` dial placed
   * near the right edge pushes the page into a horizontal scroll. Anchor a
   * `right` dial to the leading edge (and a `left` one to the trailing edge);
   * `up` / `down` already grow inward from the trailing corner (T175).
   *
   * @default "up"
   */
  direction?: "up" | "down" | "left" | "right";
  /** Trigger mode to open the SpeedDial */
  trigger?: "hover" | "click";
  /** Controlled open state */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /**
   * Accessible name for the trigger button.
   * Lands on the inner `FloatButton`, not on the wrapper `div`.
   * Defaults to a translated "Open menu" / "Close menu" (en / ja / pt), following the open state.
   */
  "aria-label"?: string;
};

/**
 * SpeedDial component displays a floating action button that expands to show multiple actions.
 * 
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const SpeedDial = React.forwardRef<HTMLDivElement, SpeedDialProps>(
  (
    {
      actions,
      icon = "PlusIcon",
      activeIcon = "CloseIcon",
      direction = "up",
      trigger = "hover",
      open: controlledOpen,
      onOpenChange,
      className,
      "aria-label": ariaLabel,
      ...props
    },
    ref
  ) => {
    const { t } = useWimTranslation(commonNs);
    const [uncontrolledOpen, setUncontrolledOpen] = useState(false);
    const open = controlledOpen ?? uncontrolledOpen;
    const actionsRef = useRef<HTMLDivElement>(null);
    // キーボードで開いたときだけ、最初のアクションへフォーカスを移し、フォーカスが外へ出たら閉じる。
    // ホバーで開いたときにフォーカスを動かすと、ポインタの操作の途中でフォーカスが飛ぶ。
    const openedByKeyboard = useRef(false);

    const handleOpenChange = (nextOpen: boolean) => {
      setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    };

    const handleMouseEnter = () => {
      if (trigger === "hover") handleOpenChange(true);
    };

    const handleMouseLeave = () => {
      if (trigger === "hover") handleOpenChange(false);
    };

    const handleClick = () => {
      if (trigger === "click") handleOpenChange(!open);
    };

    // 既定（trigger="hover"）では、クリックでは開かない。そのままだとキーボードで開く手段が無かった
    // （T306）。引き金の Enter / Space は、どちらのモードでも開閉する。
    const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return;
      e.preventDefault(); // このあとの click（click モードでは開閉する）と二重にしない
      openedByKeyboard.current = !open;
      handleOpenChange(!open);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (e.key !== "Escape" || !open) return;
      e.preventDefault();
      openedByKeyboard.current = false;
      handleOpenChange(false);
      e.currentTarget.querySelector<HTMLElement>("[aria-haspopup]")?.focus();
    };

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      if (!openedByKeyboard.current) return;
      if (e.currentTarget.contains(e.relatedTarget as Node | null)) return;
      openedByKeyboard.current = false;
      handleOpenChange(false);
    };

    // アクションを実行したら閉じる。click モードのときと、キーボードで開いたとき（T322。hover モードを
    // キーボードで開くと、実行しても開いたまま残っていた）。ホバーで開いているあいだは、ポインタが
    // 載っているので閉じない。
    const closeAfterAction = () => {
      if (trigger !== "click" && !openedByKeyboard.current) return;
      openedByKeyboard.current = false;
      // 閉じるとアクションは inert になる。フォーカスを持ったまま閉じると body へ落ちるので、先に引き金へ戻す
      if (actionsRef.current?.contains(document.activeElement)) {
        actionsRef.current.parentElement?.querySelector<HTMLElement>("[aria-haspopup]")?.focus();
      }
      handleOpenChange(false);
    };

    useEffect(() => {
      if (open && openedByKeyboard.current) {
        actionsRef.current?.querySelector<HTMLElement>("button")?.focus();
      }
    }, [open]);

    return (
      // キーとフォーカスの処理は、中のボタン（引き金とアクション）から上がってくる分を受けるだけ。
      // この div 自体は操作の対象ではない。
      // eslint-disable-next-line jsx-a11y/no-static-element-interactions
      <div
        ref={ref}
        className={classNames("wim-speed-dial", 
          localStyles.root,
          localStyles[direction],
          open && localStyles.open,
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        {...props}
      >
        {/* 閉じているあいだは、アクションを操作と読み上げの対象から外す。見た目は opacity: 0 で消して
            いるだけなので、外さないと Tab で見えないボタンに着き、Enter でそのまま実行される（T306）。 */}
        <div ref={actionsRef} className={localStyles.actions} inert={!open}>
          {actions.map((action, index) => (
            <div
              key={index}
              className={localStyles.actionWrapper}
              style={{
                transitionDelay: open ? `${index * 50}ms` : "0ms",
              }}
            >
              <FloatButton
                iconName={action.icon}
                label={action.label}
                size="sm"
                intent={action.intent}
                className={action.className}
                onClick={() => {
                  action.onClick?.();
                  closeAfterAction();
                }}
                position="inline"
              />
            </div>
          ))}
        </div>
        <FloatButton
          iconName={open ? activeIcon : icon}
          onClick={handleClick}
          className={localStyles.trigger}
          position="inline"
          aria-expanded={open}
          aria-haspopup="true"
          // 名前を渡さないとアイコン名（「PlusIcon」）が名前になっていた。翻訳つきの既定の名前を使う。
          aria-label={ariaLabel ?? (open ? t("a11y.close_menu") : t("a11y.open_menu"))}
          onKeyDown={handleTriggerKeyDown}
        />
      </div>
    );
  }
);

SpeedDial.displayName = "SpeedDial";
