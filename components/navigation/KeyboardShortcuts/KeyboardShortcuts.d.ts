import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
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
     * `title` を見出しとして描くときの段（T211）。渡さなければ見出しにならず `p` のまま。
     *
     * ショートカット一覧は「編集」「移動」のように節ごとに積んで使うので、段で辿れると
     * 効く。ただし既定を見出しにはしない ── 段を決め打つとページに `h1` / `h2` がある
     * 場合に段が飛び、axe の `heading-order` が鳴る（T191 で `Footer` が実際に踏んだ）。
     * 段を決めるのはページ側の構造を知っている呼び出し元の仕事で、`Alert` の `titleTag`
     * （既定 `div`）と同じ形。
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
export declare const KeyboardShortcuts: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> & {
    /** List of shortcuts to display */
    shortcuts: ShortcutItem[];
    /** Section title */
    title?: string;
    /**
     * `title` を見出しとして描くときの段（T211）。渡さなければ見出しにならず `p` のまま。
     *
     * ショートカット一覧は「編集」「移動」のように節ごとに積んで使うので、段で辿れると
     * 効く。ただし既定を見出しにはしない ── 段を決め打つとページに `h1` / `h2` がある
     * 場合に段が飛び、axe の `heading-order` が鳴る（T191 で `Footer` が実際に踏んだ）。
     * 段を決めるのはページ側の構造を知っている呼び出し元の仕事で、`Alert` の `titleTag`
     * （既定 `div`）と同じ形。
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
} & React.RefAttributes<HTMLDListElement>>;
