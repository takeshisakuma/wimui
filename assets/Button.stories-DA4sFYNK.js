import{j as b}from"./jsx-runtime-u17CrQMm.js";import{r as B}from"./iframe-dDvr7adw.js";import{B as m}from"./Button-DIuiqV7e.js";const{fn:C}=__STORYBOOK_MODULE_TEST__,S={title:"Component/Buttons/Button",component:m,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"},state:{description:"⚠️ 非推奨: 代わりに標準の `disabled` prop を使用してください。",control:"select",options:["abled","disabled"]}},args:{onClick:C()}},t={args:{size:"large",label:"button_label",priority:"primary"}},o={args:{size:"medium",label:"button_label",priority:"secondary"}},a={args:{size:"small",label:"button_label",priority:"tertiary"}},i={args:{size:"small",label:"button_label",priority:"tertiary",role:"destructive",iconName:"CircleIcon",iconPosition:"left"}},s={args:{size:"medium",label:"button_label",priority:"primary",disabled:!0}},l={args:{size:"medium",priority:"primary",label:"processing",loading:!0}},c={args:{size:"medium",priority:"secondary",label:"saving",loading:!0}},d={render:e=>{const[p,n]=B.useState(!1),g=y=>{e.onClick&&e.onClick(y),n(!0),setTimeout(()=>{n(!1)},2e3)};return b.jsx(m,{...e,loading:p,onClick:g})},args:{size:"medium",priority:"primary",label:"button_label"}},u={render:e=>{const[p,n]=B.useState(!1),g=y=>{e.onClick&&e.onClick(y),n(!0),setTimeout(()=>{n(!1)},2e3)};return b.jsx(m,{...e,loading:p,onClick:g})},args:{size:"medium",priority:"secondary",label:"button_label",iconName:"CircleIcon",iconPosition:"left"}},r={render:()=>b.jsx(m,{priority:"primary",size:"medium",children:"Click me"})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "button_label",
    priority: "primary"
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary"
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    role: "destructive",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "button_label",
    priority: "primary",
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <Button {...args} loading={loading} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    label: "button_label"
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <Button {...args} loading={loading} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "secondary",
    label: "button_label",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...u.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Button priority="primary" size="medium">\r
      Click me\r
    </Button>
}`,...r.parameters?.docs?.source},description:{story:"children を使ったボタン（label prop の代替）",...r.parameters?.docs?.description}}};const _=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","DisabledButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton","WithChildren"],L=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:s,LargePrimaryButton:t,MediumPrimaryInteractiveLoadingButton:d,MediumPrimaryLoadingProcessingButton:l,MediumSecondaryButton:o,MediumSecondaryInteractiveLoadingWithIconButton:u,MediumSecondaryLoadingSavingButton:c,SmallTertiaryButton:a,SmallTertiaryDestructiveWithCircleIconButton:i,WithChildren:r,__namedExportsOrder:_,default:S},Symbol.toStringTag,{value:"Module"}));export{L as B};
