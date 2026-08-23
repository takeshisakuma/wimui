import React from "react";
import { render } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import fs from "node:fs";

import { AreaChart } from "./AreaChart/AreaChart";
import { BarChart } from "./BarChart/BarChart";
import { FunnelChart } from "./FunnelChart/FunnelChart";
import { GanttChart } from "./GanttChart/GanttChart";
import { GaugeChart } from "./GaugeChart/GaugeChart";
import { Heatmap } from "./Heatmap/Heatmap";
import { LineChart } from "./LineChart/LineChart";
import { PieChart } from "./PieChart/PieChart";
import { RadarChart } from "./RadarChart/RadarChart";
import { ScatterChart } from "./ScatterChart/ScatterChart";
import { Treemap } from "./Treemap/Treemap";
import { Sparkline } from "./Sparkline/Sparkline";

/**
 * ガード: チャートが**支援技術から名前を持てるか**を、描画して数える（T230）。
 *
 * ── なぜ grep ではなくここで測るのか ────────────────────────────────────
 * 起票の根拠は `grep -rln "aria-\|role=" src/components/charts/` で、拾えるのは
 * `GanttChart` と `Sparkline` だけ、というものだった。**その数字自体は正しかった**が、
 * grep はソースの字面しか見ないので「呼び出し側が名前を付けられるか」を測れない。
 * 実測したところ、そこに**起票より重い事実**があった:
 *
 *   `<AreaChart … aria-label="Sales" />` は **型検査を通る**。TypeScript は
 *   ハイフンを含む JSX 属性を props 型と突き合わせない（識別子になれないため）ので、
 *   `AreaChartProps` に無くてもエラーにならない。**そして実装は rest を受け取らないので、
 *   その `aria-label` は DOM に一切現れない。** 対照として `totallyBogusProp` を
 *   渡すと `TS2322` で落ちる ── つまり「型が通ったから届く」ではない。
 *   書いた側にはエラーも警告も出ず、名前は静かに捨てられる。
 *
 * **axe では捕まらない。** 名前の無い `<svg>` / `<div>` はそれ自体が違反ではないので、
 * a11y スイートが全緑でもこの状態は通る（T228 の「機能しない ARIA」と同じ構図で、
 * **赤が出ないので存在しないことになっていた**）。だから赤ではなく**台帳**にする。
 *
 * ── 何を「名前がある」とするか ──────────────────────────────────────────
 * `role` の無い `<div>` に `aria-label` を付けても支援技術は読まない（generic ロールは
 * 作者による命名を許さない）。よって **role と名前の入口の両方**を見る。片方だけでは
 * 「付いているのに機能しない」を通してしまう。
 *
 * ── 台帳の読み方 ────────────────────────────────────────────────────────
 * `EXPECTED` は**現状の凍結**であって、あるべき姿ではない。両方 false の 10 件は
 * すべて欠陥で、直したらこの表を書き換える ── **数が減る方向でも落ちる**ので、
 * 直した事実が必ず差分に出る。T230 の実装方針（①`role="img"` + `title` 由来の既定名
 * ②型で必須 ③`VisuallyHidden` のデータ表）は**まだ決まっていない**ので、ここでは
 * 決めない。決まるまでのあいだ、増えないことだけを保証する。
 */

// 既存のチャートテストと同じ扱い。jsdom には寸法が無く、素の ResponsiveContainer は
// 幅 0 で中身を描かないため、サイズを持つ箱に差し替える。
vi.mock("recharts", async () => {
  const original = await vi.importActual<typeof import("recharts")>("recharts");
  return {
    ...original,
    ResponsiveContainer: ({ children }: React.PropsWithChildren<object>) => (
      <div style={{ width: 800, height: 600 }}>{children}</div>
    ),
  };
});

/** 呼び出し側が名前を付けようとしたときに渡す文字列。DOM に出るかを見る。 */
const CALLER_LABEL = "Quarterly revenue by region";

/** 可視の見出し。既定名の材料になりうるか（今はならない）を同時に見るために渡す。 */
const VISIBLE_TITLE = "Revenue";

type Case = {
  name: string;
  /** 名前を渡さずに描く。 */
  bare: () => React.ReactElement;
  /** 呼び出し側が `aria-label` で名前を付けようとした形。 */
  labelled: () => React.ReactElement;
};

const lineData = [
  { name: "Mon", visitors: 4000 },
  { name: "Tue", visitors: 3000 },
];

const CASES: Case[] = [
  {
    name: "AreaChart",
    bare: () => (
      <AreaChart
        data={lineData}
        keys={["visitors"]}
        xAxisKey="name"
        title={VISIBLE_TITLE}
      />
    ),
    labelled: () => (
      <AreaChart
        data={lineData}
        keys={["visitors"]}
        xAxisKey="name"
        title={VISIBLE_TITLE}
        aria-label={CALLER_LABEL}
      />
    ),
  },
  {
    name: "BarChart",
    bare: () => (
      <BarChart
        data={lineData}
        keys={["visitors"]}
        xAxisKey="name"
        title={VISIBLE_TITLE}
      />
    ),
    labelled: () => (
      <BarChart
        data={lineData}
        keys={["visitors"]}
        xAxisKey="name"
        title={VISIBLE_TITLE}
        aria-label={CALLER_LABEL}
      />
    ),
  },
  {
    name: "LineChart",
    bare: () => (
      <LineChart
        data={lineData}
        keys={["visitors"]}
        xAxisKey="name"
        title={VISIBLE_TITLE}
      />
    ),
    labelled: () => (
      <LineChart
        data={lineData}
        keys={["visitors"]}
        xAxisKey="name"
        title={VISIBLE_TITLE}
        aria-label={CALLER_LABEL}
      />
    ),
  },
  {
    name: "FunnelChart",
    bare: () => (
      <FunnelChart
        data={[{ name: "Visit", value: 100 }]}
        dataKey="value"
        nameKey="name"
        title={VISIBLE_TITLE}
      />
    ),
    labelled: () => (
      <FunnelChart
        data={[{ name: "Visit", value: 100 }]}
        dataKey="value"
        nameKey="name"
        title={VISIBLE_TITLE}
        aria-label={CALLER_LABEL}
      />
    ),
  },
  {
    name: "GaugeChart",
    bare: () => <GaugeChart value={42} title={VISIBLE_TITLE} />,
    labelled: () => (
      <GaugeChart value={42} title={VISIBLE_TITLE} aria-label={CALLER_LABEL} />
    ),
  },
  {
    name: "Heatmap",
    bare: () => (
      <Heatmap
        data={[{ x: "Mon", y: "AM", value: 3 }]}
        xAxisKey={["Mon"]}
        yAxisKey={["AM"]}
        title={VISIBLE_TITLE}
      />
    ),
    labelled: () => (
      <Heatmap
        data={[{ x: "Mon", y: "AM", value: 3 }]}
        xAxisKey={["Mon"]}
        yAxisKey={["AM"]}
        title={VISIBLE_TITLE}
        aria-label={CALLER_LABEL}
      />
    ),
  },
  {
    name: "PieChart",
    bare: () => (
      <PieChart data={[{ name: "A", value: 1 }]} title={VISIBLE_TITLE} />
    ),
    labelled: () => (
      <PieChart
        data={[{ name: "A", value: 1 }]}
        title={VISIBLE_TITLE}
        aria-label={CALLER_LABEL}
      />
    ),
  },
  {
    name: "RadarChart",
    bare: () => (
      <RadarChart
        data={lineData}
        keys={["visitors"]}
        indexKey="name"
        title={VISIBLE_TITLE}
      />
    ),
    labelled: () => (
      <RadarChart
        data={lineData}
        keys={["visitors"]}
        indexKey="name"
        title={VISIBLE_TITLE}
        aria-label={CALLER_LABEL}
      />
    ),
  },
  {
    name: "ScatterChart",
    bare: () => (
      <ScatterChart data={[{ x: 1, y: 2, name: "A" }]} title={VISIBLE_TITLE} />
    ),
    labelled: () => (
      <ScatterChart
        data={[{ x: 1, y: 2, name: "A" }]}
        title={VISIBLE_TITLE}
        aria-label={CALLER_LABEL}
      />
    ),
  },
  {
    name: "Treemap",
    bare: () => (
      <Treemap
        data={[{ name: "A", value: 10 }]}
        dataKey="value"
        title={VISIBLE_TITLE}
      />
    ),
    labelled: () => (
      <Treemap
        data={[{ name: "A", value: 10 }]}
        dataKey="value"
        title={VISIBLE_TITLE}
        aria-label={CALLER_LABEL}
      />
    ),
  },
  {
    name: "GanttChart",
    bare: () => (
      <GanttChart
        tasks={[
          {
            id: "1",
            label: "Design",
            startDate: new Date("2026-01-01"),
            endDate: new Date("2026-01-05"),
          },
        ]}
      />
    ),
    labelled: () => (
      <GanttChart
        tasks={[
          {
            id: "1",
            label: "Design",
            startDate: new Date("2026-01-01"),
            endDate: new Date("2026-01-05"),
          },
        ]}
        labels={{ ariaChart: CALLER_LABEL }}
      />
    ),
  },
  {
    name: "Sparkline",
    bare: () => <Sparkline data={[1, 2, 3]} />,
    labelled: () => <Sparkline data={[1, 2, 3]} ariaLabel={CALLER_LABEL} />,
  },
];

/**
 * 支援技術から見た状態を、描画結果から読む。
 *
 * `role` の無い要素の `aria-label` は読まれないので、**名前があると言えるのは
 * role と名前の入口が揃っているときだけ**。`aria-hidden` は「意図して隠した」で、
 * 名前が無いのとは別（`Sparkline` がこれ）。
 */
type Observed = {
  role: string | null;
  ariaLabel: string | null;
  ariaHidden: boolean;
  /** role と名前が揃っていて、支援技術が名前を読む状態か。 */
  hasAccessibleName: boolean;
};

const observe = (element: React.ReactElement): Observed => {
  const { container, unmount } = render(element);
  const root = container.firstElementChild as HTMLElement | null;
  if (!root) {
    // 読めなかったものを「違反なし」に混ぜない。
    throw new Error(
      "チャートのルート要素を読み取れなかった。描画に失敗しているか、" +
        "ルートの構造が変わっている。このガードのほうを直すこと。",
    );
  }
  const role = root.getAttribute("role");
  const ariaLabel = root.getAttribute("aria-label");
  const ariaLabelledBy = root.getAttribute("aria-labelledby");
  const observed: Observed = {
    role,
    ariaLabel,
    ariaHidden: root.getAttribute("aria-hidden") === "true",
    hasAccessibleName: Boolean(role) && Boolean(ariaLabel || ariaLabelledBy),
  };
  unmount();
  return observed;
};

/**
 * 現状の凍結（2026-08-23 実測）。
 *
 * - `defaultName`: 何も渡さずに描いたとき、支援技術が名前を読むか
 * - `callerCanName`: 呼び出し側が名前を渡したとき、それが DOM に届くか
 *
 * **10 件が両方 false** ＝ 名前が無く、付けることもできない。これが T230 の本体。
 */
const EXPECTED: Record<
  string,
  { defaultName: boolean; callerCanName: boolean }
> = {
  AreaChart: { defaultName: false, callerCanName: false },
  BarChart: { defaultName: false, callerCanName: false },
  LineChart: { defaultName: false, callerCanName: false },
  FunnelChart: { defaultName: false, callerCanName: false },
  GaugeChart: { defaultName: false, callerCanName: false },
  Heatmap: { defaultName: false, callerCanName: false },
  PieChart: { defaultName: false, callerCanName: false },
  RadarChart: { defaultName: false, callerCanName: false },
  ScatterChart: { defaultName: false, callerCanName: false },
  Treemap: { defaultName: false, callerCanName: false },
  // 既定で `role="grid"` と "Gantt Chart" を持ち、`labels.ariaChart` で差し替えられる。
  GanttChart: { defaultName: true, callerCanName: true },
  // 名前が無いときは `aria-hidden` で明示的に隠す（装飾として正しい形）。
  Sparkline: { defaultName: false, callerCanName: true },
};

/** 名前を持てないチャートの数。**減ったときも落ちる**（直した事実を差分に出すため）。 */
const UNNAMEABLE_COUNT = 10;

describe("charts: アクセシブル名（T230 の台帳）", () => {
  it("走査対象が src/components/charts のディレクトリと一致する", () => {
    // **母数はディスクから取る。** ここを CASES と EXPECTED の突き合わせだけに
    // していると、チャートを新設しても両方に足し忘れたまま緑になり、
    // 「10 件」は増えないのに実態は増える ── 測っていないものを 0 件と混ぜない。
    // 読めなかったら落ちる（`readdirSync` が投げる）。空配列で素通りさせない。
    const dirs = fs
      .readdirSync("src/components/charts", {
        withFileTypes: true,
      })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .sort();

    expect(dirs.length).toBeGreaterThan(0);
    expect(CASES.map((c) => c.name).sort()).toEqual(dirs);
    expect(Object.keys(EXPECTED).sort()).toEqual(dirs);
  });

  it.each(CASES)(
    "$name の名前の状態が台帳と一致する",
    ({ name, bare, labelled }) => {
      const expected = EXPECTED[name];
      const bareObserved = observe(bare());
      const labelledObserved = observe(labelled());

      expect(
        {
          defaultName: bareObserved.hasAccessibleName,
          callerCanName: labelledObserved.hasAccessibleName,
        },
        `${name}: 観測値 bare=${JSON.stringify(bareObserved)} / labelled=${JSON.stringify(labelledObserved)}\n` +
          `台帳と食い違った。直したなら EXPECTED と UNNAMEABLE_COUNT を更新すること。`,
      ).toEqual(expected);
    },
  );

  it(`名前を持てないチャートは ${UNNAMEABLE_COUNT} 件のまま`, () => {
    const unnameable = CASES.filter(
      ({ labelled }) => !observe(labelled()).hasAccessibleName,
    ).map((c) => c.name);

    expect(unnameable).toHaveLength(UNNAMEABLE_COUNT);
  });

  it("aria-label は型を通るのに DOM へ届かない（この欠陥の形）", () => {
    // T230 の中身。`AreaChartProps` に `aria-label` は無いが、TypeScript は
    // ハイフンを含む JSX 属性を突き合わせないので**書ける**。実装は rest を
    // 受け取らないので**消える**。この非対称が直ったらこのテストが落ちる。
    const { container } = render(
      <AreaChart
        data={lineData}
        keys={["visitors"]}
        xAxisKey="name"
        aria-label={CALLER_LABEL}
      />,
    );
    const root = container.firstElementChild as HTMLElement;
    expect(root.getAttribute("aria-label")).toBeNull();
    expect(root.getAttribute("role")).toBeNull();
  });
});
