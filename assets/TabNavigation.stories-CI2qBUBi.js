import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l,r as c}from"./iframe-DQwmcauy.js";import{c as A}from"./index-Bk7p5LNu.js";import{I as C}from"./Icon-BSJg9_bB.js";import{u as _}from"./useTranslation-CZ9vchf1.js";const O=typeof window<"u"?c.useLayoutEffect:c.useEffect,w=l.forwardRef(({className:s,children:n,variant:a="underline",align:t="start",size:g="medium",...f},o)=>{const I=c.useRef(null),y=c.useRef(null),[h,v]=c.useState({opacity:0}),[S,q]=c.useState(!1),x=c.useRef(!1),E=c.useCallback(r=>{I.current=r,typeof o=="function"?o(r):o&&(o.current=r)},[o]);return O(()=>{const r=y.current;if(!r)return;const N=()=>{const m=r.querySelector(".wim-tab-navigation__item--active");m?(v({width:`${m.offsetWidth}px`,transform:`translateX(${m.offsetLeft}px)`,opacity:1}),x.current||requestAnimationFrame(()=>{x.current=!0,q(!0)})):v({opacity:0})};N();const j=new ResizeObserver(()=>N());j.observe(r);const R=new MutationObserver(m=>{for(const T of m)(T.type==="childList"||T.type==="attributes"&&T.attributeName==="class")&&N()});return R.observe(r,{attributes:!0,subtree:!0,childList:!0,attributeFilter:["class"]}),()=>{j.disconnect(),R.disconnect()}},[a]),e.jsx("nav",{ref:E,className:A("wim-tab-navigation",`wim-tab-navigation--${a}`,`wim-tab-navigation--${t}`,`wim-tab-navigation--${g}`,S&&"wim-tab-navigation--ready",s),...f,children:e.jsxs("div",{className:"wim-tab-navigation__list",role:"tablist",ref:y,children:[e.jsx("div",{className:"wim-tab-navigation__slider",style:h,"aria-hidden":"true"}),n]})})});w.displayName="TabNavigation";const k=l.forwardRef(({className:s,children:n,active:a,disabled:t,icon:g,href:f,onClick:o,...I},y)=>{const h=v=>{if(t){v.preventDefault();return}o&&o(v)};return e.jsxs("a",{ref:y,href:f,onClick:h,className:A("wim-tab-navigation__item",a&&"wim-tab-navigation__item--active",t&&"wim-tab-navigation__item--disabled",s),role:"tab","aria-selected":a,"aria-disabled":t,tabIndex:t?-1:0,...I,children:[g&&e.jsx("span",{className:"wim-tab-navigation__icon",children:g}),n]})});k.displayName="TabNavigation.Item";const i=w;i.Item=k;k.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"}}};w.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the tabs",defaultValue:{value:'"medium"',computed:!1}}}};const z={title:"Components/Navigation Elements/TabNavigation",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"select",options:["small","medium","large"]}}},d={render:s=>{const{t:n}=_(["docs","common","components"]),[a,t]=l.useState("overview");return e.jsxs(i,{...s,children:[e.jsx(i.Item,{active:a==="overview",onClick:()=>t("overview"),href:"#",children:n("story_tabnav_overview")}),e.jsx(i.Item,{active:a==="integrations",onClick:()=>t("integrations"),href:"#",children:n("story_tabnav_integrations")}),e.jsx(i.Item,{active:a==="activity",onClick:()=>t("activity"),href:"#",children:n("story_tabnav_activity")}),e.jsx(i.Item,{active:a==="settings",onClick:()=>t("settings"),href:"#",children:n("story_tabnav_settings")})]})}},u={render:s=>{const{t:n}=_(["docs","common","components"]),[a,t]=l.useState("all");return e.jsxs(i,{...s,variant:"pill",children:[e.jsx(i.Item,{active:a==="all",onClick:()=>t("all"),children:n("story_tabnav_all")}),e.jsx(i.Item,{active:a==="unread",onClick:()=>t("unread"),children:n("story_tabnav_unread")}),e.jsx(i.Item,{active:a==="archived",onClick:()=>t("archived"),children:n("story_tabnav_archived")})]})}},b={render:s=>{const{t:n}=_(["docs","common","components"]),[a,t]=l.useState("daily");return e.jsxs(i,{...s,variant:"contained",children:[e.jsx(i.Item,{active:a==="daily",onClick:()=>t("daily"),children:n("story_tabnav_daily")}),e.jsx(i.Item,{active:a==="weekly",onClick:()=>t("weekly"),children:n("story_tabnav_weekly")}),e.jsx(i.Item,{active:a==="monthly",onClick:()=>t("monthly"),children:n("story_tabnav_monthly")})]})}},p={render:s=>{const{t:n}=_(["docs","common","components"]),[a,t]=l.useState("code");return e.jsxs(i,{...s,children:[e.jsx(i.Item,{active:a==="code",onClick:()=>t("code"),icon:e.jsx(C,{name:"ChevronRightIcon"}),children:n("story_tabnav_code")}),e.jsx(i.Item,{active:a==="issues",onClick:()=>t("issues"),icon:e.jsx(C,{name:"CircleIcon"}),children:n("story_tabnav_issues")}),e.jsx(i.Item,{active:a==="pulls",onClick:()=>t("pulls"),icon:e.jsx(C,{name:"CopyIcon"}),children:n("story_tabnav_pull_requests")})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [active, setActive] = React.useState("overview");
    return <TabNavigation {...args}>\r
        <TabNavigation.Item active={active === "overview"} onClick={() => setActive("overview")} href="#">\r
          {t("story_tabnav_overview")}\r
        </TabNavigation.Item>\r
        <TabNavigation.Item active={active === "integrations"} onClick={() => setActive("integrations")} href="#">\r
          {t("story_tabnav_integrations")}\r
        </TabNavigation.Item>\r
        <TabNavigation.Item active={active === "activity"} onClick={() => setActive("activity")} href="#">\r
          {t("story_tabnav_activity")}\r
        </TabNavigation.Item>\r
        <TabNavigation.Item active={active === "settings"} onClick={() => setActive("settings")} href="#">\r
          {t("story_tabnav_settings")}\r
        </TabNavigation.Item>\r
      </TabNavigation>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [active, setActive] = React.useState("all");
    return <TabNavigation {...args} variant="pill">\r
        <TabNavigation.Item active={active === "all"} onClick={() => setActive("all")}>\r
          {t("story_tabnav_all")}\r
        </TabNavigation.Item>\r
        <TabNavigation.Item active={active === "unread"} onClick={() => setActive("unread")}>\r
          {t("story_tabnav_unread")}\r
        </TabNavigation.Item>\r
        <TabNavigation.Item active={active === "archived"} onClick={() => setActive("archived")}>\r
          {t("story_tabnav_archived")}\r
        </TabNavigation.Item>\r
      </TabNavigation>;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [active, setActive] = React.useState("daily");
    return <TabNavigation {...args} variant="contained">\r
        <TabNavigation.Item active={active === "daily"} onClick={() => setActive("daily")}>\r
          {t("story_tabnav_daily")}\r
        </TabNavigation.Item>\r
        <TabNavigation.Item active={active === "weekly"} onClick={() => setActive("weekly")}>\r
          {t("story_tabnav_weekly")}\r
        </TabNavigation.Item>\r
        <TabNavigation.Item active={active === "monthly"} onClick={() => setActive("monthly")}>\r
          {t("story_tabnav_monthly")}\r
        </TabNavigation.Item>\r
      </TabNavigation>;
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [active, setActive] = React.useState("code");
    return <TabNavigation {...args}>\r
        <TabNavigation.Item active={active === "code"} onClick={() => setActive("code")} icon={<Icon name="ChevronRightIcon" />}>\r
          {t("story_tabnav_code")}\r
        </TabNavigation.Item>\r
        <TabNavigation.Item active={active === "issues"} onClick={() => setActive("issues")} icon={<Icon name="CircleIcon" />}>\r
          {t("story_tabnav_issues")}\r
        </TabNavigation.Item>\r
        <TabNavigation.Item active={active === "pulls"} onClick={() => setActive("pulls")} icon={<Icon name="CopyIcon" />}>\r
          {t("story_tabnav_pull_requests")}\r
        </TabNavigation.Item>\r
      </TabNavigation>;
  }
}`,...p.parameters?.docs?.source}}};const D=["Default","Pills","Contained","WithIcons"],F=Object.freeze(Object.defineProperty({__proto__:null,Contained:b,Default:d,Pills:u,WithIcons:p,__namedExportsOrder:D,default:z},Symbol.toStringTag,{value:"Module"}));export{b as C,d as D,u as P,F as T,p as W};
