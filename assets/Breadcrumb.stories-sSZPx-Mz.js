import{j as e}from"./jsx-runtime-u17CrQMm.js";import{P as a}from"./index-BMB_0ZU1.js";import{L as C}from"./Link-BHlt52AM.js";import{I as g}from"./Icon-Bn2KNppe.js";import{u as N}from"./useTranslation-DUSmElNm.js";const i=({items:u,separator:b,size:m="medium",className:f})=>{const{t:p}=N(),y=`wim-breadcrumb--${{small:"sm",medium:"md",large:"lg"}[m]}`,h=e.jsx(g,{name:"ChevronRightIcon",size:m,className:"wim-breadcrumb__separator-icon"});return e.jsx("nav",{"aria-label":"Breadcrumb",className:["wim-breadcrumb",y,f].filter(Boolean).join(" "),children:e.jsx("ol",{className:"wim-breadcrumb__list",children:u.map((r,d)=>{const c=d===u.length-1;return e.jsxs("li",{className:"wim-breadcrumb__item",children:[e.jsx("div",{className:"wim-breadcrumb__content",children:r.href&&!c?e.jsx(C,{href:r.href,size:m,priority:"secondary",iconName:r.iconName,className:"wim-breadcrumb__link",children:p(r.label)}):e.jsxs("span",{className:["wim-breadcrumb__label",c?"wim-breadcrumb__label--current":""].filter(Boolean).join(" "),"aria-current":c?"page":void 0,children:[r.iconName&&e.jsx(g,{name:r.iconName,size:m,className:"wim-breadcrumb__label-icon"}),p(r.label)]})}),!c&&e.jsx("span",{className:"wim-breadcrumb__separator","aria-hidden":"true",children:b||h})]},d)})})})};i.propTypes={items:a.arrayOf(a.shape({label:a.string.isRequired,href:a.string,iconName:a.string})).isRequired,separator:a.node,size:a.oneOf(["small","medium","large"]),className:a.string};i.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{\r
    label: string;\r
    href?: string;\r
    iconName?: React.ComponentProps<typeof Icon>["name"];\r
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}}]}}],raw:"BreadcrumbItem[]"},description:"",type:{name:"arrayOf",value:{name:"shape",value:{label:{name:"string",required:!0},href:{name:"string",required:!1},iconName:{name:"string",required:!1}}}}},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"",type:{name:"node"}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},className:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}}}};const _={title:"Component/Navigation/Breadcrumb",component:i,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]}}},n={args:{items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Current Page"}]}},s={args:{items:[{label:"Home",href:"/",iconName:"CircleIcon"},{label:"Category",href:"/category",iconName:"SquareIcon"},{label:"Current Page",iconName:"EyeIcon"}]}},o={args:{size:"small",items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Current Page"}]}},l={args:{size:"large",items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Current Page"}]}},t={args:{separator:">",items:[{label:"Home",href:"/"},{label:"Category",href:"/category"},{label:"Current Page"}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const v=["Default","WithIcons","Small","Large","CustomSeparator"],x=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:t,Default:n,Large:l,Small:o,WithIcons:s,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{x as B,t as C,n as D,l as L,o as S,s as W};
