import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as s}from"./iframe-BsQs8kZI.js";import{T as a}from"./TabBar-DBYx_5_I.js";import{I as o}from"./Icon-Cxs4seO8.js";const l={title:"Component/Application Shell/TabBar",component:a,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},argTypes:{fixed:{control:"boolean"},bordered:{control:"boolean"},glass:{control:"boolean"}}},i={render:c=>{const[t,n]=s.useState("home");return e.jsxs("div",{style:{height:"400px",background:"#f4f4f5",position:"relative"},children:[e.jsxs("div",{style:{padding:"20px"},children:["Content for ",t," tab"]}),e.jsxs(a,{...c,style:{position:"absolute"},children:[e.jsx(a.Item,{active:t==="home",onClick:()=>n("home"),icon:e.jsx(o,{name:"CircleIcon"}),label:"Home"}),e.jsx(a.Item,{active:t==="search",onClick:()=>n("search"),icon:e.jsx(o,{name:"SearchIcon"}),label:"Search"}),e.jsx(a.Item,{active:t==="notifications",onClick:()=>n("notifications"),icon:e.jsx(o,{name:"StarIcon"}),label:"Alerts",badge:"3"}),e.jsx(a.Item,{active:t==="profile",onClick:()=>n("profile"),icon:e.jsx(o,{name:"SquareIcon"}),label:"Profile"})]})]})}},r={render:c=>{const[t,n]=s.useState("home");return e.jsx("div",{style:{height:"200px",background:"#f4f4f5",position:"relative"},children:e.jsxs(a,{...c,style:{position:"absolute"},children:[e.jsx(a.Item,{active:t==="home",onClick:()=>n("home"),icon:e.jsx(o,{name:"CircleIcon"})}),e.jsx(a.Item,{active:t==="grid",onClick:()=>n("grid"),icon:e.jsx(o,{name:"MaximizeIcon"})}),e.jsx(a.Item,{active:t==="search",onClick:()=>n("search"),icon:e.jsx(o,{name:"SearchIcon"})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      height: "400px",
      background: "#f4f4f5",
      position: "relative"
    }}>\r
                <div style={{
        padding: "20px"
      }}>\r
                    Content for {activeTab} tab\r
                </div>\r
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
