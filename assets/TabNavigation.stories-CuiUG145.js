import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as c,r as f}from"./iframe-DYlShzji.js";import{c as C}from"./index-Cm_IZiCA.js";import{u as w}from"./useIndicator-BETICEfd.js";import{I as N}from"./Icon-B_fKZ-SS.js";import{u as p}from"./useTranslation-DygSvNPf.js";const T=c.forwardRef(({className:o,children:n,variant:a="underline",align:t="start",size:m="medium",...y},s)=>{const b=f.useRef(null),{containerRef:u,sliderStyle:I,isReady:_}=w({activeSelector:".wim-tab-navigation__item--active",variant:a}),k=f.useCallback(g=>{b.current=g,u.current=g?.querySelector(".wim-tab-navigation__list"),typeof s=="function"?s(g):s&&(s.current=g)},[s,u]);return e.jsx("nav",{ref:k,className:C("wim-tab-navigation",`wim-tab-navigation--${a}`,`wim-tab-navigation--${t}`,`wim-tab-navigation--${m}`,_&&"wim-tab-navigation--ready",o),...y,children:e.jsxs("div",{className:"wim-tab-navigation__list",role:"tablist",children:[e.jsx("div",{className:"wim-tab-navigation__slider",style:I,"aria-hidden":"true"}),n]})})});T.displayName="TabNavigation";const h=c.forwardRef(({className:o,children:n,active:a,disabled:t,icon:m,href:y,onClick:s,...b},u)=>{const I=_=>{if(t){_.preventDefault();return}s&&s(_)};return e.jsxs("a",{ref:u,href:y,onClick:I,className:C("wim-tab-navigation__item",a&&"wim-tab-navigation__item--active",t&&"wim-tab-navigation__item--disabled",o),role:"tab","aria-selected":a,"aria-disabled":t,tabIndex:t?-1:0,...b,children:[m&&e.jsx("span",{className:"wim-tab-navigation__icon",children:m}),n]})});h.displayName="TabNavigation.Item";const i=T;i.Item=h;h.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"}}};T.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the tabs",defaultValue:{value:'"medium"',computed:!1}}}};const j={title:"Components/Navigation Elements/TabNavigation",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"select",options:["small","medium","large"]}}},r={render:o=>{const{t:n}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[a,t]=c.useState("overview");return e.jsxs(i,{...o,children:[e.jsx(i.Item,{active:a==="overview",onClick:()=>t("overview"),href:"#",children:n("story_tabnav_overview")}),e.jsx(i.Item,{active:a==="integrations",onClick:()=>t("integrations"),href:"#",children:n("story_tabnav_integrations")}),e.jsx(i.Item,{active:a==="activity",onClick:()=>t("activity"),href:"#",children:n("story_tabnav_activity")}),e.jsx(i.Item,{active:a==="settings",onClick:()=>t("settings"),href:"#",children:n("story_tabnav_settings")})]})}},l={render:o=>{const{t:n}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[a,t]=c.useState("all");return e.jsxs(i,{...o,variant:"pill",children:[e.jsx(i.Item,{active:a==="all",onClick:()=>t("all"),children:n("story_tabnav_all")}),e.jsx(i.Item,{active:a==="unread",onClick:()=>t("unread"),children:n("story_tabnav_unread")}),e.jsx(i.Item,{active:a==="archived",onClick:()=>t("archived"),children:n("story_tabnav_archived")})]})}},d={render:o=>{const{t:n}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[a,t]=c.useState("daily");return e.jsxs(i,{...o,variant:"contained",children:[e.jsx(i.Item,{active:a==="daily",onClick:()=>t("daily"),children:n("story_tabnav_daily")}),e.jsx(i.Item,{active:a==="weekly",onClick:()=>t("weekly"),children:n("story_tabnav_weekly")}),e.jsx(i.Item,{active:a==="monthly",onClick:()=>t("monthly"),children:n("story_tabnav_monthly")})]})}},v={render:o=>{const{t:n}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[a,t]=c.useState("code");return e.jsxs(i,{...o,children:[e.jsx(i.Item,{active:a==="code",onClick:()=>t("code"),icon:e.jsx(N,{name:"ChevronRightIcon"}),children:n("story_tabnav_code")}),e.jsx(i.Item,{active:a==="issues",onClick:()=>t("issues"),icon:e.jsx(N,{name:"CircleIcon"}),children:n("story_tabnav_issues")}),e.jsx(i.Item,{active:a==="pulls",onClick:()=>t("pulls"),icon:e.jsx(N,{name:"CopyIcon"}),children:n("story_tabnav_pull_requests")})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...d.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...v.parameters?.docs?.source}}};const x=["Default","Pills","Contained","WithIcons"],E=Object.freeze(Object.defineProperty({__proto__:null,Contained:d,Default:r,Pills:l,WithIcons:v,__namedExportsOrder:x,default:j},Symbol.toStringTag,{value:"Module"}));export{d as C,r as D,l as P,E as T,v as W};
