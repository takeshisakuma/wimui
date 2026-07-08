import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, beforeEach, afterEach, vi } from "vitest";
import { useMediaQuery } from "./useMediaQuery";

type Listener = () => void;

/**
 * A controllable window.matchMedia mock. `set(query, matches)` flips the result
 * for a query and notifies its listeners, emulating a viewport change.
 */
const createMatchMediaMock = () => {
  const state = new Map<string, boolean>();
  const listeners = new Map<string, Set<Listener>>();

  const set = (query: string, matches: boolean) => {
    state.set(query, matches);
    listeners.get(query)?.forEach((l) => l());
  };

  const matchMedia = vi.fn((query: string) => {
    const mql = {
      get matches() {
        return state.get(query) ?? false;
      },
      media: query,
      addEventListener: (_: string, l: Listener) => {
        if (!listeners.has(query)) listeners.set(query, new Set());
        listeners.get(query)!.add(l);
      },
      removeEventListener: (_: string, l: Listener) => {
        listeners.get(query)?.delete(l);
      },
      addListener: (l: Listener) => {
        if (!listeners.has(query)) listeners.set(query, new Set());
        listeners.get(query)!.add(l);
      },
      removeListener: (l: Listener) => {
        listeners.get(query)?.delete(l);
      },
    };
    return mql as unknown as MediaQueryList;
  });

  return { matchMedia, set };
};

describe("useMediaQuery", () => {
  let mock: ReturnType<typeof createMatchMediaMock>;

  beforeEach(() => {
    mock = createMatchMediaMock();
    vi.stubGlobal("matchMedia", mock.matchMedia);
    window.matchMedia = mock.matchMedia as unknown as typeof window.matchMedia;
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("returns the initial match state", () => {
    mock.set("(min-width: 768px)", true);
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(true);
  });

  it("returns false when the query does not match", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(false);
  });

  it("updates when the query result changes", () => {
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));
    expect(result.current).toBe(false);
    act(() => mock.set("(min-width: 768px)", true));
    expect(result.current).toBe(true);
  });

  it("falls back to defaultState when matchMedia is unavailable", () => {
    vi.stubGlobal("matchMedia", undefined);
    // @ts-expect-error simulate an environment without matchMedia
    window.matchMedia = undefined;
    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)", true));
    expect(result.current).toBe(true);
  });
});
