/**
 * 利用者が渡した `aria-labelledby` / `aria-describedby` / `aria-label` が、読まれる要素に届くこと（T329）。
 *
 * T328（`userAriaRefs.consumers.test.tsx`）は「渡した属性が出力から消える」側を見ている。こちらは
 * 同じ測定で出た残りの 2 つの形を見る。
 *
 * - **包みに落ちる**: 属性がロールの無い `div`（または `role="presentation"`）に付く。フォーカスが
 *   当たらない要素なので、付いていても読まれない
 * - **口が無い**: props に ARIA の属性が無く、渡しても黙って捨てられる
 *
 * 行き先の決め方は 1 つ: **説明は、部品がエラーの参照を付けている要素と同じところに並べる。**
 * 名前は、部品の `label` が無いときだけ通す。
 */
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Slider } from "../form/Slider/Slider";
import { RangeSlider } from "../form/RangeSlider/RangeSlider";
import { Cascader } from "../form/Cascader/Cascader";
import { InlineEdit } from "../form/InlineEdit/InlineEdit";
import { OtpInput } from "../form/OtpInput/OtpInput";
import { PhoneInput } from "../form/PhoneInput/PhoneInput";
import { Mentions } from "../form/Mentions/Mentions";
import { DateRangePicker } from "../form/DateRangePicker/DateRangePicker";
import { SegmentedControl } from "../form/SegmentedControl/SegmentedControl";
import { Transfer } from "../form/Transfer/Transfer";

vi.mock("react-i18next", async () => ({
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string) => key }),
}));

/** 外に置いた見出しと説明文。参照が「解決して読まれる」ことまで見る。 */
const Outside = ({ children }: { children: React.ReactNode }) => (
  <>
    <h2 id="ext-label">Delivery window</h2>
    <p id="ext-desc">Shown to the courier.</p>
    {children}
  </>
);
const refs = { "aria-labelledby": "ext-label", "aria-describedby": "ext-desc" };

const describedByIds = (el: Element) => (el.getAttribute("aria-describedby") ?? "").split(" ").filter(Boolean);

/** 包みに、名前と説明の属性が残っていないこと（残っていても読まれないので、届いたように見えるだけ）。 */
const expectWrapperClean = (wrapper: Element | null) => {
  expect(wrapper).not.toBeNull();
  expect(wrapper).not.toHaveAttribute("aria-describedby");
  expect(wrapper).not.toHaveAttribute("aria-labelledby");
  expect(wrapper).not.toHaveAttribute("aria-label");
};

describe("利用者が渡した参照が、読まれる要素に届く（T329）", () => {
  describe("Slider", () => {
    it("説明が、包みではなくつまみに付く", () => {
      const { container } = render(
        <Outside>
          <Slider defaultValue={30} {...refs} />
        </Outside>,
      );
      const thumb = screen.getByRole("slider", { name: "Delivery window" });
      expect(thumb).toHaveAccessibleDescription("Shown to the courier.");
      expectWrapperClean(container.querySelector(".wim-slider"));
    });

    it("error があるときは、利用者の説明とエラーの両方が並ぶ", () => {
      render(
        <Outside>
          <Slider defaultValue={30} error="Out of range" {...refs} />
        </Outside>,
      );
      const ids = describedByIds(screen.getByRole("slider"));
      expect(ids).toContain("ext-desc");
      expect(ids).toHaveLength(2);
    });

    it("何も渡さなければ、説明の属性を出さない（これまでどおり）", () => {
      render(<Slider defaultValue={30} aria-label="Volume" />);
      expect(screen.getByRole("slider")).not.toHaveAttribute("aria-describedby");
    });
  });

  describe("RangeSlider", () => {
    it("説明が、両方のつまみに付く", () => {
      const { container } = render(
        <Outside>
          <RangeSlider defaultValue={[20, 80]} {...refs} />
        </Outside>,
      );
      const thumbs = screen.getAllByRole("slider");
      expect(thumbs).toHaveLength(2);
      for (const thumb of thumbs) {
        expect(thumb).toHaveAccessibleDescription("Shown to the courier.");
      }
      expectWrapperClean(container.querySelector(".wim-range-slider"));
    });

    it("error があるときは、利用者の説明とエラーの両方が並ぶ", () => {
      render(
        <Outside>
          <RangeSlider defaultValue={[20, 80]} error="Out of range" {...refs} />
        </Outside>,
      );
      for (const thumb of screen.getAllByRole("slider")) {
        const ids = describedByIds(thumb);
        expect(ids).toContain("ext-desc");
        expect(ids).toHaveLength(2);
      }
    });

    // 以前は、名前の渡し方が 3 通りとも、2 つのつまみが同じ名前になっていた（label なら "Price" が 2 つ）。
    describe("2 つのつまみが、区別できる名前を持つ", () => {
      const names = () => screen.getAllByRole("slider");

      it("label を渡したとき", () => {
        render(<RangeSlider defaultValue={[20, 80]} label="Price" />);
        const [start, end] = names();
        expect(start).toHaveAccessibleName("Start Price");
        expect(end).toHaveAccessibleName("End Price");
      });

      it("aria-label を渡したとき", () => {
        render(<RangeSlider defaultValue={[20, 80]} aria-label="Price" />);
        const [start, end] = names();
        expect(start).toHaveAccessibleName("Start Price");
        expect(end).toHaveAccessibleName("End Price");
      });

      it("aria-labelledby を渡したとき（外の名前のあとに、開始・終了が続く）", () => {
        render(
          <Outside>
            <RangeSlider defaultValue={[20, 80]} aria-labelledby="ext-label" />
          </Outside>,
        );
        const [start, end] = names();
        expect(start).toHaveAccessibleName("Delivery window Start");
        expect(end).toHaveAccessibleName("Delivery window End");
      });

      it("何も渡さないとき（これまでどおり）", () => {
        render(<RangeSlider defaultValue={[20, 80]} />);
        const [start, end] = names();
        expect(start).toHaveAccessibleName("Start");
        expect(end).toHaveAccessibleName("End");
      });
    });
  });

  describe("Mentions", () => {
    it("名前と説明が、入力欄にだけ付く（包みには付かない）", () => {
      const { container } = render(
        <Outside>
          <Mentions options={[{ id: 1, display: "Alice" }]} {...refs} />
        </Outside>,
      );
      const box = screen.getByRole("textbox", { name: "Delivery window" });
      expect(box).toHaveAccessibleDescription("Shown to the courier.");
      expectWrapperClean(container.querySelector(".wim-mentions"));
    });

    it("包みに渡したほかの属性は、これまでどおり包みに出る", () => {
      const { container } = render(<Mentions options={[{ id: 1, display: "Alice" }]} data-probe="x" />);
      expect(container.querySelector(".wim-mentions")).toHaveAttribute("data-probe", "x");
    });
  });

  describe("Cascader", () => {
    const options = [{ value: "a", label: "A" }];

    it("名前と説明が、包みではなく引き金に付く", () => {
      const { container } = render(
        <Outside>
          <Cascader options={options} {...refs} />
        </Outside>,
      );
      const trigger = screen.getByRole("combobox", { name: "Delivery window" });
      expect(trigger).toHaveAccessibleDescription("Shown to the courier.");
      // 参照が名前になるときは、内蔵の名前（aria-label）を並べない
      expect(trigger).not.toHaveAttribute("aria-label");
      // 包み（`{...props}` を受ける根）は、クラスではなく自前の data 属性で引く
      expectWrapperClean(container.querySelector("[data-keyboard-nav]"));
    });

    it("label があるときは、部品のラベルが名前のまま", () => {
      render(
        <Outside>
          <Cascader options={options} label="Region" {...refs} />
        </Outside>,
      );
      expect(screen.getByRole("combobox", { name: /Region/ })).toBeInTheDocument();
    });

    it("error があるときは、利用者の説明とエラーの両方が並ぶ", () => {
      render(
        <Outside>
          <Cascader options={options} error="Required" {...refs} />
        </Outside>,
      );
      const ids = describedByIds(screen.getByRole("combobox"));
      expect(ids).toContain("ext-desc");
      expect(ids).toHaveLength(2);
    });
  });

  describe("InlineEdit", () => {
    it("名前と説明が、包みではなく表示中のボタンに付く", () => {
      const { container } = render(
        <Outside>
          <InlineEdit defaultValue="09:00-12:00" {...refs} />
        </Outside>,
      );
      const preview = screen.getByRole("button", { name: "Delivery window" });
      expect(preview).toHaveAccessibleDescription("Shown to the courier.");
      expectWrapperClean(container.querySelector(".wim-inline-edit"));
    });

    it("編集中は、入力欄に付く", () => {
      render(
        <Outside>
          <InlineEdit defaultValue="09:00-12:00" {...refs} />
        </Outside>,
      );
      fireEvent.click(screen.getByRole("button", { name: "Delivery window" }));
      const input = screen.getByRole("textbox", { name: "Delivery window" });
      expect(input).toHaveAccessibleDescription("Shown to the courier.");
    });
  });

  describe("OtpInput", () => {
    it("名前は桁をまとめる group に、説明は全部の桁に付く", () => {
      const { container } = render(
        <Outside>
          <OtpInput length={4} {...refs} />
        </Outside>,
      );
      expect(screen.getByRole("group", { name: "Delivery window" })).toBeInTheDocument();
      const digits = screen.getAllByRole("textbox");
      expect(digits).toHaveLength(4);
      for (const digit of digits) {
        expect(digit).toHaveAccessibleDescription("Shown to the courier.");
      }
      expectWrapperClean(container.querySelector(".wim-otp-input"));
    });

    it("aria-label を渡すと、group の名前になる（桁の名前はそのまま）", () => {
      render(<OtpInput length={4} aria-label="Verification code" />);
      expect(screen.getByRole("group", { name: "Verification code" })).toBeInTheDocument();
      expect(screen.getByRole("textbox", { name: "Digit 1" })).toBeInTheDocument();
    });

    it("error があるときは、利用者の説明とエラーの両方が、各桁に並ぶ", () => {
      render(
        <Outside>
          <OtpInput length={4} error="Wrong code" {...refs} />
        </Outside>,
      );
      for (const digit of screen.getAllByRole("textbox")) {
        const ids = describedByIds(digit);
        expect(ids).toContain("ext-desc");
        expect(ids).toHaveLength(2);
      }
    });
  });

  describe("PhoneInput", () => {
    it("名前と説明が、包みではなく番号の入力欄に付く", () => {
      render(
        <Outside>
          <PhoneInput {...refs} />
        </Outside>,
      );
      const number = screen.getByRole("textbox", { name: "Delivery window" });
      expect(number).toHaveAccessibleDescription("Shown to the courier.");
      expectWrapperClean(screen.getByTestId("phone-input-root"));
    });

    it("aria-label を渡すと、番号の入力欄の名前になる。国の引き金は内蔵の名前のまま", () => {
      render(<PhoneInput aria-label="Mobile number" />);
      expect(screen.getByRole("textbox", { name: "Mobile number" })).toBeInTheDocument();
      // 対照: 国の引き金まで利用者の名前で読まれると、2 つの操作要素が区別できない
      expect(screen.getByRole("combobox")).toHaveAttribute("aria-label", "Select country");
    });

    it("label があるときは、部品のラベルが番号の入力欄の名前のまま", () => {
      render(<PhoneInput label="Phone" aria-label="Mobile number" />);
      expect(screen.getByRole("textbox", { name: /Phone/ })).toBeInTheDocument();
      expect(screen.getByRole("textbox")).not.toHaveAttribute("aria-label");
    });

    it("error があるときは、利用者の説明とエラーの両方が並ぶ", () => {
      render(
        <Outside>
          <PhoneInput error="Invalid number" {...refs} />
        </Outside>,
      );
      const ids = describedByIds(screen.getByRole("textbox"));
      expect(ids).toContain("ext-desc");
      expect(ids).toHaveLength(2);
    });
  });

  describe("口が無かった 3 部品", () => {
    const options = [
      { value: "a", label: "A" },
      { value: "b", label: "B" },
    ];
    const dataSource = [{ key: "1", title: "One" }];

    const cases: [string, string, (p: Record<string, unknown>) => React.ReactElement][] = [
      ["DateRangePicker", "group", (p) => <DateRangePicker {...p} />],
      [
        "SegmentedControl",
        "radiogroup",
        (p) => <SegmentedControl options={options} value="a" onChange={() => {}} {...p} />,
      ],
      ["Transfer", "group", (p) => <Transfer dataSource={dataSource} {...p} />],
    ];

    describe.each(cases)("%s", (_name, role, make) => {
      it("label も error も無いとき、外の見出しと説明文が名前と説明になる", () => {
        render(<Outside>{make(refs)}</Outside>);
        const group = screen.getByRole(role, { name: "Delivery window" });
        expect(group).toHaveAccessibleDescription("Shown to the courier.");
      });

      it("aria-label を渡すと、それが名前になる", () => {
        render(make({ "aria-label": "Delivery" }));
        expect(screen.getByRole(role, { name: "Delivery" })).toBeInTheDocument();
      });

      it("label があるときは、部品のラベルが名前のまま", () => {
        render(<Outside>{make({ ...refs, "aria-label": "Delivery", label: "Window" })}</Outside>);
        const group = screen.getByRole(role, { name: /Window/ });
        expect(group).not.toHaveAttribute("aria-label");
      });

      it("error があるときは、利用者の説明とエラーの両方が並ぶ", () => {
        render(<Outside>{make({ ...refs, error: "Required" })}</Outside>);
        const ids = describedByIds(screen.getByRole(role, { name: "Delivery window" }));
        expect(ids).toContain("ext-desc");
        expect(ids).toHaveLength(2);
      });
    });
  });
});
