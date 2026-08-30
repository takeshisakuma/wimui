"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-splidnB2.js";import{Er as l,t as u}from"./src-CV0le6yM.js";var d=e({Controlled:()=>y,Default:()=>g,Horizontal:()=>_,LongLabel:()=>b,WithDisabledOption:()=>v,__namedExportsOrder:()=>x,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S=t((()=>{f=n(r(),1),s(),a(),u(),p=o(),m={title:`Components/Selection Controls/RadioGroup`,component:l,argTypes:{disabled:{control:`boolean`},direction:{control:`radio`,options:[`vertical`,`horizontal`]}}},h=()=>{let{t:e}=i(c);return[{label:e(`story.radio_option1`),value:`opt1`},{label:`${e(`story.radio_option1`)} 2`,value:`opt2`},{label:`${e(`story.radio_option1`)} 3`,value:`opt3`}]},g={render:function(e){let t=h();return(0,p.jsx)(l,{...e,options:t,name:`default-group`,defaultValue:`opt1`})}},_={render:function(e){let t=h();return(0,p.jsx)(l,{...e,options:t,direction:`horizontal`,name:`horizontal-group`,defaultValue:`opt1`})}},v={render:function(e){let{t}=i(c);return(0,p.jsx)(l,{...e,options:[{label:t(`story.radio_option1`),value:`opt1`},{label:`${t(`story.radio_option1`)} 2 ${t(`story.option_disabled`)}`,value:`opt2`,disabled:!0},{label:`${t(`story.radio_option1`)} 3`,value:`opt3`}],name:`disabled-option-group`,defaultValue:`opt1`})}},y={render:function(){let{t:e}=i(c),t=h(),[n,r]=(0,f.useState)(`opt1`);return(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[e(`story.radiogroup_selected`),`: `,n]}),(0,p.jsx)(l,{options:t,value:n,onChange:r,name:`controlled-group`})]})}},b={render:function(e){let{t}=i(c);return(0,p.jsx)(l,{...e,options:[{label:t(`story.radio_long_label`),value:`long1`},{label:t(`story.radio_long_label`),value:`long2`}],name:`long-label-group`})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} name="default-group" defaultValue="opt1" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} direction="horizontal" name="horizontal-group" defaultValue="opt1" />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RadioGroup {...args} options={[{
      label: t("story.radio_option1"),
      value: "opt1"
    }, {
      label: \`\${t("story.radio_option1")} 2 \${t("story.option_disabled")}\`,
      value: "opt2",
      disabled: true
    }, {
      label: \`\${t("story.radio_option1")} 3\`,
      value: "opt3"
    }]} name="disabled-option-group" defaultValue="opt1" />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = useDefaultOptions();
    const [value, setValue] = useState("opt1");
    return <div>
        <div style={{
        marginBottom: "1rem"
      }}>
          {t("story.radiogroup_selected")}: {value}
        </div>
        <RadioGroup options={options} value={value} onChange={setValue} name="controlled-group" />
      </div>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RadioGroup {...args} options={[{
      label: t("story.radio_long_label"),
      value: "long1"
    }, {
      label: t("story.radio_long_label"),
      value: "long2"
    }]} name="long-label-group" />;
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`Horizontal`,`WithDisabledOption`,`Controlled`,`LongLabel`]}));S();export{y as Controlled,g as Default,_ as Horizontal,b as LongLabel,v as WithDisabledOption,x as __namedExportsOrder,m as default,S as n,d as t};