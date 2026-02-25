import { ReactNode } from '../../../node_modules/react';
export interface CommandPaletteProps {
    children: ReactNode;
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
}
export declare const CommandPalette: ({ children, open: controlledOpen, onOpenChange, }: CommandPaletteProps) => import("react/jsx-runtime").JSX.Element;
export interface CommandPaletteTriggerProps {
    children: ReactNode;
    asChild?: boolean;
    className?: string;
}
export declare const CommandPaletteTrigger: ({ children, asChild, className, }: CommandPaletteTriggerProps) => import("react/jsx-runtime").JSX.Element;
export interface CommandPaletteContentProps {
    children: ReactNode;
    className?: string;
}
export declare const CommandPaletteContent: ({ children, className, }: CommandPaletteContentProps) => import("react/jsx-runtime").JSX.Element;
export interface CommandPaletteInputProps {
    placeholder?: string;
    value?: string;
    onChange?: (value: string) => void;
}
export declare const CommandPaletteInput: ({ placeholder, value, onChange, }: CommandPaletteInputProps) => import("react/jsx-runtime").JSX.Element;
export declare const CommandPaletteList: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
export declare const CommandPaletteGroup: ({ children, heading, }: {
    children: ReactNode;
    heading?: string;
}) => import("react/jsx-runtime").JSX.Element;
export interface CommandPaletteItemProps {
    children: ReactNode;
    onSelect?: () => void;
    icon?: ReactNode;
    shortcut?: string[];
    disabled?: boolean;
}
export declare const CommandPaletteItem: ({ children, onSelect, icon, shortcut, disabled, }: CommandPaletteItemProps) => import("react/jsx-runtime").JSX.Element;
export declare const CommandPaletteEmpty: ({ children, }: {
    children?: ReactNode;
}) => import("react/jsx-runtime").JSX.Element | null;
export declare const CommandPaletteFooter: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
