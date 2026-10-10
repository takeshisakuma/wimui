"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./TagInput-BbTKQPYB.js";var d=n({Controlled:()=>g,Default:()=>h,Disabled:()=>v,Ghost:()=>y,MaxTags:()=>_,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{f=e(r(),1),a(),o(),l(),p=c(),m={title:`Components/Advanced Inputs/TagInput`,component:u,parameters:{layout:`centered`}},h={render:e=>{let{t}=i(s);return(0,p.jsx)(u,{...e,placeholder:t(`story.taginput_placeholder_default`),defaultValue:[`React`,`TypeScript`,`SCSS`]})}},g={render:()=>{let{t:e}=i(s),[t,n]=f.useState([`WIM UI`,`Premium`,`Modern`]);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`},children:[(0,p.jsxs)(`p`,{style:{margin:0,fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:[e(`story.taginput_current_tags`),` `,t.join(`, `)]}),(0,p.jsx)(u,{value:t,onChange:n,placeholder:`frontend`})]})}},_={render:e=>{let{t}=i(s);return(0,p.jsx)(u,{...e,maxTags:5,placeholder:t(`story.taginput_placeholder_max`),defaultValue:[`One`,`Two`,`Three`]})}},v={args:{disabled:!0,defaultValue:[`Locked`,`Tags`]}},y={...h,args:{...h.args,variant:`ghost`}},b=[`Default`,`Controlled`,`MaxTags`,`Disabled`,`Ghost`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    // Tag values are sample data / brand names, shared across locales.
    return <TagInput {...args} placeholder={t("story.taginput_placeholder_default")} defaultValue={["React", "TypeScript", "SCSS"]} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [tags, setTags] = React.useState(["WIM UI", "Premium", "Modern"]);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-md)"
    }}>
        <p style={{
        margin: 0,
        fontSize: "var(--wim-font-size-sm)",
        color: "var(--wim-color-text-secondary)"
      }}>
          {t("story.taginput_current_tags")} {tags.join(", ")}
        </p>
        {/* placeholder "frontend" is a generic example tag, kept verbatim. i18n-ignore-next-line */}
        <TagInput value={tags} onChange={setTags} placeholder="frontend" />
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <TagInput {...args} maxTags={5} placeholder={t("story.taginput_placeholder_max")} defaultValue={["One", "Two", "Three"]} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    defaultValue: ["Locked", "Tags"]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    variant: "ghost"
  }
}`,...y.parameters?.docs?.source}}}})))()}export{_ as a,y as i,h as n,d as o,v as r,x as s,g as t};