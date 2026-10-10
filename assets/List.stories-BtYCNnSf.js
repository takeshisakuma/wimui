"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Stack-CrCPoxQ1.js";import{n as u,t as d}from"./Text-1X1ZsZfu.js";import{n as f,r as p,t as m}from"./List-AJNL96pU.js";var h=t({Bordered:()=>w,Large:()=>x,LooseSpacing:()=>S,Ordered:()=>y,Small:()=>b,Unordered:()=>v,WithIcons:()=>C,__namedExportsOrder:()=>T,default:()=>_}),g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{n(),i(),a(),p(),c(),u(),g=s(),_={title:`Components/Data Structures/List`,component:m,argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},spacing:{control:`select`,options:[`tight`,`normal`,`loose`]}}},v={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(f,{children:t(`story.list_item1`)}),(0,g.jsx)(f,{children:t(`story.list_item2`)}),(0,g.jsxs)(f,{children:[t(`story.list_item3`),` `,t(`story.list_item3_desc`)]})]})}},y={render:function(e){let{t}=r(o);return(0,g.jsx)(m,{...e,asChild:!0,children:(0,g.jsxs)(`ol`,{children:[(0,g.jsx)(f,{children:t(`story.list_step1`)}),(0,g.jsx)(f,{children:t(`story.list_step2`)}),(0,g.jsx)(f,{children:t(`story.list_step3`)})]})})}},b={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,size:`sm`,children:[(0,g.jsx)(f,{children:t(`story.list_small_yogurt`)}),(0,g.jsx)(f,{children:t(`story.list_small_bread`)})]})}},x={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,size:`lg`,children:[(0,g.jsx)(f,{children:t(`story.list_large_dentist`)}),(0,g.jsx)(f,{children:t(`story.list_large_bike`)})]})}},S={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,spacing:`loose`,children:[(0,g.jsx)(f,{children:t(`story.list_loose_recycle`)}),(0,g.jsx)(f,{children:t(`story.list_loose_plants`)})]})}},C={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,children:[(0,g.jsx)(f,{iconName:`CheckIcon`,children:t(`story.list_task_completed`)}),(0,g.jsx)(f,{iconName:`PdfIcon`,children:t(`story.list_manual_pdf`)}),(0,g.jsx)(f,{iconName:`ImageIcon`,children:t(`story.list_gallery`)}),(0,g.jsx)(f,{iconName:`EmailIcon`,children:t(`story.list_email`)}),(0,g.jsx)(f,{iconName:`PhoneIcon`,children:t(`story.list_phone`)}),(0,g.jsx)(f,{iconName:`ExternalLinkIcon`,iconPosition:`right`,children:t(`story.list_view_details`)})]})}},w={render:function(e){let{t}=r(o);return(0,g.jsxs)(m,{...e,bordered:!0,fullWidth:!0,children:[(0,g.jsx)(f,{children:(0,g.jsxs)(l,{gap:`2xs`,children:[(0,g.jsx)(d,{children:t(`story.list_found_umbrella`)}),(0,g.jsx)(d,{size:`xs`,color:`text-tertiary`,children:t(`story.list_found_umbrella_meta`)})]})}),(0,g.jsx)(f,{children:(0,g.jsxs)(l,{gap:`2xs`,children:[(0,g.jsx)(d,{children:t(`story.list_found_bottle`)}),(0,g.jsx)(d,{size:`xs`,color:`text-tertiary`,children:t(`story.list_found_bottle_meta`)})]})})]})}},T=[`Unordered`,`Ordered`,`Small`,`Large`,`LooseSpacing`,`WithIcons`,`Bordered`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args}>
        <ListItem>{t("story.list_item1")}</ListItem>
        <ListItem>{t("story.list_item2")}</ListItem>
        <ListItem>
          {t("story.list_item3")} {t("story.list_item3_desc")}
        </ListItem>
      </List>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} asChild>
        <ol>
          <ListItem>{t("story.list_step1")}</ListItem>
          <ListItem>{t("story.list_step2")}</ListItem>
          <ListItem>{t("story.list_step3")}</ListItem>
        </ol>
      </List>;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} size="sm">
        <ListItem>{t("story.list_small_yogurt")}</ListItem>
        <ListItem>{t("story.list_small_bread")}</ListItem>
      </List>;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} size="lg">
        <ListItem>{t("story.list_large_dentist")}</ListItem>
        <ListItem>{t("story.list_large_bike")}</ListItem>
      </List>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} spacing="loose">
        <ListItem>{t("story.list_loose_recycle")}</ListItem>
        <ListItem>{t("story.list_loose_plants")}</ListItem>
      </List>;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args}>
        <ListItem iconName="CheckIcon">{t("story.list_task_completed")}</ListItem>
        <ListItem iconName="PdfIcon">{t("story.list_manual_pdf")}</ListItem>
        <ListItem iconName="ImageIcon">{t("story.list_gallery")}</ListItem>
        <ListItem iconName="EmailIcon">{t("story.list_email")}</ListItem>
        <ListItem iconName="PhoneIcon">{t("story.list_phone")}</ListItem>
        <ListItem iconName="ExternalLinkIcon" iconPosition="right">
          {t("story.list_view_details")}
        </ListItem>
      </List>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} bordered fullWidth>
        <ListItem>
          <Stack gap="2xs">
            <Text>{t("story.list_found_umbrella")}</Text>
            <Text size="xs" color="text-tertiary">
              {t("story.list_found_umbrella_meta")}
            </Text>
          </Stack>
        </ListItem>
        <ListItem>
          <Stack gap="2xs">
            <Text>{t("story.list_found_bottle")}</Text>
            <Text size="xs" color="text-tertiary">
              {t("story.list_found_bottle_meta")}
            </Text>
          </Stack>
        </ListItem>
      </List>;
  }
}`,...w.parameters?.docs?.source},description:{story:`bordered の単体 Default はテキスト子だけ。実際の行はタイトル＋メタのブロック。
inside マーカーだとブロックが次行へ落ちる（T183）。`,...w.parameters?.docs?.description}}}})))()}export{y as a,C as c,S as i,E as l,x as n,b as o,h as r,v as s,w as t};