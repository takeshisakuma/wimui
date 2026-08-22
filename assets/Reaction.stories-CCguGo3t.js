"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,Q as a,Wn as o,X as s,br as c,cr as l,it as u,xr as d,yr as f,z as p}from"./iframe-F5Up1IQq.js";import{n as m,t as h}from"./Reaction-gLDbqXEu.js";var g=e({Default:()=>x,Disabled:()=>T,Interactive:()=>E,Large:()=>w,Small:()=>C,WithAddButton:()=>S,__namedExportsOrder:()=>D,default:()=>b});function _(){let{t:e}=i(f);return[{id:`thumbs-up`,icon:(0,y.jsx)(s,{}),label:e(`story.reaction_thumbs_up`),count:12,active:!1},{id:`star`,icon:(0,y.jsx)(u,{}),label:e(`story.reaction_star`),count:5,active:!0},{id:`check`,icon:(0,y.jsx)(o,{}),label:e(`story.reaction_check`),count:3,active:!1},{id:`thumbs-down`,icon:(0,y.jsx)(a,{}),label:e(`story.reaction_thumbs_down`),count:1,active:!1}]}var v,y,b,x,S,C,w,T,E,D,O=t((()=>{v=n(r(),1),d(),c(),p(),m(),y=l(),b={title:`Components/Data Indicators/Reaction`,component:h,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},showAddButton:{control:`boolean`}}},x={render:function(e){return(0,y.jsx)(h,{...e,reactions:_(),size:`md`})}},S={render:function(e){return(0,y.jsx)(h,{...e,reactions:_(),showAddButton:!0,size:`md`})}},C={render:function(e){return(0,y.jsx)(h,{...e,reactions:_(),size:`sm`})}},w={render:function(e){return(0,y.jsx)(h,{...e,reactions:_(),size:`lg`})}},T={render:function(e){return(0,y.jsx)(h,{...e,reactions:_(),disabled:!0})}},E={render:function(){let[e,t]=(0,v.useState)(_());return(0,y.jsx)(h,{reactions:e,onReact:(e,n)=>{t(t=>t.map(t=>t.id===e?{...t,active:n,count:n?t.count+1:t.count-1}:t))},showAddButton:!0})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="md" />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} showAddButton size="md" />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="sm" />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="lg" />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} disabled />;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const initial = useReactions();
    const [reactions, setReactions] = useState<ReactionItem[]>(initial);
    const handleReact = (id: string, active: boolean) => {
      setReactions(prev => prev.map(r => r.id === id ? {
        ...r,
        active,
        count: active ? r.count + 1 : r.count - 1
      } : r));
    };
    return <Reaction reactions={reactions} onReact={handleReact} showAddButton />;
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`WithAddButton`,`Small`,`Large`,`Disabled`,`Interactive`]}));O();export{x as Default,T as Disabled,E as Interactive,w as Large,C as Small,S as WithAddButton,D as __namedExportsOrder,b as default,O as n,g as t};