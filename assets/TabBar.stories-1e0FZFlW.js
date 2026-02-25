import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./iframe-Be3gXwOX.js";import{T as a}from"./TabBar-B9FsEDbZ.js";import{I as n}from"./Icon-fxQMr1Pf.js";const l={title:"Components/Application Shell/TabBar",component:a,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},argTypes:{fixed:{control:"boolean"},bordered:{control:"boolean"},glass:{control:"boolean"}}},i={render:c=>{const[t,o]=s.useState("home");return e.jsxs("div",{style:{height:"400px",background:"#f4f4f5",position:"relative"},children:[e.jsxs("div",{style:{padding:"20px"},children:["Content for ",t," tab"]}),e.jsxs(a,{...c,style:{position:"absolute"},children:[e.jsx(a.Item,{active:t==="home",onClick:()=>o("home"),icon:e.jsx(n,{name:"CircleIcon"}),label:"Home"}),e.jsx(a.Item,{active:t==="search",onClick:()=>o("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:"Search"}),e.jsx(a.Item,{active:t==="notifications",onClick:()=>o("notifications"),icon:e.jsx(n,{name:"StarIcon"}),label:"Alerts",badge:"3"}),e.jsx(a.Item,{active:t==="profile",onClick:()=>o("profile"),icon:e.jsx(n,{name:"SquareIcon"}),label:"Profile"})]})]})}},r={render:c=>{const[t,o]=s.useState("home");return e.jsx("div",{style:{height:"200px",background:"#f4f4f5",position:"relative"},children:e.jsxs(a,{...c,style:{position:"absolute"},children:[e.jsx(a.Item,{active:t==="home",onClick:()=>o("home"),icon:e.jsx(n,{name:"CircleIcon"})}),e.jsx(a.Item,{active:t==="grid",onClick:()=>o("grid"),icon:e.jsx(n,{name:"MaximizeIcon"})}),e.jsx(a.Item,{active:t==="search",onClick:()=>o("search"),icon:e.jsx(n,{name:"SearchIcon"})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      height: "400px",
      background: "#f4f4f5",
      position: "relative"
    }}>\r
        <div style={{
        padding: "20px"
      }}>Content for {activeTab} tab</div>\r
        <TabBar {...args} style={{
        position: "absolute"
      }}>\r
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="CircleIcon" />} label="Home" />\r
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} label="Search" />\r
          <TabBar.Item active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} icon={<Icon name="StarIcon" />} label="Alerts" badge="3" />\r
          <TabBar.Item active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Icon name="SquareIcon" />} label="Profile" />\r
        </TabBar>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      height: "200px",
      background: "#f4f4f5",
      position: "relative"
    }}>\r
        <TabBar {...args} style={{
        position: "absolute"
      }}>\r
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="CircleIcon" />} />\r
          <TabBar.Item active={activeTab === "grid"} onClick={() => setActiveTab("grid")} icon={<Icon name="MaximizeIcon" />} />\r
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} />\r
        </TabBar>\r
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const m=["Default","WithoutLabels"],h=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithoutLabels:r,__namedExportsOrder:m,default:l},Symbol.toStringTag,{value:"Module"}));export{i as D,h as T,r as W};
