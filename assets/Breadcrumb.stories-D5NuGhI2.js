import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./index-DuEzwbhC.js";import{L as x}from"./Link-DS0M6h93.js";import{I as f}from"./Icon-CgqnfbzT.js";import{u as t}from"./useTranslation-0fSK9VPD.js";const c=({items:n,separator:a,size:e="medium",className:h})=>{const{t:b}=t(),v=r.jsx(f,{name:"ChevronRightIcon",size:e,className:"wim-breadcrumb__separator-icon"}),N=o=>{const _=o.currentTarget,s=Array.from(_.querySelectorAll(".wim-breadcrumb__link, .wim-breadcrumb__label--current")),y=s.indexOf(document.activeElement);if(y!==-1){if(o.key==="ArrowRight"){o.preventDefault();const p=(y+1)%s.length;s[p].focus()}else if(o.key==="ArrowLeft"){o.preventDefault();const p=(y-1+s.length)%s.length;s[p].focus()}}};return r.jsx("nav",{"aria-label":b("a11y_breadcrumb"),className:g("wim-breadcrumb",`wim-breadcrumb--${e==="small"?"sm":e==="large"?"lg":"md"}`,h),children:r.jsx("ol",{className:"wim-breadcrumb__list",onKeyDown:N,children:n.map((o,_)=>{const s=_===n.length-1;return r.jsxs("li",{className:"wim-breadcrumb__item",children:[r.jsx("div",{className:"wim-breadcrumb__content",children:o.href&&!s?r.jsx(x,{href:o.href,size:e,priority:"secondary",iconName:o.iconName,className:"wim-breadcrumb__link",children:b(o.label)}):r.jsxs("span",{className:g("wim-breadcrumb__label",s&&"wim-breadcrumb__label--current"),"aria-current":s?"page":void 0,tabIndex:s?0:void 0,role:s?"link":void 0,children:[o.iconName&&r.jsx(f,{name:o.iconName,size:e,className:"wim-breadcrumb__label-icon"}),b(o.label)]})}),!s&&r.jsx("span",{className:"wim-breadcrumb__separator","aria-hidden":"true",children:a||v})]},_)})})})};c.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}}]}}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const w={title:"Components/Navigation Elements/Breadcrumb",component:c,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]}}},d={render:function(a){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(c,{...a,items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},m={render:function(a){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(c,{...a,items:[{label:e("story_breadcrumb_home"),href:"/",iconName:"CircleIcon"},{label:e("story_breadcrumb_category"),href:"/category",iconName:"SquareIcon"},{label:e("story_breadcrumb_current"),iconName:"EyeIcon"}]})}},l={render:function(a){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(c,{...a,size:"small",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},i={render:function(a){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(c,{...a,size:"large",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},u={render:function(a){const{t:e}=t(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(c,{...a,separator:">",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};const R=["Default","WithIcons","Small","Large","CustomSeparator"],q=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:u,Default:d,Large:i,Small:l,WithIcons:m,__namedExportsOrder:R,default:w},Symbol.toStringTag,{value:"Module"}));export{q as B,u as C,d as D,i as L,l as S,m as W};
