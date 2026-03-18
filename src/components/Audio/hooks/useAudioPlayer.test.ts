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
});
