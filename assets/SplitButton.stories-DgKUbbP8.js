"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{Cr as n,br as r,cr as i,xr as a,yr as o}from"./iframe-DiXuc7DI.js";import{Hn as s,t as c,wi as l}from"./src-BE5jBQ9L.js";var u=e({Default:()=>m,Disabled:()=>_,Sizes:()=>g,Variants:()=>h,__namedExportsOrder:()=>v,default:()=>p});function d(){let{t:e}=n(o);return[{label:e(`story.splitbutton_draft`)},{label:e(`story.splitbutton_close`)},{label:e(`story.splitbutton_template`)}]}var f,p,m,h,g,_,v,y=t((()=>{a(),r(),c(),f=i(),p={title:`Components/Buttons/SplitButton`,component:s,tags:[],argTypes:{variant:{control:`radio`,options:[`solid`,`outline`,`ghost`]},intent:{control:`radio`,options:[`default`,`danger`,`success`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},m={render:function(e){let{t}=n(o);return(0,f.jsx)(s,{...e,actions:d(),toggleLabel:t(`story.splitbutton_toggle`),children:t(`story.splitbutton_main`)})}},h={render:function(e){let{t}=n(o),r=d(),i=t(`story.splitbutton_toggle`);return(0,f.jsx)(l,{gap:`lg`,align:`center`,children:[`solid`,`outline`,`ghost`].map(n=>(0,f.jsx)(s,{...e,variant:n,actions:r,toggleLabel:i,children:t(`story.splitbutton_main`)},n))})}},g={render:function(e){let{t}=n(o),r=d(),i=t(`story.splitbutton_toggle`);return(0,f.jsx)(l,{gap:`lg`,align:`center`,children:[`sm`,`md`,`lg`].map(n=>(0,f.jsx)(s,{...e,size:n,actions:r,toggleLabel:i,children:t(`story.splitbutton_main`)},n))})}},_={args:{disabled:!0},render:function(e){let{t}=n(o);return(0,f.jsx)(s,{...e,actions:d(),toggleLabel:t(`story.splitbutton_toggle`),children:t(`story.splitbutton_main`)})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`Variants`,`Sizes`,`Disabled`]}));y();export{m as Default,_ as Disabled,g as Sizes,h as Variants,v as __namedExportsOrder,p as default,y as n,u as t};