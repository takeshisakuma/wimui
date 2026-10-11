/**
 * T99: `check:aschild` の静的照合は「asChild ? Slot」の文字列しか見ないので、
 * Tag / Chip のように**描画すると必ず例外**でも緑になる。
 *
 * このファイルは `requiredComponents` のうち、ルートを `<X asChild><span/></X>`
 * で描けるものを実際に render し、例外が出ないことを見る。
 * `npm run check:aschild` から vitest 経由で呼ばれる。
 *
 * 複合トリガー（Dialog.Trigger 等）や必須 props が多いものは SKIP に逃がす。
 * そこを増やすときは「静的には緑・実行時に赤」が残っていないかを疑うこと。
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { Title, Text, Span, Legend, Label, Highlight, Kbd, Code, Blockquote } from "../src/typography";
import { Link, BackTop } from "../src/navigation";
import {
  Button,
  IconButton,
  LinkButton,
  Checkbox,
  Radio,
  Switch,
  Textarea,
} from "../src/form";
import { Box, Flex, Stack, Group, Grid, Toolbar } from "../src/layout";
import { Badge, Chip, Tag, Card, List, RelativeTime, Countdown } from "../src/data-display-core";
import { Drawer, DrawerTrigger, DrawerContent, DrawerTitle, DrawerClose } from "../src/overlay";
// T337 で足した分は、名前から部品を引く（必須の一覧と名前で突き合わせるため）。
import fs from "node:fs";
import path from "node:path";
import * as formExports from "../src/form";
import * as navigationExports from "../src/navigation";
import * as overlayExports from "../src/overlay";
import * as dataDisplayExports from "../src/data-display-core";

type Case = {
  name: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: React.ComponentType<any>;
  /** Extra props needed so the component mounts without throwing for unrelated reasons. */
  props?: Record<string, unknown>;
};

/**
 * `<X asChild><span/></X>` がそのまま通るべきもの。
 * SKIP に入れた複合コンポーネントは、サブコンポーネント側の asChild を
 * 個別テストで見る（ここはルートの契約だけを守る）。
 */
const CASES: Case[] = [
  { name: "Title", Component: Title },
  { name: "Text", Component: Text },
  { name: "Span", Component: Span },
  { name: "Legend", Component: Legend },
  { name: "Label", Component: Label },
  { name: "Highlight", Component: Highlight },
  { name: "Kbd", Component: Kbd },
  { name: "Code", Component: Code },
  { name: "Blockquote", Component: Blockquote },
  { name: "Link", Component: Link, props: { href: "#" } },
  // Breadcrumb は items 必須でルート asChild の形が違う（子の Link 側）。ここでは見ない。
  { name: "BackTop", Component: BackTop },
  { name: "Button", Component: Button },
  { name: "IconButton", Component: IconButton, props: { "aria-label": "icon" } },
  { name: "LinkButton", Component: LinkButton, props: { href: "#" } },
  { name: "Checkbox", Component: Checkbox },
  { name: "Radio", Component: Radio },
  { name: "Switch", Component: Switch },
  { name: "Textarea", Component: Textarea },
  { name: "Box", Component: Box },
  { name: "Flex", Component: Flex },
  { name: "Stack", Component: Stack },
  { name: "Group", Component: Group },
  { name: "Grid", Component: Grid },
  { name: "Toolbar", Component: Toolbar },
  { name: "Badge", Component: Badge },
  { name: "Chip", Component: Chip },
  { name: "Tag", Component: Tag },
  { name: "Card", Component: Card },
  { name: "List", Component: List },
  { name: "RelativeTime", Component: RelativeTime, props: { date: new Date("2026-01-01") } },
  { name: "Countdown", Component: Countdown, props: { date: new Date(Date.now() + 60_000) } },
];

describe("asChild render smoke (T99)", () => {
  for (const { name, Component, props } of CASES) {
    it(`${name} renders with asChild without throwing`, () => {
      expect(() =>
        render(
          <Component asChild {...props}>
            <span data-testid={`aschild-${name}`}>slotted</span>
          </Component>,
        ),
      ).not.toThrow();
    });

    // 例外が出ないだけでは足りない（T323）。Link は例外なしで描けていたが、部品のクラスも href も
    // 子ではなく Link の内側の span に付いていた ── Slot は直下の Slottable しか探さないので、
    // Slottable を別の要素の中に置くと、その要素が子の代わりに部品の要素になる。
    //
    // 見るのは「部品のクラス（`wim-*`）が子に付くこと」。「子が描画の根であること」では見ない ──
    // Textarea（フィールドの枠）と Grid（コンテナクエリの器）は、asChild の有無にかかわらず
    // 外側に 1 枚包むので、根で見ると正しい実装まで落ちる（最初にそう書いて、この 2 つで落ちた）。
    it(`${name} は asChild で、部品のクラスを子の要素に付ける`, () => {
      render(
        <Component asChild {...props}>
          <span data-testid={`aschild-root-${name}`}>slotted</span>
        </Component>,
      );
      const child = screen.getByTestId(`aschild-root-${name}`);
      const componentClasses = Array.from(child.classList).filter((c) => c.startsWith("wim-"));

      expect(componentClasses, `子に付いたクラス: "${child.className}"`).not.toHaveLength(0);
    });
  }
});

// 複合トリガーは親の中でしか描けないので別枠。ここを空のままにしていたせいで
// T121 の取りこぼしが出た（root だけを見ていた）。
// 複合トリガーは親の中でしか描けないので別枠。ここが空だったせいで T121 の
// 取りこぼしが出た（root だけを見ていた）。
//
// **子は `<Button>` にする。`<span>` では鳴らない。** 壊れ方はこうだった:
// `Drawer.Trigger` が `asChild` を `...props` に混ぜ、Slot が子へ転送する。
// 子が `Button` だと `Button` 自身の `asChild` が立ち、テキストの子に対して
// `React.Children.only` が落ちて**ストーリーが 6 本まるごと描画されなくなった**。
// `<span>` は `asChild` を持たないので、同じバグでも何も起きない。
// （最初に書いた「漏れた属性を見る」検査は、故意にバグを戻しても緑のままだった ──
// React は未知の boolean 属性を DOM に出さない。測れないので捨てた。）
describe("asChild render smoke: composite triggers", () => {
  it("Drawer.Trigger / Drawer.Close が asChild を持つ子を壊さない", () => {
    expect(() =>
      render(
        <Drawer>
          <DrawerTrigger asChild>
            <Button variant="solid">開く</Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerTitle>T</DrawerTitle>
            <DrawerClose asChild>
              <Button variant="outline">閉じる</Button>
            </DrawerClose>
          </DrawerContent>
        </Drawer>,
      ),
    ).not.toThrow();
    expect(screen.getByText("開く")).toBeInTheDocument();
  });
});

// ── T337: 必須の一覧の全部を、描くか、理由を書いて除くかのどちらかにする ─────────────
//
// 2026-10-11 まで、このファイルが描いていたのは、必須の一覧 80 部品のうち 31 だった。残りの 49 は
// `asChild ? Slot` という文字列があるかしか見ておらず、うち 12 部品は `asChild` を付けると描画で
// 例外になるか、部品のクラスが利用者の要素に付かなかった（Mentions / Select / CheckboxGroup /
// RadioGroup / SwitchGroup / Slider / OtpInput / DatePicker / Stepper / FieldTemplate / Timeline / Carousel）。
// 原因は 2 つ: ①`Slottable` に入れるものが逆（利用者の要素ではなく、部品の中身を入れていた）
// ②Slot の直下に、利用者の要素と部品の中身を並べていた。
//
// ここで足す部品は、上の CASES と同じ 2 点で見る。下の「網羅」の検査が、一覧に足した部品を
// このファイルで描くか、理由を書いて除くかを強制する（穴が黙って戻らないように）。

const options = [
  { value: "a", label: "A" },
  { value: "b", label: "B" },
];

/** 名前で引く。`props` は、その部品が描けるだけの最小限。`inner` は、利用者の要素の中に置く子。 */
const NAMED_CASES: Record<string, { props?: Record<string, unknown>; inner?: React.ReactNode }> = {
  // 直した 12 部品
  Mentions: { props: { options: [{ id: 1, display: "Alice" }] } },
  Select: { props: { options } },
  CheckboxGroup: { props: { options } },
  RadioGroup: { props: { options } },
  SwitchGroup: { props: { options } },
  Slider: {},
  OtpInput: { props: { length: 4 } },
  DatePicker: {},
  Stepper: { props: { steps: [{ title: "A" }, { title: "B" }] } },
  FieldTemplate: { props: { label: "Label", error: "Error" }, inner: <input /> },
  Timeline: { inner: [<div key="1">one</div>, <div key="2">two</div>] },
  Carousel: { inner: [<img key="1" alt="one" />, <img key="2" alt="two" />] },
  // 前から正しく描けていたが、検査が見ていなかった 23 部品
  Dropdown: {},
  Menu: {},
  ContextMenu: {},
  Menubar: {},
  Tabs: {},
  HamburgerMenu: {},
  Input: {},
  NumberInput: {},
  FloatButton: { props: { "aria-label": "action" } },
  CreditCardInput: {},
  SegmentedControl: { props: { options, value: "a", onChange: () => {} } },
  ToggleGroup: { props: { options } },
  TreeSelect: {},
  ButtonGroup: {},
  ThemeToggle: {},
  RangeSlider: {},
  Rating: {},
  CopyButton: { props: { text: "copy" } },
  Table: {},
  Kanban: {},
  Accordion: {},
  SortableList: { props: { items: [] } },
  CalendarHeatmap: { props: { data: [] } },
};

/**
 * 根に `asChild` を付ける形ではない部品。理由を書いて除く。
 * ここを増やすときは、「静的には緑・実行時に赤」が残っていないかを疑うこと。
 */
const NOT_ROOT_SLOT: Record<string, string> = {
  // 複合の部品。`asChild` を持つのは、引き金や中身などの子の部品（根は、状態を配るだけ）
  Tooltip: "引き金の子を clone する形（根に Slot は無い）",
  Popover: "PopoverTrigger が子を clone する",
  HoverCard: "引き金の子を clone する形",
  Drawer: "DrawerTrigger / DrawerClose / DrawerContent が持つ（下の「composite triggers」で見ている）",
  Dialog: "DialogTrigger / DialogClose / DialogContent が持つ",
  BottomSheet: "引き金と閉じるボタンが子を clone する",
  CommandPalette: "引き金が子を clone する",
  Lightbox: "引き金のボタンが持つ",
  TabNavigation: "各タブ（リンク）が持つ",
  TabBar: "各タブ（ボタン）が持つ",
  // 根ではなく、中の 1 か所を差し替える形
  SwipeAction: "差し替わるのは中身の枠（content）。根は、スワイプを受ける入れ物",
  PullToRefresh: "差し替わるのは中身の枠（content）。根は、引っ張りを受ける入れ物",
  Pagination: "差し替わるのは nav。`wim-pagination` は、その外の包みに付く（Textarea / Grid と同じく外側に 1 枚包む）",
  // 判断待ち（T337 の残り）
  Breadcrumb: "`items` で描く部品で、asChild を付けると nav が消えて中の ol が根になり、渡した子は描かれない。どうあるべきかが未決定",
};

const namedExports: Record<string, unknown> = {
  ...formExports,
  ...navigationExports,
  ...overlayExports,
  ...dataDisplayExports,
};

describe("asChild render smoke: 名前で引く部品（T337）", () => {
  for (const [name, { props, inner }] of Object.entries(NAMED_CASES)) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const Component = namedExports[name] as React.ComponentType<any> | undefined;

    it(`${name} は、名前で引ける`, () => {
      expect(Component, `${name} が、読み込んだバレルに無い`).toBeDefined();
    });
    if (!Component) continue;

    it(`${name} renders with asChild without throwing`, () => {
      expect(() =>
        render(
          <Component asChild {...props}>
            <section data-testid={`aschild-${name}`}>{inner}</section>
          </Component>,
        ),
      ).not.toThrow();
    });

    it(`${name} は asChild で、部品のクラスを子の要素に付ける`, () => {
      render(
        <Component asChild {...props}>
          <section data-testid={`aschild-root-${name}`}>{inner}</section>
        </Component>,
      );
      const child = screen.getByTestId(`aschild-root-${name}`);
      const componentClasses = Array.from(child.classList).filter((c) => c.startsWith("wim-"));

      expect(componentClasses, `子に付いたクラス: "${child.className}"`).not.toHaveLength(0);
    });
  }

  it("FieldTemplate は asChild で、利用者の要素の子（入力欄）を、ラベルとエラーのあいだの枠に入れる", () => {
    render(
      <formExports.FieldTemplate asChild label="Label" error="Error">
        <section data-testid="field-root">
          <input data-testid="field-input" />
        </section>
      </formExports.FieldTemplate>,
    );
    const root = screen.getByTestId("field-root");
    expect(root).toContainElement(screen.getByText("Label"));
    expect(root).toContainElement(screen.getByTestId("field-input"));
    expect(root).toContainElement(screen.getByText("Error"));
  });

  it("Timeline と Carousel は asChild で、利用者の要素の子を、項目・スライドとして描く", () => {
    render(
      <dataDisplayExports.Timeline asChild>
        <section data-testid="timeline-root">
          <div>first entry</div>
          <div>second entry</div>
        </section>
      </dataDisplayExports.Timeline>,
    );
    const timeline = screen.getByTestId("timeline-root");
    expect(timeline).toHaveTextContent("first entry");
    expect(timeline).toHaveTextContent("second entry");

    render(
      <dataDisplayExports.Carousel asChild>
        <section data-testid="carousel-root">
          <img alt="first slide" />
          <img alt="second slide" />
        </section>
      </dataDisplayExports.Carousel>,
    );
    const carousel = screen.getByTestId("carousel-root");
    expect(carousel.querySelector('img[alt="first slide"]')).not.toBeNull();
    expect(carousel.querySelector('img[alt="second slide"]')).not.toBeNull();
  });
});

describe("asChild render smoke: 網羅（T337）", () => {
  const source = fs.readFileSync(path.resolve(__dirname, "check-aschild.js"), "utf8");
  const listed = /const requiredComponents = \[([\s\S]*?)\];/.exec(source);
  const required = listed ? Array.from(listed[1].matchAll(/'([A-Za-z]+)'/g), (m) => m[1]) : [];

  it("必須の一覧を読めている", () => {
    // 対照: 一覧の書き方が変わって 0 件になると、下の検査は何も見ずに通ってしまう
    expect(required.length).toBeGreaterThanOrEqual(80);
  });

  it("必須の一覧の全部を、このファイルで描いているか、理由を書いて除いている", () => {
    const rendered = new Set([...CASES.map((c) => c.name), ...Object.keys(NAMED_CASES)]);
    const unclassified = required.filter((name) => !rendered.has(name) && !(name in NOT_ROOT_SLOT));
    expect(unclassified, "描くか（NAMED_CASES）、理由を書いて除く（NOT_ROOT_SLOT）").toEqual([]);
  });

  it("描いている部品を、除く側にも書いていない", () => {
    const rendered = new Set([...CASES.map((c) => c.name), ...Object.keys(NAMED_CASES)]);
    expect(Object.keys(NOT_ROOT_SLOT).filter((name) => rendered.has(name))).toEqual([]);
  });
});
