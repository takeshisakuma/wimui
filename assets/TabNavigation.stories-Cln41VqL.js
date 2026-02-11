import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as o,r as T}from"./iframe-CqpHVO8i.js";import{P as n}from"./index-8SIbFkC-.js";import{I}from"./Icon-Ce_1uR2t.js";const p=o.forwardRef(({className:r,children:t,variant:a="underline",align:s="start",size:d="medium",...f},u)=>{const b=T.useRef(null);return e.jsx("nav",{ref:u||b,className:["wim-tab-navigation",`wim-tab-navigation--${a}`,`wim-tab-navigation--${s}`,`wim-tab-navigation--${d}`,r].filter(Boolean).join(" "),...f,children:e.jsx("div",{className:"wim-tab-navigation__list",role:"tablist",children:t})})});p.displayName="TabNavigation";p.propTypes={variant:n.oneOf(["underline","pill","contained"]),align:n.oneOf(["start","center","end","justify"]),size:n.oneOf(["small","medium","large"]),className:n.string,children:n.node};const g=o.forwardRef(({className:r,children:t,active:a,disabled:s,icon:d,href:f,onClick:u,...b},h)=>{const N=y=>{if(s){y.preventDefault();return}u&&u(y)};return e.jsxs("a",{ref:h,href:f,onClick:N,className:["wim-tab-navigation__item",a&&"wim-tab-navigation__item--active",s&&"wim-tab-navigation__item--disabled",r].filter(Boolean).join(" "),role:"tab","aria-selected":a,"aria-disabled":s,tabIndex:s?-1:0,...b,children:[d&&e.jsx("span",{className:"wim-tab-navigation__icon",children:d}),t]})});g.displayName="TabNavigation.Item";g.propTypes={active:n.bool,disabled:n.bool,icon:n.node,href:n.string,onClick:n.func,className:n.string,children:n.node};const i=Object.assign(p,{Item:g});p.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1},type:{name:"enum",value:[{value:'"underline"',computed:!1},{value:'"pill"',computed:!1},{value:'"contained"',computed:!1}]}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1},type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1},{value:'"justify"',computed:!1}]}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the tabs",defaultValue:{value:'"medium"',computed:!1},type:{name:"enum",value:[{value:'"small"',computed:!1},{value:'"medium"',computed:!1},{value:'"large"',computed:!1}]}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};g.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state",type:{name:"bool"}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",type:{name:"bool"}},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element",type:{name:"node"}},href:{description:"",type:{name:"string"},required:!1},onClick:{description:"",type:{name:"func"},required:!1},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};const C={title:"Navigation/TabNavigation",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"select",options:["small","medium","large"]}}},l={render:r=>{const[t,a]=o.useState("overview");return e.jsxs(i,{...r,children:[e.jsx(i.Item,{active:t==="overview",onClick:()=>a("overview"),href:"#",children:"Overview"}),e.jsx(i.Item,{active:t==="integrations",onClick:()=>a("integrations"),href:"#",children:"Integrations"}),e.jsx(i.Item,{active:t==="activity",onClick:()=>a("activity"),href:"#",children:"Activity"}),e.jsx(i.Item,{active:t==="settings",onClick:()=>a("settings"),href:"#",children:"Settings"})]})}},c={render:r=>{const[t,a]=o.useState("all");return e.jsxs(i,{...r,variant:"pill",children:[e.jsx(i.Item,{active:t==="all",onClick:()=>a("all"),children:"All"}),e.jsx(i.Item,{active:t==="unread",onClick:()=>a("unread"),children:"Unread"}),e.jsx(i.Item,{active:t==="archived",onClick:()=>a("archived"),children:"Archived"})]})}},v={render:r=>{const[t,a]=o.useState("daily");return e.jsxs(i,{...r,variant:"contained",children:[e.jsx(i.Item,{active:t==="daily",onClick:()=>a("daily"),children:"Daily"}),e.jsx(i.Item,{active:t==="weekly",onClick:()=>a("weekly"),children:"Weekly"}),e.jsx(i.Item,{active:t==="monthly",onClick:()=>a("monthly"),children:"Monthly"})]})}},m={render:r=>{const[t,a]=o.useState("code");return e.jsxs(i,{...r,children:[e.jsx(i.Item,{active:t==="code",onClick:()=>a("code"),icon:e.jsx(I,{name:"ChevronRightIcon"}),children:"Code"}),e.jsx(i.Item,{active:t==="issues",onClick:()=>a("issues"),icon:e.jsx(I,{name:"CircleIcon"}),children:"Issues"}),e.jsx(i.Item,{active:t==="pulls",onClick:()=>a("pulls"),icon:e.jsx(I,{name:"CopyIcon"}),children:"Pull Requests"})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = React.useState("overview");
    return <TabNavigation {...args}>\r
                <TabNavigation.Item active={active === "overview"} onClick={() => setActive("overview")} href="#">\r
                    Overview\r
                </TabNavigation.Item>\r
                <TabNavigation.Item active={active === "integrations"} onClick={() => setActive("integrations")} href="#">\r
                    Integrations\r
                </TabNavigation.Item>\r
                <TabNavigation.Item active={active === "activity"} onClick={() => setActive("activity")} href="#">\r
                    Activity\r
                </TabNavigation.Item>\r
                <TabNavigation.Item active={active === "settings"} onClick={() => setActive("settings")} href="#">\r
                    Settings\r
                </TabNavigation.Item>\r
            </TabNavigation>;
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = React.useState("all");
    return <TabNavigation {...args} variant="pill">\r
                <TabNavigation.Item active={active === "all"} onClick={() => setActive("all")}>\r
                    All\r
                </TabNavigation.Item>\r
                <TabNavigation.Item active={active === "unread"} onClick={() => setActive("unread")}>\r
                    Unread\r
                </TabNavigation.Item>\r
                <TabNavigation.Item active={active === "archived"} onClick={() => setActive("archived")}>\r
                    Archived\r
                </TabNavigation.Item>\r
            </TabNavigation>;
  }
}`,...c.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = React.useState("daily");
    return <TabNavigation {...args} variant="contained">\r
                <TabNavigation.Item active={active === "daily"} onClick={() => setActive("daily")}>\r
                    Daily\r
                </TabNavigation.Item>\r
                <TabNavigation.Item active={active === "weekly"} onClick={() => setActive("weekly")}>\r
                    Weekly\r
                </TabNavigation.Item>\r
                <TabNavigation.Item active={active === "monthly"} onClick={() => setActive("monthly")}>\r
                    Monthly\r
                </TabNavigation.Item>\r
            </TabNavigation>;
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = React.useState("code");
    return <TabNavigation {...args}>\r
                <TabNavigation.Item active={active === "code"} onClick={() => setActive("code")} icon={<Icon name="ChevronRightIcon" />}>\r
                    Code\r
                </TabNavigation.Item>\r
                <TabNavigation.Item active={active === "issues"} onClick={() => setActive("issues")} icon={<Icon name="CircleIcon" />}>\r
                    Issues\r
                </TabNavigation.Item>\r
                <TabNavigation.Item active={active === "pulls"} onClick={() => setActive("pulls")} icon={<Icon name="CopyIcon" />}>\r
                    Pull Requests\r
                </TabNavigation.Item>\r
            </TabNavigation>;
  }
}`,...m.parameters?.docs?.source}}};const j=["Default","Pills","Contained","WithIcons"],_=Object.freeze(Object.defineProperty({__proto__:null,Contained:v,Default:l,Pills:c,WithIcons:m,__namedExportsOrder:j,default:C},Symbol.toStringTag,{value:"Module"}));export{v as C,l as D,c as P,_ as T,m as W};
