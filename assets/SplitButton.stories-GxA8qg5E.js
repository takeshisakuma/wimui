"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,Sr as r,Tr as i,ur as a,xr as o}from"./iframe-CIRVVv_5.js";import{Yn as s,ji as c,t as l}from"./src-C35woejG.js";var u=e({Default:()=>m,Disabled:()=>_,Sizes:()=>g,Variants:()=>h,__namedExportsOrder:()=>v,default:()=>p});function d(){let{t:e}=i(o);return[{label:e(`story.splitbutton_draft`)},{label:e(`story.splitbutton_close`)},{label:e(`story.splitbutton_template`)}]}var f,p,m,h,g,_,v,y=t((()=>{n(),r(),l(),f=a(),p={title:`Components/Buttons/SplitButton`,component:s,tags:[],argTypes:{variant:{control:`radio`,options:[`solid`,`outline`,`ghost`]},intent:{control:`radio`,options:[`default`,`danger`,`success`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},m={render:function(e){let{t}=i(o);return(0,f.jsx)(s,{...e,actions:d(),toggleLabel:t(`story.splitbutton_toggle`),children:t(`story.splitbutton_main`)})}},h={render:function(e){let{t}=i(o),n=d(),r=t(`story.splitbutton_toggle`);return(0,f.jsx)(c,{gap:`lg`,align:`center`,children:[`solid`,`outline`,`ghost`].map(i=>(0,f.jsx)(s,{...e,variant:i,actions:n,toggleLabel:r,children:t(`story.splitbutton_main`)},i))})}},g={render:function(e){let{t}=i(o),n=d(),r=t(`story.splitbutton_toggle`);return(0,f.jsx)(c,{gap:`lg`,align:`center`,children:[`sm`,`md`,`lg`].map(i=>(0,f.jsx)(s,{...e,size:i,actions:n,toggleLabel:r,children:t(`story.splitbutton_main`)},i))})}},_={args:{disabled:!0},render:function(e){let{t}=i(o);return(0,f.jsx)(s,{...e,actions:d(),toggleLabel:t(`story.splitbutton_toggle`),children:t(`story.splitbutton_main`)})}},v=[`Default`,`Variants`,`Sizes`,`Disabled`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <SplitButton {...args} actions={useActions()} toggleLabel={t("story.splitbutton_toggle")}>
        {t("story.splitbutton_main")}
      </SplitButton>;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}}}));y();export{m as Default,_ as Disabled,g as Sizes,h as Variants,v as __namedExportsOrder,p as default,y as n,u as t};