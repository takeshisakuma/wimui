"use client";
import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-BGJ90fIb.js";import{n as r,t as i}from"./useTranslation-CpMdOj2B.js";import{n as a,t as o}from"./i18nConstants-DbPgW6Wr.js";import{t as s}from"./jsx-runtime-MKhVqBIO.js";import{n as c,t as l}from"./Breadcrumb-C8MXJjKn.js";var u=t({Collapsed:()=>v,CustomSeparator:()=>_,Default:()=>p,Large:()=>g,Small:()=>h,WithIcons:()=>m,__namedExportsOrder:()=>y,default:()=>f}),d,f,p,m,h,g,_,v,y;function b(){return(b=e((()=>{n(),i(),a(),c(),d=s(),f={title:`Components/Navigation Elements/Breadcrumb`,component:l,parameters:{layout:`centered`},argTypes:{size:{control:`radio`,options:[`sm`,`md`,`lg`]},overflow:{control:`radio`,options:[`wrap`,`collapse`]}}},p={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},m={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,items:[{label:t(`story.breadcrumb_home`),href:`/`,iconName:`CircleIcon`},{label:t(`story.breadcrumb_category`),href:`/category`,iconName:`SquareIcon`},{label:t(`story.breadcrumb_current`),iconName:`EyeIcon`}]})}},h={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,size:`sm`,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},g={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,size:`lg`,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},_={render:function(e){let{t}=r(o);return(0,d.jsx)(l,{...e,separator:`>`,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_category`),href:`/category`},{label:t(`story.breadcrumb_current`)}]})}},v={args:{overflow:`collapse`},render:function(e){let{t}=r(o);return(0,d.jsx)(`div`,{style:{width:`min(var(--wim-width-md), 100vw - 2rem)`},children:(0,d.jsx)(l,{...e,items:[{label:t(`story.breadcrumb_home`),href:`/`},{label:t(`story.breadcrumb_shop_women`),href:`/women`},{label:t(`story.breadcrumb_shop_shoes`),href:`/women/shoes`},{label:t(`story.breadcrumb_shop_running`),href:`/women/shoes/running`},{label:t(`story.breadcrumb_shop_trail`)}]})})}},y=[`Default`,`WithIcons`,`Small`,`Large`,`CustomSeparator`,`Collapsed`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    overflow: "collapse"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return (
      // 狭い画面では器を画面に収める（100% は、中身で幅が決まる親に対して循環する）
      <div style={{
        width: "min(var(--wim-width-md), 100vw - 2rem)"
      }}>
        <Breadcrumb {...args} items={[{
          label: t("story.breadcrumb_home"),
          href: "/"
        }, {
          label: t("story.breadcrumb_shop_women"),
          href: "/women"
        }, {
          label: t("story.breadcrumb_shop_shoes"),
          href: "/women/shoes"
        }, {
          label: t("story.breadcrumb_shop_running"),
          href: "/women/shoes/running"
        }, {
          label: t("story.breadcrumb_shop_trail")
        }]} />
      </div>
    );
  }
}`,...v.parameters?.docs?.source},description:{story:`1 行に入らないパス。先頭と現在のページを残し、間の階層を「…」にまとめる（器は 320px）`,...v.parameters?.docs?.description}}}})))()}export{g as a,b as c,p as i,v as n,h as o,_ as r,m as s,u as t};