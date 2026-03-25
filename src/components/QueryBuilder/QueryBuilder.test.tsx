import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { QueryBuilder, QueryBuilderProps, QueryGroup } from "./QueryBuilder";

const fields: QueryBuilderProps["fields"] = [
  { name: "firstName", label: "query_builder.field_first_name", type: "string" },
  { name: "age", label: "query_builder.field_age", type: "number" },
  { name: "birthday", label: "query_builder.field_birthday", type: "date" },
  { name: "isActive", label: "query_builder.field_is_active", type: "boolean" },
];

const makeGroup = (overrides?: Partial<QueryGroup>): QueryGroup => ({
  id: "root",
  combinator: "and",
  not: false,
  rules: [],
  ...overrides,
});

describe("QueryBuilder", () => {
  // ─── Basic rendering ─────────────────────────────────────────────────────────

  it("renders the query builder region", () => {
    render(<QueryBuilder fields={fields} />);
    expect(screen.getByRole("region", { name: "Query Builder" })).toBeInTheDocument();
  });

  it("renders AND/OR combinator buttons", () => {
    render(<QueryBuilder fields={fields} />);
    expect(screen.getByText("AND")).toBeInTheDocument();
    expect(screen.getByText("OR")).toBeInTheDocument();
  });

  it("renders NOT switch", () => {
    render(<QueryBuilder fields={fields} />);
    expect(screen.getByRole("switch", { name: "NOT" })).toBeInTheDocument();
  });

  it("renders Add rule and Add group buttons", () => {
    render(<QueryBuilder fields={fields} />);
    expect(screen.getByText("Add rule")).toBeInTheDocument();
    expect(screen.getByText("Add group")).toBeInTheDocument();
  });

  it("applies custom id", () => {
    const { container } = render(<QueryBuilder fields={fields} id="my-qb" />);
    expect(container.querySelector("#my-qb")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(<QueryBuilder fields={fields} className="custom" />);
    expect(container.querySelector(".wim-query-builder.custom")).toBeInTheDocument();
  });

  // ─── Add / remove rules ───────────────────────────────────────────────────────

  it("adds a rule when Add rule is clicked (uncontrolled)", () => {
    render(<QueryBuilder fields={fields} />);
    expect(screen.queryByRole("group", { name: "Rule" })).not.toBeInTheDocument();

    fireEvent.click(screen.getByText("Add rule"));

    expect(screen.getByRole("group", { name: "Rule" })).toBeInTheDocument();
  });

  it("calls onChange with a new rule when Add rule is clicked (controlled)", () => {
    const onChange = vi.fn();
    const query = makeGroup();
    render(<QueryBuilder fields={fields} query={query} onChange={onChange} />);

    fireEvent.click(screen.getByText("Add rule"));

    expect(onChange).toHaveBeenCalledOnce();
    const newQuery: QueryGroup = onChange.mock.calls[0][0];
    expect(newQuery.rules).toHaveLength(1);
    expect((newQuery.rules[0] as { field: string }).field).toBe("firstName");
  });

  it("removes a rule when the remove button is clicked (uncontrolled)", () => {
    render(<QueryBuilder fields={fields} />);
    fireEvent.click(screen.getByText("Add rule"));
    expect(screen.getByRole("group", { name: "Rule" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Remove" }));
    expect(screen.queryByRole("group", { name: "Rule" })).not.toBeInTheDocument();
  });

  it("calls onChange with rule removed (controlled)", () => {
    const onChange = vi.fn();
    const existingRule = { id: "r1", field: "firstName", operator: "=", value: "" };
    const query = makeGroup({ rules: [existingRule] });
    render(<QueryBuilder fields={fields} query={query} onChange={onChange} />);

    fireEvent.click(screen.getByRole("button", { name: "Remove" }));

    expect(onChange).toHaveBeenCalledOnce();
    const newQuery: QueryGroup = onChange.mock.calls[0][0];
    expect(newQuery.rules).toHaveLength(0);
  });

  // ─── Add / remove groups ──────────────────────────────────────────────────────

  it("adds a nested group when Add group is clicked (uncontrolled)", () => {
    render(<QueryBuilder fields={fields} />);
    fireEvent.click(screen.getByText("Add group"));

    // After adding a group, a "Remove group" button appears for the nested group
    expect(screen.getByRole("button", { name: "Remove group" })).toBeInTheDocument();
  });

  it("calls onChange with a nested group when Add group is clicked (controlled)", () => {
    const onChange = vi.fn();
    const query = makeGroup();
    render(<QueryBuilder fields={fields} query={query} onChange={onChange} />);

    fireEvent.click(screen.getByText("Add group"));

    expect(onChange).toHaveBeenCalledOnce();
    const newQuery: QueryGroup = onChange.mock.calls[0][0];
    expect(newQuery.rules).toHaveLength(1);
    expect("rules" in newQuery.rules[0]).toBe(true);
  });

  it("removes a nested group when the remove button is clicked", () => {
    render(<QueryBuilder fields={fields} />);
    fireEvent.click(screen.getByText("Add group"));
    expect(screen.getByRole("button", { name: "Remove group" })).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Remove group" }));
    expect(screen.queryByRole("button", { name: "Remove group" })).not.toBeInTheDocument();
  });

  // ─── maxDepth ─────────────────────────────────────────────────────────────────

  it("hides Add group button at maxDepth=0", () => {
    render(<QueryBuilder fields={fields} maxDepth={0} />);
    expect(screen.queryByText("Add group")).not.toBeInTheDocument();
  });

  // ─── Combinator (AND / OR) ────────────────────────────────────────────────────

  it("switches combinator to OR when OR is clicked (uncontrolled)", () => {
    render(<QueryBuilder fields={fields} />);
    fireEvent.click(screen.getByText("OR"));

    const groups = screen.getAllByRole("group");
    const orGroup = groups.find((g) => g.getAttribute("aria-label") === "OR group");
    expect(orGroup).toBeInTheDocument();
  });

  it("calls onChange with combinator='or' when OR is clicked (controlled)", () => {
    const onChange = vi.fn();
    render(<QueryBuilder fields={fields} query={makeGroup()} onChange={onChange} />);

    fireEvent.click(screen.getByText("OR"));

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].combinator).toBe("or");
  });

  it("calls onChange with combinator='and' when AND is clicked (controlled)", () => {
    const onChange = vi.fn();
    render(<QueryBuilder fields={fields} query={makeGroup({ combinator: "or" })} onChange={onChange} />);

    fireEvent.click(screen.getByText("AND"));

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].combinator).toBe("and");
  });

  // ─── NOT toggle ───────────────────────────────────────────────────────────────

  it("toggles NOT on when the NOT switch is clicked (uncontrolled)", () => {
    render(<QueryBuilder fields={fields} />);
    const notSwitch = screen.getByRole("switch", { name: "NOT" });
    expect(notSwitch).not.toBeChecked();

    fireEvent.click(notSwitch);

    expect(notSwitch).toBeChecked();
  });

  it("calls onChange with not=true when NOT is toggled on (controlled)", () => {
    const onChange = vi.fn();
    render(<QueryBuilder fields={fields} query={makeGroup({ not: false })} onChange={onChange} />);

    fireEvent.click(screen.getByRole("switch", { name: "NOT" }));

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].not).toBe(true);
  });

  it("calls onChange with not=false when NOT is toggled off (controlled)", () => {
    const onChange = vi.fn();
    render(<QueryBuilder fields={fields} query={makeGroup({ not: true })} onChange={onChange} />);

    fireEvent.click(screen.getByRole("switch", { name: "NOT" }));

    expect(onChange).toHaveBeenCalledOnce();
    expect(onChange.mock.calls[0][0].not).toBe(false);
  });

  // ─── Rule field selectors ─────────────────────────────────────────────────────

  it("renders field and operator comboboxes for a rule", () => {
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} />);

    expect(screen.getByRole("combobox", { name: "Field" })).toBeInTheDocument();
    expect(screen.getByRole("combobox", { name: "Operator" })).toBeInTheDocument();
  });

  it("renders string value text input for string field", () => {
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} />);

    expect(screen.getByRole("textbox", { name: "Value" })).toBeInTheDocument();
  });

  it("calls onChange with updated value when text input changes", () => {
    const onChange = vi.fn();
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} onChange={onChange} />);

    fireEvent.change(screen.getByRole("textbox", { name: "Value" }), {
      target: { value: "Alice" },
    });

    expect(onChange).toHaveBeenCalledOnce();
    const updatedRule = onChange.mock.calls[0][0].rules[0] as { value: string };
    expect(updatedRule.value).toBe("Alice");
  });

  it("calls onChange with updated field when a different field is selected", () => {
    const onChange = vi.fn();
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} onChange={onChange} />);

    // Open field combobox and click "Age"
    fireEvent.click(screen.getByRole("combobox", { name: "Field" }));
    fireEvent.click(screen.getByRole("option", { name: "Age" }));

    expect(onChange).toHaveBeenCalledOnce();
    const updatedRule = onChange.mock.calls[0][0].rules[0] as { field: string };
    expect(updatedRule.field).toBe("age");
  });

  it("calls onChange with updated operator when a different operator is selected", () => {
    const onChange = vi.fn();
    const rule = { id: "r1", field: "firstName", operator: "=", value: "" };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} onChange={onChange} />);

    // Open operator combobox and click "Contains"
    fireEvent.click(screen.getByRole("combobox", { name: "Operator" }));
    fireEvent.click(screen.getByRole("option", { name: "Contains" }));

    expect(onChange).toHaveBeenCalledOnce();
    const updatedRule = onChange.mock.calls[0][0].rules[0] as { operator: string };
    expect(updatedRule.operator).toBe("contains");
  });

  // ─── Unary operators (no value field) ────────────────────────────────────────

  it("hides value input for is_null operator", () => {
    const rule = { id: "r1", field: "firstName", operator: "is_null", value: null };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} />);

    expect(screen.queryByRole("textbox", { name: "Value" })).not.toBeInTheDocument();
  });

  it("hides value input for is_not_null operator", () => {
    const rule = { id: "r1", field: "firstName", operator: "is_not_null", value: null };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} />);

    expect(screen.queryByRole("textbox", { name: "Value" })).not.toBeInTheDocument();
  });

  // ─── Field type: number ───────────────────────────────────────────────────────

  it("renders number input for number field", () => {
    const rule = { id: "r1", field: "age", operator: "=", value: "" };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} />);

    expect(screen.getByRole("spinbutton", { name: "Value" })).toBeInTheDocument();
  });

  // ─── Field type: boolean ──────────────────────────────────────────────────────

  it("renders true/false selectbox for boolean field", () => {
    const rule = { id: "r1", field: "isActive", operator: "=", value: false };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} />);

    expect(screen.getByRole("combobox", { name: "Value" })).toBeInTheDocument();
  });

  it("calls onChange with boolean true when True option is selected", () => {
    const onChange = vi.fn();
    const rule = { id: "r1", field: "isActive", operator: "=", value: false };
    render(<QueryBuilder fields={fields} query={makeGroup({ rules: [rule] })} onChange={onChange} />);

    fireEvent.click(screen.getByRole("combobox", { name: "Value" }));
    fireEvent.click(screen.getByRole("option", { name: "True" }));

    expect(onChange).toHaveBeenCalledOnce();
    const updatedRule = onChange.mock.calls[0][0].rules[0] as { value: boolean };
    expect(updatedRule.value).toBe(true);
  });

  // ─── Multiple rules ───────────────────────────────────────────────────────────

  it("renders multiple rules independently", () => {
    const query = makeGroup({
      rules: [
        { id: "r1", field: "firstName", operator: "=", value: "Alice" },
        { id: "r2", field: "age", operator: ">", value: 18 },
      ],
    });
    render(<QueryBuilder fields={fields} query={query} />);

    expect(screen.getAllByRole("group", { name: "Rule" })).toHaveLength(2);
  });

  // ─── defaultQuery (uncontrolled initialisation) ───────────────────────────────

  it("initialises from defaultQuery", () => {
    const defaultQuery = makeGroup({
      combinator: "or",
      rules: [{ id: "r1", field: "firstName", operator: "=", value: "Bob" }],
    });
    render(<QueryBuilder fields={fields} defaultQuery={defaultQuery} />);

    expect(screen.getByRole("group", { name: "OR group" })).toBeInTheDocument();
    expect(screen.getByRole("group", { name: "Rule" })).toBeInTheDocument();
  });
});
