"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{n as l,t as u}from"./ThreadList-IihyJYj3.js";var d=e({Default:()=>_,Empty:()=>y,WithActions:()=>v,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b,x=t((()=>{f=n(r(),1),l(),s(),a(),p=o(),m={title:`Components/AI/ThreadList`,component:u,parameters:{layout:`padded`}},h=()=>{let{t:e}=i(c);return typeof window<`u`&&window.__VRT__?[{id:`1`,title:`Product roadmap Q3`,preview:`Can you outline the milestones?`,timestamp:`2m`},{id:`2`,title:`API error handling`,preview:`Retry with exponential backoff…`,timestamp:`1h`,unread:!0},{id:`3`,title:`Onboarding copy`,preview:`Tone should stay friendly.`,timestamp:`3h`},{id:`4`,title:`Usage quotas`,preview:`Soft limit vs hard limit.`,timestamp:`1d`}]:[{id:`1`,title:e(`story.threadlist_t1_title`),preview:e(`story.threadlist_t1_preview`),timestamp:`2m`},{id:`2`,title:e(`story.threadlist_t2_title`),preview:e(`story.threadlist_t2_preview`),timestamp:`1h`,unread:!0},{id:`3`,title:e(`story.threadlist_t3_title`),preview:e(`story.threadlist_t3_preview`),timestamp:`3h`},{id:`4`,title:e(`story.threadlist_t4_title`),preview:e(`story.threadlist_t4_preview`),timestamp:`1d`}]},g=({children:e})=>(0,p.jsx)(`div`,{style:{width:`300px`,border:`1px solid var(--wim-color-border)`,borderRadius:`8px`},children:e}),_={render:()=>{let e=h(),[t,n]=(0,f.useState)(`1`);return(0,p.jsx)(g,{children:(0,p.jsx)(u,{threads:e,activeId:t,onSelect:n})})}},v={render:()=>{let[e,t]=(0,f.useState)(h()),[n,r]=(0,f.useState)(`1`);return(0,p.jsx)(g,{children:(0,p.jsx)(u,{threads:e,activeId:n,onSelect:r,onNewThread:()=>void 0,onDelete:e=>t(t=>t.filter(t=>t.id!==e))})})}},y={render:()=>(0,p.jsx)(g,{children:(0,p.jsx)(u,{threads:[],onNewThread:()=>void 0})})},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const threads = useThreads();
    const [active, setActive] = useState("1");
    return <Frame>
        <ThreadList threads={threads} activeId={active} onSelect={setActive} />
      </Frame>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const initial = useThreads();
    const [threads, setThreads] = useState(initial);
    const [active, setActive] = useState("1");
    return <Frame>
        <ThreadList threads={threads} activeId={active} onSelect={setActive} onNewThread={() => undefined} onDelete={id => setThreads(prev => prev.filter(tItem => tItem.id !== id))} />
      </Frame>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <Frame>
      <ThreadList threads={[]} onNewThread={() => undefined} />
    </Frame>
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithActions`,`Empty`]}));x();export{_ as Default,y as Empty,v as WithActions,b as __namedExportsOrder,m as default,x as n,d as t};