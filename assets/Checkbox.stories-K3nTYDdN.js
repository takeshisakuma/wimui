import{j as n}from"./jsx-runtime-u17CrQMm.js";import{C as c}from"./Checkbox-npdQ0eKI.js";import{r as p}from"./iframe-CxkJglxX.js";import{u as t}from"./useTranslation-0fSK9VPD.js";const g={title:"Components/Selection Controls/Checkbox",component:c,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}}},d={render:function(o){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(c,{...o,label:e("story_checkbox_accept")})}},a={render:function(o){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(c,{...o,label:e("story_checkbox_newsletter"),checked:!0,onChange:()=>{}})}},i={render:function(o){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(c,{...o,label:e("story_checkbox_disabled"),disabled:!0})}},_={render:function(o){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(c,{...o,label:e("story_checkbox_dis_checked"),disabled:!0,checked:!0,onChange:()=>{}})}},l={render:function(o){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(c,{...o,label:e("story_checkbox_indeterminate"),indeterminate:!0,checked:!0,onChange:()=>{}})}},r=()=>{const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[o,e]=p.useState(!1);return n.jsx(c,{label:`${s("story_checkbox_controlled")}: ${s(o?"story_checkbox_on":"story_checkbox_off")}`,checked:o,onChange:m=>e(m.target.checked)})},u={render:function(o){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return n.jsx(c,{...o,label:e("story_checkbox_long_label")})}};r.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_accept")} />;
  }
}`,...d.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_newsletter")} checked={true} onChange={() => {}} // Supress warning
    />;
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_disabled")} disabled={true} />;
  }
}`,...i.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_dis_checked")} disabled={true} checked={true} onChange={() => {}} />;
  }
}`,..._.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_indeterminate")} indeterminate={true} checked={true} // Usually indeterminate implies partially selected
    onChange={() => {}} />;
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
  const [checked, setChecked] = useState(false);
  return <Checkbox label={\`\${t("story_checkbox_controlled")}: \${checked ? t("story_checkbox_on") : t("story_checkbox_off")}\`} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...r.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Checkbox {...args} label={t("story_checkbox_long_label")} />;
  }
}`,...u.parameters?.docs?.source}}};const y=["Default","Checked","Disabled","DisabledChecked","Indeterminate","Controlled","LongLabel"],C=Object.freeze(Object.defineProperty({__proto__:null,Checked:a,Controlled:r,Default:d,Disabled:i,DisabledChecked:_,Indeterminate:l,LongLabel:u,__namedExportsOrder:y,default:g},Symbol.toStringTag,{value:"Module"}));export{C,d as D,l as I,a,i as b,_ as c};
