"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{t as r}from"./jsx-runtime-DeHZSEgm.js";import{n as i,t as a}from"./IndicatorBase-Cos0nW3K.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{o=`_root_46pwc_2`,s=`_sm_46pwc_14`,c=`_md_46pwc_20`,l=`_lg_46pwc_26`,u=`_primary_46pwc_32`,d=`_solid_46pwc_32`,f=`_outline_46pwc_38`,p=`_subtle_46pwc_43`,m=`_success_46pwc_49`,h=`_warning_46pwc_66`,g=`_danger_46pwc_83`,_=`_info_46pwc_100`,v=`_neutral_46pwc_117`,y=`_interactive_46pwc_134`,b=`_icon_46pwc_146`,x={root:o,sm:s,md:c,lg:l,primary:u,solid:d,outline:f,subtle:p,success:m,warning:h,danger:g,info:_,neutral:v,interactive:y,icon:b}})))()}var C=t({Default:()=>O,Intents:()=>k,Variants:()=>A,__namedExportsOrder:()=>j,default:()=>T}),w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{n(),i(),S(),w=r(),T={title:`Components/Internal/IndicatorBase`,component:a,parameters:{layout:`centered`}},E=[`primary`,`success`,`warning`,`danger`,`info`,`neutral`],D=[`solid`,`outline`,`subtle`],O={args:{styles:x,intent:`primary`,variant:`solid`,size:`md`,children:`Label`}},k={render:()=>(0,w.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--wim-spacing-sm)`,alignItems:`center`},children:E.map(e=>(0,w.jsx)(a,{styles:x,intent:e,variant:`solid`,children:e},e))})},A={render:()=>(0,w.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`},children:D.map(e=>(0,w.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--wim-spacing-sm)`,alignItems:`center`},children:E.map(t=>(0,w.jsx)(a,{styles:x,intent:t,variant:e,children:e},`${e}-${t}`))},e))})},j=[`Default`,`Intents`,`Variants`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    styles: demoStyles,
    intent: "primary",
    variant: "solid",
    size: "md",
    children: "Label"
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "var(--wim-spacing-sm)",
    alignItems: "center"
  }}>
      {intents.map(intent => <IndicatorBase key={intent} styles={demoStyles} intent={intent} variant="solid">
          {intent}
        </IndicatorBase>)}
    </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "var(--wim-spacing-md)"
  }}>
      {variants.map(variant => <div key={variant} style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "var(--wim-spacing-sm)",
      alignItems: "center"
    }}>
          {intents.map(intent => <IndicatorBase key={\`\${variant}-\${intent}\`} styles={demoStyles} intent={intent} variant={variant}>
              {variant}
            </IndicatorBase>)}
        </div>)}
    </div>
}`,...A.parameters?.docs?.source}}}})))()}export{M as a,A as i,C as n,k as r,O as t};