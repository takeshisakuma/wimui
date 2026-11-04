import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
import { WimTheme } from '../../../theme';
/** Theme mode. "system" follows the OS via `prefers-color-scheme`. */
export type ThemeMode = WimTheme;
/** Labels for internationalization. */
export type ThemeToggleLabels = {
    /** Label for the light mode */
    light?: string;
    /** Label for the dark mode */
    dark?: string;
    /** Label for the system (auto) mode */
    system?: string;
    /** Accessible label / group label for the control */
    toggle?: string;
};
export interface ThemeToggleProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
    /** Selected mode (controlled) */
    value?: ThemeMode;
    /** Initially selected mode (uncontrolled) */
    defaultValue?: ThemeMode;
    /** Callback when the mode changes */
    onChange?: (mode: ThemeMode) => void;
    /** Modes to offer, in cycle order */
    modes?: ThemeMode[];
    /** "icon" cycles modes on a single button; "segmented" shows one button per mode */
    variant?: "icon" | "segmented";
    /** Size of the control */
    size?: ComponentSizeBasic;
    /** localStorage key used to persist the choice; pass null to disable persistence */
    storageKey?: string | null;
    /** Whether to apply the selected mode to the document root as `data-theme` */
    applyToDocument?: boolean;
    /** Labels for internationalization */
    labels?: ThemeToggleLabels;
    /** Additional class names */
    className?: string;
    /** Whether to render as a child element. */
    asChild?: boolean;
}
/**
 * ThemeToggle switches the app between light, dark, and system themes. It writes
 * `data-theme` to the document root (the attribute the design tokens key off)
 * and persists the choice to localStorage.
 *
 * Prefer wrapping the app in `WimProvider` for theme/density/locale. When both
 * drive the same document theme, lift state and set `applyToDocument={false}` here.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export declare const ThemeToggle: React.ForwardRefExoticComponent<ThemeToggleProps & React.RefAttributes<HTMLDivElement>>;
