import { describe, it, expect, vi } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useTableSort, getNextSortDirection } from "./useTableSort";

describe("getNextSortDirection", () => {
  it("cycles correctly", () => {
    expect(getNextSortDirection("none", true)).toBe("asc");
    expect(getNextSortDirection("asc", true)).toBe("desc");
    expect(getNextSortDirection("desc", true)).toBe("none");
  });

  it("resets to asc when key changes", () => {
    expect(getNextSortDirection("asc", false)).toBe("asc");
    expect(getNextSortDirection("desc", false)).toBe("asc");
  });
});

describe("useTableSort", () => {
  const data = [
    { id: 1, name: "Apple", price: 100 },
    { id: 2, name: "Banana", price: 50 },
    { id: 3, name: "Orange", price: 75 },
    { id: 4, name: null, price: undefined },
  ];

  it("returns initial data when no sort", () => {
    const { result } = renderHook(() => useTableSort(data));
    expect(result.current.sortedData).toEqual(data);
    expect(result.current.sortConfig).toEqual({ key: null, direction: "none" });
  });

  it("sorts strings increasingly", () => {
    const { result } = renderHook(() => useTableSort(data));
    
    act(() => {
      result.current.handleSort("name");
    });
    
    expect(result.current.sortConfig).toEqual({ key: "name", direction: "asc" });
    expect(result.current.sortedData[0].name).toBe("Apple");
    expect(result.current.sortedData[1].name).toBe("Banana");
    expect(result.current.sortedData[2].name).toBe("Orange");
  });

  it("sorts strings decreasingly", () => {
    const { result } = renderHook(() => useTableSort(data));
    
    act(() => {
      // First click: asc
      result.current.handleSort("name");
    });

    act(() => {
      // Second click: desc
      result.current.handleSort("name");
    });
    
    expect(result.current.sortConfig).toEqual({ key: "name", direction: "desc" });
    expect(result.current.sortedData[0].name).toBe("Orange");
    expect(result.current.sortedData[1].name).toBe("Banana");
    expect(result.current.sortedData[2].name).toBe("Apple");
  });

  it("sorts numbers", () => {
    const { result } = renderHook(() => useTableSort(data));
    
    act(() => {
      result.current.handleSort("price");
    });
    
    expect(result.current.sortedData[0].price).toBe(50);
    expect(result.current.sortedData[2].price).toBe(100);
  });

  it("handles null values (push to end)", () => {
    const { result } = renderHook(() => useTableSort(data));
    
    act(() => {
      result.current.handleSort("name");
    });
    
    // Apple, Banana, Orange, null
    expect(result.current.sortedData[3].name).toBeNull();
  });

  it("calls onSortChange", () => {
    const onSortChange = vi.fn();
    const { result } = renderHook(() => useTableSort(data, { onSortChange }));
    
    act(() => {
      result.current.handleSort("name");
    });
    
    expect(onSortChange).toHaveBeenCalledWith({ key: "name", direction: "asc" });
  });

  it("provides getSortDirection helper", () => {
    const { result } = renderHook(() => useTableSort(data));

    act(() => {
      result.current.handleSort("name");
    });

    expect(result.current.getSortDirection("name")).toBe("asc");
    expect(result.current.getSortDirection("price")).toBe("none");
  });

  it("respects initialSort", () => {
    const { result } = renderHook(() =>
      useTableSort(data, { initialSort: { key: "price", direction: "asc" } }),
    );

    expect(result.current.sortConfig).toEqual({ key: "price", direction: "asc" });
    expect(result.current.sortedData[0].price).toBe(50);
  });

  it("returns original order after the third click (none)", () => {
    const { result } = renderHook(() => useTableSort(data));

    act(() => result.current.handleSort("name"));
    act(() => result.current.handleSort("name"));
    act(() => result.current.handleSort("name"));

    expect(result.current.sortConfig.direction).toBe("none");
    expect(result.current.sortedData).toEqual(data);
  });

  it("sorts numbers decreasingly", () => {
    const { result } = renderHook(() => useTableSort(data));

    act(() => result.current.handleSort("price"));
    act(() => result.current.handleSort("price"));

    expect(result.current.sortConfig.direction).toBe("desc");
    expect(result.current.sortedData[0].price).toBe(100);
    expect(result.current.sortedData[2].price).toBe(50);
  });

  it("treats rows as equal when both values are null", () => {
    const nullRows = [
      { id: 1, tag: null },
      { id: 2, tag: null },
      { id: 3, tag: "a" },
    ];
    const { result } = renderHook(() => useTableSort(nullRows));

    act(() => result.current.handleSort("tag"));

    expect(result.current.sortedData[0].tag).toBe("a");
    expect(result.current.sortedData[1].tag).toBeNull();
    expect(result.current.sortedData[2].tag).toBeNull();
  });

  it("falls back to default comparison for non-string non-number values", () => {
    const dateRows = [
      { id: 1, created: new Date("2026-03-01") },
      { id: 2, created: new Date("2026-01-01") },
      { id: 3, created: new Date("2026-01-01") },
    ];
    const { result } = renderHook(() => useTableSort(dateRows));

    act(() => result.current.handleSort("created"));
    expect(result.current.sortedData[0].id).toBe(2);
    expect(result.current.sortedData[2].id).toBe(1);

    act(() => result.current.handleSort("created"));
    expect(result.current.sortConfig.direction).toBe("desc");
    expect(result.current.sortedData[0].id).toBe(1);
  });
});
