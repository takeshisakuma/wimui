import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-CWJxLETi.js";import{A as o}from"./Accordion-0DxPiaBp.js";import{H as y}from"./Heading-BBykV5FA.js";import{P as h}from"./Paragraph-KySOxlxm.js";const p=({items:f,title:n,description:c,layout:q="top",accordionProps:i,className:g})=>{const _=!!(n||c);return e.jsxs("section",{className:d("wim-faq-section",`wim-faq-section--layout-${q}`,g),children:[_&&e.jsxs("div",{className:"wim-faq-section__header",children:[n&&e.jsx(y,{tag:"h2",size:"xl",className:"wim-faq-section__title",children:n}),c&&e.jsx(h,{content:c,color:"deepgray",className:"wim-faq-section__description"})]}),e.jsx("div",{className:"wim-faq-section__content",children:e.jsx(o,{type:"multiple",collapsible:!0,...i,className:d("wim-faq-section__accordion",i?.className),children:f.map((l,m)=>e.jsxs(o.Item,{value:`faq-item-${m}`,children:[e.jsx(o.Trigger,{children:l.question}),e.jsx(o.Content,{children:l.answer})]},m))})})]})};p.__docgenInfo={description:`よくある質問 (FAQ)を表示するためのセクションコンポーネント。
既存のAccordionコンポーネントを活用して構築されています。`,methods:[],displayName:"FAQSection",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"FAQItem"}],raw:"FAQItem[]"},description:"FAQの各項目。"},title:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"セクションのメインタイトル。"},description:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"タイトルの下に表示される補足説明。"},layout:{required:!1,tsType:{name:"union",raw:'"top" | "left"',elements:[{name:"literal",value:'"top"'},{name:"literal",value:'"left"'}]},description:`レイアウト。
- top: タイトルと説明をアコーディオンの上に配置。
- left: タイトルと説明を左側、アコーディオンを右側に配置 (デスクトップ以上)。`,defaultValue:{value:'"top"',computed:!1}},accordionProps:{required:!1,tsType:{name:"Omit",elements:[{name:"AccordionProps"},{name:"literal",value:'"children"'}],raw:'Omit<AccordionProps, "children">'},description:"内部のAccordionコンポーネントに渡すProps。"},className:{required:!1,tsType:{name:"string"},description:"追加のクラス名。"}}};const w={title:"Components/Layout/FAQSection",component:p,parameters:{layout:"padded"}},u=[{question:"faq.q1",answer:"faq.a1"},{question:"faq.q2",answer:"faq.a2"},{question:"faq.q3",answer:"faq.a3"},{question:"faq.q4",answer:"faq.a4"}],a={args:{title:"faq.section_default_title",description:"faq.section_default_desc",items:u,layout:"top"}},s={args:{...a.args,layout:"left"}},t={args:{items:u}},r={args:{...a.args,accordionProps:{type:"single"}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    title: "faq.section_default_title",
    description: "faq.section_default_desc",
    items: mockItems,
    layout: "top"
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: "left"
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const A=["Default","LayoutLeft","WithoutHeader","CustomAccordionProps"],F=Object.freeze(Object.defineProperty({__proto__:null,CustomAccordionProps:r,Default:a,LayoutLeft:s,WithoutHeader:t,__namedExportsOrder:A,default:w},Symbol.toStringTag,{value:"Module"}));export{a as D,F,s as L,t as W};
