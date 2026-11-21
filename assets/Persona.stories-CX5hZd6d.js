"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./useTranslation-CpMdOj2B.js";import{n as i,t as a}from"./i18nConstants-YD8z3mm4.js";import{t as o}from"./jsx-runtime-MKhVqBIO.js";import{n as s,t as c}from"./Group-tKRHS_M5.js";import{n as l,t as u}from"./Stack-SbfzwNKR.js";import{n as d,t as f}from"./Persona-DYLhvVpV.js";var p=t({Default:()=>g,LongName:()=>b,Sizes:()=>v,TextBelow:()=>y,WithPresence:()=>_,__namedExportsOrder:()=>x,default:()=>h}),m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{r(),i(),d(),l(),s(),m=o(),h={title:`Components/Data Indicators/Persona`,component:f,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},textPosition:{control:`radio`,options:[`after`,`below`]},presence:{control:`select`,options:[void 0,`online`,`away`,`busy`,`offline`]}}},g={render:function(e){let{t}=n(a);return(0,m.jsx)(f,{...e,name:t(`story.persona_name`),description:t(`story.persona_role`),avatar:{initials:`PR`}})}},_={render:function(){let{t:e}=n(a);return(0,m.jsx)(f,{name:e(`story.persona_name`),description:e(`story.persona_role`),secondaryDescription:e(`story.persona_activity`),avatar:{initials:`PR`},presence:`online`})}},v={render:function(){let{t:e}=n(a);return(0,m.jsx)(u,{gap:`lg`,children:[`sm`,`md`,`lg`].map(t=>(0,m.jsx)(f,{size:t,name:e(`story.persona_name`),description:e(`story.persona_role`),secondaryDescription:e(`story.persona_activity`),avatar:{initials:`PR`},presence:`online`},t))})}},y={render:function(){let{t:e}=n(a);return(0,m.jsxs)(c,{gap:`xl`,align:`start`,children:[(0,m.jsx)(f,{size:`lg`,textPosition:`below`,name:e(`story.persona_name_2`),description:e(`story.persona_role_2`),avatar:{initials:`TO`},presence:`away`}),(0,m.jsx)(f,{size:`lg`,textPosition:`below`,name:e(`story.persona_name_3`),description:e(`story.persona_role_3`),secondaryDescription:e(`story.persona_activity`),avatar:{initials:`HS`},presence:`busy`})]})}},b={render:function(){let{t:e}=n(a);return(0,m.jsx)(`div`,{style:{maxWidth:`var(--wim-width-md)`},children:(0,m.jsx)(f,{name:e(`story.persona_name_long`),description:e(`story.persona_role_long`),avatar:{initials:`MF`},presence:`offline`})})}},x=[`Default`,`WithPresence`,`Sizes`,`TextBelow`,`LongName`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Persona {...args} name={t("story.persona_name")} description={t("story.persona_role")} avatar={{
      initials: "PR"
    }} />;
  }
}`,...g.parameters?.docs?.source},description:{story:`名前と、変わらない補足（役職）。アバターはイニシャル。`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Persona name={t("story.persona_name")} description={t("story.persona_role")} secondaryDescription={t("story.persona_activity")} avatar={{
      initials: "PR"
    }} presence="online" />;
  }
}`,..._.parameters?.docs?.source},description:{story:`在席の状態と、変わる補足（最後の応答）を 2 行目に。読み上げは「名前、オンライン」の順。`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Stack gap="lg">
        {(["sm", "md", "lg"] as const).map(size => <Persona key={size} size={size} name={t("story.persona_name")} description={t("story.persona_role")} secondaryDescription={t("story.persona_activity")} avatar={{
        initials: "PR"
      }} presence="online" />)}
      </Stack>;
  }
}`,...v.parameters?.docs?.source},description:{story:`大きさ 3 段。名前と補足の文字の大きさ・間隔は、アバターの大きさに合わせて部品が決める。`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Group gap="xl" align="start">
        <Persona size="lg" textPosition="below" name={t("story.persona_name_2")} description={t("story.persona_role_2")} avatar={{
        initials: "TO"
      }} presence="away" />
        <Persona size="lg" textPosition="below" name={t("story.persona_name_3")} description={t("story.persona_role_3")} secondaryDescription={t("story.persona_activity")} avatar={{
        initials: "HS"
      }} presence="busy" />
      </Group>;
  }
}`,...y.parameters?.docs?.source},description:{story:`文字を下に置く形（プロフィールのカードなど）。`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      maxWidth: "var(--wim-width-md)"
    }}>
        <Persona name={t("story.persona_name_long")} description={t("story.persona_role_long")} avatar={{
        initials: "MF"
      }} presence="offline" />
      </div>;
  }
}`,...b.parameters?.docs?.source},description:{story:`長い名前と補足は、省略せずに折り返す。`,...b.parameters?.docs?.description}}}})))()}export{y as a,v as i,b as n,_ as o,p as r,S as s,g as t};