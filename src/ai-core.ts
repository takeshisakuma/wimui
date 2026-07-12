// AI components that have no optional peer dependency — safe to include in the
// root `wimui` barrel (which must import cleanly in non-bundler/Node contexts).
// The full `wimui/ai` barrel (src/ai.ts) re-exports this plus the peer-heavy
// components (StreamingText / MarkdownRenderer → react-markdown, CodeDiffViewer → diff, InteractiveGraph → @xyflow/react), which are
// therefore only reachable via `wimui/ai` or their per-component subpath.
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
