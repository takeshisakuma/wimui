import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l,r as x,A as p}from"./iframe-Ctdkiilp.js";import{c as j}from"./index-DSjzljfy.js";import{u as E}from"./useIndicator-Uvtp-NT0.js";import{I as A}from"./Icon-FMbScSKn.js";import{u as f}from"./useTranslation-BTb00TCF.js";const w=l.forwardRef(({className:o,children:n,variant:t="underline",align:a="start",size:y="medium",...I},r)=>{const h=x.useRef(null),{containerRef:_,sliderStyle:N,isReady:v}=E({activeSelector:".wim-tab-navigation__item--active",variant:t}),S=x.useCallback(s=>{h.current=s,_.current=s?.querySelector(".wim-tab-navigation__list"),typeof r=="function"?r(s):r&&(r.current=s)},[r,_]),R=s=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(s.key))return;s.preventDefault();const c=Array.from(s.currentTarget.querySelectorAll('[role="tab"]:not([aria-disabled="true"])'));if(c.length===0)return;const T=c.indexOf(document.activeElement);if(T===-1)return;let m;s.key==="ArrowRight"||s.key==="ArrowDown"?m=(T+1)%c.length:s.key==="ArrowLeft"||s.key==="ArrowUp"?m=(T-1+c.length)%c.length:s.key==="Home"?m=0:m=c.length-1;const k=c[m];k.focus(),k.click()};return e.jsx("nav",{ref:S,className:j("wim-tab-navigation",`wim-tab-navigation--${t}`,`wim-tab-navigation--${a}`,`wim-tab-navigation--${y}`,v&&"wim-tab-navigation--ready",o),...I,children:e.jsxs("div",{className:"wim-tab-navigation__list",role:"tablist",onKeyDown:R,children:[e.jsx("div",{className:"wim-tab-navigation__slider",style:N,"aria-hidden":"true"}),n]})})});w.displayName="TabNavigation";const C=l.forwardRef(({className:o,children:n,active:t,disabled:a,icon:y,href:I,onClick:r,...h},_)=>{const N=v=>{if(a){v.preventDefault();return}r&&(v.preventDefault(),r(v))};return e.jsxs("a",{ref:_,href:I,onClick:N,className:j("wim-tab-navigation__item",t&&"wim-tab-navigation__item--active",a&&"wim-tab-navigation__item--disabled",o),role:"tab","aria-selected":t,"aria-disabled":a,tabIndex:t&&!a?0:-1,...h,children:[y&&e.jsx("span",{className:"wim-tab-navigation__icon",children:y}),n]})});C.displayName="TabNavigation.Item";const i=w;i.Item=C;C.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"}}};w.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"small" | "medium" | "large"',elements:[{name:"literal",value:'"small"'},{name:"literal",value:'"medium"'},{name:"literal",value:'"large"'}]},description:"Size of the tabs",defaultValue:{value:'"medium"',computed:!1}}}};const L={title:"Components/Navigation Elements/TabNavigation",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"select",options:["small","medium","large"]}}},d={render:o=>{const{t:n}=f(p),[t,a]=l.useState("overview");return e.jsxs(i,{...o,children:[e.jsx(i.Item,{active:t==="overview",onClick:()=>a("overview"),href:"#",children:n("story_tabnav_overview")}),e.jsx(i.Item,{active:t==="integrations",onClick:()=>a("integrations"),href:"#",children:n("story_tabnav_integrations")}),e.jsx(i.Item,{active:t==="activity",onClick:()=>a("activity"),href:"#",children:n("story_tabnav_activity")}),e.jsx(i.Item,{active:t==="settings",onClick:()=>a("settings"),href:"#",children:n("story_tabnav_settings")})]})}},u={render:o=>{const{t:n}=f(p),[t,a]=l.useState("all");return e.jsxs(i,{...o,variant:"pill",children:[e.jsx(i.Item,{active:t==="all",onClick:()=>a("all"),children:n("story_tabnav_all")}),e.jsx(i.Item,{active:t==="unread",onClick:()=>a("unread"),children:n("story_tabnav_unread")}),e.jsx(i.Item,{active:t==="archived",onClick:()=>a("archived"),children:n("story_tabnav_archived")})]})}},g={render:o=>{const{t:n}=f(p),[t,a]=l.useState("daily");return e.jsxs(i,{...o,variant:"contained",children:[e.jsx(i.Item,{active:t==="daily",onClick:()=>a("daily"),children:n("story_tabnav_daily")}),e.jsx(i.Item,{active:t==="weekly",onClick:()=>a("weekly"),children:n("story_tabnav_weekly")}),e.jsx(i.Item,{active:t==="monthly",onClick:()=>a("monthly"),children:n("story_tabnav_monthly")})]})}},b={render:o=>{const{t:n}=f(p),[t,a]=l.useState("code");return e.jsxs(i,{...o,children:[e.jsx(i.Item,{active:t==="code",onClick:()=>a("code"),icon:e.jsx(A,{name:"ChevronRightIcon"}),children:n("story_tabnav_code")}),e.jsx(i.Item,{active:t==="issues",onClick:()=>a("issues"),icon:e.jsx(A,{name:"CircleIcon"}),children:n("story_tabnav_issues")}),e.jsx(i.Item,{active:t==="pulls",onClick:()=>a("pulls"),icon:e.jsx(A,{name:"CopyIcon"}),children:n("story_tabnav_pull_requests")})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("overview");
    return <TabNavigation {...args}>
        <TabNavigation.Item active={active === "overview"} onClick={() => setActive("overview")} href="#">
          {t("story_tabnav_overview")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "integrations"} onClick={() => setActive("integrations")} href="#">
          {t("story_tabnav_integrations")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "activity"} onClick={() => setActive("activity")} href="#">
          {t("story_tabnav_activity")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "settings"} onClick={() => setActive("settings")} href="#">
          {t("story_tabnav_settings")}
        </TabNavigation.Item>
      </TabNavigation>;
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("all");
    return <TabNavigation {...args} variant="pill">
        <TabNavigation.Item active={active === "all"} onClick={() => setActive("all")}>
          {t("story_tabnav_all")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "unread"} onClick={() => setActive("unread")}>
          {t("story_tabnav_unread")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "archived"} onClick={() => setActive("archived")}>
          {t("story_tabnav_archived")}
        </TabNavigation.Item>
      </TabNavigation>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("daily");
    return <TabNavigation {...args} variant="contained">
        <TabNavigation.Item active={active === "daily"} onClick={() => setActive("daily")}>
          {t("story_tabnav_daily")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "weekly"} onClick={() => setActive("weekly")}>
          {t("story_tabnav_weekly")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "monthly"} onClick={() => setActive("monthly")}>
          {t("story_tabnav_monthly")}
        </TabNavigation.Item>
      </TabNavigation>;
  }
}`,...g.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("code");
    return <TabNavigation {...args}>
        <TabNavigation.Item active={active === "code"} onClick={() => setActive("code")} icon={<Icon name="ChevronRightIcon" />}>
          {t("story_tabnav_code")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "issues"} onClick={() => setActive("issues")} icon={<Icon name="CircleIcon" />}>
          {t("story_tabnav_issues")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "pulls"} onClick={() => setActive("pulls")} icon={<Icon name="CopyIcon" />}>
          {t("story_tabnav_pull_requests")}
        </TabNavigation.Item>
      </TabNavigation>;
  }
}`,...b.parameters?.docs?.source}}};const D=["Default","Pills","Contained","WithIcons"],$=Object.freeze(Object.defineProperty({__proto__:null,Contained:g,Default:d,Pills:u,WithIcons:b,__namedExportsOrder:D,default:L},Symbol.toStringTag,{value:"Module"}));export{g as C,d as D,u as P,$ as T,b as W};
