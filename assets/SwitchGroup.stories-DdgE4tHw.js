import{r as O,j as m}from"./react-D-G-yZ1o.js";import{P as e}from"./prop-types-CamVAYe7.js";import{S as V}from"./Switch-Cw54lqvW.js";const o=({options:f,value:d,defaultValue:g=[],onChange:c,direction:v="vertical",name:y,className:b})=>{const p=d!==void 0,[h,w]=O.useState(g),l=p?d:h,q=(a,s)=>{let i;s?i=[...l||[],a]:i=(l||[]).filter(S=>S!==a),p||w(i),c&&c(i)};return m.jsx("div",{className:["wim-switch-group",v==="horizontal"?"wim-switch-group--horizontal":"",b].filter(Boolean).join(" "),children:f.map(a=>m.jsx(V,{label:a.label,value:a.value,checked:(l||[]).includes(a.value),disabled:a.disabled,name:y,onChange:s=>q(a.value,s.target.checked)},a.value))})};o.propTypes={options:e.arrayOf(e.shape({label:e.string.isRequired,value:e.string.isRequired,disabled:e.bool}).isRequired).isRequired,value:e.arrayOf(e.string.isRequired),defaultValue:e.arrayOf(e.string.isRequired),onChange:e.func,direction:e.oneOf(["vertical","horizontal"]),name:e.string,className:e.string};o.__docgenInfo={description:"SwitchGroup component to manage multiple switches.",methods:[],displayName:"SwitchGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
    disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:"Array of options to display.",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},value:{name:"string",required:!0},disabled:{name:"bool",required:!1}}}}},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Currently selected values (controlled mode).",type:{name:"arrayOf",value:{name:"string"}}},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Default selected values (uncontrolled mode).",defaultValue:{value:"[]",computed:!1},type:{name:"arrayOf",value:{name:"string"}}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:"Callback fired when value changes.",type:{name:"func"}},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"Layout direction of the switches.",defaultValue:{value:'"vertical"',computed:!1},type:{name:"enum",value:[{value:'"vertical"',computed:!1},{value:'"horizontal"',computed:!1}]}},name:{required:!1,tsType:{name:"string"},description:"Name attribute for the input elements.",type:{name:"string"}},className:{required:!1,tsType:{name:"string"},description:"Additional class names.",type:{name:"string"}}}};const z={title:"Component/Selection Controls/SwitchGroup",component:o,parameters:{layout:"centered"},argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},u=[{label:"Wi-Fi",value:"wifi"},{label:"Bluetooth",value:"bluetooth"},{label:"Airplane Mode",value:"airplane"}],r={args:{options:u,defaultValue:["wifi"]}},t={args:{options:u,direction:"horizontal",defaultValue:["wifi"]}},n={args:{options:[...u,{label:"Mobile Data (Disabled)",value:"mobile_data",disabled:!0}],defaultValue:["wifi"]}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    defaultValue: ["wifi"]
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    direction: "horizontal",
    defaultValue: ["wifi"]
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    options: [...options, {
      label: "Mobile Data (Disabled)",
      value: "mobile_data",
      disabled: true
    }],
    defaultValue: ["wifi"]
  }
}`,...n.parameters?.docs?.source}}};const T=["Default","Horizontal","WithDisabledOption"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:r,Horizontal:t,WithDisabledOption:n,__namedExportsOrder:T,default:z},Symbol.toStringTag,{value:"Module"}));export{t as H,C as S,n as W};
