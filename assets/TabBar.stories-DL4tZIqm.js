import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-CnnXQMZU.js";import{c as f}from"./index-B2p9BVIj.js";import{I as n}from"./Icon-Bwlm06_9.js";const p=m.forwardRef(({className:r,children:a,fixed:t=!0,bordered:c=!0,glass:l=!1,...b},d)=>e.jsx("nav",{ref:d,className:f("wim-tab-bar",t&&"wim-tab-bar--fixed",c&&"wim-tab-bar--bordered",l&&"wim-tab-bar--glass",r),...b,children:e.jsx("div",{className:"wim-tab-bar__container",children:a})}));p.displayName="TabBar";const u=m.forwardRef(({className:r,active:a,icon:t,label:c,badge:l,children:b,...d},v)=>e.jsxs("button",{ref:v,type:"button",className:f("wim-tab-bar__item",a&&"wim-tab-bar__item--active",r),"aria-pressed":a,...d,children:[l&&e.jsx("span",{className:"wim-tab-bar__badge",children:l}),t&&e.jsx("span",{className:"wim-tab-bar__icon",children:t}),c&&e.jsx("span",{className:"wim-tab-bar__label",children:c}),b]}));u.displayName="TabBar.Item";const o=p;o.Item=u;u.__docgenInfo={description:"",methods:[],displayName:"TabBar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"},label:{required:!1,tsType:{name:"string"},description:"Text label"},badge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Badge content (optional)"}}};p.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the bottom of the screen",defaultValue:{value:"true",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"Show top border",defaultValue:{value:"true",computed:!1}},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect",defaultValue:{value:"false",computed:!1}}}};const T={title:"Component/Navigation/TabBar",component:o,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},argTypes:{fixed:{control:"boolean"},bordered:{control:"boolean"},glass:{control:"boolean"}}},i={render:r=>{const[a,t]=m.useState("home");return e.jsxs("div",{style:{height:"400px",background:"#f4f4f5",position:"relative"},children:[e.jsxs("div",{style:{padding:"20px"},children:["Content for ",a," tab"]}),e.jsxs(o,{...r,style:{position:"absolute"},children:[e.jsx(o.Item,{active:a==="home",onClick:()=>t("home"),icon:e.jsx(n,{name:"CircleIcon"}),label:"Home"}),e.jsx(o.Item,{active:a==="search",onClick:()=>t("search"),icon:e.jsx(n,{name:"SearchIcon"}),label:"Search"}),e.jsx(o.Item,{active:a==="notifications",onClick:()=>t("notifications"),icon:e.jsx(n,{name:"StarIcon"}),label:"Alerts",badge:"3"}),e.jsx(o.Item,{active:a==="profile",onClick:()=>t("profile"),icon:e.jsx(n,{name:"SquareIcon"}),label:"Profile"})]})]})}},s={render:r=>{const[a,t]=m.useState("home");return e.jsx("div",{style:{height:"200px",background:"#f4f4f5",position:"relative"},children:e.jsxs(o,{...r,style:{position:"absolute"},children:[e.jsx(o.Item,{active:a==="home",onClick:()=>t("home"),icon:e.jsx(n,{name:"CircleIcon"})}),e.jsx(o.Item,{active:a==="grid",onClick:()=>t("grid"),icon:e.jsx(n,{name:"MaximizeIcon"})}),e.jsx(o.Item,{active:a==="search",onClick:()=>t("search"),icon:e.jsx(n,{name:"SearchIcon"})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};const h=["Default","WithoutLabels"],y=Object.freeze(Object.defineProperty({__proto__:null,Default:i,WithoutLabels:s,__namedExportsOrder:h,default:T},Symbol.toStringTag,{value:"Module"}));export{i as D,y as T,s as W};
