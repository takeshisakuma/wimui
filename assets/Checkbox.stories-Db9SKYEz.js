import{j as t}from"./jsx-runtime-u17CrQMm.js";import{C as o}from"./Checkbox-TdzK-ePK.js";import{r as k,A as s}from"./iframe-BIyQwIaN.js";import{u as a}from"./useTranslation-C6_B5Ynz.js";const m={title:"Components/Selection Controls/Checkbox",component:o,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}}},d={render:function(e){const{t:r}=a(s);return t.jsx(o,{...e,label:r("story.checkbox_accept")})}},l={render:function(e){const{t:r}=a(s);return t.jsx(o,{...e,label:r("story.checkbox_newsletter"),onChange:e.onChange??(()=>{})})},args:{checked:!0}},u={render:function(e){const{t:r}=a(s);return t.jsx(o,{...e,label:r("story.checkbox_disabled")})},args:{disabled:!0}},i={render:function(e){const{t:r}=a(s);return t.jsx(o,{...e,label:r("story.checkbox_dis_checked"),onChange:e.onChange??(()=>{})})},args:{disabled:!0,checked:!0}},h={render:function(e){const{t:r}=a(s);return t.jsx(o,{...e,label:r("story.checkbox_indeterminate"),onChange:e.onChange??(()=>{})})},args:{indeterminate:!0,checked:!0}},c=()=>{const{t:n}=a(s),[e,r]=k.useState(!1);return t.jsx(o,{label:`${n("story.checkbox_controlled")}: ${n(e?"story.checkbox_on":"story.checkbox_off")}`,checked:e,onChange:g=>r(g.target.checked)})},b={render:function(e){const{t:r}=a(s);return t.jsx(o,{...e,label:r("story.checkbox_long_label")})}};c.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story.checkbox_accept")} />;
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story.checkbox_newsletter")} onChange={args.onChange ?? (() => {})} />;
  },
  args: {
    checked: true
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story.checkbox_disabled")} />;
  },
  args: {
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story.checkbox_dis_checked")} onChange={args.onChange ?? (() => {})} />;
  },
  args: {
    disabled: true,
    checked: true
  }
}`,...i.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story.checkbox_indeterminate")} onChange={args.onChange ?? (() => {})} />;
  },
  args: {
    indeterminate: true,
    checked: true
  }
}`,...h.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [checked, setChecked] = useState(false);
  return <Checkbox label={\`\${t("story.checkbox_controlled")}: \${checked ? t("story.checkbox_on") : t("story.checkbox_off")}\`} checked={checked} onChange={e => setChecked(e.target.checked)} />;
}`,...c.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} label={t("story.checkbox_long_label")} />;
  }
}`,...b.parameters?.docs?.source}}};const C=["Default","Checked","Disabled","DisabledChecked","Indeterminate","Controlled","LongLabel"],f=Object.freeze(Object.defineProperty({__proto__:null,Checked:l,Controlled:c,Default:d,Disabled:u,DisabledChecked:i,Indeterminate:h,LongLabel:b,__namedExportsOrder:C,default:m},Symbol.toStringTag,{value:"Module"}));export{f as C,u as D,h as I,l as a,i as b};
