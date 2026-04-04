import { default as React } from '../../../../node_modules/react';
export type KanbanLabels = {
    cardMovedTo?: (to: string) => string;
    cardMovedFromTo?: (from: string, to: string) => string;
    cards?: (count: number) => string;
    moveCard?: string;
    moveToColumn?: string;
};
export type KanbanBoardProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * カードが別の列にドロップ／移動された際に呼び出されるコールバック。
     */
    onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string) => void;
    /**
     * タッチデバイス向けの移動ボタンUIを強制表示する。
     * Storybookでのモバイルプレビューや開発時の確認に使用する。
     */
    forceMobileUI?: boolean;
    /**
     * 手動翻訳用のラベル。
     */
    labels?: KanbanLabels;
};
declare const KanbanBoard: {
    ({ children, className, onCardMove, forceMobileUI, labels, ...props }: KanbanBoardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type KanbanColumnProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * 列を識別する一意のID。カード移動時に使用される。
     */
    id: string;
    /**
     * 列のヘッダーに表示するタイトル。
     */
    title: React.ReactNode;
    /**
     * ヘッダーに表示するカード枚数バッジ。
     */
    cardCount?: number;
};
export declare const KanbanColumn: {
    ({ id, title, cardCount, children, className, ...props }: KanbanColumnProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export type KanbanCardProps = React.ComponentPropsWithoutRef<"div"> & {
    /**
     * カードを識別する一意のID。
     */
    id: string;
    /**
     * trueの場合、ドラッグ・移動操作が不可になる。
     */
    disabled?: boolean;
};
export declare const KanbanCard: {
    ({ id, disabled, children, className, ...props }: KanbanCardProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const KanbanBoardComponent: typeof KanbanBoard & {
    Column: typeof KanbanColumn;
    Card: typeof KanbanCard;
};
export { KanbanBoardComponent as KanbanBoard };
