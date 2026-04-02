import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-D3vcI49J.js";import{c as N}from"./index-BONF4KIw.js";import{T as de}from"./Transition-CEraQKUD.js";import{T as ue}from"./TreeView-Bnu3fXM0.js";import{I as pe}from"./InputBase-BpjudbMI.js";import{F as me}from"./FieldTemplate-BdFfw4Kg.js";import{I as L}from"./Icon-DwELPCFl.js";import{u as g}from"./useTranslation-DPV0a7Ml.js";function $(t){return t.map(a=>({value:a.value,label:a.label,disabled:a.disabled,icon:a.icon,children:a.children?$(a.children):void 0}))}const u=({treeData:t=[],value:a,onChange:r,placeholder:R="Select",label:E,error:w,required:F,layout:P,className:B,disabled:i=!1,multiple:o=!1,searchable:W=!1,defaultExpandedKeys:G=[],allowClear:H=!1,checkStrategy:J="cascade",id:Q,...U})=>{const X=l.useId(),x=Q||`wim-tree-select-${X}`,C=E?`${x}-label`:void 0,A=w?`${x}-error`:void 0,Y=`${x}-trigger`,K=`${x}-dropdown`,[c,m]=l.useState(!1),[Z,M]=l.useState(o?[]:""),S=l.useRef(null),j=l.useRef(null),k=a!==void 0,d=k?a:Z;l.useEffect(()=>{const e=s=>{S.current&&!S.current.contains(s.target)&&m(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),l.useEffect(()=>{if(c){const e=setTimeout(()=>{S.current?.querySelector(".wim-tree-view")?.focus()},100);return()=>clearTimeout(e)}},[c]);const ee=()=>{if(!i){const e=!c;m(e),e||j.current?.focus()}},ae=e=>{if(!i){if(!c){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),m(!0));return}e.key==="Escape"?(e.preventDefault(),m(!1),j.current?.focus()):e.key==="Tab"&&m(!1)}},_=l.useMemo(()=>{const e={},s=I=>{I.forEach(q=>{e[q.value]=q,q.children&&s(q.children)})};return s(t),e},[t]),re=()=>{if(o){const e=Array.isArray(d)?d:[];return e.length===0?null:e.map(s=>_[s]?_[s].label:s).reduce((s,I)=>[s,", ",I])}else{const e=d;return e?_[e]?_[e].label:e:null}},O=e=>{let s;o?s=e:(s=e[0]||"",m(!1)),k||M(s),r&&r(s)},te=()=>{if(i)return;const e=o?[]:"";k||M(e),r&&r(e)},se=l.useMemo(()=>$(t),[t]),z=l.useMemo(()=>o?Array.isArray(d)?d:[]:d?[d]:[],[d,o]),V=re(),{"aria-label":ne,"aria-labelledby":le,"aria-describedby":oe,...ce}=U,ie=typeof R=="string"?R:"Select";return n.jsx(me,{label:E,error:w,required:F,layout:P,labelId:C,errorId:A,className:N("wim-tree-select-container",B),children:n.jsxs("div",{className:"wim-tree-select",ref:S,...ce,children:[n.jsx(pe,{disabled:i,allowClear:H,hasValue:!!V,onClear:te,intent:w?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:c}],className:N(c&&"wim-tree-select__trigger--open"),children:n.jsx("div",{id:Y,className:N("wim-tree-select__trigger",i&&"wim-tree-select__trigger--disabled"),onClick:ee,onKeyDown:ae,tabIndex:i?-1:0,role:"combobox","aria-expanded":c,"aria-haspopup":"tree","aria-controls":c?K:void 0,"aria-disabled":i,"aria-labelledby":C||le,"aria-label":E?void 0:ne||ie,"aria-describedby":A||oe,"aria-invalid":!!w,ref:j,children:n.jsx("div",{className:N("wim-tree-select__value",!V&&"wim-tree-select__value--placeholder"),children:V||R})})}),n.jsx(de,{show:c&&!i,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-tree-select__dropdown",children:n.jsx("div",{id:K,children:n.jsx(ue,{multiSelect:o,defaultSelectedValues:z,defaultCheckedValues:o?z:[],nodes:se,onCheckedChange:O,onSelectedChange:O,checkable:o,checkStrategy:J,searchable:W,defaultExpandedValues:G})})})]})})};u.__docgenInfo={description:"ツリー形式の選択肢から1つまたは複数を選択するためのコンポーネント。",methods:[],displayName:"TreeSelect",props:{treeData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  value: string;
  children?: TreeSelectNode[];
  disabled?: boolean;
  icon?: React.ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"TreeSelectNode"}],raw:"TreeSelectNode[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"TreeSelectNode[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",defaultValue:{value:'"Select"',computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultExpandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}},checkStrategy:{required:!1,tsType:{name:"union",raw:'"cascade" | "exclusive"',elements:[{name:"literal",value:'"cascade"'},{name:"literal",value:'"exclusive"'}]},description:`チェック選択の動作モード（multiple 時に有効）。
- cascade: 親チェック→子全選択、子の一部→親は indeterminate（デフォルト）
- exclusive: 親子排他（親選択→子解除、子選択→親解除）`,defaultValue:{value:'"cascade"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const fe={title:"Components/Advanced Inputs/TreeSelect",component:u},h=[{label:"story.treeselect_design",value:"design",icon:n.jsx(L,{name:"EditIcon",size:"sm"}),children:[{label:"story.treeselect_colors",value:"colors",children:[{label:"story.treeselect_primary",value:"primary"},{label:"story.treeselect_secondary",value:"secondary"}]},{label:"story.treeselect_typography",value:"typography"}]},{label:"story.treeselect_components",value:"components",icon:n.jsx(L,{name:"ProjectIcon",size:"sm"}),children:[{label:"story.treeselect_button",value:"button"},{label:"story.treeselect_input",value:"input"}]}],p=(t,a)=>t.map(r=>({...r,label:typeof r.label=="string"?a(r.label):r.label,children:r.children?p(r.children,a):void 0})),v={render:t=>{const{t:a}=g("docs"),r=p(h,a);return n.jsx(u,{...t,treeData:r,placeholder:a("story.treeselect_placeholder")})}},f={render:t=>{const{t:a}=g("docs"),r=p(h,a);return n.jsx(u,{...t,treeData:r,multiple:!0,checkStrategy:"cascade",defaultExpandedKeys:["design"],placeholder:a("story.treeselect_placeholder")})}},y={render:t=>{const{t:a}=g("docs"),r=p(h,a);return n.jsx(u,{...t,treeData:r,multiple:!0,checkStrategy:"exclusive",defaultExpandedKeys:["design"],placeholder:a("story.treeselect_placeholder")})}},T={render:t=>{const{t:a}=g("docs"),r=p(h,a);return n.jsx(u,{...t,treeData:r,searchable:!0,placeholder:a("story.treeselect_placeholder")})}},b={render:t=>{const{t:a}=g("docs"),r=p(h,a);return n.jsx(u,{...t,treeData:r,defaultExpandedKeys:["design","colors"],placeholder:a("story.treeselect_placeholder")})}},D={render:t=>{const{t:a}=g("docs"),r=p(h,a);return n.jsx(u,{...t,treeData:r,disabled:!0,placeholder:a("story.treeselect_placeholder")})}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} multiple checkStrategy="cascade" defaultExpandedKeys={["design"]} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...f.parameters?.docs?.source},description:{story:`cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
「Design」を選ぶと Colors・Typography・Primary・Secondary が全て選択される。`,...f.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} multiple checkStrategy="exclusive" defaultExpandedKeys={["design"]} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`exclusive: 親子排他。親を選ぶと子が解除され、子を選ぶと親が解除される。
集計粒度の選択（「年」と「月」の同時選択を防ぐ）などに適する。`,...y.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} searchable placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...T.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} defaultExpandedKeys={["design", "colors"]} placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} disabled placeholder={t("story.treeselect_placeholder")} />;
  }
}`,...D.parameters?.docs?.source}}};const ye=["Default","CascadeMultiple","ExclusiveMultiple","Searchable","DefaultExpanded","Disabled"],_e=Object.freeze(Object.defineProperty({__proto__:null,CascadeMultiple:f,Default:v,DefaultExpanded:b,Disabled:D,ExclusiveMultiple:y,Searchable:T,__namedExportsOrder:ye,default:fe},Symbol.toStringTag,{value:"Module"}));export{f as C,v as D,y as E,T as S,_e as T,b as a,D as b};
