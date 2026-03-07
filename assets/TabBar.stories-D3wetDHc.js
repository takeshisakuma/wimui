import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-BLtjAiBw.js";import{T as o}from"./TabBar-DP0J4aKh.js";import{I as n}from"./Icon-DCQu28KW.js";import{u as d}from"./useTranslation-CIS57IFk.js";const v={title:"Components/Application Shell/TabBar",component:o,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},argTypes:{fixed:{control:"boolean"},bordered:{control:"boolean"},glass:{control:"boolean"}}},i={render:c=>{const{t:a}=d(["docs","common","components"]),[t,r]=l.useState("home");return e.jsxs("div",{style:{height:"100vh",background:"#f4f4f5",position:"relative"},children:[e.jsxs("div",{style:{padding:"20px"},children:[a("story_tabbar_content_prefix")," ",t," ",a("story_tabbar_tab")]}),e.jsxs(o,{...c,style:{},children:[e.jsx(o.Item,{active:t==="home",onClick:()=>r("home"),icon:e.jsx(n,{name:"CircleIcon"}),label:a("story_common_home")}),e.jsx(o.Item,{active:t==="search",onClick:()=>r("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:a("story_common_search")}),e.jsx(o.Item,{active:t==="notifications",onClick:()=>r("notifications"),icon:e.jsx(n,{name:"StarIcon"}),label:a("story_common_alerts"),badge:"3"}),e.jsx(o.Item,{active:t==="profile",onClick:()=>r("profile"),icon:e.jsx(n,{name:"SquareIcon"}),label:a("story_common_profile")})]})]})}},s={render:c=>{const[a,t]=l.useState("home");return e.jsx("div",{style:{height:"100vh",background:"#f4f4f5",position:"relative"},children:e.jsxs(o,{...c,style:{},children:[e.jsx(o.Item,{active:a==="home",onClick:()=>t("home"),icon:e.jsx(n,{name:"CircleIcon"})}),e.jsx(o.Item,{active:a==="grid",onClick:()=>t("grid"),icon:e.jsx(n,{name:"MaximizeIcon"})}),e.jsx(o.Item,{active:a==="search",onClick:()=>t("search"),icon:e.jsx(n,{name:"SearchIcon"})})]})})}},m={render:c=>{const{t:a}=d(["docs","common","components"]),[t,r]=l.useState("home");return e.jsxs("div",{style:{background:"#f4f4f5",minHeight:"100vh"},children:[e.jsxs("div",{style:{padding:"20px",paddingBottom:"100px"},children:[e.jsx("h2",{children:a("story_tabbar_fixed_title")}),e.jsx("p",{children:a("story_tabbar_fixed_desc")}),Array.from({length:20}).map((p,b)=>e.jsxs("p",{children:[a("story_tabbar_line")," ",b+1," ",a("story_tabbar_long_content")]},b))]}),e.jsxs(o,{...c,fixed:!0,children:[e.jsx(o.Item,{active:t==="home",onClick:()=>r("home"),icon:e.jsx(n,{name:"HomeIcon"}),label:a("story_common_home")}),e.jsx(o.Item,{active:t==="search",onClick:()=>r("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:a("story_common_search")}),e.jsx(o.Item,{active:t==="profile",onClick:()=>r("profile"),icon:e.jsx(n,{name:"UserIcon"}),label:a("story_common_profile")})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...m.parameters?.docs?.source}}};const h=["Default","WithoutLabels","Fixed"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Fixed:m,WithoutLabels:s,__namedExportsOrder:h,default:v},Symbol.toStringTag,{value:"Module"}));export{i as D,y as T,s as W};
