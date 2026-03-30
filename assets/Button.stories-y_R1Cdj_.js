import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as v,A as a}from"./iframe-BCt2Cqzi.js";import{B as t}from"./Button-BYZRdEHu.js";import{u as o}from"./useTranslation-iqmbh8MZ.js";const{fn:A}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Buttons/Button",component:t,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:A()}},c={render:function(n){const{t:e}=o(a);return r.jsx(t,{...n,label:e("button.label")})},args:{size:"lg",variant:"filled"}},u={render:function(n){const{t:e}=o(a);return r.jsx(t,{...n,label:e("button.label")})},args:{size:"md",variant:"outlined"}},d={render:function(n){const{t:e}=o(a);return r.jsx(t,{...n,label:e("button.label")})},args:{size:"sm",variant:"ghost"}},m={render:function(n){const{t:e}=o(a);return r.jsx(t,{...n,label:e("button.label")})},args:{size:"sm",variant:"ghost",intent:"destructive",icon:"CircleIcon",iconPosition:"left",disabled:!0}},g={render:function(n){const{t:e}=o(a);return r.jsx(t,{...n,label:e("button.label")})},args:{size:"md",variant:"filled",disabled:!0}},p={render:function(n){const{t:e}=o(a);return r.jsx(t,{...n,label:e("processing")})},args:{size:"md",variant:"filled",loading:!0}},b={render:function(n){const{t:e}=o(a);return r.jsx(t,{...n,label:e("saving")})},args:{size:"md",variant:"outlined",loading:!0}},f={render:function(n){const{t:e}=o(a),[L,l]=v.useState(!1),C=B=>{n.onClick&&n.onClick(B),l(!0),setTimeout(()=>{l(!1)},2e3)};return r.jsx(t,{...n,label:e("button.label"),loading:L,onClick:C})},args:{size:"md",variant:"filled"}},S={render:function(n){const{t:e}=o(a),[L,l]=v.useState(!1),C=B=>{n.onClick&&n.onClick(B),l(!0),setTimeout(()=>{l(!1)},2e3)};return r.jsx(t,{...n,label:e("button.label"),loading:L,onClick:C,icon:"CircleIcon",iconPosition:"left"})},args:{size:"md",variant:"outlined"}},i={render:function(){const{t:n}=o(a);return r.jsx(t,{variant:"filled",size:"md",children:n("story.button_click_me")})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "lg",
    variant: "filled"
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "md",
    variant: "outlined"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "sm",
    variant: "ghost"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "sm",
    variant: "ghost",
    intent: "destructive",
    icon: "CircleIcon",
    iconPosition: "left",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button.label")} />;
  },
  args: {
    size: "md",
    variant: "filled",
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("processing")} />;
  },
  args: {
    size: "md",
    variant: "filled",
    loading: true
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("saving")} />;
  },
  args: {
    size: "md",
    variant: "outlined",
    loading: true
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [loading, setLoading] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <Button {...args} label={t("button.label")} loading={loading} onClick={handleClick} />;
  },
  args: {
    size: "md",
    variant: "filled"
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [loading, setLoading] = useState(false);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (args.onClick) args.onClick(e);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    };
    return <Button {...args} label={t("button.label")} loading={loading} onClick={handleClick} icon="CircleIcon" iconPosition="left" />;
  },
  args: {
    size: "md",
    variant: "outlined"
  }
}`,...S.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button variant="filled" size="md">
        {t("story.button_click_me")}
      </Button>;
  }
}`,...i.parameters?.docs?.source},description:{story:"children を使ったボタン（label prop の代替）",...i.parameters?.docs?.description}}};const M=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","DisabledButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton","WithChildren"],y=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:g,LargePrimaryButton:c,MediumPrimaryInteractiveLoadingButton:f,MediumPrimaryLoadingProcessingButton:p,MediumSecondaryButton:u,MediumSecondaryInteractiveLoadingWithIconButton:S,MediumSecondaryLoadingSavingButton:b,SmallTertiaryButton:d,SmallTertiaryDestructiveWithCircleIconButton:m,WithChildren:i,__namedExportsOrder:M,default:E},Symbol.toStringTag,{value:"Module"}));export{y as B};
