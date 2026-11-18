import React, { useState, forwardRef } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { commonNs } from "@/i18n/generated/common";
import { dataDisplayNs } from "@/i18n/generated/data-display";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { useFloating, autoUpdate, offset, flip, shift } from "@floating-ui/react";
import { Icon } from "../../media/Icon/Icon";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import { useAnnounce } from "../../_internal/useAnnounce";
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
  /**
   * Whether to force the touch-device UI (the move button as a full-width bar under each card).
   * Without it, pointer devices show the move button in the card's corner on hover or focus.
   */
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
    // 内蔵の翻訳は `t(` の呼び出しから使うキーを拾う（i18n:bundle）。別名の関数にすると同梱されない
    const { t } = useWimTranslation([commonNs, dataDisplayNs]);
    const { announce, region } = useAnnounce();
    const [draggedItem, setDraggedItem] = useState<{
      itemId: string;
      columnId: string;
    } | null>(null);
    const [dragOverColumn, setDragOverColumn] = useState<string | null>(null);
    const [activeMobileMenu, setActiveMobileMenu] = useState<string | null>(null);
    // 移動ボタンで動かしたカード。動いた先で描き直されたカードが、自分の移動ボタンへフォーカスを取る
    // （T379）。動かしたカードは別の列で作り直されるので、何もしないとフォーカスは文書の先頭へ落ちる
    const [focusAfterMove, setFocusAfterMove] = useState<string | null>(null);

    const handleMove = onMove || onCardMove;

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

    const announceMove = (toColumnId: string, delay = 0) => {
      const column = derivedColumns.find((c) => c.id === toColumnId);
      if (column) announce(t("kanban.moved", { column: column.title }), { delay });
    };

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
      if (fromColumnId !== toColumnId) announceMove(toColumnId);
    };

    // モバイル向け移動処理
    const handleMobileMove = (
      itemId: string,
      fromColumnId: string,
      toColumnId: string,
    ) => {
      handleMove?.(itemId, fromColumnId, toColumnId);
      setActiveMobileMenu(null);
      setFocusAfterMove(itemId);
      // フォーカスが移動ボタンへ戻る読み上げ（ボタンの名前）と重ならないよう、少し待ってから告げる
      announceMove(toColumnId, 700);
    };

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
          focusAfterMove,
          setFocusAfterMove,
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
          // 利用者の名前を、内蔵の名前で上書きしない（T328）。盤を 2 つ置くと、同じ名前が並んでいた。
          aria-label={props["aria-labelledby"] ? undefined : (props["aria-label"] ?? t("a11y.kanban_board"))}
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
          {region}
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
  focusAfterMove: string | null;
  setFocusAfterMove: (id: string | null) => void;
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
  const { t } = useWimTranslation(commonNs);

  // 列見出しは素の `div` で、列そのものにもロールと名前が無かったので、支援技術からは
  // **どのカードがどの列のものか分からなかった**（T211）。
  // **見出しにはしない** ── 列は文書の節ではないので、ARIA のパターンは
  // 「グループに名前を付ける」。同じ形が `Menu` の `MenuItemGroup` に既にある。
  // `region` ではなく `group` にするのは、列の数だけランドマークが増えるのを避けるため。
  // タイトルは `aria-hidden` にして二重読みを防ぐ（名前は `aria-labelledby` が運ぶ）。
  const labelId = React.useId();
  // カードの並びをリストにする（枚数と「何枚目か」が読まれる）。**中身がカードだけのときに限る** ──
  // `list` の直下に `listitem` 以外があると壊れた構造になり、空の `list` は axe が判定を保留する。
  // 追加ボタンや空の表示を混ぜた列、カードを自前の部品で包んだ列は、これまでどおりロールなし。
  const items = React.Children.toArray(children);
  const isCardList =
    items.length > 0 &&
    items.every((child) => React.isValidElement(child) && child.type === KanbanCard);
  return (
    <div
      className={classNames(
        styles.column,
        {
          [styles.dragOver]: dragOverColumn === id,
        },
        className,
      )}
      data-part="column"
      role="group"
      aria-labelledby={title ? labelId : undefined}
      onDragOver={(e) => handleDragOver(e, id)}
      onDrop={(e) => handleDrop(e, id)}
      onDragLeave={() => setDragOverColumn(null)}
    >
      <div className={styles.columnHeader} data-part="column-header">
        <div id={labelId} className={styles.columnTitle} data-part="column-title" aria-hidden="true">
          {title}
        </div>
        {cardCount !== undefined && (
          /* T205: 素の `div`（generic）に `aria-label` を付けても読まれる保証が
             無い（axe `aria-prohibited-attr`）。しかも文言が英語の直書きだった。
             数字は見た目、意味は読み上げ用テキストに分ける。 */
          <div className={styles.columnCount} data-part="column-count">
            <span aria-hidden="true">{cardCount}</span>
            <VisuallyHidden>
              {t("a11y.kanban_column_count", { count: cardCount })}
            </VisuallyHidden>
          </div>
        )}
      </div>
      <div className={styles.columnBody} data-part="column-body" role={isCardList ? "list" : undefined}>
        <CardListContext.Provider value={isCardList}>{children}</CardListContext.Provider>
      </div>
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
  const { t } = useWimTranslation(commonNs);
  const {
    draggedItem,
    handleDragStart,
    handleMobileMove,
    activeMobileMenu,
    setActiveMobileMenu,
    focusAfterMove,
    setFocusAfterMove,
    columns,
  } = useKanban();

  const colId = React.useContext(ColumnContext);
  const inCardList = React.useContext(CardListContext);
  const moveButtonRef = React.useRef<HTMLButtonElement>(null);
  const moveRef = React.useRef<HTMLDivElement>(null);
  const menuId = React.useId();
  const menuOpen = activeMobileMenu === id;
  // 盤は横スクロールの領域（`overflow-x: auto`）なので、中に絶対配置で開くと端で切れる
  // （下の段のカードで、移動先の最後の列が見えなかった）。DOM の位置は変えずに（Tab の順はボタンの
  // 直後のまま）、`position: fixed` で切り取りを抜ける。収まらなければ上に返す
  const {
    refs: { setReference, setFloating },
    floatingStyles,
  } = useFloating({
    open: menuOpen,
    strategy: "fixed",
    placement: "bottom-end",
    whileElementsMounted: autoUpdate,
    middleware: [offset(4), flip(), shift({ padding: 10 })],
  });

  React.useEffect(() => {
    if (focusAfterMove !== id) return;
    moveButtonRef.current?.focus();
    setFocusAfterMove(null);
  }, [focusAfterMove, id, setFocusAfterMove]);

  // 閉じ方は InlineDisclosure（Breadcrumb・AvatarGroup の「…」）と揃える: Escape ではボタンへ
  // フォーカスを戻す。外側の押下・フォーカスが外へ出たときにも閉じる
  React.useEffect(() => {
    if (!menuOpen) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (!moveRef.current?.contains(event.target as Node)) setActiveMobileMenu(null);
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape" || !moveRef.current?.contains(document.activeElement)) return;
      event.stopPropagation();
      setActiveMobileMenu(null);
      moveButtonRef.current?.focus();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen, setActiveMobileMenu]);

  return (
    <div
      role={inCardList ? "listitem" : undefined}
      data-part="card"
      className={classNames(
        styles.card,
        {
          [styles.dragging]: draggedItem?.itemId === id,
          [styles.disabled]: disabled,
          [styles.menuOpen]: menuOpen,
        },
        className,
      )}
      draggable={!disabled}
      onDragStart={(e) => colId && handleDragStart(e, id, colId)}
    >
      <div className={styles.cardContent} data-part="card-content">{children}</div>

      {/*
        マウスのドラッグ以外でカードを動かす入口（T379）。以前はタッチ端末でしか出さず
        （`display: none`）、キーボードとドラッグできないマウスの利用者には動かす手段が無かった。
        ポインターの端末ではカードの角に置き、ホバーかフォーカスで見せる（隠すのは `opacity` で、
        Tab の順からは外さない）。
      */}
      <div
        ref={moveRef}
        className={styles.cardMove}
        onBlur={(event) => {
          if (menuOpen && !event.currentTarget.contains(event.relatedTarget as Node | null)) {
            setActiveMobileMenu(null);
          }
        }}
      >
        <button
          ref={(node) => {
            moveButtonRef.current = node;
            setReference(node);
          }}
          type="button"
          className={styles.cardMoveBtn}
          data-part="move-button"
          onClick={() => setActiveMobileMenu(menuOpen ? null : id)}
          aria-label={t("a11y.move_card")}
          aria-expanded={menuOpen}
          aria-controls={menuOpen ? menuId : undefined}
          disabled={disabled}
        >
          <Icon component={MoreHorizontalIcon} size="sm" />
        </button>

        {menuOpen && (
          // 中身は押すボタンの並びなので `group`。以前の `listbox` / `option` は、矢印キーで選ぶ
          // 部品だと名乗りながら矢印キーが効かず、選んだ状態も持たなかった
          <div
            id={menuId}
            ref={setFloating}
            style={floatingStyles}
            className={styles.cardMoveMenu}
            data-part="move-menu"
            role="group"
            aria-label={t("a11y.move_to_column")}
          >
            {columns
              .filter((c) => c.id !== colId)
              .map((c) => (
                <button
                  key={c.id}
                  type="button"
                  className={styles.cardMoveOption}
                  data-part="move-option"
                  onClick={() => colId && handleMobileMove(id, colId, c.id)}
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
/** 列の中身がリスト（カードだけ）として描かれているか。カードが `listitem` を名乗るかを決める。 */
const CardListContext = React.createContext(false);

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
