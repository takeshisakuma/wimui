// @vitest-environment node
//
// SSR スモークテスト
//
// DOM のない node 環境で全公開コンポーネントを renderToString に通し、
// モジュールスコープまたはレンダーパスでの window / document 等の
// ブラウザグローバル参照（SSR で即クラッシュする欠陥）を検出する。
//
// - このファイルの import 自体が「全モジュールスコープの SSR 安全性」の検証になる
//   （モジュールスコープに未ガードの window 参照があれば import 時点で落ちる）
// - レンダリング中の ReferenceError（未定義のブラウザグローバル参照）のみを失敗とする。
//   必須 props 不足に起因する TypeError 等はこのテストの対象外（各単体テストの責務）
import { describe, it, expect, vi } from "vitest";
import { renderToString } from "react-dom/server";
import { createElement, type ComponentType, type ReactElement } from "react";
import { isValidElementType } from "react-is";
import * as WimUI from "./index";
import "./tokens";

// React の SSR 警告（useLayoutEffect does nothing on the server 等）でログが
// 埋まらないよう抑制する。エラー自体は throw で検出されるため情報は失われない
vi.spyOn(console, "error").mockImplementation(() => {});
vi.spyOn(console, "warn").mockImplementation(() => {});

const W = WimUI;

// 必須 props / 親 Context がないと TypeError 等で早期に落ち、レンダーパス全体を
// 検証できないコンポーネントの最小フィクスチャ。
// ここに登録されたコンポーネントは「例外なくレンダリングが成功すること」まで
// 検証される（props 形状が変わってフィクスチャが陳腐化した場合もテストが落ちる）
const options = [{ label: "A", value: "a" }];
const chartData = [{ name: "A", value: 1 }];

const SSR_FIXTURES: Record<string, () => ReactElement> = {
  // ---- データ props 必須 ----
  CheckboxGroup: () => <W.CheckboxGroup options={options} />,
  RadioGroup: () => <W.RadioGroup options={options} />,
  SwitchGroup: () => <W.SwitchGroup options={options} />,
  SegmentedControl: () => (
    <W.SegmentedControl options={options} value="a" onChange={() => {}} />
  ),
  ToggleGroup: () => <W.ToggleGroup options={options} />,
  InputMask: () => <W.InputMask mask="999" />,
  Mentions: () => <W.Mentions options={[{ id: "a", display: "A" }]} />,
  Tour: () => (
    <W.Tour
      steps={[{ target: "#x", title: "t", description: "d" }]}
      open={false}
      onClose={() => {}}
    />
  ),
  Breadcrumb: () => <W.Breadcrumb items={[{ label: "Home", href: "/" }]} />,
  SpeedDial: () => (
    <W.SpeedDial actions={[{ icon: "PlusIcon", label: "a", onClick: () => {} }]} />
  ),
  KeyboardShortcuts: () => (
    <W.KeyboardShortcuts shortcuts={[{ label: "d", keys: ["Ctrl", "K"] }]} />
  ),
  DataGrid: () => (
    <W.DataGrid columns={[{ key: "id", title: "ID" }]} data={[{ id: 1 }]} />
  ),
  VirtualList: () => (
    <W.VirtualList
      items={["a"]}
      itemHeight={20}
      height={100}
      renderItem={(item) => <div>{String(item)}</div>}
    />
  ),
  FAQSection: () => <W.FAQSection items={[{ question: "q", answer: "a" }]} />,
  Reaction: () => (
    <W.Reaction reactions={[{ id: "r", icon: "+1", label: "plus", count: 1 }]} />
  ),
  Leaderboard: () => <W.Leaderboard entries={[{ id: "1", name: "A", score: 1 }]} />,
  Gallery: () => <W.Gallery items={[{ id: "1", src: "a.png", alt: "a" }]} />,
  GanttChart: () => (
    <W.GanttChart
      tasks={[
        {
          id: "1",
          label: "t",
          startDate: new Date("2026-01-01"),
          endDate: new Date("2026-01-02"),
        },
      ]}
    />
  ),
  SourceCitationList: () => (
    <W.SourceCitationList sources={[{ title: "t", url: "https://example.com" }]} />
  ),
  CodeBlock: () => <W.CodeBlock code="const a = 1;" />,
  Popconfirm: () => (
    <W.Popconfirm title="t">
      <button>x</button>
    </W.Popconfirm>
  ),
  AreaChart: () => <W.AreaChart data={chartData} keys={["value"]} xAxisKey="name" />,
  BarChart: () => <W.BarChart data={chartData} keys={["value"]} xAxisKey="name" />,
  LineChart: () => <W.LineChart data={chartData} keys={["value"]} xAxisKey="name" />,
  RadarChart: () => <W.RadarChart data={chartData} keys={["value"]} indexKey="name" />,
  PieChart: () => <W.PieChart data={chartData} />,
  FunnelChart: () => <W.FunnelChart data={chartData} dataKey="value" nameKey="name" />,
  Heatmap: () => (
    <W.Heatmap data={[{ x: "a", y: "b", value: 1 }]} xAxisKey={["a"]} yAxisKey={["b"]} />
  ),
};

// ---- 親 Context 必須のサブコンポーネント（家族単位の合成フィクスチャ） ----
function registerFamily(names: string[], factory: () => ReactElement) {
  for (const name of names) SSR_FIXTURES[name] = factory;
}

registerFamily(["NavbarToggle", "NavbarMenu"], () => (
  <W.Navbar>
    <W.NavbarToggle />
    <W.NavbarMenu>m</W.NavbarMenu>
  </W.Navbar>
));
registerFamily(["DashboardWidgetCard"], () => (
  <W.Dashboard>
    <W.DashboardWidgetCard widget={{ id: "w", title: "t", content: "c" }} />
  </W.Dashboard>
));
registerFamily(
  [
    "CommandPaletteTrigger",
    "CommandPaletteContent",
    "CommandPaletteInput",
    "CommandPaletteItem",
    "CommandPaletteEmpty",
  ],
  () => (
    <W.CommandPalette>
      <W.CommandPaletteTrigger>t</W.CommandPaletteTrigger>
      <W.CommandPaletteContent>
        <W.CommandPaletteInput />
        <W.CommandPaletteItem>i</W.CommandPaletteItem>
        <W.CommandPaletteEmpty>e</W.CommandPaletteEmpty>
      </W.CommandPaletteContent>
    </W.CommandPalette>
  ),
);
registerFamily(["TabsList", "TabsTrigger", "TabsContent"], () => (
  <W.Tabs defaultValue="a">
    <W.TabsList>
      <W.TabsTrigger value="a">A</W.TabsTrigger>
    </W.TabsList>
    <W.TabsContent value="a">c</W.TabsContent>
  </W.Tabs>
));
registerFamily(["AccordionItem", "AccordionTrigger", "AccordionContent"], () => (
  <W.Accordion>
    <W.AccordionItem value="a">
      <W.AccordionTrigger>t</W.AccordionTrigger>
      <W.AccordionContent>c</W.AccordionContent>
    </W.AccordionItem>
  </W.Accordion>
));
registerFamily(["KanbanColumn", "KanbanCard"], () => (
  <W.Kanban>
    <W.KanbanColumn id="c" title="C">
      <W.KanbanCard id="k">card</W.KanbanCard>
    </W.KanbanColumn>
  </W.Kanban>
));
registerFamily(["TreeViewItem"], () => (
  <W.TreeView>
    <W.TreeViewItem value="a" label="A" />
  </W.TreeView>
));
registerFamily(["SortableListItem"], () => (
  <W.SortableList>
    <W.SortableListItem index={0}>x</W.SortableListItem>
  </W.SortableList>
));
registerFamily(
  ["BottomSheetTrigger", "BottomSheetClose", "BottomSheetContent"],
  () => (
    <W.BottomSheet>
      <W.BottomSheetTrigger>t</W.BottomSheetTrigger>
      <W.BottomSheetContent>
        <W.BottomSheetClose>x</W.BottomSheetClose>
      </W.BottomSheetContent>
    </W.BottomSheet>
  ),
);
registerFamily(
  ["DialogTrigger", "DialogClose", "DialogContent", "DialogTitle", "DialogDescription"],
  () => (
    <W.Dialog>
      <W.DialogTrigger>t</W.DialogTrigger>
      <W.DialogContent>
        <W.DialogTitle>T</W.DialogTitle>
        <W.DialogDescription>d</W.DialogDescription>
        <W.DialogClose>x</W.DialogClose>
      </W.DialogContent>
    </W.Dialog>
  ),
);
registerFamily(
  ["DrawerTrigger", "DrawerClose", "DrawerContent", "DrawerTitle", "DrawerDescription"],
  () => (
    <W.Drawer>
      <W.DrawerTrigger>t</W.DrawerTrigger>
      <W.DrawerContent>
        <W.DrawerTitle>T</W.DrawerTitle>
        <W.DrawerDescription>d</W.DrawerDescription>
        <W.DrawerClose>x</W.DrawerClose>
      </W.DrawerContent>
    </W.Drawer>
  ),
);
registerFamily(["PopoverTrigger", "PopoverContent"], () => (
  <W.Popover>
    <W.PopoverTrigger>t</W.PopoverTrigger>
    <W.PopoverContent>c</W.PopoverContent>
  </W.Popover>
));
registerFamily(["TooltipTrigger", "TooltipContent"], () => (
  <W.Tooltip>
    <W.TooltipTrigger>t</W.TooltipTrigger>
    <W.TooltipContent>c</W.TooltipContent>
  </W.Tooltip>
));
registerFamily(["LightboxTrigger", "LightboxContent", "LightboxGallery"], () => (
  <W.Lightbox>
    <W.LightboxTrigger>
      <img alt="" src="a.png" />
    </W.LightboxTrigger>
    <W.LightboxContent />
  </W.Lightbox>
));

// エクスポートは i18n インスタンスやアイコンマップ等も含む巨大な union のため、
// React コンポーネントかを実行時に判定してから ComponentType へ絞り込む
const componentEntries = Object.entries(WimUI)
  .filter(
    ([name, value]) =>
      /^[A-Z]/.test(name) &&
      (typeof value === "function" || typeof value === "object") &&
      isValidElementType(value),
  )
  .map(([name, value]): [string, ComponentType] => [
    name,
    value as unknown as ComponentType,
  ]);

describe("SSR smoke test (node, no DOM)", () => {
  it("window / document が存在しない環境である", () => {
    expect(typeof window).toBe("undefined");
    expect(typeof document).toBe("undefined");
  });

  it("公開コンポーネントを列挙できる", () => {
    expect(componentEntries.length).toBeGreaterThan(100);
  });

  it.each(componentEntries)(
    "%s は renderToString でブラウザグローバルを参照しない",
    (name, Component) => {
      const fixture = SSR_FIXTURES[name];
      if (fixture) {
        // フィクスチャ付きコンポーネントはあらゆる例外を失敗として扱う
        // （props 形状の変更によるフィクスチャの陳腐化もここで検出される）
        renderToString(fixture());
        return;
      }
      try {
        renderToString(createElement(Component));
      } catch (error) {
        // ReferenceError = 未定義グローバル（window 等）への参照 → SSR 非対応として失敗
        if (error instanceof ReferenceError) {
          throw new Error(
            `${name} は SSR でクラッシュします: ${error.message}`,
            { cause: error },
          );
        }
        // それ以外（必須 props 不足による TypeError 等）は SSR 安全性の対象外
      }
    },
  );
});
