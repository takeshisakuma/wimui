import { isDev } from "../../../utilities/dev-utils";

/**
 * 描けない値を渡されたときの開発時の警告（`QueryBuilder` の
 * `warn-unknown-operator.ts` と同じ形）。
 *
 * `Barcode` は描かないという判断で応えるが、**画面には「描けなかった」としか
 * 出せない**。なぜ描けないか（桁数なのか、チェックディジットなのか、
 * 載らない文字なのか）は開発者にしか意味が無いので、こちらに書く。
 *
 * 値ごとに一度だけ出す（一覧に同じ誤りが並ぶため）。
 */
const warned = new Set<string>();

export function warnUnencodableValue(value: string, format: string, formatName: string): void {
  if (!isDev) return;
  const seen = `${format}:${value}`;
  if (warned.has(seen)) return;
  warned.add(seen);

  const reason =
    format === "ean13"
      ? "EAN-13 takes 12 digits (the check digit is calculated) or 13 digits " +
        "(the check digit is verified). Anything else — letters, spaces, a wrong " +
        "check digit — cannot be encoded."
      : "Code 128 takes printable ASCII (character codes 32 to 126). Control " +
        "characters and non-ASCII text cannot be encoded.";

  console.warn(
    `[wimui] Barcode cannot encode ${JSON.stringify(value)} as ${formatName}, ` +
      `so no symbol is drawn. ${reason}`,
  );
}

/** Test seam — the warn-once set is module state. */
export function resetBarcodeWarnings(): void {
  warned.clear();
}
