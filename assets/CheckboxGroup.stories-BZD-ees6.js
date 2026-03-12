import{j as t}from"./jsx-runtime-u17CrQMm.js";import{C as l}from"./CheckboxGroup-Qim2libw.js";import{r as p}from"./iframe-CxkJglxX.js";import{u as i}from"./useTranslation-0fSK9VPD.js";const _={title:"Components/Selection Controls/CheckboxGroup",component:l,argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},d=()=>{const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return[{label:o("story_fruit_apple"),value:"apple"},{label:o("story_fruit_banana"),value:"banana"},{label:o("story_fruit_cherry"),value:"cherry"},{label:`${o("story_fruit_date")} ${o("story_option_disabled")}`,value:"date",disabled:!0}]},r={render:function(s){const e=d();return t.jsx(l,{...s,options:e,defaultValue:["banana"]})}},a={render:function(s){const e=d();return t.jsx(l,{...s,options:e,direction:"horizontal",defaultValue:["apple","cherry"]})}},n=()=>{const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),s=d(),[e,u]=p.useState(["apple"]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[o("story_checkboxgroup_selected"),": ",e.join(", ")]}),t.jsx(l,{options:s,value:e,onChange:u})]})},c={render:function(s){const{t:e}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return t.jsx(l,{...s,options:[{label:e("story_checkbox_long_label"),value:"long1"},{label:e("story_checkbox_long_label"),value:"long2"}],defaultValue:["long1"]})}};n.__docgenInfo={description:"",methods:[],displayName:"Controlled"};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} defaultValue={["banana"]} />;
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} direction="horizontal" defaultValue={["apple", "cherry"]} />;
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
  const options = useOptions();
  const [value, setValue] = useState<string[]>(["apple"]);
  return <div>\r
      <div style={{
      marginBottom: "1rem"
    }}>\r
        {t("story_checkboxgroup_selected")}: {value.join(", ")}\r
      </div>\r
      <CheckboxGroup options={options} value={value} onChange={setValue} />\r
    </div>;
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <CheckboxGroup {...args} options={[{
      label: t("story_checkbox_long_label"),
      value: "long1"
    }, {
      label: t("story_checkbox_long_label"),
      // Reusing similar text
      value: "long2"
    }]} defaultValue={["long1"]} />;
  }
}`,...c.parameters?.docs?.source}}};const m=["Default","Horizontal","Controlled","LongLabel"],f=Object.freeze(Object.defineProperty({__proto__:null,Controlled:n,Default:r,Horizontal:a,LongLabel:c,__namedExportsOrder:m,default:_},Symbol.toStringTag,{value:"Module"}));export{f as C,r as D,a as H,n as a};
