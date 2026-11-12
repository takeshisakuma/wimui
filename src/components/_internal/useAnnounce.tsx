import React, { useCallback, useEffect, useRef, useState } from "react";
import { VisuallyHidden } from "../layout/VisuallyHidden/VisuallyHidden";

/**
 * 読み上げの告知（T367）。`docs/rules/implementation.md` の「操作の結果を、読み上げで告げる」を
 * 1 か所にまとめたもの。2026-10-12 にナレーター + Chrome で確かめた、読まれる形は 1 つだけ:
 * **部品が描かれた時点から在る、画面に見えない status 領域の文字を書き換える。**
 *
 * - 領域（`region`）は、部品の中に、いつも描いておく。閉じているあいだも空のまま置く
 *   （領域を中身ごと差し込むと「領域が現れた」としか見られず、文は読まれない）
 * - 領域は部品ごとに持つ。文書に 1 つだけ置く形にしないのは、`aria-modal` のダイアログの
 *   外にある領域が、スクリーンリーダーに無視されることがあるため（Lightbox は中から告げる）
 * - 同じ文をそのまま入れ直しても DOM が変わらず、読まれない。いったん空にしてから入れる
 * - ほかの読み上げが走る瞬間は、`delay` で待ってから入れる（FileUpload: ファイルを選ぶ
 *   画面が閉じた直後は、フォーカスが戻る読み上げと重なって読まれなかった）
 */

export type AnnounceRole = "status" | "alert";

export type AnnounceOptions = {
  /** 何 ms 待ってから文を入れるか。待つあいだ、領域は空にしておく */
  delay?: number;
};

// 同じ文を入れ直すときに、いったん空にしておく時間（Transfer の 50 ms を引き継いだ）
const REPEAT_GAP_MS = 50;

export function useAnnounce({
  role = "status",
  initialMessage = "",
}: { role?: AnnounceRole; initialMessage?: string } = {}) {
  const [message, setMessage] = useState(initialMessage);
  const current = useRef(initialMessage);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const write = useCallback((text: string) => {
    current.current = text;
    setMessage(text);
  }, []);

  const announce = useCallback(
    (text: string, { delay = 0 }: AnnounceOptions = {}) => {
      clearTimeout(timer.current);
      if (delay === 0 && text !== current.current) {
        write(text);
        return;
      }
      write("");
      timer.current = setTimeout(() => write(text), delay || REPEAT_GAP_MS);
    },
    [write],
  );

  const clear = useCallback(() => {
    clearTimeout(timer.current);
    write("");
  }, [write]);

  const region = (
    <VisuallyHidden role={role} aria-atomic="true">
      {message}
    </VisuallyHidden>
  );

  return { announce, clear, region };
}

/**
 * 文が変わったときだけ告げる。状態から文が決まる部品（選んだ件数・開いている通知）向け。
 * 最初の描画では告げない（開いた状態で置いただけで読まれないように）。空文字になったら、
 * 領域を空にする。返すのは、部品の中に置く領域。
 *
 * `initial: true` は、最初の描画から領域に文を入れておく（Toast・Snackbar の、実機で確かめた
 * 形を変えないため。領域が文と一緒に現れる形なので、その文はやはり読まれない）。
 */
export function useAnnounceValue(text: string, options?: { role?: AnnounceRole; initial?: boolean }) {
  const { announce, clear, region } = useAnnounce({
    role: options?.role,
    initialMessage: options?.initial ? text : "",
  });
  const previous = useRef(text);
  useEffect(() => {
    if (previous.current === text) return;
    previous.current = text;
    if (text) announce(text);
    else clear();
  }, [text, announce, clear]);
  return region;
}
