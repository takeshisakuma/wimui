import { default as React } from '../../../../node_modules/react';
import { DataGridColumn } from './DataGrid';
export declare function useDataGridKeyboard<T>(columns: DataGridColumn<T>[], rows: T[], selection: boolean): {
    focusedCell: {
        row: number;
        col: number;
    };
    setFocusedCell: React.Dispatch<React.SetStateAction<{
        row: number;
        col: number;
    }>>;
    containerRef: React.RefObject<HTMLDivElement | null>;
    handleKeyDown: (e: React.KeyboardEvent) => void;
};
