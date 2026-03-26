import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as h,A as w}from"./iframe-badbAK5Z.js";import{c as z}from"./index-BRitA1b6.js";import{S as O}from"./Switch-76EGtMvr.js";import{F as G}from"./FieldTemplate-CQL0eRRj.js";import{u as y}from"./useTranslation-uxHS973M.js";const l=({options:r,value:t,defaultValue:a=[],onChange:u,direction:v="vertical",name:_,className:S,label:f,error:T,required:q})=>{const g=t!==void 0,[V,j]=h.useState(a),b=`wim-switch-group-label-${h.useId()}`,c=g?t:V,x=(e,p)=>{let d;p?d=[...c||[],e]:d=(c||[]).filter(A=>A!==e),g||j(d),u&&u(d)};return n.jsx(G,{label:f,error:T,required:q,labelId:b,className:S,children:n.jsx("div",{className:z("wim-switch-group",v==="horizontal"&&"wim-switch-group--horizontal"),role:"group","aria-labelledby":f?b:void 0,children:r.map(e=>n.jsx(O,{label:e.label,value:e.value,checked:(c||[]).includes(e.value),disabled:e.disabled,name:_,onChange:p=>x(e.value,p.target.checked)},e.value))})})};l.__docgenInfo={description:"SwitchGroup component to manage multiple switches.",methods:[],displayName:"SwitchGroup",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  value: string;
  disabled?: boolean;
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"value",value:{name:"string",required:!0}},{key:"disabled",value:{name:"boolean",required:!1}}]}}],raw:"Option[]"},description:""},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},defaultValue:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:"[]",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"value"}],return:{name:"void"}}},description:""},direction:{required:!1,tsType:{name:"union",raw:'"vertical" | "horizontal"',elements:[{name:"literal",value:'"vertical"'},{name:"literal",value:'"horizontal"'}]},description:"",defaultValue:{value:'"vertical"',computed:!1}},name:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:"グループのラベル"},error:{required:!1,tsType:{name:"string"},description:""},required:{required:!1,tsType:{name:"boolean"},description:""}}};const C={title:"Components/Selection Controls/SwitchGroup",component:l,parameters:{layout:"centered"},argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},m=()=>{const{t:r}=y(w);return[{label:r("story_switch_wifi"),value:"wifi"},{label:r("story_switch_bluetooth"),value:"bluetooth"},{label:r("story_switch_airplane"),value:"airplane"}]},s={render:function(t){const a=m();return n.jsx(l,{...t,options:a,defaultValue:["wifi"]})}},o={render:function(t){const a=m();return n.jsx(l,{...t,options:a,direction:"horizontal",defaultValue:["wifi"]})}},i={render:function(t){const{t:a}=y(w),u=m();return n.jsx(l,{...t,options:[...u,{label:`${a("story_mobile_data")} ${a("story_option_disabled")}`,value:"mobile_data",disabled:!0}],defaultValue:["wifi"]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <SwitchGroup {...args} options={options} defaultValue={["wifi"]} />;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <SwitchGroup {...args} options={options} direction="horizontal" defaultValue={["wifi"]} />;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = useOptions();
    return <SwitchGroup {...args} options={[...options, {
      label: \`\${t("story_mobile_data")} \${t("story_option_disabled")}\`,
      value: "mobile_data",
      disabled: true
    }]} defaultValue={["wifi"]} />;
  }
}`,...i.parameters?.docs?.source}}};const E=["Default","Horizontal","WithDisabledOption"],H=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Horizontal:o,WithDisabledOption:i,__namedExportsOrder:E,default:C},Symbol.toStringTag,{value:"Module"}));export{s as D,o as H,H as S,i as W};
