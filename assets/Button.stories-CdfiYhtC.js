import{j as S}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-bapbJR6E.js";import{B as y}from"./Button-B5_V0p6O.js";const{fn:L}=__STORYBOOK_MODULE_TEST__,_={title:"Component/Actions/Button",component:y,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:L()}},r={args:{size:"large",label:"button_label",priority:"primary",state:"abled"}},t={args:{size:"medium",label:"button_label",priority:"secondary",state:"abled"}},n={args:{size:"small",label:"button_label",priority:"tertiary",state:"abled"}},o={args:{size:"small",label:"button_label",priority:"tertiary",role:"destructive",state:"abled",iconName:"CircleIcon",iconPosition:"left"}},s={args:{size:"large",priority:"primary",role:"default",state:"abled",iconName:"SquareIcon","aria-label":"Square Icon Button"}},i={args:{size:"medium",priority:"primary",label:"processing",loading:!0}},l={args:{size:"medium",priority:"secondary",label:"saving",loading:!0}},c={render:e=>{const[m,a]=d.useState(!1),[b,B]=d.useState(e.label||"button_label"),g=p=>{e.onClick&&e.onClick(p),a(!0),setTimeout(()=>{a(!1)},2e3)};return S.jsx(y,{...e,loading:m,label:b,onClick:g})},args:{size:"medium",priority:"primary",label:"button_label"}},u={render:e=>{const[m,a]=d.useState(!1),[b,B]=d.useState(e.label||"button_label"),g=p=>{e.onClick&&e.onClick(p),a(!0),setTimeout(()=>{a(!1)},2e3)};return S.jsx(y,{...e,loading:m,label:b,onClick:g})},args:{size:"medium",priority:"secondary",label:"button_label",iconName:"CircleIcon",iconPosition:"left"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "button_label",
    priority: "primary",
    state: "abled"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    label: "button_label",
    priority: "secondary",
    state: "abled"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
    size: "large",
    priority: "primary",
    role: "default",
    state: "abled",
    iconName: "SquareIcon",
    "aria-label": "Square Icon Button"
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "primary",
    label: "processing",
    loading: true
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "medium",
    priority: "secondary",
    label: "saving",
    loading: true
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
    priority: "primary",
    label: "button_label"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const C=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","LargePrimaryNoLabelWithSquareIconButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton"],I=Object.freeze(Object.defineProperty({__proto__:null,LargePrimaryButton:r,LargePrimaryNoLabelWithSquareIconButton:s,MediumPrimaryInteractiveLoadingButton:c,MediumPrimaryLoadingProcessingButton:i,MediumSecondaryButton:t,MediumSecondaryInteractiveLoadingWithIconButton:u,MediumSecondaryLoadingSavingButton:l,SmallTertiaryButton:n,SmallTertiaryDestructiveWithCircleIconButton:o,__namedExportsOrder:C,default:_},Symbol.toStringTag,{value:"Module"}));export{I as B};
