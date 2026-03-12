import{j as t}from"./jsx-runtime-u17CrQMm.js";import{C as r}from"./Checkbox-_x0Gvank.js";import{r as p}from"./iframe-BisTGuVC.js";import{u as c}from"./useTranslation-BH3LN071.js";const h={title:"Components/Selection Controls/Checkbox",component:r,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}}},a={render:function(e){const{t:o}=c(["docs","common","components"]);return t.jsx(r,{...e,label:o("story_checkbox_accept")})}},d={render:function(e){const{t:o}=c(["docs","common","components"]);return t.jsx(r,{...e,label:o("story_checkbox_newsletter"),checked:!0,onChange:()=>{}})}},l={render:function(e){const{t:o}=c(["docs","common","components"]);return t.jsx(r,{...e,label:o("story_checkbox_disabled"),disabled:!0})}},m={render:function(e){const{t:o}=c(["docs","common","components"]);return t.jsx(r,{...e,label:o("story_checkbox_dis_checked"),disabled:!0,checked:!0,onChange:()=>{}})}},u={render:function(e){const{t:o}=c(["docs","common","components"]);return t.jsx(r,{...e,label:o("story_checkbox_indeterminate"),indeterminate:!0,checked:!0,onChange:()=>{}})}},s=()=>{const{t:n}=c(["docs","common","components"]),[e,o]=p.useState(!1);return t.jsx(r,{label:`${n("story_checkbox_controlled")}: ${n(e?"story_checkbox_on":"story_checkbox_off")}`,checked:e,onChange:b=>o(b.target.checked)})},i={render:function(e){const{t:o}=c(["docs","common","components"]);return t.jsx(r,{...e,label:o("story_checkbox_long_label")})}};s.__docgenInfo={description:"",methods:[],displayName:"Controlled"};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_accept")} />;
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_newsletter")} checked={true} onChange={() => {}} // Supress warning
    />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_disabled")} disabled={true} />;
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_dis_checked")} disabled={true} checked={true} onChange={() => {}} />;
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_indeterminate")} indeterminate={true} checked={true} // Usually indeterminate implies partially selected
    onChange={() => {}} />;
  }
}`,...u.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(["docs", "common", "components"]);
  const [checked, setChecked] = useState(false);
  return <Checkbox label={\`\${t("story_checkbox_controlled")}: \${checked ? t("story_checkbox_on") : t("story_checkbox_off")}\`} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_long_label")} />;
  }
}`,...i.parameters?.docs?.source}}};const k=["Default","Checked","Disabled","DisabledChecked","Indeterminate","Controlled","LongLabel"],f=Object.freeze(Object.defineProperty({__proto__:null,Checked:d,Controlled:s,Default:a,Disabled:l,DisabledChecked:m,Indeterminate:u,LongLabel:i,__namedExportsOrder:k,default:h},Symbol.toStringTag,{value:"Module"}));export{f as C,a as D,u as I,d as a,l as b,m as c};
