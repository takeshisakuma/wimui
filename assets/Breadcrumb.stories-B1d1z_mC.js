import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-Ckw0h7AD.js";import{L as w}from"./Link-BqkixPvo.js";import{I as g}from"./Icon-mnVo4eg5.js";import{u as c}from"./useTranslation-BH3LN071.js";const s=({items:t,separator:o,size:e="medium",className:h})=>{const{t:_}=c(),N=r.jsx(g,{name:"ChevronRightIcon",size:e,className:"wim-breadcrumb__separator-icon"}),x=a=>{const i=a.currentTarget,n=Array.from(i.querySelectorAll(".wim-breadcrumb__link, .wim-breadcrumb__label--current")),p=n.indexOf(document.activeElement);if(p!==-1){if(a.key==="ArrowRight"){a.preventDefault();const y=(p+1)%n.length;n[y].focus()}else if(a.key==="ArrowLeft"){a.preventDefault();const y=(p-1+n.length)%n.length;n[y].focus()}}};return r.jsx("nav",{"aria-label":_("a11y_breadcrumb"),className:f("wim-breadcrumb",`wim-breadcrumb--${e==="small"?"sm":e==="large"?"lg":"md"}`,h),children:r.jsx("ol",{className:"wim-breadcrumb__list",onKeyDown:x,children:t.map((a,i)=>{const n=i===t.length-1;return r.jsxs("li",{className:"wim-breadcrumb__item",children:[r.jsx("div",{className:"wim-breadcrumb__content",children:a.href&&!n?r.jsx(w,{href:a.href,size:e,priority:"secondary",iconName:a.iconName,className:"wim-breadcrumb__link",children:_(a.label)}):r.jsxs("span",{className:f("wim-breadcrumb__label",n&&"wim-breadcrumb__label--current"),"aria-current":n?"page":void 0,tabIndex:n?0:void 0,children:[a.iconName&&r.jsx(g,{name:a.iconName,size:e,className:"wim-breadcrumb__label-icon"}),_(a.label)]})}),!n&&r.jsx("span",{className:"wim-breadcrumb__separator","aria-hidden":"true",children:o||N})]},i)})})})};s.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}}]}}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const R={title:"Components/Navigation Elements/Breadcrumb",component:s,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]}}},m={render:function(o){const{t:e}=c(["docs","common","components"]);return r.jsx(s,{...o,items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},l={render:function(o){const{t:e}=c(["docs","common","components"]);return r.jsx(s,{...o,items:[{label:e("story_breadcrumb_home"),href:"/",iconName:"CircleIcon"},{label:e("story_breadcrumb_category"),href:"/category",iconName:"SquareIcon"},{label:e("story_breadcrumb_current"),iconName:"EyeIcon"}]})}},u={render:function(o){const{t:e}=c(["docs","common","components"]);return r.jsx(s,{...o,size:"small",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},d={render:function(o){const{t:e}=c(["docs","common","components"]);return r.jsx(s,{...o,size:"large",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},b={render:function(o){const{t:e}=c(["docs","common","components"]);return r.jsx(s,{...o,separator:">",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
    } = useTranslation(["docs", "common", "components"]);
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
    } = useTranslation(["docs", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...b.parameters?.docs?.source}}};const j=["Default","WithIcons","Small","Large","CustomSeparator"],q=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:b,Default:m,Large:d,Small:u,WithIcons:l,__namedExportsOrder:j,default:R},Symbol.toStringTag,{value:"Module"}));export{q as B,b as C,m as D,d as L,u as S,l as W};
