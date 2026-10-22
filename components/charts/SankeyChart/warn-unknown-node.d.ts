/** `links` が `nodes` に無い名前を指した。その流れは描けないので落とす。 */
export declare function warnUnknownSankeyNode(missing: string, nodes: readonly string[]): void;
/**
 * `nodes` に同じ名前が 2 つ以上ある。`links` は名前で node を指すので、
 * **2 つ目以降には 1 本も届かない** ── その段は空のまま描かれ、量だけが消える。
 */
export declare function warnDuplicateSankeyNode(duplicate: string): void;
/** Test seam — the warn-once set is module state. */
export declare function resetSankeyWarnings(): void;
