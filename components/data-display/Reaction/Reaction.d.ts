import { default as React } from '../../../../node_modules/react';
import { ComponentSizeBasic } from '../../../types/tokens';
export type ReactionItem = {
    id: string;
    icon: React.ReactNode;
    label: string;
    count: number;
    active?: boolean;
};
export type ReactionProps = React.ComponentPropsWithoutRef<"div"> & {
    /** List of reactions */
    reactions: ReactionItem[];
    /** Callback when a reaction is added or removed */
    onReact?: (emoji: string, active: boolean) => void;
    /** Whether to show the add button */
    showAddButton?: boolean;
    /** Callback when the add button is clicked */
    onAdd?: () => void;
    /** Size */
    size?: ComponentSizeBasic;
    /** Whether the component is disabled */
    disabled?: boolean;
};
/**
 * Component for displaying and interacting with emoji reactions.
 */
export declare const Reaction: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "ref"> & {
    /** List of reactions */
    reactions: ReactionItem[];
    /** Callback when a reaction is added or removed */
    onReact?: (emoji: string, active: boolean) => void;
    /** Whether to show the add button */
    showAddButton?: boolean;
    /** Callback when the add button is clicked */
    onAdd?: () => void;
    /** Size */
    size?: ComponentSizeBasic;
    /** Whether the component is disabled */
    disabled?: boolean;
} & React.RefAttributes<HTMLDivElement>>;
