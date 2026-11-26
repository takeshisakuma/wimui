"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-YD8z3mm4.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Icon-B_o1qSSh.js";import{n as d,t as f}from"./TabNavigation-CfLC_dMV.js";var p=n({Contained:()=>b,Default:()=>_,Pills:()=>y,Sizes:()=>v,WithIcons:()=>x,__namedExportsOrder:()=>S,default:()=>g}),m,h,g,_,v,y,b,x,S;function C(){return(C=t((()=>{m=e(r(),1),d(),l(),a(),o(),h=c(),g={title:`Components/Navigation Elements/TabNavigation`,component:f,parameters:{layout:`padded`},argTypes:{variant:{control:`select`,options:[`underline`,`pill`,`contained`]},align:{control:`select`,options:[`start`,`center`,`end`,`justify`]},size:{control:`radio`,options:[`sm`,`md`,`lg`]}}},_={render:e=>{let{t}=i(s),[n,r]=m.useState(`overview`);return(0,h.jsxs)(f,{...e,children:[(0,h.jsx)(f.Item,{active:n===`overview`,onClick:()=>r(`overview`),href:`#`,children:t(`story.tabnav_overview`)}),(0,h.jsx)(f.Item,{active:n===`integrations`,onClick:()=>r(`integrations`),href:`#`,children:t(`story.tabnav_integrations`)}),(0,h.jsx)(f.Item,{active:n===`activity`,onClick:()=>r(`activity`),href:`#`,children:t(`story.tabnav_activity`)}),(0,h.jsx)(f.Item,{active:n===`settings`,onClick:()=>r(`settings`),href:`#`,children:t(`story.tabnav_settings`)})]})}},v={render:function(e){let{t}=i(s);return(0,h.jsx)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`var(--wim-spacing-xl)`},children:[`sm`,`md`,`lg`].map(n=>(0,h.jsxs)(f,{...e,size:n,"aria-label":t(`story.tabnav_size_label`,{size:n}),children:[(0,h.jsx)(f.Item,{active:!0,href:`#`,children:t(`story.tabnav_overview`)}),(0,h.jsx)(f.Item,{href:`#`,children:t(`story.tabnav_integrations`)}),(0,h.jsx)(f.Item,{href:`#`,children:t(`story.tabnav_activity`)})]},n))})}},y={render:e=>{let{t}=i(s),[n,r]=m.useState(`all`);return(0,h.jsxs)(f,{...e,variant:`pill`,children:[(0,h.jsx)(f.Item,{active:n===`all`,onClick:()=>r(`all`),children:t(`story.tabnav_all`)}),(0,h.jsx)(f.Item,{active:n===`unread`,onClick:()=>r(`unread`),children:t(`story.tabnav_unread`)}),(0,h.jsx)(f.Item,{active:n===`archived`,onClick:()=>r(`archived`),children:t(`story.tabnav_archived`)})]})}},b={render:e=>{let{t}=i(s),[n,r]=m.useState(`daily`);return(0,h.jsxs)(f,{...e,variant:`contained`,children:[(0,h.jsx)(f.Item,{active:n===`daily`,onClick:()=>r(`daily`),children:t(`story.tabnav_daily`)}),(0,h.jsx)(f.Item,{active:n===`weekly`,onClick:()=>r(`weekly`),children:t(`story.tabnav_weekly`)}),(0,h.jsx)(f.Item,{active:n===`monthly`,onClick:()=>r(`monthly`),children:t(`story.tabnav_monthly`)})]})}},x={render:e=>{let{t}=i(s),[n,r]=m.useState(`code`);return(0,h.jsxs)(f,{...e,children:[(0,h.jsx)(f.Item,{active:n===`code`,onClick:()=>r(`code`),icon:(0,h.jsx)(u,{name:`ChevronRightIcon`}),children:t(`story.tabnav_code`)}),(0,h.jsx)(f.Item,{active:n===`issues`,onClick:()=>r(`issues`),icon:(0,h.jsx)(u,{name:`CircleIcon`}),children:t(`story.tabnav_issues`)}),(0,h.jsx)(f.Item,{active:n===`pulls`,onClick:()=>r(`pulls`),icon:(0,h.jsx)(u,{name:`CopyIcon`}),children:t(`story.tabnav_pull_requests`)})]})}},S=[`Default`,`Sizes`,`Pills`,`Contained`,`WithIcons`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "var(--wim-spacing-xl)"
    }}>
        {(["sm", "md", "lg"] as const).map(size => <TabNavigation key={size} {...args} size={size} aria-label={t("story.tabnav_size_label", {
        size
      })}>
            <TabNavigation.Item active href="#">{t("story.tabnav_overview")}</TabNavigation.Item>
            <TabNavigation.Item href="#">{t("story.tabnav_integrations")}</TabNavigation.Item>
            <TabNavigation.Item href="#">{t("story.tabnav_activity")}</TabNavigation.Item>
          </TabNavigation>)}
      </div>;
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}export{p as a,v as i,_ as n,x as o,y as r,C as s,b as t};