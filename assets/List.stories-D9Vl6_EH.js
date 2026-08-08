"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-DiXuc7DI.js";import{t as c}from"./src-BE5jBQ9L.js";import{n as l,t as u}from"./List-C4WUy_aA.js";var d=e({Large:()=>_,LooseSpacing:()=>v,Ordered:()=>h,Small:()=>g,Unordered:()=>m,WithIcons:()=>y,__namedExportsOrder:()=>b,default:()=>p}),f,p,m,h,g,_,v,y,b,x=t((()=>{n(),o(),i(),c(),f=a(),p={title:`Components/Data Structures/List`,component:u,argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},spacing:{control:`select`,options:[`tight`,`normal`,`loose`]}}},m={render:function(e){let{t}=r(s);return(0,f.jsxs)(u,{...e,children:[(0,f.jsx)(l,{children:t(`story.list_item1`)}),(0,f.jsx)(l,{children:t(`story.list_item2`)}),(0,f.jsxs)(l,{children:[t(`story.list_item3`),` `,t(`story.list_item3_desc`)]})]})}},h={render:function(e){let{t}=r(s);return(0,f.jsx)(u,{...e,asChild:!0,children:(0,f.jsxs)(`ol`,{children:[(0,f.jsx)(l,{children:t(`story.list_step1`)}),(0,f.jsx)(l,{children:t(`story.list_step2`)}),(0,f.jsx)(l,{children:t(`story.list_step3`)})]})})}},g={render:function(e){let{t}=r(s);return(0,f.jsxs)(u,{...e,size:`sm`,children:[(0,f.jsxs)(l,{children:[t(`story.list_item_small`),` 1`]}),(0,f.jsxs)(l,{children:[t(`story.list_item_small`),` 2`]})]})}},_={render:function(e){let{t}=r(s);return(0,f.jsxs)(u,{...e,size:`lg`,children:[(0,f.jsxs)(l,{children:[t(`story.list_item_large`),` 1`]}),(0,f.jsxs)(l,{children:[t(`story.list_item_large`),` 2`]})]})}},v={render:function(e){let{t}=r(s);return(0,f.jsxs)(u,{...e,spacing:`loose`,children:[(0,f.jsxs)(l,{children:[t(`story.list_loose`),` 1`]}),(0,f.jsxs)(l,{children:[t(`story.list_loose`),` 2`]})]})}},y={render:function(e){let{t}=r(s);return(0,f.jsxs)(u,{...e,children:[(0,f.jsx)(l,{iconName:`CheckIcon`,children:t(`story.list_task_completed`)}),(0,f.jsx)(l,{iconName:`PdfIcon`,children:t(`story.list_manual_pdf`)}),(0,f.jsx)(l,{iconName:`ImageIcon`,children:t(`story.list_gallery`)}),(0,f.jsx)(l,{iconName:`EmailIcon`,children:t(`story.list_email`)}),(0,f.jsx)(l,{iconName:`PhoneIcon`,children:t(`story.list_phone`)}),(0,f.jsx)(l,{iconName:`ExternalLinkIcon`,iconPosition:`right`,children:t(`story.list_view_details`)})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} size="sm">
        <ListItem>
          {t("story.list_item_small")} 1
        </ListItem>
        <ListItem>
          {t("story.list_item_small")} 2
        </ListItem>
      </List>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} size="lg">
        <ListItem>
          {t("story.list_item_large")} 1
        </ListItem>
        <ListItem>
          {t("story.list_item_large")} 2
        </ListItem>
      </List>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <List {...args} spacing="loose">
        <ListItem>
          {t("story.list_loose")} 1
        </ListItem>
        <ListItem>
          {t("story.list_loose")} 2
        </ListItem>
      </List>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Unordered`,`Ordered`,`Small`,`Large`,`LooseSpacing`,`WithIcons`]}));x();export{_ as Large,v as LooseSpacing,h as Ordered,g as Small,m as Unordered,y as WithIcons,b as __namedExportsOrder,p as default,x as n,d as t};