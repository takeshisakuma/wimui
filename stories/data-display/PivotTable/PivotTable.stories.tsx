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

/** 最初に開くグループを選ぶ。畳んだグループは自分の行（小計）だけを残す。 */
export const Collapsed: Story = {
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
        defaultExpandedRowValues={["food"]}
      />
    );
  },
  args: {
    totalRow: true,
  },
};

/** 列のグループも畳める。畳んだグループは、自分の値（`getValue` にグループのキーが渡る）の列を 1 本だけ残す。 */
export const CollapsedColumns: Story = {
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
        defaultExpandedColumnValues={["q2"]}
      />
    );
  },
  args: {
    totalColumn: true,
  },
};

/** 高さを限り、列見出し（全段）と行見出しの列を残したままスクロールする。 */
export const StickyHeaders: Story = {
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
    maxHeight: 320,
    stickyHeader: true,
    stickyRowHeaders: true,
    columnSubtotals: true,
    totalColumn: true,
  },
};

// ── 行の多い表（仮想化）────────────────────────────────────
// 16 店舗 × 61 日（5 月 1 日〜 6 月 30 日）。値は決まった計算で作る（毎回同じ表になる）。
const SHOPS = [
  "Kichijoji", "Porto Alegre", "Leith", "Nakameguro", "Lapa", "Kreuzberg", "Shimokitazawa", "Belém",
  "Hackney", "Koenji", "Pinheiros", "Ancoats", "Yanaka", "Ipanema", "Digbeth", "Kuramae",
];
const DAYS = 61;
const DAILY_PRODUCTS = ["drip", "latte", "coldbrew", "matcha", "croissant", "sandwich", "tart", "gift"];
// 1 日あたりのおおよその数（駅前店の月の数を 30 で割った程度）
const DAILY_BASE = [42, 33, 19, 9, 22, 13, 3, 1];

/** 店舗 × 日 × 商品の販売数。週末は多く、店舗ごとに規模が違う。 */
const dailyUnits = (() => {
  let seed = 20260501;
  const random = () => {
    seed = (seed * 1664525 + 1013904223) % 4294967296;
    return seed / 4294967296;
  };
  return SHOPS.map(() => {
    const scale = 0.55 + random() * 0.9;
    return Array.from({ length: DAYS }, (__, day) => {
      // 2026-05-01 は金曜日。土日は 3 割増し
      const weekday = (5 + day) % 7;
      const weekend = weekday === 6 || weekday === 0 ? 1.3 : 1;
      return DAILY_BASE.map((base, product) => {
        // フルーツタルトは週末だけ
        if (product === 6 && weekend === 1) return 0;
        return Math.round(base * scale * weekend * (0.75 + random() * 0.5));
      });
    });
  });
})();

const useDailyPivot = () => {
  const { t, i18n } = useTranslation(ALL_NAMESPACES);
  return React.useMemo(() => {
    const dayName = new Intl.DateTimeFormat(i18n.language, { month: "short", day: "numeric", weekday: "short" });
    const number = new Intl.NumberFormat(i18n.language);
    const rows: PivotTableAxisNode[] = SHOPS.map((name, shop) => ({
      key: `s${shop}`,
      label: name,
      children: Array.from({ length: DAYS }, (_, day) => ({
        key: `s${shop}/d${day}`,
        label: dayName.format(new Date(2026, 4, 1 + day)),
      })),
    }));
    const product = (key: string): PivotTableAxisNode => ({ key, label: t(`story.pivottable_${key}`) });
    const columns: PivotTableAxisNode[] = [
      { key: "drinks", label: t("story.pivottable_drinks"), children: PRODUCTS.drinks.map(product) },
      { key: "food", label: t("story.pivottable_food"), children: PRODUCTS.food.map(product) },
      product("gift"),
    ];
    // 集計は利用者の責任。行はキーから店舗と日を、列はキーから商品の集まりを引く
    const cache = new Map<string, React.ReactNode>();
    const getValue = (rowKey: string | null, columnKey: string | null) => {
      const id = `${rowKey}|${columnKey}`;
      if (cache.has(id)) return cache.get(id);
      const [shopPart, dayPart] = rowKey === null ? [] : rowKey.split("/");
      const shops = shopPart === undefined ? SHOPS.map((_, i) => i) : [Number(shopPart.slice(1))];
      const days = dayPart === undefined ? Array.from({ length: DAYS }, (_, i) => i) : [Number(dayPart.slice(1))];
      const products = (columnKey === null ? DAILY_PRODUCTS : (PRODUCTS[columnKey] ?? [columnKey])).map((key) =>
        DAILY_PRODUCTS.indexOf(key),
      );
      let total = 0;
      for (const shop of shops) for (const day of days) for (const p of products) total += dailyUnits[shop][day][p];
      // 明細の 0 は「その日は売っていない」ので空にする（タルトの平日）
      const value = total === 0 && dayPart !== undefined ? null : number.format(total);
      cache.set(id, value);
      return value;
    };
    return { rows, columns, getValue };
  }, [t, i18n.language]);
};

/**
 * 992 行 × 11 列（約 1 万セル）。`virtualized` で見えている行だけを描く。
 * 高さの制限（`maxHeight`）と組で使う。
 */
export const Virtualized: Story = {
  render: function Render(args) {
    const { t } = useTranslation(ALL_NAMESPACES);
    const { rows, columns, getValue } = useDailyPivot();
    return (
      <PivotTable
        {...args}
        rows={rows}
        columns={columns}
        getValue={getValue}
        rowAxisLabel={t("story.pivottable_shop_day")}
        caption={t("story.pivottable_caption_daily")}
      />
    );
  },
  args: {
    virtualized: true,
    maxHeight: 480,
    stickyHeader: true,
    stickyRowHeaders: true,
    columnSubtotals: true,
    totalColumn: true,
    totalRow: true,
  },
  argTypes: {
    virtualized: { control: "boolean" },
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
