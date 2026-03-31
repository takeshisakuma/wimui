import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./index-C9_oYSQB.js";import{u as _}from"./useTranslation-CI9f0OZA.js";const y=({children:s,className:r,layout:t="horizontal",size:i="md",border:x=!1,...f})=>e.jsx("dl",{className:h("wim-description-list",`wim-description-list--${t}`,`wim-description-list--${i}`,x&&"wim-description-list--border",r),...f,children:s}),o=({children:s,className:r,...t})=>e.jsx("div",{className:h("wim-description-list__item",r),...t,children:s}),n=({children:s,className:r,...t})=>{const{t:i}=_();return e.jsx("dt",{className:h("wim-description-list__term",r),...t,children:typeof s=="string"?i(s):s})},c=({children:s,className:r,...t})=>{const{t:i}=_();return e.jsx("dd",{className:h("wim-description-list__details",r),...t,children:typeof s=="string"?i(s):s})};y.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical" | "compact"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"DescriptionListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"DescriptionListTerm",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"DescriptionListDetails",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Components/Data Structures/DescriptionList",component:y,argTypes:{layout:{control:"select",options:["horizontal","vertical","compact"]},size:{control:"radio",options:["sm","md","lg"]},border:{control:"boolean"}}},a=()=>{const{t:s}=_("docs");return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(n,{children:s("story.desc_list_user_name")}),e.jsx(c,{children:s("story.desc_list_persona")})]}),e.jsxs(o,{children:[e.jsx(n,{children:s("story.desc_list_email")}),e.jsx(c,{children:"contact@example.com"})]}),e.jsxs(o,{children:[e.jsx(n,{children:s("story.desc_list_position")}),e.jsx(c,{children:s("story.desc_list_designer")})]}),e.jsxs(o,{children:[e.jsx(n,{children:s("story.desc_list_description")}),e.jsx(c,{children:s("story.desc_list_desc_val")})]})]})},l={args:{layout:"horizontal",children:e.jsx(a,{})}},d={args:{layout:"vertical",children:e.jsx(a,{})}},p={args:{layout:"compact",children:e.jsx(a,{})}},m={args:{border:!0,children:e.jsx(a,{})}},u={args:{size:"sm",children:e.jsx(a,{})}},g={args:{size:"lg",children:e.jsx(a,{})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "horizontal",
    children: <DescriptionListContent />
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "vertical",
    children: <DescriptionListContent />
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "compact",
    children: <DescriptionListContent />
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    border: true,
    children: <DescriptionListContent />
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    children: <DescriptionListContent />
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: "lg",
    children: <DescriptionListContent />
  }
}`,...g.parameters?.docs?.source}}};const D=["Horizontal","Vertical","Compact","WithBorder","Small","Large"],R=Object.freeze(Object.defineProperty({__proto__:null,Compact:p,Horizontal:l,Large:g,Small:u,Vertical:d,WithBorder:m,__namedExportsOrder:D,default:j},Symbol.toStringTag,{value:"Module"}));export{p as C,R as D,g as L,u as S,d as V,m as W};
