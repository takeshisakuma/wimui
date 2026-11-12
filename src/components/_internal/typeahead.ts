import { useCallback, useEffect, useRef } from "react";

/**
 * 文字を打って、先頭が一致する項目へ移る（T370）。WAI-ARIA のパターン集が、リスト（listbox）と
 * メニューで勧めている操作。以前は PhoneInput だけが自前で持っていた。
 *
 * ここでは計算と、打った文字をためる仕組みだけを持つ。どの項目をどう動かすか（フォーカスか、
 * aria-activedescendant か、開いていないときに開くか）は各部品に残す（rovingIndex と同じ分け方）。
 *
 * Composition Contract:
 * - Managed by: 呼び出す部品（キーの処理・preventDefault・動かした先の扱い）
 * - Scroll lock: No
 */

export interface TypeaheadOptions {
  /** ためた文字（大文字小文字は区別しない） */
  query: string;
  /** 今の位置。並びの外なら -1 */
  current: number;
  /** 項目の数 */
  count: number;
  /** 項目の文字（照合に使う） */
  getText: (index: number) => string;
  /** 無効の項目には止まらない */
  isDisabled?: (index: number) => boolean;
}

/**
 * 先頭が `query` に一致する項目の位置。無ければ -1。
 *
 * - 打ち始め（1 文字）と、同じ文字の繰り返し（"ss"）は、今の次から探す ── 同じ文字を続けて打つと、
 *   その文字で始まる項目を順に巡る
 * - 続きの文字（"sw"）は、今の項目から探す ── 今の項目が当たっていれば、そこに留まる
 * - 末尾まで探したら、先頭へ折り返して探す
 */
export const findTypeaheadIndex = ({
  query,
  current,
  count,
  getText,
  isDisabled = () => false,
}: TypeaheadOptions): number => {
  const text = query.toLowerCase();
  if (text === "" || count <= 0) return -1;
  const repeated = text.length > 1 && text.split("").every((ch) => ch === text[0]);
  const q = repeated ? text[0] : text;
  const start = repeated || text.length === 1 ? current + 1 : Math.max(current, 0);
  for (let n = 0; n < count; n++) {
    const i = (((start + n) % count) + count) % count;
    if (isDisabled(i)) continue;
    if (getText(i).trim().toLowerCase().startsWith(q)) return i;
  }
  return -1;
};

/**
 * このキーを先頭一致の文字として扱うか。修飾キーとの組み合わせは扱わない。空白は、もう文字を
 * ためているときだけ文字として扱う（ためていないときの空白は、項目を選ぶキー）。
 */
export const isTypeaheadKey = (event: Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey" | "altKey">, typing: boolean): boolean =>
  event.key.length === 1 &&
  !event.ctrlKey &&
  !event.metaKey &&
  !event.altKey &&
  (event.key !== " " || typing);

// 打つ手が止まったと見なす間（PhoneInput の値を引き継いだ）
const RESET_MS = 500;

/**
 * 打った文字をためる。`push` は 1 文字足して、ためた文字を返す。間が空いたら捨てる。
 * `typing()` は、いま文字をためているか（空白を文字として扱うかの判定に使う）。
 */
export function useTypeahead() {
  const buffer = useRef("");
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const push = useCallback((char: string) => {
    clearTimeout(timer.current);
    buffer.current += char;
    timer.current = setTimeout(() => {
      buffer.current = "";
    }, RESET_MS);
    return buffer.current;
  }, []);

  const typing = useCallback(() => buffer.current !== "", []);

  return { push, typing };
}
