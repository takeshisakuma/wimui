import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-OlV4UgK7.js";import{c as z}from"./index-Dj-MT3vJ.js";import{S as O}from"./Switch-Bn23fqrH.js";import{F as G}from"./FieldTemplate-DX5m6Pme.js";import{u as v}from"./useTranslation-CLFZhCB5.js";const l=({options:t,value:r,defaultValue:o=[],onChange:d,direction:b="vertical",name:h,className:w,label:f,error:S,required:T})=>{const g=r!==void 0,[q,V]=y.useState(o),_=`wim-switch-group-label-${y.useId()}`,u=g?r:q,j=(e,p)=>{let c;p?c=[...u||[],e]:c=(u||[]).filter(x=>x!==e),g||V(c),d&&d(c)};return s.jsx(G,{label:f,error:S,required:T,labelId:_,className:w,children:s.jsx("div",{className:z("wim-switch-group",b==="horizontal"&&"wim-switch-group--horizontal"),role:"group","aria-labelledby":f?_:void 0,children:t.map(e=>s.jsx(O,{label:e.label,value:e.value,checked:(u||[]).includes(e.value),disabled:e.disabled,name:h,onChange:p=>j(e.value,p.target.checked)},e.value))})})};l.__docgenInfo={description:"SwitchGroup component to manage multiple switches.",methods:[],displayName:"SwitchGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"グループのラベル"},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const R={title:"Components/Selection Controls/SwitchGroup",component:l,parameters:{layout:"centered"},argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},m=()=>{const{t}=v(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return[{label:t("story_switch_wifi"),value:"wifi"},{label:t("story_switch_bluetooth"),value:"bluetooth"},{label:t("story_switch_airplane"),value:"airplane"}]},a={render:function(r){const o=m();return s.jsx(l,{...r,options:o,defaultValue:["wifi"]})}},n={render:function(r){const o=m();return s.jsx(l,{...r,options:o,direction:"horizontal",defaultValue:["wifi"]})}},i={render:function(r){const{t:o}=v(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),d=m();return s.jsx(l,{...r,options:[...d,{label:`${o("story_mobile_data")} ${o("story_option_disabled")}`,value:"mobile_data",disabled:!0}],defaultValue:["wifi"]})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <SwitchGroup {...args} options={options} defaultValue={["wifi"]} />;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <SwitchGroup {...args} options={options} direction="horizontal" defaultValue={["wifi"]} />;
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const options = useOptions();
    return <SwitchGroup {...args} options={[...options, {
      label: \`\${t("story_mobile_data")} \${t("story_option_disabled")}\`,
      value: "mobile_data",
      disabled: true
    }]} defaultValue={["wifi"]} />;
  }
}`,...i.parameters?.docs?.source}}};const I=["Default","Horizontal","WithDisabledOption"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:a,Horizontal:n,WithDisabledOption:i,__namedExportsOrder:I,default:R},Symbol.toStringTag,{value:"Module"}));export{n as H,H as S,i as W};
