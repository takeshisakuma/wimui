"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{n as l,t as u}from"./AIResponseFeedback-Bwn2G2bS.js";var d=e({Default:()=>h,Disabled:()=>v,InContext:()=>y,PreselectedPositive:()=>_,WithRegenerate:()=>g,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b,x=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/AI/AIResponseFeedback`,component:u,parameters:{layout:`centered`},argTypes:{feedback:{control:`select`,options:[void 0,`positive`,`negative`,null]},disabled:{control:`boolean`},showRegenerate:{control:`boolean`}}},h={args:{showRegenerate:!1}},g={args:{showRegenerate:!0}},_={args:{defaultFeedback:`positive`,showRegenerate:!0}},v={args:{disabled:!0,showRegenerate:!0}},y={render:()=>{let{t:e}=i(c),[t,n]=f.useState(null);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-sm)`,maxWidth:480},children:[(0,p.jsx)(`p`,{style:{margin:0,fontSize:`var(--wim-font-size-sm)`,color:`var(--wim-color-text-primary)`},children:e(`story.aifeedback_sample_response`)}),(0,p.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`var(--wim-spacing-sm)`},children:[(0,p.jsx)(u,{feedback:t,onFeedback:n,showRegenerate:!0,onRegenerate:()=>alert(`Regenerate triggered`)}),t&&(0,p.jsx)(`span`,{style:{fontSize:`var(--wim-font-size-xs)`,color:`var(--wim-color-text-secondary)`},children:e(t===`positive`?`story.aifeedback_thanks_positive`:`story.aifeedback_thanks_negative`)})]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    showRegenerate: false
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    showRegenerate: true
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    defaultFeedback: "positive",
    showRegenerate: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    showRegenerate: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [feedback, setFeedback] = React.useState<"positive" | "negative" | null>(null);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-sm)",
      maxWidth: 480
    }}>
        <p style={{
        margin: 0,
        fontSize: "var(--wim-font-size-sm)",
        color: "var(--wim-color-text-primary)"
      }}>
          {t("story.aifeedback_sample_response")}
        </p>
        <div style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--wim-spacing-sm)"
      }}>
          <AIResponseFeedback feedback={feedback} onFeedback={setFeedback} showRegenerate onRegenerate={() => alert("Regenerate triggered")} />
          {feedback && <span style={{
          fontSize: "var(--wim-font-size-xs)",
          color: "var(--wim-color-text-secondary)"
        }}>
              {feedback === "positive" ? t("story.aifeedback_thanks_positive") : t("story.aifeedback_thanks_negative")}
            </span>}
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithRegenerate`,`PreselectedPositive`,`Disabled`,`InContext`]}));x();export{h as Default,v as Disabled,y as InContext,_ as PreselectedPositive,g as WithRegenerate,b as __namedExportsOrder,m as default,x as n,d as t};