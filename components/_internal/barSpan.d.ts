/**
 * 「1 本の `<Bar>` ＋ 配列 `dataKey` ＋ カスタム shape」で描くチャートの共有部分
 * （`WaterfallChart` / `BoxPlot` / `CandlestickChart`）。
 *
 * ── なぜ `<Bar>` を 2 本重ねないのか ────────────────────────────────────
 * ヒゲと実体を別々の `<Bar>` にすると、**recharts がカテゴリ帯の中で横に並べる**ので
 * 中心が揃わない（実測: 104 と 116 で 12px ずれた）。1 本にしてカスタム shape の中で
 * 描き分けると一致する（実測: どちらも cx 112.5）。
 *
 * ── shape に `yAxis.scale` は渡ってこない ──────────────────────────────
 * それに頼った版は矩形が 0 個だった。**そして必要ない** ── recharts は
 * `dataKey` が `[lo, hi]` を返すと `y = scale(hi)` / `height = scale(lo) - scale(hi)`
 * の**画素の矩形**をくれる（`recharts/es6/cartesian/Bar.js` の horizontal 分岐）。
 * その矩形の中で値を比で置けば、軸の目盛りと必ず一致する。
 */
/** `dataKey` が返す形。**昇順で渡すこと** ── 逆にすると `height` が負になる。 */
export type BarSpan = [low: number, high: number];
export type SpanRect = {
    /** `high` 側の画素。矩形の上端。 */
    y: number;
    /** `high` から `low` までの画素の高さ。 */
    height: number;
};
/**
 * 値 → 画素。矩形が覆う値域 `[low, high]` の中で比を取る。
 *
 * `high === low`（幅の無い span）のときは矩形の高さが 0 なので、比は取れない。
 * その場合は上端を返す ── 呼び出し側は線として描く。
 */
export declare const spanPixel: (value: number, span: BarSpan, rect: SpanRect) => number;
/**
 * 数として扱えるか。`null` / `undefined` / `NaN` を「0」に読み替えない
 * ── 欠測を 0 として描くと、**無かった値が「ゼロだった」という主張**になる。
 */
export declare const isFiniteNumber: (value: unknown) => value is number;
/**
 * 値域に合わせた軸の domain（上下に少しだけ余白を足し、切りのいい数に丸める）。
 *
 * **分布や四本値に 0 起点の軸を使わない。** 棒の長さは 0 からの量そのものなので
 * 0 を含めないと嘘になるが、箱ヒゲやローソク足が語るのは**値域の中の位置**で、
 * 0 を入れると図の大半が空白になって形が潰れる。
 *
 * 余白が要るのは、`dataMin` をそのまま使うと**いちばん低いヒゲが軸線に乗る**ため
 * （実測: `CandlestickChart` の Wed のヒゲが下端の格子線と同じ y=265 になった）。
 *
 * ── 3 つとも実測から出た条件 ──────────────────────────────────────────
 * 1. **recharts の関数 domain（`[(dataMin) => …, (dataMax) => …]`）では書けない。**
 *    片側ずつしか呼ばれないので、関数の中から値幅が見えない ── 最初にそう書いて、
 *    両側とも「値幅 0」の分岐に落ちていた。
 * 2. **端を丸めないと、その数がそのまま目盛りに出る。**（実測: 軸に
 *    `-11.399999999999999` と描かれた。余白は生の掛け算なので当然そうなる。）
 * 3. **正の値しか無いデータに負の目盛りを作らない。**（実測: 応答時間の軸が
 *    `-113` から始まった。ミリ秒に負は無い。）ただし丸めた下端が正なら
 *    そのまま使う ── ここで 0 に寄せると、値が 0 から遠いデータ（給与など）で
 *    図の下半分が空になって箱が潰れる。
 *
 * 空の data では domain を決められないので `undefined` を返す（recharts の既定に
 * 任せる）── 0 と 1 を勝手に置くと、**データが無いのに軸だけが在る**図になる。
 */
export declare const spanDomain: (spans: BarSpan[], ratio?: number) => [number, number] | undefined;
