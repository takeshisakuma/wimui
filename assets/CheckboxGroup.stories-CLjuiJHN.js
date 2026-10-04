"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./CheckboxGroup-al0azoVF.js";var u=t({Controlled:()=>_,Default:()=>h,Horizontal:()=>g,LongLabel:()=>v,__namedExportsOrder:()=>y,default:()=>p}),d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),d=n(),i(),a(),c(),f=s(),p={title:`Components/Selection Controls/CheckboxGroup`,component:l,argTypes:{disabled:{control:`boolean`},direction:{control:`radio`,options:[`vertical`,`horizontal`]}}},m=()=>{let{t:e}=r(o);return[{label:e(`story.fruit_apple`),value:`apple`},{label:e(`story.fruit_banana`),value:`banana`},{label:e(`story.fruit_cherry`),value:`cherry`},{label:`${e(`story.fruit_date`)} ${e(`story.option_disabled`)}`,value:`date`,disabled:!0}]},h={render:function(e){let t=m();return(0,f.jsx)(l,{...e,options:t,defaultValue:[`banana`]})}},g={render:function(e){let t=m();return(0,f.jsx)(l,{...e,options:t,direction:`horizontal`,defaultValue:[`apple`,`cherry`]})}},_=()=>{let{t:e}=r(o),t=m(),[n,i]=(0,d.useState)([`apple`]);return(0,f.jsxs)(`div`,{children:[(0,f.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[e(`story.checkboxgroup_selected`),`: `,n.join(`, `)]}),(0,f.jsx)(l,{options:t,value:n,onChange:i})]})},v={render:function(e){let{t}=r(o);return(0,f.jsx)(l,{...e,options:[{label:t(`story.checkbox_long_label`),value:`long1`},{label:t(`story.checkbox_long_label`),value:`long2`}],defaultValue:[`long1`]})}},_.__docgenInfo={description:``,methods:[],displayName:`Controlled`},y=[`Default`,`Horizontal`,`Controlled`,`LongLabel`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} defaultValue={["banana"]} />;
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} direction="horizontal" defaultValue={["apple", "cherry"]} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const options = useOptions();
  const [value, setValue] = useState<string[]>(["apple"]);
  return <div>
      <div style={{
      marginBottom: "1rem"
    }}>
        {t("story.checkboxgroup_selected")}: {value.join(", ")}
      </div>
      <CheckboxGroup options={options} value={value} onChange={setValue} />
    </div>;
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <CheckboxGroup {...args} options={[{
      label: t("story.checkbox_long_label"),
      value: "long1"
    }, {
      label: t("story.checkbox_long_label"),
      // Reusing similar text
      value: "long2"
    }]} defaultValue={["long1"]} />;
  }
}`,...v.parameters?.docs?.source}}}})))()}export{b as i,_ as n,g as r,u as t};