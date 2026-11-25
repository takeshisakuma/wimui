// T443: 囲んでいるフォームの reset で、値を持つ部品が既定の値へ戻るか（MAINTENANCE 7-4 の観点を CI へ）。
//
// formReset.consumers.test.tsx は手で並べた 8 部品だけを見ていて、部品を足しても対象に入らなかった
// （2026-11-23 の 7-4 で、Input 系 8 部品が戻らない欠陥を見つけたのも、その外だった）。ここでは
// 部品のソースから「フォームの値を持つ部品」を数え、CASES（測る）と EXEMPT（理由つきで測らない）の
// どちらかに入っていなければ落とす。新しい部品は、どちらかへ足すまで CI が通らない。
//
// 値は FormData で読む。隠した input に値を渡す部品（Slider・Select など）も、送られる値をそのまま見られる。
import React from "react";
import fs from "node:fs";
import path from "node:path";
import { describe, it, expect, vi } from "vitest";
import { act, fireEvent, render, screen, within } from "@testing-library/react";
import { Checkbox } from "../form/Checkbox/Checkbox";
import { CheckboxGroup } from "../form/CheckboxGroup/CheckboxGroup";
import { Switch } from "../form/Switch/Switch";
import { SwitchGroup } from "../form/SwitchGroup/SwitchGroup";
import { Radio } from "../form/Radio/Radio";
import { RadioGroup } from "../form/RadioGroup/RadioGroup";
import { Input } from "../form/Input/Input";
import { NumberInput } from "../form/NumberInput/NumberInput";
import { PasswordInput } from "../form/PasswordInput/PasswordInput";
import { SearchInput } from "../form/SearchInput/SearchInput";
import { Textarea } from "../form/Textarea/Textarea";
import { CounterTextarea } from "../form/CounterTextarea/CounterTextarea";
import { InputMask } from "../form/InputMask/InputMask";
import { SmartSearchInput } from "../form/SmartSearchInput/SmartSearchInput";
import { ColorInput } from "../form/ColorInput/ColorInput";
import { ColorPicker } from "../form/ColorPicker/ColorPicker";
import { TimePicker } from "../form/TimePicker/TimePicker";
import { Combobox } from "../form/Combobox/Combobox";
import { Mentions } from "../form/Mentions/Mentions";
import { Select } from "../form/Select/Select";
import { MultiSelect } from "../form/MultiSelect/MultiSelect";
import { Cascader } from "../form/Cascader/Cascader";
import { TreeSelect } from "../form/TreeSelect/TreeSelect";
import { Slider } from "../form/Slider/Slider";
import { RangeSlider } from "../form/RangeSlider/RangeSlider";
import { Rating } from "../form/Rating/Rating";
import { TagInput } from "../form/TagInput/TagInput";
import { OtpInput } from "../form/OtpInput/OtpInput";
import { DatePicker } from "../form/DatePicker/DatePicker";
import { ToggleGroup } from "../form/ToggleGroup/ToggleGroup";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

type Case = {
  /** 部品を描く。フォームへ送る名前は必ず "f" */
  el: () => React.ReactElement;
  /** 利用者の操作で値を変える */
  change: (form: HTMLFormElement) => unknown;
};

const two = [
  { label: "Alpha", value: "a" },
  { label: "Beta", value: "b" },
];
const tree = [
  { label: "Node A", value: "a" },
  { label: "Node B", value: "b" },
];
const cascade = [
  { label: "Alpha", value: "a", children: [{ label: "Alpha one", value: "a1" }] },
  { label: "Beta", value: "b", children: [{ label: "Beta one", value: "b1" }] },
];

const typeInto = (form: HTMLFormElement, value: string) => {
  const field = form.querySelector("input:not([type=hidden]), textarea") as HTMLInputElement;
  fireEvent.change(field, { target: { value } });
};
const pick = (form: HTMLFormElement, label: string) => {
  fireEvent.click(within(form).getByRole("combobox"));
  // 一覧は body に描く部品がある（T432）ので、文書の全体から引く。項目は役割で引き、無ければ文字で引く
  const item =
    screen.queryAllByRole("option", { name: label }).pop() ??
    screen.queryAllByRole("treeitem", { name: label }).pop() ??
    screen.queryAllByRole("menuitem", { name: label }).pop() ??
    screen.getAllByText(label).pop()!;
  fireEvent.click(item);
};

const CASES: Record<string, Case> = {
  Checkbox: { el: () => <Checkbox name="f" value="on" aria-label="Agree" />, change: (f) => fireEvent.click(within(f).getByRole("checkbox")) },
  Switch: { el: () => <Switch name="f" value="on" aria-label="Notify" />, change: (f) => fireEvent.click(within(f).getByRole("switch")) },
  Radio: { el: () => <Radio name="f" value="a" aria-label="Alpha" />, change: (f) => fireEvent.click(within(f).getByRole("radio")) },
  CheckboxGroup: { el: () => <CheckboxGroup name="f" options={two} defaultValue={["a"]} />, change: (f) => fireEvent.click(within(f).getByRole("checkbox", { name: "Beta" })) },
  SwitchGroup: { el: () => <SwitchGroup name="f" options={two} defaultValue={["a"]} />, change: (f) => fireEvent.click(within(f).getByRole("switch", { name: "Beta" })) },
  RadioGroup: { el: () => <RadioGroup name="f" options={two} defaultValue="a" />, change: (f) => fireEvent.click(within(f).getByRole("radio", { name: "Beta" })) },
  Input: { el: () => <Input name="f" aria-label="field" defaultValue="north" />, change: (f) => typeInto(f, "south") },
  NumberInput: { el: () => <NumberInput name="f" aria-label="field" defaultValue={12} />, change: (f) => typeInto(f, "34") },
  PasswordInput: { el: () => <PasswordInput name="f" aria-label="field" defaultValue="north" />, change: (f) => typeInto(f, "south") },
  SearchInput: { el: () => <SearchInput name="f" aria-label="field" defaultValue="north" />, change: (f) => typeInto(f, "south") },
  Textarea: { el: () => <Textarea name="f" aria-label="field" defaultValue="north" />, change: (f) => typeInto(f, "south") },
  CounterTextarea: { el: () => <CounterTextarea name="f" aria-label="field" defaultValue="north" />, change: (f) => typeInto(f, "south") },
  InputMask: { el: () => <InputMask name="f" aria-label="field" mask="999" defaultValue="123" />, change: (f) => typeInto(f, "456") },
  SmartSearchInput: { el: () => <SmartSearchInput name="f" aria-label="field" defaultValue="north" />, change: (f) => typeInto(f, "south") },
  ColorInput: { el: () => <ColorInput name="f" aria-label="field" defaultValue="#112233" />, change: (f) => typeInto(f, "#445566") },
  ColorPicker: { el: () => <ColorPicker name="f" aria-label="field" defaultValue="#112233" />, change: (f) => typeInto(f, "#445566") },
  TimePicker: { el: () => <TimePicker name="f" aria-label="field" defaultValue="10:00" />, change: (f) => typeInto(f, "11:30") },
  Combobox: { el: () => <Combobox name="f" aria-label="field" defaultValue="north" options={[]} />, change: (f) => typeInto(f, "south") },
  Mentions: { el: () => <Mentions name="f" aria-label="field" defaultValue="north" options={[]} />, change: (f) => typeInto(f, "south") },
  Select: { el: () => <Select name="f" aria-label="field" options={two} defaultValue="a" />, change: (f) => pick(f, "Beta") },
  MultiSelect: { el: () => <MultiSelect name="f" aria-label="field" options={two} defaultValue={["a"]} />, change: (f) => pick(f, "Beta") },
  Cascader: {
    el: () => <Cascader name="f" aria-label="field" options={cascade} defaultValue={["a", "a1"]} />,
    change: (f) => { pick(f, "Beta"); const one = screen.getAllByText("Beta one"); fireEvent.click(one[one.length - 1]); },
  },
  TreeSelect: { el: () => <TreeSelect name="f" aria-label="field" treeData={tree} />, change: (f) => pick(f, "Node B") },
  Slider: { el: () => <Slider name="f" aria-label="field" defaultValue={40} />, change: (f) => fireEvent.keyDown(within(f).getByRole("slider"), { key: "ArrowRight" }) },
  RangeSlider: { el: () => <RangeSlider name="f" aria-label="field" defaultValue={[20, 60]} />, change: (f) => fireEvent.keyDown(within(f).getAllByRole("slider")[0], { key: "ArrowRight" }) },
  Rating: { el: () => <Rating name="f" aria-label="field" defaultValue={2} />, change: (f) => fireEvent.click(within(f).getAllByRole("radio")[3]) },
  TagInput: {
    el: () => <TagInput name="f" aria-label="field" defaultValue={["north"]} />,
    change: (f) => { const i = f.querySelector("input:not([type=hidden])") as HTMLInputElement; fireEvent.change(i, { target: { value: "south" } }); fireEvent.keyDown(i, { key: "Enter" }); },
  },
  DatePicker: {
    el: () => <DatePicker name="f" aria-label="field" format="YYYY-MM-DD" defaultValue={new Date(2024, 0, 15)} />,
    change: (f) => {
      fireEvent.click(within(f).getByRole("combobox"));
      const day = screen.getAllByRole("gridcell").find((c) => c.textContent?.trim() === "20")!;
      fireEvent.click(day.querySelector("button") ?? day);
    },
  },
  ToggleGroup: { el: () => <ToggleGroup name="f" label="field" options={two} defaultValue="a" />, change: (f) => fireEvent.click(within(f).getByRole("radio", { name: "Beta" })) },
  OtpInput: { el: () => <OtpInput name="f" length={4} />, change: (f) => fireEvent.change(f.querySelectorAll("input:not([type=hidden])")[0], { target: { value: "7" } }) },
};

/**
 * フォームの値を持つが、ここでは測らない部品。理由を書けないものは、ここへ入れない。
 */
const EXEMPT: Record<string, string> = {
  Audio: "再生の操作（音量・位置）の input。フォームへ送る値ではない",
  Video: "再生の操作（音量・位置）の input。フォームへ送る値ではない",
  ChatUI: "中の入力欄は送信で空になる作文の欄。フォームへ送る値ではない（name を受けない）",
  PromptInput: "送信で空になる作文の欄。name を受けず、フォームへ値を送らない",
  CommandPalette: "ダイアログの中の検索欄。フォームへ送る値ではない",
  DataGrid: "選択の列のチェックボックス。選んだ行は onSelectionChange で渡し、フォームへ送らない",
  Gallery: "選択のチェックボックス。選んだ項目は onSelectionChange で渡し、フォームへ送らない",
  ImageCropper: "拡大の Slider。切り抜きの結果は onCrop で渡し、フォームへ送らない",
  JsonViewer: "検索・編集の欄。フォームへ送る値ではない",
  MarkdownRenderer: "読み取り専用のタスクのチェックボックス",
  NodeGraph: "図の中の編集の欄。フォームへ送る値ではない",
  Pagination: "1 ページの件数の Select。フォームへ送る値ではない",
  TreeView: "checkable のチェックボックス。選んだ値は onCheckedChange で渡し、フォームへ送らない",
  Transfer: "移した項目は onChange で渡し、name を受けない（フォームへ送らない）",
  QueryBuilder: "条件の組み立ての中の入力。組んだ条件は onChange で渡し、フォームへ送らない",
  PhoneInput: "値を利用者が持つ制御専用（defaultValue を受けない。#1318 で確認）",
  SegmentedControl: "value が必須の制御専用。reset で戻すのは値を持つ利用者",
  RichTextEditor: "name を受けず、フォームへ値を送らない（中身は onChange で渡す）",
  InlineEdit: "確定した値は onSave で渡し、name を受けない（フォームへ送らない）",
  DateRangePicker: "name を受けず、フォームへ値を送らない（期間は onChange で渡す）",
  Dropzone: "ファイルの input に name を渡さず、フォームへファイルを送らない（選んだファイルは onChange で渡す）",
  FileUpload: "ファイルの input に name を渡さず、フォームへファイルを送らない（選んだファイルは onChange で渡す）",
};

/** 部品のソースから、フォームの値を持つ部品を数える（scripts を通さず、ここで直接読む） */
const discover = () => {
  // テストはリポジトリの根で走る（charts-accessible-name.test.tsx と同じ読み方）
  const root = path.resolve("src/components");
  const comps: Record<string, string> = {};
  for (const cat of fs.readdirSync(root)) {
    if (cat.startsWith("_")) continue;
    const dir = path.join(root, cat);
    if (!fs.statSync(dir).isDirectory()) continue;
    for (const name of fs.readdirSync(dir)) {
      if (!fs.existsSync(path.join(dir, name, `${name}.tsx`))) continue;
      const files = (fs.readdirSync(path.join(dir, name), { recursive: true }) as string[]).filter(
        (x) => /\.tsx?$/.test(x) && !/\.(test|stories)\./.test(x),
      );
      comps[name] = files.map((x) => fs.readFileSync(path.join(dir, name, x), "utf8")).join("\n");
    }
  }
  // 自分で描く: <input> / <textarea> / <select> / 隠した値 / 要素名を文字列で渡す形（`asChild ? Slot : "input"`）/ textarea の props
  const direct = /<input\b|<textarea\b|<select\b|<HiddenFormValue\b|\? Slot : "(input|textarea)"|ComponentPropsWithoutRef<"textarea">/;
  const found = new Set(Object.keys(comps).filter((n) => direct.test(comps[n])));
  // 組んで使う: 値を持つ部品を import して描く部品も、値を持つ
  for (let changed = true; changed; ) {
    changed = false;
    for (const [n, src] of Object.entries(comps)) {
      if (found.has(n)) continue;
      for (const m of found) {
        if (new RegExp(`import[^;]*\\b${m}\\b[^;]*from "[^"]*/${m}(/${m})?"`).test(src) && new RegExp(`<${m}[\\s>/]`).test(src)) {
          found.add(n);
          changed = true;
          break;
        }
      }
    }
  }
  return [...found].sort();
};

// 名前を分けて送る部品がある（RangeSlider は f-min / f-max）ので、f で始まる名前を全部読む
const values = (form: HTMLFormElement) =>
  JSON.stringify([...new FormData(form).entries()].filter(([k]) => k === "f" || k.startsWith("f-") || k.startsWith("f[")).map(([k, v]) => `${k}=${String(v)}`));

describe("form reset coverage", () => {
  it("lists every component that holds a form value, either to measure or with a reason", () => {
    const found = discover();
    // 読めなかったら空になる。空で素通りさせない（2026-11-24 に数えた 51 部品）
    expect(found.length).toBeGreaterThanOrEqual(51);
    const listed = [...Object.keys(CASES), ...Object.keys(EXEMPT)].sort();
    expect(listed).toEqual(found);
    for (const [name, reason] of Object.entries(EXEMPT)) expect(reason, name).not.toMatch(/^\s*$/);
  });

  it.each(Object.entries(CASES))("%s returns to its default value on form reset", async (_name, c) => {
    const { container } = render(<form>{c.el()}</form>);
    const form = container.querySelector("form")!;
    const initial = values(form);

    // 外側を act で包まない。包むと、一覧を開いた描画が操作の途中で反映されず、項目が見つからない
    // （fireEvent は 1 回ずつ act を通る）
    await c.change(form);
    // 値が変わっていなければ、reset を見ても意味が無い（操作の書き方の誤りを、緑と取り違えない）
    expect(values(form)).not.toBe(initial);

    await act(async () => {
      form.reset();
    });
    expect(values(form)).toBe(initial);
  });
});
