"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{t as l}from"./src-BE5jBQ9L.js";import{t as u}from"./Button-d-SlSJ4S.js";var d=e({DisabledButton:()=>b,LargePrimaryButton:()=>g,MediumPrimaryInteractiveLoadingButton:()=>C,MediumPrimaryLoadingProcessingButton:()=>x,MediumSecondaryButton:()=>_,MediumSecondaryInteractiveLoadingWithIconButton:()=>w,MediumSecondaryLoadingSavingButton:()=>S,SmallTertiaryButton:()=>v,SmallTertiaryDestructiveWithCircleIconButton:()=>y,WithChildren:()=>T,__namedExportsOrder:()=>E,default:()=>h}),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{f=n(r(),1),s(),a(),l(),p=o(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Buttons/Button`,component:u,parameters:{layout:`centered`},argTypes:{backgroundColor:{control:`color`}},args:{onClick:m()}},g={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`button.label`)})},args:{size:`lg`,variant:`solid`}},_={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`button.label`)})},args:{size:`md`,variant:`outline`}},v={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`button.label`)})},args:{size:`sm`,variant:`ghost`}},y={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`button.label`)})},args:{size:`sm`,variant:`ghost`,intent:`danger`,icon:`CircleIcon`,iconPosition:`left`,disabled:!0}},b={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`button.label`)})},args:{size:`md`,variant:`solid`,disabled:!0}},x={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`processing`)})},args:{size:`md`,variant:`solid`,loading:!0}},S={render:function(e){let{t}=i(c);return(0,p.jsx)(u,{...e,children:t(`saving`)})},args:{size:`md`,variant:`outline`,loading:!0}},C={render:function(e){let{t}=i(c),[n,r]=(0,f.useState)(!1),a=t=>{e.onClick&&e.onClick(t),r(!0),setTimeout(()=>{r(!1)},2e3)};return(0,p.jsx)(u,{...e,loading:n,onClick:a,children:t(`button.label`)})},args:{size:`md`,variant:`solid`}},w={render:function(e){let{t}=i(c),[n,r]=(0,f.useState)(!1),a=t=>{e.onClick&&e.onClick(t),r(!0),setTimeout(()=>{r(!1)},2e3)};return(0,p.jsx)(u,{...e,loading:n,onClick:a,icon:`CircleIcon`,iconPosition:`left`,children:t(`button.label`)})},args:{size:`md`,variant:`outline`}},T={render:function(){let{t:e}=i(c);return(0,p.jsx)(u,{variant:`solid`,size:`md`,children:e(`story.button_click_me`)})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "lg",
    variant: "solid"
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "md",
    variant: "outline"
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "sm",
    variant: "ghost",
    intent: "danger",
    icon: "CircleIcon",
    iconPosition: "left",
    disabled: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("button.label")}</Button>;
  },
  args: {
    size: "md",
    variant: "solid",
    disabled: true
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("processing")}</Button>;
  },
  args: {
    size: "md",
    variant: "solid",
    loading: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button {...args}>{t("saving")}</Button>;
  },
  args: {
    size: "md",
    variant: "outline",
    loading: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
    variant: "solid"
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    variant: "outline"
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Button variant="solid" size="md">
        {t("story.button_click_me")}
      </Button>;
  }
}`,...T.parameters?.docs?.source},description:{story:`children を使ったボタン（label prop の代替）`,...T.parameters?.docs?.description}}},E=[`LargePrimaryButton`,`MediumSecondaryButton`,`SmallTertiaryButton`,`SmallTertiaryDestructiveWithCircleIconButton`,`DisabledButton`,`MediumPrimaryLoadingProcessingButton`,`MediumSecondaryLoadingSavingButton`,`MediumPrimaryInteractiveLoadingButton`,`MediumSecondaryInteractiveLoadingWithIconButton`,`WithChildren`]}));D();export{b as DisabledButton,g as LargePrimaryButton,C as MediumPrimaryInteractiveLoadingButton,x as MediumPrimaryLoadingProcessingButton,_ as MediumSecondaryButton,w as MediumSecondaryInteractiveLoadingWithIconButton,S as MediumSecondaryLoadingSavingButton,v as SmallTertiaryButton,y as SmallTertiaryDestructiveWithCircleIconButton,T as WithChildren,E as __namedExportsOrder,h as default,D as n,d as t};