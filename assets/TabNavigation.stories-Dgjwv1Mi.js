import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l,r as o}from"./iframe-CSwZKKgh.js";import{c as R}from"./index-DV843YsD.js";import{I as C}from"./Icon-DOwTT6BK.js";const O=typeof window<"u"?o.useLayoutEffect:o.useEffect,w=l.forwardRef(({className:n,children:a,variant:t="underline",align:c="start",size:b="medium",...I},r)=>{const y=o.useRef(null),f=o.useRef(null),[h,v]=o.useState({opacity:0}),[S,_]=o.useState(!1),x=o.useRef(!1),q=o.useCallback(s=>{y.current=s,typeof r=="function"?r(s):r&&(r.current=s)},[r]);return O(()=>{const s=f.current;if(!s)return;const N=()=>{const m=s.querySelector(".wim-tab-navigation__item--active");m?(v({width:`${m.offsetWidth}px`,transform:`translateX(${m.offsetLeft}px)`,opacity:1}),x.current||requestAnimationFrame(()=>{x.current=!0,_(!0)})):v({opacity:0})};N();const j=new ResizeObserver(()=>N());j.observe(s);const A=new MutationObserver(m=>{for(const T of m)(T.type==="childList"||T.type==="attributes"&&T.attributeName==="class")&&N()});return A.observe(s,{attributes:!0,subtree:!0,childList:!0,attributeFilter:["class"]}),()=>{j.disconnect(),A.disconnect()}},[t]),e.jsx("nav",{ref:q,className:R("wim-tab-navigation",`wim-tab-navigation--${t}`,`wim-tab-navigation--${c}`,`wim-tab-navigation--${b}`,S&&"wim-tab-navigation--ready",n),...I,children:e.jsxs("div",{className:"wim-tab-navigation__list",role:"tablist",ref:f,children:[e.jsx("div",{className:"wim-tab-navigation__slider",style:h,"aria-hidden":"true"}),a]})})});w.displayName="TabNavigation";const k=l.forwardRef(({className:n,children:a,active:t,disabled:c,icon:b,href:I,onClick:r,...y},f)=>{const h=v=>{if(c){v.preventDefault();return}r&&r(v)};return e.jsxs("a",{ref:f,href:I,onClick:h,className:R("wim-tab-navigation__item",t&&"wim-tab-navigation__item--active",c&&"wim-tab-navigation__item--disabled",n),role:"tab","aria-selected":t,"aria-disabled":c,tabIndex:c?-1:0,...y,children:[b&&e.jsx("span",{className:"wim-tab-navigation__icon",children:b}),a]})});k.displayName="TabNavigation.Item";const i=w;i.Item=k;k.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"}}};w.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the tabs",defaultValue:{value:'"medium"',computed:!1}}}};const E={title:"Components/Navigation Elements/TabNavigation",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"select",options:["small","medium","large"]}}},d={render:n=>{const[a,t]=l.useState("overview");return e.jsxs(i,{...n,children:[e.jsx(i.Item,{active:a==="overview",onClick:()=>t("overview"),href:"#",children:"Overview"}),e.jsx(i.Item,{active:a==="integrations",onClick:()=>t("integrations"),href:"#",children:"Integrations"}),e.jsx(i.Item,{active:a==="activity",onClick:()=>t("activity"),href:"#",children:"Activity"}),e.jsx(i.Item,{active:a==="settings",onClick:()=>t("settings"),href:"#",children:"Settings"})]})}},u={render:n=>{const[a,t]=l.useState("all");return e.jsxs(i,{...n,variant:"pill",children:[e.jsx(i.Item,{active:a==="all",onClick:()=>t("all"),children:"All"}),e.jsx(i.Item,{active:a==="unread",onClick:()=>t("unread"),children:"Unread"}),e.jsx(i.Item,{active:a==="archived",onClick:()=>t("archived"),children:"Archived"})]})}},g={render:n=>{const[a,t]=l.useState("daily");return e.jsxs(i,{...n,variant:"contained",children:[e.jsx(i.Item,{active:a==="daily",onClick:()=>t("daily"),children:"Daily"}),e.jsx(i.Item,{active:a==="weekly",onClick:()=>t("weekly"),children:"Weekly"}),e.jsx(i.Item,{active:a==="monthly",onClick:()=>t("monthly"),children:"Monthly"})]})}},p={render:n=>{const[a,t]=l.useState("code");return e.jsxs(i,{...n,children:[e.jsx(i.Item,{active:a==="code",onClick:()=>t("code"),icon:e.jsx(C,{name:"ChevronRightIcon"}),children:"Code"}),e.jsx(i.Item,{active:a==="issues",onClick:()=>t("issues"),icon:e.jsx(C,{name:"CircleIcon"}),children:"Issues"}),e.jsx(i.Item,{active:a==="pulls",onClick:()=>t("pulls"),icon:e.jsx(C,{name:"CopyIcon"}),children:"Pull Requests"})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const D=["Default","Pills","Contained","WithIcons"],$=Object.freeze(Object.defineProperty({__proto__:null,Contained:g,Default:d,Pills:u,WithIcons:p,__namedExportsOrder:D,default:E},Symbol.toStringTag,{value:"Module"}));export{g as C,d as D,u as P,$ as T,p as W};
