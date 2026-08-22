"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{t as l,zt as u}from"./src-Ssuy8lr7.js";import{t as d}from"./Icon-dyTmj1rn.js";var f=e({Contained:()=>v,Default:()=>g,Pills:()=>_,WithIcons:()=>y,__namedExportsOrder:()=>b,default:()=>h}),p,m,h,g,_,v,y,b,x=t((()=>{p=n(r(),1),l(),s(),a(),m=o(),h={title:`Components/Navigation Elements/TabNavigation`,component:u,parameters:{layout:`padded`},argTypes:{variant:{control:`select`,options:[`underline`,`pill`,`contained`]},align:{control:`select`,options:[`start`,`center`,`end`,`justify`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},g={render:e=>{let{t}=i(c),[n,r]=p.useState(`overview`);return(0,m.jsxs)(u,{...e,children:[(0,m.jsx)(u.Item,{active:n===`overview`,onClick:()=>r(`overview`),href:`#`,children:t(`story.tabnav_overview`)}),(0,m.jsx)(u.Item,{active:n===`integrations`,onClick:()=>r(`integrations`),href:`#`,children:t(`story.tabnav_integrations`)}),(0,m.jsx)(u.Item,{active:n===`activity`,onClick:()=>r(`activity`),href:`#`,children:t(`story.tabnav_activity`)}),(0,m.jsx)(u.Item,{active:n===`settings`,onClick:()=>r(`settings`),href:`#`,children:t(`story.tabnav_settings`)})]})}},_={render:e=>{let{t}=i(c),[n,r]=p.useState(`all`);return(0,m.jsxs)(u,{...e,variant:`pill`,children:[(0,m.jsx)(u.Item,{active:n===`all`,onClick:()=>r(`all`),children:t(`story.tabnav_all`)}),(0,m.jsx)(u.Item,{active:n===`unread`,onClick:()=>r(`unread`),children:t(`story.tabnav_unread`)}),(0,m.jsx)(u.Item,{active:n===`archived`,onClick:()=>r(`archived`),children:t(`story.tabnav_archived`)})]})}},v={render:e=>{let{t}=i(c),[n,r]=p.useState(`daily`);return(0,m.jsxs)(u,{...e,variant:`contained`,children:[(0,m.jsx)(u.Item,{active:n===`daily`,onClick:()=>r(`daily`),children:t(`story.tabnav_daily`)}),(0,m.jsx)(u.Item,{active:n===`weekly`,onClick:()=>r(`weekly`),children:t(`story.tabnav_weekly`)}),(0,m.jsx)(u.Item,{active:n===`monthly`,onClick:()=>r(`monthly`),children:t(`story.tabnav_monthly`)})]})}},y={render:e=>{let{t}=i(c),[n,r]=p.useState(`code`);return(0,m.jsxs)(u,{...e,children:[(0,m.jsx)(u.Item,{active:n===`code`,onClick:()=>r(`code`),icon:(0,m.jsx)(d,{name:`ChevronRightIcon`}),children:t(`story.tabnav_code`)}),(0,m.jsx)(u.Item,{active:n===`issues`,onClick:()=>r(`issues`),icon:(0,m.jsx)(d,{name:`CircleIcon`}),children:t(`story.tabnav_issues`)}),(0,m.jsx)(u.Item,{active:n===`pulls`,onClick:()=>r(`pulls`),icon:(0,m.jsx)(d,{name:`CopyIcon`}),children:t(`story.tabnav_pull_requests`)})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Pills`,`Contained`,`WithIcons`]}));x();export{v as Contained,g as Default,_ as Pills,y as WithIcons,b as __namedExportsOrder,h as default,x as n,f as t};