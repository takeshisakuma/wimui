import React from "react";
import { Sankey, Tooltip, ResponsiveContainer } from "recharts";
import { Title } from "../../typography/Title/Title";
import { CHART_COLORS, CHART_THEME, CHART_HIDDEN_A11Y_PROPS } from "../../helpers";
import { ChartDataTable } from "../../_internal/ChartDataTable";
import { linkTable } from "../../_internal/chartTableData";
import {
  warnUnknownSankeyNode,
  warnDuplicateSankeyNode,
} from "./warn-unknown-node";
import styles from "./sankey-chart.module.scss";

export type SankeyLink = {
  /** Name of the node the flow leaves. */
  source: string;
  /** Name of the node the flow arrives at. */
  target: string;
  /** Size of the flow. The band's thickness is this value. */
  value: number;
};

export type SankeyChartProps = {
  /**
   * Every node in the diagram, in the order their colors are assigned. Names
   * are what `links` refers to, so they have to be unique.
   */
  nodes: string[];
  /**
   * Flows between nodes, by node name. A link naming a node that is not in
   * `nodes` is dropped (and reported in the console during development).
   */
  links: SankeyLink[];
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
  /**
   * Accessible name for the chart. Defaults to `title` when omitted; pass this
   * when the chart has no visible title, or when the title is not descriptive
   * enough on its own.
   */
  "aria-label"?: string;
};

/** ノードの矩形の幅（px）。recharts の既定 10 は帯に埋もれるので少し太らせる。 */
const NODE_WIDTH = 12;
/** ノード間の空き（px）。既定 10 だとラベルが隣の帯に重なる。 */
const NODE_PADDING = 24;
/** ラベルと矩形の間。 */
const LABEL_GAP = 8;

type NodeShapeProps = {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  index?: number;
  payload?: { name?: string; targetNodes?: number[] };
};

/**
 * ノードの矩形とラベル。
 *
 * **recharts の `Sankey` はラベルを 1 つも描かない**（実装に `Text` が 1 つも無い）。
 * 素で使うと名前の無い帯だけが残るので、ここはラッパの仕事。
 *
 * 最終段のノードだけラベルを**左**に出す ── 右に出すと図の外へ切れる。段の判定に
 * 図の幅は使えない（**recharts が形状に渡すのは `x/y/width/height/index/payload`
 * だけで、幅は入っていない**。`containerWidth` を読んでいた版は既定の 0 と比べる
 * ことになり、**左端の 3 つが x=0 の右詰めで画面外に消えていた**）。出口の無い
 * ノード＝最終段、は recharts 自身が段を決めるのに使っている条件なので、これを見る。
 */
const SankeyNode = ({
  x = 0,
  y = 0,
  width = 0,
  height = 0,
  index = 0,
  payload,
}: NodeShapeProps) => {
  const isLast = (payload?.targetNodes?.length ?? 0) === 0;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={CHART_COLORS[index % CHART_COLORS.length]}
        rx={2}
      />
      <text
        className={styles.label}
        x={isLast ? x - LABEL_GAP : x + width + LABEL_GAP}
        y={y + height / 2}
        textAnchor={isLast ? "end" : "start"}
        dominantBaseline="middle"
      >
        {payload?.name}
      </text>
    </g>
  );
};

type LinkShapeProps = {
  sourceX?: number;
  targetX?: number;
  sourceY?: number;
  targetY?: number;
  sourceControlX?: number;
  targetControlX?: number;
  linkWidth?: number;
  payload?: { source?: { name?: string } };
  index?: number;
  /**
   * 名前 → `nodes` での位置。**recharts は帯に始点の添字を渡さない**（`payload.source`
   * は座標を持つノードそのもので、添字は入っていない）ので、ラッパ側の対応表を渡す。
   */
  colorIndexOf?: Map<string, number>;
};

/**
 * 流れの帯。**始点のノードの色**を薄く敷く ── 色は装飾ではなく「どこから来たか」
 * を運ぶ。交差する帯どうしが読めるよう透かす。
 */
const SankeyLinkBand = ({
  sourceX = 0,
  targetX = 0,
  sourceY = 0,
  targetY = 0,
  sourceControlX = 0,
  targetControlX = 0,
  linkWidth = 0,
  payload,
  colorIndexOf,
}: LinkShapeProps) => {
  const sourceName = payload?.source?.name;
  const sourceIndex =
    (sourceName === undefined ? undefined : colorIndexOf?.get(sourceName)) ?? 0;
  return (
    <path
      d={`M${sourceX},${sourceY}C${sourceControlX},${sourceY} ${targetControlX},${targetY} ${targetX},${targetY}`}
      fill="none"
      stroke={CHART_COLORS[sourceIndex % CHART_COLORS.length]}
      strokeWidth={linkWidth}
      strokeOpacity={0.28}
    />
  );
};

/**
 * Shows how a quantity splits and recombines as it moves through stages —
 * where traffic goes, where a budget ends up, where applicants drop out.
 *
 * **The width of a band is the amount that flows through it**, which is what
 * `NodeGraph` cannot express: its edges show that two things are connected, not
 * how much moves between them.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No
 */
export const SankeyChart = ({
  nodes,
  links,
  height = 300,
  width = "100%",
  title,
  "aria-label": ariaLabel,
}: SankeyChartProps) => {
  const name = ariaLabel ?? title;

  // recharts は source / target を**添字**で受けるので、名前から引き直す。
  // 呼び出し側に添字を数えさせると、ノードを 1 つ足しただけで全部ずれる。
  const indexOf = new Map<string, number>();
  nodes.forEach((node, index) => {
    if (indexOf.has(node)) {
      warnDuplicateSankeyNode(node);
      return;
    }
    indexOf.set(node, index);
  });

  const usable = links.filter((link) => {
    const missing = !indexOf.has(link.source)
      ? link.source
      : !indexOf.has(link.target)
        ? link.target
        : null;
    if (missing !== null) {
      warnUnknownSankeyNode(missing, nodes);
      return false;
    }
    return true;
  });

  const table = linkTable(usable);

  return (
    <div
      className={`wim-sankey-chart ${styles.root}`}
      style={{ width }}
      role={name ? "figure" : undefined}
      aria-label={name}
    >
      {title && (
        <Title tag="h3" size="md" style={{ marginBottom: "var(--wim-spacing-md)" }}>
          {title}
        </Title>
      )}
      {/* 描画そのものは支援技術から隠し、同じ値を下の表で渡す（T230）。 */}
      <div className={styles.container} style={{ height }} aria-hidden="true">
        <ResponsiveContainer width="100%" height="100%">
          <Sankey
            {...CHART_HIDDEN_A11Y_PROPS}
            data={{
              nodes: nodes.map((node) => ({ name: node })),
              links: usable.map((link) => ({
                source: indexOf.get(link.source) as number,
                target: indexOf.get(link.target) as number,
                value: link.value,
              })),
            }}
            nodeWidth={NODE_WIDTH}
            nodePadding={NODE_PADDING}
            // ラベルは図の内側（帯の上）に出るので、外側の余白は要らない。
            margin={{ top: 8, right: 8, bottom: 8, left: 8 }}
            node={<SankeyNode />}
            link={<SankeyLinkBand colorIndexOf={indexOf} />}
          >
            <Tooltip
              contentStyle={CHART_THEME.tooltip.contentStyle}
              cursor={CHART_THEME.tooltip.cursor}
            />
          </Sankey>
        </ResponsiveContainer>
      </div>
      <ChartDataTable caption={name} columns={table.columns} rows={table.rows} />
    </div>
  );
};
