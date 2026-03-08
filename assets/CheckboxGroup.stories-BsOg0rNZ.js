import{j as t}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./CheckboxGroup-gMp9_zI9.js";import{r as d}from"./iframe-c-ynOOH6.js";import{u}from"./useTranslation-BS4yh-5V.js";const m={title:"Components/Selection Controls/CheckboxGroup",component:c,argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},i=()=>{const{t:o}=u(["docs","common","components"]);return[{label:o("story_fruit_apple"),value:"apple"},{label:o("story_fruit_banana"),value:"banana"},{label:o("story_fruit_cherry"),value:"cherry"},{label:`${o("story_fruit_date")} ${o("story_option_disabled")}`,value:"date",disabled:!0}]},s={render:function(n){const e=i();return t.jsx(c,{...n,options:e,defaultValue:["banana"]})}},a={render:function(n){const e=i();return t.jsx(c,{...n,options:e,direction:"horizontal",defaultValue:["apple","cherry"]})}},r=()=>{const{t:o}=u(["docs","common","components"]),n=i(),[e,p]=d.useState(["apple"]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[o("story_checkboxgroup_selected"),": ",e.join(", ")]}),t.jsx(c,{options:n,value:e,onChange:p})]})},l={render:function(n){const{t:e}=u(["docs","common","components"]);return t.jsx(c,{...n,options:[{label:e("story_checkbox_long_label"),value:"long1"},{label:e("story_checkbox_long_label"),value:"long2"}],defaultValue:["long1"]})}};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} defaultValue={["banana"]} />;
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} direction="horizontal" defaultValue={["apple", "cherry"]} />;
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(["docs", "common", "components"]);
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <CheckboxGroup {...args} options={[{
      label: t("story_checkbox_long_label"),
      value: "long1"
    }, {
      label: t("story_checkbox_long_label"),
      // Reusing similar text
      value: "long2"
    }]} defaultValue={["long1"]} />;
  }
}`,...l.parameters?.docs?.source}}};const b=["Default","Horizontal","Controlled","LongLabel"],x=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,Default:s,Horizontal:a,LongLabel:l,__namedExportsOrder:b,default:m},Symbol.toStringTag,{value:"Module"}));export{x as C,s as D,a as H,r as a};
