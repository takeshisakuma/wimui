"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,Sr as a,Tr as o,ur as s,xr as c}from"./iframe-wf1-Tomv.js";import{Er as l,t as u}from"./src--JUR9phw.js";var d=e({Controlled:()=>y,Default:()=>g,Horizontal:()=>_,LongLabel:()=>b,WithDisabledOption:()=>v,__namedExportsOrder:()=>x,default:()=>m}),f,p,m,h,g,_,v,y,b,x,S=t((()=>{f=n(r(),1),i(),a(),u(),p=s(),m={title:`Components/Selection Controls/RadioGroup`,component:l,argTypes:{disabled:{control:`boolean`},direction:{control:`radio`,options:[`vertical`,`horizontal`]}}},h=()=>{let{t:e}=o(c);return[{label:e(`story.radio_ship_standard`),value:`standard`},{label:e(`story.radio_ship_express`),value:`express`},{label:e(`story.radio_ship_pickup`),value:`pickup`}]},g={render:function(e){let t=h();return(0,p.jsx)(l,{...e,options:t,name:`default-group`,defaultValue:`standard`})}},_={render:function(e){let t=h();return(0,p.jsx)(l,{...e,options:t,direction:`horizontal`,name:`horizontal-group`,defaultValue:`standard`})}},v={render:function(e){let{t}=o(c);return(0,p.jsx)(l,{...e,options:[{label:t(`story.radio_ship_standard`),value:`standard`},{label:t(`story.radio_ship_express`),value:`express`},{label:`${t(`story.radio_ship_pickup`)} ${t(`story.option_disabled`)}`,value:`pickup`,disabled:!0}],name:`disabled-option-group`,defaultValue:`standard`})}},y={render:function(){let{t:e}=o(c),t=h(),[n,r]=(0,f.useState)(`standard`);return(0,p.jsxs)(`div`,{children:[(0,p.jsxs)(`div`,{style:{marginBottom:`1rem`},children:[e(`story.radiogroup_selected`),`: `,n]}),(0,p.jsx)(l,{options:t,value:n,onChange:r,name:`controlled-group`})]})}},b={render:function(e){let{t}=o(c);return(0,p.jsx)(l,{...e,options:[{label:t(`story.radio_long_label`),value:`long1`},{label:t(`story.radio_long_label`),value:`long2`}],name:`long-label-group`})}},x=[`Default`,`Horizontal`,`WithDisabledOption`,`Controlled`,`LongLabel`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} name="default-group" defaultValue="standard" />;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} direction="horizontal" name="horizontal-group" defaultValue="standard" />;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <RadioGroup {...args} options={[{
      label: t("story.radio_ship_standard"),
      value: "standard"
    }, {
      label: t("story.radio_ship_express"),
      value: "express"
    }, {
      // 受け取り店舗が選べない、は無効状態の理由として実在する。
      label: \`\${t("story.radio_ship_pickup")} \${t("story.option_disabled")}\`,
      value: "pickup",
      disabled: true
    }]} name="disabled-option-group" defaultValue="standard" />;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const options = useDefaultOptions();
    const [value, setValue] = useState("standard");
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
}`,...b.parameters?.docs?.source}}}}));S();export{y as Controlled,g as Default,_ as Horizontal,b as LongLabel,v as WithDisabledOption,x as __namedExportsOrder,m as default,S as n,d as t};