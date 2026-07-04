import React from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useTranslation } from "react-i18next";
import { ALL_NAMESPACES } from "../i18nConstants";
import {
  PromptInput,
  StreamingText,
  ThoughtProcess,
  ThoughtStep,
  AIResponseFeedback,
  SourceCitation,
  SourceCitationList,
  CodeBlock,
  CodeDiffViewer,
  Terminal,
  AgentStatus,
  VoiceVisualizer,
  ChatMessageList,
  ChatMessage,
  ChatInput,
  Stack,
  Box,
} from "../../src";
import { AuditPage, ComparisonGrid, ComponentGroup } from "./AuditUtils";

const meta: Meta = {
  title: "Audit/AIFamily",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

const SAMPLE_CODE = `import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}`;

const DIFF_BEFORE = `function hello() {
  console.log("Hello, world!");
}`;

const DIFF_AFTER = `function hello(name: string = "world") {
  console.log(\`Hello, \${name}!\`);
}

hello("Antigravity");`;

const TERMINAL_LINES = [
  { type: "info" as const, content: "\u001b[90m[system] Initializing environment...\u001b[0m" },
  { type: "input" as const, content: "npm run build" },
  { type: "output" as const, content: "\u001b[32m[OK]\u001b[0m Checking types..." },
  { type: "output" as const, content: "\u001b[32m[OK]\u001b[0m Generating bundle..." },
  { type: "output" as const, content: "Build complete in \u001b[1m1.2s\u001b[0m" },
  { type: "error" as const, content: "\u001b[31m[warning] 12 chunks exceed 500kB.\u001b[0m" },
];

export const Overview: StoryObj = {
  render: () => {
    const { t } = useTranslation([...ALL_NAMESPACES, "audit"]);

    // 引用元タイトルは実在ドキュメントの固有名詞のため英語のまま
    const sampleSources = [
      { title: "React Documentation", url: "https://react.dev/", description: t("audit:ai_source_react_desc") },
      { title: "MDN Web Docs", url: "https://developer.mozilla.org/", description: t("audit:ai_source_mdn_desc") },
      { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/", description: t("audit:ai_source_ts_desc") },
    ];

    const sampleSteps = [
      { label: t("audit:ai_step_init_label"), content: t("audit:ai_step_init_content"), status: "completed" as const },
      { label: t("audit:ai_step_retrieve_label"), content: t("audit:ai_step_retrieve_content"), status: "completed" as const },
      { label: t("audit:ai_step_synth_label"), content: t("audit:ai_step_synth_content"), status: "pending" as const },
    ];

    const sampleMessages = [
      { id: "1", role: "user" as const, content: t("audit:ai_chat_user_msg") },
      { id: "2", role: "assistant" as const, content: t("audit:ai_chat_assistant_msg") },
    ];

    return (
      <AuditPage title={t("audit:ai_family_title")}>

        {/* Streaming Visual Check */}
        <ComparisonGrid title={t("audit:ai_streaming_visual_check")}>
          <ComponentGroup
            label={`${t("audit:label_streaming_text")} — active`}
            maxWidth="var(--wim-width-md)"
          >
            <Box p="md" bg="bg-surface" radius="sm" style={{ border: "1px solid var(--wim-color-border)" }}>
              <StreamingText
                content={t("audit:ai_streaming_sample")}
                isStreaming
              />
            </Box>
          </ComponentGroup>
          <ComponentGroup label={`${t("audit:label_chat_ui")} — overall structure`} align="stretch">
            <Box style={{ height: "450px", border: "1px solid var(--wim-color-border)", borderRadius: "var(--wim-radius-md)", overflow: "hidden", display: "flex", flexDirection: "column" }}>
              <ChatMessageList style={{ flex: 1, padding: "var(--wim-spacing-md)" }}>
                {sampleMessages.map((msg) => (
                  <ChatMessage
                    key={msg.id}
                    position={msg.role === "user" ? "right" : "left"}
                    variant={msg.role === "user" ? "primary" : "default"}
                  >
                    {msg.content}
                  </ChatMessage>
                ))}
                <ChatMessage isTyping />
              </ChatMessageList>
              <ChatInput placeholder="Hello!" showAttach />
            </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* ThoughtProcess Check */}
        <ComparisonGrid title={t("audit:ai_thought_process_check")}>
          <ComponentGroup
            label={`${t("audit:label_thought_process")} — expanded`}
            maxWidth="var(--wim-width-md)"
          >
            <ThoughtProcess title={t("audit:ai_analysis_progress")} defaultExpanded>
              {sampleSteps.map((step, i) => (
                <ThoughtStep key={i} label={step.label} status={step.status} isLast={i === sampleSteps.length - 1}>
                  {step.content}
                </ThoughtStep>
              ))}
            </ThoughtProcess>
          </ComponentGroup>
          <ComponentGroup
            label={`${t("audit:label_thought_process")} — collapsed`}
            maxWidth="var(--wim-width-md)"
          >
            <ThoughtProcess title={t("audit:ai_step_reasoning")} defaultExpanded={false}>
              <ThoughtStep label={t("action.search")} status="completed">Searching for data...</ThoughtStep>
              <ThoughtStep label={t("audit:ai_step_process")} status="completed" isLast>Processing data...</ThoughtStep>
            </ThoughtProcess>
          </ComponentGroup>
          <ComponentGroup
            label={t("audit:label_thought_step_error")}
            maxWidth="var(--wim-width-md)"
          >
            <ThoughtProcess title={t("audit:ai_failed_reasoning")} defaultExpanded>
              <ThoughtStep label={t("action.search")} status="completed">Searching for data...</ThoughtStep>
              <ThoughtStep label={t("audit:ai_step_validate")} status="error" isLast>Connection timeout — could not reach external service.</ThoughtStep>
            </ThoughtProcess>
          </ComponentGroup>
        </ComparisonGrid>

        {/* PromptInput Action Check */}
        <ComparisonGrid title={t("audit:ai_prompt_action_check")}>
          <ComponentGroup label={`${t("audit:label_prompt_input")} — default`} align="stretch" maxWidth="var(--wim-width-md)">
            <PromptInput placeholder="What time is the meeting tomorrow?" showAttach fullWidth />
          </ComponentGroup>
          <ComponentGroup label={`${t("audit:label_prompt_input")} — loading & disabled`} align="stretch" maxWidth="var(--wim-width-md)">
            <Stack gap="md">
              <PromptInput value="Generating response..." loading disabled fullWidth />
              <PromptInput placeholder="Disabled state" disabled fullWidth />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={`${t("audit:label_prompt_input")} — with label and error`} align="stretch" maxWidth="var(--wim-width-md)">
            <PromptInput
              label={t("audit:ai_system_prompt")}
              error={t("audit:ai_prompt_error")}
              defaultValue="Explain the concept of quantum computing to a 5-year old."
              maxLength={100}
              fullWidth
            />
          </ComponentGroup>
        </ComparisonGrid>

        {/* AIResponseFeedback Check */}
        <ComparisonGrid title={t("audit:ai_response_feedback_check")}>
          <ComponentGroup label={t("audit:label_without_regenerate")}>
            <Stack gap="lg">
              <AIResponseFeedback />
              <AIResponseFeedback defaultFeedback="positive" />
              <AIResponseFeedback defaultFeedback="negative" />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_with_regenerate")}>
            <Stack gap="lg">
              <AIResponseFeedback showRegenerate />
              <AIResponseFeedback showRegenerate defaultFeedback="positive" />
              <AIResponseFeedback showRegenerate disabled />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* SourceCitation Check */}
        <ComparisonGrid title={t("audit:ai_source_citation_check")}>
          <ComponentGroup label={t("audit:label_source_citation")} maxWidth="var(--wim-width-md)">
            <Stack gap="md">
              <SourceCitation title="React Documentation" url="https://react.dev/" index={1} description={t("audit:ai_source_react_desc")} />
              <SourceCitation title="Internal Design Guide" description={t("audit:ai_source_no_url_desc")} index={2} />
              <SourceCitation title="TypeScript Handbook" url="https://www.typescriptlang.org/docs/" />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_source_citation_list")} align="stretch">
            <SourceCitationList sources={sampleSources} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* CodeBlock Check */}
        <ComparisonGrid title={t("audit:ai_code_block_check")}>
          <ComponentGroup label={t("audit:label_code_block")} align="stretch" maxWidth="var(--wim-width-md)">
            <CodeBlock code={SAMPLE_CODE} language="tsx" />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_with_filename")} align="stretch" maxWidth="var(--wim-width-md)">
            <CodeBlock code={SAMPLE_CODE} filename="Counter.tsx" showLineNumbers />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_collapsible")} align="stretch" maxWidth="var(--wim-width-md)">
            <CodeBlock code={SAMPLE_CODE} language="tsx" maxLines={4} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Agent & Voice Check */}
        <ComparisonGrid title={t("audit:ai_agent_voice_check")}>
          <ComponentGroup label={t("audit:label_agent_status")}>
            <Stack gap="md">
              <AgentStatus status="thinking" />
              <AgentStatus status="running" message={t("audit:ai_status_processing")} />
              <AgentStatus status="done" />
              <AgentStatus status="error" message={t("audit:ai_status_connection_failed")} />
              <Stack direction="row" gap="lg" align="center">
                <AgentStatus status="thinking" size="sm" />
                <AgentStatus status="thinking" size="md" />
                <AgentStatus status="thinking" size="lg" />
              </Stack>
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_voice_visualizer")} align="stretch">
            <Stack gap="xl">
              <Box>
                <AgentStatus status="running" message={t("audit:ai_status_listening")} style={{ marginBottom: "var(--wim-spacing-xs)" }} />
                <VoiceVisualizer mode="bars" height={40} />
              </Box>
              <Box>
                <AgentStatus status="done" message={t("audit:ai_status_voice_analyzed")} style={{ marginBottom: "var(--wim-spacing-xs)" }} />
                <VoiceVisualizer mode="waveform" height={60} isActive={false} />
              </Box>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Terminal & CodeDiffViewer Check */}
        <ComparisonGrid title={t("audit:ai_terminal_diff_check")}>
          <ComponentGroup label={t("audit:label_terminal")} align="stretch" maxWidth="var(--wim-width-md)">
            <Terminal 
              title="deployment.log" 
              lines={TERMINAL_LINES} 
              height={200} 
              onClear={() => {}}
            />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_code_diff_viewer")} align="stretch" maxWidth="var(--wim-width-md)">
            <CodeDiffViewer 
              filename="hello.ts"
              before={DIFF_BEFORE}
              after={DIFF_AFTER}
              view="unified"
              onApply={() => {}}
              onReject={() => {}}
            />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Fluid Width Check (Readability Comparison) */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          <ComponentGroup label={t("audit:label_truly_full_width")} align="stretch">
            <Stack gap="lg">
              <PromptInput label={t("audit:label_fluid_prompt")} fullWidth placeholder={t("audit:sample_prompt_ai")} />
              <Box p="md" bg="bg-surface" radius="sm" style={{ border: "1px solid var(--wim-color-border)" }}>
                <StreamingText
                  content={t("audit:ai_streaming_full_width")}
                  isStreaming
                />
              </Box>
            </Stack>
          </ComponentGroup>

          <ComponentGroup
            label={t("audit:label_readable_limit")}
            maxWidth="60rem"
          >
            <Stack gap="lg">
              <PromptInput fullWidth placeholder={t("audit:sample_prompt_ai")} />
              <Box p="md" bg="bg-surface" radius="sm" style={{ border: "1px solid var(--wim-color-border)" }}>
                <StreamingText
                  content={t("audit:ai_streaming_capped")}
                />
              </Box>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>
    );
  },
};
