"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{t as i}from"./jsx-runtime-MKhVqBIO.js";import{n as a,t as o}from"./T-tuOOofAV.js";import{t as s}from"./classnames-DQoS6hca.js";import{n as c,t as l}from"./Text-D9yqbrao.js";import{n as u,t as d}from"./Accordion-DaBWlASa.js";import{n as f,t as p}from"./Title-DbsxqXW4.js";var m,h,g,_,v,y,b;function x(){return(x=t((()=>{m=`_root_gh5d4_4`,h=`_layout_gh5d4_11`,g=`_header_gh5d4_21`,_=`_content_gh5d4_27`,v=`_title_gh5d4_34`,y=`_description_gh5d4_37`,b={root:m,layout:h,"layout-left":`_layout-left_gh5d4_17`,header:g,content:_,title:v,description:y}})))()}var S,C,w;function T(){return(T=t((()=>{r(),S=e(s(),1),u(),f(),c(),x(),C=i(),w=({items:e,title:t,description:n,layout:r=`top`,accordionProps:i,className:a,"aria-label":o,"aria-labelledby":s})=>{let c=!!(t||n);return(0,C.jsx)(`section`,{className:(0,S.default)(`wim-faq-section`,b.root,b[`layout-${r}`],a),"aria-label":s?void 0:o,"aria-labelledby":s,children:(0,C.jsxs)(`div`,{className:b.layout,children:[c&&(0,C.jsxs)(`div`,{className:b.header,children:[t&&(0,C.jsx)(p,{tag:`h2`,size:`xl`,className:b.title,children:t}),n&&(0,C.jsx)(l,{content:n,color:`text-secondary`,className:b.description})]}),(0,C.jsx)(`div`,{className:b.content,children:(0,C.jsx)(d,{type:`multiple`,collapsible:!0,...i,className:i?.className,children:e.map((e,t)=>(0,C.jsxs)(d.Item,{value:`faq-item-${t}`,children:[(0,C.jsx)(d.Trigger,{children:e.question}),(0,C.jsx)(d.Content,{children:e.answer})]},t))})})]})})},w.__docgenInfo={description:`Section component for displaying frequently asked questions (FAQ).
Built on top of the existing Accordion component.`,methods:[],displayName:`FAQSection`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`FAQItem`}],raw:`FAQItem[]`},description:`FAQ items.`},title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Main title of the section.`},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Supplementary description shown below the title.`},layout:{required:!1,tsType:{name:`union`,raw:`"top" | "left"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"left"`}]},description:`Layout.
- top: title and description above the accordion.
- left: title and description on the left, accordion on the right (desktop and up).`,defaultValue:{value:`"top"`,computed:!1}},accordionProps:{required:!1,tsType:{name:`Omit`,elements:[{name:`AccordionProps`},{name:`literal`,value:`"children"`}],raw:`Omit<AccordionProps, "children">`},description:`Props passed to the inner Accordion component.`},className:{required:!1,tsType:{name:`string`},description:`Additional class names.`},"aria-label":{required:!1,tsType:{name:`string`},description:`Accessible name for the section. A named section is exposed as a region landmark.`},"aria-labelledby":{required:!1,tsType:{name:`string`},description:"ID of the element that labels the section. Takes precedence over `aria-label`."}}}})))()}var E=n({CustomAccordionProps:()=>N,Default:()=>A,LayoutLeft:()=>j,WithoutHeader:()=>M,__namedExportsOrder:()=>P,default:()=>O}),D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{T(),a(),D=i(),O={title:`Components/Data Containers/FAQSection`,component:w,parameters:{layout:`padded`}},k=[{question:(0,D.jsx)(o,{k:`docs_layout:faq.q1`}),answer:(0,D.jsx)(o,{k:`docs_layout:faq.a1`})},{question:(0,D.jsx)(o,{k:`docs_layout:faq.q2`}),answer:(0,D.jsx)(o,{k:`docs_layout:faq.a2`})},{question:(0,D.jsx)(o,{k:`docs_layout:faq.q3`}),answer:(0,D.jsx)(o,{k:`docs_layout:faq.a3`})},{question:(0,D.jsx)(o,{k:`docs_layout:faq.q4`}),answer:(0,D.jsx)(o,{k:`docs_layout:faq.a4`})}],A={args:{title:(0,D.jsx)(o,{k:`docs_layout:faq.section_default_title`}),description:(0,D.jsx)(o,{k:`docs_layout:faq.section_default_desc`}),items:k,layout:`top`}},j={args:{...A.args,layout:`left`}},M={args:{items:k}},N={args:{...A.args,accordionProps:{type:`single`}}},P=[`Default`,`LayoutLeft`,`WithoutHeader`,`CustomAccordionProps`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    title: <T k="docs_layout:faq.section_default_title" />,
    description: <T k="docs_layout:faq.section_default_desc" />,
    items: mockItems,
    layout: "top"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: "left"
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    accordionProps: {
      type: "single"
    }
  }
}`,...N.parameters?.docs?.source}}}})))()}export{F as i,E as n,j as r,A as t};