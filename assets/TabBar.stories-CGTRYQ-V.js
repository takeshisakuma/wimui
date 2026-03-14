import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-83F82oTe.js";import{T as t}from"./TabBar-DqzB_yvs.js";import{I as n}from"./Icon-C3VpYLWw.js";import{A as d}from"./i18nConstants-BpHxieg5.js";import{u as v}from"./useTranslation-CgRV5_0i.js";const h={title:"Components/Application Shell/TabBar",component:t,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},argTypes:{fixed:{control:"boolean"},bordered:{control:"boolean"},glass:{control:"boolean"}}},i={render:c=>{const{t:a}=v(d),[o,r]=m.useState("home");return e.jsxs("div",{style:{height:"100vh",background:"#f4f4f5",position:"relative"},children:[e.jsxs("div",{style:{padding:"20px"},children:[a("story_tabbar_content_prefix")," ",o," ",a("story_tabbar_tab")]}),e.jsxs(t,{...c,style:{},children:[e.jsx(t.Item,{active:o==="home",onClick:()=>r("home"),icon:e.jsx(n,{name:"CircleIcon"}),label:a("story_common_home")}),e.jsx(t.Item,{active:o==="search",onClick:()=>r("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:a("story_common_search")}),e.jsx(t.Item,{active:o==="notifications",onClick:()=>r("notifications"),icon:e.jsx(n,{name:"StarIcon"}),label:a("story_common_alerts"),badge:"3"}),e.jsx(t.Item,{active:o==="profile",onClick:()=>r("profile"),icon:e.jsx(n,{name:"SquareIcon"}),label:a("story_common_profile")})]})]})}},s={render:c=>{const[a,o]=m.useState("home");return e.jsx("div",{style:{height:"100vh",background:"#f4f4f5",position:"relative"},children:e.jsxs(t,{...c,style:{},children:[e.jsx(t.Item,{active:a==="home",onClick:()=>o("home"),icon:e.jsx(n,{name:"CircleIcon"})}),e.jsx(t.Item,{active:a==="grid",onClick:()=>o("grid"),icon:e.jsx(n,{name:"MaximizeIcon"})}),e.jsx(t.Item,{active:a==="search",onClick:()=>o("search"),icon:e.jsx(n,{name:"SearchIcon"})})]})})}},l={render:c=>{const{t:a}=v(d),[o,r]=m.useState("home");return e.jsxs("div",{style:{background:"#f4f4f5",minHeight:"100vh"},children:[e.jsxs("div",{style:{padding:"20px",paddingBottom:"100px"},children:[e.jsx("h2",{children:a("story_tabbar_fixed_title")}),e.jsx("p",{children:a("story_tabbar_fixed_desc")}),Array.from({length:20}).map((p,b)=>e.jsxs("p",{children:[a("story_tabbar_line")," ",b+1," ",a("story_tabbar_long_content")]},b))]}),e.jsxs(t,{...c,fixed:!0,children:[e.jsx(t.Item,{active:o==="home",onClick:()=>r("home"),icon:e.jsx(n,{name:"HomeIcon"}),label:a("story_common_home")}),e.jsx(t.Item,{active:o==="search",onClick:()=>r("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:a("story_common_search")}),e.jsx(t.Item,{active:o==="profile",onClick:()=>r("profile"),icon:e.jsx(n,{name:"UserIcon"}),label:a("story_common_profile")})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...l.parameters?.docs?.source}}};const _=["Default","WithoutLabels","Fixed"],g=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Fixed:l,WithoutLabels:s,__namedExportsOrder:_,default:h},Symbol.toStringTag,{value:"Module"}));export{i as D,g as T,s as W};
