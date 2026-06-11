import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Reaction } from "./Reaction";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
  useTranslation: () => ({ t: (key: string, params?: Record<string, unknown>) => {
    if (params) return `${key}:${JSON.stringify(params)}`;
    return key;
  }}),
}));

const ThumbUp = () => <svg data-testid="icon-thumb-up" />;
const Star = () => <svg data-testid="icon-star" />;

const mockReactions = [
  { id: "thumbs-up", icon: <ThumbUp />, label: "Thumbs up", count: 5, active: false },
  { id: "star", icon: <Star />, label: "Star", count: 3, active: true },
];

describe("Reaction", () => {
  it("renders reaction items with icons and counts", () => {
    render(<Reaction reactions={mockReactions} />);
    expect(screen.getByTestId("icon-thumb-up")).toBeInTheDocument();
    expect(screen.getByTestId("icon-star")).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("marks active reactions with aria-pressed", () => {
    render(<Reaction reactions={mockReactions} />);
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toHaveAttribute("aria-pressed", "false");
    expect(buttons[1]).toHaveAttribute("aria-pressed", "true");
  });

  it("calls onReact with item id when clicked", async () => {
    const onReact = vi.fn();
    render(<Reaction reactions={mockReactions} onReact={onReact} />);
    await userEvent.click(screen.getAllByRole("button")[0]);
    expect(onReact).toHaveBeenCalledWith("thumbs-up", true);
  });

  it("shows add button when showAddButton is true", () => {
    const onAdd = vi.fn();
    render(
      <Reaction reactions={mockReactions} showAddButton onAdd={onAdd} />,
    );
    const addButton = screen.getByLabelText("reaction.add_reaction");
    expect(addButton).toBeInTheDocument();
  });

  it("disables all buttons when disabled", () => {
    render(<Reaction reactions={mockReactions} disabled />);
    const buttons = screen.getAllByRole("button");
    buttons.forEach((btn) => expect(btn).toBeDisabled());
  });
});
