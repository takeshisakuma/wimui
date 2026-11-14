"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-DbPgW6Wr.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./CheckboxGroup-NJ51EBaS.js";var d=n({Cards:()=>b,Controlled:()=>v,Default:()=>g,Horizontal:()=>_,LongLabel:()=>y,__namedExportsOrder:()=>x,default:()=>m}),f,p,m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{f=e(r(),1),a(),o(),l(),p=c(),m={title:`Components/Selection Controls/CheckboxGroup`,component:u,argTypes:{disabled:{control:`boolean`},direction:{control:`radio`,options:[`vertical`,`horizontal`]}}},h=()=>{let{t:e}=i(s);return[{label:e(`story.fruit_apple`),value:`apple`},{label:e(`story.fruit_banana`),value:`banana`},{label:e(`story.fruit_cherry`),value:`cherry`},{label:`${e(`story.fruit_date`)} ${e(`story.option_disabled`)}`,value:`date`,disabled:!0}]},g={render:function(e){let t=h();return(0,p.jsx)(u,{...e,options:t,defaultValue:[`banana`]})}},_={render:function(e){let t=h();return(0,p.jsx)(u,{...e,options:t,direction:`horizontal`,defaultValue:[`apple`,`cherry`]})}},v=()=>{let{t:e}=i(s),t=h(),[n,r]=(0,f.useState)([`apple`]);return(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[e(`story.checkboxgroup_selected`),`: `,n.join(`, `)]}),(0,p.jsx)(u,{options:t,value:n,onChange:r})]})},y={render:function(e){let{t}=i(s);return(0,p.jsx)(u,{...e,options:[{label:t(`story.checkbox_long_label`),value:`long1`},{label:t(`story.checkbox_long_label`),value:`long2`}],defaultValue:[`long1`]})}},b={render:function(e){let{t}=i(s);return(0,p.jsx)(u,{...e,variant:`card`,name:`extras`,label:t(`story.checkbox_card_label`),defaultValue:[`door`],options:[{label:t(`story.checkbox_card_wrap`),value:`wrap`,description:t(`story.checkbox_card_wrap_desc`)},{label:t(`story.checkbox_card_door`),value:`door`},{label:t(`story.checkbox_card_receipt`),value:`receipt`,description:t(`story.checkbox_card_receipt_desc`)}]})}},v.__docgenInfo={description:``,methods:[],displayName:`Controlled`},x=[`Default`,`Horizontal`,`Controlled`,`LongLabel`,`Cards`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <CheckboxGroup {...args} variant="card" name="extras" label={t("story.checkbox_card_label")} defaultValue={["door"]} options={[{
      label: t("story.checkbox_card_wrap"),
      value: "wrap",
      description: t("story.checkbox_card_wrap_desc")
    }, {
      label: t("story.checkbox_card_door"),
      value: "door"
    }, {
      label: t("story.checkbox_card_receipt"),
      value: "receipt",
      description: t("story.checkbox_card_receipt_desc")
    }]} />;
  }
}`,...b.parameters?.docs?.source},description:{story:`カードで選ぶ（T365）。説明の無い選択肢も混ぜている（説明は必要な選択肢にだけ付ける）。`,...b.parameters?.docs?.description}}}})))()}export{S as a,_ as i,d as n,v as r,b as t};