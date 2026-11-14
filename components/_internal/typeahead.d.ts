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
export declare const findTypeaheadIndex: ({ query, current, count, getText, isDisabled, }: TypeaheadOptions) => number;
/**
 * このキーを先頭一致の文字として扱うか。修飾キーとの組み合わせは扱わない。空白は、もう文字を
 * ためているときだけ文字として扱う（ためていないときの空白は、項目を選ぶキー）。
 */
export declare const isTypeaheadKey: (event: Pick<KeyboardEvent, "key" | "ctrlKey" | "metaKey" | "altKey">, typing: boolean) => boolean;
/**
 * 打った文字をためる。`push` は 1 文字足して、ためた文字を返す。間が空いたら捨てる。
 * `typing()` は、いま文字をためているか（空白を文字として扱うかの判定に使う）。
 */
export declare function useTypeahead(): {
    push: (char: string) => string;
    typing: () => boolean;
};
