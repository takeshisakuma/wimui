import { default as React } from '../../../../node_modules/react';
export interface TabBarProps extends React.ComponentPropsWithoutRef<"nav"> {
    /**
     * Pins the bar to the bottom of the **viewport**. Defaults to `true`.
     *
     * The pin is `position: fixed`, so the bar leaves whatever container you put
     * it in: inside a device-width frame, a preview pane, or a split view it
     * spans the whole window instead. Pass `false` whenever the bar belongs to a
     * container rather than to the window — a screen inside a screen.
     *
     * Nothing warns you about this. `position: fixed` does not widen the
     * document, so the page never gains a horizontal scrollbar and overflow
     * scans stay green while the bar hangs outside its parent.
     */
    fixed?: boolean;
    /** Show top border */
    bordered?: boolean;
    /** Glassmorphism effect */
    glass?: boolean;
}
declare const TabBarInner: React.ForwardRefExoticComponent<TabBarProps & React.RefAttributes<HTMLElement>>;
export interface TabBarItemProps extends React.ComponentPropsWithoutRef<"button"> {
    /**
     * If true, the item will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /** Active state */
    active?: boolean;
    /** Icon element */
    icon?: React.ReactNode;
    /** Text label */
    label?: string;
    /** Badge content (optional) */
    badge?: React.ReactNode;
}
export declare const TabBarItem: React.ForwardRefExoticComponent<TabBarItemProps & React.RefAttributes<HTMLButtonElement>>;
export declare const TabBar: typeof TabBarInner & {
    Item: typeof TabBarItem;
};
export default TabBar;
