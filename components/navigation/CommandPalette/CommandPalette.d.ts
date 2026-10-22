import { default as React, ReactNode } from '../../../../node_modules/react';
export interface CommandPaletteProps {
    /**
     * Palette parts (CommandPaletteTrigger, CommandPaletteContent, etc.).
     */
    children: ReactNode;
    /**
     * Controlled open state. Use together with onOpenChange.
     */
    open?: boolean;
    /**
     * Called with the next state when the palette is opened or closed.
     */
    onOpenChange?: (open: boolean) => void;
}
export declare const CommandPalette: ({ children, open: controlledOpen, onOpenChange, }: CommandPaletteProps) => React.JSX.Element;
export interface CommandPaletteTriggerProps {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const CommandPaletteTrigger: ({ children, asChild, className, }: CommandPaletteTriggerProps) => React.JSX.Element;
export interface CommandPaletteContentProps {
    children: ReactNode;
    className?: string;
    /**
     * Accessible name for the dialog. Defaults to the built-in translation —
     * `role="dialog"` without a name is an axe `aria-dialog-name` violation
     * (serious), and the palette has no heading to borrow one from.
     */
    "aria-label"?: string;
    /** ID of the element that labels the dialog. Takes precedence over `aria-label` and the built-in name. */
    "aria-labelledby"?: string;
    /** ID of the element that describes the dialog. */
    "aria-describedby"?: string;
}
export declare const CommandPaletteContent: ({ children, className, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, "aria-describedby": ariaDescribedBy, }: CommandPaletteContentProps) => React.JSX.Element;
export interface CommandPaletteInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
    rightSection?: ReactNode;
}
export declare const CommandPaletteInput: ({ placeholder, value, onChange, rightSection, }: CommandPaletteInputProps) => React.JSX.Element;
export declare const CommandPaletteList: ({ children, "aria-label": ariaLabelAttr, "aria-labelledby": ariaLabelledBy, }: {
    children: ReactNode;
    /** Accessible name for the list of results. Defaults to the built-in command palette label. */
    "aria-label"?: string;
    /** ID of the element that labels the list of results. Takes precedence over `aria-label`. */
    "aria-labelledby"?: string;
}) => React.JSX.Element;
export declare const CommandPaletteGroup: ({ children, heading, }: {
    children: ReactNode;
    heading?: string;
}) => React.JSX.Element;
export interface CommandPaletteItemProps {
    children: ReactNode;
    onSelect?: () => void;
    icon?: ReactNode;
    shortcut?: string[];
    disabled?: boolean;
}
export declare const CommandPaletteItem: ({ children, onSelect, icon, shortcut, disabled, }: CommandPaletteItemProps) => React.JSX.Element;
export declare const CommandPaletteEmpty: ({ children, }: {
    children?: ReactNode;
}) => React.JSX.Element | null;
export declare const CommandPaletteFooter: ({ children }: {
    children: ReactNode;
}) => React.JSX.Element;
