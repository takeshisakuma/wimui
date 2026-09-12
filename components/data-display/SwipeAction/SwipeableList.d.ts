import { default as React } from '../../../../node_modules/react';
interface SwipeableListContextValue {
    openedId: string | null;
    reportOpen: (id: string) => void;
    reportClose: (id: string) => void;
}
export declare const useSwipeableList: () => SwipeableListContextValue | null;
export interface SwipeableListProps {
    children: React.ReactNode;
    /** If true, only one item can be swiped open at a time. */
    exclusive?: boolean;
    className?: string;
}
/**
 * SwipeableList provides a context for managing multiple SwipeAction components,
 * enabling features like exclusive opening (close others when one opens).
 */
export declare const SwipeableList: React.FC<SwipeableListProps>;
export {};
