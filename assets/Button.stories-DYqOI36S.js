import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as v,A as o}from"./iframe-GzHoau5L.js";import{B as t}from"./Button-DZW7ODAc.js";import{u as a}from"./useTranslation-Ckw9ivsw.js";const{fn:A}=__STORYBOOK_MODULE_TEST__,E={title:"Components/Buttons/Button",component:t,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:A()}},u={render:function(n){const{t:e}=a(o);return r.jsx(t,{...n,children:e("button.label")})},args:{size:"lg",variant:"filled"}},d={render:function(n){const{t:e}=a(o);return r.jsx(t,{...n,children:e("button.label")})},args:{size:"md",variant:"outlined"}},l={render:function(n){const{t:e}=a(o);return r.jsx(t,{...n,children:e("button.label")})},args:{size:"sm",variant:"ghost"}},m={render:function(n){const{t:e}=a(o);return r.jsx(t,{...n,children:e("button.label")})},args:{size:"sm",variant:"ghost",intent:"destructive",icon:"CircleIcon",iconPosition:"left",disabled:!0}},g={render:function(n){const{t:e}=a(o);return r.jsx(t,{...n,children:e("button.label")})},args:{size:"md",variant:"filled",disabled:!0}},p={render:function(n){const{t:e}=a(o);return r.jsx(t,{...n,children:e("processing")})},args:{size:"md",variant:"filled",loading:!0}},f={render:function(n){const{t:e}=a(o);return r.jsx(t,{...n,children:e("saving")})},args:{size:"md",variant:"outlined",loading:!0}},S={render:function(n){const{t:e}=a(o),[L,c]=v.useState(!1),b=C=>{n.onClick&&n.onClick(C),c(!0),setTimeout(()=>{c(!1)},2e3)};return r.jsx(t,{...n,loading:L,onClick:b,children:e("button.label")})},args:{size:"md",variant:"filled"}},B={render:function(n){const{t:e}=a(o),[L,c]=v.useState(!1),b=C=>{n.onClick&&n.onClick(C),c(!0),setTimeout(()=>{c(!1)},2e3)};return r.jsx(t,{...n,loading:L,onClick:b,icon:"CircleIcon",iconPosition:"left",children:e("button.label")})},args:{size:"md",variant:"outlined"}},i={render:function(){const{t:n}=a(o);return r.jsx(t,{variant:"filled",size:"md",children:n("story.button_click_me")})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "lg",
    variant: "filled"
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "md",
    variant: "outlined"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "sm",
    variant: "ghost"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
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
    return <Button {...args}>{t("button.label")}</Button>;
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
    return <Button {...args}>{t("processing")}</Button>;
  },
  args: {
    size: "md",
    variant: "filled",
    loading: true
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("saving")}</Button>;
  },
  args: {
    size: "md",
    variant: "outlined",
    loading: true
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
    return <Button {...args} loading={loading} onClick={handleClick}>
        {t("button.label")}
      </Button>;
  },
  args: {
    size: "md",
    variant: "filled"
  }
}`,...S.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
    return <Button {...args} loading={loading} onClick={handleClick} icon="CircleIcon" iconPosition="left">
        {t("button.label")}
      </Button>;
  },
  args: {
    size: "md",
    variant: "outlined"
  }
}`,...B.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button variant="filled" size="md">
        {t("story.button_click_me")}
      </Button>;
  }
}`,...i.parameters?.docs?.source},description:{story:"children を使ったボタン（label prop の代替）",...i.parameters?.docs?.description}}};const h=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","DisabledButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton","WithChildren"],R=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:g,LargePrimaryButton:u,MediumPrimaryInteractiveLoadingButton:S,MediumPrimaryLoadingProcessingButton:p,MediumSecondaryButton:d,MediumSecondaryInteractiveLoadingWithIconButton:B,MediumSecondaryLoadingSavingButton:f,SmallTertiaryButton:l,SmallTertiaryDestructiveWithCircleIconButton:m,WithChildren:i,__namedExportsOrder:h,default:E},Symbol.toStringTag,{value:"Module"}));export{R as B,u as L};
