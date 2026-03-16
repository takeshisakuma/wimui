import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";
import classNames from "classnames";
import "./kanban.scss";

// ─── Board Context ────────────────────────────────────────────────────────────

type ColumnEntry = { id: string; title: React.ReactNode };

type KanbanContextType = {
  draggingCardId: string | null;
  draggingFromColumnId: string | null;
  setDraggingCard: (cardId: string | null, columnId: string | null) => void;
  onCardMove?: (
    cardId: string,
    fromColumnId: string,
    toColumnId: string,
  ) => void;
  columns: ColumnEntry[];
  registerColumn: (id: string, title: React.ReactNode) => void;
  unregisterColumn: (id: string) => void;
  forceMobileUI: boolean;
};

const KanbanContext = createContext<KanbanContextType | null>(null);

const useKanban = () => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("Kanban components must be used within a KanbanBoard");
  }
  return context;
};

// ─── Column Context ───────────────────────────────────────────────────────────

type KanbanColumnContextType = { columnId: string };

const KanbanColumnContext = createContext<KanbanColumnContextType | null>(null);

// ─── KanbanBoard ──────────────────────────────────────────────────────────────

export type KanbanBoardProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * カードが別の列にドロップ／移動された際に呼び出されるコールバック。
   */
  onCardMove?: (
    cardId: string,
    fromColumnId: string,
    toColumnId: string,
  ) => void;
  /**
   * タッチデバイス向けの移動ボタンUIを強制表示する。
   * Storybookでのモバイルプレビューや開発時の確認に使用する。
   */
  forceMobileUI?: boolean;
};

const KanbanBoard = ({
  children,
  className,
  onCardMove,
  forceMobileUI = false,
  ...props
}: KanbanBoardProps) => {
  const [draggingCardId, setDraggingCardId] = useState<string | null>(null);
  const [draggingFromColumnId, setDraggingFromColumnId] = useState<
    string | null
  >(null);
  const [columns, setColumns] = useState<ColumnEntry[]>([]);

  const setDraggingCard = useCallback(
    (cardId: string | null, columnId: string | null) => {
      setDraggingCardId(cardId);
      setDraggingFromColumnId(columnId);
    },
    [],
  );

  const registerColumn = useCallback((id: string, title: React.ReactNode) => {
    setColumns((prev) => {
      if (prev.some((c) => c.id === id)) return prev;
      return [...prev, { id, title }];
    });
  }, []);

  const unregisterColumn = useCallback((id: string) => {
    setColumns((prev) => prev.filter((c) => c.id !== id));
  }, []);

  const contextValue = useMemo(
    () => ({
      draggingCardId,
      draggingFromColumnId,
      setDraggingCard,
      onCardMove,
      columns,
      registerColumn,
      unregisterColumn,
      forceMobileUI,
    }),
    [
      draggingCardId,
      draggingFromColumnId,
      setDraggingCard,
      onCardMove,
      columns,
      registerColumn,
      unregisterColumn,
      forceMobileUI,
    ],
  );

  return (
    <KanbanContext.Provider value={contextValue}>
      <div
        className={classNames(
          "wim-kanban",
          forceMobileUI && "wim-kanban--touch",
          className,
        )}
        role="region"
        {...props}
      >
        {children}
      </div>
    </KanbanContext.Provider>
  );
};

// ─── KanbanColumn ─────────────────────────────────────────────────────────────

export type KanbanColumnProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * 列を識別する一意のID。カード移動時に使用される。
   */
  id: string;
  /**
   * 列のヘッダーに表示するタイトル。
   */
  title: React.ReactNode;
  /**
   * ヘッダーに表示するカード枚数バッジ。
   */
  cardCount?: number;
};

export const KanbanColumn = ({
  id,
  title,
  cardCount,
  children,
  className,
  ...props
}: KanbanColumnProps) => {
  const {
    draggingCardId,
    draggingFromColumnId,
    setDraggingCard,
    onCardMove,
    registerColumn,
    unregisterColumn,
  } = useKanban();
  const [isDragOver, setIsDragOver] = useState(false);

  useEffect(() => {
    registerColumn(id, title);
    return () => unregisterColumn(id);
    // titleは意図的に除外 — idが変わったときのみ再登録する
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, registerColumn, unregisterColumn]);

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsDragOver(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragOver(false);
    if (draggingCardId && draggingFromColumnId && draggingFromColumnId !== id) {
      onCardMove?.(draggingCardId, draggingFromColumnId, id);
    }
    setDraggingCard(null, null);
  };

  return (
    <KanbanColumnContext.Provider value={{ columnId: id }}>
      <div
        className={classNames(
          "wim-kanban__column",
          isDragOver && "wim-kanban__column--drag-over",
          className,
        )}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        aria-label={typeof title === "string" ? title : undefined}
        {...props}
      >
        <div className="wim-kanban__column-header">
          <span className="wim-kanban__column-title">{title}</span>
          {cardCount !== undefined && (
            <span
              className="wim-kanban__column-count"
              aria-label={`${cardCount} cards`}
            >
              {cardCount}
            </span>
          )}
        </div>
        <div className="wim-kanban__column-body">{children}</div>
      </div>
    </KanbanColumnContext.Provider>
  );
};

// ─── KanbanCard ───────────────────────────────────────────────────────────────

export type KanbanCardProps = React.ComponentPropsWithoutRef<"div"> & {
  /**
   * カードを識別する一意のID。
   */
  id: string;
  /**
   * trueの場合、ドラッグ・移動操作が不可になる。
   */
  disabled?: boolean;
};

export const KanbanCard = ({
  id,
  disabled = false,
  children,
  className,
  ...props
}: KanbanCardProps) => {
  const { draggingCardId, setDraggingCard, onCardMove, columns } = useKanban();
  const columnContext = useContext(KanbanColumnContext);
  const currentColumnId = columnContext?.columnId ?? null;
  const isDragging = draggingCardId === id;

  const [showMoveMenu, setShowMoveMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const otherColumns = columns.filter((c) => c.id !== currentColumnId);

  // メニュー外クリックで閉じる
  useEffect(() => {
    if (!showMoveMenu) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setShowMoveMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showMoveMenu]);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    if (e.dataTransfer) {
      e.dataTransfer.effectAllowed = "move";
    }
    setDraggingCard(id, currentColumnId);
  };

  const handleDragEnd = () => {
    setDraggingCard(null, null);
  };

  const handleMoveTo = (toColumnId: string) => {
    if (currentColumnId) {
      onCardMove?.(id, currentColumnId, toColumnId);
    }
    setShowMoveMenu(false);
  };

  return (
    <div
      className={classNames(
        "wim-kanban__card",
        isDragging && "wim-kanban__card--dragging",
        disabled && "wim-kanban__card--disabled",
        className,
      )}
      draggable={!disabled}
      onDragStart={disabled ? undefined : handleDragStart}
      onDragEnd={handleDragEnd}
      role="listitem"
      {...props}
    >
      <div className="wim-kanban__card-content">{children}</div>

      {/* タッチデバイス向け移動ボタン（CSSで表示制御） */}
      {!disabled && otherColumns.length > 0 && (
        <div className="wim-kanban__card-move" ref={menuRef}>
          <button
            type="button"
            className="wim-kanban__card-move-btn"
            onClick={(e) => {
              e.stopPropagation();
              setShowMoveMenu((v) => !v);
            }}
            aria-label="Move card"
            aria-expanded={showMoveMenu}
            aria-haspopup="listbox"
          >
            ⋯
          </button>
          {showMoveMenu && (
            <div
              className="wim-kanban__card-move-menu"
              role="listbox"
              aria-label="Move to column"
            >
              {otherColumns.map((col) => (
                <button
                  key={col.id}
                  type="button"
                  className="wim-kanban__card-move-option"
                  role="option"
                  aria-selected={false}
                  onClick={() => handleMoveTo(col.id)}
                >
                  {col.title}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── Compound export ──────────────────────────────────────────────────────────

const KanbanBoardComponent = KanbanBoard as typeof KanbanBoard & {
  Column: typeof KanbanColumn;
  Card: typeof KanbanCard;
};

KanbanBoardComponent.Column = KanbanColumn;
KanbanBoardComponent.Card = KanbanCard;

export { KanbanBoardComponent as KanbanBoard };
