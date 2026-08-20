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

/** 見出しの段。`Dashboard` の `titleLevel` と同じ語彙に揃えてある（T211）。 */
export type KeyboardShortcutsTitleLevel = 2 | 3 | 4 | 5 | 6;

export type KeyboardShortcutsProps = React.ComponentPropsWithoutRef<"dl"> & {
  /** List of shortcuts to display */
  shortcuts: ShortcutItem[];
  /** Section title */
  title?: string;
  /**
   * `title` を見出しとして描くときの段（T211）。**既定は見出しにしない**（`p`）。
   *
   * ショートカット一覧は「編集」「移動」のように**節ごとに積んで使う**ので、
   * 段で辿れると効く。ただし**既定を見出しにはしない** ── 段を決め打つと
   * ページに `h1` / `h2` がある場合に段が飛び、axe の `heading-order` が鳴る
   * （T191 で `Footer` が実際に踏んだ）。段を決めるのは**ページ側の構造を
   * 知っている呼び出し元**の仕事で、`Alert` の `titleTag`（既定 `div`）と同じ形。
   */
  titleLevel?: KeyboardShortcutsTitleLevel;
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
      titleLevel,
      separator = "+",
      size = "md",
      className,
      ...props
    },
    ref,
  ) => {
    /* 見た目は `.title` が持つ（`margin` と `font-size` / `font-weight` を明示して
       いるので、`p` と見出しで寸法は動かない。変わるのは `@layer base` の行間だけ）。 */
    const Heading = titleLevel
      ? (`h${titleLevel}` as "h2" | "h3" | "h4" | "h5" | "h6")
      : null;
    return (
      <div className={classNames("wim-keyboard-shortcuts", styles.root, styles[size], className)}>
        {title &&
          (Heading ? (
            <Heading className={styles.title}>{title}</Heading>
          ) : (
            <p className={styles.title}>{title}</p>
          ))}
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
