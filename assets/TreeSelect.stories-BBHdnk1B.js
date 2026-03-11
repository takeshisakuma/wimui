import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-SL2HqV3D.js";import{c as N}from"./index-30w8ikAG.js";import{T as ne}from"./Transition-DVzvZ3NQ.js";import{T as $}from"./TreeView-D1FMrl3W.js";import{I as oe}from"./InputBase-DpJHuTQg.js";import{F as ce}from"./FieldTemplate-DewR4Q5O.js";import{u as p}from"./useTranslation-ZF4WB21B.js";import{I as F}from"./Icon-LsAuz8T1.js";const i=({treeData:l=[],value:a,onChange:t,placeholder:E="Select",label:x,error:_,required:L,layout:B,className:K,disabled:c=!1,multiple:n=!1,searchable:P=!1,defaultExpandedKeys:W=[],allowClear:G=!1,id:H,...J})=>{const{t:f}=p("common"),Q=d.useId(),D=H||`wim-tree-select-${Q}`,C=x?`${D}-label`:void 0,k=_?`${D}-error`:void 0,U=`${D}-trigger`,A=`${D}-dropdown`,[u,j]=d.useState(!1),[X,R]=d.useState(n?[]:""),q=d.useRef(null),I=a!==void 0,o=I?a:X;d.useEffect(()=>{const e=r=>{q.current&&!q.current.contains(r.target)&&j(!1)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);const Y=()=>{c||j(!u)},S=d.useMemo(()=>{const e={},r=le=>{le.forEach(w=>{e[w.value]=w,w.children&&r(w.children)})};return r(l),e},[l]),Z=()=>{if(n){const e=Array.isArray(o)?o:[];return e.length===0?null:e.map(r=>S[r]?f(S[r].label):r).join(", ")}else{const e=o;return e?S[e]?f(S[e].label):e:null}},M=e=>{let r;n?r=e:(r=e[0]||"",j(!1)),I||R(r),t&&t(r)},ee=()=>{if(c)return;const e=n?[]:"";I||R(e),t&&t(e)},O=e=>e.map(r=>s.jsx($.Item,{value:r.value,label:f(r.label),icon:r.icon,disabled:r.disabled,children:r.children&&O(r.children)},r.value)),z=d.useMemo(()=>n?Array.isArray(o)?o:[]:o?[o]:[],[o,n]),V=Z(),{"aria-label":re,"aria-labelledby":ae,"aria-describedby":te,...se}=J;return s.jsx(ce,{label:x,error:_,required:L,layout:B,labelId:C,errorId:k,className:K,children:s.jsxs("div",{className:"wim-tree-select",ref:q,...se,children:[s.jsx(oe,{disabled:c,allowClear:G,hasValue:!!V,onClear:ee,status:_?"error":"default",rightIcons:[{name:"ChevronDownIcon",rotated:u}],className:N(u&&"wim-tree-select__trigger--open"),children:s.jsx("div",{id:U,className:N("wim-tree-select__trigger",c&&"wim-tree-select__trigger--disabled"),onClick:Y,tabIndex:c?-1:0,role:"combobox","aria-expanded":u,"aria-haspopup":"tree","aria-controls":u?A:void 0,"aria-disabled":c,"aria-labelledby":C||ae,"aria-label":x?void 0:re||f(E),"aria-describedby":k||te,"aria-invalid":!!_,children:s.jsx("div",{className:N("wim-tree-select__value",!V&&"wim-tree-select__value--placeholder"),children:V||f(E)})})}),s.jsx(ne,{show:u&&!c,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-tree-select__dropdown",children:s.jsx("div",{id:A,children:s.jsx($,{multiSelect:n,defaultSelectedValues:z,defaultCheckedValues:n?z:[],onCheckedChange:M,onSelectedChange:M,checkable:n,searchable:P,defaultExpandedValues:W,children:O(l)})})})]})})};i.__docgenInfo={description:"ツリー形式の選択肢から1つまたは複数を選択するためのコンポーネント。",methods:[],displayName:"TreeSelect",props:{treeData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: TreeSelectNode[];
  disabled?: boolean;
  icon?: React.ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"TreeSelectNode"}],raw:"TreeSelectNode[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"TreeSelectNode[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultExpandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const de={title:"Components/Advanced Inputs/TreeSelect",component:i,parameters:{layout:"centered"}},T=[{label:"story_treeselect_design",value:"design",icon:s.jsx(F,{name:"EditIcon",size:"small"}),children:[{label:"story_treeselect_colors",value:"colors",children:[{label:"story_treeselect_primary",value:"primary"},{label:"story_treeselect_secondary",value:"secondary"}]},{label:"story_treeselect_typography",value:"typography"}]},{label:"story_treeselect_components",value:"components",icon:s.jsx(F,{name:"ProjectIcon",size:"small"}),children:[{label:"story_treeselect_button",value:"button"},{label:"story_treeselect_input",value:"input"}]}],m=(l,a)=>l.map(t=>({...t,label:a(t.label),children:t.children?m(t.children,a):void 0})),y={render:l=>{const{t:a}=p("docs"),t=m(T,a);return s.jsx(i,{...l,treeData:t,placeholder:a("story_treeselect_placeholder")})}},h={render:l=>{const{t:a}=p("docs"),t=m(T,a);return s.jsx(i,{...l,treeData:t,multiple:!0,placeholder:a("story_treeselect_placeholder")})}},g={render:l=>{const{t:a}=p("docs"),t=m(T,a);return s.jsx(i,{...l,treeData:t,searchable:!0,placeholder:a("story_treeselect_placeholder")})}},v={render:l=>{const{t:a}=p("docs"),t=m(T,a);return s.jsx(i,{...l,treeData:t,defaultExpandedKeys:["design","colors"],placeholder:a("story_treeselect_placeholder")})}},b={render:l=>{const{t:a}=p("docs"),t=m(T,a);return s.jsx(i,{...l,treeData:t,disabled:!0,placeholder:a("story_treeselect_placeholder")})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} multiple placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} searchable placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} defaultExpandedKeys={["design", "colors"]} placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData = translateTreeData(defaultTreeData, t);
    return <TreeSelect {...args} treeData={treeData} disabled placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...b.parameters?.docs?.source}}};const ie=["Default","Multiple","Searchable","DefaultExpanded","Disabled"],Te=Object.freeze(Object.defineProperty({__proto__:null,Default:y,DefaultExpanded:v,Disabled:b,Multiple:h,Searchable:g,__namedExportsOrder:ie,default:de},Symbol.toStringTag,{value:"Module"}));export{y as D,h as M,g as S,Te as T,v as a,b};
