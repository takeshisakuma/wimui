import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l,r as x}from"./iframe-e7GXbi08.js";import{c as j}from"./index-CyTIjRcp.js";import{u as E}from"./useIndicator-qoEvs7g7.js";import{I as A}from"./Icon-58HG4YiW.js";import{A as p}from"./i18nConstants-BpHxieg5.js";import{u as f}from"./useTranslation-DW6bJnO1.js";const w=l.forwardRef(({className:s,children:n,variant:t="underline",align:a="start",size:y="medium",...I},o)=>{const h=x.useRef(null),{containerRef:_,sliderStyle:N,isReady:v}=E({activeSelector:".wim-tab-navigation__item--active",variant:t}),S=x.useCallback(r=>{h.current=r,_.current=r?.querySelector(".wim-tab-navigation__list"),typeof o=="function"?o(r):o&&(o.current=r)},[o,_]),R=r=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(r.key))return;r.preventDefault();const c=Array.from(r.currentTarget.querySelectorAll('[role="tab"]:not([aria-disabled="true"])'));if(c.length===0)return;const T=c.indexOf(document.activeElement);if(T===-1)return;let m;r.key==="ArrowRight"||r.key==="ArrowDown"?m=(T+1)%c.length:r.key==="ArrowLeft"||r.key==="ArrowUp"?m=(T-1+c.length)%c.length:r.key==="Home"?m=0:m=c.length-1;const k=c[m];k.focus(),k.click()};return e.jsx("nav",{ref:S,className:j("wim-tab-navigation",`wim-tab-navigation--${t}`,`wim-tab-navigation--${a}`,`wim-tab-navigation--${y}`,v&&"wim-tab-navigation--ready",s),...I,children:e.jsxs("div",{className:"wim-tab-navigation__list",role:"tablist",onKeyDown:R,children:[e.jsx("div",{className:"wim-tab-navigation__slider",style:N,"aria-hidden":"true"}),n]})})});w.displayName="TabNavigation";const C=l.forwardRef(({className:s,children:n,active:t,disabled:a,icon:y,href:I,onClick:o,...h},_)=>{const N=v=>{if(a){v.preventDefault();return}o&&(v.preventDefault(),o(v))};return e.jsxs("a",{ref:_,href:I,onClick:N,className:j("wim-tab-navigation__item",t&&"wim-tab-navigation__item--active",a&&"wim-tab-navigation__item--disabled",s),role:"tab","aria-selected":t,"aria-disabled":a,tabIndex:t&&!a?0:-1,...h,children:[y&&e.jsx("span",{className:"wim-tab-navigation__icon",children:y}),n]})});C.displayName="TabNavigation.Item";const i=w;i.Item=C;C.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"}}};w.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the tabs",defaultValue:{value:'"medium"',computed:!1}}}};const L={title:"Components/Navigation Elements/TabNavigation",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"select",options:["small","medium","large"]}}},d={render:s=>{const{t:n}=f(p),[t,a]=l.useState("overview");return e.jsxs(i,{...s,children:[e.jsx(i.Item,{active:t==="overview",onClick:()=>a("overview"),href:"#",children:n("story_tabnav_overview")}),e.jsx(i.Item,{active:t==="integrations",onClick:()=>a("integrations"),href:"#",children:n("story_tabnav_integrations")}),e.jsx(i.Item,{active:t==="activity",onClick:()=>a("activity"),href:"#",children:n("story_tabnav_activity")}),e.jsx(i.Item,{active:t==="settings",onClick:()=>a("settings"),href:"#",children:n("story_tabnav_settings")})]})}},u={render:s=>{const{t:n}=f(p),[t,a]=l.useState("all");return e.jsxs(i,{...s,variant:"pill",children:[e.jsx(i.Item,{active:t==="all",onClick:()=>a("all"),children:n("story_tabnav_all")}),e.jsx(i.Item,{active:t==="unread",onClick:()=>a("unread"),children:n("story_tabnav_unread")}),e.jsx(i.Item,{active:t==="archived",onClick:()=>a("archived"),children:n("story_tabnav_archived")})]})}},g={render:s=>{const{t:n}=f(p),[t,a]=l.useState("daily");return e.jsxs(i,{...s,variant:"contained",children:[e.jsx(i.Item,{active:t==="daily",onClick:()=>a("daily"),children:n("story_tabnav_daily")}),e.jsx(i.Item,{active:t==="weekly",onClick:()=>a("weekly"),children:n("story_tabnav_weekly")}),e.jsx(i.Item,{active:t==="monthly",onClick:()=>a("monthly"),children:n("story_tabnav_monthly")})]})}},b={render:s=>{const{t:n}=f(p),[t,a]=l.useState("code");return e.jsxs(i,{...s,children:[e.jsx(i.Item,{active:t==="code",onClick:()=>a("code"),icon:e.jsx(A,{name:"ChevronRightIcon"}),children:n("story_tabnav_code")}),e.jsx(i.Item,{active:t==="issues",onClick:()=>a("issues"),icon:e.jsx(A,{name:"CircleIcon"}),children:n("story_tabnav_issues")}),e.jsx(i.Item,{active:t==="pulls",onClick:()=>a("pulls"),icon:e.jsx(A,{name:"CopyIcon"}),children:n("story_tabnav_pull_requests")})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const D=["Default","Pills","Contained","WithIcons"],H=Object.freeze(Object.defineProperty({__proto__:null,Contained:g,Default:d,Pills:u,WithIcons:b,__namedExportsOrder:D,default:L},Symbol.toStringTag,{value:"Module"}));export{g as C,d as D,u as P,H as T,b as W};
