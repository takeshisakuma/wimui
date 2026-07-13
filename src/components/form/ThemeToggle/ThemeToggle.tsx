import React, { useCallback, useEffect, useState } from "react";
import classNames from "classnames";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Icon } from "../../media/Icon/Icon";
import { SunIcon, MoonIcon, MonitorIcon } from "@/icon";
import { ComponentSizeBasic } from "../../../types/tokens";
import styles from "./theme-toggle.module.scss";

/** Theme mode. "system" follows the OS via `prefers-color-scheme`. */
export type ThemeMode = "light" | "dark" | "system";

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

const ICONS: Record<ThemeMode, React.ComponentType<React.SVGProps<SVGSVGElement>>> = {
  light: SunIcon,
  dark: MoonIcon,
  system: MonitorIcon,
};

export interface ThemeToggleProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
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

const DEFAULT_STORAGE_KEY = "wim-theme";

const isThemeMode = (v: unknown): v is ThemeMode =>
  v === "light" || v === "dark" || v === "system";

/** Apply the mode to the document root: `data-theme` for explicit modes, removed for "system". */
const applyTheme = (mode: ThemeMode) => {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  if (mode === "system") root.removeAttribute("data-theme");
  else root.setAttribute("data-theme", mode);
};

/**
 * ThemeToggle switches the app between light, dark, and system themes. It writes
 * `data-theme` to the document root (the attribute the design tokens key off)
 * and persists the choice to localStorage.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const ThemeToggle = React.forwardRef<HTMLDivElement, ThemeToggleProps>(
  (
    {
      value,
      defaultValue = "system",
      onChange,
      modes = ["light", "dark"],
      variant = "icon",
      size = "md",
      storageKey = DEFAULT_STORAGE_KEY,
      applyToDocument = true,
      labels,
      className,
      asChild = false,
      children,
      ...props
    },
    ref,
  ) => {
    const {
      light = "Light",
      dark = "Dark",
      system = "System",
      toggle = "Toggle theme",
    } = labels ?? {};
    const modeLabels: Record<ThemeMode, string> = { light, dark, system };

    const isControlled = value !== undefined;
    const [internalMode, setInternalMode] = useState<ThemeMode>(() => {
      if (typeof window !== "undefined" && storageKey) {
        const stored = window.localStorage.getItem(storageKey);
        if (isThemeMode(stored) && modes.includes(stored)) return stored;
      }
      return modes.includes(defaultValue) ? defaultValue : modes[0];
    });
    const current = isControlled ? value : internalMode;

    // Apply the active mode to the document (and react to system changes when in "system").
    useEffect(() => {
      if (!applyToDocument) return;
      applyTheme(current);
    }, [current, applyToDocument]);

    const selectMode = useCallback(
      (mode: ThemeMode) => {
        if (!isControlled) setInternalMode(mode);
        if (typeof window !== "undefined" && storageKey) {
          window.localStorage.setItem(storageKey, mode);
        }
        onChange?.(mode);
      },
      [isControlled, storageKey, onChange],
    );

    const cycle = () => {
      const index = modes.indexOf(current);
      const next = modes[(index + 1) % modes.length];
      selectMode(next);
    };

    const Component = asChild ? Slot : "div";

    if (variant === "segmented") {
      return (
        <Component
          ref={ref}
          role="group"
          aria-label={toggle}
          className={classNames(styles.segmented, styles[size], className)}
          {...props}
        >
          {modes.map((mode) => {
            const isActive = mode === current;
            return (
              <button
                key={mode}
                type="button"
                className={classNames(styles.segment, isActive && styles.active)}
                aria-pressed={isActive}
                aria-label={modeLabels[mode]}
                title={modeLabels[mode]}
                onClick={() => selectMode(mode)}
              >
                <Icon component={ICONS[mode]} size="sm" />
              </button>
            );
          })}
          <Slottable>{children}</Slottable>
        </Component>
      );
    }

    return (
      <Component
        ref={ref}
        className={classNames("wim-theme-toggle", styles.root, className)}
        {...props}
      >
        <button
          type="button"
          className={classNames(styles.iconButton, styles[size])}
          aria-label={`${toggle} (${modeLabels[current]})`}
          title={modeLabels[current]}
          onClick={cycle}
        >
          <Icon component={ICONS[current]} size="sm" />
        </button>
        <Slottable>{children}</Slottable>
      </Component>
    );
  },
);

ThemeToggle.displayName = "ThemeToggle";
