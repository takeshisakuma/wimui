"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{n as l,t as u}from"./TagInput-B5pmYsid.js";var d=e({Controlled:()=>g,Default:()=>h,Disabled:()=>v,MaxTags:()=>_,__namedExportsOrder:()=>y,default:()=>m}),f,p,m,h,g,_,v,y,b=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/Advanced Inputs/TagInput`,component:u,parameters:{layout:`centered`}},h={render:e=>{let{t}=i(c);return(0,p.jsx)(u,{...e,placeholder:t(`story.taginput_placeholder_default`),defaultValue:[`React`,`TypeScript`,`SCSS`]})}},g={render:()=>{let{t:e}=i(c),[t,n]=f.useState([`WIM UI`,`Premium`,`Modern`]);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`},children:[(0,p.jsxs)(`p`,{style:{margin:0,fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-secondary)`},children:[e(`story.taginput_current_tags`),` `,t.join(`, `)]}),(0,p.jsx)(u,{value:t,onChange:n,placeholder:`frontend`})]})}},_={render:e=>{let{t}=i(c);return(0,p.jsx)(u,{...e,maxTags:5,placeholder:t(`story.taginput_placeholder_max`),defaultValue:[`One`,`Two`,`Three`]})}},v={args:{disabled:!0,defaultValue:[`Locked`,`Tags`]}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Controlled`,`MaxTags`,`Disabled`]}));b();export{g as Controlled,h as Default,v as Disabled,_ as MaxTags,y as __namedExportsOrder,m as default,b as n,d as t};