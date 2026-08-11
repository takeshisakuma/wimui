import type { Meta, StoryObj } from "@storybook/react-vite";
import React from "react";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { Box, Dashboard, Group, Stack, Text, Title } from "wimui";
// charts は optional peer（recharts）なので `wimui/charts` から取る。
// ルートのバレルには載っていない（`src/charts.ts` → `./charts`）。
import {
  AreaChart,
  BarChart,
  FunnelChart,
  GanttChart,
  GaugeChart,
  Heatmap,
  LineChart,
  RadarChart,
  ScatterChart,
  Sparkline,
  Treemap,
} from "wimui/charts";

/**
 * 9 枚目の合成画面（T32 / T110）。**狙いは charts** ── カテゴリまるごと未合成で、
 * `Dashboard` / `DashboardWidgetCard` も一度も使われていなかった。
 *
 * 題材は `Patterns/Admin` `Patterns/Form` `Patterns/Hiring` と同じ
 * Kiyosumi Roasters の運転席。**作業ごとに 3 ストーリーへ分ける**（今日の焙煎 /
 * 品質 / 生豆と出荷）。
 *
 * **形は仕事から選ぶ**（`dataviz` skill の手順 1）。同じ仕事に 2 つの形は置かない:
 * - 推移で内訳も見たい → `AreaChart`（積み上げ）
 * - 並べて比べる → `BarChart`
 * - 1 本の推移 → `LineChart`
 * - 面積で大小 → `Treemap`（**`PieChart` は同じ仕事なので載せない**）
 *
 * **載せなかったもの**: `PieChart`（`Treemap` と仕事が重なる）と
 * `CustomizedContent`（`Treemap` の内側で使う描画部品で、単体では画面に置けない）。
 *
 * **色は 1 系列を基本にした。** このライブラリの `CHART_COLORS` は、隣り合う
 * 2 色（`chart-primary` `#4f8b96` と `chart-info` `#516691`）の差が **ΔE 10.8**
 * しかなく、**色覚に関係なく見分けにくい**（`dataviz` skill の validator で実測）。
 * 2 系列以上が要る場所では、凡例に加えて**形や並びでも区別できる**ようにしてある。
 */
const meta = {
  title: "Patterns/Roastery",
  parameters: { layout: "fullscreen" },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const ns = (k: string) => `docs_stories_recipes:roastery.${k}`;

/** 週次の焙煎量（kg）。丸めない・等間隔にしない。 */
const ROAST_WEEKS = [
  { week: "W27", house: 412, wholesale: 838 },
  { week: "W28", house: 447, wholesale: 902 },
  { week: "W29", house: 398, wholesale: 1074 },
  { week: "W30", house: 465, wholesale: 963 },
  { week: "W31", house: 421, wholesale: 1188 },
  { week: "W32", house: 488, wholesale: 1136 },
];

/** 店舗別の受け渡し（今週・袋）。 */
const PICKUPS = [
  { shop: "Kiyosumi", bags: 186 },
  { shop: "Monzen", bags: 143 },
  { shop: "Kuramae", bags: 97 },
  { shop: "Ryogoku", bags: 61 },
];

/**
 * 今日の焙煎。**主役は週次の推移**（面積の積み上げ＝合計と内訳を同時に見る）。
 * 上の 3 つは今日の数字で、`Sparkline` が直近 2 週間の形だけを見せる。
 */
export const Default: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const tile = (label: string, value: string, series: number[], note: string) => (
      <Stack gap="2xs">
        <Text size="xl" weight="bold">
          {value}
        </Text>
        {/* 既定の `width` は 100px なので、タイルの左 3 分の 1 しか使わない。
            文字列を渡すと器は伸びる（VRT の撮影経路だけは 100px に落ちる＝T141）。 */}
        <Sparkline data={series} width="100%" height={28} ariaLabel={label} />
        <Text size="xs" color="text-tertiary">
          {note}
        </Text>
      </Stack>
    );

    return (
      <Box p="2xl">
        <Stack gap="xl">
          <Stack gap="2xs">
            <Title tag="h1" size="md">
              {t(ns("title"))}
            </Title>
            <Text size="xs" color="text-tertiary">
              {t(ns("subtitle"))}
            </Text>
          </Stack>

          {/* T140: `Dashboard` のウィジェット見出しは `h3` 固定なので、`h1` の
              直後に置くと見出しの段が飛ぶ（axe `heading-order`）。節見出しを
              1 つ置いて段をつなぐ ── **部品が直ったらこの回避を外して測り直す**。 */}
          <Title tag="h2" size="sm">
            {t(ns("today_section"))}
          </Title>

          <Dashboard
            columns={4}
            gap="lg"
            widgets={[
              {
                id: "roasted",
                title: t(ns("kpi_roasted")),
                content: tile(
                  t(ns("kpi_roasted")),
                  "1,624 kg",
                  [1250, 1349, 1472, 1428, 1609, 1584, 1624],
                  t(ns("kpi_roasted_note")),
                ),
              },
              {
                id: "batches",
                title: t(ns("kpi_batches")),
                content: tile(
                  t(ns("kpi_batches")),
                  "38",
                  [31, 34, 36, 33, 39, 37, 38],
                  t(ns("kpi_batches_note")),
                ),
              },
              {
                id: "yield",
                title: t(ns("kpi_yield")),
                content: tile(
                  t(ns("kpi_yield")),
                  "84.6 %",
                  [85.1, 84.9, 84.2, 85.4, 84.8, 84.1, 84.6],
                  t(ns("kpi_yield_note")),
                ),
              },
              {
                id: "late",
                title: t(ns("kpi_late")),
                content: tile(
                  t(ns("kpi_late")),
                  "3",
                  [0, 1, 0, 2, 1, 4, 3],
                  t(ns("kpi_late_note")),
                ),
              },
              {
                id: "trend",
                title: t(ns("chart_trend")),
                description: t(ns("chart_trend_desc")),
                span: 3,
                content: (
                  <AreaChart
                    data={ROAST_WEEKS}
                    keys={["house", "wholesale"]}
                    xAxisKey="week"
                    stacked
                    height={280}
                  />
                ),
              },
              {
                id: "pickups",
                title: t(ns("chart_pickups")),
                description: t(ns("chart_pickups_desc")),
                content: (
                  <BarChart
                    data={PICKUPS}
                    keys={["bags"]}
                    xAxisKey="shop"
                    height={280}
                  />
                ),
              },
            ]}
          />
        </Stack>
      </Box>
    );
  },
};

/**
 * 品質。**主役はカッピングの形**（軸ごとの強弱を 1 枚で読む）。
 * 右は「時間と収率」の散らばりで、目標帯から外れたロットを探すための図。
 */
export const Quality: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const cupping = [
      { axis: t(ns("cup_acidity")), lot: 8.2, house: 7.5 },
      { axis: t(ns("cup_body")), lot: 7.4, house: 7.8 },
      { axis: t(ns("cup_sweetness")), lot: 8.6, house: 8.0 },
      { axis: t(ns("cup_aroma")), lot: 7.9, house: 7.6 },
      { axis: t(ns("cup_aftertaste")), lot: 6.8, house: 7.4 },
    ];

    const brews = [
      { x: 2.1, y: 19.4, name: "L-2291" },
      { x: 2.4, y: 20.8, name: "L-2293" },
      { x: 2.6, y: 21.6, name: "L-2296" },
      { x: 3.1, y: 22.9, name: "L-2298" },
      { x: 3.4, y: 21.1, name: "L-2301" },
      { x: 2.9, y: 18.2, name: "L-2304" },
      { x: 3.8, y: 23.7, name: "L-2306" },
    ];

    const yields = [
      { day: "8/4", yield: 85.1 },
      { day: "8/5", yield: 84.9 },
      { day: "8/6", yield: 84.2 },
      { day: "8/7", yield: 85.4 },
      { day: "8/8", yield: 84.8 },
      { day: "8/9", yield: 84.1 },
      { day: "8/10", yield: 84.6 },
    ];

    return (
      <Box p="2xl">
        <Stack gap="xl">
          <Stack gap="2xs">
            <Title tag="h2" size="sm">
              {t(ns("quality_title"))}
            </Title>
            <Text size="xs" color="text-tertiary">
              {t(ns("quality_desc"))}
            </Text>
          </Stack>

          <Dashboard
            columns={2}
            gap="lg"
            widgets={[
              {
                id: "cupping",
                title: t(ns("chart_cupping")),
                description: t(ns("chart_cupping_desc")),
                /* レーダーは正方形に描かれるので、広い列に置くと左右が余る。
                   幅を使うのは散布図のほうなので、そちらを 2 列にする。 */
                content: (
                  <RadarChart
                    data={cupping}
                    keys={["lot", "house"]}
                    indexKey="axis"
                    height={300}
                  />
                ),
              },
              {
                id: "target",
                title: t(ns("chart_target")),
                description: t(ns("chart_target_desc")),
                content: (
                  <GaugeChart value={84.6} min={70} max={95} height={260} />
                ),
              },
              {
                id: "brews",
                title: t(ns("chart_brews")),
                description: t(ns("chart_brews_desc")),
                span: 2,
                content: (
                  <ScatterChart
                    data={brews}
                    xAxisName={t(ns("brews_x"))}
                    yAxisName={t(ns("brews_y"))}
                    height={280}
                  />
                ),
              },
              {
                id: "yield",
                title: t(ns("chart_yield")),
                description: t(ns("chart_yield_desc")),
                /* 折れ線は横に長いほど読める。ゲージとレーダーは正方形なので 1 列。 */
                span: 2,
                content: (
                  /* 84.1〜85.4% の動きを見る図なので、0 起点だと平らになる
                     （T134）。範囲をデータに合わせる。 */
                  <LineChart
                    data={yields}
                    keys={["yield"]}
                    xAxisKey="day"
                    yDomain={["auto", "auto"]}
                    height={280}
                  />
                ),
              },
            ]}
          />
        </Stack>
      </Box>
    );
  },
};

/**
 * 生豆と出荷。**主役はロットの進行**（いつ何がどこまで来ているか）。
 * 下段は在庫の構成と、受け渡しの混み方、入荷から出荷までの目減り。
 */
export const Supply: Story = {
  render: function Render() {
    const { t } = useTranslation(ALL_NAMESPACES);

    const day = (iso: string) => new Date(`${iso}T00:00:00+09:00`);
    const tasks = [
      {
        id: "l-2291",
        label: "L-2291 Yirgacheffe",
        startDate: day("2026-08-03"),
        endDate: day("2026-08-07"),
        progress: 100,
      },
      {
        id: "l-2296",
        label: "L-2296 Huila",
        startDate: day("2026-08-05"),
        endDate: day("2026-08-11"),
        progress: 82,
      },
      {
        id: "l-2301",
        label: "L-2301 Antigua",
        startDate: day("2026-08-08"),
        endDate: day("2026-08-14"),
        progress: 45,
      },
      {
        id: "l-2306",
        label: "L-2306 Sidamo",
        startDate: day("2026-08-10"),
        endDate: day("2026-08-18"),
        progress: 12,
      },
    ];

    // `Treemap` にラベルのキーを渡す prop は無く、**`name` 固定**
    // （内側の `CustomizedContent` がそれを読む）。
    const stock = [
      { name: "Ethiopia", kg: 1240 },
      { name: "Colombia", kg: 860 },
      { name: "Guatemala", kg: 515 },
      { name: "Rwanda", kg: 288 },
      { name: "Brazil", kg: 174 },
    ];

    /* `nameKey` は**データの列名**だが、`check_stories_keys` は
       `nameKey="…"` を**翻訳キー**として拾う（同じ語が 2 つの意味で使われている
       ＝ T144）。衝突を避けるため、列名は `name` にしておく。 */
    const flow = [
      { name: t(ns("flow_green")), kg: 3077 },
      { name: t(ns("flow_roasted")), kg: 2603 },
      { name: t(ns("flow_packed")), kg: 2544 },
      { name: t(ns("flow_shipped")), kg: 2489 },
    ];

    const pickupHeat = [
      { x: t(ns("day_mon")), y: t(ns("slot_am")), value: 12 },
      { x: t(ns("day_mon")), y: t(ns("slot_pm")), value: 31 },
      { x: t(ns("day_wed")), y: t(ns("slot_am")), value: 44 },
      { x: t(ns("day_wed")), y: t(ns("slot_pm")), value: 27 },
      { x: t(ns("day_fri")), y: t(ns("slot_am")), value: 19 },
      { x: t(ns("day_fri")), y: t(ns("slot_pm")), value: 58 },
      { x: t(ns("day_sat")), y: t(ns("slot_am")), value: 63 },
      { x: t(ns("day_sat")), y: t(ns("slot_pm")), value: 41 },
    ];

    return (
      <Box p="2xl">
        <Stack gap="xl">
          <Group justify="between" align="end" wrap="wrap" gap="md">
            <Stack gap="2xs">
              <Title tag="h2" size="sm">
                {t(ns("supply_title"))}
              </Title>
              <Text size="xs" color="text-tertiary">
                {t(ns("supply_desc"))}
              </Text>
            </Stack>
          </Group>

          <GanttChart
            tasks={tasks}
            startDate={new Date("2026-08-03T00:00:00+09:00")}
            endDate={new Date("2026-08-19T00:00:00+09:00")}
            viewMode="day"
          />

          <Dashboard
            columns={3}
            gap="lg"
            widgets={[
              {
                id: "stock",
                title: t(ns("chart_stock")),
                description: t(ns("chart_stock_desc")),
                content: (
                  <Treemap data={stock} dataKey="kg" height={260} />
                ),
              },
              {
                id: "heat",
                title: t(ns("chart_heat")),
                description: t(ns("chart_heat_desc")),
                content: (
                  <Heatmap
                    data={pickupHeat}
                    /* 軸の並びは利用者が決める（曜日は五十音でも辞書順でもない）。 */
                    xAxisKey={[
                      t(ns("day_mon")),
                      t(ns("day_wed")),
                      t(ns("day_fri")),
                      t(ns("day_sat")),
                    ]}
                    yAxisKey={[t(ns("slot_am")), t(ns("slot_pm"))]}
                    height={260}
                  />
                ),
              },
              {
                id: "flow",
                title: t(ns("chart_flow")),
                description: t(ns("chart_flow_desc")),
                content: (
                  <FunnelChart
                    data={flow}
                    dataKey="kg"
                    nameKey="name"
                    height={260}
                  />
                ),
              },
            ]}
          />
        </Stack>
      </Box>
    );
  },
};
