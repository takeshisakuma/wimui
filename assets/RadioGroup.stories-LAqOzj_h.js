import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as r}from"./RadioGroup-C6FrKgMu.js";import{r as b,A as p}from"./iframe-00CRNq2O.js";import{u as d}from"./useTranslation-BYdSjFhs.js";const f={title:"Components/Selection Controls/RadioGroup",component:r,argTypes:{disabled:{control:"boolean"},direction:{control:"radio",options:["vertical","horizontal"]}}},c=()=>{const{t:n}=d(p);return[{label:n("story.radio_option1"),value:"opt1"},{label:`${n("story.radio_option1")} 2`,value:"opt2"},{label:`${n("story.radio_option1")} 3`,value:"opt3"}]},a={render:function(e){const o=c();return t.jsx(r,{...e,options:o,name:"default-group",defaultValue:"opt1"})}},s={render:function(e){const o=c();return t.jsx(r,{...e,options:o,direction:"horizontal",name:"horizontal-group",defaultValue:"opt1"})}},l={render:function(e){const{t:o}=d(p);return t.jsx(r,{...e,options:[{label:o("story.radio_option1"),value:"opt1"},{label:`${o("story.radio_option1")} 2 ${o("story.option_disabled")}`,value:"opt2",disabled:!0},{label:`${o("story.radio_option1")} 3`,value:"opt3"}],name:"disabled-option-group",defaultValue:"opt1"})}},i={render:function(){const{t:e}=d(p),o=c(),[m,g]=b.useState("opt1");return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[e("story.radiogroup_selected"),": ",m]}),t.jsx(r,{options:o,value:m,onChange:g,name:"controlled-group"})]})}},u={render:function(e){const{t:o}=d(p);return t.jsx(r,{...e,options:[{label:o("story.radio_long_label"),value:"long1"},{label:o("story.radio_long_label"),value:"long2"}],name:"long-label-group"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const _=["Default","Horizontal","WithDisabledOption","Controlled","LongLabel"],A=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:a,Horizontal:s,LongLabel:u,WithDisabledOption:l,__namedExportsOrder:_,default:f},Symbol.toStringTag,{value:"Module"}));export{i as C,a as D,s as H,A as R,l as W};
