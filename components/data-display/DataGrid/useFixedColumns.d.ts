import { DataGridColumn } from './DataGrid';
export type FixedColumnInfo = {
    offset: number | string;
    zIndex: number;
};
/**
 * @param selectionWidth 選択の列の、測った幅（px）。選択の列は中身（チェックボックスと
 *   密度で変わる余白）の幅なので、決め打ちの値で積むと、横にスクロールしたときに
 *   左に固定した列とのあいだに隙間や重なりができる
 */
export declare function useFixedColumns<T>(columns: DataGridColumn<T>[], selection: boolean, selectionWidth?: number): {
    fixedLeftOffsets: Record<string, FixedColumnInfo>;
    fixedRightOffsets: Record<string, FixedColumnInfo>;
};
