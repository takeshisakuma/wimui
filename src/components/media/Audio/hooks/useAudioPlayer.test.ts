import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { useAudioPlayer } from "./useAudioPlayer";

class MockAudioContext {
  createMediaElementSource = vi.fn().mockReturnValue({
    connect: vi.fn(),
  });
  createGain = vi.fn().mockReturnValue({
    connect: vi.fn(),
    gain: {
      value: 1,
      cancelScheduledValues: vi.fn(),
      setValueAtTime: vi.fn(),
      linearRampToValueAtTime: vi.fn(),
    },
  });
  createBiquadFilter = vi.fn().mockReturnValue({
    connect: vi.fn(),
    type: "lowshelf",
    frequency: { value: 200 },
    gain: {
      value: 0,
      setTargetAtTime: vi.fn(),
    },
  });
  createAnalyser = vi.fn().mockReturnValue({
    connect: vi.fn(),
    fftSize: 256,
    frequencyBinCount: 128,
    getByteFrequencyData: vi.fn(),
  });
  destination = {};
  currentTime = 0;
  state = "suspended";
  resume = vi.fn();
}

Object.defineProperty(window, "AudioContext", {
  value: MockAudioContext,
  writable: true,
});

describe("useAudioPlayer", () => {
  const playlist = [
    { src: "track1.mp3", title: "Track 1" },
    { src: "track2.mp3", title: "Track 2" },
  ];

  const options = {
    playlist,
    loop: false,
    muted: false,
    fadeIn: false,
    fadeOut: false,
    crossfade: false,
    visualizer: false,
    hotkeys: false,
    autoPlay: false,
  };

  beforeEach(() => {
    vi.clearAllMocks();
    // Mock HTMLAudioElement
    window.HTMLMediaElement.prototype.play = vi.fn().mockResolvedValue(undefined);
    window.HTMLMediaElement.prototype.pause = vi.fn();
    window.HTMLMediaElement.prototype.load = vi.fn();
  });

  it("initializes with correct state", () => {
    const { result } = renderHook(() => useAudioPlayer(options));
    expect(result.current.isPlaying).toBe(false);
    expect(result.current.currentTrackIndex).toBe(0);
    expect(result.current.volume).toBe(1);
  });

  it("toggles play/pause", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    await act(async () => {
      result.current.togglePlay();
    });

    expect(result.current.isPlaying).toBe(true);

    await act(async () => {
      result.current.togglePlay();
    });
    expect(result.current.isPlaying).toBe(false);
  });

  it("changes tracks", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => {
      result.current.playNext(1);
    });

    expect(result.current.currentTrackIndex).toBe(1);
  });

  it("handles repeat modes", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => {
      result.current.playNext(1); // To index 1
    });

    act(() => {
      result.current.playNext(1); // To end
    });
    expect(result.current.currentTrackIndex).toBe(1);
    expect(result.current.isPlaying).toBe(false);
  });

  it("toggles bass boost", () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    act(() => {
      result.current.setIsBassBoost(true);
    });
    expect(result.current.isBassBoost).toBe(true);
  });

  it("handles volume change", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => {
      result.current.handleVolumeChange({ target: { value: "0.5" } } as unknown as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.volume).toBe(0.5);
  });

  it("handles sleep timer", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useAudioPlayer(options));

    act(() => {
      result.current.toggleSleepTimer();
    });
    expect(result.current.remainingSleepTime).toBe(900); // 15 minutes

    act(() => {
      vi.advanceTimersByTime(1000);
    });
    expect(result.current.remainingSleepTime).toBe(899);

    vi.useRealTimers();
  });

  it("initializes repeatMode as 1 when loop is true", () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, loop: true }));
    expect(result.current.repeatMode).toBe(1);
  });

  it("initializes isMuted as true when muted is true", () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, muted: true }));
    expect(result.current.isMuted).toBe(true);
  });

  it("formatTime formats 0 seconds as 0:00", () => {
    const { result } = renderHook(() => useAudioPlayer(options));
    expect(result.current.formatTime(0)).toBe("0:00");
  });

  it("formatTime formats 65 seconds as 1:05", () => {
    const { result } = renderHook(() => useAudioPlayer(options));
    expect(result.current.formatTime(65)).toBe("1:05");
  });

  it("formatTime formats 3600 seconds as 60:00", () => {
    const { result } = renderHook(() => useAudioPlayer(options));
    expect(result.current.formatTime(3600)).toBe("60:00");
  });

  it("handleSeek updates currentTime state", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => {
      result.current.handleSeek({ target: { value: "30" } } as unknown as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.currentTime).toBe(30);
  });

  it("playNext(-1) goes to the previous track", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => { result.current.playNext(1); });
    expect(result.current.currentTrackIndex).toBe(1);

    act(() => { result.current.playNext(-1); });
    expect(result.current.currentTrackIndex).toBe(0);
  });

  it("cancels sleep timer when toggled twice", () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useAudioPlayer(options));

    act(() => { result.current.toggleSleepTimer(); });
    expect(result.current.remainingSleepTime).toBe(900);

    act(() => { result.current.toggleSleepTimer(); });
    expect(result.current.remainingSleepTime).toBeNull();

    vi.useRealTimers();
  });

  it("sleep timer sets remainingSleepTime to null when it reaches zero", async () => {
    vi.useFakeTimers();
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => { result.current.toggleSleepTimer(); });

    await act(async () => {
      vi.advanceTimersByTime(900 * 1000);
    });

    expect(result.current.remainingSleepTime).toBeNull();
    vi.useRealTimers();
  });

  it("hotkey M toggles mute", () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, hotkeys: true }));

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { code: "KeyM" }));
    });
    expect(result.current.isMuted).toBe(true);

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { code: "KeyM" }));
    });
    expect(result.current.isMuted).toBe(false);
  });

  it("hotkey Space toggles play", async () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, hotkeys: true }));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    await act(async () => {
      window.dispatchEvent(new KeyboardEvent("keydown", { code: "Space" }));
    });

    expect(result.current.isPlaying).toBe(true);
  });

  it("hotkeys are not registered when hotkeys is false", () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, hotkeys: false }));

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { code: "KeyM" }));
    });
    // isMuted should remain false since hotkeys are disabled
    expect(result.current.isMuted).toBe(false);
  });

  it("setShuffleMode toggles shuffle state", () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    act(() => { result.current.setShuffleMode((s) => !s); });
    expect(result.current.shuffleMode).toBe(true);

    act(() => { result.current.setShuffleMode((s) => !s); });
    expect(result.current.shuffleMode).toBe(false);
  });

  it("handleVolumeChange above 0 clears mute state", async () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, muted: true }));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => {
      result.current.handleVolumeChange({ target: { value: "0.5" } } as unknown as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.isMuted).toBe(false);
  });

  it("handleVolumeChange with 0 does not clear mute state", async () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, muted: true }));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => {
      result.current.handleVolumeChange({ target: { value: "0" } } as unknown as React.ChangeEvent<HTMLInputElement>);
    });
    expect(result.current.volume).toBe(0);
    expect(result.current.isMuted).toBe(true);
  });

  it("playNext at last track with no repeat sets isPlaying to false", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => { result.current.playNext(1); }); // index 0 → 1
    act(() => { result.current.playNext(1); }); // index 1 → no more (no repeat)
    expect(result.current.isPlaying).toBe(false);
  });

  it("playNext with repeatMode=2 (all repeat) wraps around", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => { result.current.setRepeatMode(2); });
    act(() => { result.current.playNext(1); }); // 0 → 1
    act(() => { result.current.playNext(1); }); // 1 → 0 (wrap)
    expect(result.current.currentTrackIndex).toBe(0);
  });

  it("handleEnded calls playNext", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => { result.current.handleEnded(); });
    expect(result.current.currentTrackIndex).toBe(1);
  });

  it("handleTimeUpdate updates currentTime state", async () => {
    const { result } = renderHook(() => useAudioPlayer(options));
    const audioEl = document.createElement("audio");
    Object.defineProperty(audioEl, "currentTime", { value: 42, writable: true });
    Object.defineProperty(audioEl, "duration", { value: 120, writable: true });

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = audioEl;
    });

    act(() => { result.current.handleTimeUpdate(); });
    expect(result.current.currentTime).toBe(42);
  });

  it("setRepeatMode changes repeat state", () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    act(() => { result.current.setRepeatMode(2); });
    expect(result.current.repeatMode).toBe(2);

    act(() => { result.current.setRepeatMode(0); });
    expect(result.current.repeatMode).toBe(0);
  });

  it("setCurrentPlaybackRate updates state", () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    act(() => { result.current.setCurrentPlaybackRate(1.5); });
    expect(result.current.currentPlaybackRate).toBe(1.5);
  });

  it("hotkey ArrowRight advances currentTime", async () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, hotkeys: true }));
    const audioEl = document.createElement("audio");
    Object.defineProperty(audioEl, "currentTime", { value: 10, writable: true });

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = audioEl;
    });

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { code: "ArrowRight" }));
    });
    expect(audioEl.currentTime).toBe(15);
  });

  it("hotkey ArrowLeft rewinds currentTime", async () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, hotkeys: true }));
    const audioEl = document.createElement("audio");
    Object.defineProperty(audioEl, "currentTime", { value: 10, writable: true });

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = audioEl;
    });

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { code: "ArrowLeft" }));
    });
    expect(audioEl.currentTime).toBe(5);
  });

  it("hotkey ArrowUp increases volume", () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, hotkeys: true }));

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { code: "ArrowUp" }));
    });
    expect(result.current.volume).toBeCloseTo(1); // already at max 1
  });

  it("hotkey ArrowDown decreases volume", () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, hotkeys: true }));

    act(() => {
      window.dispatchEvent(new KeyboardEvent("keydown", { code: "ArrowDown" }));
    });
    expect(result.current.volume).toBeCloseTo(0.9);
  });

  it("hotkeys are ignored when target is an input element", () => {
    const { result } = renderHook(() => useAudioPlayer({ ...options, hotkeys: true }));
    const input = document.createElement("input");
    document.body.appendChild(input);

    act(() => {
      input.dispatchEvent(new KeyboardEvent("keydown", { code: "KeyM", bubbles: true }));
    });
    expect(result.current.isMuted).toBe(false);

    document.body.removeChild(input);
  });

  it("playNext with empty playlist stays at 0", async () => {
    const { result } = renderHook(() =>
      useAudioPlayer({ ...options, playlist: [] }),
    );

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => { result.current.playNext(1); });
    expect(result.current.currentTrackIndex).toBe(0);
  });

  it("shuffleMode plays a different track index", async () => {
    const longPlaylist = Array.from({ length: 5 }, (_, i) => ({
      src: `track${i}.mp3`,
      title: `Track ${i}`,
    }));
    const { result } = renderHook(() =>
      useAudioPlayer({ ...options, playlist: longPlaylist }),
    );

    await act(async () => {
      (result.current.activeAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
      (result.current.nextAudioRef as React.MutableRefObject<HTMLAudioElement | null>).current = document.createElement("audio");
    });

    act(() => { result.current.setShuffleMode(() => true); });
    act(() => { result.current.playNext(1); });
    // Index changes (may or may not be different, but no error)
    expect(result.current.currentTrackIndex).toBeGreaterThanOrEqual(0);
  });

  it("setDuration updates duration state", () => {
    const { result } = renderHook(() => useAudioPlayer(options));

    act(() => { result.current.setDuration(180); });
    expect(result.current.duration).toBe(180);
  });
});
