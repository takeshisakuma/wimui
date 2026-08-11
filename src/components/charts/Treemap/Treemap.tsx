import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
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
  const strength = 12 + Math.round(ratio * 36);
  return `color-mix(in oklch, var(--wim-color-chart-primary) ${strength}%, var(--wim-color-surface))`;
};

/* 濃淡の両端は根が持つ。`content` に渡す関数は**同じ参照のまま**にしたいので
   （毎描画で新しい関数を渡すと React には別のコンポーネントに見え、測った結果を
   持っている state ごと作り直される）、値は文脈で配る。 */
const TileRangeContext = createContext({ min: 0, max: 1 });

/**
 * A custom renderer for Treemap content: one-hue tiles, separated by a gap.
 */
const TreemapTile = ({ x, y, width, height, name, value, depth }: TreemapNode) => {
  const { min, max } = useContext(TileRangeContext);
  /* ラベルが入るかは**描いてから測る**。以前は `width > 30 && height > 20` という
     固定のしきい値で、**文字が実際に何 px あるかを見ていなかった**（46px の
     タイルに 50px の "Brazil" が乗り、左右 2px ずつ食み出していた）。
     入らないときは消して Tooltip に任せる ── ただし**外さずに隠す**。
     外すと測る対象が居なくなり、二度と測り直せない。 */
  const [fits, setFits] = useState(true);
  const measure = useCallback(
    (node: SVGTextElement | null) => {
      if (!node) return;
      setFits(node.getComputedTextLength() + LABEL_PADDING * 2 <= width);
    },
    [width],
  );

  /* 根（全体を覆う 1 枚）は描かない。以前はタイルが密着していたので隠れていたが、
     隙間を空けた今は**下から覗く**。隙間はサーフェスが見えている状態にする。 */
  if (depth === 0) return <g />;

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
            visibility: fits ? undefined : "hidden",
          }}
        >
          {name}
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
    const values = (data ?? []).map((d) => Number(d[dataKey]) || 0);
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
