"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{lr as l,t as u}from"./src-BE5jBQ9L.js";var d=e({Default:()=>h,Interactive:()=>g,Variants:()=>_,WithMaxLength:()=>v,__namedExportsOrder:()=>y,default:()=>m}),f,p,m,h,g,_,v,y,b=t((()=>{f=n(r(),1),s(),a(),u(),p=o(),m={title:`Components/Basic Inputs/SmartSearchInput`,component:l,parameters:{layout:`padded`}},h={render:e=>{let{t}=i(c);return(0,p.jsx)(l,{...e,placeholder:t(`story.smartsearchinput_placeholder`)})},args:{width:`md`}},g={render:()=>{let{t:e}=i(c),[t,n]=(0,f.useState)(``),[r,a]=(0,f.useState)([]);return(0,p.jsxs)(`div`,{style:{width:`100%`,maxWidth:`800px`,margin:`0 auto`,display:`flex`,flexDirection:`column`,gap:`24px`},children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`14px`,color:`var(--wim-color-text-secondary)`},children:e(`story.smartsearchinput_interactive_hint`)}),(0,p.jsx)(l,{value:t,onChange:n,onSubmit:e=>{a(t=>[e,...t]),n(``)},placeholder:e(`story.smartsearchinput_ai_placeholder`),allowClear:!0,fullWidth:!0})]}),r.length>0&&(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`p`,{style:{marginBottom:`8px`,fontSize:`13px`,fontWeight:600,color:`var(--wim-color-text-secondary)`},children:e(`story.smartsearchinput_submitted_label`)}),(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`8px`},children:r.map((e,t)=>(0,p.jsx)(`div`,{style:{padding:`8px 12px`,background:`var(--wim-color-ghost-bg)`,borderRadius:`var(--wim-radius-md)`,fontSize:`14px`,border:`1px solid var(--wim-color-border)`,overflowWrap:`break-word`,minWidth:0},children:e},t))})]})]})}},_={render:()=>{let{t:e}=i(c);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`24px`,width:`100%`,maxWidth:`800px`,margin:`0 auto`},children:[(0,p.jsx)(l,{variant:`outline`,placeholder:e(`story.smartsearchinput_placeholder`),fullWidth:!0}),(0,p.jsx)(l,{variant:`ghost`,placeholder:e(`story.smartsearchinput_placeholder`),fullWidth:!0}),(0,p.jsx)(l,{intent:`danger`,error:e(`story.smartsearch_error_invalid`),defaultValue:`error example`,fullWidth:!0})]})}},v={render:()=>{let{t:e}=i(c);return(0,p.jsx)(l,{placeholder:e(`story.smartsearchinput_placeholder`),maxLength:200,fullWidth:!0})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SmartSearchInput {...args} placeholder={t("story.smartsearchinput_placeholder")} />;
  },
  args: {
    width: "md"
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [value, setValue] = useState("");
    const [submitted, setSubmitted] = useState<string[]>([]);
    const handleSubmit = (val: string) => {
      setSubmitted(prev => [val, ...prev]);
      setValue("");
    };
    return <div style={{
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "24px"
    }}>
        <div>
          <p style={{
          marginBottom: "8px",
          fontSize: "14px",
          color: "var(--wim-color-text-secondary)"
        }}>
            {t("story.smartsearchinput_interactive_hint")}
          </p>
          <SmartSearchInput value={value} onChange={setValue} onSubmit={handleSubmit} placeholder={t("story.smartsearchinput_ai_placeholder")} allowClear fullWidth />
        </div>
        {submitted.length > 0 && <div>
            <p style={{
          marginBottom: "8px",
          fontSize: "13px",
          fontWeight: 600,
          color: "var(--wim-color-text-secondary)"
        }}>
              {t("story.smartsearchinput_submitted_label")}
            </p>
            <div style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px"
        }}>
              {submitted.map((s, i) => <div key={i} style={{
            padding: "8px 12px",
            background: "var(--wim-color-ghost-bg)",
            borderRadius: "var(--wim-radius-md)",
            fontSize: "14px",
            border: "1px solid var(--wim-color-border)",
            overflowWrap: "break-word",
            minWidth: 0
          }}>
                  {s}
                </div>)}
            </div>
          </div>}
      </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      width: "100%",
      maxWidth: "800px",
      margin: "0 auto"
    }}>
        <SmartSearchInput variant="outline" placeholder={t("story.smartsearchinput_placeholder")} fullWidth />
        <SmartSearchInput variant="ghost" placeholder={t("story.smartsearchinput_placeholder")} fullWidth />
        <SmartSearchInput intent="danger" error={t("story.smartsearch_error_invalid")} defaultValue="error example" fullWidth />
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SmartSearchInput placeholder={t("story.smartsearchinput_placeholder")} maxLength={200} fullWidth />;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Interactive`,`Variants`,`WithMaxLength`]}));b();export{h as Default,g as Interactive,_ as Variants,v as WithMaxLength,y as __namedExportsOrder,m as default,b as n,d as t};