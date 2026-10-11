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
export const observeMove = (element: Element, onMove: () => void): (() => void) => {
  if (typeof IntersectionObserver === "undefined") return () => {};

  // 文書につながっていない相手（テストで差し替えた要素など）は、見張れない。
  const root = element.ownerDocument?.documentElement;
  if (!root) return () => {};
  let observer: IntersectionObserver | null = null;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const stop = () => {
    clearTimeout(timer);
    observer?.disconnect();
    observer = null;
  };

  const watch = (notify: boolean, threshold = 1) => {
    stop();
    const { left, top, width, height } = element.getBoundingClientRect();
    if (notify) onMove();
    // 大きさの無い要素（display: none など）は、見張れない。次に呼ばれるまで待つ。
    if (!width || !height) return;

    // 画面の四辺から、要素の四辺までの距離。これを負の rootMargin にすると、見張る枠が要素の矩形に重なる。
    const rootMargin = [
      -Math.floor(top),
      -Math.floor(root.clientWidth - (left + width)),
      -Math.floor(root.clientHeight - (top + height)),
      -Math.floor(left),
    ]
      .map((px) => `${px}px`)
      .join(" ");

    let first = true;
    observer = new IntersectionObserver(
      (entries) => {
        const ratio = entries[0].intersectionRatio;
        // 割合を返さない実装（テストの差し替えなど）では、動きを判定できない。張り直しを続けると、
        // 1 秒ごとのタイマーが回り続けるので、ここで見張りをやめる。
        if (typeof ratio !== "number") {
          stop();
          return;
        }
        // 張ってから 1 回目の報告が届くまでのあいだに動いた分は、割合では見分けられない（1 回目は
        // 「いまの割合」として読み飛ばすため）。枠を作ったときの位置と、いまの位置を比べて拾う。
        const now = element.getBoundingClientRect();
        const movedSinceWatch = first && (Math.abs(now.left - left) >= 1 || Math.abs(now.top - top) >= 1);
        if (movedSinceWatch) {
          watch(true);
          return;
        }
        if (ratio !== threshold) {
          // 張った直後の 1 回目は、いまの割合の報告。動いたのではないので、その割合で張り直すだけ。
          if (!first) {
            watch(true);
            return;
          }
          if (ratio) watch(false, ratio);
          // 画面の外にあって割合が 0 のときは、すぐ張り直すと回り続ける。間を置く。
          else timer = setTimeout(() => watch(false, 1e-7), 1000);
        }
        first = false;
      },
      { rootMargin, threshold: Math.max(0, Math.min(1, threshold)) || 1 },
    );
    observer.observe(element);
  };

  watch(false);
  return stop;
};
