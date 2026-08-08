"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{n as l,t as u}from"./AgentStatus-PPkizvro.js";var d=e({AllStatuses:()=>g,Cycling:()=>x,Default:()=>h,DoneState:()=>C,ErrorState:()=>S,Sizes:()=>v,WithCustomMessage:()=>_,WithoutLabel:()=>y,__namedExportsOrder:()=>w,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S,C,w,T=t((()=>{f=n(r(),1),l(),s(),a(),p=o(),m={title:`Components/AI/AgentStatus`,component:u,parameters:{layout:`padded`},args:{status:`idle`,showLabel:!0,size:`md`}},h={},g={render:()=>(0,p.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[`idle`,`thinking`,`running`,`waiting`,`done`,`error`].map(e=>(0,p.jsx)(u,{status:e},e))})},_={render:()=>{let{t:e}=i(c);return(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,p.jsx)(u,{status:`thinking`,message:e(`story.agent_status_thinking_msg`)}),(0,p.jsx)(u,{status:`running`,message:e(`story.agent_status_running_msg`)}),(0,p.jsx)(u,{status:`waiting`,message:e(`story.agent_status_waiting_msg`)})]})}},v={render:()=>(0,p.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`12px`},children:[(0,p.jsx)(u,{status:`running`,size:`sm`}),(0,p.jsx)(u,{status:`running`,size:`md`}),(0,p.jsx)(u,{status:`running`,size:`lg`})]})},y={args:{showLabel:!1,status:`thinking`}},b=[`idle`,`thinking`,`running`,`waiting`,`done`],x={render:()=>{let[e,t]=(0,f.useState)(0);return(0,f.useEffect)(()=>{if(typeof window<`u`&&window.__VRT__)return;let e=setInterval(()=>{t(e=>(e+1)%b.length)},1800);return()=>clearInterval(e)},[]),(0,p.jsx)(u,{status:b[e]})}},S={args:{status:`error`}},C={args:{status:`done`}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const statuses: AgentStatusValue[] = ["idle", "thinking", "running", "waiting", "done", "error"];
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "12px"
    }}>
        {statuses.map(s => <AgentStatus key={s} status={s} />)}
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
      gap: "12px"
    }}>
        <AgentStatus status="thinking" message={t("story.agent_status_thinking_msg")} />
        <AgentStatus status="running" message={t("story.agent_status_running_msg")} />
        <AgentStatus status="waiting" message={t("story.agent_status_waiting_msg")} />
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  }}>
      <AgentStatus status="running" size="sm" />
      <AgentStatus status="running" size="md" />
      <AgentStatus status="running" size="lg" />
    </div>
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    showLabel: false,
    status: "thinking"
  }
}`,...y.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
      // @ts-expect-error: __VRT__ is a custom global flag for testing
      if (typeof window !== "undefined" && window.__VRT__) return;
      const id = setInterval(() => {
        setIndex(i => (i + 1) % CYCLE_SEQUENCE.length);
      }, 1800);
      return () => clearInterval(id);
    }, []);
    return <AgentStatus status={CYCLE_SEQUENCE[index]} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    status: "error"
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    status: "done"
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`AllStatuses`,`WithCustomMessage`,`Sizes`,`WithoutLabel`,`Cycling`,`ErrorState`,`DoneState`]}));T();export{g as AllStatuses,x as Cycling,h as Default,C as DoneState,S as ErrorState,v as Sizes,_ as WithCustomMessage,y as WithoutLabel,w as __namedExportsOrder,m as default,T as n,d as t};