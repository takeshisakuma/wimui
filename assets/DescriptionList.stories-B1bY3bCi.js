import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./index-BONF4KIw.js";import{u as j}from"./useTranslation-DPV0a7Ml.js";const g=({children:s,className:r,layout:t="horizontal",size:_="md",border:y=!1,...x})=>e.jsx("dl",{className:h("wim-description-list",`wim-description-list--${t}`,`wim-description-list--${_}`,y&&"wim-description-list--border",r),...x,children:s}),i=({children:s,className:r,...t})=>e.jsx("div",{className:h("wim-description-list__item",r),...t,children:s}),o=({children:s,className:r,...t})=>e.jsx("dt",{className:h("wim-description-list__term",r),...t,children:s}),n=({children:s,className:r,...t})=>e.jsx("dd",{className:h("wim-description-list__details",r),...t,children:s});g.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical" | "compact"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};i.__docgenInfo={description:"",methods:[],displayName:"DescriptionListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};o.__docgenInfo={description:"",methods:[],displayName:"DescriptionListTerm",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"DescriptionListDetails",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const f={title:"Components/Data Structures/DescriptionList",component:g,argTypes:{layout:{control:"select",options:["horizontal","vertical","compact"]},size:{control:"radio",options:["sm","md","lg"]},border:{control:"boolean"}}},a=()=>{const{t:s}=j("docs");return e.jsxs(e.Fragment,{children:[e.jsxs(i,{children:[e.jsx(o,{children:s("story.desc_list_user_name")}),e.jsx(n,{children:s("story.desc_list_persona")})]}),e.jsxs(i,{children:[e.jsx(o,{children:s("story.desc_list_email")}),e.jsx(n,{children:"contact@example.com"})]}),e.jsxs(i,{children:[e.jsx(o,{children:s("story.desc_list_position")}),e.jsx(n,{children:s("story.desc_list_designer")})]}),e.jsxs(i,{children:[e.jsx(o,{children:s("story.desc_list_description")}),e.jsx(n,{children:s("story.desc_list_desc_val")})]})]})},c={args:{layout:"horizontal",children:e.jsx(a,{})}},l={args:{layout:"vertical",children:e.jsx(a,{})}},d={args:{layout:"compact",children:e.jsx(a,{})}},p={args:{border:!0,children:e.jsx(a,{})}},m={args:{size:"sm",children:e.jsx(a,{})}},u={args:{size:"lg",children:e.jsx(a,{})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "horizontal",
    children: <DescriptionListContent />
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "vertical",
    children: <DescriptionListContent />
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "compact",
    children: <DescriptionListContent />
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    border: true,
    children: <DescriptionListContent />
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: <DescriptionListContent />
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: <DescriptionListContent />
  }
}`,...u.parameters?.docs?.source}}};const D=["Horizontal","Vertical","Compact","WithBorder","Small","Large"],R=Object.freeze(Object.defineProperty({__proto__:null,Compact:d,Horizontal:c,Large:u,Small:m,Vertical:l,WithBorder:p,__namedExportsOrder:D,default:f},Symbol.toStringTag,{value:"Module"}));export{d as C,R as D,u as L,m as S,l as V,p as W};
