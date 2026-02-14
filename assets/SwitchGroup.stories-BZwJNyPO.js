import{j as c}from"./jsx-runtime-u17CrQMm.js";import{r as V}from"./iframe-CLXnzuMj.js";import{c as q}from"./index-DIcffr0b.js";import{S as z}from"./Switch-Cn2Q6rNe.js";const p=({options:m,value:o,defaultValue:f=[],onChange:u,direction:g="vertical",name:v,className:b})=>{const d=o!==void 0,[h,w]=V.useState(f),n=d?o:h,y=(e,s)=>{let i;s?i=[...n||[],e]:i=(n||[]).filter(S=>S!==e),d||w(i),u&&u(i)};return c.jsx("div",{className:q("wim-switch-group",g==="horizontal"&&"wim-switch-group--horizontal",b),children:m.map(e=>c.jsx(z,{label:e.label,value:e.value,checked:(n||[]).includes(e.value),disabled:e.disabled,name:v,onChange:s=>y(e.value,s.target.checked)},e.value))})};p.__docgenInfo={description:"SwitchGroup component to manage multiple switches.",methods:[],displayName:"SwitchGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
    disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const _={title:"Component/Selection Controls/SwitchGroup",component:p,parameters:{layout:"centered"},argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},l=[{label:"Wi-Fi",value:"wifi"},{label:"Bluetooth",value:"bluetooth"},{label:"Airplane Mode",value:"airplane"}],a={args:{options:l,defaultValue:["wifi"]}},r={args:{options:l,direction:"horizontal",defaultValue:["wifi"]}},t={args:{options:[...l,{label:"Mobile Data (Disabled)",value:"mobile_data",disabled:!0}],defaultValue:["wifi"]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    defaultValue: ["wifi"]
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    options: options,
    direction: "horizontal",
    defaultValue: ["wifi"]
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    options: [...options, {
      label: "Mobile Data (Disabled)",
      value: "mobile_data",
      disabled: true
    }],
    defaultValue: ["wifi"]
  }
}`,...t.parameters?.docs?.source}}};const T=["Default","Horizontal","WithDisabledOption"],k=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Horizontal:r,WithDisabledOption:t,__namedExportsOrder:T,default:_},Symbol.toStringTag,{value:"Module"}));export{r as H,k as S,t as W};
