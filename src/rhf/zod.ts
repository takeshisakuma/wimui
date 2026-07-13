/**
 * Re-export `@hookform/resolvers/zod` so apps can wire zod schemas without an extra import path.
 * Requires optional peers: `zod`, `@hookform/resolvers`, `react-hook-form`.
 */
export { zodResolver } from "@hookform/resolvers/zod";
