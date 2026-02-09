import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as r}from"./index-Dnf1k34B.js";import{u as y}from"./useTranslation-F5yQTs60.js";const g=({children:a,className:s="",layout:t="horizontal",size:c="medium",border:v=!1,...N})=>{const D=["wim-description-list",`wim-description-list--${t}`,`wim-description-list--${c}`,v?"wim-description-list--border":"",s].filter(Boolean).join(" ");return e.jsx("dl",{className:D,...N,children:a})},o=({children:a,className:s="",...t})=>e.jsx("div",{className:`wim-description-list__item ${s}`,...t,children:a}),i=({children:a,className:s="",...t})=>{const{t:c}=y();return e.jsx("dt",{className:`wim-description-list__term ${s}`,...t,children:typeof a=="string"?c(a):a})},n=({children:a,className:s="",...t})=>{const{t:c}=y();return e.jsx("dd",{className:`wim-description-list__details ${s}`,...t,children:typeof a=="string"?c(a):a})};g.propTypes={children:r.node.isRequired,className:r.string,layout:r.oneOf(["horizontal","vertical","compact"]),size:r.oneOf(["small","medium","large"]),border:r.bool};o.propTypes={children:r.node.isRequired,className:r.string};i.propTypes={children:r.node.isRequired,className:r.string};n.propTypes={children:r.node.isRequired,className:r.string};g.__docgenInfo={description:"",methods:[],displayName:"DescriptionList",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}},layout:{required:!1,tsType:{name:"union",raw:'"horizontal" | "vertical" | "compact"',elements:[{name:"literal",value:'"horizontal"'},{name:"literal",value:'"vertical"'},{name:"literal",value:'"compact"'}]},description:"",defaultValue:{value:'"horizontal"',computed:!1},type:{name:"enum",value:[{value:'"horizontal"',computed:!1},{value:'"vertical"',computed:!1},{value:'"compact"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},border:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1},type:{name:"bool"}}}};o.__docgenInfo={description:"",methods:[],displayName:"DescriptionListItem",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};i.__docgenInfo={description:"",methods:[],displayName:"DescriptionListTerm",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};n.__docgenInfo={description:"",methods:[],displayName:"DescriptionListDetails",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1},type:{name:"string"}}}};const j={title:"Component/Data Display/DescriptionList",component:g,argTypes:{layout:{control:"select",options:["horizontal","vertical","compact"]},size:{control:"select",options:["small","medium","large"]},border:{control:"boolean"}}},l=e.jsxs(e.Fragment,{children:[e.jsxs(o,{children:[e.jsx(i,{children:"User Name"}),e.jsx(n,{children:"Wim UI Persona"})]}),e.jsxs(o,{children:[e.jsx(i,{children:"Email Address"}),e.jsx(n,{children:"contact@example.com"})]}),e.jsxs(o,{children:[e.jsx(i,{children:"Position"}),e.jsx(n,{children:"UI/UX Designer"})]}),e.jsxs(o,{children:[e.jsx(i,{children:"Description"}),e.jsx(n,{children:"Standard persona for Wim UI component library documentation."})]})]}),d={args:{layout:"horizontal",children:l}},m={args:{layout:"vertical",children:l}},p={args:{layout:"compact",children:l}},u={args:{border:!0,children:l}},h={args:{size:"small",children:l}},f={args:{size:"large",children:l}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "horizontal",
    children: DefaultChildren
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "vertical",
    children: DefaultChildren
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    layout: "compact",
    children: DefaultChildren
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    border: true,
    children: DefaultChildren
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    children: DefaultChildren
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    children: DefaultChildren
  }
}`,...f.parameters?.docs?.source}}};const x=["Horizontal","Vertical","Compact","WithBorder","Small","Large"],z=Object.freeze(Object.defineProperty({__proto__:null,Compact:p,Horizontal:d,Large:f,Small:h,Vertical:m,WithBorder:u,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{p as C,z as D,f as L,h as S,m as V,u as W};
