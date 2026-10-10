"use client";
import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Box-BNJo1pMu.js";import{n as ee,t as l}from"./Stack-CrCPoxQ1.js";import{n as u,t as d}from"./PromptInput-CI52rzNh.js";import{n as f,r as p,t as m}from"./ThoughtProcess-CY-z8mde.js";import{n as h,t as g}from"./AIResponseFeedback-CaVVDlno.js";import{n as _,r as v,t as y}from"./SourceCitation-BUUVpjqZ.js";import{n as b,t as x}from"./CodeBlock-5zjjT5IW.js";import{n as S,t as C}from"./Terminal-DsOO4ywv.js";import{n as w,t as T}from"./AgentStatus-B_PvdKnx.js";import{n as E,t as D}from"./VoiceVisualizer-Cz0ldsPl.js";import{n as O,t as k}from"./ModelSelector-CwSiJGbJ.js";import{n as A,t as te}from"./ThreadList-DkEafNt4.js";import{n as ne,t as j}from"./UsageMeter-Bfqp1RIG.js";import{a as M,o as N,r as P,s as F}from"./ChatUI-Djlq_PGI.js";import{n as I,t as L}from"./StreamingText-344Lw-jj.js";import{n as R,t as z}from"./CodeDiffViewer-D53t-1nk.js";import{i as B,n as V,r as H,t as U}from"./AuditUtils-DQd41XyN.js";var W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{t(),r(),i(),u(),p(),h(),v(),b(),S(),w(),E(),F(),O(),A(),ne(),ee(),s(),I(),R(),B(),W=o(),G={title:`Audit/AIFamily`,parameters:{layout:`fullscreen`}},K=Array.from({length:360},(e,t)=>{let n=t/359;return .5+.45*(Math.sin(Math.PI*n)*(.55+.45*Math.sin(n*5*Math.PI)**2))*Math.sin(t*.28)}),q=`import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(c => c + 1)}>
      Count: {count}
    </button>
  );
}`,J=`function hello() {
  console.log("Hello, world!");
}`,Y=`function hello(name: string = "world") {
  console.log(\`Hello, \${name}!\`);
}

hello("Antigravity");`,X=[{type:`info`,content:`\x1B[90m[system] Initializing environment...\x1B[0m`},{type:`input`,content:`npm run build`},{type:`output`,content:`\x1B[32m[OK]\x1B[0m Checking types...`},{type:`output`,content:`\x1B[32m[OK]\x1B[0m Generating bundle...`},{type:`output`,content:`Build complete in \x1B[1m1.2s\x1B[0m`},{type:`error`,content:`\x1B[31m[warning] 12 chunks exceed 500kB.\x1B[0m`}],Z={render:()=>{let{t:e}=n([...a,`audit`]),t=[{title:`React Documentation`,url:`https://react.dev/`,description:e(`audit:ai_source_react_desc`)},{title:`MDN Web Docs`,url:`https://developer.mozilla.org/`,description:e(`audit:ai_source_mdn_desc`)},{title:`TypeScript Handbook`,url:`https://www.typescriptlang.org/docs/`,description:e(`audit:ai_source_ts_desc`)}],r=[{label:e(`audit:ai_step_init_label`),content:e(`audit:ai_step_init_content`),status:`completed`},{label:e(`audit:ai_step_retrieve_label`),content:e(`audit:ai_step_retrieve_content`),status:`completed`},{label:e(`audit:ai_step_synth_label`),content:e(`audit:ai_step_synth_content`),status:`pending`}],i=[{id:`1`,role:`user`,content:e(`audit:ai_chat_user_msg`)},{id:`2`,role:`assistant`,content:e(`audit:ai_chat_assistant_msg`)}],o=[{id:`gpt-4o`,name:`GPT-4o`,description:`OpenAI`,contextLength:128e3,pricing:{input:2.5,output:10},badge:`New`},{id:`claude-sonnet`,name:`Claude Sonnet`,description:`Anthropic`,contextLength:2e5,pricing:{input:3,output:15}},{id:`llama-3`,name:`Llama 3 70B`,description:`Meta`,contextLength:8e3,pricing:{input:.6,output:.6}}],s=[{id:`1`,title:e(`audit:tl_thread_1`),preview:e(`audit:tl_thread_1_sub`),timestamp:`2m`},{id:`2`,title:e(`audit:tl_thread_2`),preview:e(`audit:tl_thread_2_sub`),timestamp:`1h`,unread:!0},{id:`3`,title:e(`audit:tl_thread_3`),preview:e(`audit:tl_thread_3_sub`),timestamp:`1d`}];return(0,W.jsxs)(U,{title:e(`audit:ai_family_title`),children:[(0,W.jsxs)(V,{title:e(`audit:ai_streaming_visual_check`),children:[(0,W.jsx)(H,{label:`${e(`audit:label_streaming_text`)} — ${e(`audit:sfx_active`)}`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(c,{p:`md`,bg:`bg-surface`,radius:`sm`,style:{border:`1px solid var(--wim-color-border)`},children:(0,W.jsx)(L,{content:e(`audit:ai_streaming_sample`),isStreaming:!0})})}),(0,W.jsx)(H,{label:`${e(`audit:label_chat_ui`)} — ${e(`audit:sfx_overall_structure`)}`,align:`stretch`,children:(0,W.jsxs)(c,{style:{height:`450px`,border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`,overflow:`hidden`,display:`flex`,flexDirection:`column`},children:[(0,W.jsxs)(N,{style:{flex:1,padding:`var(--wim-spacing-md)`},children:[i.map(e=>(0,W.jsx)(M,{position:e.role===`user`?`right`:`left`,variant:e.role===`user`?`sent`:`default`,children:e.content},e.id)),(0,W.jsx)(M,{isTyping:!0})]}),(0,W.jsx)(P,{placeholder:e(`audit:ai_chat_input_placeholder`),showAttach:!0})]})})]}),(0,W.jsxs)(V,{title:e(`audit:ai_thought_process_check`),children:[(0,W.jsx)(H,{label:`${e(`audit:label_thought_process`)} — ${e(`audit:sfx_expanded`)}`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(m,{title:e(`audit:ai_analysis_progress`),defaultExpanded:!0,children:r.map((e,t)=>(0,W.jsx)(f,{label:e.label,status:e.status,isLast:t===r.length-1,children:e.content},t))})}),(0,W.jsx)(H,{label:`${e(`audit:label_thought_process`)} — ${e(`audit:sfx_collapsed`)}`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsxs)(m,{title:e(`audit:ai_step_reasoning`),defaultExpanded:!1,children:[(0,W.jsx)(f,{label:e(`action.search`),status:`completed`,children:e(`audit:ai_step_searching`)}),(0,W.jsx)(f,{label:e(`audit:ai_step_process`),status:`completed`,isLast:!0,children:e(`audit:ai_step_processing`)})]})}),(0,W.jsx)(H,{label:e(`audit:label_thought_step_error`),maxWidth:`var(--wim-width-md)`,children:(0,W.jsxs)(m,{title:e(`audit:ai_failed_reasoning`),defaultExpanded:!0,children:[(0,W.jsx)(f,{label:e(`action.search`),status:`completed`,children:e(`audit:ai_step_searching`)}),(0,W.jsx)(f,{label:e(`audit:ai_step_validate`),status:`error`,isLast:!0,children:e(`audit:ai_step_conn_timeout`)})]})})]}),(0,W.jsxs)(V,{title:e(`audit:ai_prompt_action_check`),children:[(0,W.jsx)(H,{label:`${e(`audit:label_prompt_input`)} — ${e(`audit:sfx_default`)}`,align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(d,{placeholder:e(`audit:ai_prompt_placeholder_meeting`),showAttach:!0,fullWidth:!0})}),(0,W.jsx)(H,{label:`${e(`audit:label_prompt_input`)} — ${e(`audit:sfx_loading_disabled`)}`,align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsxs)(l,{gap:`md`,children:[(0,W.jsx)(d,{value:e(`audit:ai_prompt_generating`),loading:!0,disabled:!0,fullWidth:!0}),(0,W.jsx)(d,{placeholder:e(`audit:ai_prompt_placeholder_disabled`),disabled:!0,fullWidth:!0})]})}),(0,W.jsx)(H,{label:`${e(`audit:label_prompt_input`)} — ${e(`audit:sfx_with_label_error`)}`,align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(d,{label:e(`audit:ai_system_prompt`),error:e(`audit:ai_prompt_error`),defaultValue:`Explain the concept of quantum computing to a 5-year old.`,maxLength:100,fullWidth:!0})})]}),(0,W.jsxs)(V,{title:e(`audit:ai_response_feedback_check`),children:[(0,W.jsx)(H,{label:e(`audit:label_without_regenerate`),children:(0,W.jsxs)(l,{gap:`lg`,children:[(0,W.jsx)(g,{}),(0,W.jsx)(g,{defaultFeedback:`positive`}),(0,W.jsx)(g,{defaultFeedback:`negative`})]})}),(0,W.jsx)(H,{label:e(`audit:label_with_regenerate`),children:(0,W.jsxs)(l,{gap:`lg`,children:[(0,W.jsx)(g,{showRegenerate:!0}),(0,W.jsx)(g,{showRegenerate:!0,defaultFeedback:`positive`}),(0,W.jsx)(g,{showRegenerate:!0,disabled:!0})]})})]}),(0,W.jsxs)(V,{title:e(`audit:ai_source_citation_check`),children:[(0,W.jsx)(H,{label:e(`audit:label_source_citation`),maxWidth:`var(--wim-width-md)`,children:(0,W.jsxs)(l,{gap:`md`,children:[(0,W.jsx)(y,{title:`React Documentation`,url:`https://react.dev/`,index:1,description:e(`audit:ai_source_react_desc`)}),(0,W.jsx)(y,{title:`Internal Design Guide`,description:e(`audit:ai_source_no_url_desc`),index:2}),(0,W.jsx)(y,{title:`TypeScript Handbook`,url:`https://www.typescriptlang.org/docs/`})]})}),(0,W.jsx)(H,{label:e(`audit:label_source_citation_list`),align:`stretch`,children:(0,W.jsx)(_,{sources:t})})]}),(0,W.jsxs)(V,{title:e(`audit:ai_code_block_check`),children:[(0,W.jsx)(H,{label:e(`audit:label_code_block`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(x,{code:q,language:`tsx`})}),(0,W.jsx)(H,{label:e(`audit:label_with_filename`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(x,{code:q,filename:`Counter.tsx`,showLineNumbers:!0})}),(0,W.jsx)(H,{label:e(`audit:label_collapsible`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(x,{code:q,language:`tsx`,maxLines:4})})]}),(0,W.jsxs)(V,{title:e(`audit:ai_agent_voice_check`),children:[(0,W.jsx)(H,{label:e(`audit:label_agent_status`),children:(0,W.jsxs)(l,{gap:`md`,children:[(0,W.jsx)(T,{status:`thinking`}),(0,W.jsx)(T,{status:`running`,message:e(`audit:ai_status_processing`)}),(0,W.jsx)(T,{status:`done`}),(0,W.jsx)(T,{status:`error`,message:e(`audit:ai_status_connection_failed`)}),(0,W.jsxs)(l,{direction:`row`,gap:`lg`,align:`center`,children:[(0,W.jsx)(T,{status:`thinking`,size:`sm`}),(0,W.jsx)(T,{status:`thinking`,size:`md`}),(0,W.jsx)(T,{status:`thinking`,size:`lg`})]})]})}),(0,W.jsx)(H,{label:e(`audit:label_voice_visualizer`),align:`stretch`,children:(0,W.jsxs)(l,{gap:`xl`,children:[(0,W.jsxs)(c,{children:[(0,W.jsx)(T,{status:`running`,message:e(`audit:ai_status_listening`),style:{marginBottom:`var(--wim-spacing-xs)`}}),(0,W.jsx)(D,{mode:`bars`,height:40})]}),(0,W.jsxs)(c,{children:[(0,W.jsx)(T,{status:`done`,message:e(`audit:ai_status_voice_analyzed`),style:{marginBottom:`var(--wim-spacing-xs)`}}),(0,W.jsx)(D,{mode:`waveform`,height:60,isActive:!1,data:K})]})]})})]}),(0,W.jsxs)(V,{title:e(`audit:ai_terminal_diff_check`),children:[(0,W.jsx)(H,{label:e(`audit:label_terminal`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(C,{title:`deployment.log`,lines:X,height:200,onClear:()=>{}})}),(0,W.jsx)(H,{label:e(`audit:label_code_diff_viewer`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(z,{filename:`hello.ts`,before:J,after:Y,view:`unified`,onApply:()=>{},onReject:()=>{}})})]}),(0,W.jsxs)(V,{title:e(`audit:fluid_width_check`),children:[(0,W.jsx)(H,{label:e(`audit:label_truly_full_width`),align:`stretch`,children:(0,W.jsxs)(l,{gap:`lg`,children:[(0,W.jsx)(d,{label:e(`audit:label_fluid_prompt`),fullWidth:!0,placeholder:e(`audit:sample_prompt_ai`)}),(0,W.jsx)(c,{p:`md`,bg:`bg-surface`,radius:`sm`,style:{border:`1px solid var(--wim-color-border)`},children:(0,W.jsx)(L,{content:e(`audit:ai_streaming_full_width`),isStreaming:!0})})]})}),(0,W.jsx)(H,{label:e(`audit:label_readable_limit`),maxWidth:`60rem`,children:(0,W.jsxs)(l,{gap:`lg`,children:[(0,W.jsx)(d,{fullWidth:!0,placeholder:e(`audit:sample_prompt_ai`)}),(0,W.jsx)(c,{p:`md`,bg:`bg-surface`,radius:`sm`,style:{border:`1px solid var(--wim-color-border)`},children:(0,W.jsx)(L,{content:e(`audit:ai_streaming_capped`)})})]})})]}),(0,W.jsxs)(V,{title:e(`audit:ai_model_thread_usage_check`),children:[(0,W.jsx)(H,{label:e(`audit:label_model_selector`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsxs)(l,{gap:`md`,children:[(0,W.jsx)(k,{models:o,defaultValue:`gpt-4o`,fullWidth:!0}),(0,W.jsx)(k,{models:o,defaultValue:`claude-sonnet`,showPricing:!1,showContext:!1,fullWidth:!0}),(0,W.jsx)(k,{models:o,defaultValue:`gpt-4o`,disabled:!0,fullWidth:!0})]})}),(0,W.jsx)(H,{label:e(`audit:label_thread_list`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsx)(c,{style:{border:`1px solid var(--wim-color-border)`,borderRadius:`var(--wim-radius-md)`},children:(0,W.jsx)(te,{threads:s,activeId:`1`,onSelect:()=>{},onNewThread:()=>{},onDelete:()=>{}})})}),(0,W.jsx)(H,{label:e(`audit:label_usage_meter`),align:`stretch`,maxWidth:`var(--wim-width-md)`,children:(0,W.jsxs)(l,{gap:`lg`,children:[(0,W.jsx)(j,{used:2e3,max:8e3,labels:{label:e(`audit:um_context`)}}),(0,W.jsx)(j,{used:6400,max:8e3,labels:{label:e(`audit:um_context`)}}),(0,W.jsx)(j,{used:7600,max:8e3,labels:{label:e(`audit:um_context`)}}),(0,W.jsx)(j,{used:4200,labels:{label:e(`audit:um_context`)}})]})})]})]})}},Q=[`Overview`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation([...ALL_NAMESPACES, "audit"]);

    // 引用元タイトルは実在ドキュメントの固有名詞のため英語のまま
    const sampleSources = [{
      title: "React Documentation",
      url: "https://react.dev/",
      description: t("audit:ai_source_react_desc")
    }, {
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/",
      description: t("audit:ai_source_mdn_desc")
    }, {
      title: "TypeScript Handbook",
      url: "https://www.typescriptlang.org/docs/",
      description: t("audit:ai_source_ts_desc")
    }];
    const sampleSteps = [{
      label: t("audit:ai_step_init_label"),
      content: t("audit:ai_step_init_content"),
      status: "completed" as const
    }, {
      label: t("audit:ai_step_retrieve_label"),
      content: t("audit:ai_step_retrieve_content"),
      status: "completed" as const
    }, {
      label: t("audit:ai_step_synth_label"),
      content: t("audit:ai_step_synth_content"),
      status: "pending" as const
    }];
    const sampleMessages = [{
      id: "1",
      role: "user" as const,
      content: t("audit:ai_chat_user_msg")
    }, {
      id: "2",
      role: "assistant" as const,
      content: t("audit:ai_chat_assistant_msg")
    }];

    // Model names are brand identifiers, kept verbatim.
    // i18n-ignore-start
    const sampleModels = [{
      id: "gpt-4o",
      name: "GPT-4o",
      description: "OpenAI",
      contextLength: 128000,
      pricing: {
        input: 2.5,
        output: 10
      },
      badge: "New"
    }, {
      id: "claude-sonnet",
      name: "Claude Sonnet",
      description: "Anthropic",
      contextLength: 200000,
      pricing: {
        input: 3,
        output: 15
      }
    }, {
      id: "llama-3",
      name: "Llama 3 70B",
      description: "Meta",
      contextLength: 8000,
      pricing: {
        input: 0.6,
        output: 0.6
      }
    }];
    // i18n-ignore-end

    const sampleThreads = [{
      id: "1",
      title: t("audit:tl_thread_1"),
      preview: t("audit:tl_thread_1_sub"),
      timestamp: "2m"
    }, {
      id: "2",
      title: t("audit:tl_thread_2"),
      preview: t("audit:tl_thread_2_sub"),
      timestamp: "1h",
      unread: true
    }, {
      id: "3",
      title: t("audit:tl_thread_3"),
      preview: t("audit:tl_thread_3_sub"),
      timestamp: "1d"
    }];
    return <AuditPage title={t("audit:ai_family_title")}>

        {/* Streaming Visual Check */}
        <ComparisonGrid title={t("audit:ai_streaming_visual_check")}>
          <ComponentGroup label={\`\${t("audit:label_streaming_text")} — \${t("audit:sfx_active")}\`} maxWidth="var(--wim-width-md)">
            <Box p="md" bg="bg-surface" radius="sm" style={{
            border: "1px solid var(--wim-color-border)"
          }}>
              <StreamingText content={t("audit:ai_streaming_sample")} isStreaming />
            </Box>
          </ComponentGroup>
          <ComponentGroup label={\`\${t("audit:label_chat_ui")} — \${t("audit:sfx_overall_structure")}\`} align="stretch">
            <Box style={{
            height: "450px",
            border: "1px solid var(--wim-color-border)",
            borderRadius: "var(--wim-radius-md)",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column"
          }}>
              <ChatMessageList style={{
              flex: 1,
              padding: "var(--wim-spacing-md)"
            }}>
                {sampleMessages.map(msg => <ChatMessage key={msg.id} position={msg.role === "user" ? "right" : "left"} variant={msg.role === "user" ? "sent" : "default"}>
                    {msg.content}
                  </ChatMessage>)}
                <ChatMessage isTyping />
              </ChatMessageList>
              <ChatInput placeholder={t("audit:ai_chat_input_placeholder")} showAttach />
            </Box>
          </ComponentGroup>
        </ComparisonGrid>

        {/* ThoughtProcess Check */}
        <ComparisonGrid title={t("audit:ai_thought_process_check")}>
          <ComponentGroup label={\`\${t("audit:label_thought_process")} — \${t("audit:sfx_expanded")}\`} maxWidth="var(--wim-width-md)">
            <ThoughtProcess title={t("audit:ai_analysis_progress")} defaultExpanded>
              {sampleSteps.map((step, i) => <ThoughtStep key={i} label={step.label} status={step.status} isLast={i === sampleSteps.length - 1}>
                  {step.content}
                </ThoughtStep>)}
            </ThoughtProcess>
          </ComponentGroup>
          <ComponentGroup label={\`\${t("audit:label_thought_process")} — \${t("audit:sfx_collapsed")}\`} maxWidth="var(--wim-width-md)">
            <ThoughtProcess title={t("audit:ai_step_reasoning")} defaultExpanded={false}>
              <ThoughtStep label={t("action.search")} status="completed">{t("audit:ai_step_searching")}</ThoughtStep>
              <ThoughtStep label={t("audit:ai_step_process")} status="completed" isLast>{t("audit:ai_step_processing")}</ThoughtStep>
            </ThoughtProcess>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_thought_step_error")} maxWidth="var(--wim-width-md)">
            <ThoughtProcess title={t("audit:ai_failed_reasoning")} defaultExpanded>
              <ThoughtStep label={t("action.search")} status="completed">{t("audit:ai_step_searching")}</ThoughtStep>
              <ThoughtStep label={t("audit:ai_step_validate")} status="error" isLast>{t("audit:ai_step_conn_timeout")}</ThoughtStep>
            </ThoughtProcess>
          </ComponentGroup>
        </ComparisonGrid>

        {/* PromptInput Action Check */}
        <ComparisonGrid title={t("audit:ai_prompt_action_check")}>
          <ComponentGroup label={\`\${t("audit:label_prompt_input")} — \${t("audit:sfx_default")}\`} align="stretch" maxWidth="var(--wim-width-md)">
            <PromptInput placeholder={t("audit:ai_prompt_placeholder_meeting")} showAttach fullWidth />
          </ComponentGroup>
          <ComponentGroup label={\`\${t("audit:label_prompt_input")} — \${t("audit:sfx_loading_disabled")}\`} align="stretch" maxWidth="var(--wim-width-md)">
            <Stack gap="md">
              <PromptInput value={t("audit:ai_prompt_generating")} loading disabled fullWidth />
              <PromptInput placeholder={t("audit:ai_prompt_placeholder_disabled")} disabled fullWidth />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={\`\${t("audit:label_prompt_input")} — \${t("audit:sfx_with_label_error")}\`} align="stretch" maxWidth="var(--wim-width-md)">
            <PromptInput label={t("audit:ai_system_prompt")} error={t("audit:ai_prompt_error")} defaultValue="Explain the concept of quantum computing to a 5-year old." maxLength={100} fullWidth />
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
              {/* i18n-ignore-start — 引用元タイトルは実在ドキュメントの固有名詞のため英語のまま */}
              <SourceCitation title="React Documentation" url="https://react.dev/" index={1} description={t("audit:ai_source_react_desc")} />
              <SourceCitation title="Internal Design Guide" description={t("audit:ai_source_no_url_desc")} index={2} />
              <SourceCitation title="TypeScript Handbook" url="https://www.typescriptlang.org/docs/" />
              {/* i18n-ignore-end */}
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
                <AgentStatus status="running" message={t("audit:ai_status_listening")} style={{
                marginBottom: "var(--wim-spacing-xs)"
              }} />
                <VoiceVisualizer mode="bars" height={40} />
              </Box>
              <Box>
                <AgentStatus status="done" message={t("audit:ai_status_voice_analyzed")} style={{
                marginBottom: "var(--wim-spacing-xs)"
              }} />
                <VoiceVisualizer mode="waveform" height={60} isActive={false} data={ANALYZED_WAVE} />
              </Box>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Terminal & CodeDiffViewer Check */}
        <ComparisonGrid title={t("audit:ai_terminal_diff_check")}>
          <ComponentGroup label={t("audit:label_terminal")} align="stretch" maxWidth="var(--wim-width-md)">
            <Terminal
          /* i18n-ignore-next-line — title はファイル名のため英語のまま */ title="deployment.log" lines={TERMINAL_LINES} height={200} onClear={() => {}} />
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_code_diff_viewer")} align="stretch" maxWidth="var(--wim-width-md)">
            <CodeDiffViewer filename="hello.ts" before={DIFF_BEFORE} after={DIFF_AFTER} view="unified" onApply={() => {}} onReject={() => {}} />
          </ComponentGroup>
        </ComparisonGrid>

        {/* Fluid Width Check (Readability Comparison) */}
        <ComparisonGrid title={t("audit:fluid_width_check")}>
          <ComponentGroup label={t("audit:label_truly_full_width")} align="stretch">
            <Stack gap="lg">
              <PromptInput label={t("audit:label_fluid_prompt")} fullWidth placeholder={t("audit:sample_prompt_ai")} />
              <Box p="md" bg="bg-surface" radius="sm" style={{
              border: "1px solid var(--wim-color-border)"
            }}>
                <StreamingText content={t("audit:ai_streaming_full_width")} isStreaming />
              </Box>
            </Stack>
          </ComponentGroup>

          <ComponentGroup label={t("audit:label_readable_limit")} maxWidth="60rem">
            <Stack gap="lg">
              <PromptInput fullWidth placeholder={t("audit:sample_prompt_ai")} />
              <Box p="md" bg="bg-surface" radius="sm" style={{
              border: "1px solid var(--wim-color-border)"
            }}>
                <StreamingText content={t("audit:ai_streaming_capped")} />
              </Box>
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>

        {/* Model / Thread / Usage Check */}
        <ComparisonGrid title={t("audit:ai_model_thread_usage_check")}>
          <ComponentGroup label={t("audit:label_model_selector")} align="stretch" maxWidth="var(--wim-width-md)">
            <Stack gap="md">
              <ModelSelector models={sampleModels} defaultValue="gpt-4o" fullWidth />
              <ModelSelector models={sampleModels} defaultValue="claude-sonnet" showPricing={false} showContext={false} fullWidth />
              <ModelSelector models={sampleModels} defaultValue="gpt-4o" disabled fullWidth />
            </Stack>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_thread_list")} align="stretch" maxWidth="var(--wim-width-md)">
            <Box style={{
            border: "1px solid var(--wim-color-border)",
            borderRadius: "var(--wim-radius-md)"
          }}>
              <ThreadList threads={sampleThreads} activeId="1" onSelect={() => {}} onNewThread={() => {}} onDelete={() => {}} />
            </Box>
          </ComponentGroup>
          <ComponentGroup label={t("audit:label_usage_meter")} align="stretch" maxWidth="var(--wim-width-md)">
            <Stack gap="lg">
              <UsageMeter used={2000} max={8000} labels={{
              label: t("audit:um_context")
            }} />
              <UsageMeter used={6400} max={8000} labels={{
              label: t("audit:um_context")
            }} />
              <UsageMeter used={7600} max={8000} labels={{
              label: t("audit:um_context")
            }} />
              <UsageMeter used={4200} labels={{
              label: t("audit:um_context")
            }} />
            </Stack>
          </ComponentGroup>
        </ComparisonGrid>
      </AuditPage>;
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{Z as Overview,Q as __namedExportsOrder,G as default};