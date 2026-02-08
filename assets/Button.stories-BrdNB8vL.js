import{j as y}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-CQ0Ubeji.js";import{B as p}from"./Button-Dh_X0-gQ.js";const{fn:_}=__STORYBOOK_MODULE_TEST__,B={title:"Component/Buttons & Actions/Button",component:p,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:_()}},a={args:{size:"large",label:"button_label",priority:"primary",state:"abled"}},r={args:{size:"medium",label:"button_label",priority:"secondary",state:"abled"}},n={args:{size:"small",label:"button_label",priority:"tertiary",state:"abled"}},o={args:{size:"small",label:"button_label",priority:"tertiary",role:"destructive",state:"abled",iconName:"CircleIcon",iconPosition:"left"}},s={args:{size:"medium",priority:"primary",label:"processing",loading:!0}},i={args:{size:"medium",priority:"secondary",label:"saving",loading:!0}},l={render:e=>{const[d,t]=u.useState(!1),[m,S]=u.useState(e.label||"button_label"),b=g=>{e.onClick&&e.onClick(g),t(!0),setTimeout(()=>{t(!1)},2e3)};return y.jsx(p,{...e,loading:d,label:m,onClick:b})},args:{size:"medium",priority:"primary",label:"button_label"}},c={render:e=>{const[d,t]=u.useState(!1),[m,S]=u.useState(e.label||"button_label"),b=g=>{e.onClick&&e.onClick(g),t(!0),setTimeout(()=>{t(!1)},2e3)};return y.jsx(p,{...e,loading:d,label:m,onClick:b})},args:{size:"medium",priority:"secondary",label:"button_label",iconName:"CircleIcon",iconPosition:"left"}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "button_label",
    priority: "primary",
    state: "abled"
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary",
    state: "abled"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    state: "abled"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    role: "destructive",
    state: "abled",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState(args.label || "button_label");
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <Button {...args} loading={loading} label={label} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    label: "button_label"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [loading, setLoading] = useState(false);
    const [label, setLabel] = useState(args.label || "button_label");
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <Button {...args} loading={loading} label={label} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "secondary",
    label: "button_label",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...c.parameters?.docs?.source}}};const C=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton"],z=Object.freeze(Object.defineProperty({__proto__:null,LargePrimaryButton:a,MediumPrimaryInteractiveLoadingButton:l,MediumPrimaryLoadingProcessingButton:s,MediumSecondaryButton:r,MediumSecondaryInteractiveLoadingWithIconButton:c,MediumSecondaryLoadingSavingButton:i,SmallTertiaryButton:n,SmallTertiaryDestructiveWithCircleIconButton:o,__namedExportsOrder:C,default:B},Symbol.toStringTag,{value:"Module"}));export{z as B};
