import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./index-DpmaVNUM.js";import{L as x}from"./Link-CD2T4XYA.js";import{I as h}from"./Icon-BJjW5_M0.js";import{u as c}from"./useTranslation-DPglThRD.js";import{A as d}from"./iframe-BK1fL04m.js";const o=({items:s,separator:t,size:e="medium",className:N})=>{const{t:y}=c(),S=r.jsx(h,{name:"ChevronRightIcon",size:e,className:"wim-breadcrumb__separator-icon"}),A=a=>{const _=a.currentTarget,n=Array.from(_.querySelectorAll(".wim-breadcrumb__link, .wim-breadcrumb__label--current")),p=n.indexOf(document.activeElement);if(p!==-1){if(a.key==="ArrowRight"){a.preventDefault();const f=(p+1)%n.length;n[f].focus()}else if(a.key==="ArrowLeft"){a.preventDefault();const f=(p-1+n.length)%n.length;n[f].focus()}}};return r.jsx("nav",{"aria-label":y("a11y_breadcrumb"),className:g("wim-breadcrumb",`wim-breadcrumb--${e==="small"?"sm":e==="large"?"lg":"md"}`,N),onKeyDown:A,children:r.jsx("ol",{className:"wim-breadcrumb__list",children:s.map((a,_)=>{const n=_===s.length-1;return r.jsxs("li",{className:"wim-breadcrumb__item",children:[r.jsx("div",{className:"wim-breadcrumb__content",children:a.href&&!n?r.jsx(x,{href:a.href,size:e,priority:"secondary",iconName:a.iconName,className:"wim-breadcrumb__link",children:y(a.label)}):r.jsxs("span",{className:g("wim-breadcrumb__label",n&&"wim-breadcrumb__label--current"),"aria-current":n?"page":void 0,tabIndex:n?0:void 0,role:n?"link":void 0,children:[a.iconName&&r.jsx(h,{name:a.iconName,size:e,className:"wim-breadcrumb__label-icon"}),y(a.label)]})}),!n&&r.jsx("span",{className:"wim-breadcrumb__separator","aria-hidden":"true",children:t||S})]},_)})})})};o.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}}]}}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Components/Navigation Elements/Breadcrumb",component:o,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]}}},m={render:function(t){const{t:e}=c(d);return r.jsx(o,{...t,items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},l={render:function(t){const{t:e}=c(d);return r.jsx(o,{...t,items:[{label:e("story_breadcrumb_home"),href:"/",iconName:"CircleIcon"},{label:e("story_breadcrumb_category"),href:"/category",iconName:"SquareIcon"},{label:e("story_breadcrumb_current"),iconName:"EyeIcon"}]})}},u={render:function(t){const{t:e}=c(d);return r.jsx(o,{...t,size:"small",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},i={render:function(t){const{t:e}=c(d);return r.jsx(o,{...t,size:"large",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},b={render:function(t){const{t:e}=c(d);return r.jsx(o,{...t,separator:">",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} items={[{
      label: t("story_breadcrumb_home"),
      href: "/"
    }, {
      label: t("story_breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story_breadcrumb_current")
    }]} />;
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} items={[{
      label: t("story_breadcrumb_home"),
      href: "/",
      iconName: "CircleIcon"
    }, {
      label: t("story_breadcrumb_category"),
      href: "/category",
      iconName: "SquareIcon"
    }, {
      label: t("story_breadcrumb_current"),
      iconName: "EyeIcon"
    }]} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} size="small" items={[{
      label: t("story_breadcrumb_home"),
      href: "/"
    }, {
      label: t("story_breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story_breadcrumb_current")
    }]} />;
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} size="large" items={[{
      label: t("story_breadcrumb_home"),
      href: "/"
    }, {
      label: t("story_breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story_breadcrumb_current")
    }]} />;
  }
}`,...i.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} separator=">" items={[{
      label: t("story_breadcrumb_home"),
      href: "/"
    }, {
      label: t("story_breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story_breadcrumb_current")
    }]} />;
  }
}`,...b.parameters?.docs?.source}}};const R=["Default","WithIcons","Small","Large","CustomSeparator"],T=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:b,Default:m,Large:i,Small:u,WithIcons:l,__namedExportsOrder:R,default:w},Symbol.toStringTag,{value:"Module"}));export{T as B,b as C,m as D,i as L,u as S,l as W};
