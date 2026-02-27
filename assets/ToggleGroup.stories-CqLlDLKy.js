import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as q}from"./iframe-DeOiS_GH.js";import{c as N}from"./index-B4DDDrUU.js";import{I as V}from"./Icon-BTlkfwIk.js";const c=({options:n,value:b,defaultValue:T,onChange:v,selectionMode:g="single",size:p="medium",fullWidth:w=!1,className:x})=>{const y=b!==void 0,[I,h]=q.useState(T??(g==="multiple"?[]:"")),a=y?b:I,M=e=>{let s;if(g==="multiple"){const f=Array.isArray(a)?a:[];f.includes(e)?s=f.filter(_=>_!==e):s=[...f,e]}else s=a===e?"":e;y||h(s),v&&v(s)},S=e=>g==="multiple"?(Array.isArray(a)?a:[]).includes(e):a===e;return l.jsx("div",{className:N("wim-toggle-group",`wim-toggle-group--${p==="small"?"sm":p==="large"?"lg":"md"}`,w&&"wim-toggle-group--full-width",x),role:"group",children:n.map(e=>l.jsxs("button",{type:"button",className:N("wim-toggle-group__item",S(e.value)&&"wim-toggle-group__item--active",!e.label&&e.iconName&&"wim-toggle-group__item--icon-only"),onClick:()=>M(e.value),disabled:e.disabled,"aria-pressed":S(e.value),"aria-label":e.label||e.value,children:[e.iconName&&l.jsx(V,{name:e.iconName,size:p}),e.label&&l.jsx("span",{className:"wim-toggle-group__label",children:e.label})]},e.value))})};c.__docgenInfo={description:"ToggleGroup component allows users to select one or multiple options from a set of buttons.",methods:[],displayName:"ToggleGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label?: string;
  value: string;
  iconName?: any; // Name from Icon component
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"any",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:""},selectionMode:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"",defaultValue:{value:'"single"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Components/Selection Controls/ToggleGroup",component:c,argTypes:{selectionMode:{control:"select",options:["single","multiple"]},size:{control:"select",options:["small","medium","large"]}}},m=[{label:"Left",value:"left",iconName:"CircleIcon"},{label:"Center",value:"center",iconName:"SquareIcon"},{label:"Right",value:"right",iconName:"LoadingIcon"}],r={args:{options:m,selectionMode:"single",defaultValue:"left"}},t={args:{options:m,selectionMode:"multiple",defaultValue:["left","right"]}},i={args:{options:[{value:"bold",iconName:"CircleIcon"},{value:"italic",iconName:"SquareIcon"},{value:"underline",iconName:"LoadingIcon"}],selectionMode:"multiple",defaultValue:["bold"]}},o={render:n=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[l.jsx(c,{...n,size:"small"}),l.jsx(c,{...n,size:"medium"}),l.jsx(c,{...n,size:"large"})]}),args:{options:m,selectionMode:"single",defaultValue:"center"}},u={args:{options:m,selectionMode:"single",defaultValue:"center",fullWidth:!0}},d={args:{options:[{label:"Available",value:"avail"},{label:"Disabled",value:"disabled",disabled:!0},{label:"Selected Disabled",value:"sel-disabled",disabled:!0}],selectionMode:"multiple",defaultValue:["sel-disabled"]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    selectionMode: "single",
    defaultValue: "left"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    selectionMode: "multiple",
    defaultValue: ["left", "right"]
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      value: "bold",
      iconName: "CircleIcon"
    }, {
      value: "italic",
      iconName: "SquareIcon"
    }, {
      value: "underline",
      iconName: "LoadingIcon"
    }],
    selectionMode: "multiple",
    defaultValue: ["bold"]
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  }}>\r
      <ToggleGroup {...args} size="small" />\r
      <ToggleGroup {...args} size="medium" />\r
      <ToggleGroup {...args} size="large" />\r
    </div>,
  args: {
    options: defaultOptions,
    selectionMode: "single",
    defaultValue: "center"
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    selectionMode: "single",
    defaultValue: "center",
    fullWidth: true
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    options: [{
      label: "Available",
      value: "avail"
    }, {
      label: "Disabled",
      value: "disabled",
      disabled: true
    }, {
      label: "Selected Disabled",
      value: "sel-disabled",
      disabled: true
    }],
    selectionMode: "multiple",
    defaultValue: ["sel-disabled"]
  }
}`,...d.parameters?.docs?.source}}};const O=["SingleSelection","MultipleSelection","IconOnly","Sizes","FullWidth","DisabledOptions"],G=Object.freeze(Object.defineProperty({__proto__:null,DisabledOptions:d,FullWidth:u,IconOnly:i,MultipleSelection:t,SingleSelection:r,Sizes:o,__namedExportsOrder:O,default:j},Symbol.toStringTag,{value:"Module"}));export{d as D,u as F,i as I,t as M,r as S,G as T,o as a};
