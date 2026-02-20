import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-C1RJDA45.js";import{c as T}from"./index-y_IfAznw.js";import{S as _}from"./Switch-D7r2yW5v.js";const f=({options:b,value:d,defaultValue:v=[],onChange:c,direction:h="vertical",name:w,className:y,label:s})=>{const p=d!==void 0,[S,V]=g.useState(v),m=`wim-switch-group-label-${g.useId()}`,n=p?d:S,q=(e,l)=>{let i;l?i=[...n||[],e]:i=(n||[]).filter(z=>z!==e),p||V(i),c&&c(i)};return o.jsxs("div",{className:T("wim-switch-group",h==="horizontal"&&"wim-switch-group--horizontal",y),role:"group","aria-labelledby":s?m:void 0,children:[s&&o.jsx("div",{id:m,className:"wim-switch-group-label",children:s}),b.map(e=>o.jsx(_,{label:e.label,value:e.value,checked:(n||[]).includes(e.value),disabled:e.disabled,name:w,onChange:l=>q(e.value,l.target.checked)},e.value))]})};f.__docgenInfo={description:"SwitchGroup component to manage multiple switches.",methods:[],displayName:"SwitchGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    value: string;\r
    disabled?: boolean;\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"グループのラベル"}}};const j={title:"Component/Selection Controls/SwitchGroup",component:f,parameters:{layout:"centered"},argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},u=[{label:"Wi-Fi",value:"wifi"},{label:"Bluetooth",value:"bluetooth"},{label:"Airplane Mode",value:"airplane"}],a={args:{options:u,defaultValue:["wifi"]}},r={args:{options:u,direction:"horizontal",defaultValue:["wifi"]}},t={args:{options:[...u,{label:"Mobile Data (Disabled)",value:"mobile_data",disabled:!0}],defaultValue:["wifi"]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const x=["Default","Horizontal","WithDisabledOption"],C=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Horizontal:r,WithDisabledOption:t,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{r as H,C as S,t as W};
