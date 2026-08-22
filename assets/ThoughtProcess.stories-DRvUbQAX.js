"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{n as c,r as l,t as u}from"./ThoughtProcess-esVODyeM.js";var d=e({Basic:()=>m,ComplexReasoning:()=>h,Static:()=>g,Streaming:()=>v,Thinking:()=>_,__namedExportsOrder:()=>y,default:()=>p}),f,p,m,h,g,_,v,y,b=t((()=>{n(),l(),o(),i(),f=a(),p={title:`Components/AI/ThoughtProcess`,component:u,parameters:{layout:`padded`}},m={render:()=>{let{t:e}=r(s);return(0,f.jsx)(`div`,{style:{width:`100%`,maxWidth:`800px`,margin:`0 auto`},children:(0,f.jsxs)(u,{title:e(`story.thoughtprocess_title_basic`),children:[(0,f.jsx)(c,{label:e(`story.thoughtprocess_step1_label`),status:`completed`,children:e(`story.thoughtprocess_step1_content`)}),(0,f.jsx)(c,{label:e(`story.thoughtprocess_step2_label`),status:`completed`,children:e(`story.thoughtprocess_step2_content`)}),(0,f.jsx)(c,{label:e(`story.thoughtprocess_step3_label`),status:`pending`,children:e(`story.thoughtprocess_step3_content`)}),(0,f.jsx)(c,{label:e(`story.thoughtprocess_step4_label`),status:`pending`,isLast:!0,children:e(`story.thoughtprocess_step4_content`)})]})})}},h={render:()=>{let{t:e}=r(s);return(0,f.jsx)(`div`,{style:{width:`100%`,maxWidth:`800px`,margin:`0 auto`},children:(0,f.jsxs)(u,{title:e(`story.thoughtprocess_title_complex`),defaultExpanded:!0,children:[(0,f.jsx)(c,{label:e(`story.thoughtprocess_intent_label`),status:`completed`,children:e(`story.thoughtprocess_intent_content`)}),(0,f.jsxs)(c,{label:e(`story.thoughtprocess_retrieval_label`),status:`completed`,children:[e(`story.thoughtprocess_retrieval_content`),(0,f.jsxs)(`ul`,{children:[(0,f.jsx)(`li`,{children:`State of JS 2023`}),(0,f.jsx)(`li`,{children:`React 19 release notes`}),(0,f.jsx)(`li`,{children:`Vue 3.4 performance benchmarks`})]})]}),(0,f.jsx)(c,{label:e(`story.thoughtprocess_conflict_label`),status:`error`,children:e(`story.thoughtprocess_conflict_content`)}),(0,f.jsx)(c,{label:e(`story.thoughtprocess_correction_label`),status:`completed`,children:e(`story.thoughtprocess_correction_content`)}),(0,f.jsx)(c,{label:e(`story.thoughtprocess_synthesis_label`),status:`pending`,isLast:!0,children:e(`story.thoughtprocess_synthesis_content`)})]})})}},g={render:()=>{let{t:e}=r(s);return(0,f.jsx)(`div`,{style:{width:`100%`,maxWidth:`800px`,margin:`0 auto`},children:(0,f.jsxs)(u,{isCollapsible:!1,title:e(`story.thoughtprocess_title_static`),children:[(0,f.jsx)(c,{status:`completed`,children:e(`story.thoughtprocess_static1`)}),(0,f.jsx)(c,{status:`completed`,children:e(`story.thoughtprocess_static2`)}),(0,f.jsx)(c,{status:`completed`,isLast:!0,children:e(`story.thoughtprocess_static3`)})]})})}},_={render:()=>{let{t:e}=r(s);return(0,f.jsx)(`div`,{style:{width:`100%`,maxWidth:`800px`,margin:`0 auto`},children:(0,f.jsxs)(u,{title:e(`story.thoughtprocess_title_thinking`),isThinking:!0,children:[(0,f.jsx)(c,{label:e(`story.thoughtprocess_step1_label`),status:`completed`,children:e(`story.thoughtprocess_step1_content`)}),(0,f.jsx)(c,{label:e(`story.thoughtprocess_step2_label`),status:`pending`,isLast:!0,children:e(`story.thoughtprocess_step2_content`)})]})})}},v={render:()=>{let{t:e}=r(s);return(0,f.jsx)(`div`,{style:{width:`100%`,maxWidth:`800px`,margin:`0 auto`},children:(0,f.jsxs)(u,{title:e(`story.thoughtprocess_title_streaming`),children:[(0,f.jsx)(c,{label:e(`story.thoughtprocess_step1_label`),status:`completed`,children:e(`story.thoughtprocess_step1_content`)}),(0,f.jsx)(c,{label:e(`story.thoughtprocess_step2_label`),status:`pending`,isStreaming:!0,isLast:!0,children:e(`story.thoughtprocess_step2_content`)})]})})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
        <ThoughtProcess title={t("story.thoughtprocess_title_basic")}>
          <ThoughtStep label={t("story.thoughtprocess_step1_label")} status="completed">
            {t("story.thoughtprocess_step1_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step2_label")} status="completed">
            {t("story.thoughtprocess_step2_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step3_label")} status="pending">
            {t("story.thoughtprocess_step3_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step4_label")} status="pending" isLast>
            {t("story.thoughtprocess_step4_content")}
          </ThoughtStep>
        </ThoughtProcess>
      </div>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
        <ThoughtProcess title={t("story.thoughtprocess_title_complex")} defaultExpanded={true}>
          <ThoughtStep label={t("story.thoughtprocess_intent_label")} status="completed">
            {t("story.thoughtprocess_intent_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_retrieval_label")} status="completed">
            {t("story.thoughtprocess_retrieval_content")}
            {/* i18n-ignore-start — 実在リソースの固有名詞のため英語のまま */}
            <ul>
              <li>State of JS 2023</li>
              <li>React 19 release notes</li>
              <li>Vue 3.4 performance benchmarks</li>
            </ul>
            {/* i18n-ignore-end */}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_conflict_label")} status="error">
            {t("story.thoughtprocess_conflict_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_correction_label")} status="completed">
            {t("story.thoughtprocess_correction_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_synthesis_label")} status="pending" isLast>
            {t("story.thoughtprocess_synthesis_content")}
          </ThoughtStep>
        </ThoughtProcess>
      </div>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
        <ThoughtProcess isCollapsible={false} title={t("story.thoughtprocess_title_static")}>
          <ThoughtStep status="completed">{t("story.thoughtprocess_static1")}</ThoughtStep>
          <ThoughtStep status="completed">{t("story.thoughtprocess_static2")}</ThoughtStep>
          <ThoughtStep status="completed" isLast>{t("story.thoughtprocess_static3")}</ThoughtStep>
        </ThoughtProcess>
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
        <ThoughtProcess title={t("story.thoughtprocess_title_thinking")} isThinking={true}>
          <ThoughtStep label={t("story.thoughtprocess_step1_label")} status="completed">
            {t("story.thoughtprocess_step1_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step2_label")} status="pending" isLast>
            {t("story.thoughtprocess_step2_content")}
          </ThoughtStep>
        </ThoughtProcess>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
        <ThoughtProcess title={t("story.thoughtprocess_title_streaming")}>
          <ThoughtStep label={t("story.thoughtprocess_step1_label")} status="completed">
            {t("story.thoughtprocess_step1_content")}
          </ThoughtStep>
          <ThoughtStep label={t("story.thoughtprocess_step2_label")} status="pending" isStreaming={true} isLast>
            {t("story.thoughtprocess_step2_content")}
          </ThoughtStep>
        </ThoughtProcess>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Basic`,`ComplexReasoning`,`Static`,`Thinking`,`Streaming`]}));b();export{m as Basic,h as ComplexReasoning,g as Static,v as Streaming,_ as Thinking,y as __namedExportsOrder,p as default,b as n,d as t};