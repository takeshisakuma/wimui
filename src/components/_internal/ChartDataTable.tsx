import React from "react";
import styles from "./chart-data-table.module.scss";

/** 表に入れられる値。`ChartDataPoint` の値域と揃える。 */
export type ChartTableCell = string | number | null | undefined;

export type ChartDataTableProps = {
  /**
   * 表の名前。図に付けた名前をそのまま使う（別の名前を作らない）。
   *
   * **`<caption>` ではなく `aria-label` で付ける。** `<caption>` は DOM に
   * テキストノードを足すので、可視の見出しと同じ文字列が 2 つになり、
   * 利用者側の `getByText(title)` が**多重一致で落ちる**（この repo 自身の
   * チャートテスト 10 件が実際に落ちた）。名前の付き方は変わらないのに
   * 使う側のテストだけ壊すのは筋が悪い。
   */
  caption?: string;
  /** 列見出し。1 列目は行見出しになる。 */
  columns: string[];
  /** 行。`columns` と同じ長さで渡す。 */
  rows: ChartTableCell[][];
};

/**
 * チャートの値を、**目には見えないが支援技術は読める表**として併記する（T230）。
 *
 * ── なぜ名前だけでは足りないのか ────────────────────────────────────────
 * `role="img"` と `aria-label` を付ければ「この図が何か」は伝わるが、**描かれた
 * 値は 1 つも伝わらない**。チャートは値を見せるための部品なので、名前だけでは
 * 「グラフがあります」と言って終わる。表を併記して初めて、見えない人にも同じ
 * 情報が届く。
 *
 * ── 図の**中**には置けない ──────────────────────────────────────────────
 * `role="img"` は **children presentational**（中身が支援技術に露出しない）。
 * 表を `role="img"` の内側に置くと**読まれない**ので、この部品は必ず図の
 * **兄弟**として置く。チャート側は根を `role="figure"` にし、recharts の描画を
 * `aria-hidden` で隠したうえで、この表を並べる。
 *
 * ── 隠し方 ──────────────────────────────────────────────────────────────
 * `VisuallyHidden` は `<span>` を描くので、`<table>` を入れると**不正な HTML**に
 * なる（span は phrasing content）。そのため同じ視覚隠蔽の規則を持つ `<div>` を
 * ここで用意している。規則は `visuallyHidden.module.scss` と同一。
 *
 * ── 空のときは何も描かない ──────────────────────────────────────────────
 * 見出しだけの表は音声で読むと雑音になるだけなので、行が無ければ描かない。
 */
export const ChartDataTable = ({
  caption,
  columns,
  rows,
}: ChartDataTableProps) => {
  if (columns.length === 0 || rows.length === 0) {
    return null;
  }

  return (
    <div className={styles.root}>
      <table aria-label={caption}>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={`${column}-${index}`} scope="col">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) =>
                cellIndex === 0 ? (
                  <th key={cellIndex} scope="row">
                    {cell}
                  </th>
                ) : (
                  <td key={cellIndex}>{cell}</td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
