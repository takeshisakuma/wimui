import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type ToolbarProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * Visual density for padding and gap.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Layout axis of the toolbar.
     * @default "horizontal"
     */
    orientation?: "horizontal" | "vertical";
    /**
     * How the controls that do not fit on one line are handled. `"wrap"` wraps them onto the next
     * line; `"collapse"` keeps one line and moves the trailing children that do not fit behind a
     * "…" button, which opens them in a panel next to it. Each direct child (a whole
     * `Toolbar.Group`) is collapsed as one unit. Horizontal toolbars only, and not with `asChild`.
     *
     * A control remounts when it moves into the panel, so keep its state controlled.
     * @default "wrap"
     */
    overflow?: "wrap" | "collapse";
    /**
     * Accessible name of the "…" button with `overflow="collapse"`, from the number of hidden
     * children. Defaults to the built-in "Show hidden tools (n)" (en / ja / pt).
     */
    moreLabel?: (count: number) => string;
};
export type ToolbarGroupProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * If true, the group will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
};
/**
 * Logical cluster of related toolbar controls (`role="group"`).
 */
export declare const ToolbarGroup: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /**
     * If true, the group will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
export type ToolbarSeparatorProps = React.ComponentPropsWithoutRef<"div">;
/**
 * Visual separator between toolbar groups. Orientation follows the parent toolbar.
 */
export declare const ToolbarSeparator: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface ToolbarComponent extends React.ForwardRefExoticComponent<ToolbarProps & React.RefAttributes<HTMLDivElement>> {
    Group: typeof ToolbarGroup;
    Separator: typeof ToolbarSeparator;
}
export declare const Toolbar: ToolbarComponent;
export default Toolbar;
