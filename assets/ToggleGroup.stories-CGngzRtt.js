import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as V}from"./iframe-BdHo9cuV.js";import{P as a}from"./index-BxUS1-Uu.js";import{I as _}from"./Icon-BsQ7L9U9.js";const s=({options:r,value:v,defaultValue:T,onChange:b,selectionMode:g="single",size:y="medium",fullWidth:N=!1,className:O=""})=>{const h=v!==void 0,[q,w]=V.useState(T??(g==="multiple"?[]:"")),n=h?v:q,M=e=>{let t;if(g==="multiple"){const f=Array.isArray(n)?n:[];f.includes(e)?t=f.filter(I=>I!==e):t=[...f,e]}else t=n===e?"":e;h||w(t),b&&b(t)},S=e=>g==="multiple"?(Array.isArray(n)?n:[]).includes(e):n===e,x=["wim-toggle-group",`wim-toggle-group--${{small:"sm",medium:"md",large:"lg"}[y]}`,N?"wim-toggle-group--full-width":"",O].filter(Boolean).join(" ");return l.jsx("div",{className:x,role:"group",children:r.map(e=>l.jsxs("button",{type:"button",className:["wim-toggle-group__item",S(e.value)?"wim-toggle-group__item--active":"",!e.label&&e.iconName?"wim-toggle-group__item--icon-only":""].filter(Boolean).join(" "),onClick:()=>M(e.value),disabled:e.disabled,"aria-pressed":S(e.value),"aria-label":e.label||e.value,children:[e.iconName&&l.jsx(_,{name:e.iconName,size:y}),e.label&&l.jsx("span",{className:"wim-toggle-group__label",children:e.label})]},e.value))})};s.propTypes={options:a.arrayOf(a.shape({label:a.string,value:a.string.isRequired,iconName:a.string,disabled:a.bool})).isRequired,value:a.oneOfType([a.string,a.arrayOf(a.string)]),defaultValue:a.oneOfType([a.string,a.arrayOf(a.string)]),onChange:a.func,selectionMode:a.oneOf(["single","multiple"]),size:a.oneOf(["small","medium","large"]),fullWidth:a.bool,className:a.string};s.__docgenInfo={description:"ToggleGroup component allows users to select one or multiple options from a set of buttons.",methods:[],displayName:"ToggleGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label?: string;\r
    value: string;\r
    iconName?: any; // Name from Icon component\r
    disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!1}},{key:"value",value:{name:"string",required:!0}},{key:"iconName",value:{name:"any",required:!1}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:"Array of options to display.",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!1},value:{name:"string",required:!0},iconName:{name:"string",required:!1},disabled:{name:"bool",required:!1}}}}},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Currently selected value(s) (controlled mode).",type:{name:"union",value:[{name:"string"},{name:"arrayOf",value:{name:"string"}}]}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:"Default selected value(s) (uncontrolled mode).",type:{name:"union",value:[{name:"string"},{name:"arrayOf",value:{name:"string"}}]}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback fired when selection changes.",type:{name:"func"}},selectionMode:{required:!1,tsType:{name:"union",raw:'"single" | "multiple"',elements:[{name:"literal",value:'"single"'},{name:"literal",value:'"multiple"'}]},description:"Whether single or multiple options can be selected.",defaultValue:{value:'"single"',computed:!1},type:{name:"enum",value:[{value:'"single"',computed:!1},{value:'"multiple"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the toggle items.",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},fullWidth:{required:!1,tsType:{name:"boolean"},description:"Whether the group should take up the full width of its container.",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{required:!1,tsType:{name:"string"},description:"Additional class names.",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const j={title:"Component/Selection Controls/ToggleGroup",component:s,argTypes:{selectionMode:{control:"select",options:["single","multiple"]},size:{control:"select",options:["small","medium","large"]}}},p=[{label:"Left",value:"left",iconName:"CircleIcon"},{label:"Center",value:"center",iconName:"SquareIcon"},{label:"Right",value:"right",iconName:"LoadingIcon"}],i={args:{options:p,selectionMode:"single",defaultValue:"left"}},o={args:{options:p,selectionMode:"multiple",defaultValue:["left","right"]}},u={args:{options:[{value:"bold",iconName:"CircleIcon"},{value:"italic",iconName:"SquareIcon"},{value:"underline",iconName:"LoadingIcon"}],selectionMode:"multiple",defaultValue:["bold"]}},d={render:r=>l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"1rem"},children:[l.jsx(s,{...r,size:"small"}),l.jsx(s,{...r,size:"medium"}),l.jsx(s,{...r,size:"large"})]}),args:{options:p,selectionMode:"single",defaultValue:"center"}},m={args:{options:p,selectionMode:"single",defaultValue:"center",fullWidth:!0}},c={args:{options:[{label:"Available",value:"avail"},{label:"Disabled",value:"disabled",disabled:!0},{label:"Selected Disabled",value:"sel-disabled",disabled:!0}],selectionMode:"multiple",defaultValue:["sel-disabled"]}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    selectionMode: "single",
    defaultValue: "left"
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    selectionMode: "multiple",
    defaultValue: ["left", "right"]
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    options: defaultOptions,
    selectionMode: "single",
    defaultValue: "center",
    fullWidth: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const z=["SingleSelection","MultipleSelection","IconOnly","Sizes","FullWidth","DisabledOptions"],k=Object.freeze(Object.defineProperty({__proto__:null,DisabledOptions:c,FullWidth:m,IconOnly:u,MultipleSelection:o,SingleSelection:i,Sizes:d,__namedExportsOrder:z,default:j},Symbol.toStringTag,{value:"Module"}));export{c as D,m as F,u as I,o as M,i as S,k as T,d as a};
