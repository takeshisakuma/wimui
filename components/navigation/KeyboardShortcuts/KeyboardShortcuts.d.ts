import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
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
export declare const KeyboardShortcuts: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDListElement>, HTMLDListElement>, "ref"> & {
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
} & React.RefAttributes<HTMLDListElement>>;
