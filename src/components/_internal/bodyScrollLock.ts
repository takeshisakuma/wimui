/**
 * 画面のスクロールを止めたとき、スクロールバーが消えて中身が横にずれないようにする（T395）。
 *
 * `scrollbar-gutter` を `body` に書いても、画面のスクロールバーには効かない。
 * ただし `overflow: hidden` にした瞬間、`body` 自身がスクロール容器になり、その gutter が幅を取り始める。
 * `html` へ移すと `reset.css` を読み込まない利用者には届かないので、止める側で扱う。
 * 画面のスクロールバーが消えて `clientWidth` が増えた分だけ余白を足す。増えないときは足さない。
 *
 * 面を重ねたときは回数で数える。内側を先に閉じても、外側を先に閉じても、最後の 1 枚が閉じるまで止めを残す。
 */

type Snapshot = {
  count: number;
  overflow: string;
  paddingRight: string;
  scrollbarGutter: string;
};

let snapshot: Snapshot | null = null;

export function lockBodyScroll(): () => void {
  if (typeof document === "undefined") return () => {};

  const body = document.body;
  if (!snapshot) {
    const overflow = body.style.overflow;
    const paddingRight = body.style.paddingRight;
    const scrollbarGutter = body.style.scrollbarGutter;
    const before = document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    // `overflow: hidden` にした瞬間、`body` がスクロール容器になり、
    // `scrollbar-gutter: stable` が幅を取り始めて中身が左へ寄る。止めている間は外す。
    body.style.scrollbarGutter = "auto";
    const gap = Math.max(0, document.documentElement.clientWidth - before);
    if (gap > 0) {
      const current = Number.parseFloat(window.getComputedStyle(body).paddingRight) || 0;
      body.style.paddingRight = `${current + gap}px`;
    }
    snapshot = { count: 0, overflow, paddingRight, scrollbarGutter };
  }
  snapshot.count += 1;

  let released = false;
  return () => {
    if (released || !snapshot) return;
    released = true;
    snapshot.count -= 1;
    if (snapshot.count > 0) return;
    body.style.overflow = snapshot.overflow;
    body.style.paddingRight = snapshot.paddingRight;
    body.style.scrollbarGutter = snapshot.scrollbarGutter;
    snapshot = null;
  };
}
