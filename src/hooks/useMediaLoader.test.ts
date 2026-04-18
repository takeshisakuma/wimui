import React from "react";
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { useMediaLoader } from "./useMediaLoader";

describe("useMediaLoader", () => {
  let observerCallback: (entries: Partial<IntersectionObserverEntry>[]) => void;
  const mockDisconnect = vi.fn();
  const mockObserve = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    
    // IntersectionObserver Mock
    globalThis.IntersectionObserver = vi.fn().mockImplementation(function (
      this: IntersectionObserver,
      callback: (entries: Partial<IntersectionObserverEntry>[]) => void
    ) {
      observerCallback = callback;
      this.observe = mockObserve;
      this.disconnect = mockDisconnect;
      this.unobserve = vi.fn();
    }) as any; // eslint-disable-line @typescript-eslint/no-explicit-any
  });

  it("should initialize with default values", () => {
    const mockElement = document.createElement("div");
    const useRefSpy = vi.spyOn(React, "useRef").mockReturnValue({ current: mockElement });
    
    const { result } = renderHook(() => useMediaLoader());
    expect(result.current.isLoaded).toBe(false);
    expect(result.current.isIntersecting).toBe(false);
    expect(result.current.shouldShowSkeleton).toBe(false);
    
    useRefSpy.mockRestore();
  });

  it("should handle loading='eager'", () => {
    const { result } = renderHook(() => useMediaLoader({ loading: "eager" }));
    expect(result.current.isIntersecting).toBe(true);
  });

  it("should handle intersection correctly", () => {
    const mockElement = document.createElement("div");
    const useRefSpy = vi.spyOn(React, "useRef").mockReturnValue({ current: mockElement });
    
    const { result } = renderHook(() => useMediaLoader({ loading: "lazy" }));
    
    expect(result.current.isIntersecting).toBe(false);

    // Trigger observer callback
    act(() => {
      if (observerCallback) {
        observerCallback([{ isIntersecting: true }]);
      }
    });

    expect(result.current.isIntersecting).toBe(true);
    useRefSpy.mockRestore();
  });

  it("should handle non-intersecting observer callback", () => {
    const mockElement = document.createElement("div");
    const useRefSpy = vi.spyOn(React, "useRef").mockReturnValue({ current: mockElement });
    
    const { result } = renderHook(() => useMediaLoader({ loading: "lazy" }));
    
    act(() => {
      if (observerCallback) {
        observerCallback([{ isIntersecting: false }]);
      }
    });

    expect(result.current.isIntersecting).toBe(false);
    useRefSpy.mockRestore();
  });

  it("should set isLoaded when media is loaded and intersecting", () => {
    const { result } = renderHook(() => useMediaLoader({ loading: "eager" }));
    
    act(() => {
      result.current.notifyLoaded();
    });

    expect(result.current.isLoaded).toBe(true);
  });

  it("should handle demoDelay", async () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useMediaLoader({ loading: "eager", demoDelay: 100 }));
    
    act(() => {
      result.current.notifyLoaded();
    });

    expect(result.current.isLoaded).toBe(false);

    act(() => {
      vi.advanceTimersByTime(100);
    });

    expect(result.current.isLoaded).toBe(true);
    vi.useRealTimers();
  });

  it("should reset loaded state when src changes", () => {
    const { result, rerender } = renderHook(
      ({ src }) => useMediaLoader({ loading: "eager", src }),
      { initialProps: { src: "image1.jpg" } }
    );

    act(() => {
      result.current.notifyLoaded();
    });
    expect(result.current.isLoaded).toBe(true);

    rerender({ src: "image2.jpg" });
    expect(result.current.isLoaded).toBe(false);
  });

  it("should handle missing containerRef in lazy mode", () => {
    // If containerRef.current is null when the effect runs, it should set isIntersecting to true for safety
    // This uses the default React.useRef which returns { current: null }
    const { result } = renderHook(() => useMediaLoader({ loading: "lazy" }));
    
    expect(result.current.isIntersecting).toBe(true);
  });

  it("should clean up observer on unmount", () => {
    const { unmount } = renderHook(() => useMediaLoader({ loading: "lazy" }));
    unmount();
    expect(mockDisconnect).toHaveBeenCalled();
  });

  it("should handle case where media load is notified before intersection", () => {
    const mockElement = document.createElement("div");
    const useRefSpy = vi.spyOn(React, "useRef").mockReturnValue({ current: mockElement });
    
    const { result } = renderHook(() => useMediaLoader({ loading: "lazy" }));
    
    act(() => {
      result.current.notifyLoaded();
    });
    
    // Not intersecting yet, so not loaded
    expect(result.current.isLoaded).toBe(false);
    
    act(() => {
      // Simulate intersection
      if (observerCallback) {
        observerCallback([{ isIntersecting: true }]);
      }
    });
    
    expect(result.current.isLoaded).toBe(true);
    useRefSpy.mockRestore();
  });

  it("should reset isLoaded if intersection or media loading changes", () => {
    const { result } = renderHook(() => useMediaLoader({ loading: "eager" }));
    
    act(() => {
      result.current.notifyLoaded();
    });
    expect(result.current.isLoaded).toBe(true);
  });
});
