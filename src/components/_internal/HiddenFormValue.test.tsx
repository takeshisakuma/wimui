import React, { useState } from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, act } from "@testing-library/react";
import { HiddenFormValue } from "./HiddenFormValue";
import { Select } from "../form/Select/Select";
import { MultiSelect } from "../form/MultiSelect/MultiSelect";
import { Cascader } from "../form/Cascader/Cascader";
import { TreeSelect } from "../form/TreeSelect/TreeSelect";
import { Rating } from "../form/Rating/Rating";
import { SegmentedControl } from "../form/SegmentedControl/SegmentedControl";
import { TagInput } from "../form/TagInput/TagInput";
import { OtpInput } from "../form/OtpInput/OtpInput";
import { Slider } from "../form/Slider/Slider";
import { RangeSlider } from "../form/RangeSlider/RangeSlider";

// 素の <form> の送信の値（T427）。以前は 8 部品とも、name を渡しても FormData に何も入らなかった
const inForm = (ui: React.ReactNode) => {
  render(<form data-testid="form">{ui}</form>);
  const form = screen.getByTestId("form") as HTMLFormElement;
  return { form, data: () => new FormData(form) };
};
const reset = (form: HTMLFormElement) => act(() => form.reset());

const fruits = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Cherry", value: "cherry" },
];
const regions = [
  { label: "Asia", value: "asia", children: [{ label: "Japan", value: "japan", children: [{ label: "Tokyo", value: "tokyo" }] }] },
];
const tree = [{ label: "Parent", value: "parent", children: [{ label: "Child A", value: "a" }, { label: "Child B", value: "b" }] }];

describe("form values of components without a native input (T427)", () => {
  it("Select sends the selected value", () => {
    const { data } = inForm(<Select name="fruit" options={fruits} defaultValue="banana" />);
    expect(data().getAll("fruit")).toEqual(["banana"]);
  });

  it("MultiSelect sends each selected value", () => {
    const { data } = inForm(<MultiSelect name="fruits" options={fruits} defaultValue={["apple", "cherry"]} />);
    expect(data().getAll("fruits")).toEqual(["apple", "cherry"]);
  });

  it("Cascader sends the selected path, top level first", () => {
    const { data } = inForm(<Cascader name="region" options={regions} defaultValue={["asia", "japan", "tokyo"]} />);
    expect(data().getAll("region")).toEqual(["asia", "japan", "tokyo"]);
  });

  it("TreeSelect sends the value, and each value when multiple", () => {
    const { data } = inForm(
      <>
        <TreeSelect name="one" treeData={tree} value="a" onChange={() => {}} />
        <TreeSelect name="many" treeData={tree} multiple value={["a", "b"]} onChange={() => {}} />
      </>,
    );
    expect(data().getAll("one")).toEqual(["a"]);
    expect(data().getAll("many")).toEqual(["a", "b"]);
  });

  it("Rating sends the rating", () => {
    const { data } = inForm(<Rating name="stars" defaultValue={4} />);
    expect(data().getAll("stars")).toEqual(["4"]);
  });

  it("SegmentedControl sends the selected value", () => {
    const { data } = inForm(<SegmentedControl name="view" options={[{ label: "List", value: "list" }, { label: "Grid", value: "grid" }]} value="grid" onChange={() => {}} />);
    expect(data().getAll("view")).toEqual(["grid"]);
  });

  it("TagInput sends each tag, and not the text still being typed", () => {
    const { data } = inForm(<TagInput name="tags" defaultValue={["react", "design"]} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "draft" } });
    expect(data().getAll("tags")).toEqual(["react", "design"]);
  });

  it("OtpInput sends the whole code as one value", () => {
    const { data } = inForm(<OtpInput name="code" length={4} value="1234" onChange={() => {}} />);
    expect(data().getAll("code")).toEqual(["1234"]);
  });

  it("sends nothing from a disabled component", () => {
    const { data } = inForm(<Select name="fruit" options={fruits} defaultValue="banana" disabled />);
    expect(data().getAll("fruit")).toEqual([]);
  });
});

describe("form reset restores the default (T427)", () => {
  it("Rating", () => {
    const { form, data } = inForm(<Rating name="stars" defaultValue={2} />);
    fireEvent.click(screen.getAllByRole("radio")[4]);
    expect(data().get("stars")).toBe("5");
    reset(form);
    expect(data().get("stars")).toBe("2");
  });

  it("TagInput", () => {
    const { form, data } = inForm(<TagInput name="tags" defaultValue={["react"]} />);
    fireEvent.change(screen.getByRole("textbox"), { target: { value: "vue" } });
    fireEvent.keyDown(screen.getByRole("textbox"), { key: "Enter" });
    expect(data().getAll("tags")).toEqual(["react", "vue"]);
    reset(form);
    expect(data().getAll("tags")).toEqual(["react"]);
    expect(screen.getByText("react")).toBeInTheDocument();
    expect(screen.queryByText("vue")).not.toBeInTheDocument();
  });

  // 以前は、reset のあとも動かしたままの値と位置に残っていた
  it("Slider", () => {
    const { form, data } = inForm(<Slider name="volume" defaultValue={30} />);
    const thumb = screen.getByRole("slider");
    fireEvent.keyDown(thumb, { key: "PageUp" });
    expect(data().get("volume")).not.toBe("30");
    reset(form);
    expect(data().get("volume")).toBe("30");
    expect(thumb).toHaveAttribute("aria-valuenow", "30");
  });

  it("RangeSlider", () => {
    const { form, data } = inForm(<RangeSlider name="price" defaultValue={[20, 80]} />);
    fireEvent.keyDown(screen.getAllByRole("slider")[0], { key: "PageUp" });
    expect(data().get("price-min")).not.toBe("20");
    reset(form);
    expect(data().get("price-min")).toBe("20");
    expect(data().get("price-max")).toBe("80");
  });

  it("leaves a controlled value to its owner", () => {
    const Controlled = () => {
      const [v, setV] = useState("cherry");
      return <Select name="fruit" options={fruits} value={v} onChange={setV} />;
    };
    const { form, data } = inForm(<Controlled />);
    reset(form);
    expect(data().get("fruit")).toBe("cherry");
  });
});

describe("HiddenFormValue", () => {
  it("renders nothing without a name", () => {
    const { container } = render(<HiddenFormValue value="x" />);
    expect(container).toBeEmptyDOMElement();
  });

  it("sends nothing for an empty list and an empty string for no single value", () => {
    const { data } = inForm(
      <>
        <HiddenFormValue name="many" value={[]} />
        <HiddenFormValue name="one" value={undefined} />
      </>,
    );
    expect(data().getAll("many")).toEqual([]);
    expect(data().getAll("one")).toEqual([""]);
  });

  it("calls onReset when the surrounding form resets", () => {
    let calls = 0;
    const { form } = inForm(<HiddenFormValue name="x" value="1" onReset={() => calls++} />);
    reset(form);
    expect(calls).toBe(1);
  });
});
