"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{n as l,t as u}from"./JsonViewer-9d2Ib0_g.js";var d=e({Default:()=>g,Editable:()=>y,FullyCollapsed:()=>_,NoToolbar:()=>v,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b,x=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/Data Structures/JsonViewer`,component:u},h={id:`wim-001`,name:`WIM UI Component`,version:1,active:!0,metadata:{author:`Antigravity`,tags:[`react`,`ui`,`library`],config:{theme:`dark`,compact:!1,retries:3}},items:[{id:1,label:`First`},{id:2,label:`Second`,extra:null}]},g={args:{data:h,expandDepth:2}},_={args:{data:h,expandDepth:0}},v={args:{data:h,showToolbar:!1}},y={render:function(e){let{t}=i(c),[n,r]=f.useState(h);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`20px`},children:[(0,p.jsx)(u,{...e,data:n,editable:!0,onChange:e=>r(e)}),(0,p.jsxs)(`div`,{style:{padding:`10px`,background:`var(--wim-color-surface-subtle)`,borderRadius:`4px`},children:[(0,p.jsx)(`h4`,{style:{margin:`0 0 10px 0`,fontSize:`12px`,color:`var(--wim-color-text-secondary)`},children:t(`story.jsonviewer_parent_state`)}),(0,p.jsx)(`pre`,{style:{margin:0,fontSize:`12px`},children:JSON.stringify(n,null,2)})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockData,
    expandDepth: 2
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockData,
    expandDepth: 0
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: mockData,
    showToolbar: false
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [data, setData] = React.useState(mockData);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px"
    }}>
        <JsonViewer {...args} data={data} editable onChange={newData => setData(newData as typeof mockData)} />
        <div style={{
        padding: "10px",
        background: "var(--wim-color-surface-subtle)",
        borderRadius: "4px"
      }}>
          <h4 style={{
          margin: "0 0 10px 0",
          fontSize: "12px",
          color: "var(--wim-color-text-secondary)"
        }}>{t("story.jsonviewer_parent_state")}</h4>
          <pre style={{
          margin: 0,
          fontSize: "12px"
        }}>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`FullyCollapsed`,`NoToolbar`,`Editable`]}));x();export{g as Default,y as Editable,_ as FullyCollapsed,v as NoToolbar,b as __namedExportsOrder,m as default,x as n,d as t};