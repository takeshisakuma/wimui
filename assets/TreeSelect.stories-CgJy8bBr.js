"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-F5Up1IQq.js";import{n as s,t as c}from"./Icon-dyTmj1rn.js";import{n as l,t as u}from"./TreeSelect-Cj-sb3I3.js";var d=e({CascadeMultiple:()=>_,Default:()=>g,DefaultExpanded:()=>b,Disabled:()=>x,ExclusiveMultiple:()=>v,Searchable:()=>y,__namedExportsOrder:()=>S,default:()=>p}),f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{a(),r(),l(),s(),f=i(),p={title:`Components/Advanced Inputs/TreeSelect`,component:u},m=[{label:`story.treeselect_design`,value:`design`,icon:(0,f.jsx)(c,{name:`EditIcon`,size:`sm`}),children:[{label:`story.treeselect_colors`,value:`colors`,children:[{label:`story.treeselect_primary`,value:`primary`},{label:`story.treeselect_secondary`,value:`secondary`}]},{label:`story.treeselect_typography`,value:`typography`}]},{label:`story.treeselect_components`,value:`components`,icon:(0,f.jsx)(c,{name:`ProjectIcon`,size:`sm`}),children:[{label:`story.treeselect_button`,value:`button`},{label:`story.treeselect_input`,value:`input`}]}],h=(e,t)=>e.map(e=>({...e,label:typeof e.label==`string`?t(e.label):e.label,children:e.children?h(e.children,t):void 0})),g={render:e=>{let{t}=n(o),r=h(m,t);return(0,f.jsx)(u,{...e,treeData:r,placeholder:t(`story.treeselect_placeholder`)})}},_={render:e=>{let{t}=n(o),r=h(m,t);return(0,f.jsx)(u,{...e,treeData:r,multiple:!0,checkStrategy:`cascade`,defaultExpandedKeys:[`design`],placeholder:t(`story.treeselect_placeholder`)})}},v={render:e=>{let{t}=n(o),r=h(m,t);return(0,f.jsx)(u,{...e,treeData:r,multiple:!0,checkStrategy:`exclusive`,defaultExpandedKeys:[`design`],placeholder:t(`story.treeselect_placeholder`)})}},y={render:e=>{let{t}=n(o),r=h(m,t);return(0,f.jsx)(u,{...e,treeData:r,searchable:!0,placeholder:t(`story.treeselect_placeholder`)})}},b={render:e=>{let{t}=n(o),r=h(m,t);return(0,f.jsx)(u,{...e,treeData:r,defaultExpandedKeys:[`design`,`colors`],placeholder:t(`story.treeselect_placeholder`)})}},x={render:e=>{let{t}=n(o),r=h(m,t);return(0,f.jsx)(u,{...e,treeData:r,disabled:!0,value:`colors`,placeholder:t(`story.treeselect_placeholder`)})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} multiple checkStrategy="cascade" defaultExpandedKeys={["design"]} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
「Design」を選ぶと Colors・Typography・Primary・Secondary が全て選択される。`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} multiple checkStrategy="exclusive" defaultExpandedKeys={["design"]} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...v.parameters?.docs?.source},description:{story:`exclusive: 親子排他。親を選ぶと子が解除され、子を選ぶと親が解除される。
集計粒度の選択（「年」と「月」の同時選択を防ぐ）などに適する。`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} searchable placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} defaultExpandedKeys={["design", "colors"]} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} disabled value="colors" placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`CascadeMultiple`,`ExclusiveMultiple`,`Searchable`,`DefaultExpanded`,`Disabled`]}));C();export{_ as CascadeMultiple,g as Default,b as DefaultExpanded,x as Disabled,v as ExclusiveMultiple,y as Searchable,S as __namedExportsOrder,p as default,C as n,d as t};