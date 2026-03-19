import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, waitFor, act } from "@testing-library/react";
import { useAudioMetadata } from "./useAudioMetadata";

// Mock jsmediatags
const mockRead = vi.fn((src, callbacks) => {
  callbacks.onSuccess({
    tags: {
      title: "Parsed Title",
      artist: "Parsed Artist",
      picture: {
        data: [72, 101, 108, 108, 111], // "Hello"
        format: "image/png",
      },
    },
  });
});

vi.mock("jsmediatags/build2/jsmediatags.js", () => ({
  default: {
    read: (...args: Parameters<typeof mockRead>) => mockRead(...args),
  },
}));

describe("useAudioMetadata", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("sets metadata from currentTrack immediately", () => {
    const currentTrack = {
      src: "test.mp3",
      title: "Track Title",
      artist: "Track Artist",
      coverArt: "cover.jpg",
    };
    const { result } = renderHook(() =>
      useAudioMetadata({ currentTrack, showMetadata: true }),
    );

    expect(result.current.metaTitle).toBe("Track Title");
    expect(result.current.metaArtist).toBe("Track Artist");
    expect(result.current.metaCover).toBe("cover.jpg");
  });

  it("handles null currentTrack", () => {
    const { result } = renderHook(() =>
      useAudioMetadata({ currentTrack: null, showMetadata: true }),
    );

    expect(result.current.metaTitle).toBe("");
    expect(result.current.metaArtist).toBe("");
    expect(result.current.metaCover).toBe("");
  });

  it("tries to load tags if metadata is missing and showMetadata is true", async () => {
    const currentTrack = {
      src: "test.mp3",
    };
    const { result } = renderHook(() =>
      useAudioMetadata({ currentTrack, showMetadata: true }),
    );

    // Initial state from track (empty)
    expect(result.current.metaTitle).toBe("");

    // Wait for mock jsmediatags to trigger onSuccess
    await waitFor(() => expect(result.current.metaTitle).toBe("Parsed Title"));
    expect(result.current.metaArtist).toBe("Parsed Artist");
    expect(result.current.metaCover).toContain("data:image/png;base64,");
  });

  it("does not call jsmediatags when showMetadata is false", async () => {
    renderHook(() =>
      useAudioMetadata({ currentTrack: { src: "test.mp3" }, showMetadata: false }),
    );

    // Allow any pending microtasks to settle
    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(mockRead).not.toHaveBeenCalled();
  });

  it("does not call jsmediatags when track already has title and artist", async () => {
    renderHook(() =>
      useAudioMetadata({
        currentTrack: { src: "test.mp3", title: "Title", artist: "Artist" },
        showMetadata: true,
      }),
    );

    await new Promise((resolve) => setTimeout(resolve, 50));

    expect(mockRead).not.toHaveBeenCalled();
  });

  it("updates metadata when currentTrack changes", () => {
    const { result, rerender } = renderHook(
      ({ track }: { track: { src: string; title?: string; artist?: string } }) =>
        useAudioMetadata({ currentTrack: track, showMetadata: true }),
      {
        initialProps: {
          track: { src: "a.mp3", title: "Track A", artist: "Artist A" },
        },
      },
    );

    expect(result.current.metaTitle).toBe("Track A");
    expect(result.current.metaArtist).toBe("Artist A");

    act(() => {
      rerender({ track: { src: "b.mp3", title: "Track B", artist: "Artist B" } });
    });

    expect(result.current.metaTitle).toBe("Track B");
    expect(result.current.metaArtist).toBe("Artist B");
  });

  it("handles jsmediatags onError gracefully", async () => {
    mockRead.mockImplementationOnce((_src, callbacks) => {
      callbacks.onError(new Error("parse error"));
    });

    const consoleSpy = vi.spyOn(console, "warn").mockImplementation(() => {});

    renderHook(() =>
      useAudioMetadata({ currentTrack: { src: "bad.mp3" }, showMetadata: true }),
    );

    await waitFor(() => expect(consoleSpy).toHaveBeenCalled());
    consoleSpy.mockRestore();
  });

  it("returns empty strings when currentTrack has no metadata fields", () => {
    const { result } = renderHook(() =>
      useAudioMetadata({ currentTrack: { src: "only-src.mp3" }, showMetadata: false }),
    );

    // showMetadata=false, so values stay at initial empty strings until effect runs
    // (effect sets them to empty strings from the track)
    expect(result.current.metaTitle).toBe("");
    expect(result.current.metaArtist).toBe("");
    expect(result.current.metaCover).toBe("");
  });
});
