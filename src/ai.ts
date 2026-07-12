// Full `wimui/ai` category barrel (subpath entry). Re-exports the peer-free
// core plus the components that eagerly import an optional peer — importing
// this barrel (or the components below) requires their peer to be installed.
export * from "./ai-core";
export * from "./components/ai/StreamingText/StreamingText"; // react-markdown, remark-gfm
export * from "./components/ai/CodeDiffViewer/CodeDiffViewer"; // diff
