import{j as r}from"./jsx-runtime-u17CrQMm.js";import{A as n}from"./Accordion-Cu0L7UC8.js";import{A as d}from"./iframe-BIyQwIaN.js";import{u as s}from"./useTranslation-C6_B5Ynz.js";const l={title:"Components/Data Containers/Accordion",component:n,tags:[],argTypes:{type:{control:"select",options:["single","multiple"]},collapsible:{control:"boolean"}}},t={render:function(e){const{t:o}=s(d);return r.jsxs(n,{...e,defaultValue:"item-1",children:[r.jsxs(n.Item,{value:"item-1",children:[r.jsx(n.Trigger,{children:o("story.accordion_trigger_1")}),r.jsx(n.Content,{children:o("story.accordion_content_1")})]}),r.jsxs(n.Item,{value:"item-2",children:[r.jsx(n.Trigger,{children:o("story.accordion_trigger_2")}),r.jsx(n.Content,{children:o("story.accordion_content_2")})]}),r.jsxs(n.Item,{value:"item-3",children:[r.jsx(n.Trigger,{children:o("story.accordion_trigger_3")}),r.jsx(n.Content,{children:o("story.accordion_content_3")})]})]})},args:{type:"single",collapsible:!0}},c={render:function(e){const{t:o}=s(d);return r.jsxs(n,{...e,children:[r.jsxs(n.Item,{value:"item-1",children:[r.jsx(n.Trigger,{children:o("story.accordion_trigger_1")}),r.jsx(n.Content,{children:o("story.accordion_content_multiple_1")})]}),r.jsxs(n.Item,{value:"item-2",children:[r.jsx(n.Trigger,{children:o("story.accordion_trigger_2")}),r.jsx(n.Content,{children:o("story.accordion_content_multiple_2")})]}),r.jsxs(n.Item,{value:"item-3",children:[r.jsx(n.Trigger,{children:o("story.accordion_trigger_3")}),r.jsx(n.Content,{children:o("story.accordion_content_multiple_3")})]})]})},args:{type:"multiple"}},i={render:function(e){const{t:o}=s(d);return r.jsxs(n,{...e,children:[r.jsxs(n.Item,{value:"item-1",children:[r.jsx(n.Trigger,{children:o("story.accordion_trigger_enabled")}),r.jsx(n.Content,{children:o("story.accordion_content_enabled")})]}),r.jsxs(n.Item,{value:"item-2",disabled:!0,children:[r.jsx(n.Trigger,{children:o("story.accordion_trigger_disabled")}),r.jsx(n.Content,{children:o("story.accordion_content_disabled")})]})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const g=["Single","Multiple","Disabled"],p=Object.freeze(Object.defineProperty({__proto__:null,Disabled:i,Multiple:c,Single:t,__namedExportsOrder:g,default:l},Symbol.toStringTag,{value:"Module"}));export{p as A,i as D,c as M,t as S};
