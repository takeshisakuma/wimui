import React from "react";
import classNames from "classnames";
import { Kbd } from "../../typography/Kbd/Kbd";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./keyboard-shortcuts.module.scss";

export type ShortcutItem = {
  /** Description label of the shortcut */
  label: string;
  /** Keys of the shortcut (e.g. ["Ctrl", "K"]) */
  keys: string[];
};

export type KeyboardShortcutsProps = React.ComponentPropsWithoutRef<"dl"> & {
  /** List of shortcuts to display */
  shortcuts: ShortcutItem[];
  /** Section title */
  title?: string;
  /**
   * Separator displayed between keys
   * @default "+"
   */
  separator?: string;
  /**
   * Size of the list
   * @default "md"
   */
  size?: ComponentSizeBasic;
};

/**
 * Displays a list of keyboard shortcuts.
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
      <div className={classNames("wim-keyboard-shortcuts", styles.root, styles[size], className)}>
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
