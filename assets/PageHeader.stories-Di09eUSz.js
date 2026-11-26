"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-YD8z3mm4.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{n as l,t as u}from"./Button-BZJbe9C-.js";import{n as d,t as f}from"./PageHeader-dcXzd_AJ.js";import{n as p,t as m}from"./Badge-CWMYBHho.js";import{n as h,t as g}from"./Breadcrumb-Mv8L4wFm.js";import{n as _,t as v}from"./TabNavigation-CfLC_dMV.js";var y=n({Default:()=>w,LongTitle:()=>E,TitleOnly:()=>D,WithStatusAndTabs:()=>T,__namedExportsOrder:()=>O,default:()=>C});function b(){let{t:e}=i(s);return(0,S.jsx)(g,{size:`sm`,items:[{label:e(`story.page_header_crumb_expenses`),href:`#`},{label:e(`story.page_header_crumb_reports`)}]})}var x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{x=e(r(),1),a(),o(),d(),h(),_(),l(),p(),S=c(),C={title:`Components/Layout/PageHeader`,component:f,parameters:{layout:`padded`}},w={render:function(){let{t:e}=i(s);return(0,S.jsx)(f,{breadcrumb:b(),title:e(`story.page_header_title`),description:e(`story.page_header_desc`),actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{variant:`outline`,children:e(`story.page_header_action_export`)}),(0,S.jsx)(u,{variant:`solid`,children:e(`story.page_header_action_new`)})]})})}},T={render:function(){let{t:e}=i(s),[t,n]=x.useState(`submitted`);return(0,S.jsx)(f,{breadcrumb:b(),title:e(`story.page_header_title`),status:(0,S.jsx)(m,{content:e(`story.page_header_status`),intent:`warning`,variant:`subtle`,size:`sm`}),description:e(`story.page_header_desc`),actions:(0,S.jsx)(u,{variant:`solid`,children:e(`story.page_header_action_new`)}),tabs:(0,S.jsx)(v,{children:[[`submitted`,`story.page_header_tab_submitted`],[`drafts`,`story.page_header_tab_drafts`],[`returned`,`story.page_header_tab_returned`]].map(([r,i])=>(0,S.jsx)(v.Item,{href:`#`,active:t===r,onClick:e=>{e.preventDefault(),n(r)},children:e(i)},r))})})}},E={render:function(){let{t:e}=i(s);return(0,S.jsx)(f,{breadcrumb:b(),title:e(`story.page_header_title_long`),status:(0,S.jsx)(m,{content:e(`story.page_header_status`),intent:`warning`,variant:`subtle`,size:`sm`}),actions:(0,S.jsxs)(S.Fragment,{children:[(0,S.jsx)(u,{variant:`ghost`,children:e(`story.page_header_action_policy`)}),(0,S.jsx)(u,{variant:`outline`,children:e(`story.page_header_action_export`)}),(0,S.jsx)(u,{variant:`solid`,children:e(`story.page_header_action_new`)})]})})}},D={render:function(){let{t:e}=i(s);return(0,S.jsx)(f,{title:e(`story.page_header_title`)})}},O=[`Default`,`WithStatusAndTabs`,`LongTitle`,`TitleOnly`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <PageHeader breadcrumb={useCrumbs()} title={t("story.page_header_title")} description={t("story.page_header_desc")} actions={<>
            <Button variant="outline">{t("story.page_header_action_export")}</Button>
            <Button variant="solid">{t("story.page_header_action_new")}</Button>
          </>} />;
  }
}`,...w.parameters?.docs?.source},description:{story:`一覧画面の頭。パンくず・題・要約・操作。primary の面は「新しい申請」の 1 つだけにする。`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [view, setView] = React.useState("submitted");
    const tabs = [["submitted", "story.page_header_tab_submitted"], ["drafts", "story.page_header_tab_drafts"], ["returned", "story.page_header_tab_returned"]] as const;
    return <PageHeader breadcrumb={useCrumbs()} title={t("story.page_header_title")} status={<Badge content={t("story.page_header_status")} intent="warning" variant="subtle" size="sm" />} description={t("story.page_header_desc")} actions={<Button variant="solid">{t("story.page_header_action_new")}</Button>} tabs={<TabNavigation>
            {tabs.map(([id, key]) => <TabNavigation.Item key={id} href="#" active={view === id} onClick={(e: React.MouseEvent) => {
        e.preventDefault();
        setView(id);
      }}>
                {t(key)}
              </TabNavigation.Item>)}
          </TabNavigation>} />;
  }
}`,...T.parameters?.docs?.source},description:{story:`題の隣に状態、いちばん下にページの中の切り替え。`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <PageHeader breadcrumb={useCrumbs()} title={t("story.page_header_title_long")} status={<Badge content={t("story.page_header_status")} intent="warning" variant="subtle" size="sm" />} actions={<>
            <Button variant="ghost">{t("story.page_header_action_policy")}</Button>
            <Button variant="outline">{t("story.page_header_action_export")}</Button>
            <Button variant="solid">{t("story.page_header_action_new")}</Button>
          </>} />;
  }
}`,...E.parameters?.docs?.source},description:{story:`長い題は省略せず折り返す。操作は題の右に入りきらないので、次の行へ回る。`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <PageHeader title={t("story.page_header_title")} />;
  }
}`,...D.parameters?.docs?.source},description:{story:`題だけ。パンくずも操作も無いページ（設定の 1 ページなど）。`,...D.parameters?.docs?.description}}}})))()}export{T as a,D as i,E as n,k as o,y as r,w as t};