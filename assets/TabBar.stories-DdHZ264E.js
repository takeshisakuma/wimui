"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{Bt as l,t as u}from"./src-BE5jBQ9L.js";import{t as d}from"./Icon-Bz8kwOgZ.js";var f=e({Default:()=>g,Fixed:()=>v,WithoutLabels:()=>_,__namedExportsOrder:()=>y,default:()=>h}),p,m,h,g,_,v,y,b=t((()=>{p=n(r(),1),u(),s(),a(),m=o(),h={title:`Components/Application Shell/TabBar`,component:l,parameters:{layout:`fullscreen`,viewport:{defaultViewport:`mobile1`}},argTypes:{fixed:{control:`boolean`},bordered:{control:`boolean`},glass:{control:`boolean`}}},g={render:e=>{let{t}=i(c),[n,r]=p.useState(`home`);return(0,m.jsxs)(`div`,{style:{height:`100vh`,background:`var(--wim-color-surface-variant)`,position:`relative`},children:[(0,m.jsxs)(`div`,{style:{padding:`20px`},children:[t(`story.tabbar_content_prefix`),` `,n,` `,t(`story.tabbar_tab`)]}),(0,m.jsxs)(l,{...e,style:{},children:[(0,m.jsx)(l.Item,{active:n===`home`,onClick:()=>r(`home`),icon:(0,m.jsx)(d,{name:`CircleIcon`}),label:t(`story.common_home`)}),(0,m.jsx)(l.Item,{active:n===`search`,onClick:()=>r(`search`),icon:(0,m.jsx)(d,{name:`SearchIcon`}),label:t(`story.common_search`)}),(0,m.jsx)(l.Item,{active:n===`notifications`,onClick:()=>r(`notifications`),icon:(0,m.jsx)(d,{name:`StarIcon`}),label:t(`story.common_alerts`),badge:`3`}),(0,m.jsx)(l.Item,{active:n===`profile`,onClick:()=>r(`profile`),icon:(0,m.jsx)(d,{name:`SquareIcon`}),label:t(`story.common_profile`)})]})]})}},_={render:e=>{let{t}=i(c),[n,r]=p.useState(`home`);return(0,m.jsx)(`div`,{style:{height:`100vh`,background:`var(--wim-color-surface-variant)`,position:`relative`},children:(0,m.jsxs)(l,{...e,style:{},children:[(0,m.jsx)(l.Item,{active:n===`home`,onClick:()=>r(`home`),icon:(0,m.jsx)(d,{name:`CircleIcon`}),"aria-label":t(`story.tabbar_aria_home`)}),(0,m.jsx)(l.Item,{active:n===`grid`,onClick:()=>r(`grid`),icon:(0,m.jsx)(d,{name:`MaximizeIcon`}),"aria-label":t(`story.tabbar_aria_grid`)}),(0,m.jsx)(l.Item,{active:n===`search`,onClick:()=>r(`search`),icon:(0,m.jsx)(d,{name:`SearchIcon`}),"aria-label":t(`action.search`)})]})})}},v={render:e=>{let{t}=i(c),[n,r]=p.useState(`home`);return(0,m.jsxs)(`div`,{style:{background:`var(--wim-color-surface-variant)`,minHeight:`100vh`},children:[(0,m.jsxs)(`div`,{style:{padding:`20px`,paddingBottom:`100px`},children:[(0,m.jsx)(`h2`,{children:t(`story.tabbar_fixed_title`)}),(0,m.jsx)(`p`,{children:t(`story.tabbar_fixed_desc`)}),Array.from({length:20}).map((e,n)=>(0,m.jsxs)(`p`,{children:[t(`story.tabbar_line`),` `,n+1,` `,t(`story.tabbar_long_content`)]},n))]}),(0,m.jsxs)(l,{...e,fixed:!0,children:[(0,m.jsx)(l.Item,{active:n===`home`,onClick:()=>r(`home`),icon:(0,m.jsx)(d,{name:`HomeIcon`}),label:t(`story.common_home`)}),(0,m.jsx)(l.Item,{active:n===`search`,onClick:()=>r(`search`),icon:(0,m.jsx)(d,{name:`SearchIcon`}),label:t(`story.common_search`)}),(0,m.jsx)(l.Item,{active:n===`profile`,onClick:()=>r(`profile`),icon:(0,m.jsx)(d,{name:`UserIcon`}),label:t(`story.common_profile`)})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithoutLabels`,`Fixed`]}));b();export{g as Default,v as Fixed,_ as WithoutLabels,y as __namedExportsOrder,h as default,b as n,f as t};