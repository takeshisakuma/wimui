"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{cr as r}from"./iframe-DiXuc7DI.js";import{n as i,t as a}from"./IndicatorBase-Cgmnrclk.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{o=`_root_1n7do_2`,s=`_sm_1n7do_14`,c=`_md_1n7do_20`,l=`_lg_1n7do_26`,u=`_primary_1n7do_32`,d=`_solid_1n7do_32`,f=`_outline_1n7do_38`,p=`_subtle_1n7do_43`,m=`_secondary_1n7do_51`,h=`_success_1n7do_70`,g=`_warning_1n7do_89`,_=`_danger_1n7do_108`,v=`_info_1n7do_127`,y=`_neutral_1n7do_146`,b=`_interactive_1n7do_165`,x=`_icon_1n7do_177`,S={root:o,sm:s,md:c,lg:l,primary:u,solid:d,outline:f,subtle:p,secondary:m,success:h,warning:g,danger:_,info:v,neutral:y,interactive:b,icon:x}})),w=e({Default:()=>k,Intents:()=>A,Variants:()=>j,__namedExportsOrder:()=>M,default:()=>E}),T,E,D,O,k,A,j,M,N=t((()=>{n(),i(),C(),T=r(),E={title:`Components/Internal/IndicatorBase`,component:a,parameters:{layout:`centered`}},D=[`primary`,`secondary`,`success`,`warning`,`danger`,`info`,`neutral`],O=[`solid`,`outline`,`subtle`],k={args:{styles:S,intent:`primary`,variant:`solid`,size:`md`,children:`Label`}},A={render:()=>(0,T.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--wim-spacing-sm)`,alignItems:`center`},children:D.map(e=>(0,T.jsx)(a,{styles:S,intent:e,variant:`solid`,children:e},e))})},j={render:()=>(0,T.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-md)`},children:O.map(e=>(0,T.jsx)(`div`,{style:{display:`flex`,flexWrap:`wrap`,gap:`var(--wim-spacing-sm)`,alignItems:`center`},children:D.map(t=>(0,T.jsx)(a,{styles:S,intent:t,variant:e,children:e},`${e}-${t}`))},e))})},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    styles: demoStyles,
    intent: "primary",
    variant: "solid",
    size: "md",
    children: "Label"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Intents`,`Variants`]}));N();export{k as Default,A as Intents,j as Variants,M as __namedExportsOrder,E as default,N as n,w as t};