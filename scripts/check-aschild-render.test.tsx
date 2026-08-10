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
