import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Leaderboard } from "./Leaderboard";

const mockEntries = [
  { id: "1", name: "Alice", score: 2450 },
  { id: "2", name: "Bob", score: 2100 },
  { id: "3", name: "Charlie", score: 1900 },
  { id: "4", name: "Diana", score: 1650 },
];

describe("Leaderboard", () => {
  it("renders entries with name and score", () => {
    render(<Leaderboard entries={mockEntries} />);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("2450")).toBeInTheDocument();
    expect(screen.getByText("2100")).toBeInTheDocument();
  });

  it("renders rank numbers", () => {
    render(<Leaderboard entries={mockEntries} />);
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  // メダル色は opt-in（T326）。既定では 1〜3 位も 4 位以下と同じ丸になる。
  it("leaves the top three unpainted by default", () => {
    render(<Leaderboard entries={mockEntries} />);
    for (const item of screen.getAllByRole("listitem")) {
      expect(item.className).not.toMatch(/rank[123]/);
    }
  });

  it("paints only the top three when showMedals is set", () => {
    render(<Leaderboard entries={mockEntries} showMedals />);
    const items = screen.getAllByRole("listitem");
    expect(items[0].className).toContain("rank1");
    expect(items[1].className).toContain("rank2");
    expect(items[2].className).toContain("rank3");
    expect(items[3].className).not.toMatch(/rank\d/);
  });

  it("renders as an ordered list", () => {
    render(<Leaderboard entries={mockEntries} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
    expect(screen.getAllByRole("listitem")).toHaveLength(4);
  });

  it("marks highlighted entry with aria-current", () => {
    const entries = [
      { id: "1", name: "Alice", score: 2450 },
      { id: "2", name: "Bob", score: 2100, highlight: true },
    ];
    render(<Leaderboard entries={entries} />);
    const items = screen.getAllByRole("listitem");
    expect(items[0]).not.toHaveAttribute("aria-current");
    expect(items[1]).toHaveAttribute("aria-current", "true");
  });

  it("displays unit alongside score", () => {
    render(<Leaderboard entries={mockEntries} unit="pts" />);
    expect(screen.getAllByText("pts")).toHaveLength(4);
  });

  it("renders avatar image when provided", () => {
    const entries = [{ id: "1", name: "Alice", score: 100, avatar: "alice.jpg" }];
    const { container } = render(<Leaderboard entries={entries} />);
    const img = container.querySelector("img");
    expect(img).toHaveAttribute("src", "alice.jpg");
  });
});
