import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type ToolbarProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * If true, the component will be rendered as its child, merging its props onto that child.
     */
    asChild?: boolean;
    /**
     * Visual density for padding and gap. Cascades to `--wim-toolbar-*` CSS variables.
     * @default "md"
     */
    size?: ComponentSizeBasic;
    /**
     * Layout axis of the toolbar.
     * @default "horizontal"
     */
    orientation?: "horizontal" | "vertical";
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
