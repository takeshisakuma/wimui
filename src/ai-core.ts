// AI components that have no optional peer dependency — safe to include in the
// root `wimui` barrel (which must import cleanly in non-bundler/Node contexts).
// The full `wimui/ai` barrel (src/ai.ts) re-exports this plus the peer-heavy
// components (StreamingText / MarkdownRenderer → react-markdown, CodeDiffViewer → diff, InteractiveGraph → @xyflow/react), which are
// therefore only reachable via `wimui/ai` (not the root barrel).
export * from "./components/ai/PromptInput/PromptInput";
export * from "./components/ai/ThoughtProcess/ThoughtProcess";
export * from "./components/ai/AIResponseFeedback/AIResponseFeedback";
export * from "./components/ai/SourceCitation/SourceCitation";
export * from "./components/ai/CodeBlock/CodeBlock";
export * from "./components/ai/Terminal/Terminal";
export * from "./components/ai/AgentStatus/AgentStatus";
export * from "./components/ai/VoiceVisualizer/VoiceVisualizer";
export * from "./components/ai/ModelSelector/ModelSelector";
export * from "./components/ai/ThreadList/ThreadList";
export * from "./components/ai/UsageMeter/UsageMeter";
export * from "./components/ai/ChatUI/ChatUI";
// Drawer の上に載るだけで optional peer は持たない（Drawer → OverlayBase）。
// `components.json` に公開部品として載り MDX / Hierarchy.mdx からも参照されて
// いながら、**どのバレルからも出ていなかった**（0.22.0 まで dist/ai.d.ts に
// 名前が無い＝利用者が import できない）。10 枚目の合成画面を書こうとして発覚。
export * from "./components/ai/ArtifactsOverlay/ArtifactsOverlay";
