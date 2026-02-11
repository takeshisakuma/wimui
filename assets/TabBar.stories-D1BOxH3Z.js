import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as m}from"./iframe-pOyiLBDM.js";import{P as o}from"./index-CNFaK4Wu.js";import{I as i}from"./Icon-BdnaLHRQ.js";const b=m.forwardRef(({className:r,children:a,fixed:t=!0,bordered:l=!0,glass:d=!1,...f},u)=>e.jsx("nav",{ref:u,className:["wim-tab-bar",t&&"wim-tab-bar--fixed",l&&"wim-tab-bar--bordered",d&&"wim-tab-bar--glass",r].filter(Boolean).join(" "),...f,children:e.jsx("div",{className:"wim-tab-bar__container",children:a})}));b.displayName="TabBar";b.propTypes={fixed:o.bool,bordered:o.bool,glass:o.bool,className:o.string,children:o.node};const p=m.forwardRef(({className:r,active:a,icon:t,label:l,badge:d,children:f,...u},v)=>e.jsxs("button",{ref:v,type:"button",className:["wim-tab-bar__item",a&&"wim-tab-bar__item--active",r].filter(Boolean).join(" "),"aria-pressed":a,...u,children:[d&&e.jsx("span",{className:"wim-tab-bar__badge",children:d}),t&&e.jsx("span",{className:"wim-tab-bar__icon",children:t}),l&&e.jsx("span",{className:"wim-tab-bar__label",children:l}),f]}));p.displayName="TabBar.Item";p.propTypes={active:o.bool,icon:o.node,label:o.string,badge:o.node,className:o.string,children:o.node};const n=Object.assign(b,{Item:p});b.__docgenInfo={description:"",methods:[],displayName:"TabBar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the bottom of the screen",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},bordered:{required:!1,tsType:{name:"boolean"},description:"Show top border",defaultValue:{value:"true",computed:!1},type:{name:"bool"}},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect",defaultValue:{value:"false",computed:!1},type:{name:"bool"}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"TabBar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state",type:{name:"bool"}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element",type:{name:"node"}},label:{required:!1,tsType:{name:"string"},description:"Text label",type:{name:"string"}},badge:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Badge content (optional)",type:{name:"node"}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};const T={title:"Navigation/TabBar",component:n,parameters:{layout:"fullscreen",viewport:{defaultViewport:"mobile1"}},argTypes:{fixed:{control:"boolean"},bordered:{control:"boolean"},glass:{control:"boolean"}}},s={render:r=>{const[a,t]=m.useState("home");return e.jsxs("div",{style:{height:"400px",background:"#f4f4f5",position:"relative"},children:[e.jsxs("div",{style:{padding:"20px"},children:["Content for ",a," tab"]}),e.jsxs(n,{...r,style:{position:"absolute"},children:[e.jsx(n.Item,{active:a==="home",onClick:()=>t("home"),icon:e.jsx(i,{name:"CircleIcon"}),label:"Home"}),e.jsx(n.Item,{active:a==="search",onClick:()=>t("search"),icon:e.jsx(i,{name:"SearchIcon"}),label:"Search"}),e.jsx(n.Item,{active:a==="notifications",onClick:()=>t("notifications"),icon:e.jsx(i,{name:"StarIcon"}),label:"Alerts",badge:"3"}),e.jsx(n.Item,{active:a==="profile",onClick:()=>t("profile"),icon:e.jsx(i,{name:"SquareIcon"}),label:"Profile"})]})]})}},c={render:r=>{const[a,t]=m.useState("home");return e.jsx("div",{style:{height:"200px",background:"#f4f4f5",position:"relative"},children:e.jsxs(n,{...r,style:{position:"absolute"},children:[e.jsx(n.Item,{active:a==="home",onClick:()=>t("home"),icon:e.jsx(i,{name:"CircleIcon"})}),e.jsx(n.Item,{active:a==="grid",onClick:()=>t("grid"),icon:e.jsx(i,{name:"MaximizeIcon"})}),e.jsx(n.Item,{active:a==="search",onClick:()=>t("search"),icon:e.jsx(i,{name:"SearchIcon"})})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const h=["Default","WithoutLabels"],j=Object.freeze(Object.defineProperty({__proto__:null,Default:s,WithoutLabels:c,__namedExportsOrder:h,default:T},Symbol.toStringTag,{value:"Module"}));export{s as D,j as T,c as W};
