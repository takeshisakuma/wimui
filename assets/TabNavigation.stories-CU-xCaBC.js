import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as o,r as C}from"./iframe-Dzm9idsv.js";import{c as A}from"./index-BpsP6pOz.js";import{u as w}from"./useIndicator-gPPASCdg.js";import{I as T}from"./Icon-DdY3T4lx.js";import{A as _}from"./i18nConstants-fBKvcUJT.js";import{u as p}from"./useTranslation-BfYXAya8.js";const h=o.forwardRef(({className:r,children:i,variant:a="underline",align:t="start",size:d="medium",...y},s)=>{const N=C.useRef(null),{containerRef:u,sliderStyle:I,isReady:b}=w({activeSelector:".wim-tab-navigation__item--active",variant:a}),k=C.useCallback(g=>{N.current=g,u.current=g?.querySelector(".wim-tab-navigation__list"),typeof s=="function"?s(g):s&&(s.current=g)},[s,u]);return e.jsx("nav",{ref:k,className:A("wim-tab-navigation",`wim-tab-navigation--${a}`,`wim-tab-navigation--${t}`,`wim-tab-navigation--${d}`,b&&"wim-tab-navigation--ready",r),...y,children:e.jsxs("div",{className:"wim-tab-navigation__list",role:"tablist",children:[e.jsx("div",{className:"wim-tab-navigation__slider",style:I,"aria-hidden":"true"}),i]})})});h.displayName="TabNavigation";const f=o.forwardRef(({className:r,children:i,active:a,disabled:t,icon:d,href:y,onClick:s,...N},u)=>{const I=b=>{if(t){b.preventDefault();return}s&&s(b)};return e.jsxs("a",{ref:u,href:y,onClick:I,className:A("wim-tab-navigation__item",a&&"wim-tab-navigation__item--active",t&&"wim-tab-navigation__item--disabled",r),role:"tab","aria-selected":a,"aria-disabled":t,tabIndex:t?-1:0,...N,children:[d&&e.jsx("span",{className:"wim-tab-navigation__icon",children:d}),i]})});f.displayName="TabNavigation.Item";const n=h;n.Item=f;f.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"}}};h.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the tabs",defaultValue:{value:'"medium"',computed:!1}}}};const j={title:"Components/Navigation Elements/TabNavigation",component:n,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"select",options:["small","medium","large"]}}},c={render:r=>{const{t:i}=p(_),[a,t]=o.useState("overview");return e.jsxs(n,{...r,children:[e.jsx(n.Item,{active:a==="overview",onClick:()=>t("overview"),href:"#",children:i("story_tabnav_overview")}),e.jsx(n.Item,{active:a==="integrations",onClick:()=>t("integrations"),href:"#",children:i("story_tabnav_integrations")}),e.jsx(n.Item,{active:a==="activity",onClick:()=>t("activity"),href:"#",children:i("story_tabnav_activity")}),e.jsx(n.Item,{active:a==="settings",onClick:()=>t("settings"),href:"#",children:i("story_tabnav_settings")})]})}},l={render:r=>{const{t:i}=p(_),[a,t]=o.useState("all");return e.jsxs(n,{...r,variant:"pill",children:[e.jsx(n.Item,{active:a==="all",onClick:()=>t("all"),children:i("story_tabnav_all")}),e.jsx(n.Item,{active:a==="unread",onClick:()=>t("unread"),children:i("story_tabnav_unread")}),e.jsx(n.Item,{active:a==="archived",onClick:()=>t("archived"),children:i("story_tabnav_archived")})]})}},v={render:r=>{const{t:i}=p(_),[a,t]=o.useState("daily");return e.jsxs(n,{...r,variant:"contained",children:[e.jsx(n.Item,{active:a==="daily",onClick:()=>t("daily"),children:i("story_tabnav_daily")}),e.jsx(n.Item,{active:a==="weekly",onClick:()=>t("weekly"),children:i("story_tabnav_weekly")}),e.jsx(n.Item,{active:a==="monthly",onClick:()=>t("monthly"),children:i("story_tabnav_monthly")})]})}},m={render:r=>{const{t:i}=p(_),[a,t]=o.useState("code");return e.jsxs(n,{...r,children:[e.jsx(n.Item,{active:a==="code",onClick:()=>t("code"),icon:e.jsx(T,{name:"ChevronRightIcon"}),children:i("story_tabnav_code")}),e.jsx(n.Item,{active:a==="issues",onClick:()=>t("issues"),icon:e.jsx(T,{name:"CircleIcon"}),children:i("story_tabnav_issues")}),e.jsx(n.Item,{active:a==="pulls",onClick:()=>t("pulls"),icon:e.jsx(T,{name:"CopyIcon"}),children:i("story_tabnav_pull_requests")})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...l.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...m.parameters?.docs?.source}}};const x=["Default","Pills","Contained","WithIcons"],D=Object.freeze(Object.defineProperty({__proto__:null,Contained:v,Default:c,Pills:l,WithIcons:m,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{v as C,c as D,l as P,D as T,m as W};
