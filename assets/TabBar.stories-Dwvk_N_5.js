import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m,A as v}from"./iframe-D0D_YrNH.js";import{T as t}from"./TabBar-Bp8CZGv_.js";import{I as n}from"./Icon-DBjc-Qgx.js";import{u as d}from"./useTranslation--fMTB-_A.js";const h={title:"Components/Application Shell/TabBar",component:t,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},argTypes:{fixed:{control:"boolean"},bordered:{control:"boolean"},glass:{control:"boolean"}}},i={render:c=>{const{t:a}=d(v),[o,r]=m.useState("home");return e.jsxs("div",{style:{height:"100vh",background:"var(--wim-color-surface-variant)",position:"relative"},children:[e.jsxs("div",{style:{padding:"20px"},children:[a("story_tabbar_content_prefix")," ",o," ",a("story_tabbar_tab")]}),e.jsxs(t,{...c,style:{},children:[e.jsx(t.Item,{active:o==="home",onClick:()=>r("home"),icon:e.jsx(n,{name:"CircleIcon"}),label:a("story_common_home")}),e.jsx(t.Item,{active:o==="search",onClick:()=>r("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:a("story_common_search")}),e.jsx(t.Item,{active:o==="notifications",onClick:()=>r("notifications"),icon:e.jsx(n,{name:"StarIcon"}),label:a("story_common_alerts"),badge:"3"}),e.jsx(t.Item,{active:o==="profile",onClick:()=>r("profile"),icon:e.jsx(n,{name:"SquareIcon"}),label:a("story_common_profile")})]})]})}},s={render:c=>{const[a,o]=m.useState("home");return e.jsx("div",{style:{height:"100vh",background:"var(--wim-color-surface-variant)",position:"relative"},children:e.jsxs(t,{...c,style:{},children:[e.jsx(t.Item,{active:a==="home",onClick:()=>o("home"),icon:e.jsx(n,{name:"CircleIcon"}),"aria-label":"Home"}),e.jsx(t.Item,{active:a==="grid",onClick:()=>o("grid"),icon:e.jsx(n,{name:"MaximizeIcon"}),"aria-label":"Grid"}),e.jsx(t.Item,{active:a==="search",onClick:()=>o("search"),icon:e.jsx(n,{name:"SearchIcon"}),"aria-label":"Search"})]})})}},l={render:c=>{const{t:a}=d(v),[o,r]=m.useState("home");return e.jsxs("div",{style:{background:"var(--wim-color-surface-variant)",minHeight:"100vh"},children:[e.jsxs("div",{style:{padding:"20px",paddingBottom:"100px"},children:[e.jsx("h2",{children:a("story_tabbar_fixed_title")}),e.jsx("p",{children:a("story_tabbar_fixed_desc")}),Array.from({length:20}).map((p,b)=>e.jsxs("p",{children:[a("story_tabbar_line")," ",b+1," ",a("story_tabbar_long_content")]},b))]}),e.jsxs(t,{...c,fixed:!0,children:[e.jsx(t.Item,{active:o==="home",onClick:()=>r("home"),icon:e.jsx(n,{name:"HomeIcon"}),label:a("story_common_home")}),e.jsx(t.Item,{active:o==="search",onClick:()=>r("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:a("story_common_search")}),e.jsx(t.Item,{active:o==="profile",onClick:()=>r("profile"),icon:e.jsx(n,{name:"UserIcon"}),label:a("story_common_profile")})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
          {t("story_tabbar_content_prefix")} {activeTab} {t("story_tabbar_tab")}
        </div>
        <TabBar {...args} style={{}}>
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="CircleIcon" />} label={t("story_common_home")} />
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} label={t("story_common_search")} />
          <TabBar.Item active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} icon={<Icon name="StarIcon" />} label={t("story_common_alerts")} badge="3" />
          <TabBar.Item active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Icon name="SquareIcon" />} label={t("story_common_profile")} />
        </TabBar>
      </div>;
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      height: "100vh",
      background: "var(--wim-color-surface-variant)",
      position: "relative"
    }}>
        <TabBar {...args} style={{}}>
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="CircleIcon" />} aria-label="Home" />
          <TabBar.Item active={activeTab === "grid"} onClick={() => setActiveTab("grid")} icon={<Icon name="MaximizeIcon" />} aria-label="Grid" />
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} aria-label="Search" />
        </TabBar>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
          <h2>{t("story_tabbar_fixed_title")}</h2>
          <p>{t("story_tabbar_fixed_desc")}</p>
          {Array.from({
          length: 20
        }).map((_, i) => <p key={i}>
              {t("story_tabbar_line")} {i + 1} {t("story_tabbar_long_content")}
            </p>)}
        </div>
        <TabBar {...args} fixed>
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="HomeIcon" />} label={t("story_common_home")} />
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} label={t("story_common_search")} />
          <TabBar.Item active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Icon name="UserIcon" />} label={t("story_common_profile")} />
        </TabBar>
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const _=["Default","WithoutLabels","Fixed"],f=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Fixed:l,WithoutLabels:s,__namedExportsOrder:_,default:h},Symbol.toStringTag,{value:"Module"}));export{i as D,f as T,s as W};
