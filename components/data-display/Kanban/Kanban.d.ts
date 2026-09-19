import { default as React } from '../../../../node_modules/react';
export interface KanbanItem {
    id: string;
    content: React.ReactNode;
}
export interface KanbanColumnData {
    id: string;
    title: string;
    items: KanbanItem[];
}
export interface KanbanProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onMove"> {
    /** Kanban column data (for prop-driven usage). */
    columns?: KanbanColumnData[];
    /** Callback when a card is moved. */
    onMove?: (itemId: string, fromColumnId: string, toColumnId: string) => void;
    /** Callback when a card is moved (legacy / alternative name). */
    onCardMove?: (itemId: string, fromColumnId: string, toColumnId: string) => void;
    /** Whether to force the touch-device UI. */
    forceMobileUI?: boolean;
    /** Whether to render as a child element. */
    asChild?: boolean;
}
/**
 * Kanban board component suited for project management and similar use cases.
 */
export declare const Kanban: React.ForwardRefExoticComponent<KanbanProps & React.RefAttributes<HTMLDivElement>>;
interface KanbanColumnProps {
    id: string;
    title: string;
    cardCount?: number;
    children?: React.ReactNode;
    className?: string;
}
export declare const KanbanColumn: {
    ({ id, title, cardCount, children, className, }: KanbanColumnProps): React.JSX.Element;
    displayName: string;
};
interface KanbanCardProps {
    id: string;
    children: React.ReactNode;
    disabled?: boolean;
    className?: string;
}
export declare const KanbanCard: {
    ({ id, children, disabled, className, }: KanbanCardProps): React.JSX.Element;
    displayName: string;
};
declare const KanbanColumnWrapper: {
    (props: KanbanColumnProps): React.JSX.Element;
    displayName: string;
};
export declare const KanbanBoard: typeof Kanban & {
    Column: typeof KanbanColumnWrapper;
    Card: typeof KanbanCard;
};
export default KanbanBoard;
