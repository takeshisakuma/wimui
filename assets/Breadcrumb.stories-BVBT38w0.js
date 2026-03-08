import{j as r}from"./jsx-runtime-u17CrQMm.js";import{c as p}from"./index-CrdPdL0-.js";import{L as h}from"./Link-BGKFgpi1.js";import{I as y}from"./Icon-DtFbPp_r.js";import{u as s}from"./useTranslation-DLjll_Fb.js";const t=({items:n,separator:a,size:e="medium",className:g})=>{const{t:i}=s(),f=r.jsx(y,{name:"ChevronRightIcon",size:e,className:"wim-breadcrumb__separator-icon"});return r.jsx("nav",{"aria-label":i("a11y_breadcrumb"),className:p("wim-breadcrumb",`wim-breadcrumb--${e==="small"?"sm":e==="large"?"lg":"md"}`,g),children:r.jsx("ol",{className:"wim-breadcrumb__list",children:n.map((o,_)=>{const b=_===n.length-1;return r.jsxs("li",{className:"wim-breadcrumb__item",children:[r.jsx("div",{className:"wim-breadcrumb__content",children:o.href&&!b?r.jsx(h,{href:o.href,size:e,priority:"secondary",iconName:o.iconName,className:"wim-breadcrumb__link",children:i(o.label)}):r.jsxs("span",{className:p("wim-breadcrumb__label",b&&"wim-breadcrumb__label--current"),"aria-current":b?"page":void 0,children:[o.iconName&&r.jsx(y,{name:o.iconName,size:e,className:"wim-breadcrumb__label-icon"}),i(o.label)]})}),!b&&r.jsx("span",{className:"wim-breadcrumb__separator","aria-hidden":"true",children:a||f})]},_)})})})};t.__docgenInfo={description:"",methods:[],displayName:"Breadcrumb",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  label: string;
  href?: string;
  iconName?: React.ComponentProps<typeof Icon>["name"];
}`,signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"iconName",value:{name:'ReactComponentProps["name"]',raw:'React.ComponentProps<typeof Icon>["name"]',required:!1}}]}}],raw:"BreadcrumbItem[]"},description:""},separator:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"",defaultValue:{value:'"medium"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Components/Navigation Elements/Breadcrumb",component:t,parameters:{layout:"centered"},argTypes:{size:{control:"select",options:["small","medium","large"]}}},c={render:function(a){const{t:e}=s(["docs","common","components"]);return r.jsx(t,{...a,items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},m={render:function(a){const{t:e}=s(["docs","common","components"]);return r.jsx(t,{...a,items:[{label:e("story_breadcrumb_home"),href:"/",iconName:"CircleIcon"},{label:e("story_breadcrumb_category"),href:"/category",iconName:"SquareIcon"},{label:e("story_breadcrumb_current"),iconName:"EyeIcon"}]})}},l={render:function(a){const{t:e}=s(["docs","common","components"]);return r.jsx(t,{...a,size:"small",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},u={render:function(a){const{t:e}=s(["docs","common","components"]);return r.jsx(t,{...a,size:"large",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}},d={render:function(a){const{t:e}=s(["docs","common","components"]);return r.jsx(t,{...a,separator:">",items:[{label:e("story_breadcrumb_home"),href:"/"},{label:e("story_breadcrumb_category"),href:"/category"},{label:e("story_breadcrumb_current")}]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const j=["Default","WithIcons","Small","Large","CustomSeparator"],v=Object.freeze(Object.defineProperty({__proto__:null,CustomSeparator:d,Default:c,Large:u,Small:l,WithIcons:m,__namedExportsOrder:j,default:N},Symbol.toStringTag,{value:"Module"}));export{v as B,d as C,c as D,u as L,l as S,m as W};
