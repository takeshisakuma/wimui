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
