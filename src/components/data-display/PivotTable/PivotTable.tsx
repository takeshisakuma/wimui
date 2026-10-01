import React, { useCallback, useMemo, useState } from "react";
import classNames from "classnames";
import { useWimTranslation } from "@/i18n/useWimTranslation";
import { ChevronRightIcon } from "@/icon";
import { useMergedRef } from "../../../hooks/useMergedRef";
import { Icon } from "../../media/Icon/Icon";
import { VisuallyHidden } from "../../layout/VisuallyHidden/VisuallyHidden";
import { Table } from "../Table/Table";
import { layoutPivotColumns, layoutPivotRows, pivotRowWindow } from "./layoutPivot";
import localStyles from "./pivot-table.module.scss";

export type PivotTableAxisNode = {
  /** Unique within its axis. Passed back to `getValue`. */
  key: string;
  /**
   * Heading shown for this row or column. On the row axis the label of a group is drawn
   * inside its expand / collapse button, so it must not contain links or other controls.
   */
  label: React.ReactNode;
  /** Nested headings. A node with children is a group; its own value is the subtotal. */
  children?: PivotTableAxisNode[];
};

export type PivotTableLabels = {
  /** Heading of the grand total row / column and of each subtotal column. */
  total?: string;
};

export type PivotTableProps = Omit<React.ComponentPropsWithoutRef<"table">, "children"> & {
  /** The row axis as a tree. Groups are drawn as an outline: one indented row per node. */
  rows: PivotTableAxisNode[];
  /** The column axis as a tree. Groups become headings that span their columns. */
  columns: PivotTableAxisNode[];
  /**
   * Returns the content of one cell. The component does not aggregate: a group key asks
   * for that group's subtotal and `null` asks for the grand total of that axis. Return
   * `null` or `undefined` for an empty cell.
   */
  getValue: (rowKey: string | null, columnKey: string | null) => React.ReactNode;
  /** Heading of the row axis, shown in the top-left corner. */
  rowAxisLabel?: React.ReactNode;
  /** Visible title of the table, also its accessible name. */
  caption?: React.ReactNode;
  /**
   * Keys of the expanded row groups (controlled). A group that is not listed shows only
   * its own row, which carries its subtotal.
   */
  expandedValues?: string[];
  /** Row groups expanded on first render (uncontrolled). Defaults to every group. */
  defaultExpandedValues?: string[];
  /** Called with the new list of expanded row groups when a group is expanded or collapsed. */
  onExpandedChange?: (values: string[]) => void;
  /**
   * Maximum height of the table (a number is px). Past it the table scrolls vertically
   * inside its own box.
   */
  maxHeight?: string | number;
  /**
   * Keeps the column headings in view while the table scrolls vertically. Every heading
   * level stays, stacked in order. Only has an effect together with `maxHeight`.
   */
  stickyHeader?: boolean;
  /**
   * Keeps the row headings in view while the table scrolls sideways. The column is only
   * pinned while it takes at most half of the visible width; in a narrower container it
   * scrolls with the rest, so that the values stay readable.
   */
  stickyRowHeaders?: boolean;
  /**
   * Renders only the rows in view (plus a few around them) and keeps the scroll height
   * with empty spacer rows. Use it for tables with hundreds of rows, together with
   * `maxHeight`. Rows must all have the same height, so keep labels and values on one line.
   */
  virtualized?: boolean;
  /** Adds a subtotal column after the columns of each column group. */
  columnSubtotals?: boolean;
  /** Adds a grand total row at the bottom. */
  totalRow?: boolean;
  /** Adds a grand total column at the right edge. */
  totalColumn?: boolean;
  /** Text of the total headings, for when the built-in translations do not fit. */
  labels?: PivotTableLabels;
};

// 行の高さを測る前の 1 回目の描画で使う見積もり。測ったらその値に置き換わる。
const ROW_HEIGHT_ESTIMATE = 40; /* Exception: Structural Logic — 仮想化の最初の描画で使う行の高さの見積もり（描画後に実測で置き換える） */
// 見えている範囲の上下に余分に描く行の数。速いスクロールで空白が見えないための余裕。
const OVERSCAN_ROWS = 8;
// 器の高さを測る前の 1 回目の描画で描く行の数（全行を描いてから減らすことをしない）。
const INITIAL_ROWS = 30;

const collectGroupKeys = (nodes: PivotTableAxisNode[], out: string[] = []): string[] => {
  for (const node of nodes) {
    if (node.children?.length) {
      out.push(node.key);
      collectGroupKeys(node.children, out);
    }
  }
  return out;
};

/**
 * PivotTable — draws already aggregated data as a table with multi-level row and column
 * headings, subtotals and grand totals. It only draws: grouping and summing stay with the
 * caller, who answers `getValue(rowKey, columnKey)` for every cell.
 *
 * Row groups can be collapsed to their subtotal row with the button in their heading
 * (Enter or Space). The button is named by the group label, so the heading still reads as
 * the plain label when a cell announces it.
 *
 * Every cell lists the headings it belongs to in its `headers` attribute, so a screen
 * reader announces the full row path and column path of a value.
 *
 * The shell is its own (a sideways scroller and a plain `table`); rows and value cells are
 * `Table.Row` / `Table.Cell`, so spacing and density follow `Table`.
 *
 * Composition Contract:
 * - Managed by: App consumption
 * - Scroll lock: No (the table scrolls sideways inside its own box when it is wider than it)
 */
export const PivotTable = React.forwardRef<HTMLTableElement, PivotTableProps>(
  (
    {
      rows,
      columns,
      getValue,
      rowAxisLabel,
      caption,
      expandedValues: controlledExpanded,
      defaultExpandedValues,
      onExpandedChange,
      maxHeight,
      stickyHeader = false,
      stickyRowHeaders = false,
      virtualized = false,
      columnSubtotals = false,
      totalRow = false,
      totalColumn = false,
      labels,
      className,
      ...props
    },
    ref,
  ) => {
    const { t } = useWimTranslation("components");
    const idBase = React.useId();
    const totalLabel = labels?.total ?? t("pivottable.total");

    const columnLayout = useMemo(
      () => layoutPivotColumns(columns, { subtotals: columnSubtotals, total: totalColumn }),
      [columns, columnSubtotals, totalColumn],
    );
    const [uncontrolledExpanded, setUncontrolledExpanded] = useState<string[]>(
      () => defaultExpandedValues ?? collectGroupKeys(rows),
    );
    const expanded = controlledExpanded ?? uncontrolledExpanded;
    const expandedSet = useMemo(() => new Set(expanded), [expanded]);
    const toggle = useCallback(
      (key: string) => {
        const next = expandedSet.has(key) ? expanded.filter((v) => v !== key) : [...expanded, key];
        if (controlledExpanded === undefined) setUncontrolledExpanded(next);
        onExpandedChange?.(next);
      },
      [expanded, expandedSet, controlledExpanded, onExpandedChange],
    );

    const rowLayout = useMemo(() => layoutPivotRows(rows, (key) => expandedSet.has(key)), [rows, expandedSet]);
    // 開閉ボタンを持つ行が 1 つでもあれば、持たない行の文字をボタンの文字の位置に揃える
    const hasRowGroups = useMemo(() => collectGroupKeys(rows).length > 0, [rows]);

    const hasCorner = rowAxisLabel !== undefined && rowAxisLabel !== null && rowAxisLabel !== false;
    const cornerId = `${idBase}corner`;
    const columnHeaderId = (id: number) => `${idBase}c${id}`;
    const rowHeaderId = (index: number) => `${idBase}r${index}`;
    const totalRowId = `${idBase}total`;

    // 値のセルの `headers`: 行の経路（根から自分まで）→ 列の経路（上の段から下の段まで）
    const columnPaths = useMemo(
      () => columnLayout.columns.map((c) => c.headerIds.map((id) => `${idBase}c${id}`).join(" ")),
      [columnLayout, idBase],
    );

    /*
     * 表が器より広いとき（`maxHeight` を渡したときは高いときも）は器の中でスクロールする。スクロールできる領域はキーボードでも辿れなければ
     * ならない（WCAG 2.1.1・axe の `scrollable-region-focusable`）ので、**はみ出しているときだけ**
     * タブ位置にする（Barcode と同じ形）。収まっているあいだは余計なタブ停止を増やさない。
     * 器の幅でも表の幅（データ）でも変わるので、両方を見張る。
     */
    const scrollerRef = React.useRef<HTMLDivElement>(null);
    const tableRef = React.useRef<HTMLTableElement>(null);
    const [scrollable, setScrollable] = React.useState(false);
    // 行見出しの列を固定してよい幅か。列が器の半分を超えるときは固定しない（下の measure を参照）
    const [rowHeadersFit, setRowHeadersFit] = React.useState(true);

    React.useLayoutEffect(() => {
      const scroller = scrollerRef.current;
      const table = tableRef.current;
      if (!scroller || !table || typeof ResizeObserver === "undefined") return;
      const measure = () => {
        setScrollable(scroller.scrollWidth > scroller.clientWidth || scroller.scrollHeight > scroller.clientHeight);
        // 固定した列は、値を見る幅を削る。狭い器で長い見出しを固定すると値がほとんど見えなくなる
        // （実測: 390px の画面で見出しの列が 323px を取り、値に残るのは 35px）。列が器の半分を
        // 超えるあいだは固定をやめ、見出しごと横に流す。
        const headingColumn = table.rows[0]?.cells[0];
        setRowHeadersFit(!headingColumn || headingColumn.offsetWidth <= scroller.clientWidth / 2);
      };
      measure();
      const observer = new ResizeObserver(measure);
      observer.observe(scroller);
      observer.observe(table);
      return () => observer.disconnect();
    }, []);

    const mergedRef = useMergedRef(ref, tableRef);
    const stickLeft = stickyRowHeaders && rowHeadersFit;

    /*
     * 見出しの固定は、段ごとに `top` を持つ。全段に同じ `top` を当てると、Table の
     * `stickyHeader` のように全段が同じ位置に重なる。段の高さは文字の折り返しや密度で変わるので、
     * 決め打ちにせず実際の行を測る（上の段までの高さの合計が、その段の `top`）。
     */
    const headerRowRefs = React.useRef<(HTMLTableRowElement | null)[]>([]);
    const [headerTops, setHeaderTops] = useState<number[]>([]);
    const headerDepth = columnLayout.depth;

    React.useLayoutEffect(() => {
      if (!stickyHeader) return;
      const rowsEls = headerRowRefs.current.slice(0, headerDepth);
      const measure = () => {
        let top = 0;
        const next = rowsEls.map((row) => {
          const current = top;
          top += row?.getBoundingClientRect().height ?? 0;
          return current;
        });
        setHeaderTops((prev) => (prev.length === next.length && prev.every((v, i) => v === next[i]) ? prev : next));
      };
      measure();
      if (typeof ResizeObserver === "undefined") return;
      const observer = new ResizeObserver(measure);
      rowsEls.forEach((row) => row && observer.observe(row));
      return () => observer.disconnect();
    }, [stickyHeader, headerDepth]);

    /*
     * 行の仮想化。見えている行と上下の余分だけを描き、描かない行は空の行 1 つにまとめて高さを保つ。
     * 表のまま（`tr` / `td`）なので、見出しと値の対応は崩れない。
     */
    const bodyRef = React.useRef<HTMLTableSectionElement>(null);
    const [rowHeight, setRowHeight] = useState(0);
    const [view, setView] = useState<{ scrollTop: number; height: number; bodyOffset: number } | null>(null);
    // フォーカスを持つ行。窓の外へ出ても描いたままにする（消すとフォーカスがページの先頭へ戻る）
    const [focusedRowKey, setFocusedRowKey] = useState<string | null>(null);
    // 列の幅は、描かれている行の中身で決まる。見えている行だけを描くと、桁の多い値が現れるたびに
    // 列が動く。一度広がった幅は覚えておき、狭くは戻さない。
    const [columnWidths, setColumnWidths] = useState<number[]>([]);
    const lastClientWidth = React.useRef(0);

    const measureView = useCallback(() => {
      const scroller = scrollerRef.current;
      const body = bodyRef.current;
      const table = tableRef.current;
      if (!scroller || !body || !table) return;
      const firstRow = body.querySelector<HTMLTableRowElement>("tr[data-row-index]");
      const measuredRow = firstRow?.getBoundingClientRect().height ?? 0;
      if (measuredRow > 0) setRowHeight((prev) => (Math.abs(prev - measuredRow) < 0.01 ? prev : measuredRow));
      const next = {
        scrollTop: scroller.scrollTop,
        height: scroller.clientHeight,
        bodyOffset: body.getBoundingClientRect().top - scroller.getBoundingClientRect().top + scroller.scrollTop,
      };
      setView((prev) =>
        prev && prev.scrollTop === next.scrollTop && prev.height === next.height && prev.bodyOffset === next.bodyOffset
          ? prev
          : next,
      );
      // 列の幅: 見出しの最下段のセル（列ごとに 1 つ）と角のセルを測る
      const widths = Array.from(table.querySelectorAll<HTMLElement>("thead [data-column-index]")).reduce<number[]>(
        (out, cell) => {
          out[Number(cell.dataset.columnIndex)] = cell.getBoundingClientRect().width;
          return out;
        },
        [],
      );
      // 器の幅が変わったら覚えた幅は捨てる（広い器で伸びた幅を、狭い器に持ち込まない）
      const reset = lastClientWidth.current !== scroller.clientWidth;
      lastClientWidth.current = scroller.clientWidth;
      setColumnWidths((prev) => {
        const base = reset ? [] : prev;
        // 端数のまま覚える（丸めると、切り捨てなら 1px 未満だけ縮み、切り上げなら表が器からはみ出す）。
        // 測り直しの誤差で更新が続かないよう、0.01px を超えて広がったときだけ更新する
        const merged = widths.map((w, i) => ((w || 0) > (base[i] ?? 0) + 0.01 ? w : (base[i] ?? 0)));
        return merged.length === prev.length && merged.every((w, i) => w === prev[i]) ? prev : merged;
      });
    }, []);

    const rowCount = rowLayout.length;
    const leafColumnCount = columnLayout.columns.length;
    React.useLayoutEffect(() => {
      if (!virtualized) return;
      measureView();
      if (typeof ResizeObserver === "undefined") return;
      const observer = new ResizeObserver(measureView);
      if (scrollerRef.current) observer.observe(scrollerRef.current);
      return () => observer.disconnect();
      // 行や列の数が変わったら測り直す
    }, [virtualized, measureView, rowCount, leafColumnCount]);

    const rowIndexByKey = useMemo(() => new Map(rowLayout.map((row, index) => [row.key, index])), [rowLayout]);
    const segments = useMemo(() => {
      if (!virtualized) return null;
      if (!view) {
        // 1 回目の描画: まだ器を測っていない。先頭の数十行だけ描く
        const first = Math.min(rowCount, INITIAL_ROWS);
        return pivotRowWindow({
          rowCount,
          rowHeight: ROW_HEIGHT_ESTIMATE,
          scrollTop: 0,
          viewportHeight: first * ROW_HEIGHT_ESTIMATE,
          bodyOffset: 0,
          overscan: 0,
        });
      }
      return pivotRowWindow({
        rowCount,
        rowHeight: rowHeight || ROW_HEIGHT_ESTIMATE,
        scrollTop: view.scrollTop,
        viewportHeight: view.height,
        bodyOffset: view.bodyOffset,
        overscan: OVERSCAN_ROWS,
        keep: focusedRowKey === null ? null : (rowIndexByKey.get(focusedRowKey) ?? null),
      });
    }, [virtualized, view, rowCount, rowHeight, focusedRowKey, rowIndexByKey]);

    // 値の列の番号 → その列の見出しの最下段のセルの id（列幅を測る・下限を渡すため）
    const columnIndexByHeaderId = useMemo(
      () => new Map(columnLayout.columns.map((column, index) => [column.headerIds[column.headerIds.length - 1], index])),
      [columnLayout],
    );
    // 角のセルが 0 番、値の列は 1 番から
    const columnWidthProps = (index: number | undefined) =>
      virtualized && index !== undefined
        ? { "data-column-index": index, style: columnWidths[index] ? { minWidth: columnWidths[index] } : undefined }
        : null;

    // 段の高さは端数を持つ（実測 38.39px）。そのまま積むと段と段の間に 1px 未満の隙間ができ、下を
    // 流れる中身が覗く。`top` は切り捨て、重なった分は上の段を手前にして隠す。角はどの段よりも手前。
    const stickyTop = (level: number, corner = false): React.CSSProperties | undefined =>
      stickyHeader
        ? { top: Math.floor(headerTops[level] ?? 0), zIndex: 10 + headerDepth - level + (corner ? 1 : 0) }
        : undefined;

    // タブ位置になった領域には、表と同じ名前を付ける（名前の無い領域にはしない）
    const captionId = `${idBase}caption`;
    const regionName = caption
      ? { "aria-labelledby": captionId }
      : props["aria-label"]
        ? { "aria-label": props["aria-label"] }
        : props["aria-labelledby"]
          ? { "aria-labelledby": props["aria-labelledby"] }
          : null;

    const renderRow = (row: (typeof rowLayout)[number], index: number) => {
      // 仮想化しているときは、祖先の行が描かれているとは限らない。存在しない id を `headers` に
      // 書かないよう、祖先は指さず、代わりに祖先の名前を見出しセルの中に（見えない形で）入れる。
      const rowPath = virtualized
        ? rowHeaderId(index)
        : [...row.ancestors.map(rowHeaderId), rowHeaderId(index)].join(" ");
      const ancestorPath = [
        ...(hasCorner ? [cornerId] : []),
        ...(virtualized ? [] : row.ancestors.map(rowHeaderId)),
      ].join(" ");
      return (
        <Table.Row
          key={row.key}
          className={classNames(row.hasChildren && localStyles.groupRow)}
          data-row-index={virtualized ? index : undefined}
          data-row-key={virtualized ? row.key : undefined}
          aria-rowindex={virtualized ? headerDepth + index + 1 : undefined}
        >
          <th
            id={rowHeaderId(index)}
            scope="row"
            headers={ancestorPath || undefined}
            className={classNames(localStyles.rowHeader, stickLeft && localStyles.stickyLeft)}
            style={{ "--wim-pivot-table-depth": row.depth } as React.CSSProperties}
          >
            {virtualized && row.ancestors.length > 0 && (
              <VisuallyHidden>
                {row.ancestors.map((ancestor) => (
                  <React.Fragment key={ancestor}>
                    {rowLayout[ancestor].node.label}
                    {", "}
                  </React.Fragment>
                ))}
              </VisuallyHidden>
            )}
            {row.hasChildren ? (
              <button
                type="button"
                className={localStyles.toggle}
                aria-expanded={row.expanded}
                onClick={() => toggle(row.key)}
              >
                <span className={classNames(localStyles.chevron, row.expanded && localStyles.open)} aria-hidden="true">
                  <Icon component={ChevronRightIcon} size="sm" />
                </span>
                {row.node.label}
              </button>
            ) : (
              <span className={classNames(hasRowGroups && localStyles.leafLabel)}>{row.node.label}</span>
            )}
          </th>
          {columnLayout.columns.map((column, c) => (
            <Table.Cell
              key={c}
              headers={`${rowPath} ${columnPaths[c]}`}
              className={classNames(
                localStyles.value,
                column.kind !== "leaf" && localStyles.aggregate,
                column.startsGroup && !(stickLeft && c === 0) && localStyles.groupStart,
              )}
            >
              {getValue(row.key, column.key)}
            </Table.Cell>
          ))}
        </Table.Row>
      );
    };

    return (
      <div
        ref={scrollerRef}
        className={localStyles.scroller}
        style={maxHeight !== undefined ? { maxHeight } : undefined}
        tabIndex={scrollable ? 0 : undefined}
        onScroll={virtualized ? measureView : undefined}
        {...(scrollable && regionName ? { role: "region", ...regionName } : null)}
      >
        <table
          ref={mergedRef}
          className={classNames("wim-pivot-table", localStyles.root, className)}
          // 描いていない行も数に入れる（見出しの段 ＋ 行 ＋ 総計の行）
          aria-rowcount={virtualized ? headerDepth + rowCount + (totalRow ? 1 : 0) : undefined}
          {...props}
        >
          {caption && (
            <caption id={captionId} className={localStyles.caption}>
              {caption}
            </caption>
          )}
          {/* `scope="colgroup"` は、対応する `colgroup` があるときだけ正しい。最上位の節ごとに 1 つ置く */}
          <colgroup />
          {columnLayout.groupSpans.map((span, i) => (
            <colgroup key={i} span={span} />
          ))}
          <Table.Header>
            {columnLayout.headerRows.map((cells, level) => (
              <tr
                key={level}
                aria-rowindex={virtualized ? level + 1 : undefined}
                ref={(el) => {
                  headerRowRefs.current[level] = el;
                }}
              >
                {level === 0 &&
                  (hasCorner ? (
                    <th
                      id={cornerId}
                      scope="col"
                      rowSpan={columnLayout.depth}
                      className={classNames(
                        localStyles.columnHeader,
                        localStyles.corner,
                        localStyles.bottom,
                        stickyHeader && localStyles.stickyTop,
                        stickLeft && localStyles.stickyLeft,
                      )}
                      {...columnWidthProps(0)}
                      style={{ ...stickyTop(0, true), ...columnWidthProps(0)?.style }}
                    >
                      {rowAxisLabel}
                    </th>
                  ) : (
                    // 中身の無い見出しセルは置かない（空の `th` は読み上げで「見出し、空」になる）
                    <td
                      rowSpan={columnLayout.depth}
                      className={classNames(
                        localStyles.columnHeader,
                        localStyles.bottom,
                        stickyHeader && localStyles.stickyTop,
                        stickLeft && localStyles.stickyLeft,
                      )}
                      {...columnWidthProps(0)}
                      style={{ ...stickyTop(0, true), ...columnWidthProps(0)?.style }}
                    />
                  ))}
                {cells.map((cell, cellIndex) => (
                  <th
                    key={cell.id}
                    id={columnHeaderId(cell.id)}
                    // 入れ子のグループは `colgroup` を持てないので、掛かる列で示す（`col` は `colSpan` の幅に効く）
                    scope={cell.kind === "group" && cell.topLevel ? "colgroup" : "col"}
                    colSpan={cell.colSpan > 1 ? cell.colSpan : undefined}
                    rowSpan={cell.rowSpan > 1 ? cell.rowSpan : undefined}
                    className={classNames(
                      localStyles.columnHeader,
                      cell.kind === "group" && localStyles.group,
                      cell.reachesBottom && localStyles.bottom,
                      // 行見出しの列を固定するときは、先頭の列の左の線を固定した列の側が描く
                      cell.startsGroup && !(stickLeft && cellIndex === 0) && localStyles.groupStart,
                      stickyHeader && localStyles.stickyTop,
                    )}
                    {...(cell.reachesBottom ? columnWidthProps((columnIndexByHeaderId.get(cell.id) ?? -1) + 1) : null)}
                    style={{
                      ...stickyTop(level),
                      ...(cell.reachesBottom
                        ? columnWidthProps((columnIndexByHeaderId.get(cell.id) ?? -1) + 1)?.style
                        : null),
                    }}
                  >
                    {cell.kind === "group" || cell.kind === "leaf" ? cell.node?.label : totalLabel}
                  </th>
                ))}
              </tr>
            ))}
          </Table.Header>
          <Table.Body
            ref={bodyRef}
            onFocus={
              virtualized
                ? (e) => {
                    const key = (e.target as HTMLElement).closest("tr")?.dataset.rowKey;
                    if (key !== undefined) setFocusedRowKey(key);
                  }
                : undefined
            }
            onBlur={
              virtualized
                ? (e) => {
                    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setFocusedRowKey(null);
                  }
                : undefined
            }
          >
            {(segments ?? [{ kind: "rows" as const, from: 0, to: rowCount }]).map((segment, segmentIndex) =>
              segment.kind === "gap" ? (
                // 描かない行のぶんの高さ。読み上げにも数にも入れない
                <tr key={`gap-${segmentIndex}`} aria-hidden="true" className={localStyles.gap}>
                  <td
                    colSpan={leafColumnCount + 1}
                    style={{ height: segment.count * (rowHeight || ROW_HEIGHT_ESTIMATE) }}
                  />
                </tr>
              ) : (
                rowLayout.slice(segment.from, segment.to).map((row, offset) => renderRow(row, segment.from + offset))
              ),
            )}
          </Table.Body>
          {totalRow && (
            <Table.Footer>
              <Table.Row
                className={localStyles.totalRow}
                aria-rowindex={virtualized ? headerDepth + rowCount + 1 : undefined}
              >
                <th
                  id={totalRowId}
                  scope="row"
                  headers={hasCorner ? cornerId : undefined}
                  className={classNames(localStyles.rowHeader, stickLeft && localStyles.stickyLeft)}
                >
                  <span className={classNames(hasRowGroups && localStyles.leafLabel)}>{totalLabel}</span>
                </th>
                {columnLayout.columns.map((column, c) => (
                  <Table.Cell
                    key={c}
                    headers={`${totalRowId} ${columnPaths[c]}`}
                    className={classNames(
                      localStyles.value,
                      column.startsGroup && !(stickLeft && c === 0) && localStyles.groupStart,
                    )}
                  >
                    {getValue(null, column.key)}
                  </Table.Cell>
                ))}
              </Table.Row>
            </Table.Footer>
          )}
        </table>
      </div>
    );
  },
);

PivotTable.displayName = "PivotTable";
