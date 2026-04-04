import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as _}from"./index-K9UxIAwh.js";import{L as x}from"./Link-BXuNW01e.js";import{I as g}from"./Icon-BhqaBnH4.js";import{u as c}from"./useTranslation-Cn4N2seM.js";import{A as b}from"./iframe-Bn5mqC8Q.js";const s=({items:o,separator:t,size:e="md",className:h,ariaLabel:N})=>{const{t:S}=c("common"),R=N??S("a11y.breadcrumb"),A=r.jsx(g,{name:"ChevronRightIcon",size:e,className:"wim-breadcrumb__separator-icon"}),w=a=>{const p=a.currentTarget,n=Array.from(p.querySelectorAll(".wim-breadcrumb__link, .wim-breadcrumb__label--current")),y=n.indexOf(document.activeElement);if(y!==-1){if(a.key==="ArrowRight"){a.preventDefault();const f=(y+1)%n.length;n[f].focus()}else if(a.key==="ArrowLeft"){a.preventDefault();const f=(y-1+n.length)%n.length;n[f].focus()}}};return r.jsx("nav",{"aria-label":R,className:_("wim-breadcrumb",`wim-breadcrumb--${e}`,h),onKeyDown:w,children:r.jsx("ol",{className:"wim-breadcrumb__list",children:o.map((a,p)=>{const n=p===o.length-1;return r.jsxs("li",{className:"wim-breadcrumb__item",children:[r.jsx("div",{className:"wim-breadcrumb__content",children:a.href&&!n?r.jsx(x,{href:a.href,size:e,priority:"secondary",iconName:a.iconName,className:"wim-breadcrumb__link",children:a.label}):r.jsxs("span",{className:_("wim-breadcrumb__label",n&&"wim-breadcrumb__label--current"),"aria-current":n?"page":void 0,tabIndex:n?0:void 0,role:n?"link":void 0,children:[a.iconName&&r.jsx(g,{name:a.iconName,size:e,className:"wim-breadcrumb__label-icon"}),a.label]})}),!n&&r.jsx("span",{className:"wim-breadcrumb__separator","aria-hidden":"true",children:t||A})]},p)})})})};s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: React.ReactNode;
  href?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
}`,signature:{properties:[{key:"label",value:{name:"ReactReactNode",raw:"React.ReactNode",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}}]}}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const L={title:"Components/Navigation Elements/Breadcrumb",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"radio",options:["sm","md","lg"]}}},m={render:function(t){const{t:e}=c(b);return r.jsx(s,{...t,items:[{label:e("story.breadcrumb_home"),href:"/"},{label:e("story.breadcrumb_category"),href:"/category"},{label:e("story.breadcrumb_current")}]})}},l={render:function(t){const{t:e}=c(b);return r.jsx(s,{...t,items:[{label:e("story.breadcrumb_home"),href:"/",iconName:"CircleIcon"},{label:e("story.breadcrumb_category"),href:"/category",iconName:"SquareIcon"},{label:e("story.breadcrumb_current"),iconName:"EyeIcon"}]})}},u={render:function(t){const{t:e}=c(b);return r.jsx(s,{...t,size:"sm",items:[{label:e("story.breadcrumb_home"),href:"/"},{label:e("story.breadcrumb_category"),href:"/category"},{label:e("story.breadcrumb_current")}]})}},d={render:function(t){const{t:e}=c(b);return r.jsx(s,{...t,size:"lg",items:[{label:e("story.breadcrumb_home"),href:"/"},{label:e("story.breadcrumb_category"),href:"/category"},{label:e("story.breadcrumb_current")}]})}},i={render:function(t){const{t:e}=c(b);return r.jsx(s,{...t,separator:">",items:[{label:e("story.breadcrumb_home"),href:"/"},{label:e("story.breadcrumb_category"),href:"/category"},{label:e("story.breadcrumb_current")}]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} items={[{
      label: t("story.breadcrumb_home"),
      href: "/"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story.breadcrumb_current")
    }]} />;
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} items={[{
      label: t("story.breadcrumb_home"),
      href: "/",
      iconName: "CircleIcon"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category",
      iconName: "SquareIcon"
    }, {
      label: t("story.breadcrumb_current"),
      iconName: "EyeIcon"
    }]} />;
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} size="sm" items={[{
      label: t("story.breadcrumb_home"),
      href: "/"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story.breadcrumb_current")
    }]} />;
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} size="lg" items={[{
      label: t("story.breadcrumb_home"),
      href: "/"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story.breadcrumb_current")
    }]} />;
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Breadcrumb {...args} separator=">" items={[{
      label: t("story.breadcrumb_home"),
      href: "/"
    }, {
      label: t("story.breadcrumb_category"),
      href: "/category"
    }, {
      label: t("story.breadcrumb_current")
    }]} />;
  }
}`,...i.parameters?.docs?.source}}};const v=["Default","WithIcons","Small","Large","CustomSeparator"],B=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:i,Default:m,Large:d,Small:u,WithIcons:l,__namedExportsOrder:v,default:L},Symbol.toStringTag,{value:"Module"}));export{B,i as C,m as D,d as L,u as S,l as W};
