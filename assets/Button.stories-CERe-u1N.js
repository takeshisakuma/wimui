import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as C,A as o}from"./iframe-C6X0q2kK.js";import{B as r}from"./Button-JOXV9aqh.js";import{u as a}from"./useTranslation-SWIlf_TP.js";const{fn:B}=__STORYBOOK_MODULE_TEST__,A={title:"Components/Buttons/Button",component:r,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"},state:{description:"Deprecated: Use the standard `disabled` prop instead.",control:"select",options:["abled","disabled"]}},args:{onClick:B()}},l={render:function(e){const{t:n}=a(o);return t.jsx(r,{...e,label:n("button_label")})},args:{size:"large",priority:"primary"}},u={render:function(e){const{t:n}=a(o);return t.jsx(r,{...e,label:n("button_label")})},args:{size:"medium",priority:"secondary"}},d={render:function(e){const{t:n}=a(o);return t.jsx(r,{...e,label:n("button_label")})},args:{size:"small",priority:"tertiary"}},m={render:function(e){const{t:n}=a(o);return t.jsx(r,{...e,label:n("button_label")})},args:{size:"small",priority:"tertiary",role:"destructive",iconName:"CircleIcon",iconPosition:"left"}},p={render:function(e){const{t:n}=a(o);return t.jsx(r,{...e,label:n("button_label")})},args:{size:"medium",priority:"primary",disabled:!0}},g={render:function(e){const{t:n}=a(o);return t.jsx(r,{...e,label:n("processing")})},args:{size:"medium",priority:"primary",loading:!0}},y={render:function(e){const{t:n}=a(o);return t.jsx(r,{...e,label:n("saving")})},args:{size:"medium",priority:"secondary",loading:!0}},b={render:function(e){const{t:n}=a(o),[f,c]=C.useState(!1),L=_=>{e.onClick&&e.onClick(_),c(!0),setTimeout(()=>{c(!1)},2e3)};return t.jsx(r,{...e,label:n("button_label"),loading:f,onClick:L})},args:{size:"medium",priority:"primary"}},S={render:function(e){const{t:n}=a(o),[f,c]=C.useState(!1),L=_=>{e.onClick&&e.onClick(_),c(!0),setTimeout(()=>{c(!1)},2e3)};return t.jsx(r,{...e,label:n("button_label"),loading:f,onClick:L,iconName:"CircleIcon",iconPosition:"left"})},args:{size:"medium",priority:"secondary"}},i={render:function(){const{t:e}=a(o);return t.jsx(r,{priority:"primary",size:"medium",children:e("story_button_click_me")})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
    iconPosition: "left"
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:"children を使ったボタン（label prop の代替）",...i.parameters?.docs?.description}}};const E=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","DisabledButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton","WithChildren"],k=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:p,LargePrimaryButton:l,MediumPrimaryInteractiveLoadingButton:b,MediumPrimaryLoadingProcessingButton:g,MediumSecondaryButton:u,MediumSecondaryInteractiveLoadingWithIconButton:S,MediumSecondaryLoadingSavingButton:y,SmallTertiaryButton:d,SmallTertiaryDestructiveWithCircleIconButton:m,WithChildren:i,__namedExportsOrder:E,default:A},Symbol.toStringTag,{value:"Module"}));export{k as B};
