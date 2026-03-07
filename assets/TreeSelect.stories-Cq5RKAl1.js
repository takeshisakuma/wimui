import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-BLtjAiBw.js";import{c as N}from"./index-DlDwX616.js";import{T as Q}from"./Transition-BJRi8YQB.js";import{I as T}from"./Icon-DCQu28KW.js";import{T as A}from"./TreeView-BRfGSAt1.js";import{u as m}from"./useTranslation-CIS57IFk.js";const i=({treeData:a=[],value:s,onChange:o,placeholder:R="Select",label:S,className:z,disabled:c=!1,multiple:l=!1,searchable:M=!1,defaultExpandedKeys:O=[],allowClear:P=!1,id:F,...K})=>{const{t:u}=m("common"),L=d.useId(),I=F||L,q=`wim-tree-select-label-${I}`,V=`wim-tree-select-trigger-${I}`,[g,x]=d.useState(!1),[$,D]=d.useState(l?[]:""),w=d.useRef(null),j=s!==void 0,n=j?s:$;d.useEffect(()=>{const r=e=>{w.current&&!w.current.contains(e.target)&&x(!1)};return document.addEventListener("mousedown",r),()=>document.removeEventListener("mousedown",r)},[]);const W=()=>{c||x(!g)},v=d.useMemo(()=>{const r={},e=J=>{J.forEach(b=>{r[b.value]=b,b.children&&e(b.children)})};return e(a),r},[a]),B=()=>{if(l){const r=Array.isArray(n)?n:[];return r.length===0?null:r.map(e=>v[e]?u(v[e].label):e).join(", ")}else{const r=n;return r?v[r]?u(v[r].label):r:null}},E=r=>{let e;l?e=r:(e=r[0]||"",x(!1)),j||D(e),o&&o(e)},G=r=>{if(r.stopPropagation(),c)return;const e=l?[]:"";j||D(e),o&&o(e)},C=r=>r.map(e=>t.jsx(A.Item,{value:e.value,label:u(e.label),icon:e.icon,disabled:e.disabled,children:e.children&&C(e.children)},e.value)),H=d.useMemo(()=>l?Array.isArray(n)?n:[]:n?[n]:[],[n,l]),k=B();return t.jsxs("div",{className:N("wim-tree-select",z),ref:w,...K,children:[S&&t.jsx("label",{id:q,htmlFor:V,className:"wim-tree-select__label",children:u(S)}),t.jsxs("div",{id:V,className:N("wim-tree-select__trigger",g&&"wim-tree-select__trigger--open",c&&"wim-tree-select__trigger--disabled"),onClick:W,tabIndex:c?-1:0,role:"combobox","aria-expanded":g,"aria-haspopup":"tree","aria-disabled":c,"aria-labelledby":S?q:void 0,children:[t.jsx("div",{className:N("wim-tree-select__value",!k&&"wim-tree-select__value--placeholder"),children:k||u(R)}),t.jsxs("div",{className:"wim-tree-select__icons",children:[P&&(l?n.length>0:n)&&!c&&t.jsx("button",{type:"button",className:"wim-tree-select__clear",onClick:G,"aria-label":u("a11y_clear_selection"),children:t.jsx(T,{name:"CloseIcon",size:"small"})}),t.jsx("div",{className:"wim-tree-select__icon",children:t.jsx(T,{name:"ChevronDownIcon",size:"medium"})})]})]}),t.jsx(Q,{show:g&&!c,enter:"fade-enter",enterFrom:"fade-enter-from",enterTo:"fade-enter-to",leave:"fade-leave",leaveFrom:"fade-leave-from",leaveTo:"fade-leave-to",className:"wim-tree-select__dropdown",children:t.jsx(A,{multiSelect:l,defaultSelectedValues:H,onCheckedChange:l?E:void 0,onSelectedChange:l?void 0:E,checkable:l,searchable:M,defaultExpandedValues:O,children:C(a)})})]})};i.__docgenInfo={description:"ツリー形式の選択肢から1つまたは複数を選択するためのコンポーネント。",methods:[],displayName:"TreeSelect",props:{treeData:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  children?: TreeSelectNode[];
  disabled?: boolean;
  icon?: React.ReactNode;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"children",value:{name:"Array",elements:[{name:"TreeSelectNode"}],raw:"TreeSelectNode[]",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}},{key:"icon",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!1}}]}}],raw:"TreeSelectNode[]"},description:"",defaultValue:{value:"[]",computed:!1}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Select"',computed:!1}},label:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},multiple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},searchable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},defaultExpandedKeys:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},allowClear:{required:!1,tsType:{name:"boolean"},description:"Whether to show a clear button when a value is selected",defaultValue:{value:"false",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""}}};const U={title:"Components/Advanced Inputs/TreeSelect",component:i,parameters:{layout:"centered"}},p={render:a=>{const{t:s}=m("docs"),o=[{label:"story_treeselect_design",value:"design",icon:t.jsx(T,{name:"EditIcon",size:"small"}),children:[{label:"story_treeselect_colors",value:"colors",children:[{label:"story_treeselect_primary",value:"primary"},{label:"story_treeselect_secondary",value:"secondary"}]},{label:"story_treeselect_typography",value:"typography"}]},{label:"story_treeselect_components",value:"components",icon:t.jsx(T,{name:"ProjectIcon",size:"small"}),children:[{label:"story_treeselect_button",value:"button"},{label:"story_treeselect_input",value:"input"}]}];return t.jsx(i,{...a,treeData:o,placeholder:s("story_treeselect_placeholder")})}},f={render:a=>{const{t:s}=m("docs"),o=[{label:"story_treeselect_design",value:"design",children:[{label:"story_treeselect_colors",value:"colors"}]}];return t.jsx(i,{...a,treeData:o,multiple:!0,placeholder:s("story_treeselect_placeholder")})}},_={render:a=>{const{t:s}=m("docs");return t.jsx(i,{...a,searchable:!0,placeholder:s("story_treeselect_placeholder")})}},y={render:a=>{const{t:s}=m("docs");return t.jsx(i,{...a,defaultExpandedKeys:["design","colors"],placeholder:s("story_treeselect_placeholder")})}},h={render:a=>{const{t:s}=m("docs");return t.jsx(i,{...a,disabled:!0,placeholder:s("story_treeselect_placeholder")})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData: TreeSelectNode[] = [{
      label: "story_treeselect_design",
      value: "design",
      icon: <Icon name="EditIcon" size="small" />,
      children: [{
        label: "story_treeselect_colors",
        value: "colors",
        children: [{
          label: "story_treeselect_primary",
          value: "primary"
        }, {
          label: "story_treeselect_secondary",
          value: "secondary"
        }]
      }, {
        label: "story_treeselect_typography",
        value: "typography"
      }]
    }, {
      label: "story_treeselect_components",
      value: "components",
      icon: <Icon name="ProjectIcon" size="small" />,
      children: [{
        label: "story_treeselect_button",
        value: "button"
      }, {
        label: "story_treeselect_input",
        value: "input"
      }]
    }];
    return <TreeSelect {...args} treeData={treeData} placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    const treeData: TreeSelectNode[] = [{
      label: "story_treeselect_design",
      value: "design",
      children: [{
        label: "story_treeselect_colors",
        value: "colors"
      }]
    }];
    return <TreeSelect {...args} treeData={treeData} multiple placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    return <TreeSelect {...args} searchable placeholder={t("story_treeselect_placeholder")} />;
  }
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    return <TreeSelect {...args} defaultExpandedKeys={["design", "colors"]} placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation("docs");
    return <TreeSelect {...args} disabled placeholder={t("story_treeselect_placeholder")} />;
  }
}`,...h.parameters?.docs?.source}}};const X=["Default","Multiple","Searchable","DefaultExpanded","Disabled"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:p,DefaultExpanded:y,Disabled:h,Multiple:f,Searchable:_,__namedExportsOrder:X,default:U},Symbol.toStringTag,{value:"Module"}));export{p as D,f as M,_ as S,le as T,y as a,h as b};
