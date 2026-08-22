"use client";
import{a as e,i as t}from"./preload-helper-CT_b8DTk.js";import{t as n}from"./react-DmCNssFd.js";import{Cr as r,br as i,cr as a,xr as o,yr as s}from"./iframe-F5Up1IQq.js";import{Mt as c,t as l}from"./src-Ssuy8lr7.js";var u=e({Disabled:()=>h,Multiple:()=>m,Single:()=>p,__namedExportsOrder:()=>g,default:()=>f}),d,f,p,m,h,g,_=t((()=>{n(),o(),i(),l(),d=a(),f={title:`Components/Data Containers/Accordion`,component:c,tags:[],argTypes:{type:{control:`select`,options:[`single`,`multiple`]},collapsible:{control:`boolean`}}},p={render:function(e){let{t}=r(s);return(0,d.jsxs)(c,{...e,defaultValue:`item-1`,children:[(0,d.jsxs)(c.Item,{value:`item-1`,children:[(0,d.jsx)(c.Trigger,{children:t(`story.accordion_trigger_1`)}),(0,d.jsx)(c.Content,{children:t(`story.accordion_content_1`)})]}),(0,d.jsxs)(c.Item,{value:`item-2`,children:[(0,d.jsx)(c.Trigger,{children:t(`story.accordion_trigger_2`)}),(0,d.jsx)(c.Content,{children:t(`story.accordion_content_2`)})]}),(0,d.jsxs)(c.Item,{value:`item-3`,children:[(0,d.jsx)(c.Trigger,{children:t(`story.accordion_trigger_3`)}),(0,d.jsx)(c.Content,{children:t(`story.accordion_content_3`)})]})]})},args:{type:`single`,collapsible:!0}},m={render:function(e){let{t}=r(s);return(0,d.jsxs)(c,{...e,children:[(0,d.jsxs)(c.Item,{value:`item-1`,children:[(0,d.jsx)(c.Trigger,{children:t(`story.accordion_trigger_1`)}),(0,d.jsx)(c.Content,{children:t(`story.accordion_content_multiple_1`)})]}),(0,d.jsxs)(c.Item,{value:`item-2`,children:[(0,d.jsx)(c.Trigger,{children:t(`story.accordion_trigger_2`)}),(0,d.jsx)(c.Content,{children:t(`story.accordion_content_multiple_2`)})]}),(0,d.jsxs)(c.Item,{value:`item-3`,children:[(0,d.jsx)(c.Trigger,{children:t(`story.accordion_trigger_3`)}),(0,d.jsx)(c.Content,{children:t(`story.accordion_content_multiple_3`)})]})]})},args:{type:`multiple`}},h={render:function(e){let{t}=r(s);return(0,d.jsxs)(c,{...e,children:[(0,d.jsxs)(c.Item,{value:`item-1`,children:[(0,d.jsx)(c.Trigger,{children:t(`story.accordion_trigger_enabled`)}),(0,d.jsx)(c.Content,{children:t(`story.accordion_content_enabled`)})]}),(0,d.jsxs)(c.Item,{value:`item-2`,disabled:!0,children:[(0,d.jsx)(c.Trigger,{children:t(`story.accordion_trigger_disabled`)}),(0,d.jsx)(c.Content,{children:t(`story.accordion_content_disabled`)})]})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g=[`Single`,`Multiple`,`Disabled`]}));_();export{h as Disabled,m as Multiple,p as Single,g as __namedExportsOrder,f as default,_ as n,u as t};