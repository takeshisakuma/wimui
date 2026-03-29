import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-DD-5vQ8N.js";import{c as j}from"./index-DmsXWWEZ.js";import{T as de}from"./Transition-DEg2kS2K.js";import{T as ue}from"./TreeView-MDWf7OaP.js";import{I as pe}from"./InputBase--bZU5cS-.js";import{F as me}from"./FieldTemplate-ayHnm8ra.js";import{u as p}from"./useTranslation-BGm1MMYI.js";import{I as L}from"./Icon-DG-VY8Tp.js";function $(t,a){return t.map(r=>({value:r.value,label:a(r.label),disabled:r.disabled,icon:r.icon,children:r.children?$(r.children,a):void 0}))}const u=({treeData:t=[],value:a,onChange:r,placeholder:C="Select",label:k,error:x,required:F,layout:P,className:B,disabled:i=!1,multiple:o=!1,searchable:W=!1,defaultExpandedKeys:G=[],allowClear:H=!1,checkStrategy:J="cascade",id:Q,...U})=>{const{t:f}=p("common"),X=l.useId(),w=Q||`wim-tree-select-${X}`,A=k?`${w}-label`:void 0,R=x?`${w}-error`:void 0,Y=`${w}-trigger`,K=`${w}-dropdown`,[c,y]=l.useState(!1),[Z,M]=l.useState(o?[]:""),S=l.useRef(null),V=l.useRef(null),I=a!==void 0,d=I?a:Z;l.useEffect(()=>{const e=n=>{S.current&&!S.current.contains(n.target)&&y(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]),l.useEffect(()=>{if(c){const e=setTimeout(()=>{S.current?.querySelector(".wim-tree-view")?.focus()},100);return()=>clearTimeout(e)}},[c]);const ee=()=>{if(!i){const e=!c;y(e),e||V.current?.focus()}},re=e=>{if(!i){if(!c){(e.key==="Enter"||e.key===" "||e.key==="ArrowDown")&&(e.preventDefault(),y(!0));return}e.key==="Escape"?(e.preventDefault(),y(!1),V.current?.focus()):e.key==="Tab"&&y(!1)}},q=l.useMemo(()=>{const e={},n=ie=>{ie.forEach(E=>{e[E.value]=E,E.children&&n(E.children)})};return n(t),e},[t]),ae=()=>{if(o){const e=Array.isArray(d)?d:[];return e.length===0?null:e.map(n=>q[n]?f(q[n].label):n).join(", ")}else{const e=d;return e?q[e]?f(q[e].label):e:null}},O=e=>{let n;o?n=e:(n=e[0]||"",y(!1)),I||M(n),r&&r(n)},te=()=>{if(i)return;const e=o?[]:"";I||M(e),r&&r(e)},se=l.useMemo(()=>$(t,f),[t,f]),z=l.useMemo(()=>o?Array.isArray(d)?d:[]:d?[d]:[],[d,o]),N=ae(),{"aria-label":ne,"aria-labelledby":le,"aria-describedby":oe,...ce}=U;return s.jsx(me,{label:k,error:x,required:F,layout:P,labelId:A,errorId:R,className:j("wim-tree-select-container",B),children:s.jsxs("div",{className:"wim-tree-select",ref:S,...ce,children:[s.jsx(pe,{disabled:i,allowClear:H,hasValue:!!N,onClear:te,status:x?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:c}],className:j(c&&"wim-tree-select__trigger--open"),children:s.jsx("div",{id:Y,className:j("wim-tree-select__trigger",i&&"wim-tree-select__trigger--disabled"),onClick:ee,onKeyDown:re,tabIndex:i?-1:0,role:"combobox","aria-expanded":c,"aria-haspopup":"tree","aria-controls":c?K:void 0,"aria-disabled":i,"aria-labelledby":A||le,"aria-label":k?void 0:ne||f(C),"aria-describedby":R||oe,"aria-invalid":!!x,ref:V,children:s.jsx("div",{className:j("wim-tree-select__value",!N&&"wim-tree-select__value--placeholder"),children:N||f(C)})})}),s.jsx(de,{show:c&&!i,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-tree-select__dropdown",children:s.jsx("div",{id:K,children:s.jsx(ue,{multiSelect:o,defaultSelectedValues:z,defaultCheckedValues:o?z:[],nodes:se,onCheckedChange:O,onSelectedChange:O,checkable:o,checkStrategy:J,searchable:W,defaultExpandedValues:G})})})]})})};u.__docgenInfo={description:"ツリー形式の選択肢から1つまたは複数を選択するためのコンポーネント。",methods:[],displayName:"TreeSelect",props:{treeData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: TreeSelectNode[];
  disabled?: boolean;
  icon?: React.ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"TreeSelectNode"}],raw:"TreeSelectNode[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"TreeSelectNode[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultExpandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}},checkStrategy:{required:!1,tsType:{name:"union",raw:'"cascade" | "exclusive"',elements:[{name:"literal",value:'"cascade"'},{name:"literal",value:'"exclusive"'}]},description:`チェック選択の動作モード（multiple 時に有効）。
- cascade: 親チェック→子全選択、子の一部→親は indeterminate（デフォルト）
- exclusive: 親子排他（親選択→子解除、子選択→親解除）`,defaultValue:{value:'"cascade"',computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},"aria-label":{required:!1,tsType:{name:"string"},description:""},"aria-labelledby":{required:!1,tsType:{name:"string"},description:""},"aria-describedby":{required:!1,tsType:{name:"string"},description:""}}};const fe={title:"Components/Advanced Inputs/TreeSelect",component:u},v=[{label:"story_treeselect_design",value:"design",icon:s.jsx(L,{name:"EditIcon",size:"small"}),children:[{label:"story_treeselect_colors",value:"colors",children:[{label:"story_treeselect_primary",value:"primary"},{label:"story_treeselect_secondary",value:"secondary"}]},{label:"story_treeselect_typography",value:"typography"}]},{label:"story_treeselect_components",value:"components",icon:s.jsx(L,{name:"ProjectIcon",size:"small"}),children:[{label:"story_treeselect_button",value:"button"},{label:"story_treeselect_input",value:"input"}]}],m=(t,a)=>t.map(r=>({...r,label:a(r.label),children:r.children?m(r.children,a):void 0})),T={render:t=>{const{t:a}=p("docs"),r=m(v,a);return s.jsx(u,{...t,treeData:r,placeholder:a("story_treeselect_placeholder")})}},g={render:t=>{const{t:a}=p("docs"),r=m(v,a);return s.jsx(u,{...t,treeData:r,multiple:!0,checkStrategy:"cascade",defaultExpandedKeys:["design"],placeholder:a("story_treeselect_placeholder")})}},h={render:t=>{const{t:a}=p("docs"),r=m(v,a);return s.jsx(u,{...t,treeData:r,multiple:!0,checkStrategy:"exclusive",defaultExpandedKeys:["design"],placeholder:a("story_treeselect_placeholder")})}},b={render:t=>{const{t:a}=p("docs"),r=m(v,a);return s.jsx(u,{...t,treeData:r,searchable:!0,placeholder:a("story_treeselect_placeholder")})}},_={render:t=>{const{t:a}=p("docs"),r=m(v,a);return s.jsx(u,{...t,treeData:r,defaultExpandedKeys:["design","colors"],placeholder:a("story_treeselect_placeholder")})}},D={render:t=>{const{t:a}=p("docs"),r=m(v,a);return s.jsx(u,{...t,treeData:r,disabled:!0,placeholder:a("story_treeselect_placeholder")})}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...T.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} multiple checkStrategy="cascade" defaultExpandedKeys={["design"]} placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...g.parameters?.docs?.source},description:{story:`cascade（デフォルト）: 親チェックで子全選択、子の一部で親が indeterminate。
「Design」を選ぶと Colors・Typography・Primary・Secondary が全て選択される。`,...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} multiple checkStrategy="exclusive" defaultExpandedKeys={["design"]} placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...h.parameters?.docs?.source},description:{story:`exclusive: 親子排他。親を選ぶと子が解除され、子を選ぶと親が解除される。
集計粒度の選択（「年」と「月」の同時選択を防ぐ）などに適する。`,...h.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} searchable placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...b.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} defaultExpandedKeys={["design", "colors"]} placeholder={t("story_treeselect_placeholder")} />;
  }
}`,..._.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} disabled placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...D.parameters?.docs?.source}}};const ye=["Default","CascadeMultiple","ExclusiveMultiple","Searchable","DefaultExpanded","Disabled"],Se=Object.freeze(Object.defineProperty({__proto__:null,CascadeMultiple:g,Default:T,DefaultExpanded:_,Disabled:D,ExclusiveMultiple:h,Searchable:b,__namedExportsOrder:ye,default:fe},Symbol.toStringTag,{value:"Module"}));export{g as C,T as D,h as E,b as S,Se as T,_ as a,D as b};
