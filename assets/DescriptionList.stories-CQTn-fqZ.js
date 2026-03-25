import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./index-CeV49YI9.js";import{u as h}from"./useTranslation-D3JcAmfq.js";const y=({children:s,className:r,layout:t="horizontal",size:i="medium",border:x=!1,...f})=>e.jsx("dl",{className:g("wim-description-list",`wim-description-list--${t}`,`wim-description-list--${i}`,x&&"wim-description-list--border",r),...f,children:s}),o=({children:s,className:r,...t})=>e.jsx("div",{className:g("wim-description-list__item",r),...t,children:s}),n=({children:s,className:r,...t})=>{const{t:i}=h();return e.jsx("dt",{className:g("wim-description-list__term",r),...t,children:typeof s=="string"?i(s):s})},c=({children:s,className:r,...t})=>{const{t:i}=h();return e.jsx("dd",{className:g("wim-description-list__details",r),...t,children:typeof s=="string"?i(s):s})};y.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical" | "compact"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"DescriptionListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"DescriptionListTerm",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"DescriptionListDetails",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const j={title:"Components/Data Structures/DescriptionList",component:y,argTypes:{layout:{control:"select",options:["horizontal","vertical","compact"]},size:{control:"select",options:["small","medium","large"]},border:{control:"boolean"}}},a=()=>{const{t:s}=h("docs");return e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(n,{children:s("story_desc_list_user_name")}),e.jsx(c,{children:s("story_desc_list_persona")})]}),e.jsxs(o,{children:[e.jsx(n,{children:s("story_desc_list_email")}),e.jsx(c,{children:"contact@example.com"})]}),e.jsxs(o,{children:[e.jsx(n,{children:s("story_desc_list_position")}),e.jsx(c,{children:s("story_desc_list_designer")})]}),e.jsxs(o,{children:[e.jsx(n,{children:s("story_desc_list_description")}),e.jsx(c,{children:s("story_desc_list_desc_val")})]})]})},l={args:{layout:"horizontal",children:e.jsx(a,{})}},d={args:{layout:"vertical",children:e.jsx(a,{})}},m={args:{layout:"compact",children:e.jsx(a,{})}},p={args:{border:!0,children:e.jsx(a,{})}},u={args:{size:"small",children:e.jsx(a,{})}},_={args:{size:"large",children:e.jsx(a,{})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "horizontal",
    children: <DescriptionListContent />
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "vertical",
    children: <DescriptionListContent />
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "compact",
    children: <DescriptionListContent />
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    border: true,
    children: <DescriptionListContent />
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: <DescriptionListContent />
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: <DescriptionListContent />
  }
}`,..._.parameters?.docs?.source}}};const D=["Horizontal","Vertical","Compact","WithBorder","Small","Large"],R=Object.freeze(Object.defineProperty({__proto__:null,Compact:m,Horizontal:l,Large:_,Small:u,Vertical:d,WithBorder:p,__namedExportsOrder:D,default:j},Symbol.toStringTag,{value:"Module"}));export{m as C,R as D,_ as L,u as S,d as V,p as W};
