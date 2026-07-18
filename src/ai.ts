// `wimui/ai` category barrel (subpath entry) — PEER-FREE (T17).
// Only the peer-free core components are re-exported here, so importing this
// barrel never pulls an optional peer. The peer-dependent components moved to
// dedicated subpaths whose names document their peer:
//   StreamingText    → wimui/ai/streaming-text     (react-markdown, remark-gfm)
//   MarkdownRenderer → wimui/ai/markdown-renderer   (react-markdown, remark-gfm)
//   CodeDiffViewer   → wimui/ai/code-diff-viewer    (diff)
//   InteractiveGraph → wimui/ai/interactive-graph   (@xyflow/react)
export * from "./ai-core";
