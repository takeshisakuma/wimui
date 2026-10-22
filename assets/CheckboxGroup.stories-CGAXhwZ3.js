"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-MNZnjzfn.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./CheckboxGroup-D02_acK5.js";var d=n({Controlled:()=>v,Default:()=>g,Horizontal:()=>_,LongLabel:()=>y,__namedExportsOrder:()=>b,default:()=>m}),f,p,m,h,g,_,v,y,b;function x(){return(x=t((()=>{f=e(r(),1),a(),o(),l(),p=c(),m={title:`Components/Selection Controls/CheckboxGroup`,component:u,argTypes:{disabled:{control:`boolean`},direction:{control:`radio`,options:[`vertical`,`horizontal`]}}},h=()=>{let{t:e}=i(s);return[{label:e(`story.fruit_apple`),value:`apple`},{label:e(`story.fruit_banana`),value:`banana`},{label:e(`story.fruit_cherry`),value:`cherry`},{label:`${e(`story.fruit_date`)} ${e(`story.option_disabled`)}`,value:`date`,disabled:!0}]},g={render:function(e){let t=h();return(0,p.jsx)(u,{...e,options:t,defaultValue:[`banana`]})}},_={render:function(e){let t=h();return(0,p.jsx)(u,{...e,options:t,direction:`horizontal`,defaultValue:[`apple`,`cherry`]})}},v=()=>{let{t:e}=i(s),t=h(),[n,r]=(0,f.useState)([`apple`]);return(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[e(`story.checkboxgroup_selected`),`: `,n.join(`, `)]}),(0,p.jsx)(u,{options:t,value:n,onChange:r})]})},y={render:function(e){let{t}=i(s);return(0,p.jsx)(u,{...e,options:[{label:t(`story.checkbox_long_label`),value:`long1`},{label:t(`story.checkbox_long_label`),value:`long2`}],defaultValue:[`long1`]})}},v.__docgenInfo={description:``,methods:[],displayName:`Controlled`},b=[`Default`,`Horizontal`,`Controlled`,`LongLabel`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}}})))()}export{x as i,v as n,_ as r,d as t};