import { useEffect, useRef } from "react";

/**
 * Escape で閉じる層の重なり（T408）。開いた面の中でさらに面を開いたとき、Escape を受けるのは
 * 一番上の層だけにする。
 *
 * 以前は、閉じる部品がそれぞれ document で keydown を拾っていた。リスナーは登録した順に走るので、
 * 先に開いていた外側の Dialog が先に Escape を受け、中の DatePicker や入れ子の Dialog より先に閉じた。
 * `stopPropagation` は同じ document のほかのリスナーを止めないので、各部品の側では防げない。
 *
 * ここでは document のリスナーを 1 つだけにし、Escape を一番最後に開いた層へだけ渡す。中の部品が
 * 自分の React のハンドラーで閉じて `preventDefault` していれば（Select など。React のハンドラーは
 * document のリスナーより先に走る）、どの層にも渡さない。
 */
type Layer = { onEscape: (event: KeyboardEvent) => void };

const layers: Layer[] = [];

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key !== "Escape" || event.defaultPrevented) return;
  const top = layers[layers.length - 1];
  if (!top) return;
  event.preventDefault();
  top.onEscape(event);
};

/**
 * `active` の間、Escape で閉じる層として重なりに積む。積んだ層のうち一番上だけが `onEscape` を受ける。
 */
export function useEscapeLayer(active: boolean, onEscape: (event: KeyboardEvent) => void) {
  const onEscapeRef = useRef(onEscape);
  useEffect(() => {
    onEscapeRef.current = onEscape;
  });

  useEffect(() => {
    if (!active) return;
    const layer: Layer = { onEscape: (event) => onEscapeRef.current(event) };
    if (layers.length === 0) document.addEventListener("keydown", handleKeyDown);
    layers.push(layer);
    return () => {
      const index = layers.indexOf(layer);
      if (index >= 0) layers.splice(index, 1);
      if (layers.length === 0) document.removeEventListener("keydown", handleKeyDown);
    };
  }, [active]);
}
