import { default as React } from '../node_modules/react';
import { WimDensity } from './density';
import { WimPreset } from './preset';
import { WimTheme } from './theme';
export type WimProviderProps = {
    children: React.ReactNode;
    /**
     * Color theme. Writes `data-theme` on `root` (`light` / `dark`), or removes it for `system`.
     * @default "system"
     */
    theme?: WimTheme;
    /**
     * Control density. Writes `data-density` on `root`.
     * @default "comfortable"
     */
    density?: WimDensity;
    /** Built-in UI locale (`en` / `ja` / `pt`). Omit to leave the current locale unchanged. */
    locale?: string;
    /**
     * Theme preset ("brand kit"). Writes `data-wim-preset` on `root`, or removes it for `none`.
     * @default "none"
     */
    preset?: WimPreset;
    /**
     * Element that receives `data-theme` / `data-density` / `data-wim-preset`.
     * Defaults to `document.documentElement` (`<html>`).
     */
    root?: Element | null;
};
export type WimContextValue = {
    theme: WimTheme;
    density: WimDensity;
    locale: string;
    preset: WimPreset;
};
/**
 * Read the nearest `WimProvider` values, or fall back to document / i18n globals
 * when used outside a provider.
 */
export declare function useWim(): WimContextValue;
/**
 * Front-facing setup for theme, density, and built-in locale.
 * Attributes (`data-theme` / `data-density`) remain the CSS contract; this provider
 * is the preferred way to set them from React.
 *
 * @example
 * ```tsx
 * <WimProvider theme="dark" density="compact" locale="ja">
 *   <App />
 * </WimProvider>
 * ```
 *
 * When also using `ThemeToggle` for the same document theme, lift state into the
 * parent and pass `applyToDocument={false}` on the toggle so the two do not fight.
 */
export declare function WimProvider({ children, theme, density, locale, preset, root, }: WimProviderProps): React.JSX.Element;
export declare namespace WimProvider {
    var displayName: string;
}
