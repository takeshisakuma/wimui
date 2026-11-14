/**
 * 要素が「動いた」ことを拾う（T344）。
 *
 * 要素の位置を読んで、別の要素を `position: fixed` で置く部品（Affix・Tour）は、scroll と resize を
 * 聞いて測り直す。だが、位置はスクロールしなくても変わる ── 上にある中身の高さが変わったとき
 * （遅れて読み込まれる画像・開いたアコーディオン・足された行）。そのとき、要素の**大きさは変わらない**
 * ので、`ResizeObserver` では拾えない（試して、直らなかった。2026-10-12）。
 *
 * ここでは `IntersectionObserver` を使う: 要素のいまの矩形にぴったり合わせた `rootMargin` で見張ると、
 * 要素が少しでも動いた時点で、交差の割合が 1 から外れる。外れたら `onMove` を呼び、新しい矩形で
 * 張り直す。floating-ui の `autoUpdate`（`layoutShift`）と同じ考え方で、こちらは依存を増やさないために
 * 自前で持つ（T342 で、入力系が floating-ui を読むと束が 7.9 kB 増えた）。
 *
 * 戻り値は、見張りをやめる関数。`IntersectionObserver` の無い環境（jsdom）では、何もしない。
 */
export declare const observeMove: (element: Element, onMove: () => void) => (() => void);
