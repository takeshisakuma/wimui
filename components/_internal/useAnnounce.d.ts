import { default as React } from '../../../node_modules/react';
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
/**
 * 中身ごと告げる部品（InfiniteScroll の読み込み中）の中では、中に置かれた部品（ラベル付きの Spinner）が
 * 自分でも告げると、同じ文が 2 度読まれる。告げる側がこの文脈で包み、中の部品は黙る。
 */
export declare const AnnouncedByParent: React.Context<boolean>;
export type AnnounceOptions = {
    /** Milliseconds to wait before writing the message (the region stays empty meanwhile). Use it when another announcement — focus moving back, a dialog closing — would talk over yours. */
    delay?: number;
};
/**
 * Announce the result of an action to screen readers — "Saved", "3 results", "Moved to Done".
 *
 * Render `region` once inside your component and keep it rendered (empty) from the first paint;
 * then call `announce(text)`. This is the one pattern that WIM UI verified is actually read
 * (Narrator + Chrome): rewriting the text of a status region that already exists. Inserting a
 * new `role="status"` / `aria-live` element together with its text is often not read at all.
 * Repeating the same text is handled (the region is cleared first), and `delay` lets you wait
 * for another announcement, such as focus returning, to finish.
 *
 * @returns `announce(text, { delay? })`, `clear()`, and `region` — a visually hidden element to render.
 *
 * @example
 * const { announce, region } = useAnnounce();
 * const save = async () => { await saveDraft(); announce("Draft saved"); };
 * return <>{region}<Button onClick={save}>Save</Button></>;
 */
export declare function useAnnounce({ role, initialMessage, }?: {
    role?: AnnounceRole;
    initialMessage?: string;
}): {
    announce: (text: string, { delay }?: AnnounceOptions) => void;
    clear: () => void;
    region: React.JSX.Element;
};
/**
 * 表示が現れたときに、その文字を告げる（T353）。空の表示・該当なし・読み込み中のように、
 * 部品の中に条件で差し込む表示向け。差し込む表示そのものに `role="status"` / `aria-live` を
 * 付けても、領域ごと現れるので読まれない（2026-11-14、ナレーター + Chrome で DataGrid・Combobox・
 * Transfer の 3 部品とも読まれなかった）。表示は飾りのまま差し込み、文字は部品の根に先に置いた
 * 領域へ書く。
 *
 * `ref` は差し込む表示に付ける。文字は描かれたあとの `textContent` から取るので、利用者が
 * ReactNode を渡した表示でも告げられる。最初の描画では告げない。消えたら領域を空にする。
 */
export declare function useAnnounceAppearance<T extends HTMLElement = HTMLDivElement>(shown: boolean, options?: {
    role?: AnnounceRole;
    delay?: number;
}): {
    ref: React.RefObject<T | null>;
    region: React.JSX.Element;
};
/**
 * 文が変わったときだけ告げる。状態から文が決まる部品（選んだ件数・開いている通知）向け。
 * 最初の描画では告げない（開いた状態で置いただけで読まれないように）。空文字になったら、
 * 領域を空にする。返すのは、部品の中に置く領域。
 *
 * `initial: true` は、最初の描画から領域に文を入れておく（Toast・Snackbar の、実機で確かめた
 * 形を変えないため。領域が文と一緒に現れる形なので、その文はやはり読まれない）。
 */
export declare function useAnnounceValue(text: string, options?: {
    role?: AnnounceRole;
    initial?: boolean;
}): React.JSX.Element;
