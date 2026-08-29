import { isDev } from "../../../utilities/dev-utils";

/**
 * `SankeyChart` の名前まわりの開発時の警告（`QueryBuilder` / `Barcode` と同じ形）。
 *
 * どちらも**画面には「合計が合わない」としか出ない**、いちばん気づきにくい
 * 壊れ方をする。名前の綴りも重複も開発者にしか直せないので、ここに書く。
 */
const warned = new Set<string>();

/** `links` が `nodes` に無い名前を指した。その流れは描けないので落とす。 */
export function warnUnknownSankeyNode(missing: string, nodes: readonly string[]): void {
  if (!isDev) return;
  const key = `unknown:${missing}`;
  if (warned.has(key)) return;
  warned.add(key);
  console.warn(
    `[wimui] SankeyChart received a link naming ${JSON.stringify(missing)}, ` +
      `which is not in nodes. That flow is not drawn, so the totals will not add up. ` +
      `Known nodes: ${nodes.map((n) => JSON.stringify(n)).join(", ")}.`,
  );
}

/**
 * `nodes` に同じ名前が 2 つ以上ある。`links` は名前で node を指すので、
 * **2 つ目以降には 1 本も届かない** ── その段は空のまま描かれ、量だけが消える。
 */
export function warnDuplicateSankeyNode(duplicate: string): void {
  if (!isDev) return;
  const key = `duplicate:${duplicate}`;
  if (warned.has(key)) return;
  warned.add(key);
  console.warn(
    `[wimui] SankeyChart received ${JSON.stringify(duplicate)} more than once in nodes. ` +
      `Links name nodes by name, so every flow resolves to the first one and the later ` +
      `copies stay empty. Give each node a distinct name.`,
  );
}

/** Test seam — the warn-once set is module state. */
export function resetSankeyWarnings(): void {
  warned.clear();
}
