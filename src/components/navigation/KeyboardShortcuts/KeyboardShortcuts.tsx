import React from "react";
import classNames from "classnames";
import { Kbd } from "../../typography/Kbd/Kbd";
import styles from "./keyboard-shortcuts.module.scss";

export type ShortcutItem = {
  /** ショートカットの説明ラベル */
  label: string;
  /** キーの配列（例: ["Ctrl", "K"]） */
  keys: string[];
};

export type KeyboardShortcutsProps = React.ComponentPropsWithoutRef<"dl"> & {
  /** ショートカット一覧 */
  shortcuts: ShortcutItem[];
  /** セクションタイトル */
  title?: string;
  /** キー間のセパレーター */
  separator?: string;
  /** サイズ */
  size?: "sm" | "md" | "lg";
};

/**
 * キーボードショートカット一覧を表示するコンポーネント。
 */
export const KeyboardShortcuts = React.forwardRef<
  HTMLDListElement,
  KeyboardShortcutsProps
>(
  (
    {
      shortcuts,
      title,
      separator = "+",
      size = "md",
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <div className={classNames(styles.root, styles[size], className)}>
        {title && <p className={styles.title}>{title}</p>}
        <dl ref={ref} className={styles.list} {...props}>
          {shortcuts.map((shortcut, index) => (
            <div key={index} className={styles.item}>
              <dt className={styles.label}>{shortcut.label}</dt>
              <dd className={styles.keys}>
                {shortcut.keys.map((key, keyIndex) => (
                  <React.Fragment key={keyIndex}>
                    {keyIndex > 0 && (
                      <span
                        className={styles.separator}
                        aria-hidden="true"
                      >
                        {separator}
                      </span>
                    )}
                    <Kbd size={size}>{key}</Kbd>
                  </React.Fragment>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    );
  },
);

KeyboardShortcuts.displayName = "KeyboardShortcuts";
