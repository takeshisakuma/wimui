"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{B as l,a as u,g as d,un as f,v as p,w as m}from"./iframe-Bq9jGRMU.js";import{t as h}from"./classnames-D09xBJOL.js";import{n as g,t as _}from"./useWimTranslation-akUKuRsR.js";var v,y,b,x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{v=`_root_10o5d_4`,y=`_sm_10o5d_9`,b=`_item_10o5d_9`,x=`_md_10o5d_14`,S=`_lg_10o5d_17`,C=`_active_10o5d_49`,w=`_icon_10o5d_61`,T=`_count_10o5d_70`,E=`_addButton_10o5d_74`,D=`_addIcon_10o5d_80`,O={root:v,sm:y,item:b,md:x,lg:S,active:C,icon:w,count:T,addButton:E,addIcon:D}})))()}var A,j,M,N;function P(){return(P=t((()=>{A=e(r(),1),j=e(h(),1),_(),u(),k(),M=c(),N=A.forwardRef(({reactions:e,onReact:t,showAddButton:n=!1,onAdd:r,size:i=`md`,disabled:a=!1,className:o,...s},c)=>{let{t:u}=g(`common`);return(0,M.jsxs)(`div`,{ref:c,role:`group`,"aria-label":u(`reaction.aria_label`),className:(0,j.default)(`wim-reaction`,O.root,O[i],o),...s,children:[e.map(e=>(0,M.jsxs)(`button`,{type:`button`,disabled:a,"aria-pressed":e.active??!1,"aria-label":u(`reaction.react_with`,{emoji:e.label,count:e.count}),className:(0,j.default)(O.item,e.active&&O.active),onClick:()=>t?.(e.id,!e.active),children:[(0,M.jsx)(`span`,{className:O.icon,"aria-hidden":`true`,children:e.icon}),(0,M.jsx)(`span`,{className:O.count,children:e.count})]},e.id)),n&&(0,M.jsx)(`button`,{type:`button`,disabled:a,"aria-label":u(`reaction.add_reaction`),className:(0,j.default)(O.item,O.addButton),onClick:r,children:(0,M.jsx)(l,{className:O.addIcon,"aria-hidden":`true`})})]})}),N.displayName=`Reaction`,N.__docgenInfo={description:`Component for displaying and interacting with emoji reactions.`,methods:[],displayName:`Reaction`,props:{reactions:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{
  id: string;
  icon: React.ReactNode;
  label: string;
  count: number;
  active?: boolean;
}`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`icon`,value:{name:`ReactReactNode`,raw:`React.ReactNode`,required:!0}},{key:`label`,value:{name:`string`,required:!0}},{key:`count`,value:{name:`number`,required:!0}},{key:`active`,value:{name:`boolean`,required:!1}}]}}],raw:`ReactionItem[]`},description:`List of reactions`},onReact:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(emoji: string, active: boolean) => void`,signature:{arguments:[{type:{name:`string`},name:`emoji`},{type:{name:`boolean`},name:`active`}],return:{name:`void`}}},description:`Callback when a reaction is added or removed`},showAddButton:{required:!1,tsType:{name:`boolean`},description:`Whether to show the add button`,defaultValue:{value:`false`,computed:!1}},onAdd:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when the add button is clicked`},size:{required:!1,tsType:{name:`Extract`,elements:[{name:`union`,raw:`"xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl"`,elements:[{name:`literal`,value:`"xs"`},{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`},{name:`literal`,value:`"xl"`},{name:`literal`,value:`"2xl"`},{name:`literal`,value:`"3xl"`},{name:`literal`,value:`"4xl"`},{name:`literal`,value:`"5xl"`}]},{name:`union`,raw:`"sm" | "md" | "lg"`,elements:[{name:`literal`,value:`"sm"`},{name:`literal`,value:`"md"`},{name:`literal`,value:`"lg"`}]}],raw:`Extract<ComponentSize, "sm" | "md" | "lg">`},description:`Size`,defaultValue:{value:`"md"`,computed:!1}},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the component is disabled`,defaultValue:{value:`false`,computed:!1}}}}})))()}var F=n({Default:()=>B,Disabled:()=>W,Interactive:()=>G,Large:()=>U,Small:()=>H,WithAddButton:()=>V,__namedExportsOrder:()=>K,default:()=>z});function I(){let{t:e}=i(s);return[{id:`thumbs-up`,icon:(0,R.jsx)(d,{}),label:e(`story.reaction_thumbs_up`),count:12,active:!1},{id:`star`,icon:(0,R.jsx)(m,{}),label:e(`story.reaction_star`),count:5,active:!0},{id:`check`,icon:(0,R.jsx)(f,{}),label:e(`story.reaction_check`),count:3,active:!1},{id:`thumbs-down`,icon:(0,R.jsx)(p,{}),label:e(`story.reaction_thumbs_down`),count:1,active:!1}]}var L,R,z,B,V,H,U,W,G,K;function q(){return(q=t((()=>{L=r(),a(),o(),u(),P(),R=c(),z={title:`Components/Data Indicators/Reaction`,component:N,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},disabled:{control:`boolean`},showAddButton:{control:`boolean`}}},B={render:function(e){return(0,R.jsx)(N,{...e,reactions:I(),size:`md`})}},V={render:function(e){return(0,R.jsx)(N,{...e,reactions:I(),showAddButton:!0,size:`md`})}},H={render:function(e){return(0,R.jsx)(N,{...e,reactions:I(),size:`sm`})}},U={render:function(e){return(0,R.jsx)(N,{...e,reactions:I(),size:`lg`})}},W={render:function(e){return(0,R.jsx)(N,{...e,reactions:I(),disabled:!0})}},G={render:function(){let e=I(),[t,n]=(0,L.useState)(e);return(0,R.jsx)(N,{reactions:t,onReact:(e,t)=>{n(n=>n.map(n=>n.id===e?{...n,active:t,count:t?n.count+1:n.count-1}:n))},showAddButton:!0})}},K=[`Default`,`WithAddButton`,`Small`,`Large`,`Disabled`,`Interactive`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="md" />;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} showAddButton size="md" />;
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="sm" />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} size="lg" />;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    return <Reaction {...args} reactions={useReactions()} disabled />;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}}})))()}export{F as a,q as c,U as i,W as n,H as o,G as r,V as s,B as t};