import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-BdaCrWBW.js";import{A as i}from"./Accordion-C-teJ1LM.js";import{H as h}from"./Heading-DTmEx0aX.js";import{P as w}from"./Paragraph-vFTk4Cnq.js";import{u as A}from"./useTranslation-f2Ze7WA6.js";const u=({items:q,title:c,description:l,layout:g="top",accordionProps:m,className:_})=>{const{t:o}=A(),y=!!(c||l);return e.jsxs("section",{className:p("wim-faq-section",`wim-faq-section--layout-${g}`,_),children:[y&&e.jsxs("div",{className:"wim-faq-section__header",children:[c&&e.jsx(h,{tag:"h2",size:"xl",className:"wim-faq-section__title",children:o(c)}),l&&e.jsx(w,{content:o(l),color:"deepgray",className:"wim-faq-section__description"})]}),e.jsx("div",{className:"wim-faq-section__content",children:e.jsx(i,{type:"multiple",collapsible:!0,...m,className:p("wim-faq-section__accordion",m?.className),children:q.map((n,d)=>e.jsxs(i.Item,{value:`faq-item-${d}`,children:[e.jsx(i.Trigger,{children:o(n.question)}),e.jsx(i.Content,{children:typeof n.answer=="string"?o(n.answer):n.answer})]},d))})})]})};u.__docgenInfo={description:`よくある質問 (FAQ)を表示するためのセクションコンポーネント。
既存のAccordionコンポーネントを活用して構築されています。`,methods:[],displayName:"FAQSection",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"FAQItem"}],raw:"FAQItem[]"},description:"FAQの各項目。"},title:{required:!1,tsType:{name:"string"},description:"セクションのメインタイトル。"},description:{required:!1,tsType:{name:"string"},description:"タイトルの下に表示される補足説明。"},layout:{required:!1,tsType:{name:"union",raw:'"top" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'}]},description:`レイアウト。
- top: タイトルと説明をアコーディオンの上に配置。
- left: タイトルと説明を左側、アコーディオンを右側に配置 (デスクトップ以上)。`,defaultValue:{value:'"top"',computed:!1}},accordionProps:{required:!1,tsType:{name:"Omit",elements:[{name:"AccordionProps"},{name:"literal",value:'"children"'}],raw:'Omit<AccordionProps, "children">'},description:"内部のAccordionコンポーネントに渡すProps。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"}}};const j={title:"Components/Layout/FAQSection",component:u,parameters:{layout:"padded"}},f=[{question:"faq.q1",answer:"faq.a1"},{question:"faq.q2",answer:"faq.a2"},{question:"faq.q3",answer:"faq.a3"},{question:"faq.q4",answer:"faq.a4"}],s={args:{title:"faq.section_default_title",description:"faq.section_default_desc",items:f,layout:"top"}},a={args:{...s.args,layout:"left"}},t={args:{items:f}},r={args:{...s.args,accordionProps:{type:"single"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "faq.section_default_title",
    description: "faq.section_default_desc",
    items: mockItems,
    layout: "top"
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: "left"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    accordionProps: {
      type: "single"
    }
  }
}`,...r.parameters?.docs?.source}}};const x=["Default","LayoutLeft","WithoutHeader","CustomAccordionProps"],Q=Object.freeze(Object.defineProperty({__proto__:null,CustomAccordionProps:r,Default:s,LayoutLeft:a,WithoutHeader:t,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{s as D,Q as F,a as L,t as W};
