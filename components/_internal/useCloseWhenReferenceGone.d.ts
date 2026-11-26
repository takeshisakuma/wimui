/**
 * 開いている間に引き金が見えなくなったら（`display: none` などで大きさが 0 になった・文書から外れた）、
 * 面を閉じる（T412）。
 *
 * 位置の計算は引き金を見失うと、面を画面の左上に置いたまま残した（Popover・Dropdown）。画面幅で
 * 引き金を隠すツールバーや、タブを切り替えて引き金が消える画面で起きる。スクロールして引き金が
 * 画面の外へ出ただけでは閉じない（floating-ui の `hide` を使うと、そこまで閉じてしまう）。
 */
export declare function useCloseWhenReferenceGone(open: boolean, reference: unknown, close: () => void): void;
