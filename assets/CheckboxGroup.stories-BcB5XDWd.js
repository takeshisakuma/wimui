import{j as t}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./CheckboxGroup-Dkeg-L25.js";import{r as m}from"./iframe-C80AEei6.js";import{A as u}from"./i18nConstants-BpHxieg5.js";import{u as i}from"./useTranslation-Cpo6ITo8.js";const _={title:"Components/Selection Controls/CheckboxGroup",component:c,argTypes:{direction:{control:"radio",options:["vertical","horizontal"]}}},p=()=>{const{t:e}=i(u);return[{label:e("story_fruit_apple"),value:"apple"},{label:e("story_fruit_banana"),value:"banana"},{label:e("story_fruit_cherry"),value:"cherry"},{label:`${e("story_fruit_date")} ${e("story_option_disabled")}`,value:"date",disabled:!0}]},a={render:function(n){const o=p();return t.jsx(c,{...n,options:o,defaultValue:["banana"]})}},s={render:function(n){const o=p();return t.jsx(c,{...n,options:o,direction:"horizontal",defaultValue:["apple","cherry"]})}},r=()=>{const{t:e}=i(u),n=p(),[o,d]=m.useState(["apple"]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[e("story_checkboxgroup_selected"),": ",o.join(", ")]}),t.jsx(c,{options:n,value:o,onChange:d})]})},l={render:function(n){const{t:o}=i(u);return t.jsx(c,{...n,options:[{label:o("story_checkbox_long_label"),value:"long1"},{label:o("story_checkbox_long_label"),value:"long2"}],defaultValue:["long1"]})}};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} defaultValue={["banana"]} />;
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const options = useOptions();
    return <CheckboxGroup {...args} options={options} direction="horizontal" defaultValue={["apple", "cherry"]} />;
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
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
    } = useTranslation(ALL_NAMESPACES);
    return <CheckboxGroup {...args} options={[{
      label: t("story_checkbox_long_label"),
      value: "long1"
    }, {
      label: t("story_checkbox_long_label"),
      // Reusing similar text
      value: "long2"
    }]} defaultValue={["long1"]} />;
  }
}`,...l.parameters?.docs?.source}}};const b=["Default","Horizontal","Controlled","LongLabel"],y=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,Default:a,Horizontal:s,LongLabel:l,__namedExportsOrder:b,default:_},Symbol.toStringTag,{value:"Module"}));export{y as C,a as D,s as H,r as a};
