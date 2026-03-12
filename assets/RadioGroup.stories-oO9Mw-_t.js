import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as t}from"./RadioGroup-DJFDpVfo.js";import{r as m}from"./iframe-DmIcUQyH.js";import{u as l}from"./useTranslation-CTezHt8M.js";const g={title:"Components/Selection Controls/RadioGroup",component:t,argTypes:{direction:{control:{type:"radio"},options:["vertical","horizontal"]}}},u=()=>{const{t:s}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return[{label:s("story_radio_option1"),value:"opt1"},{label:`${s("story_radio_option1")} 2`,value:"opt2"},{label:`${s("story_radio_option1")} 3`,value:"opt3"}]},r={render:function(n){const o=u();return e.jsx(t,{...n,options:o,name:"default-group",defaultValue:"opt1"})}},a={render:function(n){const o=u();return e.jsx(t,{...n,options:o,direction:"horizontal",name:"horizontal-group",defaultValue:"opt1"})}},d={render:function(n){const{t:o}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(t,{...n,options:[{label:o("story_radio_option1"),value:"opt1"},{label:`${o("story_radio_option1")} 2 ${o("story_option_disabled")}`,value:"opt2",disabled:!0},{label:`${o("story_radio_option1")} 3`,value:"opt3"}],name:"disabled-option-group",defaultValue:"opt1"})}},i={render:function(){const{t:n}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),o=u(),[p,_]=m.useState("opt1");return e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"1rem"},children:[n("story_radiogroup_selected"),": ",p]}),e.jsx(t,{options:o,value:p,onChange:_,name:"controlled-group"})]})}},c={render:function(n){const{t:o}=l(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(t,{...n,options:[{label:o("story_radio_long_label"),value:"long1"},{label:o("story_radio_long_label"),value:"long2"}],name:"long-label-group"})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} name="default-group" defaultValue="opt1" />;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useDefaultOptions();
    return <RadioGroup {...args} options={options} direction="horizontal" name="horizontal-group" defaultValue="opt1" />;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <RadioGroup {...args} options={[{
      label: t("story_radio_long_label"),
      value: "long1"
    }, {
      label: t("story_radio_long_label"),
      value: "long2"
    }]} name="long-label-group" />;
  }
}`,...c.parameters?.docs?.source}}};const y=["Default","Horizontal","WithDisabledOption","Controlled","LongLabel"],x=Object.freeze(Object.defineProperty({__proto__:null,Controlled:i,Default:r,Horizontal:a,LongLabel:c,WithDisabledOption:d,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{i as C,r as D,a as H,x as R,d as W};
