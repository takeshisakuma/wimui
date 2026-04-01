import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as c,r as R,A as f}from"./iframe-00CRNq2O.js";import{c as x}from"./index-Gwnravlj.js";import{u as E}from"./useIndicator-CobD1Drh.js";import{u as L}from"./useMergedRef-Be18yWMC.js";import{I as A}from"./Icon-DuncFQFu.js";import{u as I}from"./useTranslation-BYdSjFhs.js";const w=c.forwardRef(({className:s,children:n,variant:t="underline",align:a="start",size:b="md",...h},y)=>{const N=R.useRef(null),{containerRef:p,sliderStyle:T,isReady:l}=E({activeSelector:".wim-tab-navigation__item--active",variant:t}),j=L(N,y,o=>{p&&(p.current=o?.querySelector(".wim-tab-navigation__list")||null)}),S=o=>{if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(o.key))return;o.preventDefault();const r=Array.from(o.currentTarget.querySelectorAll('[role="tab"]:not([aria-disabled="true"])'));if(r.length===0)return;const _=r.indexOf(document.activeElement);if(_===-1)return;let v;o.key==="ArrowRight"||o.key==="ArrowDown"?v=(_+1)%r.length:o.key==="ArrowLeft"||o.key==="ArrowUp"?v=(_-1+r.length)%r.length:o.key==="Home"?v=0:v=r.length-1;const k=r[v];k.focus(),k.click()};return e.jsx("nav",{ref:j,className:x("wim-tab-navigation",`wim-tab-navigation--${t}`,`wim-tab-navigation--${a}`,`wim-tab-navigation--${b}`,l&&"wim-tab-navigation--ready",s),...h,children:e.jsxs("div",{className:"wim-tab-navigation__list",role:"tablist",onKeyDown:S,children:[e.jsx("div",{className:"wim-tab-navigation__slider",style:T,"aria-hidden":"true"}),n]})})});w.displayName="TabNavigation";const C=c.forwardRef(({className:s,children:n,active:t,disabled:a,icon:b,href:h,onClick:y,...N},p)=>{const T=l=>{if(a){l.preventDefault();return}y&&(l.preventDefault(),y(l))};return e.jsxs("a",{ref:p,href:h,onClick:T,className:x("wim-tab-navigation__item",t&&"wim-tab-navigation__item--active",a&&"wim-tab-navigation__item--disabled",s),role:"tab","aria-selected":t,"aria-disabled":a,tabIndex:t&&!a?0:-1,...N,children:[b&&e.jsx("span",{className:"wim-tab-navigation__icon",children:b}),n]})});C.displayName="TabNavigation.Item";const i=w;i.Item=C;C.__docgenInfo={description:"",methods:[],displayName:"TabNavigation.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"Active state"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state"},icon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Icon element"}}};w.__docgenInfo={description:"",methods:[],displayName:"TabNavigation",props:{variant:{required:!1,tsType:{name:"union",raw:'"underline" | "pill" | "contained"',elements:[{name:"literal",value:'"underline"'},{name:"literal",value:'"pill"'},{name:"literal",value:'"contained"'}]},description:"Visual style of the tabs",defaultValue:{value:'"underline"',computed:!1}},align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end" | "justify"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'},{name:"literal",value:'"justify"'}]},description:"Alignment of the tabs",defaultValue:{value:'"start"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"Size of the tabs",defaultValue:{value:'"md"',computed:!1}}}};const D={title:"Components/Navigation Elements/TabNavigation",component:i,parameters:{layout:"padded"},argTypes:{variant:{control:"select",options:["underline","pill","contained"]},align:{control:"select",options:["start","center","end","justify"]},size:{control:"radio",options:["sm","md","lg"]}}},m={render:s=>{const{t:n}=I(f),[t,a]=c.useState("overview");return e.jsxs(i,{...s,children:[e.jsx(i.Item,{active:t==="overview",onClick:()=>a("overview"),href:"#",children:n("story.tabnav_overview")}),e.jsx(i.Item,{active:t==="integrations",onClick:()=>a("integrations"),href:"#",children:n("story.tabnav_integrations")}),e.jsx(i.Item,{active:t==="activity",onClick:()=>a("activity"),href:"#",children:n("story.tabnav_activity")}),e.jsx(i.Item,{active:t==="settings",onClick:()=>a("settings"),href:"#",children:n("story.tabnav_settings")})]})}},d={render:s=>{const{t:n}=I(f),[t,a]=c.useState("all");return e.jsxs(i,{...s,variant:"pill",children:[e.jsx(i.Item,{active:t==="all",onClick:()=>a("all"),children:n("story.tabnav_all")}),e.jsx(i.Item,{active:t==="unread",onClick:()=>a("unread"),children:n("story.tabnav_unread")}),e.jsx(i.Item,{active:t==="archived",onClick:()=>a("archived"),children:n("story.tabnav_archived")})]})}},u={render:s=>{const{t:n}=I(f),[t,a]=c.useState("daily");return e.jsxs(i,{...s,variant:"contained",children:[e.jsx(i.Item,{active:t==="daily",onClick:()=>a("daily"),children:n("story.tabnav_daily")}),e.jsx(i.Item,{active:t==="weekly",onClick:()=>a("weekly"),children:n("story.tabnav_weekly")}),e.jsx(i.Item,{active:t==="monthly",onClick:()=>a("monthly"),children:n("story.tabnav_monthly")})]})}},g={render:s=>{const{t:n}=I(f),[t,a]=c.useState("code");return e.jsxs(i,{...s,children:[e.jsx(i.Item,{active:t==="code",onClick:()=>a("code"),icon:e.jsx(A,{name:"ChevronRightIcon"}),children:n("story.tabnav_code")}),e.jsx(i.Item,{active:t==="issues",onClick:()=>a("issues"),icon:e.jsx(A,{name:"CircleIcon"}),children:n("story.tabnav_issues")}),e.jsx(i.Item,{active:t==="pulls",onClick:()=>a("pulls"),icon:e.jsx(A,{name:"CopyIcon"}),children:n("story.tabnav_pull_requests")})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
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
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
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
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: (args: any) => {
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
}`,...g.parameters?.docs?.source}}};const q=["Default","Pills","Contained","WithIcons"],K=Object.freeze(Object.defineProperty({__proto__:null,Contained:u,Default:m,Pills:d,WithIcons:g,__namedExportsOrder:q,default:D},Symbol.toStringTag,{value:"Module"}));export{u as C,m as D,d as P,K as T,g as W};
