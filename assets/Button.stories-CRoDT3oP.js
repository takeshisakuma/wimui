import{j as y}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-Dja6ld6l.js";import{B as p}from"./Button-C_GQ0Y6v.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,k={title:"Component/Buttons & Actions/Button",component:p,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:S(),"aria-label":void 0}},n={args:{size:"large",label:"button_label",priority:"primary",state:"abled","aria-label":!1}},r={args:{size:"medium",label:"button_label",priority:"secondary",state:"abled","aria-label":!1}},t={args:{size:"small",label:"button_label",priority:"tertiary",state:"abled","aria-label":!1}},o={args:{size:"small",label:"button_label",priority:"tertiary",role:"destructive",state:"abled",iconName:"CircleIcon",iconPosition:"left","aria-label":!1}},s={args:{size:"medium",priority:"primary",label:"processing",loading:!0,"aria-label":!1}},l={args:{size:"medium",priority:"secondary",label:"saving",loading:!0,"aria-label":!1}},i={render:e=>{const[d,a]=u.useState(!1),[m,f]=u.useState(e.label||"button_label"),b=g=>{e.onClick&&e.onClick(g),a(!0),setTimeout(()=>{a(!1)},2e3)};return y.jsx(p,{...e,loading:d,label:m,onClick:b})},args:{size:"medium",priority:"primary",label:"button_label","aria-label":!1}},c={render:e=>{const[d,a]=u.useState(!1),[m,f]=u.useState(e.label||"button_label"),b=g=>{e.onClick&&e.onClick(g),a(!0),setTimeout(()=>{a(!1)},2e3)};return y.jsx(p,{...e,loading:d,label:m,onClick:b})},args:{size:"medium",priority:"secondary",label:"button_label",iconName:"CircleIcon",iconPosition:"left","aria-label":!1}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "button_label",
    priority: "primary",
    state: "abled",
    "aria-label": false as unknown as string
  }
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary",
    state: "abled",
    "aria-label": false as unknown as string
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    state: "abled",
    "aria-label": false as unknown as string
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "button_label",
    priority: "tertiary",
    role: "destructive",
    state: "abled",
    iconName: "CircleIcon",
    iconPosition: "left",
    "aria-label": false as unknown as string
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true,
    "aria-label": false as unknown as string
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true,
    "aria-label": false as unknown as string
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
    label: "button_label",
    "aria-label": false as unknown as string
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    iconPosition: "left",
    "aria-label": false as unknown as string
  }
}`,...c.parameters?.docs?.source}}};const _=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton"],z=Object.freeze(Object.defineProperty({__proto__:null,LargePrimaryButton:n,MediumPrimaryInteractiveLoadingButton:i,MediumPrimaryLoadingProcessingButton:s,MediumSecondaryButton:r,MediumSecondaryInteractiveLoadingWithIconButton:c,MediumSecondaryLoadingSavingButton:l,SmallTertiaryButton:t,SmallTertiaryDestructiveWithCircleIconButton:o,__namedExportsOrder:_,default:k},Symbol.toStringTag,{value:"Module"}));export{z as B};
