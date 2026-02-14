import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as d}from"./index-Pp9yKcV2.js";import{L as h}from"./Link-CLeMrY4-.js";import{I as p}from"./Icon-TjtOJ-ub.js";import{u as C}from"./useTranslation-DSXsfy7w.js";const b=({items:c,separator:g,size:r="medium",className:f})=>{const{t:i}=C(),y=e.jsx(p,{name:"ChevronRightIcon",size:r,className:"wim-breadcrumb__separator-icon"});return e.jsx("nav",{"aria-label":"Breadcrumb",className:d("wim-breadcrumb",`wim-breadcrumb--${r==="small"?"sm":r==="large"?"lg":"md"}`,f),children:e.jsx("ol",{className:"wim-breadcrumb__list",children:c.map((a,u)=>{const m=u===c.length-1;return e.jsxs("li",{className:"wim-breadcrumb__item",children:[e.jsx("div",{className:"wim-breadcrumb__content",children:a.href&&!m?e.jsx(h,{href:a.href,size:r,priority:"secondary",iconName:a.iconName,className:"wim-breadcrumb__link",children:i(a.label)}):e.jsxs("span",{className:d("wim-breadcrumb__label",m&&"wim-breadcrumb__label--current"),"aria-current":m?"page":void 0,children:[a.iconName&&e.jsx(p,{name:a.iconName,size:r,className:"wim-breadcrumb__label-icon"}),i(a.label)]})}),!m&&e.jsx("span",{className:"wim-breadcrumb__separator","aria-hidden":"true",children:g||y})]},u)})})})};b.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    href?: string;\r
    iconName?: React.ComponentProps<typeof Icon>["name"];\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}}]}}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Component/Navigation/Breadcrumb",component:b,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]}}},n={args:{items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Current Page"}]}},s={args:{items:[{label:"Home",href:"/",iconName:"CircleIcon"},{label:"Category",href:"/category",iconName:"SquareIcon"},{label:"Current Page",iconName:"EyeIcon"}]}},o={args:{size:"small",items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Current Page"}]}},l={args:{size:"large",items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Current Page"}]}},t={args:{separator:">",items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Current Page"}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Category",
      href: "/category"
    }, {
      label: "Current Page"
    }]
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      label: "Home",
      href: "/",
      iconName: "CircleIcon"
    }, {
      label: "Category",
      href: "/category",
      iconName: "SquareIcon"
    }, {
      label: "Current Page",
      iconName: "EyeIcon"
    }]
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "small",
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Category",
      href: "/category"
    }, {
      label: "Current Page"
    }]
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    size: "large",
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Category",
      href: "/category"
    }, {
      label: "Current Page"
    }]
  }
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    separator: ">",
    items: [{
      label: "Home",
      href: "/"
    }, {
      label: "Category",
      href: "/category"
    }, {
      label: "Current Page"
    }]
  }
}`,...t.parameters?.docs?.source}}};const _=["Default","WithIcons","Small","Large","CustomSeparator"],v=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:t,Default:n,Large:l,Small:o,WithIcons:s,__namedExportsOrder:_,default:N},Symbol.toStringTag,{value:"Module"}));export{v as B,t as C,n as D,l as L,o as S,s as W};
