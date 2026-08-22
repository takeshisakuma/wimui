"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{t as l,ti as u}from"./src-Ssuy8lr7.js";var d=e({Controlled:()=>v,Default:()=>g,Horizontal:()=>_,LongLabel:()=>y,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b,x=t((()=>{r(),f=n(r(),1),s(),a(),l(),p=o(),m={title:`Components/Selection Controls/CheckboxGroup`,component:u,argTypes:{disabled:{control:`boolean`},direction:{control:`radio`,options:[`vertical`,`horizontal`]}}},h=()=>{let{t:e}=i(c);return[{label:e(`story.fruit_apple`),value:`apple`},{label:e(`story.fruit_banana`),value:`banana`},{label:e(`story.fruit_cherry`),value:`cherry`},{label:`${e(`story.fruit_date`)} ${e(`story.option_disabled`)}`,value:`date`,disabled:!0}]},g={render:function(e){let t=h();return(0,p.jsx)(u,{...e,options:t,defaultValue:[`banana`]})}},_={render:function(e){let t=h();return(0,p.jsx)(u,{...e,options:t,direction:`horizontal`,defaultValue:[`apple`,`cherry`]})}},v=()=>{let{t:e}=i(c),t=h(),[n,r]=(0,f.useState)([`apple`]);return(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[e(`story.checkboxgroup_selected`),`: `,n.join(`, `)]}),(0,p.jsx)(u,{options:t,value:n,onChange:r})]})},y={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,options:[{label:t(`story.checkbox_long_label`),value:`long1`},{label:t(`story.checkbox_long_label`),value:`long2`}],defaultValue:[`long1`]})}},v.__docgenInfo={description:``,methods:[],displayName:`Controlled`},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} defaultValue={["banana"]} />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} direction="horizontal" defaultValue={["apple", "cherry"]} />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`() => {
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Horizontal`,`Controlled`,`LongLabel`]}));x();export{v as Controlled,g as Default,_ as Horizontal,y as LongLabel,b as __namedExportsOrder,m as default,x as n,d as t};