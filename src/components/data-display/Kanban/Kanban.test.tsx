import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { KanbanBoard, KanbanColumn, KanbanCard } from "./Kanban";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const DefaultBoard = ({
  onCardMove,
}: {
  onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string) => void;
}) => (
  <KanbanBoard onCardMove={onCardMove}>
    <KanbanColumn id="todo" title="To Do" cardCount={2}>
      <KanbanCard id="card-1">Card 1</KanbanCard>
      <KanbanCard id="card-2">Card 2</KanbanCard>
    </KanbanColumn>
    <KanbanColumn id="done" title="Done" cardCount={1}>
      <KanbanCard id="card-3">Card 3</KanbanCard>
    </KanbanColumn>
  </KanbanBoard>
);

describe("KanbanBoard", () => {
  it("renders board with role region", () => {
    render(<DefaultBoard />);
    expect(screen.getByRole("region")).toBeInTheDocument();
  });

  it("renders columns with titles", () => {
    render(<DefaultBoard />);
    expect(screen.getByText("To Do")).toBeInTheDocument();
    expect(screen.getByText("Done")).toBeInTheDocument();
  });

  it("renders cards", () => {
    render(<DefaultBoard />);
    expect(screen.getByText("Card 1")).toBeInTheDocument();
    expect(screen.getByText("Card 2")).toBeInTheDocument();
    expect(screen.getByText("Card 3")).toBeInTheDocument();
  });

  it("renders card count badges", () => {
    render(<DefaultBoard />);
    expect(screen.getByLabelText("2 cards")).toBeInTheDocument();
    expect(screen.getByLabelText("1 cards")).toBeInTheDocument();
  });

  it("calls onCardMove when card dropped on different column", () => {
    const onCardMove = vi.fn();
    const { container } = render(<DefaultBoard onCardMove={onCardMove} />);

    const card = container.querySelector(".wim-kanban__card")!;
    const doneColumn = container.querySelectorAll(".wim-kanban__column")[1]!;

    fireEvent.dragStart(card, { dataTransfer: { effectAllowed: "" } });
    fireEvent.dragOver(doneColumn);
    fireEvent.drop(doneColumn);

    expect(onCardMove).toHaveBeenCalledWith("card-1", "todo", "done");
  });

  it("does not call onCardMove when dropped on same column", () => {
    const onCardMove = vi.fn();
    const { container } = render(<DefaultBoard onCardMove={onCardMove} />);

    const card = container.querySelector(".wim-kanban__card")!;
    const todoColumn = container.querySelector(".wim-kanban__column")!;

    fireEvent.dragStart(card, { dataTransfer: { effectAllowed: "" } });
    fireEvent.dragOver(todoColumn);
    fireEvent.drop(todoColumn);

    expect(onCardMove).not.toHaveBeenCalled();
  });

  it("disabled card is not draggable", () => {
    render(
      <KanbanBoard>
        <KanbanColumn id="col" title="Col">
          <KanbanCard id="card-disabled" disabled>
            Disabled Card
          </KanbanCard>
        </KanbanColumn>
      </KanbanBoard>,
    );
    const card = screen.getByText("Disabled Card").closest(".wim-kanban__card")!;
    expect(card).toHaveClass("wim-kanban__card--disabled");
    expect(card).not.toHaveAttribute("draggable", "true");
  });

  it("applies custom className to board", () => {
    const { container } = render(
      <KanbanBoard className="custom-board">
        <KanbanColumn id="col" title="Col" />
      </KanbanBoard>,
    );
    expect(container.querySelector(".wim-kanban.custom-board")).toBeInTheDocument();
  });

  it("supports compound component syntax", () => {
    render(
      <KanbanBoard>
        <KanbanBoard.Column id="col" title="Col">
          <KanbanBoard.Card id="card">Content</KanbanBoard.Card>
        </KanbanBoard.Column>
      </KanbanBoard>,
    );
    expect(screen.getByText("Content")).toBeInTheDocument();
  });

  it("shows move menu when move button is clicked", async () => {
    render(<DefaultBoard />);
    const moveBtns = screen.getAllByRole("button", { name: "Move card" });
    fireEvent.click(moveBtns[0]);
    await waitFor(() => {
      expect(screen.getByRole("listbox", { name: "Move to column" })).toBeInTheDocument();
    });
  });

  it("calls onCardMove via move menu", async () => {
    const onCardMove = vi.fn();
    render(<DefaultBoard onCardMove={onCardMove} />);

    const moveBtns = screen.getAllByRole("button", { name: "Move card" });
    fireEvent.click(moveBtns[0]);

    await waitFor(() => {
      expect(screen.getByRole("listbox")).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("option", { name: "Done" }));
    expect(onCardMove).toHaveBeenCalledWith("card-1", "todo", "done");
  });
});
