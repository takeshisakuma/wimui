import { renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useFixedColumns } from "./useFixedColumns";
import type { DataGridColumn } from "./DataGrid";

type Row = Record<string, unknown>;

describe("useFixedColumns", () => {
  // ── parsePixelWidth (internal, tested via hook behaviour) ──────────────

  it("returns empty offsets when no columns are fixed", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", width: "100px" },
      { key: "b", header: "B", width: "200px" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    expect(result.current.fixedLeftOffsets).toEqual({});
    expect(result.current.fixedRightOffsets).toEqual({});
  });

  it("first fixed-left column gets offset 0 (number) without selection", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", fixed: "left", width: "80px" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    expect(result.current.fixedLeftOffsets["a"].offset).toBe(0);
    expect(result.current.fixedLeftOffsets["a"].zIndex).toBe(20);
  });

  it("second fixed-left column accumulates offset from first", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", fixed: "left", width: "80px" },
      { key: "b", header: "B", fixed: "left", width: "120px" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    expect(result.current.fixedLeftOffsets["a"].offset).toBe(0);
    expect(result.current.fixedLeftOffsets["b"].offset).toBe("80px");
    // zIndex decrements
    expect(result.current.fixedLeftOffsets["a"].zIndex).toBe(20);
    expect(result.current.fixedLeftOffsets["b"].zIndex).toBe(19);
  });

  it("adds 48px for selection column when selection=true", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", fixed: "left", width: "100px" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, true));
    // first fixed-left starts at 48px (selection column)
    expect(result.current.fixedLeftOffsets["a"].offset).toBe("48px");
  });

  it("fixed: true is treated the same as fixed: 'left'", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", fixed: true, width: "60px" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    expect(result.current.fixedLeftOffsets["a"]).toBeDefined();
    expect(result.current.fixedRightOffsets["a"]).toBeUndefined();
  });

  it("fixed-right columns are processed right-to-left with offset 0 for the rightmost", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", width: "100px" },
      { key: "b", header: "B", fixed: "right", width: "80px" },
      { key: "c", header: "C", fixed: "right", width: "60px" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    // rightmost (c) gets offset 0; b gets 60px
    expect(result.current.fixedRightOffsets["c"].offset).toBe(0);
    expect(result.current.fixedRightOffsets["b"].offset).toBe("60px");
  });

  it("fixed-right zIndex decrements from rightmost to left", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "b", header: "B", fixed: "right", width: "80px" },
      { key: "c", header: "C", fixed: "right", width: "60px" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    expect(result.current.fixedRightOffsets["c"].zIndex).toBe(20);
    expect(result.current.fixedRightOffsets["b"].zIndex).toBe(19);
  });

  it("handles numeric width in fixed columns", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", fixed: "left", width: 100 },
      { key: "b", header: "B", fixed: "left", width: 150 },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    expect(result.current.fixedLeftOffsets["b"].offset).toBe("100px");
  });

  it("treats non-px string width as 0 (e.g., percentage)", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", fixed: "left", width: "20%" },
      { key: "b", header: "B", fixed: "left", width: "30%" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    // parsePixelWidth returns 0 for non-px strings, so b offset stays 0
    expect(result.current.fixedLeftOffsets["b"].offset).toBe(0);
  });

  it("handles undefined width in fixed columns as 0", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", fixed: "left" },
      { key: "b", header: "B", fixed: "left" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    expect(result.current.fixedLeftOffsets["a"].offset).toBe(0);
    // Second column: width undefined → parsePixelWidth returns 0 → offset stays 0
    expect(result.current.fixedLeftOffsets["b"].offset).toBe(0);
  });

  it("returns empty right offsets when no right-fixed columns exist", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", fixed: "left", width: "100px" },
    ];
    const { result } = renderHook(() => useFixedColumns(columns, false));
    expect(result.current.fixedRightOffsets).toEqual({});
  });

  it("handles empty columns array", () => {
    const { result } = renderHook(() => useFixedColumns([], false));
    expect(result.current.fixedLeftOffsets).toEqual({});
    expect(result.current.fixedRightOffsets).toEqual({});
  });

  it("memoizes: does not change reference when inputs are same", () => {
    const columns: DataGridColumn<Row>[] = [
      { key: "a", header: "A", fixed: "left", width: "100px" },
    ];
    const { result, rerender } = renderHook(
      ({ cols, sel }: { cols: DataGridColumn<Row>[]; sel: boolean }) =>
        useFixedColumns(cols, sel),
      { initialProps: { cols: columns, sel: false } },
    );
    const first = result.current;
    rerender({ cols: columns, sel: false });
    expect(result.current).toBe(first);
  });
});
