"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Icon-TGLZuM2d.js";import{n as d,t as f}from"./TabBar-C32sJPbv.js";var p=n({Default:()=>_,Fixed:()=>y,WithoutLabels:()=>v,__namedExportsOrder:()=>b,default:()=>g}),m,h,g,_,v,y,b;function x(){return(x=t((()=>{m=e(r(),1),d(),a(),o(),l(),h=c(),g={title:`Components/Application Shell/TabBar`,component:f,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`mobile1`}},argTypes:{fixed:{control:`boolean`},bordered:{control:`boolean`},glass:{control:`boolean`}}},_={render:e=>{let{t}=i(s),[n,r]=m.useState(`home`);return(0,h.jsxs)(`div`,{style:{height:`100vh`,background:`var(--wim-color-surface-variant)`,position:`relative`},children:[(0,h.jsxs)(`div`,{style:{padding:`20px`},children:[t(`story.tabbar_content_prefix`),` `,n,` `,t(`story.tabbar_tab`)]}),(0,h.jsxs)(f,{...e,style:{},children:[(0,h.jsx)(f.Item,{active:n===`home`,onClick:()=>r(`home`),icon:(0,h.jsx)(u,{name:`CircleIcon`}),label:t(`story.common_home`)}),(0,h.jsx)(f.Item,{active:n===`search`,onClick:()=>r(`search`),icon:(0,h.jsx)(u,{name:`SearchIcon`}),label:t(`story.common_search`)}),(0,h.jsx)(f.Item,{active:n===`notifications`,onClick:()=>r(`notifications`),icon:(0,h.jsx)(u,{name:`StarIcon`}),label:t(`story.common_alerts`),badge:`3`}),(0,h.jsx)(f.Item,{active:n===`profile`,onClick:()=>r(`profile`),icon:(0,h.jsx)(u,{name:`SquareIcon`}),label:t(`story.common_profile`)})]})]})}},v={render:e=>{let{t}=i(s),[n,r]=m.useState(`home`);return(0,h.jsx)(`div`,{style:{height:`100vh`,background:`var(--wim-color-surface-variant)`,position:`relative`},children:(0,h.jsxs)(f,{...e,style:{},children:[(0,h.jsx)(f.Item,{active:n===`home`,onClick:()=>r(`home`),icon:(0,h.jsx)(u,{name:`CircleIcon`}),"aria-label":t(`story.tabbar_aria_home`)}),(0,h.jsx)(f.Item,{active:n===`grid`,onClick:()=>r(`grid`),icon:(0,h.jsx)(u,{name:`MaximizeIcon`}),"aria-label":t(`story.tabbar_aria_grid`)}),(0,h.jsx)(f.Item,{active:n===`search`,onClick:()=>r(`search`),icon:(0,h.jsx)(u,{name:`SearchIcon`}),"aria-label":t(`action.search`)})]})})}},y={render:e=>{let{t}=i(s),[n,r]=m.useState(`home`);return(0,h.jsxs)(`div`,{style:{background:`var(--wim-color-surface-variant)`,minHeight:`100vh`},children:[(0,h.jsxs)(`div`,{style:{padding:`20px`,paddingBottom:`100px`},children:[(0,h.jsx)(`h2`,{children:t(`story.tabbar_fixed_title`)}),(0,h.jsx)(`p`,{children:t(`story.tabbar_fixed_desc`)}),Array.from({length:20}).map((e,n)=>(0,h.jsxs)(`p`,{children:[t(`story.tabbar_line`),` `,n+1,` `,t(`story.tabbar_long_content`)]},n))]}),(0,h.jsxs)(f,{...e,fixed:!0,children:[(0,h.jsx)(f.Item,{active:n===`home`,onClick:()=>r(`home`),icon:(0,h.jsx)(u,{name:`HomeIcon`}),label:t(`story.common_home`)}),(0,h.jsx)(f.Item,{active:n===`search`,onClick:()=>r(`search`),icon:(0,h.jsx)(u,{name:`SearchIcon`}),label:t(`story.common_search`)}),(0,h.jsx)(f.Item,{active:n===`profile`,onClick:()=>r(`profile`),icon:(0,h.jsx)(u,{name:`UserIcon`}),label:t(`story.common_profile`)})]})]})}},b=[`Default`,`WithoutLabels`,`Fixed`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      height: "100vh",
      background: "var(--wim-color-surface-variant)",
      position: "relative"
    }}>
        <div style={{
        padding: "20px"
      }}>
          {t("story.tabbar_content_prefix")} {activeTab} {t("story.tabbar_tab")}
        </div>
        <TabBar {...args} style={{}}>
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="CircleIcon" />} label={t("story.common_home")} />
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} label={t("story.common_search")} />
          <TabBar.Item active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} icon={<Icon name="StarIcon" />} label={t("story.common_alerts")} badge="3" />
          <TabBar.Item active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Icon name="SquareIcon" />} label={t("story.common_profile")} />
        </TabBar>
      </div>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      height: "100vh",
      background: "var(--wim-color-surface-variant)",
      position: "relative"
    }}>
        <TabBar {...args} style={{}}>
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="CircleIcon" />} aria-label={t("story.tabbar_aria_home")} />
          <TabBar.Item active={activeTab === "grid"} onClick={() => setActiveTab("grid")} icon={<Icon name="MaximizeIcon" />} aria-label={t("story.tabbar_aria_grid")} />
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} aria-label={t("action.search")} />
        </TabBar>
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      background: "var(--wim-color-surface-variant)",
      minHeight: "100vh"
    }}>
        <div style={{
        padding: "20px",
        paddingBottom: "100px"
      }}>
          <h2>{t("story.tabbar_fixed_title")}</h2>
          <p>{t("story.tabbar_fixed_desc")}</p>
          {Array.from({
          length: 20
        }).map((_, i) => <p key={i}>
              {t("story.tabbar_line")} {i + 1} {t("story.tabbar_long_content")}
            </p>)}
        </div>
        <TabBar {...args} fixed>
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="HomeIcon" />} label={t("story.common_home")} />
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} label={t("story.common_search")} />
          <TabBar.Item active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Icon name="UserIcon" />} label={t("story.common_profile")} />
        </TabBar>
      </div>;
  }
}`,...y.parameters?.docs?.source}}}})))()}export{x as i,p as n,v as r,_ as t};