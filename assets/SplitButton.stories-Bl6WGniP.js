"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{n,t as r}from"./useTranslation-BDKsuBAo.js";import{n as i,t as a}from"./i18nConstants-BhvmnjLS.js";import{t as o}from"./jsx-runtime-DeHZSEgm.js";import{n as s,t as c}from"./Group-BLI3kjIp.js";import{n as l,t as u}from"./SplitButton-C0lHKiwY.js";import{n as d,t as f}from"./playOpen-BfHmRBb6.js";var p=t({Default:()=>_,Disabled:()=>b,Intents:()=>x,Open:()=>S,Sizes:()=>y,Variants:()=>v,__namedExportsOrder:()=>C,default:()=>g});function m(){let{t:e}=n(a);return[{label:e(`story.splitbutton_draft`)},{label:e(`story.splitbutton_close`)},{label:e(`story.splitbutton_template`)}]}var h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{r(),i(),s(),l(),f(),h=o(),g={title:`Components/Buttons/SplitButton`,component:u,tags:[],argTypes:{variant:{control:`radio`,options:[`solid`,`outline`,`ghost`]},intent:{control:`radio`,options:[`default`,`danger`,`success`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},_={render:function(e){let{t}=n(a);return(0,h.jsx)(u,{...e,actions:m(),toggleLabel:t(`story.splitbutton_toggle`),children:t(`story.splitbutton_main`)})}},v={render:function(e){let{t}=n(a),r=m(),i=t(`story.splitbutton_toggle`);return(0,h.jsx)(c,{gap:`lg`,align:`center`,children:[`solid`,`outline`,`ghost`].map(n=>(0,h.jsx)(u,{...e,variant:n,actions:r,toggleLabel:i,children:t(`story.splitbutton_main`)},n))})}},y={render:function(e){let{t}=n(a),r=m(),i=t(`story.splitbutton_toggle`);return(0,h.jsx)(c,{gap:`lg`,align:`center`,children:[`sm`,`md`,`lg`].map(n=>(0,h.jsx)(u,{...e,size:n,actions:r,toggleLabel:i,children:t(`story.splitbutton_main`)},n))})}},b={args:{disabled:!0},render:function(e){let{t}=n(a);return(0,h.jsx)(u,{...e,actions:m(),toggleLabel:t(`story.splitbutton_toggle`),children:t(`story.splitbutton_main`)})}},x={render:function(e){let{t}=n(a),r=m(),i=t(`story.splitbutton_toggle`);return(0,h.jsx)(c,{gap:`lg`,align:`center`,children:[`default`,`danger`,`success`].map(n=>(0,h.jsx)(u,{...e,intent:n,actions:r,toggleLabel:i,children:t(`story.splitbutton_main`)},n))})}},S={..._,play:d},C=[`Default`,`Variants`,`Sizes`,`Disabled`,`Intents`,`Open`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SplitButton {...args} actions={useActions()} toggleLabel={t("story.splitbutton_toggle")}>
        {t("story.splitbutton_main")}
      </SplitButton>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const actions = useActions();
    const toggleLabel = t("story.splitbutton_toggle");
    return <Group gap="lg" align="center">
        {(["solid", "outline", "ghost"] as const).map(variant => <SplitButton key={variant} {...args} variant={variant} actions={actions} toggleLabel={toggleLabel}>
            {t("story.splitbutton_main")}
          </SplitButton>)}
      </Group>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const actions = useActions();
    const toggleLabel = t("story.splitbutton_toggle");
    return <Group gap="lg" align="center">
        {(["sm", "md", "lg"] as const).map(size => <SplitButton key={size} {...args} size={size} actions={actions} toggleLabel={toggleLabel}>
            {t("story.splitbutton_main")}
          </SplitButton>)}
      </Group>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SplitButton {...args} actions={useActions()} toggleLabel={t("story.splitbutton_toggle")}>
        {t("story.splitbutton_main")}
      </SplitButton>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const actions = useActions();
    const toggleLabel = t("story.splitbutton_toggle");
    return <Group gap="lg" align="center">
        {(["default", "danger", "success"] as const).map(intent => <SplitButton key={intent} {...args} intent={intent} actions={actions} toggleLabel={toggleLabel}>
            {t("story.splitbutton_main")}
          </SplitButton>)}
      </Group>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Default,
  play: openFirstPopup
}`,...S.parameters?.docs?.source}}}})))()}export{w as i,x as n,p as r,_ as t};