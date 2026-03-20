import { DataGridColumn } from './DataGrid';
type FixedColumnInfo = {
    offset: number | string;
    zIndex: number;
};
export declare function useFixedColumns<T>(columns: DataGridColumn<T>[], selection: boolean): {
    fixedLeftOffsets: Record<string, FixedColumnInfo>;
    fixedRightOffsets: Record<string, FixedColumnInfo>;
};
export {};
