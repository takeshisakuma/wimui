import{j as t}from"./jsx-runtime-u17CrQMm.js";import{C as o}from"./Checkbox-DfQI-rk_.js";import{r as C,A as c}from"./iframe-DxE0GiY5.js";import{u as s}from"./useTranslation-CHwI6HGF.js";const g={title:"Components/Selection Controls/Checkbox",component:o,argTypes:{checked:{control:"boolean"},disabled:{control:"boolean"},indeterminate:{control:"boolean"},label:{control:"text"}}},d={render:function(e){const{t:n}=s(c);return t.jsx(o,{...e,children:n("story.checkbox_accept")})}},h={render:function(e){const{t:n}=s(c);return t.jsx(o,{...e,onChange:e.onChange??(()=>{}),children:n("story.checkbox_newsletter")})},args:{checked:!0}},i={render:function(e){const{t:n}=s(c);return t.jsx(o,{...e,children:n("story.checkbox_disabled")})},args:{disabled:!0}},u={render:function(e){const{t:n}=s(c);return t.jsx(o,{...e,onChange:e.onChange??(()=>{}),children:n("story.checkbox_dis_checked")})},args:{disabled:!0,checked:!0}},l={render:function(e){const{t:n}=s(c);return t.jsx(o,{...e,onChange:e.onChange??(()=>{}),children:n("story.checkbox_indeterminate")})},args:{indeterminate:!0,checked:!0}},a=()=>{const{t:r}=s(c),[e,n]=C.useState(!1);return t.jsx(o,{checked:e,onChange:k=>n(k.target.checked),children:`${r("story.checkbox_controlled")}: ${r(e?"story.checkbox_on":"story.checkbox_off")}`})},b={render:function(e){const{t:n}=s(c);return t.jsx(o,{...e,children:n("story.checkbox_long_label")})}};a.__docgenInfo={description:"",methods:[],displayName:"Controlled"};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args}>{t("story.checkbox_accept")}</Checkbox>;
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} onChange={args.onChange ?? (() => {})}>
        {t("story.checkbox_newsletter")}
      </Checkbox>;
  },
  args: {
    checked: true
  }
}`,...h.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args}>{t("story.checkbox_disabled")}</Checkbox>;
  },
  args: {
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} onChange={args.onChange ?? (() => {})}>
        {t("story.checkbox_dis_checked")}
      </Checkbox>;
  },
  args: {
    disabled: true,
    checked: true
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args} onChange={args.onChange ?? (() => {})}>
        {t("story.checkbox_indeterminate")}
      </Checkbox>;
  },
  args: {
    indeterminate: true,
    checked: true
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => {
  const {
    t
  } = useTranslation(ALL_NAMESPACES);
  const [checked, setChecked] = useState(false);
  return <Checkbox checked={checked} onChange={e => setChecked(e.target.checked)}>
      {\`\${t("story.checkbox_controlled")}: \${checked ? t("story.checkbox_on") : t("story.checkbox_off")}\`}
    </Checkbox>;
}`,...a.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Checkbox {...args}>{t("story.checkbox_long_label")}</Checkbox>;
  }
}`,...b.parameters?.docs?.source}}};const m=["Default","Checked","Disabled","DisabledChecked","Indeterminate","Controlled","LongLabel"],f=Object.freeze(Object.defineProperty({__proto__:null,Checked:h,Controlled:a,Default:d,Disabled:i,DisabledChecked:u,Indeterminate:l,LongLabel:b,__namedExportsOrder:m,default:g},Symbol.toStringTag,{value:"Module"}));export{f as C,i as D,l as I,h as a,u as b};
