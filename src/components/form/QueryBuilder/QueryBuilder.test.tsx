import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeAll, afterAll } from "vitest";
import { QueryBuilder, QueryBuilderProps, QueryGroup, QueryRule } from "./QueryBuilder";
import { resetQueryBuilderWarnings } from "./warn-unknown-operator";
import styles from "./querybuilder.module.scss";
import { act } from "@testing-library/react";

const fields: QueryBuilderProps["fields"] = [
  { name: "firstName", label: "First Name", type: "string" },
  { name: "age", label: "Age", type: "number" },
  { name: "birthday", label: "Birthday", type: "date" },
  { name: "isActive", label: "Is Active", type: "boolean" },
];

const makeGroup = (overrides?: Partial<QueryGroup>): QueryGroup => ({
  id: "root",
  combinator: "and",
  not: false,
  rules: [],
  ...overrides,
});

const originalRAF = window.requestAnimationFrame;

const renderQB = async (props: Partial<QueryBuilderProps>) => {
  let result: ReturnType<typeof render> = null!;
  await act(async () => {
    result = render(<QueryBuilder fields={fields} {...props} />);
  });
  // Flush any trailing updates (RAF, MutationObserver)
  await act(async () => {
    await new Promise(r => setTimeout(r, 0));
  });
  return result;
};

describe("QueryBuilder", () => {
  beforeAll(() => {
    window.requestAnimationFrame = (cb) => {
      cb(0);
      return 0;
    };
  });

  afterAll(() => {
    window.requestAnimationFrame = originalRAF;
  });

  // ─── Basic rendering ─────────────────────────────────────────────────────────

  it("renders the query builder region", async () => {
    await renderQB({});
    expect(screen.getByRole("region", { name: "Query Builder" })).toBeInTheDocument();
  });

  it("renders AND/OR combinator buttons", async () => {
    await renderQB({});
    expect(screen.getByText("AND")).toBeInTheDocument();
    expect(screen.getByText("OR")).toBeInTheDocument();
  });

  it("renders NOT switch", async () => {
    await renderQB({});
    expect(screen.getByRole("switch", { name: "NOT" })).toBeInTheDocument();
  });

  it("renders Add rule and Add group buttons", async () => {
    await renderQB({});
    expect(screen.getByText("Add rule")).toBeInTheDocument();
    expect(screen.getByText("Add group")).toBeInTheDocument();
  });

  it("applies custom id", async () => {
    await renderQB({ id: "my-qb" });
    expect(screen.getByRole("region")).toHaveAttribute("id", "my-qb");
  });

  it("applies custom className", async () => {
    const { container } = await renderQB({ className: "custom" });
    expect(container.querySelector(`.${styles.root}.custom`)).toBeInTheDocument();
  });

  // ─── Add / remove rules ───────────────────────────────────────────────────────

  it("adds a rule when Add rule is clicked (uncontrolled)", async () => {
    await renderQB({});
    expect(screen.queryByRole("group", { name: "Rule" })).not.toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByText("Add rule"));
    });

    expect(screen.getByRole("group", { name: "Rule" })).toBeInTheDocument();
  });

  it("calls onChange with a new rule when Add rule is clicked (controlled)", async () => {
    const onChange = vi.fn();
    const query = makeGroup();
    await renderQB({ query, onChange });

    act(() => {
      fireEvent.click(screen.getByText("Add rule"));
    });

    expect(onChange).toHaveBeenCalledOnce();
    const newQuery: QueryGroup = onChange.mock.calls[0][0];
    expect(newQuery.rules).toHaveLength(1);
    expect((newQuery.rules[0] as { field: string }).field).toBe("firstName");
  });

  it("removes a rule when the remove button is clicked (uncontrolled)", async () => {
    await renderQB({});
    act(() => {
      fireEvent.click(screen.getByText("Add rule"));
    });
    expect(screen.getByRole("group", { name: "Rule" })).toBeInTheDocument();

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Remove" }));
    });
    expect(screen.queryByRole("group", { name: "Rule" })).not.toBeInTheDocument();
  });

  it("calls onChange with rule removed (controlled)", async () => {
    const onChange = vi.fn();
    const existingRule = { id: "r1", field: "firstName", operator: "=", value: "" } as const;
    const query = makeGroup({ rules: [existingRule] });
    await renderQB({ query, onChange });

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: "Remove" }));
    });

    expect(onChange).toHaveBeenCalledOnce();
    const newQuery: QueryGroup = onChange.mock.calls[0][0];
    expect(newQuery.rules).toHaveLength(0);
  });

  // ─── Add / remove groups ──────────────────────────────────────────────────────

  it("adds a nested group when Add group is clicked (uncontrolled)", async () => {
    await renderQB({});
    await act(async () => {
      fireEvent.click(screen.getByText("Add group"));
      await new Promise(r => setTimeout(r, 0));
    });

    // After adding a group, a "Remove group" button appears for the nested group
    expect(screen.getByRole("button", { name: "Remove group" })).toBeInTheDocument();
  });

  it("calls onChange with a nested group when Add group is clicked (controlled)", async () => {
    const onChange = vi.fn();
    const query = makeGroup();
    await renderQB({ query, onChange });

    act(() => {
      fireEvent.click(screen.getByText("Add group"));
    });

    expect(onChange).toHaveBeenCalledOnce();
    const newQuery: QueryGroup = onChange.mock.calls[0][0];
    expect(newQuery.rules).toHaveLength(1);
    expect("rules" in newQuery.rules[0]).toBe(true);
  });

  it("removes a nested group when the remove button is clicked", async () => {
    await renderQB({});
    act(() => {
      fireEvent.click(screen.getByText("Add group"));
    });
    expect(screen.getByRole("button", { name: "Remove group" })).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(screen.getByRole("button", { name: "Remove group" }));
      await new Promise(r => setTimeout(r, 0));
    });
    expect(screen.queryByRole("button", { name: "Remove group" })).not.toBeInTheDocument();
  });

  // ─── maxDepth ─────────────────────────────────────────────────────────────────

  it("hides Add group button at maxDepth=0", async () => {
    await renderQB({ maxDepth: 0 });
    expect(screen.queryByText("Add group")).not.toBeInTheDocument();
  });

  // ─── Combinator (AND / OR) ────────────────────────────────────────────────────

  it("switches combinator to OR when OR is clicked (uncontrolled)", async () => {
    await renderQB({});
    await act(async () => {
      fireEvent.click(screen.getByText("OR"));
      await new Promise(r => setTimeout(r, 0));
    });

    const groups = screen.getAllByRole("group");
    const orGroup = groups.find((g) => g.getAttribute("aria-label") === "OR group");
    expect(orGroup).toBeInTheDocument();
  });

  it("calls onChange with combinator='or' when OR is clicked (controlled)", async () => {
    const onChange = vi.fn();
    await renderQB({ query: makeGroup(), onChange });

    await act(async () => {
      fireEvent.click(screen.getByText("OR"));
      await new Promise(r => setTimeout(r, 0));
    });

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].combinator).toBe("or");
  });

  it("calls onChange with combinator='and' when AND is clicked (controlled)", async () => {
    const onChange = vi.fn();
    await renderQB({ query: makeGroup({ combinator: "or" }), onChange });

    await act(async () => {
      fireEvent.click(screen.getByText("AND"));
      await new Promise(r => setTimeout(r, 0));
    });

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].combinator).toBe("and");
  });

  // ─── NOT toggle ───────────────────────────────────────────────────────────────

  it("toggles NOT on when the NOT switch is clicked (uncontrolled)", async () => {
    await renderQB({});
    const notSwitch = screen.getByRole("switch", { name: "NOT" });
    expect(notSwitch).not.toBeChecked();

    act(() => {
      fireEvent.click(notSwitch);
    });

    expect(notSwitch).toBeChecked();
  });

  it("calls onChange with not=true when NOT is toggled on (controlled)", async () => {
    const onChange = vi.fn();
    await renderQB({ query: makeGroup({ not: false }), onChange });

    act(() => {
      fireEvent.click(screen.getByRole("switch", { name: "NOT" }));
    });

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].not).toBe(true);
  });

  it("calls onChange with not=false when NOT is toggled off (controlled)", async () => {
    const onChange = vi.fn();
    await renderQB({ query: makeGroup({ not: true }), onChange });

    act(() => {
      fireEvent.click(screen.getByRole("switch", { name: "NOT" }));
    });

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].not).toBe(false);
  });

  // ─── Rule field selectors ─────────────────────────────────────────────────────

  it("renders field and operator comboboxes for a rule", async () => {
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }) });

    expect(screen.getByRole("combobox", { name: "Field" })).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "Operator" })).toBeInTheDocument();
  });

  it("renders string value text input for string field", async () => {
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }) });

    expect(screen.getByRole("textbox", { name: "Value" })).toBeInTheDocument();
  });

  it("calls onChange with updated value when text input changes", async () => {
    const onChange = vi.fn();
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }), onChange });

    act(() => {
      fireEvent.change(screen.getByRole("textbox", { name: "Value" }), {
        target: { value: "Alice" },
      });
    });

    expect(onChange).toHaveBeenCalledOnce();
    const updatedRule = onChange.mock.calls[0][0].rules[0] as { value: string };
    expect(updatedRule.value).toBe("Alice");
  });

  it("calls onChange with updated field when a different field is selected", async () => {
    const onChange = vi.fn();
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }), onChange });

    // Open field combobox and click "Age"
    act(() => {
      fireEvent.click(screen.getByRole("combobox", { name: "Field" }));
    });
    act(() => {
      fireEvent.click(screen.getByRole("option", { name: "Age" }));
    });

    expect(onChange).toHaveBeenCalledOnce();
    const updatedRule = onChange.mock.calls[0][0].rules[0] as { field: string };
    expect(updatedRule.field).toBe("age");
  });

  it("calls onChange with updated operator when a different operator is selected", async () => {
    const onChange = vi.fn();
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }), onChange });

    // Open operator combobox and click "Contains"
    act(() => {
      fireEvent.click(screen.getByRole("combobox", { name: "Operator" }));
    });
    act(() => {
      fireEvent.click(screen.getByRole("option", { name: "Contains" }));
    });

    expect(onChange).toHaveBeenCalledOnce();
    const updatedRule = onChange.mock.calls[0][0].rules[0] as { operator: string };
    expect(updatedRule.operator).toBe("contains");
  });

  // ─── Unary operators (no value field) ────────────────────────────────────────

  it("hides value input for is_null operator", async () => {
    const rule = { id: "r1", field: "firstName", operator: "is_null", value: null } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }) });

    expect(screen.queryByRole("textbox", { name: "Value" })).not.toBeInTheDocument();
  });

  it("hides value input for is_not_null operator", async () => {
    const rule = { id: "r1", field: "firstName", operator: "is_not_null", value: null } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }) });

    expect(screen.queryByRole("textbox", { name: "Value" })).not.toBeInTheDocument();
  });

  // ─── Field type: number ───────────────────────────────────────────────────────

  it("renders number input for number field", async () => {
    const rule = { id: "r1", field: "age", operator: "=", value: "" } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }) });

    expect(screen.getByRole("spinbutton", { name: "Value" })).toBeInTheDocument();
  });

  // ─── Field type: boolean ──────────────────────────────────────────────────────

  it("renders true/false select for boolean field", async () => {
    const rule = { id: "r1", field: "isActive", operator: "=", value: false } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }) });

    expect(screen.getByRole("combobox", { name: "Value" })).toBeInTheDocument();
  });

  it("calls onChange with boolean true when True option is selected", async () => {
    const onChange = vi.fn();
    const rule = { id: "r1", field: "isActive", operator: "=", value: false } as const;
    await renderQB({ query: makeGroup({ rules: [rule] }), onChange });

    act(() => {
      fireEvent.click(screen.getByRole("combobox", { name: "Value" }));
    });
    act(() => {
      fireEvent.click(screen.getByRole("option", { name: "True" }));
    });

    expect(onChange).toHaveBeenCalledOnce();
    const updatedRule = onChange.mock.calls[0][0].rules[0] as { value: boolean };
    expect(updatedRule.value).toBe(true);
  });

  // ─── Multiple rules ───────────────────────────────────────────────────────────

  it("renders multiple rules independently", async () => {
    const query = makeGroup({
      rules: [
        { id: "r1", field: "firstName", operator: "=", value: "Alice" },
        { id: "r2", field: "age", operator: ">", value: 18 },
      ],
    });
    await renderQB({ query });

    expect(screen.getAllByRole("group", { name: "Rule" })).toHaveLength(2);
  });

  // ─── defaultQuery (uncontrolled initialisation) ───────────────────────────────

  it("initialises from defaultQuery", async () => {
    const defaultQuery = makeGroup({
      combinator: "or",
      rules: [{ id: "r1", field: "firstName", operator: "=", value: "Bob" }],
    });
    await renderQB({ defaultQuery });

    expect(screen.getByRole("group", { name: "OR group" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Rule" })).toBeInTheDocument();
  });
// T124: 語彙の外の operator は Select に選択肢が無く、空のまま黙って描画されていた。
  describe("unknown operator", () => {
    it("warns in development, naming the accepted values", async () => {
      resetQueryBuilderWarnings();
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      // 型では書けないので、型を通らない経路（JS / 保存済みクエリ）を模す
      const rule = { id: "r1", field: "age", operator: "greater_equal", value: 2 } as unknown as QueryRule;
      await renderQB({ query: makeGroup({ rules: [rule] }) });
      expect(warn).toHaveBeenCalledTimes(1);
      const message = warn.mock.calls[0][0] as string;
      expect(message).toContain("greater_equal");
      expect(message).toContain(">=");
      warn.mockRestore();
    });

    it("stays quiet for an operator that is in the vocabulary", async () => {
      resetQueryBuilderWarnings();
      const warn = vi.spyOn(console, "warn").mockImplementation(() => {});
      const rule = { id: "r1", field: "age", operator: ">=", value: 2 } as const;
      await renderQB({ query: makeGroup({ rules: [rule] }) });
      expect(warn).not.toHaveBeenCalled();
      warn.mockRestore();
    });
  });
});
