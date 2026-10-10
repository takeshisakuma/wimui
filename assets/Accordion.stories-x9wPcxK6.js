"use client";
import{n as e,r as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r,t as i}from"./useTranslation-BDKsuBAo.js";import{n as a,t as o}from"./i18nConstants-BhvmnjLS.js";import{t as s}from"./jsx-runtime-DeHZSEgm.js";import{n as c,t as l}from"./Accordion-4dwDGtYT.js";var u=t({Disabled:()=>h,Multiple:()=>m,Single:()=>p,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g;function _(){return(_=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Data Containers/Accordion`,component:l,tags:[],argTypes:{type:{control:`select`,options:[`single`,`multiple`]},collapsible:{control:`boolean`}}},p={render:function(e){let{t}=r(o);return(0,d.jsxs)(l,{...e,defaultValue:`item-1`,children:[(0,d.jsxs)(l.Item,{value:`item-1`,children:[(0,d.jsx)(l.Trigger,{children:t(`story.accordion_trigger_1`)}),(0,d.jsx)(l.Content,{children:t(`story.accordion_content_1`)})]}),(0,d.jsxs)(l.Item,{value:`item-2`,children:[(0,d.jsx)(l.Trigger,{children:t(`story.accordion_trigger_2`)}),(0,d.jsx)(l.Content,{children:t(`story.accordion_content_2`)})]}),(0,d.jsxs)(l.Item,{value:`item-3`,children:[(0,d.jsx)(l.Trigger,{children:t(`story.accordion_trigger_3`)}),(0,d.jsx)(l.Content,{children:t(`story.accordion_content_3`)})]})]})},args:{type:`single`,collapsible:!0}},m={render:function(e){let{t}=r(o);return(0,d.jsxs)(l,{...e,children:[(0,d.jsxs)(l.Item,{value:`item-1`,children:[(0,d.jsx)(l.Trigger,{children:t(`story.accordion_trigger_1`)}),(0,d.jsx)(l.Content,{children:t(`story.accordion_content_multiple_1`)})]}),(0,d.jsxs)(l.Item,{value:`item-2`,children:[(0,d.jsx)(l.Trigger,{children:t(`story.accordion_trigger_2`)}),(0,d.jsx)(l.Content,{children:t(`story.accordion_content_multiple_2`)})]}),(0,d.jsxs)(l.Item,{value:`item-3`,children:[(0,d.jsx)(l.Trigger,{children:t(`story.accordion_trigger_3`)}),(0,d.jsx)(l.Content,{children:t(`story.accordion_content_multiple_3`)})]})]})},args:{type:`multiple`}},h={render:function(e){let{t}=r(o);return(0,d.jsxs)(l,{...e,children:[(0,d.jsxs)(l.Item,{value:`item-1`,children:[(0,d.jsx)(l.Trigger,{children:t(`story.accordion_trigger_enabled`)}),(0,d.jsx)(l.Content,{children:t(`story.accordion_content_enabled`)})]}),(0,d.jsxs)(l.Item,{value:`item-2`,disabled:!0,children:[(0,d.jsx)(l.Trigger,{children:t(`story.accordion_trigger_disabled`)}),(0,d.jsx)(l.Content,{children:t(`story.accordion_content_disabled`)})]})]})}},g=[`Single`,`Multiple`,`Disabled`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Accordion {...args} defaultValue="item-1">
        <Accordion.Item value="item-1">
          <Accordion.Trigger>{t("story.accordion_trigger_1")}</Accordion.Trigger>
          <Accordion.Content>
            {t("story.accordion_content_1")}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>{t("story.accordion_trigger_2")}</Accordion.Trigger>
          <Accordion.Content>
            {t("story.accordion_content_2")}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>{t("story.accordion_trigger_3")}</Accordion.Trigger>
          <Accordion.Content>
            {t("story.accordion_content_3")}
          </Accordion.Content>
        </Accordion.Item>
      </Accordion>;
  },
  args: {
    type: "single",
    collapsible: true
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Accordion {...args}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>{t("story.accordion_trigger_1")}</Accordion.Trigger>
          <Accordion.Content>
            {t("story.accordion_content_multiple_1")}
          </Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2">
          <Accordion.Trigger>{t("story.accordion_trigger_2")}</Accordion.Trigger>
          <Accordion.Content>{t("story.accordion_content_multiple_2")}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-3">
          <Accordion.Trigger>{t("story.accordion_trigger_3")}</Accordion.Trigger>
          <Accordion.Content>{t("story.accordion_content_multiple_3")}</Accordion.Content>
        </Accordion.Item>
      </Accordion>;
  },
  args: {
    type: "multiple"
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Accordion {...args}>
        <Accordion.Item value="item-1">
          <Accordion.Trigger>{t("story.accordion_trigger_enabled")}</Accordion.Trigger>
          <Accordion.Content>{t("story.accordion_content_enabled")}</Accordion.Content>
        </Accordion.Item>
        <Accordion.Item value="item-2" disabled>
          <Accordion.Trigger>{t("story.accordion_trigger_disabled")}</Accordion.Trigger>
          <Accordion.Content>{t("story.accordion_content_disabled")}</Accordion.Content>
        </Accordion.Item>
      </Accordion>;
  }
}`,...h.parameters?.docs?.source}}}})))()}export{_ as a,p as i,h as n,m as r,u as t};