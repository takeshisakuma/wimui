/**
 * 利用者が渡したイベントの処理と、部品が自分で持つ処理を、1 つにまとめる（T347）。
 *
 * 部品が `onClick={handleClick}` を書いたあとで `{...props}` を広げると、利用者が `onClick` を渡した
 * 時点で、部品の処理が丸ごと置き換わる（`Tabs.Trigger` に `onClick` を渡すと、タブが切り替わらなく
 * なっていた。`onClick={undefined}` でも同じ）。ここで両方を呼ぶ:
 *
 * 1. 利用者の処理を先に呼ぶ
 * 2. そこで `event.preventDefault()` されていなければ、部品の処理を呼ぶ
 *
 * 利用者が部品の動きを止めたいときは、`preventDefault()` を呼べばよい（Radix UI と同じ流儀）。
 *
 * 見るのは「利用者の処理が、止めたか」だけ。子の要素の処理が先に `preventDefault()` していた
 * イベント（泡のように上がってきたもの）では、部品の処理をこれまでどおり呼ぶ ── 利用者が何も渡して
 * いないときの動きを、1 つも変えないため。
 *
 * 使い方は、props を広げた**あと**に置くこと:
 *
 * ```tsx
 * <button {...props} onClick={composeEventHandlers(props.onClick, handleClick)} />
 * ```
 */
export declare const composeEventHandlers: <E extends {
    defaultPrevented: boolean;
}>(userHandler: ((event: E) => void) | undefined | null, internalHandler: ((event: E) => void) | undefined | null) => (event: E) => void;
