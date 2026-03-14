import{j as o}from"./jsx-runtime-u17CrQMm.js";import{C as t}from"./Checkbox-DByNbGhU.js";import{r as m}from"./iframe-BMQvev7V.js";import{A as s}from"./i18nConstants-BpHxieg5.js";import{u as c}from"./useTranslation-XEwyYNrX.js";const k={title:"Components/Selection Controls/Checkbox",component:t,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}}},d={render:function(e){const{t:r}=c(s);return o.jsx(t,{...e,label:r("story_checkbox_accept")})}},l={render:function(e){const{t:r}=c(s);return o.jsx(t,{...e,label:r("story_checkbox_newsletter"),checked:!0,onChange:()=>{}})}},i={render:function(e){const{t:r}=c(s);return o.jsx(t,{...e,label:r("story_checkbox_disabled"),disabled:!0})}},u={render:function(e){const{t:r}=c(s);return o.jsx(t,{...e,label:r("story_checkbox_dis_checked"),disabled:!0,checked:!0,onChange:()=>{}})}},b={render:function(e){const{t:r}=c(s);return o.jsx(t,{...e,label:r("story_checkbox_indeterminate"),indeterminate:!0,checked:!0,onChange:()=>{}})}},a=()=>{const{t:n}=c(s),[e,r]=m.useState(!1);return o.jsx(t,{label:`${n("story_checkbox_controlled")}: ${n(e?"story_checkbox_on":"story_checkbox_off")}`,checked:e,onChange:_=>r(_.target.checked)})},h={render:function(e){const{t:r}=c(s);return o.jsx(t,{...e,label:r("story_checkbox_long_label")})}};a.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story_checkbox_accept")} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story_checkbox_newsletter")} checked={true} onChange={() => {}} // Supress warning
    />;
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story_checkbox_disabled")} disabled={true} />;
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story_checkbox_dis_checked")} disabled={true} checked={true} onChange={() => {}} />;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story_checkbox_indeterminate")} indeterminate={true} checked={true} // Usually indeterminate implies partially selected
    onChange={() => {}} />;
  }
}`,...b.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [checked, setChecked] = useState(false);
  return <Checkbox label={\`\${t("story_checkbox_controlled")}: \${checked ? t("story_checkbox_on") : t("story_checkbox_off")}\`} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...a.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story_checkbox_long_label")} />;
  }
}`,...h.parameters?.docs?.source}}};const p=["Default","Checked","Disabled","DisabledChecked","Indeterminate","Controlled","LongLabel"],A=Object.freeze(Object.defineProperty({__proto__:null,Checked:l,Controlled:a,Default:d,Disabled:i,DisabledChecked:u,Indeterminate:b,LongLabel:h,__namedExportsOrder:p,default:k},Symbol.toStringTag,{value:"Module"}));export{A as C,d as D,b as I,l as a,i as b,u as c};
