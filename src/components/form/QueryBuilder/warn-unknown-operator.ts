import { isDev } from "../../../utilities/dev-utils";

/**
 * `QueryRule.operator` は記号（`=` / `>=` / `<=` …）と一部の語（`contains` 等）で、
 * 語彙は `DEFAULT_OPERATORS` の `value`。外れた値を渡すと選択肢に無いので
 * **演算子の Select が空のまま描画され、エラーも警告も出なかった**（T124）。
 *
 * 型で塞いだうえで、型を通らない経路（JS からの利用・`as` での握り潰し・
 * サーバから来た保存済みクエリ）のために開発時の警告も置く。
 *
 * 値ごとに一度だけ出す（同じクエリに同じ誤りが並ぶため）。
 */
const warned = new Set<string>();

export function warnUnknownOperator(
  operator: string,
  fieldType: string,
  allowed: readonly string[],
): void {
  if (!isDev) return;
  const seen = `${fieldType}:${operator}`;
  if (warned.has(seen)) return;
  warned.add(seen);
  console.warn(
    `[wimui] QueryBuilder received the operator "${operator}", which is not in ` +
      `the vocabulary for a "${fieldType}" field. The operator control renders ` +
      `empty. Pass one of: ${allowed.join(" ")}. ` +
      `Note these are the operator *values* (symbols), not the translation keys ` +
      `(e.g. ">=" — not "greater_than_or_equal").`,
  );
}

/** Test seam — the warn-once set is module state. */
export function resetQueryBuilderWarnings(): void {
  warned.clear();
}
