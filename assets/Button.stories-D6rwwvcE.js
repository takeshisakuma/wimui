import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as B}from"./iframe-D4gOfWnt.js";import{B as n}from"./Button-D3SwmJug.js";import{u as t}from"./useTranslation-BONq47qB.js";const{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:"Components/Buttons/Button",component:n,parameters:{layout:"centered"},argTypes:{backgroundColor:{control:"color"},state:{description:"Deprecated: Use the standard `disabled` prop instead.",control:"select",options:["abled","disabled"]}},args:{onClick:S()}},i={render:function(o){const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("button_label")})},args:{size:"large",priority:"primary"}},d={render:function(o){const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("button_label")})},args:{size:"medium",priority:"secondary"}},l={render:function(o){const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("button_label")})},args:{size:"small",priority:"tertiary"}},u={render:function(o){const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("button_label")})},args:{size:"small",priority:"tertiary",role:"destructive",iconName:"CircleIcon",iconPosition:"left"}},_={render:function(o){const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("button_label")})},args:{size:"medium",priority:"primary",disabled:!0}},m={render:function(o){const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("processing")})},args:{size:"medium",priority:"primary",loading:!0}},p={render:function(o){const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{...o,label:s("saving")})},args:{size:"medium",priority:"secondary",loading:!0}},g={render:function(o){const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[b,a]=B.useState(!1),v=f=>{o.onClick&&o.onClick(f),a(!0),setTimeout(()=>{a(!1)},2e3)};return e.jsx(n,{...o,label:s("button_label"),loading:b,onClick:v})},args:{size:"medium",priority:"primary"}},y={render:function(o){const{t:s}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[b,a]=B.useState(!1),v=f=>{o.onClick&&o.onClick(f),a(!0),setTimeout(()=>{a(!1)},2e3)};return e.jsx(n,{...o,label:s("button_label"),loading:b,onClick:v,iconName:"CircleIcon",iconPosition:"left"})},args:{size:"medium",priority:"secondary"}},c={render:function(){const{t:o}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(n,{priority:"primary",size:"medium",children:o("story_button_click_me")})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "large",
    priority: "primary"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "small",
    priority: "tertiary"
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "small",
    priority: "tertiary",
    role: "destructive",
    iconName: "CircleIcon",
    iconPosition: "left"
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Button {...args} label={t("button_label")} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    disabled: true
  }
}`,..._.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Button {...args} label={t("processing")} />;
  },
  args: {
    size: "medium",
    priority: "primary",
    loading: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Button {...args} label={t("saving")} />;
  },
  args: {
    size: "medium",
    priority: "secondary",
    loading: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...y.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <Button priority="primary" size="medium">\r
        {t("story_button_click_me")}\r
      </Button>;
  }
}`,...c.parameters?.docs?.source},description:{story:"children を使ったボタン（label prop の代替）",...c.parameters?.docs?.description}}};const T=["LargePrimaryButton","MediumSecondaryButton","SmallTertiaryButton","SmallTertiaryDestructiveWithCircleIconButton","DisabledButton","MediumPrimaryLoadingProcessingButton","MediumSecondaryLoadingSavingButton","MediumPrimaryInteractiveLoadingButton","MediumSecondaryInteractiveLoadingWithIconButton","WithChildren"],h=Object.freeze(Object.defineProperty({__proto__:null,DisabledButton:_,LargePrimaryButton:i,MediumPrimaryInteractiveLoadingButton:g,MediumPrimaryLoadingProcessingButton:m,MediumSecondaryButton:d,MediumSecondaryInteractiveLoadingWithIconButton:y,MediumSecondaryLoadingSavingButton:p,SmallTertiaryButton:l,SmallTertiaryDestructiveWithCircleIconButton:u,WithChildren:c,__namedExportsOrder:T,default:C},Symbol.toStringTag,{value:"Module"}));export{h as B};
