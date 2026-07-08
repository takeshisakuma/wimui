import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import {
  useBreakpoint,
  useBreakpointUp,
  useBreakpointDown,
  BREAKPOINTS,
} from "./useBreakpoint";

type Listener = () => void;

const createMatchMediaMock = () => {
  const state = new Map<string, boolean>();
  const listeners = new Map<string, Set<Listener>>();

  const set = (query: string, matches: boolean) => {
    state.set(query, matches);
    listeners.get(query)?.forEach((l) => l());
  };

  // Emulate a viewport of the given width against min/max-width queries.
  const setWidth = (width: number) => {
    for (const [q, ls] of listeners) {
      const min = q.match(/min-width:\s*(\d+)px/);
      const max = q.match(/max-width:\s*(\d+)px/);
      let matches = state.get(q) ?? false;
      if (min) matches = width >= Number(min[1]);
      if (max) matches = width <= Number(max[1]);
      state.set(q, matches);
      ls.forEach((l) => l());
    }
  };

  const matchMedia = vi.fn((query: string) => ({
    get matches() {
      return state.get(query) ?? false;
    },
    media: query,
    addEventListener: (_: string, l: Listener) => {
      if (!listeners.has(query)) listeners.set(query, new Set());
      listeners.get(query)!.add(l);
    },
    removeEventListener: (_: string, l: Listener) => listeners.get(query)?.delete(l),
    addListener: (l: Listener) => {
      if (!listeners.has(query)) listeners.set(query, new Set());
      listeners.get(query)!.add(l);
    },
    removeListener: (l: Listener) => listeners.get(query)?.delete(l),
  } as unknown as MediaQueryList));

  return { matchMedia, set, setWidth };
};

describe("useBreakpoint hooks", () => {
  let mock: ReturnType<typeof createMatchMediaMock>;

  beforeEach(() => {
    mock = createMatchMediaMock();
    window.matchMedia = mock.matchMedia as unknown as typeof window.matchMedia;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("exposes breakpoint values matching the tokens", () => {
    expect(BREAKPOINTS).toEqual({ xs: 480, sm: 576, md: 768, lg: 992, xl: 1200 });
  });

  it("useBreakpointUp matches at or above the breakpoint", () => {
    mock.set(`(min-width: ${BREAKPOINTS.lg}px)`, true);
    const { result } = renderHook(() => useBreakpointUp("lg"));
    expect(result.current).toBe(true);
  });

  it("useBreakpointDown matches below the breakpoint", () => {
    mock.set(`(max-width: ${BREAKPOINTS.md}px)`, true);
    const { result } = renderHook(() => useBreakpointDown("md"));
    expect(result.current).toBe(true);
  });

  it("useBreakpoint resolves the active breakpoint and updates on resize", () => {
    const { result } = renderHook(() => useBreakpoint());
    act(() => mock.setWidth(320));
    expect(result.current).toBe("xs");
    act(() => mock.setWidth(800));
    expect(result.current).toBe("md");
    act(() => mock.setWidth(1400));
    expect(result.current).toBe("xl");
  });
});
