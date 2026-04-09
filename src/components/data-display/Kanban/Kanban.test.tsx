import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { KanbanBoard } from "./Kanban";
import styles from "./kanban.module.scss";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

const mockColumns = [
  { id: "todo", title: "To Do", items: [] },
  { id: "done", title: "Done", items: [] },
];

const DefaultBoard = ({
  onCardMove,
}: {
  onCardMove?: (cardId: string, fromColumnId: string, toColumnId: string) => void;
}) => (
  <KanbanBoard onCardMove={onCardMove} columns={mockColumns}>
    <KanbanBoard.Column id="todo" title="To Do" cardCount={2}>
      <KanbanBoard.Card id="card-1">Card 1</KanbanBoard.Card>
      <KanbanBoard.Card id="card-2">Card 2</KanbanBoard.Card>
    </KanbanBoard.Column>
    <KanbanBoard.Column id="done" title="Done" cardCount={1}>
      <KanbanBoard.Card id="card-3">Card 3</KanbanBoard.Card>
    </KanbanBoard.Column>
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

    const card = container.querySelector(`.${styles.card}`)!;
    const doneColumn = container.querySelectorAll(`.${styles.column}`)[1]!;

    const dataTransfer = {
      setData: vi.fn(),
      getData: vi.fn(() => "todo:card-1"),
      effectAllowed: "",
    };

    fireEvent.dragStart(card, { dataTransfer });
    fireEvent.dragOver(doneColumn);
    fireEvent.drop(doneColumn, { dataTransfer });

    expect(onCardMove).toHaveBeenCalledWith("card-1", "todo", "done");
  });

  it("does not call onCardMove when dropped on same column", () => {
    const onCardMove = vi.fn();
    const { container } = render(<DefaultBoard onCardMove={onCardMove} />);

    const card = container.querySelector(`.${styles.card}`)!;
    const todoColumn = container.querySelector(`.${styles.column}`)!;

    const dataTransfer = {
      setData: vi.fn(),
      getData: vi.fn(() => "todo:card-1"),
      effectAllowed: "",
    };

    fireEvent.dragStart(card, { dataTransfer });
    fireEvent.dragOver(todoColumn);
    fireEvent.drop(todoColumn, { dataTransfer });

    expect(onCardMove).not.toHaveBeenCalled();
  });

  it("disabled card is not draggable", () => {
    render(
      <KanbanBoard columns={mockColumns}>
        <KanbanBoard.Column id="todo" title="To Do">
          <KanbanBoard.Card id="card-disabled" disabled>
            Disabled Card
          </KanbanBoard.Card>
        </KanbanBoard.Column>
      </KanbanBoard>,
    );
    const card = screen.getByText("Disabled Card").closest(`.${styles.card}`)!;
    expect(card).toHaveClass(styles.disabled);
    expect(card).not.toHaveAttribute("draggable", "true");
  });

  it("applies custom className to board", () => {
    const { container } = render(
      <KanbanBoard className="custom-board">
        <KanbanBoard.Column id="col" title="Col" />
      </KanbanBoard>,
    );
    expect(container.firstChild).toHaveClass("custom-board");
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
