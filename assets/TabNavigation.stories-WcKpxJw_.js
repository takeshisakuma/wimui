import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l,r as x,A as f}from"./iframe-BCt2Cqzi.js";import{c as j}from"./index-D0GPwUjE.js";import{u as E}from"./useIndicator-DBb3SeWh.js";import{I as A}from"./Icon-BJ9I8SuJ.js";import{u as I}from"./useTranslation-iqmbh8MZ.js";const w=l.forwardRef(({className:o,children:n,variant:t="underline",align:a="start",size:y="md",...h},r)=>{const N=x.useRef(null),{containerRef:p,sliderStyle:T,isReady:v}=E({activeSelector:".wim-tab-navigation__item--active",variant:t}),S=x.useCallback(s=>{N.current=s,p.current=s?.querySelector(".wim-tab-navigation__list"),typeof r=="function"?r(s):r&&(r.current=s)},[r,p]),R=s=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(s.key))return;s.preventDefault();const c=Array.from(s.currentTarget.querySelectorAll('[role="tab"]:not([aria-disabled="true"])'));if(c.length===0)return;const _=c.indexOf(document.activeElement);if(_===-1)return;let m;s.key==="ArrowRight"||s.key==="ArrowDown"?m=(_+1)%c.length:s.key==="ArrowLeft"||s.key==="ArrowUp"?m=(_-1+c.length)%c.length:s.key==="Home"?m=0:m=c.length-1;const k=c[m];k.focus(),k.click()};return e.jsx("nav",{ref:S,className:j("wim-tab-navigation",`wim-tab-navigation--${t}`,`wim-tab-navigation--${a}`,`wim-tab-navigation--${y}`,v&&"wim-tab-navigation--ready",o),...h,children:e.jsxs("div",{className:"wim-tab-navigation__list",role:"tablist",onKeyDown:R,children:[e.jsx("div",{className:"wim-tab-navigation__slider",style:T,"aria-hidden":"true"}),n]})})});w.displayName="TabNavigation";const C=l.forwardRef(({className:o,children:n,active:t,disabled:a,icon:y,href:h,onClick:r,...N},p)=>{const T=v=>{if(a){v.preventDefault();return}r&&(v.preventDefault(),r(v))};return e.jsxs("a",{ref:p,href:h,onClick:T,className:j("wim-tab-navigation__item",t&&"wim-tab-navigation__item--active",a&&"wim-tab-navigation__item--disabled",o),role:"tab","aria-selected":t,"aria-disabled":a,tabIndex:t&&!a?0:-1,...N,children:[y&&e.jsx("span",{className:"wim-tab-navigation__icon",children:y}),n]})});C.displayName="TabNavigation.Item";const i=w;i.Item=C;C.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"}}};w.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the tabs",defaultValue:{value:'"md"',computed:!1}}}};const L={title:"Components/Navigation Elements/TabNavigation",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"radio",options:["sm","md","lg"]}}},d={render:o=>{const{t:n}=I(f),[t,a]=l.useState("overview");return e.jsxs(i,{...o,children:[e.jsx(i.Item,{active:t==="overview",onClick:()=>a("overview"),href:"#",children:n("story.tabnav_overview")}),e.jsx(i.Item,{active:t==="integrations",onClick:()=>a("integrations"),href:"#",children:n("story.tabnav_integrations")}),e.jsx(i.Item,{active:t==="activity",onClick:()=>a("activity"),href:"#",children:n("story.tabnav_activity")}),e.jsx(i.Item,{active:t==="settings",onClick:()=>a("settings"),href:"#",children:n("story.tabnav_settings")})]})}},u={render:o=>{const{t:n}=I(f),[t,a]=l.useState("all");return e.jsxs(i,{...o,variant:"pill",children:[e.jsx(i.Item,{active:t==="all",onClick:()=>a("all"),children:n("story.tabnav_all")}),e.jsx(i.Item,{active:t==="unread",onClick:()=>a("unread"),children:n("story.tabnav_unread")}),e.jsx(i.Item,{active:t==="archived",onClick:()=>a("archived"),children:n("story.tabnav_archived")})]})}},g={render:o=>{const{t:n}=I(f),[t,a]=l.useState("daily");return e.jsxs(i,{...o,variant:"contained",children:[e.jsx(i.Item,{active:t==="daily",onClick:()=>a("daily"),children:n("story.tabnav_daily")}),e.jsx(i.Item,{active:t==="weekly",onClick:()=>a("weekly"),children:n("story.tabnav_weekly")}),e.jsx(i.Item,{active:t==="monthly",onClick:()=>a("monthly"),children:n("story.tabnav_monthly")})]})}},b={render:o=>{const{t:n}=I(f),[t,a]=l.useState("code");return e.jsxs(i,{...o,children:[e.jsx(i.Item,{active:t==="code",onClick:()=>a("code"),icon:e.jsx(A,{name:"ChevronRightIcon"}),children:n("story.tabnav_code")}),e.jsx(i.Item,{active:t==="issues",onClick:()=>a("issues"),icon:e.jsx(A,{name:"CircleIcon"}),children:n("story.tabnav_issues")}),e.jsx(i.Item,{active:t==="pulls",onClick:()=>a("pulls"),icon:e.jsx(A,{name:"CopyIcon"}),children:n("story.tabnav_pull_requests")})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [active, setActive] = React.useState("overview");
    return <TabNavigation {...args}>
        <TabNavigation.Item active={active === "overview"} onClick={() => setActive("overview")} href="#">
          {t("story.tabnav_overview")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "integrations"} onClick={() => setActive("integrations")} href="#">
          {t("story.tabnav_integrations")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "activity"} onClick={() => setActive("activity")} href="#">
          {t("story.tabnav_activity")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "settings"} onClick={() => setActive("settings")} href="#">
          {t("story.tabnav_settings")}
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
          {t("story.tabnav_all")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "unread"} onClick={() => setActive("unread")}>
          {t("story.tabnav_unread")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "archived"} onClick={() => setActive("archived")}>
          {t("story.tabnav_archived")}
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
          {t("story.tabnav_daily")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "weekly"} onClick={() => setActive("weekly")}>
          {t("story.tabnav_weekly")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "monthly"} onClick={() => setActive("monthly")}>
          {t("story.tabnav_monthly")}
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
          {t("story.tabnav_code")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "issues"} onClick={() => setActive("issues")} icon={<Icon name="CircleIcon" />}>
          {t("story.tabnav_issues")}
        </TabNavigation.Item>
        <TabNavigation.Item active={active === "pulls"} onClick={() => setActive("pulls")} icon={<Icon name="CopyIcon" />}>
          {t("story.tabnav_pull_requests")}
        </TabNavigation.Item>
      </TabNavigation>;
  }
}`,...b.parameters?.docs?.source}}};const D=["Default","Pills","Contained","WithIcons"],$=Object.freeze(Object.defineProperty({__proto__:null,Contained:g,Default:d,Pills:u,WithIcons:b,__namedExportsOrder:D,default:L},Symbol.toStringTag,{value:"Module"}));export{g as C,d as D,u as P,$ as T,b as W};
