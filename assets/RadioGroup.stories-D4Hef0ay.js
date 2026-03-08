import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as r}from"./RadioGroup-CN3sMebQ.js";import{r as g}from"./iframe-B7UVZHXg.js";import{u as p}from"./useTranslation-CQiqGYf8.js";const _={title:"Components/Selection Controls/RadioGroup",component:r,argTypes:{direction:{control:{type:"radio"},options:["vertical","horizontal"]}}},d=()=>{const{t:n}=p(["docs","common","components"]);return[{label:n("story_radio_option1"),value:"opt1"},{label:`${n("story_radio_option1")} 2`,value:"opt2"},{label:`${n("story_radio_option1")} 3`,value:"opt3"}]},a={render:function(e){const o=d();return t.jsx(r,{...e,options:o,name:"default-group",defaultValue:"opt1"})}},s={render:function(e){const o=d();return t.jsx(r,{...e,options:o,direction:"horizontal",name:"horizontal-group",defaultValue:"opt1"})}},l={render:function(e){const{t:o}=p(["docs","common","components"]);return t.jsx(r,{...e,options:[{label:o("story_radio_option1"),value:"opt1"},{label:`${o("story_radio_option1")} 2 ${o("story_option_disabled")}`,value:"opt2",disabled:!0},{label:`${o("story_radio_option1")} 3`,value:"opt3"}],name:"disabled-option-group",defaultValue:"opt1"})}},i={render:function(){const{t:e}=p(["docs","common","components"]),o=d(),[c,m]=g.useState("opt1");return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[e("story_radiogroup_selected"),": ",c]}),t.jsx(r,{options:o,value:c,onChange:m,name:"controlled-group"})]})}},u={render:function(e){const{t:o}=p(["docs","common","components"]);return t.jsx(r,{...e,options:[{label:o("story_radio_long_label"),value:"long1"},{label:o("story_radio_long_label"),value:"long2"}],name:"long-label-group"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} name="default-group" defaultValue="opt1" />;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} direction="horizontal" name="horizontal-group" defaultValue="opt1" />;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <RadioGroup {...args} options={[{
      label: t("story_radio_option1"),
      value: "opt1"
    }, {
      label: \`\${t("story_radio_option1")} 2 \${t("story_option_disabled")}\`,
      value: "opt2",
      disabled: true
    }, {
      label: \`\${t("story_radio_option1")} 3\`,
      value: "opt3"
    }]} name="disabled-option-group" defaultValue="opt1" />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const options = useDefaultOptions();
    const [value, setValue] = useState("opt1");
    return <div>\r
        <div style={{
        marginBottom: "1rem"
      }}>\r
          {t("story_radiogroup_selected")}: {value}\r
        </div>\r
        <RadioGroup options={options} value={value} onChange={setValue} name="controlled-group" />\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <RadioGroup {...args} options={[{
      label: t("story_radio_long_label"),
      value: "long1"
    }, {
      label: t("story_radio_long_label"),
      value: "long2"
    }]} name="long-label-group" />;
  }
}`,...u.parameters?.docs?.source}}};const b=["Default","Horizontal","WithDisabledOption","Controlled","LongLabel"],x=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:a,Horizontal:s,LongLabel:u,WithDisabledOption:l,__namedExportsOrder:b,default:_},Symbol.toStringTag,{value:"Module"}));export{i as C,a as D,s as H,x as R,l as W};
