import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as C,A as o}from"./iframe-Dy1bRiAG.js";import{B as r}from"./Button-DePzZocE.js";import{u as a}from"./useTranslation-bjPpwDUm.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,A={title:"Components/Buttons/Button",component:r,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"}},args:{onClick:B()}},u={render:function(n){const{t:e}=a(o);return t.jsx(r,{...n,label:e("button_label")})},args:{size:"large",priority:"primary"}},l={render:function(n){const{t:e}=a(o);return t.jsx(r,{...n,label:e("button_label")})},args:{size:"medium",priority:"secondary"}},d={render:function(n){const{t:e}=a(o);return t.jsx(r,{...n,label:e("button_label")})},args:{size:"small",priority:"tertiary"}},m={render:function(n){const{t:e}=a(o);return t.jsx(r,{...n,label:e("button_label")})},args:{size:"small",priority:"tertiary",role:"destructive",iconName:"CircleIcon",iconPosition:"left",disabled:!0}},g={render:function(n){const{t:e}=a(o);return t.jsx(r,{...n,label:e("button_label")})},args:{size:"medium",priority:"primary",disabled:!0}},p={render:function(n){const{t:e}=a(o);return t.jsx(r,{...n,label:e("processing")})},args:{size:"medium",priority:"primary",loading:!0}},y={render:function(n){const{t:e}=a(o);return t.jsx(r,{...n,label:e("saving")})},args:{size:"medium",priority:"secondary",loading:!0}},b={render:function(n){const{t:e}=a(o),[f,c]=C.useState(!1),L=_=>{n.onClick&&n.onClick(_),c(!0),setTimeout(()=>{c(!1)},2e3)};return t.jsx(r,{...n,label:e("button_label"),loading:f,onClick:L})},args:{size:"medium",priority:"primary"}},S={render:function(n){const{t:e}=a(o),[f,c]=C.useState(!1),L=_=>{n.onClick&&n.onClick(_),c(!0),setTimeout(()=>{c(!1)},2e3)};return t.jsx(r,{...n,label:e("button_label"),loading:f,onClick:L,iconName:"CircleIcon",iconPosition:"left"})},args:{size:"medium",priority:"secondary"}},i={render:function(){const{t:n}=a(o);return t.jsx(r,{priority:"primary",size:"medium",children:n("story_button_click_me")})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "large",
    priority: "primary"
  }
}`,...u.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "medium",
    priority: "secondary"
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "small",
    priority: "tertiary"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "small",
    priority: "tertiary",
    role: "destructive",
    iconName: "CircleIcon",
    iconPosition: "left",
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "medium",
    priority: "primary",
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
    size: "medium",
    priority: "primary",
    loading: true
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args} label={t("saving")} />;
  },
  args: {
    size: "medium",
    priority: "secondary",
    loading: true
  }
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
    return <Button {...args} label={t("button_label")} loading={loading} onClick={handleClick} />;
  },
  args: {
    size: "medium",
    priority: "primary"
  }
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
    return <Button {...args} label={t("button_label")} loading={loading} onClick={handleClick} iconName="CircleIcon" iconPosition="left" />;
  },
  args: {
    size: "medium",
    priority: "secondary"
  }
}`,...S.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button priority="primary" size="medium">
        {t("story_button_click_me")}
      </Button>;
  }
}`,...i.parameters?.docs?.source},description:{story:"children を使ったボタン（label prop の代替）",...i.parameters?.docs?.description}}};const E=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","DisabledButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton","WithChildren"],k=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:g,LargePrimaryButton:u,MediumPrimaryInteractiveLoadingButton:b,MediumPrimaryLoadingProcessingButton:p,MediumSecondaryButton:l,MediumSecondaryInteractiveLoadingWithIconButton:S,MediumSecondaryLoadingSavingButton:y,SmallTertiaryButton:d,SmallTertiaryDestructiveWithCircleIconButton:m,WithChildren:i,__namedExportsOrder:E,default:A},Symbol.toStringTag,{value:"Module"}));export{k as B};
