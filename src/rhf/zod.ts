/**
 * Re-export `@hookform/resolvers/zod` so apps can wire zod schemas without an extra import path.
 * Requires optional peers: `zod` (^3.25 || ^4), `@hookform/resolvers` (^5.1 || ^6), `react-hook-form` (^7.55).
 * See README「サポート行列（peer）」.
 */
export { zodResolver } from "@hookform/resolvers/zod";
