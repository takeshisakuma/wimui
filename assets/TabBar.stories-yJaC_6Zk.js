import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-B1TToC6s.js";import{T as a}from"./TabBar-CpAazB0r.js";import{I as n}from"./Icon-Cun9TPjE.js";import{u as b}from"./useTranslation-CHJ-TYb-.js";const _={title:"Components/Application Shell/TabBar",component:a,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},argTypes:{fixed:{control:"boolean"},bordered:{control:"boolean"},glass:{control:"boolean"}}},s={render:r=>{const{t:o}=b(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[t,c]=m.useState("home");return e.jsxs("div",{style:{height:"100vh",background:"#f4f4f5",position:"relative"},children:[e.jsxs("div",{style:{padding:"20px"},children:[o("story_tabbar_content_prefix")," ",t," ",o("story_tabbar_tab")]}),e.jsxs(a,{...r,style:{},children:[e.jsx(a.Item,{active:t==="home",onClick:()=>c("home"),icon:e.jsx(n,{name:"CircleIcon"}),label:o("story_common_home")}),e.jsx(a.Item,{active:t==="search",onClick:()=>c("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:o("story_common_search")}),e.jsx(a.Item,{active:t==="notifications",onClick:()=>c("notifications"),icon:e.jsx(n,{name:"StarIcon"}),label:o("story_common_alerts"),badge:"3"}),e.jsx(a.Item,{active:t==="profile",onClick:()=>c("profile"),icon:e.jsx(n,{name:"SquareIcon"}),label:o("story_common_profile")})]})]})}},i={render:r=>{const[o,t]=m.useState("home");return e.jsx("div",{style:{height:"100vh",background:"#f4f4f5",position:"relative"},children:e.jsxs(a,{...r,style:{},children:[e.jsx(a.Item,{active:o==="home",onClick:()=>t("home"),icon:e.jsx(n,{name:"CircleIcon"})}),e.jsx(a.Item,{active:o==="grid",onClick:()=>t("grid"),icon:e.jsx(n,{name:"MaximizeIcon"})}),e.jsx(a.Item,{active:o==="search",onClick:()=>t("search"),icon:e.jsx(n,{name:"SearchIcon"})})]})})}},l={render:r=>{const{t:o}=b(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[t,c]=m.useState("home");return e.jsxs("div",{style:{background:"#f4f4f5",minHeight:"100vh"},children:[e.jsxs("div",{style:{padding:"20px",paddingBottom:"100px"},children:[e.jsx("h2",{children:o("story_tabbar_fixed_title")}),e.jsx("p",{children:o("story_tabbar_fixed_desc")}),Array.from({length:20}).map((p,d)=>e.jsxs("p",{children:[o("story_tabbar_line")," ",d+1," ",o("story_tabbar_long_content")]},d))]}),e.jsxs(a,{...r,fixed:!0,children:[e.jsx(a.Item,{active:t==="home",onClick:()=>c("home"),icon:e.jsx(n,{name:"HomeIcon"}),label:o("story_common_home")}),e.jsx(a.Item,{active:t==="search",onClick:()=>c("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:o("story_common_search")}),e.jsx(a.Item,{active:t==="profile",onClick:()=>c("profile"),icon:e.jsx(n,{name:"UserIcon"}),label:o("story_common_profile")})]})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      height: "100vh",
      background: "#f4f4f5",
      position: "relative"
    }}>\r
        <div style={{
        padding: "20px"
      }}>\r
          {t("story_tabbar_content_prefix")} {activeTab} {t("story_tabbar_tab")}\r
        </div>\r
        <TabBar {...args} style={{}}>\r
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="CircleIcon" />} label={t("story_common_home")} />\r
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} label={t("story_common_search")} />\r
          <TabBar.Item active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} icon={<Icon name="StarIcon" />} label={t("story_common_alerts")} badge="3" />\r
          <TabBar.Item active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Icon name="SquareIcon" />} label={t("story_common_profile")} />\r
        </TabBar>\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      height: "100vh",
      background: "#f4f4f5",
      position: "relative"
    }}>\r
        <TabBar {...args} style={{}}>\r
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="CircleIcon" />} />\r
          <TabBar.Item active={activeTab === "grid"} onClick={() => setActiveTab("grid")} icon={<Icon name="MaximizeIcon" />} />\r
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} />\r
        </TabBar>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      background: "#f4f4f5",
      minHeight: "100vh"
    }}>\r
        <div style={{
        padding: "20px",
        paddingBottom: "100px"
      }}>\r
          <h2>{t("story_tabbar_fixed_title")}</h2>\r
          <p>{t("story_tabbar_fixed_desc")}</p>\r
          {Array.from({
          length: 20
        }).map((_, i) => <p key={i}>\r
              {t("story_tabbar_line")} {i + 1} {t("story_tabbar_long_content")}\r
            </p>)}\r
        </div>\r
        <TabBar {...args} fixed>\r
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="HomeIcon" />} label={t("story_common_home")} />\r
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} label={t("story_common_search")} />\r
          <TabBar.Item active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Icon name="UserIcon" />} label={t("story_common_profile")} />\r
        </TabBar>\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};const v=["Default","WithoutLabels","Fixed"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:s,Fixed:l,WithoutLabels:i,__namedExportsOrder:v,default:_},Symbol.toStringTag,{value:"Module"}));export{s as D,x as T,i as W};
