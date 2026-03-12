import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as h}from"./iframe-BisTGuVC.js";import{c as z}from"./index-Ckw0h7AD.js";import{S as O}from"./Switch-BAwvssaj.js";import{F as G}from"./FieldTemplate-DQGW8oml.js";import{u as w}from"./useTranslation-BH3LN071.js";const l=({options:r,value:t,defaultValue:n=[],onChange:u,direction:y="vertical",name:v,className:_,label:f,error:S,required:T})=>{const g=t!==void 0,[q,V]=h.useState(n),b=`wim-switch-group-label-${h.useId()}`,d=g?t:q,j=(e,p)=>{let c;p?c=[...d||[],e]:c=(d||[]).filter(x=>x!==e),g||V(c),u&&u(c)};return a.jsx(G,{label:f,error:S,required:T,labelId:b,className:_,children:a.jsx("div",{className:z("wim-switch-group",y==="horizontal"&&"wim-switch-group--horizontal"),role:"group","aria-labelledby":f?b:void 0,children:r.map(e=>a.jsx(O,{label:e.label,value:e.value,checked:(d||[]).includes(e.value),disabled:e.disabled,name:v,onChange:p=>j(e.value,p.target.checked)},e.value))})})};l.__docgenInfo={description:"SwitchGroup component to manage multiple switches.",methods:[],displayName:"SwitchGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"グループのラベル"},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const R={title:"Components/Selection Controls/SwitchGroup",component:l,parameters:{layout:"centered"},argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},m=()=>{const{t:r}=w(["docs","common","components"]);return[{label:r("story_switch_wifi"),value:"wifi"},{label:r("story_switch_bluetooth"),value:"bluetooth"},{label:r("story_switch_airplane"),value:"airplane"}]},o={render:function(t){const n=m();return a.jsx(l,{...t,options:n,defaultValue:["wifi"]})}},s={render:function(t){const n=m();return a.jsx(l,{...t,options:n,direction:"horizontal",defaultValue:["wifi"]})}},i={render:function(t){const{t:n}=w(["docs","common","components"]),u=m();return a.jsx(l,{...t,options:[...u,{label:`${n("story_mobile_data")} ${n("story_option_disabled")}`,value:"mobile_data",disabled:!0}],defaultValue:["wifi"]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const I=["Default","Horizontal","WithDisabledOption"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:o,Horizontal:s,WithDisabledOption:i,__namedExportsOrder:I,default:R},Symbol.toStringTag,{value:"Module"}));export{s as H,H as S,i as W};
