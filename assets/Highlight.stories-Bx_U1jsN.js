"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{_ as s,t as c}from"./src-Ssuy8lr7.js";var l=e({AsChild:()=>_,CaseInsensitive:()=>m,CustomComponent:()=>g,CustomStyle:()=>h,Default:()=>f,MultipleHighlights:()=>p,__namedExportsOrder:()=>v,default:()=>d}),u,d,f,p,m,h,g,_,v,y=t((()=>{a(),r(),c(),u=i(),d={title:`Components/Typography & Icons/Highlight`,component:s,parameters:{layout:`centered`}},f={render:e=>{let{t}=n(o);return(0,u.jsx)(s,{...e,highlight:t(`story.highlight_default_term`),children:t(`story.highlight_default_text`)})}},p={render:e=>{let{t}=n(o);return(0,u.jsx)(s,{...e,highlight:[`React`,`Vue`,`Angular`],children:t(`story.highlight_multi_text`)})}},m={render:e=>{let{t}=n(o);return(0,u.jsx)(s,{...e,highlight:t(`story.highlight_case_term`),children:t(`story.highlight_case_text`)})}},h={render:e=>{let{t}=n(o);return(0,u.jsx)(s,{...e,highlight:t(`story.highlight_custom_term`),highlightStyles:{backgroundColor:`var(--wim-color-primary)`,color:`var(--wim-color-text-on-primary)`,borderRadius:`4px`,padding:`0 4px`},children:t(`story.highlight_custom_text`)})}},g={render:e=>{let{t}=n(o);return(0,u.jsx)(s,{...e,highlight:t(`story.highlight_para_term`),as:`p`,style:{fontSize:`20px`,color:`var(--wim-color-text-secondary)`},children:t(`story.highlight_para_text`)})}},_={render:e=>{let{t}=n(o);return(0,u.jsx)(s,{...e,highlight:t(`story.highlight_link_term`),asChild:!0,children:(0,u.jsx)(`a`,{href:`/`,style:{color:`var(--wim-color-text-accent)`,textDecoration:`underline`},children:t(`story.highlight_link_text`)})})}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_default_term")}>
        {t("story.highlight_default_text")}
      </Highlight>;
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    // Framework names are brand identifiers, shared across locales.
    return <Highlight {...args} highlight={["React", "Vue", "Angular"]}>
        {t("story.highlight_multi_text")}
      </Highlight>;
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_case_term")}>
        {t("story.highlight_case_text")}
      </Highlight>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_custom_term")} highlightStyles={{
      backgroundColor: "var(--wim-color-primary)",
      color: "var(--wim-color-text-on-primary)",
      borderRadius: "4px",
      padding: "0 4px"
    }}>
        {t("story.highlight_custom_text")}
      </Highlight>;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_para_term")} as="p" style={{
      fontSize: "20px",
      color: "var(--wim-color-text-secondary)"
    }}>
        {t("story.highlight_para_text")}
      </Highlight>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Highlight {...args} highlight={t("story.highlight_link_term")} asChild>
        <a href="/" style={{
        color: "var(--wim-color-text-accent)",
        textDecoration: "underline"
      }}>
          {t("story.highlight_link_text")}
        </a>
      </Highlight>;
  }
}`,..._.parameters?.docs?.source}}},v=[`Default`,`MultipleHighlights`,`CaseInsensitive`,`CustomStyle`,`CustomComponent`,`AsChild`]}));y();export{_ as AsChild,m as CaseInsensitive,g as CustomComponent,h as CustomStyle,f as Default,p as MultipleHighlights,v as __namedExportsOrder,d as default,y as n,l as t};