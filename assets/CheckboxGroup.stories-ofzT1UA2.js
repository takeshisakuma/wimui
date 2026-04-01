import{j as t}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./CheckboxGroup-ChIZ_mCq.js";import{r as m,A as u}from"./iframe-BJM4gxzT.js";import{u as i}from"./useTranslation-lqMBbyXx.js";const b={title:"Components/Selection Controls/CheckboxGroup",component:c,argTypes:{disabled:{control:"boolean"},direction:{control:"radio",options:["vertical","horizontal"]}}},p=()=>{const{t:e}=i(u);return[{label:e("story.fruit_apple"),value:"apple"},{label:e("story.fruit_banana"),value:"banana"},{label:e("story.fruit_cherry"),value:"cherry"},{label:`${e("story.fruit_date")} ${e("story.option_disabled")}`,value:"date",disabled:!0}]},a={render:function(n){const o=p();return t.jsx(c,{...n,options:o,defaultValue:["banana"]})}},s={render:function(n){const o=p();return t.jsx(c,{...n,options:o,direction:"horizontal",defaultValue:["apple","cherry"]})}},r=()=>{const{t:e}=i(u),n=p(),[o,d]=m.useState(["apple"]);return t.jsxs("div",{children:[t.jsxs("div",{style:{marginBottom:"1rem"},children:[e("story.checkboxgroup_selected"),": ",o.join(", ")]}),t.jsx(c,{options:n,value:o,onChange:d})]})},l={render:function(n){const{t:o}=i(u);return t.jsx(c,{...n,options:[{label:o("story.checkbox_long_label"),value:"long1"},{label:o("story.checkbox_long_label"),value:"long2"}],defaultValue:["long1"]})}};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
  return <div>
      <div style={{
      marginBottom: "1rem"
    }}>
        {t("story.checkboxgroup_selected")}: {value.join(", ")}
      </div>
      <CheckboxGroup options={options} value={value} onChange={setValue} />
    </div>;
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const g=["Default","Horizontal","Controlled","LongLabel"],v=Object.freeze(Object.defineProperty({__proto__:null,Controlled:r,Default:a,Horizontal:s,LongLabel:l,__namedExportsOrder:g,default:b},Symbol.toStringTag,{value:"Module"}));export{v as C,a as D,s as H,r as a};
