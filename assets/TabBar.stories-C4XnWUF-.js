import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-DntnUelk.js";import{T as a}from"./TabBar-phaMFpes.js";import{I as r}from"./Icon-Mjw2-9rU.js";const b={title:"Components/Application Shell/TabBar",component:a,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},argTypes:{fixed:{control:"boolean"},bordered:{control:"boolean"},glass:{control:"boolean"}}},i={render:o=>{const[n,t]=l.useState("home");return e.jsxs("div",{style:{height:"100vh",background:"#f4f4f5",position:"relative"},children:[e.jsxs("div",{style:{padding:"20px"},children:["Content for ",n," tab"]}),e.jsxs(a,{...o,style:{},children:[e.jsx(a.Item,{active:n==="home",onClick:()=>t("home"),icon:e.jsx(r,{name:"CircleIcon"}),label:"Home"}),e.jsx(a.Item,{active:n==="search",onClick:()=>t("search"),icon:e.jsx(r,{name:"SearchIcon"}),label:"Search"}),e.jsx(a.Item,{active:n==="notifications",onClick:()=>t("notifications"),icon:e.jsx(r,{name:"StarIcon"}),label:"Alerts",badge:"3"}),e.jsx(a.Item,{active:n==="profile",onClick:()=>t("profile"),icon:e.jsx(r,{name:"SquareIcon"}),label:"Profile"})]})]})}},c={render:o=>{const[n,t]=l.useState("home");return e.jsx("div",{style:{height:"100vh",background:"#f4f4f5",position:"relative"},children:e.jsxs(a,{...o,style:{},children:[e.jsx(a.Item,{active:n==="home",onClick:()=>t("home"),icon:e.jsx(r,{name:"CircleIcon"})}),e.jsx(a.Item,{active:n==="grid",onClick:()=>t("grid"),icon:e.jsx(r,{name:"MaximizeIcon"})}),e.jsx(a.Item,{active:n==="search",onClick:()=>t("search"),icon:e.jsx(r,{name:"SearchIcon"})})]})})}},s={render:o=>{const[n,t]=l.useState("home");return e.jsxs("div",{style:{background:"#f4f4f5",minHeight:"100vh"},children:[e.jsxs("div",{style:{padding:"20px",paddingBottom:"100px"},children:[e.jsx("h2",{children:"Fixed TabBar Demo"}),e.jsx("p",{children:"Scroll down to see the fixed TabBar."}),Array.from({length:20}).map((v,m)=>e.jsxs("p",{children:["This is line ",m+1," of a very long content to demonstrate scrolling."]},m))]}),e.jsxs(a,{...o,fixed:!0,children:[e.jsx(a.Item,{active:n==="home",onClick:()=>t("home"),icon:e.jsx(r,{name:"HomeIcon"}),label:"Home"}),e.jsx(a.Item,{active:n==="search",onClick:()=>t("search"),icon:e.jsx(r,{name:"SearchIcon"}),label:"Search"}),e.jsx(a.Item,{active:n==="profile",onClick:()=>t("profile"),icon:e.jsx(r,{name:"UserIcon"}),label:"Profile"})]})]})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      height: "100vh",
      background: "#f4f4f5",
      position: "relative"
    }}>\r
        <div style={{
        padding: "20px"
      }}>Content for {activeTab} tab</div>\r
        <TabBar {...args} style={{}}>\r
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="CircleIcon" />} label="Home" />\r
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} label="Search" />\r
          <TabBar.Item active={activeTab === "notifications"} onClick={() => setActiveTab("notifications")} icon={<Icon name="StarIcon" />} label="Alerts" badge="3" />\r
          <TabBar.Item active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Icon name="SquareIcon" />} label="Profile" />\r
        </TabBar>\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [activeTab, setActiveTab] = React.useState("home");
    return <div style={{
      background: "#f4f4f5",
      minHeight: "100vh"
    }}>\r
        <div style={{
        padding: "20px",
        paddingBottom: "100px"
      }}>\r
          <h2>Fixed TabBar Demo</h2>\r
          <p>Scroll down to see the fixed TabBar.</p>\r
          {Array.from({
          length: 20
        }).map((_, i) => <p key={i}>\r
              This is line {i + 1} of a very long content to demonstrate\r
              scrolling.\r
            </p>)}\r
        </div>\r
        <TabBar {...args} fixed>\r
          <TabBar.Item active={activeTab === "home"} onClick={() => setActiveTab("home")} icon={<Icon name="HomeIcon" />} label="Home" />\r
          <TabBar.Item active={activeTab === "search"} onClick={() => setActiveTab("search")} icon={<Icon name="SearchIcon" />} label="Search" />\r
          <TabBar.Item active={activeTab === "profile"} onClick={() => setActiveTab("profile")} icon={<Icon name="UserIcon" />} label="Profile" />\r
        </TabBar>\r
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const d=["Default","WithoutLabels","Fixed"],x=Object.freeze(Object.defineProperty({__proto__:null,Default:i,Fixed:s,WithoutLabels:c,__namedExportsOrder:d,default:b},Symbol.toStringTag,{value:"Module"}));export{i as D,x as T,c as W};
