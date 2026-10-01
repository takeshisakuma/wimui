import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../../i18nConstants";
import { PivotTable, type PivotTableAxisNode } from "wimui";

const meta: Meta<typeof PivotTable> = {
  title: "Components/Data Structures/PivotTable",
  component: PivotTable,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    columnSubtotals: { control: "boolean" },
    totalRow: { control: "boolean" },
    totalColumn: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof PivotTable>;

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun"] as const;
type Month = (typeof MONTHS)[number];

// 駅前店の販売数（1〜6 月）。水出しコーヒーは 5 月に発売したので、それ以前は「無い」（0 ではない）
const STATION: Record<string, (number | null)[]> = {
  drip: [1284, 1192, 1347, 1301, 1226, 1158],
  latte: [932, 871, 1015, 1064, 1102, 987],
  coldbrew: [null, null, null, null, 418, 763],
  matcha: [214, 198, 251, 307, 289, 264],
  croissant: [641, 598, 702, 688, 715, 654],
  sandwich: [372, 341, 389, 402, 437, 395],
  tart: [58, 47, 73, 96, 112, 84],
  gift: [37, 12, 9, 14, 41, 8],
};

// 川沿い店は 4 月に開店した。カテゴリ単位の数だけを持つ
const RIVERSIDE: Record<string, (number | null)[]> = {
  drinks: [null, null, null, 846, 1193, 1408],
  food: [null, null, null, 312, 451, 527],
  gift: [null, null, null, 63, 22, 17],
};

const PRODUCTS: Record<string, string[]> = {
  drinks: ["drip", "latte", "coldbrew", "matcha"],
  food: ["croissant", "sandwich", "tart"],
  gift: ["gift"],
};

const QUARTERS: Record<string, Month[]> = {
  q1: ["jan", "feb", "mar"],
  q2: ["apr", "may", "jun"],
};

/** 値を足す。1 つも値が無ければ `null`（「0 個売れた」と「売っていなかった」を分ける）。 */
const sum = (values: (number | null)[]) => {
  const present = values.filter((v): v is number => v !== null);
  return present.length ? present.reduce((a, b) => a + b, 0) : null;
};

const useAxes = () => {
  const { t, i18n } = useTranslation(ALL_NAMESPACES);
  const monthName = new Intl.DateTimeFormat(i18n.language, { month: "short" });
  const month = (key: Month, prefix = ""): PivotTableAxisNode => ({
    key: prefix + key,
    label: monthName.format(new Date(2026, MONTHS.indexOf(key), 1)),
  });
  const quarter = (key: "q1" | "q2", prefix = ""): PivotTableAxisNode => ({
    key: prefix + key,
    label: t(`story.pivottable_${key}`),
    children: QUARTERS[key].map((m) => month(m, prefix)),
  });
  const product = (key: string): PivotTableAxisNode => ({ key, label: t(`story.pivottable_${key}`) });
  const category = (key: "drinks" | "food"): PivotTableAxisNode => ({
    key,
    label: t(`story.pivottable_${key}`),
    children: PRODUCTS[key].map(product),
  });
  const format = (value: number | null) => (value === null ? null : new Intl.NumberFormat(i18n.language).format(value));
  return { t, month, quarter, product, category, format };
};

/** 駅前店: 商品 × 月。行はカテゴリ → 商品、列は四半期 → 月。 */
const useStationPivot = () => {
  const { t, quarter, product, category, format } = useAxes();
  const rows = [category("drinks"), category("food"), product("gift")];
  const columns = [quarter("q1"), quarter("q2")];
  // 集計は利用者の責任: グループのキーなら配下を足し、`null` なら全部を足す
  const getValue = (rowKey: string | null, columnKey: string | null) => {
    const products = rowKey === null ? Object.values(PRODUCTS).flat() : (PRODUCTS[rowKey] ?? [rowKey]);
    const months = columnKey === null ? MONTHS : (QUARTERS[columnKey] ?? [columnKey as Month]);
    return format(sum(products.flatMap((p) => months.map((m) => STATION[p][MONTHS.indexOf(m)]))));
  };
  return { t, rows, columns, getValue };
};

export const Default: Story = {
  render: function Render(args) {
    const { t, rows, columns, getValue } = useStationPivot();
    return (
      <PivotTable
        {...args}
        rows={rows}
        columns={columns}
        getValue={getValue}
        rowAxisLabel={t("story.pivottable_product")}
        caption={t("story.pivottable_caption")}
      />
    );
  },
};

/** 列グループごとの小計と、行・列の総計。`getValue` は小計でグループのキー、総計で `null` を受け取る。 */
export const Totals: Story = {
  render: function Render(args) {
    const { t, rows, columns, getValue } = useStationPivot();
    return (
      <PivotTable
        {...args}
        rows={rows}
        columns={columns}
        getValue={getValue}
        rowAxisLabel={t("story.pivottable_product")}
        caption={t("story.pivottable_caption")}
      />
    );
  },
  args: {
    columnSubtotals: true,
    totalRow: true,
    totalColumn: true,
  },
};

/** 列を 3 段にする（店舗 → 四半期 → 月）。枝ごとに深さも列の数も揃っていなくてよい。 */
export const NestedColumns: Story = {
  render: function Render(args) {
    const { t, quarter, product, format } = useAxes();
    const rows = [product("drinks"), product("food"), product("gift")];
    const columns: PivotTableAxisNode[] = [
      {
        key: "station",
        label: t("story.pivottable_shop_station"),
        children: [quarter("q1", "station/"), quarter("q2", "station/")],
      },
      {
        key: "riverside",
        label: t("story.pivottable_shop_riverside"),
        children: [quarter("q2", "riverside/")],
      },
    ];
    const cell = (shop: string, row: string, m: Month) => {
      const index = MONTHS.indexOf(m);
      if (shop === "riverside") return RIVERSIDE[row][index];
      return sum(PRODUCTS[row].map((p) => STATION[p][index]));
    };
    const getValue = (rowKey: string | null, columnKey: string | null) => {
      if (rowKey === null) return null;
      const shops = columnKey === null ? ["station", "riverside"] : [columnKey.split("/")[0]];
      const part = columnKey?.split("/")[1];
      const months = part === undefined ? MONTHS : (QUARTERS[part] ?? [part as Month]);
      return format(sum(shops.flatMap((shop) => months.map((m) => cell(shop, rowKey, m)))));
    };
    return (
      <PivotTable
        {...args}
        rows={rows}
        columns={columns}
        getValue={getValue}
        rowAxisLabel={t("story.pivottable_category")}
        caption={t("story.pivottable_caption_shops")}
      />
    );
  },
  args: {
    totalColumn: true,
  },
};
