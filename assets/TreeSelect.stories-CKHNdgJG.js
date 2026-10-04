"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Icon-B_89lpXW.js";import{n as l,t as u}from"./TreeSelect-Dn117pQo.js";import{n as d,t as f}from"./playOpen-D3Z82aS-.js";var p=t({CascadeMultiple:()=>y,Default:()=>v,DefaultExpanded:()=>S,Disabled:()=>C,ExclusiveMultiple:()=>b,Open:()=>w,Searchable:()=>x,__namedExportsOrder:()=>T,default:()=>h}),m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{r(),i(),l(),s(),f(),m=o(),h={title:`Components/Advanced Inputs/TreeSelect`,component:u},g=[{label:`story.treeselect_design`,value:`design`,icon:(0,m.jsx)(c,{name:`EditIcon`,size:`sm`}),children:[{label:`story.treeselect_colors`,value:`colors`,children:[{label:`story.treeselect_primary`,value:`primary`},{label:`story.treeselect_secondary`,value:`secondary`}]},{label:`story.treeselect_typography`,value:`typography`}]},{label:`story.treeselect_components`,value:`components`,icon:(0,m.jsx)(c,{name:`ProjectIcon`,size:`sm`}),children:[{label:`story.treeselect_button`,value:`button`},{label:`story.treeselect_input`,value:`input`}]}],_=(e,t)=>e.map(e=>({...e,label:typeof e.label==`string`?t(e.label):e.label,children:e.children?_(e.children,t):void 0})),v={render:e=>{let{t}=n(a),r=_(g,t);return(0,m.jsx)(u,{...e,treeData:r,placeholder:t(`story.treeselect_placeholder`)})}},y={render:e=>{let{t}=n(a),r=_(g,t);return(0,m.jsx)(u,{...e,treeData:r,multiple:!0,checkStrategy:`cascade`,defaultExpandedKeys:[`design`],placeholder:t(`story.treeselect_placeholder`)})}},b={render:e=>{let{t}=n(a),r=_(g,t);return(0,m.jsx)(u,{...e,treeData:r,multiple:!0,checkStrategy:`exclusive`,defaultExpandedKeys:[`design`],placeholder:t(`story.treeselect_placeholder`)})}},x={render:e=>{let{t}=n(a),r=_(g,t);return(0,m.jsx)(u,{...e,treeData:r,searchable:!0,placeholder:t(`story.treeselect_placeholder`)})}},S={render:e=>{let{t}=n(a),r=_(g,t);return(0,m.jsx)(u,{...e,treeData:r,defaultExpandedKeys:[`design`,`colors`],placeholder:t(`story.treeselect_placeholder`)})}},C={render:e=>{let{t}=n(a),r=_(g,t);return(0,m.jsx)(u,{...e,treeData:r,disabled:!0,value:`colors`,placeholder:t(`story.treeselect_placeholder`)})}},w={...v,play:d},T=[`Default`,`CascadeMultiple`,`ExclusiveMultiple`,`Searchable`,`DefaultExpanded`,`Disabled`,`Open`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} multiple checkStrategy="cascade" defaultExpandedKeys={["design"]} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
「Design」を選ぶと Colors・Typography・Primary・Secondary が全て選択される。`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} multiple checkStrategy="exclusive" defaultExpandedKeys={["design"]} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...b.parameters?.docs?.source},description:{story:`exclusive: 親子排他。親を選ぶと子が解除され、子を選ぶと親が解除される。
集計粒度の選択（「年」と「月」の同時選択を防ぐ）などに適する。`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} searchable placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} defaultExpandedKeys={["design", "colors"]} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} disabled value="colors" placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...w.parameters?.docs?.source}}}})))()}export{b as a,E as c,C as i,v as n,x as o,S as r,p as s,y as t};