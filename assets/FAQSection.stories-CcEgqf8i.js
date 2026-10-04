"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{t as i}from"./jsx-runtime-DeHZSEgm.js";import{n as a,t as o}from"./T-B6tjwfui.js";import{t as s}from"./classnames-D09xBJOL.js";import{n as c,t as l}from"./Text-8oARqUeB.js";import{n as u,t as d}from"./Accordion-Bh8xNDVZ.js";import{n as f,t as p}from"./Title-D19NtK2q.js";var m,h,g,_,v,y;function b(){return(b=t((()=>{m=`_root_1qger_4`,h=`_header_1qger_15`,g=`_content_1qger_21`,_=`_title_1qger_28`,v=`_description_1qger_31`,y={root:m,"layout-left":`_layout-left_1qger_11`,header:h,content:g,title:_,description:v}})))()}var x,S,C;function w(){return(w=t((()=>{r(),x=e(s(),1),u(),f(),c(),b(),S=i(),C=({items:e,title:t,description:n,layout:r=`top`,accordionProps:i,className:a})=>{let o=!!(t||n);return(0,S.jsxs)(`section`,{className:(0,x.default)(`wim-faq-section`,y.root,y[`layout-${r}`],a),children:[o&&(0,S.jsxs)(`div`,{className:y.header,children:[t&&(0,S.jsx)(p,{tag:`h2`,size:`xl`,className:y.title,children:t}),n&&(0,S.jsx)(l,{content:n,color:`text-secondary`,className:y.description})]}),(0,S.jsx)(`div`,{className:y.content,children:(0,S.jsx)(d,{type:`multiple`,collapsible:!0,...i,className:i?.className,children:e.map((e,t)=>(0,S.jsxs)(d.Item,{value:`faq-item-${t}`,children:[(0,S.jsx)(d.Trigger,{children:e.question}),(0,S.jsx)(d.Content,{children:e.answer})]},t))})})]})},C.__docgenInfo={description:`Section component for displaying frequently asked questions (FAQ).
Built on top of the existing Accordion component.`,methods:[],displayName:`FAQSection`,props:{items:{required:!0,tsType:{name:`Array`,elements:[{name:`FAQItem`}],raw:`FAQItem[]`},description:`FAQ items.`},title:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Main title of the section.`},description:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Supplementary description shown below the title.`},layout:{required:!1,tsType:{name:`union`,raw:`"top" | "left"`,elements:[{name:`literal`,value:`"top"`},{name:`literal`,value:`"left"`}]},description:`Layout.
- top: title and description above the accordion.
- left: title and description on the left, accordion on the right (desktop and up).`,defaultValue:{value:`"top"`,computed:!1}},accordionProps:{required:!1,tsType:{name:`Omit`,elements:[{name:`AccordionProps`},{name:`literal`,value:`"children"`}],raw:`Omit<AccordionProps, "children">`},description:`Props passed to the inner Accordion component.`},className:{required:!1,tsType:{name:`string`},description:`Additional class names.`}}}})))()}var T=n({CustomAccordionProps:()=>M,Default:()=>k,LayoutLeft:()=>A,WithoutHeader:()=>j,__namedExportsOrder:()=>N,default:()=>D}),E,D,O,k,A,j,M,N;function P(){return(P=t((()=>{w(),a(),E=i(),D={title:`Components/Data Containers/FAQSection`,component:C,parameters:{layout:`padded`}},O=[{question:(0,E.jsx)(o,{k:`docs_layout:faq.q1`}),answer:(0,E.jsx)(o,{k:`docs_layout:faq.a1`})},{question:(0,E.jsx)(o,{k:`docs_layout:faq.q2`}),answer:(0,E.jsx)(o,{k:`docs_layout:faq.a2`})},{question:(0,E.jsx)(o,{k:`docs_layout:faq.q3`}),answer:(0,E.jsx)(o,{k:`docs_layout:faq.a3`})},{question:(0,E.jsx)(o,{k:`docs_layout:faq.q4`}),answer:(0,E.jsx)(o,{k:`docs_layout:faq.a4`})}],k={args:{title:(0,E.jsx)(o,{k:`docs_layout:faq.section_default_title`}),description:(0,E.jsx)(o,{k:`docs_layout:faq.section_default_desc`}),items:O,layout:`top`}},A={args:{...k.args,layout:`left`}},j={args:{items:O}},M={args:{...k.args,accordionProps:{type:`single`}}},N=[`Default`,`LayoutLeft`,`WithoutHeader`,`CustomAccordionProps`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    title: <T k="docs_layout:faq.section_default_title" />,
    description: <T k="docs_layout:faq.section_default_desc" />,
    items: mockItems,
    layout: "top"
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    layout: "left"
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: mockItems
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    accordionProps: {
      type: "single"
    }
  }
}`,...M.parameters?.docs?.source}}}})))()}export{P as i,T as n,A as r,k as t};