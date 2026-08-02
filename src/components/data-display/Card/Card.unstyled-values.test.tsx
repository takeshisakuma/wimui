import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Card } from "./Card";
import { CARD_STYLED_PADDING, CARD_STYLED_RADIUS } from "./styled-values";
import { resetUnstyledValueWarnings } from "../../../utilities/warn-unstyled-value";

/**
 * 0.13.0（T38）で `CardProps` は SCSS が実装する値だけを受けるようになったので、
 * **TypeScript からはこの 6 値をもう書けない**（型を狭めた効果そのもの）。
 *
 * それでも実行時の警告は残す。型はコンパイルするときにしか効かないので、
 * JS から使う人・`as any` を挟んだ人・古い型で解決している人には届かない。
 * その経路で来た値は今も黙って無視されるので、開発時に理由が出る意味がある。
 *
 * したがってここでの `as any` は「型を回避するための逃げ」ではなく、
 * **型を回避した利用者を再現するための唯一の手段**。判定は SCSS のクラス実在から
 * 引いているので、クラスを足せば警告は自然に止まる。
 *
 * 逆に、**スタイルがある値のほうはキャストせずに書く**。あれが型として通ること
 * 自体がこの回の主張なので、キャストを付けると型の後退を見逃すようになる。
 */
/* eslint-disable @typescript-eslint/no-explicit-any */
describe("Card warns about values that type-check but have no styles", () => {
  let warn: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    resetUnstyledValueWarnings();
    warn = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    warn.mockRestore();
  });

  // radius は none/sm/md/lg/xl/2xl しか実装が無い
  for (const radius of ["xs", "3xl", "4xl", "5xl"] as const) {
    it(`warns for radius="${radius}"`, () => {
      render(<Card radius={radius as any}>x</Card>);
      expect(warn).toHaveBeenCalledOnce();
      expect(warn.mock.calls[0][0]).toContain(`Card has no styles for radius="${radius}"`);
    });
  }

  // padding は 4xl/5xl だけが無い
  for (const padding of ["4xl", "5xl"] as const) {
    it(`warns for padding="${padding}"`, () => {
      render(<Card padding={padding as any}>x</Card>);
      expect(warn).toHaveBeenCalledOnce();
      expect(warn.mock.calls[0][0]).toContain(`Card has no styles for padding="${padding}"`);
    });
  }

  // 鳴ってはいけない経路。ここが鳴くと既定の Card がコンソールを汚す。
  it("stays silent for the defaults", () => {
    render(<Card>x</Card>);
    expect(warn).not.toHaveBeenCalled();
  });

  it("stays silent for every value that does have styles", () => {
    for (const radius of ["none", "sm", "md", "lg", "xl", "2xl"] as const) {
      render(<Card radius={radius}>x</Card>);
    }
    for (const padding of ["none", "xs", "sm", "md", "lg", "xl", "2xl", "3xl"] as const) {
      render(<Card padding={padding}>x</Card>);
    }
    expect(warn).not.toHaveBeenCalled();
  });

  it("warns once per value, not once per render", () => {
    render(<Card radius={"5xl" as any}>a</Card>);
    render(<Card radius={"5xl" as any}>b</Card>);
    render(<Card radius={"5xl" as any}>c</Card>);
    expect(warn).toHaveBeenCalledOnce();
  });

  it("names the values that do work", () => {
    render(<Card radius={"5xl" as any}>x</Card>);
    const message = warn.mock.calls[0][0] as string;
    expect(message).toContain("Supported:");
    expect(message).toContain("2xl");
  });
});

/**
 * 上のリストは手書きなので、SCSS と食い違えば警告そのものが嘘になる。
 * Vitest では CSS モジュールが全キーに答えるプロキシなので import では検証
 * できない。実ファイルを読んで突き合わせる。
 */
describe("the lists match card.module.scss", () => {
  const scss = fs.readFileSync(
    path.join(path.dirname(fileURLToPath(import.meta.url)), "card.module.scss"),
    "utf-8",
  );

  const classesFor = (prefix: string) =>
    [...scss.matchAll(new RegExp(`&\\.${prefix}-([a-z0-9]+)`, "g"))]
      .map((m) => m[1])
      .sort();

  it("padding", () => {
    expect(classesFor("padding")).toEqual([...CARD_STYLED_PADDING].sort());
  });

  it("radius", () => {
    expect(classesFor("radius")).toEqual([...CARD_STYLED_RADIUS].sort());
  });
});
