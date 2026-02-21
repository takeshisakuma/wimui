import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./index-u7C10MK_.js";import{u as f}from"./useTranslation-BVOeYLq3.js";const y=({children:r,className:s,layout:a="horizontal",size:i="medium",border:D=!1,...x})=>e.jsx("dl",{className:g("wim-description-list",`wim-description-list--${a}`,`wim-description-list--${i}`,D&&"wim-description-list--border",s),...x,children:r}),o=({children:r,className:s,...a})=>e.jsx("div",{className:g("wim-description-list__item",s),...a,children:r}),n=({children:r,className:s,...a})=>{const{t:i}=f();return e.jsx("dt",{className:g("wim-description-list__term",s),...a,children:typeof r=="string"?i(r):r})},c=({children:r,className:s,...a})=>{const{t:i}=f();return e.jsx("dd",{className:g("wim-description-list__details",s),...a,children:typeof r=="string"?i(r):r})};y.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical" | "compact"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};o.__docgenInfo={description:"",methods:[],displayName:"DescriptionListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};n.__docgenInfo={description:"",methods:[],displayName:"DescriptionListTerm",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};c.__docgenInfo={description:"",methods:[],displayName:"DescriptionListDetails",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Component/Data Structures/DescriptionList",component:y,argTypes:{layout:{control:"select",options:["horizontal","vertical","compact"]},size:{control:"select",options:["small","medium","large"]},border:{control:"boolean"}}},t=e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(n,{children:"User Name"}),e.jsx(c,{children:"Wim UI Persona"})]}),e.jsxs(o,{children:[e.jsx(n,{children:"Email Address"}),e.jsx(c,{children:"contact@example.com"})]}),e.jsxs(o,{children:[e.jsx(n,{children:"Position"}),e.jsx(c,{children:"UI/UX Designer"})]}),e.jsxs(o,{children:[e.jsx(n,{children:"Description"}),e.jsx(c,{children:"Standard persona for Wim UI component library documentation."})]})]}),l={args:{layout:"horizontal",children:t}},d={args:{layout:"vertical",children:t}},m={args:{layout:"compact",children:t}},p={args:{border:!0,children:t}},u={args:{size:"small",children:t}},h={args:{size:"large",children:t}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "horizontal",
    children: DefaultChildren
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "vertical",
    children: DefaultChildren
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "compact",
    children: DefaultChildren
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    border: true,
    children: DefaultChildren
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: DefaultChildren
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: DefaultChildren
  }
}`,...h.parameters?.docs?.source}}};const j=["Horizontal","Vertical","Compact","WithBorder","Small","Large"],z=Object.freeze(Object.defineProperty({__proto__:null,Compact:m,Horizontal:l,Large:h,Small:u,Vertical:d,WithBorder:p,__namedExportsOrder:j,default:N},Symbol.toStringTag,{value:"Module"}));export{m as C,z as D,h as L,u as S,d as V,p as W};
