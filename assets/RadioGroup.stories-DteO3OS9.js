import{j as t}from"./jsx-runtime-u17CrQMm.js";import{R as r}from"./RadioGroup-C76Nbwlc.js";import{r as g,A as p}from"./iframe-CvmoyyS_.js";import{u as d}from"./useTranslation-B17dmrqB.js";const b={title:"Components/Selection Controls/RadioGroup",component:r,argTypes:{disabled:{control:"boolean"},direction:{control:{type:"radio"},options:["vertical","horizontal"]}}},c=()=>{const{t:n}=d(p);return[{label:n("story_radio_option1"),value:"opt1"},{label:`${n("story_radio_option1")} 2`,value:"opt2"},{label:`${n("story_radio_option1")} 3`,value:"opt3"}]},a={render:function(e){const o=c();return t.jsx(r,{...e,options:o,name:"default-group",defaultValue:"opt1"})}},s={render:function(e){const o=c();return t.jsx(r,{...e,options:o,direction:"horizontal",name:"horizontal-group",defaultValue:"opt1"})}},l={render:function(e){const{t:o}=d(p);return t.jsx(r,{...e,options:[{label:o("story_radio_option1"),value:"opt1"},{label:`${o("story_radio_option1")} 2 ${o("story_option_disabled")}`,value:"opt2",disabled:!0},{label:`${o("story_radio_option1")} 3`,value:"opt3"}],name:"disabled-option-group",defaultValue:"opt1"})}},i={render:function(){const{t:e}=d(p),o=c(),[m,_]=g.useState("opt1");return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[e("story_radiogroup_selected"),": ",m]}),t.jsx(r,{options:o,value:m,onChange:_,name:"controlled-group"})]})}},u={render:function(e){const{t:o}=d(p);return t.jsx(r,{...e,options:[{label:o("story_radio_long_label"),value:"long1"},{label:o("story_radio_long_label"),value:"long2"}],name:"long-label-group"})}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(ALL_NAMESPACES);
    const options = useDefaultOptions();
    const [value, setValue] = useState("opt1");
    return <div>
        <div style={{
        marginBottom: "1rem"
      }}>
          {t("story_radiogroup_selected")}: {value}
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
      label: t("story_radio_long_label"),
      value: "long1"
    }, {
      label: t("story_radio_long_label"),
      value: "long2"
    }]} name="long-label-group" />;
  }
}`,...u.parameters?.docs?.source}}};const f=["Default","Horizontal","WithDisabledOption","Controlled","LongLabel"],A=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:a,Horizontal:s,LongLabel:u,WithDisabledOption:l,__namedExportsOrder:f,default:b},Symbol.toStringTag,{value:"Module"}));export{i as C,a as D,s as H,A as R,l as W};
