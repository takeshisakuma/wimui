import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-D-INtma0.js";import{c as q}from"./index-BYKyH6Np.js";import{S as x}from"./Switch-Cn3Xl6ef.js";import{u as b}from"./useTranslation-gsjwUuWZ.js";const l=({options:t,value:r,defaultValue:n=[],onChange:u,direction:v="vertical",name:y,className:_,label:d})=>{const g=r!==void 0,[S,T]=h.useState(n),w=`wim-switch-group-label-${h.useId()}`,p=g?r:S,V=(e,m)=>{let c;m?c=[...p||[],e]:c=(p||[]).filter(j=>j!==e),g||T(c),u&&u(c)};return a.jsxs("div",{className:q("wim-switch-group",v==="horizontal"&&"wim-switch-group--horizontal",_),role:"group","aria-labelledby":d?w:void 0,children:[d&&a.jsx("div",{id:w,className:"wim-switch-group-label",children:d}),t.map(e=>a.jsx(x,{label:e.label,value:e.value,checked:(p||[]).includes(e.value),disabled:e.disabled,name:y,onChange:m=>V(e.value,m.target.checked)},e.value))]})};l.__docgenInfo={description:"SwitchGroup component to manage multiple switches.",methods:[],displayName:"SwitchGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"グループのラベル"}}};const z={title:"Components/Selection Controls/SwitchGroup",component:l,parameters:{layout:"centered"},argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},f=()=>{const{t}=b(["docs","common","components"]);return[{label:t("story_switch_wifi"),value:"wifi"},{label:t("story_switch_bluetooth"),value:"bluetooth"},{label:t("story_switch_airplane"),value:"airplane"}]},o={render:function(r){const n=f();return a.jsx(l,{...r,options:n,defaultValue:["wifi"]})}},s={render:function(r){const n=f();return a.jsx(l,{...r,options:n,direction:"horizontal",defaultValue:["wifi"]})}},i={render:function(r){const{t:n}=b(["docs","common","components"]),u=f();return a.jsx(l,{...r,options:[...u,{label:`${n("story_mobile_data")} ${n("story_option_disabled")}`,value:"mobile_data",disabled:!0}],defaultValue:["wifi"]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <SwitchGroup {...args} options={options} defaultValue={["wifi"]} />;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <SwitchGroup {...args} options={options} direction="horizontal" defaultValue={["wifi"]} />;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const options = useOptions();
    return <SwitchGroup {...args} options={[...options, {
      label: \`\${t("story_mobile_data")} \${t("story_option_disabled")}\`,
      value: "mobile_data",
      disabled: true
    }]} defaultValue={["wifi"]} />;
  }
}`,...i.parameters?.docs?.source}}};const O=["Default","Horizontal","WithDisabledOption"],$=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Horizontal:s,WithDisabledOption:i,__namedExportsOrder:O,default:z},Symbol.toStringTag,{value:"Module"}));export{s as H,$ as S,i as W};
