import { default as React } from '../../../../node_modules/react';
interface SwipeableListContextValue {
    openedId: string | null;
    reportOpen: (id: string) => void;
    reportClose: (id: string) => void;
}
export declare const useSwipeableList: () => SwipeableListContextValue | null;
export interface SwipeableListProps {
    /** The `SwipeAction` rows to coordinate */
    children: React.ReactNode;
    /**
     * If true (default), only one row can be open at a time — opening a row, by swipe
     * or by keyboard focus on its actions, closes the others.
     */
    exclusive?: boolean;
    /** Additional CSS class */
    className?: string;
}
/**
 * SwipeableList provides a context for managing multiple SwipeAction components,
 * enabling features like exclusive opening (close others when one opens).
 */
export declare const SwipeableList: React.FC<SwipeableListProps>;
export {};
