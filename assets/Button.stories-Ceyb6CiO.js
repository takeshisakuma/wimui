import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-DQwmcauy.js";import{B as r}from"./Button-r7Kxqflo.js";import{u as t}from"./useTranslation-CZ9vchf1.js";const{fn:C}=__STORYBOOK_MODULE_TEST__,T={title:"Components/Buttons/Button",component:r,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"},state:{description:"Deprecated: Use the standard `disabled` prop instead.",control:"select",options:["abled","disabled"]}},args:{onClick:C()}},c={render:function(n){const{t:e}=t(["docs","common","components"]);return o.jsx(r,{...n,label:e("button_label")})},args:{size:"large",priority:"primary"}},d={render:function(n){const{t:e}=t(["docs","common","components"]);return o.jsx(r,{...n,label:e("button_label")})},args:{size:"medium",priority:"secondary"}},l={render:function(n){const{t:e}=t(["docs","common","components"]);return o.jsx(r,{...n,label:e("button_label")})},args:{size:"small",priority:"tertiary"}},m={render:function(n){const{t:e}=t(["docs","common","components"]);return o.jsx(r,{...n,label:e("button_label")})},args:{size:"small",priority:"tertiary",role:"destructive",iconName:"CircleIcon",iconPosition:"left"}},u={render:function(n){const{t:e}=t(["docs","common","components"]);return o.jsx(r,{...n,label:e("button_label")})},args:{size:"medium",priority:"primary",disabled:!0}},p={render:function(n){const{t:e}=t(["docs","common","components"]);return o.jsx(r,{...n,label:e("processing")})},args:{size:"medium",priority:"primary",loading:!0}},g={render:function(n){const{t:e}=t(["docs","common","components"]);return o.jsx(r,{...n,label:e("saving")})},args:{size:"medium",priority:"secondary",loading:!0}},y={render:function(n){const{t:e}=t(["docs","common","components"]),[f,i]=S.useState(!1),B=_=>{n.onClick&&n.onClick(_),i(!0),setTimeout(()=>{i(!1)},2e3)};return o.jsx(r,{...n,label:e("button_label"),loading:f,onClick:B})},args:{size:"medium",priority:"primary"}},b={render:function(n){const{t:e}=t(["docs","common","components"]),[f,i]=S.useState(!1),B=_=>{n.onClick&&n.onClick(_),i(!0),setTimeout(()=>{i(!1)},2e3)};return o.jsx(r,{...n,label:e("button_label"),loading:f,onClick:B,iconName:"CircleIcon",iconPosition:"left"})},args:{size:"medium",priority:"secondary"}},a={render:function(){const{t:n}=t(["docs","common","components"]);return o.jsx(r,{priority:"primary",size:"medium",children:n("story_button_click_me")})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "large",
    priority: "primary"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "medium",
    priority: "secondary"
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "small",
    priority: "tertiary"
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "small",
    priority: "tertiary",
    role: "destructive",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Button {...args} label={t("processing")} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    loading: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Button {...args} label={t("saving")} />;
  },
  args: {
    size: "medium",
    priority: "secondary",
    loading: true
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...y.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...b.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Button priority="primary" size="medium">\r
        {t("story_button_click_me")}\r
      </Button>;
  }
}`,...a.parameters?.docs?.source},description:{story:"children を使ったボタン（label prop の代替）",...a.parameters?.docs?.description}}};const R=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","DisabledButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton","WithChildren"],M=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:u,LargePrimaryButton:c,MediumPrimaryInteractiveLoadingButton:y,MediumPrimaryLoadingProcessingButton:p,MediumSecondaryButton:d,MediumSecondaryInteractiveLoadingWithIconButton:b,MediumSecondaryLoadingSavingButton:g,SmallTertiaryButton:l,SmallTertiaryDestructiveWithCircleIconButton:m,WithChildren:a,__namedExportsOrder:R,default:T},Symbol.toStringTag,{value:"Module"}));export{M as B};
