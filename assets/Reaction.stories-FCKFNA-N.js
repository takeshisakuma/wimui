"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{B as l,a as u,g as d,un as f,v as p,w as m}from"./iframe-Dbq8JC-l.js";import{t as h}from"./classnames-D09xBJOL.js";import{n as g,t as _}from"./useWimTranslation-DkW6YDva.js";import{n as v,t as y}from"./common-BvPUqJnw.js";var b,x,S,C,w,T,E,D,O,k,A;function j(){return(j=t((()=>{b=`_root_10o5d_4`,x=`_sm_10o5d_9`,S=`_item_10o5d_9`,C=`_md_10o5d_14`,w=`_lg_10o5d_17`,T=`_active_10o5d_49`,E=`_icon_10o5d_61`,D=`_count_10o5d_70`,O=`_addButton_10o5d_74`,k=`_addIcon_10o5d_80`,A={root:b,sm:x,item:S,md:C,lg:w,active:T,icon:E,count:D,addButton:O,addIcon:k}})))()}var M,N,P,F;function I(){return(I=t((()=>{M=e(r(),1),N=e(h(),1),_(),v(),u(),j(),P=c(),F=M.forwardRef(({reactions:e,onReact:t,showAddButton:n=!1,onAdd:r,size:i=`md`,disabled:a=!1,className:o,...s},c)=>{let{t:u}=g(y);return(0,P.jsxs)(`div`,{ref:c,role:`group`,"aria-label":u(`reaction.aria_label`),className:(0,N.default)(`wim-reaction`,A.root,A[i],o),...s,children:[e.map(e=>(0,P.jsxs)(`button`,{type:`button`,disabled:a,"aria-pressed":e.active??!1,"aria-label":u(`reaction.react_with`,{emoji:e.label,count:e.count}),className:(0,N.default)(A.item,e.active&&A.active),onClick:()=>t?.(e.id,!e.active),children:[(0,P.jsx)(`span`,{className:A.icon,"aria-hidden":`true`,children:e.icon}),(0,P.jsx)(`span`,{className:A.count,children:e.count})]},e.id)),n&&(0,P.jsx)(`button`,{type:`button`,disabled:a,"aria-label":u(`reaction.add_reaction`),className:(0,N.default)(A.item,A.addButton),onClick:r,children:(0,P.jsx)(l,{className:A.addIcon,"aria-hidden":`true`})})]})}),F.displayName=`Reaction`,F.__docgenInfo={description:`Component for displaying and interacting with emoji reactions.`,methods:[],displayName:`Reaction`,props:{reactions:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  icon: React.ReactNode;
  label: string;
  count: number;
  active?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`count`,value:{name:`number`,required:!0}},{key:`active`,value:{name:`boolean`,required:!1}}]}}],raw:`ReactionItem[]`},description:`List of reactions`},onReact:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(emoji: string, active: boolean) => void`,signature:{arguments:[{type:{name:`string`},name:`emoji`},{type:{name:`boolean`},name:`active`}],return:{name:`void`}}},description:`Callback when a reaction is added or removed`},showAddButton:{required:!1,tsType:{name:`boolean`},description:`Whether to show the add button`,defaultValue:{value:`false`,computed:!1}},onAdd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when the add button is clicked`},size:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"5xl"`}]},{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]}],raw:`Extract<ComponentSize, "sm" | "md" | "lg">`},description:`Size`,defaultValue:{value:`"md"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the component is disabled`,defaultValue:{value:`false`,computed:!1}}}}})))()}var L=n({Default:()=>H,Disabled:()=>K,Interactive:()=>q,Large:()=>G,Small:()=>W,WithAddButton:()=>U,__namedExportsOrder:()=>J,default:()=>V});function R(){let{t:e}=i(s);return[{id:`thumbs-up`,icon:(0,B.jsx)(d,{}),label:e(`story.reaction_thumbs_up`),count:12,active:!1},{id:`star`,icon:(0,B.jsx)(m,{}),label:e(`story.reaction_star`),count:5,active:!0},{id:`check`,icon:(0,B.jsx)(f,{}),label:e(`story.reaction_check`),count:3,active:!1},{id:`thumbs-down`,icon:(0,B.jsx)(p,{}),label:e(`story.reaction_thumbs_down`),count:1,active:!1}]}var z,B,V,H,U,W,G,K,q,J;function Y(){return(Y=t((()=>{z=r(),a(),o(),u(),I(),B=c(),V={title:`Components/Data Indicators/Reaction`,component:F,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},showAddButton:{control:`boolean`}}},H={render:function(e){return(0,B.jsx)(F,{...e,reactions:R(),size:`md`})}},U={render:function(e){return(0,B.jsx)(F,{...e,reactions:R(),showAddButton:!0,size:`md`})}},W={render:function(e){return(0,B.jsx)(F,{...e,reactions:R(),size:`sm`})}},G={render:function(e){return(0,B.jsx)(F,{...e,reactions:R(),size:`lg`})}},K={render:function(e){return(0,B.jsx)(F,{...e,reactions:R(),disabled:!0})}},q={render:function(){let e=R(),[t,n]=(0,z.useState)(e);return(0,B.jsx)(F,{reactions:t,onReact:(e,t)=>{n(n=>n.map(n=>n.id===e?{...n,active:t,count:t?n.count+1:n.count-1}:n))},showAddButton:!0})}},J=[`Default`,`WithAddButton`,`Small`,`Large`,`Disabled`,`Interactive`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="md" />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} showAddButton size="md" />;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="sm" />;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="lg" />;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} disabled />;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}}})))()}export{L as a,Y as c,G as i,K as n,W as o,q as r,U as s,H as t};