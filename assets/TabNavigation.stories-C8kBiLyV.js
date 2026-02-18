import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as s,r as y}from"./iframe-C3pXKV1j.js";import{c as h}from"./index-D0w-l_OM.js";import{I as p}from"./Icon-EUIgR6rt.js";const b=s.forwardRef(({className:n,children:t,variant:a="underline",align:r="start",size:m="medium",...u},d)=>{const g=y.useRef(null);return e.jsx("nav",{ref:d||g,className:h("wim-tab-navigation",`wim-tab-navigation--${a}`,`wim-tab-navigation--${r}`,`wim-tab-navigation--${m}`,n),...u,children:e.jsx("div",{className:"wim-tab-navigation__list",role:"tablist",children:t})})});b.displayName="TabNavigation";const I=s.forwardRef(({className:n,children:t,active:a,disabled:r,icon:m,href:u,onClick:d,...g},T)=>{const f=N=>{if(r){N.preventDefault();return}d&&d(N)};return e.jsxs("a",{ref:T,href:u,onClick:f,className:h("wim-tab-navigation__item",a&&"wim-tab-navigation__item--active",r&&"wim-tab-navigation__item--disabled",n),role:"tab","aria-selected":a,"aria-disabled":r,tabIndex:r?-1:0,...g,children:[m&&e.jsx("span",{className:"wim-tab-navigation__icon",children:m}),t]})});I.displayName="TabNavigation.Item";const i=b;i.Item=I;I.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"}}};b.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the tabs",defaultValue:{value:'"medium"',computed:!1}}}};const C={title:"Component/Navigation Elements/TabNavigation",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"select",options:["small","medium","large"]}}},o={render:n=>{const[t,a]=s.useState("overview");return e.jsxs(i,{...n,children:[e.jsx(i.Item,{active:t==="overview",onClick:()=>a("overview"),href:"#",children:"Overview"}),e.jsx(i.Item,{active:t==="integrations",onClick:()=>a("integrations"),href:"#",children:"Integrations"}),e.jsx(i.Item,{active:t==="activity",onClick:()=>a("activity"),href:"#",children:"Activity"}),e.jsx(i.Item,{active:t==="settings",onClick:()=>a("settings"),href:"#",children:"Settings"})]})}},c={render:n=>{const[t,a]=s.useState("all");return e.jsxs(i,{...n,variant:"pill",children:[e.jsx(i.Item,{active:t==="all",onClick:()=>a("all"),children:"All"}),e.jsx(i.Item,{active:t==="unread",onClick:()=>a("unread"),children:"Unread"}),e.jsx(i.Item,{active:t==="archived",onClick:()=>a("archived"),children:"Archived"})]})}},l={render:n=>{const[t,a]=s.useState("daily");return e.jsxs(i,{...n,variant:"contained",children:[e.jsx(i.Item,{active:t==="daily",onClick:()=>a("daily"),children:"Daily"}),e.jsx(i.Item,{active:t==="weekly",onClick:()=>a("weekly"),children:"Weekly"}),e.jsx(i.Item,{active:t==="monthly",onClick:()=>a("monthly"),children:"Monthly"})]})}},v={render:n=>{const[t,a]=s.useState("code");return e.jsxs(i,{...n,children:[e.jsx(i.Item,{active:t==="code",onClick:()=>a("code"),icon:e.jsx(p,{name:"ChevronRightIcon"}),children:"Code"}),e.jsx(i.Item,{active:t==="issues",onClick:()=>a("issues"),icon:e.jsx(p,{name:"CircleIcon"}),children:"Issues"}),e.jsx(i.Item,{active:t==="pulls",onClick:()=>a("pulls"),icon:e.jsx(p,{name:"CopyIcon"}),children:"Pull Requests"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const k=["Default","Pills","Contained","WithIcons"],_=Object.freeze(Object.defineProperty({__proto__:null,Contained:l,Default:o,Pills:c,WithIcons:v,__namedExportsOrder:k,default:C},Symbol.toStringTag,{value:"Module"}));export{l as C,o as D,c as P,_ as T,v as W};
