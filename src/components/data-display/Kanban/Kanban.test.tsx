import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { KanbanBoard } from "./Kanban";
import styles from "./kanban.module.scss";

vi.mock("react-i18next", async () => ({
  // useWimTranslation（内蔵 i18next フォールバック）が参照する API
  I18nContext: (await import("react")).createContext(null),
  getI18n: () => undefined,
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

  // 根は `overflow-x: auto` のスクロール領域。フォーカスを受け取れないと
  // キーボードで横スクロールできない（axe の `scrollable-region-focusable`）。
  // **カードの中に focusable な要素があると規則は当たらない**ので、
  // 単体では見えず 7 枚目の合成画面で初めて表に出た。ここで固定しておく。
  it("keeps the scrollable board reachable by keyboard", () => {
    render(<DefaultBoard />);
    expect(screen.getByRole("region")).toHaveAttribute("tabindex", "0");
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
    // 枚数は「見える数字（aria-hidden）」と「読み上げ用テキスト」に分かれている
    // ── 素の div に aria-label を付けても読まれる保証が無いため（T205）。
    expect(screen.getByText("Cards: 2")).toBeInTheDocument();
    expect(screen.getByText("Cards: 1")).toBeInTheDocument();
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

  it("calls onCardMove when dropped on same column (reordering)", () => {
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

    expect(onCardMove).toHaveBeenCalledWith("card-1", "todo", "todo");
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

  it("renders columns and cards via columns prop (prop-driven)", () => {
    const columnsWithItems = [
      {
        id: "c1",
        title: "Col 1",
        items: [{ id: "i1", content: "Item 1" }],
      },
    ];
    render(<KanbanBoard columns={columnsWithItems} />);
    expect(screen.getByText("Col 1")).toBeInTheDocument();
    expect(screen.getByText("Item 1")).toBeInTheDocument();
  });

  it("supports asChild prop", () => {
    render(
      <KanbanBoard asChild>
        <section data-testid="kanban-section">
          <KanbanBoard.Column id="c1" title="Col 1" />
        </section>
      </KanbanBoard>,
    );
    const element = screen.getByTestId("kanban-section");
    expect(element.tagName).toBe("SECTION");
    expect(element).toHaveClass(styles.root);
  });

  it("forwards ref to the board element", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(
      <KanbanBoard ref={ref}>
        <KanbanBoard.Column id="c" title="T" />
      </KanbanBoard>,
    );
    expect(ref.current).toBeInstanceOf(HTMLDivElement);
  });

  it("applies touch class when forceMobileUI is true", () => {
    const { container } = render(
      <KanbanBoard forceMobileUI>
        <KanbanBoard.Column id="todo" title="To Do" />
      </KanbanBoard>,
    );
    expect(container.firstChild).toHaveClass(styles.touch);
  });

  it("calls onMove when provided instead of onCardMove", () => {
    const onMove = vi.fn();
    const { container } = render(
      <KanbanBoard
        onMove={onMove}
        columns={[
          { id: "todo", title: "To Do", items: [{ id: "card-1", content: "C1" }] },
          { id: "done", title: "Done", items: [] },
        ]}
      >
        <KanbanBoard.Column id="todo" title="To Do">
          <KanbanBoard.Card id="card-1">C1</KanbanBoard.Card>
        </KanbanBoard.Column>
        <KanbanBoard.Column id="done" title="Done" />
      </KanbanBoard>,
    );

    const card = container.querySelector(`.${styles.card}`)!;
    const doneColumn = container.querySelectorAll(`.${styles.column}`)[1]!;

    const dataTransfer = {
      setData: vi.fn(),
      getData: vi.fn(() => "todo:card-1"),
      effectAllowed: "",
    };

    fireEvent.dragStart(card, { dataTransfer });
    fireEvent.drop(doneColumn, { dataTransfer });

    expect(onMove).toHaveBeenCalledWith("card-1", "todo", "done");
  });
});
