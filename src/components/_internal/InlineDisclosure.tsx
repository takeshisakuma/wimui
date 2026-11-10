import React, { useEffect, useId, useRef, useState } from "react";
import classNames from "classnames";
import { useInlineFloating } from "./useInlineFloating";
import styles from "./inline-disclosure.module.scss";

export type InlineDisclosureProps = {
  /** ボタンの中身（「…」のアイコン・「+3」の文字など） */
  trigger: React.ReactNode;
  /** ボタンの読み上げの名前。中身の文字で名前が足りるなら渡さない */
  label?: string;
  /** ボタンに足すクラス（見た目は部品ごとに決める。押せる大きさの下限はこちらで持つ） */
  triggerClassName?: string;
  /** 一覧の中身。`<li>` を並べる */
  children: React.ReactNode;
};

/**
 * 隠れた項目を開くボタンと、その隣に描く一覧（disclosure: `aria-expanded` / `aria-controls`）。
 * OverflowList の「+N」から、畳んだ項目へ届く道に使う（Breadcrumb・AvatarGroup）。
 *
 * Composition Contract:
 * - Managed by: 部品の内側（OverflowList の renderOverflow の中）
 * - Scroll lock: No
 * - 一覧はポータルへ出さず、引き金の隣に描く（位置は useInlineFloating。floating-ui を読まない）
 * - Escape・外側の押下・フォーカスが外へ出たときに閉じる。Escape ではボタンへフォーカスを戻す
 */
export const InlineDisclosure = ({ trigger, label, triggerClassName, children }: InlineDisclosureProps) => {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const wrapperRef = useRef<HTMLSpanElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const { setReference, setFloating, floatingProps } = useInlineFloating({ open });

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    // Escape は、フォーカスがボタンか一覧の中にあるときだけ閉じて、ボタンへ戻す
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !wrapperRef.current?.contains(document.activeElement)) return;
      event.stopPropagation();
      setOpen(false);
      buttonRef.current?.focus();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <span
      ref={(node) => {
        wrapperRef.current = node;
        setReference(node);
      }}
      className={styles.root}
      onBlur={(event) => {
        if (open && !event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className={classNames(styles.trigger, triggerClassName)}
        aria-label={label}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        onClick={() => setOpen((current) => !current)}
      >
        {trigger}
      </button>
      {open && (
        <ul id={panelId} ref={setFloating} className={styles.panel} {...floatingProps}>
          {children}
        </ul>
      )}
    </span>
  );
};
