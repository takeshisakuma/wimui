import React, { useState, forwardRef } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Icon } from "../../media/Icon/Icon";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import styles from "./kanban.module.scss";
import { MoreHorizontalIcon } from "@/icon";

export interface KanbanItem {
  id: string;
  content: React.ReactNode;
}

export interface KanbanColumnData {
  id: string;
  title: string;
  items: KanbanItem[];
}

export interface KanbanProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onMove"> {
  /** Kanban column data (for prop-driven usage). */
  columns?: KanbanColumnData[];
  /** Callback when a card is moved. */
  onMove?: (itemId: string, fromColumnId: string, toColumnId: string) => void;
  /** Callback when a card is moved (legacy / alternative name). */
  onCardMove?: (itemId: string, fromColumnId: string, toColumnId: string) => void;
  /** Whether to force the touch-device UI. */
  forceMobileUI?: boolean;
  /** Whether to render as a child element. */
  asChild?: boolean;
}

/**
 * Kanban board component suited for project management and similar use cases.
 */
export const Kanban = forwardRef<HTMLDivElement, KanbanProps>(
  (
    {
      columns: columnsProp,
      onMove,
      onCardMove,
      className,
      forceMobileUI = false,
      children,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("common");
    const [draggedItem, setDraggedItem] = useState<{
      itemId: string;
      columnId: string;
    } | null>(null);
    const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);

    const handleMove = onMove || onCardMove;

    // ドラッグ開始
    const handleDragStart = (
      e: React.DragEvent,
      itemId: string,
      columnId: string,
    ) => {
      setDraggedItem({ itemId, columnId });
      e.dataTransfer.setData("text/plain", `${columnId}:${itemId}`);
      e.dataTransfer.effectAllowed = "move";
    };

    // ドロップ先の上を通過中
    const handleDragOver = (e: React.DragEvent, columnId: string) => {
      e.preventDefault();
      setDragOverColumn(columnId);
    };

    // ドロップ処理
    const handleDrop = (e: React.DragEvent, toColumnId: string) => {
      e.preventDefault();
      setDragOverColumn(null);

      const data = e.dataTransfer.getData("text/plain");
      const [fromColumnId, itemId] = data.split(":");

      handleMove?.(itemId, fromColumnId, toColumnId);
      setDraggedItem(null);
    };

    // モバイル向け移動処理
    const handleMobileMove = (
      itemId: string,
      fromColumnId: string,
      toColumnId: string,
    ) => {
      handleMove?.(itemId, fromColumnId, toColumnId);
      setActiveMobileMenu(null);
    };

    const derivedColumns = React.useMemo(() => {
      if (columnsProp) return columnsProp;
      const cols: KanbanColumnData[] = [];
      React.Children.forEach(children, (child) => {
        if (React.isValidElement(child)) {
          const props = child.props as Record<string, unknown>;
          if (typeof props.id === "string" && typeof props.title === "string") {
            cols.push({
              id: props.id,
              title: props.title,
              items: [], // Items are not needed for the mobile menu
            });
          }
        }
      });
      return cols;
    }, [children, columnsProp]);

    const renderContent = () => {
      if (children) return children;
      if (!columnsProp) return null;

      return columnsProp.map((column) => (
        <KanbanColumnWrapper
          key={column.id}
          id={column.id}
          title={column.title}
          cardCount={column.items.length}
        >
          {column.items.map((item) => (
            <KanbanCard key={item.id} id={item.id}>
              {item.content}
            </KanbanCard>
          ))}
        </KanbanColumnWrapper>
      ));
    };

    const Component = asChild ? Slot : "div";

    return (
      <KanbanContext.Provider
        value={{
          draggedItem,
          dragOverColumn,
          setDragOverColumn,
          handleDragStart,
          handleDragOver,
          handleDrop,
          handleMobileMove,
          activeMobileMenu,
          setActiveMobileMenu,
          columns: derivedColumns, // Used for mobile move menu search
        }}
      >
        <Component
          {...props}
          ref={ref}
          className={classNames("wim-kanban", 
            styles.root,
            forceMobileUI && styles.touch,
            className,
          )}
          role="region"
          aria-label={t("a11y.kanban_board")}
          /*
           * 根は `overflow-x: auto` の**スクロール領域**なので、キーボードで
           * スクロールできるようフォーカスを受け取る（axe の
           * `scrollable-region-focusable`、SERIOUS）。
           *
           * **単体ストーリーでは一度も出なかった。** 横スクロールが起きるほど
           * カラムが並ばず、カードの中に focusable な要素があれば規則自体が
           * 当たらないため。7 枚目の合成画面（`Patterns/Newsroom`）で、
           * AppShell の中に 4 カラムを置いて初めて表に出た。
           */
          tabIndex={0}
        >
          <Slottable>{renderContent()}</Slottable>
        </Component>
      </KanbanContext.Provider>
    );
  },
);

// --- Context ---
const KanbanContext = React.createContext<{
  draggedItem: { itemId: string; columnId: string } | null;
  dragOverColumn: string | null;
  setDragOverColumn: (id: string | null) => void;
  handleDragStart: (
    e: React.DragEvent,
    itemId: string,
    columnId: string,
  ) => void;
  handleDragOver: (e: React.DragEvent, columnId: string) => void;
  handleDrop: (e: React.DragEvent, toColumnId: string) => void;
  handleMobileMove: (
    itemId: string,
    fromColumnId: string,
    toColumnId: string,
  ) => void;
  activeMobileMenu: string | null;
  setActiveMobileMenu: (id: string | null) => void;
  columns: KanbanColumnData[];
} | null>(null);

const useKanban = () => {
  const context = React.useContext(KanbanContext);
  if (!context)
    throw new Error("Kanban compound components must be used within Kanban");
  return context;
};

// --- KanbanColumn ---
interface KanbanColumnProps {
  id: string;
  title: string;
  cardCount?: number;
  children?: React.ReactNode;
  className?: string;
}

export const KanbanColumn = ({
  id,
  title,
  cardCount,
  children,
  className,
}: KanbanColumnProps) => {
  const { dragOverColumn, handleDragOver, handleDrop, setDragOverColumn } =
    useKanban();
  const { t } = useWimTranslation("common");

  // 列見出しは素の `div` で、列そのものにもロールと名前が無かったので、支援技術からは
  // **どのカードがどの列のものか分からなかった**（T211）。
  // **見出しにはしない** ── 列は文書の節ではないので、ARIA のパターンは
  // 「グループに名前を付ける」。同じ形が `Menu` の `MenuItemGroup` に既にある。
  // `region` ではなく `group` にするのは、列の数だけランドマークが増えるのを避けるため。
  // タイトルは `aria-hidden` にして二重読みを防ぐ（名前は `aria-labelledby` が運ぶ）。
  const labelId = React.useId();
  return (
    <div
      className={classNames(
        styles.column,
        {
          [styles.dragOver]: dragOverColumn === id,
        },
        className,
      )}
      role="group"
      aria-labelledby={title ? labelId : undefined}
      onDragOver={(e) => handleDragOver(e, id)}
      onDrop={(e) => handleDrop(e, id)}
      onDragLeave={() => setDragOverColumn(null)}
    >
      <div className={styles.columnHeader}>
        <div id={labelId} className={styles.columnTitle} aria-hidden="true">
          {title}
        </div>
        {cardCount !== undefined && (
          /* T205: 素の `div`（generic）に `aria-label` を付けても読まれる保証が
             無い（axe `aria-prohibited-attr`）。しかも文言が英語の直書きだった。
             数字は見た目、意味は読み上げ用テキストに分ける。 */
          <div className={styles.columnCount}>
            <span aria-hidden="true">{cardCount}</span>
            <VisuallyHidden>
              {t("a11y.kanban_column_count", { count: cardCount })}
            </VisuallyHidden>
          </div>
        )}
      </div>
      <div className={styles.columnBody}>{children}</div>
    </div>
  );
};

// --- KanbanCard ---
interface KanbanCardProps {
  id: string;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const KanbanCard = ({
  id,
  children,
  disabled,
  className,
}: KanbanCardProps) => {
  const { t } = useWimTranslation("common");
  const {
    draggedItem,
    handleDragStart,
    handleMobileMove,
    activeMobileMenu,
    setActiveMobileMenu,
    columns,
  } = useKanban();

  const colId = React.useContext(ColumnContext);

  return (
    <div
      className={classNames(
        styles.card,
        {
          [styles.dragging]: draggedItem?.itemId === id,
          [styles.disabled]: disabled,
        },
        className,
      )}
      draggable={!disabled}
      onDragStart={(e) => colId && handleDragStart(e, id, colId)}
    >
      <div className={styles.cardContent}>{children}</div>

      <div className={styles.cardMove}>
        <button
          type="button"
          className={styles.cardMoveBtn}
          onClick={() =>
            setActiveMobileMenu(activeMobileMenu === id ? null : id)
          }
          aria-label={t("a11y.move_card")}
          disabled={disabled}
        >
          <Icon component={MoreHorizontalIcon} size="sm" />
        </button>

        {activeMobileMenu === id && (
          <div
            className={styles.cardMoveMenu}
            role="listbox"
            aria-label={t("a11y.move_to_column")}
          >
            {columns
              .filter((c) => c.id !== colId)
              .map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={styles.cardMoveOption}
                  onClick={() => colId && handleMobileMove(id, colId, c.id)}
                  role="option"
                  aria-selected={false}
                >
                  {c.title}
                </button>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ColumnContext = React.createContext<string | null>(null);

// Wrapper for Column to provide ID to cards
const KanbanColumnWrapper = (props: KanbanColumnProps) => {
  return (
    <ColumnContext.Provider value={props.id}>
      <KanbanColumn {...props} />
    </ColumnContext.Provider>
  );
};

// Assign sub-components
export const KanbanBoard = Kanban as typeof Kanban & {
  Column: typeof KanbanColumnWrapper;
  Card: typeof KanbanCard;
};

KanbanBoard.Column = KanbanColumnWrapper;
KanbanBoard.Card = KanbanCard;

Kanban.displayName = "Kanban";
KanbanBoard.displayName = "KanbanBoard";
KanbanColumn.displayName = "KanbanColumn";
KanbanCard.displayName = "KanbanCard";
KanbanColumnWrapper.displayName = "KanbanColumnWrapper";

export default KanbanBoard;
