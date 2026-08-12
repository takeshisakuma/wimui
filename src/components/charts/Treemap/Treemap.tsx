import React, { createContext, useCallback, useContext, useMemo } from "react";
import {
  Treemap as RechartsTreemap,
  ResponsiveContainer,
  Tooltip,
  type TreemapNode,
} from "recharts";
import { Title } from "../../typography/Title/Title";
import { CHART_THEME, type ChartDataPoint } from "../../helpers";
import styles from "./treemap.module.scss";

/** タイルどうしを触れさせないための隙間（左右・上下に半分ずつ）。 */
const TILE_GAP = 2;
/** ラベルとタイルの縁の間に最低限あける幅。 */
const LABEL_PADDING = 8;
/**
 * 省略しても最低これだけの文字は見せる。これも入らないタイルは、
 * どう詰めても名乗れないので隠す（T149）。
 */
const MIN_LABEL_CHARS = 2;

/**
 * Props for the Treemap component.
 */
export type TreemapProps = {
  /**
   * Data to display in the treemap.
   */
  data: ChartDataPoint[];
  /**
   * The key in the data objects that represents the size of the rectangle.
   */
  dataKey: string;
  /**
   * The aspect ratio of the rectangles.
   * @default 4/3
   */
  aspectRatio?: number;
  /**
   * The height of the chart in pixels.
   * @default 300
   */
  height?: number;
  /**
   * The width of the chart (e.g., "100%", 500).
   * @default "100%"
   */
  width?: string | number;
  /**
   * Optional title displayed above the chart.
   */
  title?: string;
};

/**
 * T148: 塗りは**面積が表している量**に沿わせる。
 *
 * 以前はカテゴリ 5 色相（`CHART_COLORS`）を index で当てていたが、あれは
 * **細いマーク用**に選んだ色（線・点が背景に対して 3:1 出ることが条件）で、
 * 大面積に貼ると強すぎるうえ、隣り合った別色相の境界で色が振動する。
 *
 * そもそも**ツリーマップのタイルは自分で名乗る**（面の上に名前が書いてある）。
 * 折れ線と違い、マークから系列へ戻る道が色しかないという事情が無いので、
 * 色相は identity を背負わなくてよい。面積が表しているのは量なので、
 * `dataviz` の規則どおり **sequential = 1 色相の濃淡**を当てる。
 */
const tileFill = (value: number, min: number, max: number) => {
  const span = max - min;
  // **0〜1 に丸める**。丸めないと 100% を超えた `color-mix()` が無効になり、
  // ブラウザは色そのものを捨てて黒で塗る（合計を持つ根のタイルで実際に起きた）。
  const ratio = span === 0 ? 1 : Math.min(1, Math.max(0, (value - min) / span));
  // 面はどの段でも「色の付いたサーフェス」に留める。こうしておくと、
  // ラベルは通常の文字色（サーフェスの上に乗る前提の色）のままでよい。
  // 下限は 20% ── 12% だと**いちばん小さいタイルがカードの地と見分けられない**
  // （Audit の 4 段目で実際に消えかけた）。
  const strength = 20 + Math.round(ratio * 40);
  return `color-mix(in oklch, var(--wim-color-chart-primary) ${strength}%, var(--wim-color-surface))`;
};

/* 濃淡の両端は根が持つ。`content` に渡す関数は**同じ参照のまま**にしたいので
   （毎描画で新しい関数を渡すと React には別のコンポーネントに見え、測った結果を
   持っている state ごと作り直される）、値は文脈で配る。 */
const TileRangeContext = createContext({ min: 0, max: 1 });

/**
 * A custom renderer for Treemap content: one-hue tiles, separated by a gap.
 */
const TreemapTile = ({
  x,
  y,
  width,
  height,
  name,
  value,
  depth,
  children,
}: TreemapNode) => {
  const { min, max } = useContext(TileRangeContext);
  /* ラベルが入るかは**描いてから測る**。以前は `width > 30 && height > 20` という
     固定のしきい値で、**文字が実際に何 px あるかを見ていなかった**（46px の
     タイルに 50px の "Brazil" が乗り、左右 2px ずつ食み出していた）。
     入らないときは消して Tooltip に任せる ── ただし**外さずに隠す**。
     外すと測る対象が居なくなり、二度と測り直せない。 */
  /* T149: 入らないときに**黙って消す**のをやめ、まず省略して見せる。
     `Treemap` が凡例を持たなくてよいのは「タイルが自分で名乗る」からで
     （`check:chart-palette` の免除条件・T152 案①）、名前が消えると
     **その免除の根拠ごと消える**。残るのは Tooltip ＝ ホバーが要るので、
     静止画・印刷・キーボードのどれでも読めない。
     省略記号は「まだ続きがある」と言うので、黙って消えるより落差が小さい。 */
  const full = name ?? "";

  /* **state を使わない。** recharts は `content` を毎回新しい実体として呼ぶので、
     `useState` の値は次のレンダーで初期値へ戻る（実測: `setChars(3)` の直後の
     レンダーが `chars=6` で始まった）。状態で「今どこまで縮めたか」を持つと
     永久に決まらないので、**測って書き換えるところまでを ref の中で完結**させる。 */
  const measure = useCallback(
    (node: SVGTextElement | null) => {
      if (!node) return;

      const fit = () => {
        /* 余白は**タイルに対する割合で頭打ちにする**。8px 固定だと 46px の
           タイルでは左右で 16px ＝ 幅の 3 分の 1 を余白が食い、名前を 2 文字も
           置けなくなる（T149・実測で `Brazil` がここで落ちていた）。大きい
           タイルでは今までどおり 8px。
           判定は**整数 px に落とす**。境目のタイルで小数の揺れが表示・非表示を
           行き来させないため（下限の 2 文字が入るか入らないかは、まさにその
           境目で起きる）。 */
        const padding = Math.min(LABEL_PADDING, width * 0.12);
        const available = Math.floor(width - padding * 2);
        const fits = () => Math.ceil(node.getComputedTextLength()) <= available;

        // 毎回フルの名前から測り直す。前回縮めた結果を土台にすると、枠が
        // 広がったときに短いままになる（列数が変わるダッシュボードで起きる）。
        node.textContent = full;
        if (fits()) {
          node.style.visibility = "";
          return;
        }

        // 比例配分で当たりを付けてから、**入るまで 1 文字ずつ実測で削る**。
        const perChar = node.getComputedTextLength() / Math.max(1, full.length);
        let chars = Math.min(
          Math.floor(available / perChar) - 1,
          full.length - 1,
        );
        while (chars >= MIN_LABEL_CHARS) {
          // 切った端の空白を落とす（"Guatemala …" のように空きが入る）。
          node.textContent = `${full.slice(0, chars).trimEnd()}…`;
          if (fits()) {
            node.style.visibility = "";
            return;
          }
          chars -= 1;
        }

        // ここまで来たら、どう詰めても名乗れない。Tooltip に任せる。
        node.textContent = full;
        node.style.visibility = "hidden";
      };

      fit();

      /* **書体が後から届くと文字幅が変わる。** この ref は `width` / `full` が
         変わったときしか再実行されないので、フォント到着前に測るとその結果が
         残り続ける。VRT で実際に出た ── 同じコード・同じ幅なのに、ある実行では
         `Br…` が出て別の実行ではラベルごと消えた（タイル幅は 44.00px で
         安定していたので、変わっていたのは測った時点の字形だけ）。
         `vrt/story-ready.ts` が計測している通り、**ストーリーのマウント時点では
         書体は未着が常態**で、撮影はその後。つまり判断はフォールバック字形の幅、
         絵は本来の書体という食い違いが常に起きうる。
         `document.fonts.ready` では足りない ── **未要求のフォントには反応しない**
         ので、まだ誰も要求していない段階では即座に解決してしまう。読み込みが
         実際に終わったときに鳴る `loadingdone` で測り直す。 */
      const remeasure = () => {
        if (node.isConnected) fit();
      };
      document.fonts?.addEventListener?.("loadingdone", remeasure);
      return () => document.fonts?.removeEventListener?.("loadingdone", remeasure);
    },
    [width, full],
  );

  /* 葉でない段（根と中間のまとまり）は描かない。以前はタイルが密着していたので
     隠れていたが、隙間を空けた今は**下から覗く**。隙間はサーフェスが見えている
     状態にする。 */
  if (depth === 0 || (Array.isArray(children) && children.length > 0))
    return <g />;

  return (
    <g>
      <rect
        x={x + TILE_GAP / 2}
        y={y + TILE_GAP / 2}
        width={Math.max(0, width - TILE_GAP)}
        height={Math.max(0, height - TILE_GAP)}
        style={{ fill: tileFill(value, min, max), stroke: "none" }}
      />
      {width > 30 && height > 20 && (
        <text
          ref={measure}
          x={x + width / 2}
          y={y + height / 2}
          textAnchor="middle"
          dominantBaseline="central"
          style={{
            fill: "var(--wim-color-text-primary)",
            fontSize: "var(--wim-font-size-lg)",
            fontWeight: "var(--wim-font-weight-bold)",
            stroke: "none",
            strokeWidth: 0,
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          {full}
        </text>
      )}
    </g>
  );
};

export const Treemap = ({
  data,
  dataKey,
  aspectRatio = 4 / 3,
  height = 300,
  width = "100%",
  title,
}: TreemapProps) => {
  // 濃淡の両端は**データ**が決める（index ではない）。recharts が内部で
  // 並べ替えても、値から引く限り同じタイルは同じ濃さになる。
  const range = useMemo(() => {
    /* 入れ子（`{ name, children: [...] }`）で渡される形も recharts は受ける。
       上の段には値が無いので、そのまま読むと**全タイルが同じ濃さ**になる。
       葉まで降りてから拾う。 */
    const leaves = (nodes: ChartDataPoint[]): ChartDataPoint[] =>
      nodes.flatMap((n) =>
        Array.isArray(n.children) ? leaves(n.children as ChartDataPoint[]) : [n],
      );
    const values = leaves(data ?? []).map((d) => Number(d[dataKey]) || 0);
    return values.length
      ? { min: Math.min(...values), max: Math.max(...values) }
      : { min: 0, max: 1 };
  }, [data, dataKey]);

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <TileRangeContext.Provider value={range}>
    <div className={`wim-treemap ${styles.root} wim-treemap__root`} style={{ width }}>
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      <div
        className={`${styles.container} wim-treemap__container`}
        style={{ height, minWidth: 0, minHeight: 0 }}
      >
        {/* Provider は `ResponsiveContainer` の**外**に置く。中に挟むと、
            単一の子をクローンして幅と高さを流す仕組みが挟んだ要素に当たる。 */}
        <ResponsiveContainer width="100%" height="100%">
          <RechartsTreemap
            data={data}
            dataKey={dataKey}
            aspectRatio={aspectRatio}
            stroke="none"
            content={TreemapTile as unknown as React.ReactElement}
            isAnimationActive={false}
          >
            <Tooltip
              contentStyle={CHART_THEME.tooltip.contentStyle}
              formatter={(value, name) => [value, name]}
            />
          </RechartsTreemap>
        </ResponsiveContainer>
      </div>
    </div>
    </TileRangeContext.Provider>
  );
};
