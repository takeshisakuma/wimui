import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { render } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { Card } from "./Card";
import { CARD_STYLED_PADDING, CARD_STYLED_RADIUS } from "./styled-values";
import { resetUnstyledValueWarnings } from "../../../utilities/warn-unstyled-value";

/**
 * T38 の残り 6 値は「型は通るのに何も起きない」もの。型を狭めるのは破壊的変更
 * なので 0.8.0 に置き、それまでは黙って効かないのをやめる。
 * 判定は SCSS のクラス実在から引いているので、クラスを足せば警告は自然に止まる。
 */
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
      render(<Card radius={radius}>x</Card>);
      expect(warn).toHaveBeenCalledOnce();
      expect(warn.mock.calls[0][0]).toContain(`Card has no styles for radius="${radius}"`);
    });
  }

  // padding は 4xl/5xl だけが無い
  for (const padding of ["4xl", "5xl"] as const) {
    it(`warns for padding="${padding}"`, () => {
      render(<Card padding={padding}>x</Card>);
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
    render(<Card radius="5xl">a</Card>);
    render(<Card radius="5xl">b</Card>);
    render(<Card radius="5xl">c</Card>);
    expect(warn).toHaveBeenCalledOnce();
  });

  it("names the values that do work", () => {
    render(<Card radius="5xl">x</Card>);
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
