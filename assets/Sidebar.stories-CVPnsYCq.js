"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Sidebar-D_luKnvC.js";import{n as d,t as f}from"./Icon-B_89lpXW.js";var p=n({Collapsed:()=>y,CustomWidth:()=>b,Default:()=>v,__namedExportsOrder:()=>x,default:()=>g}),m,h,g,_,v,y,b,x;function S(){return(S=t((()=>{l(),m=e(r(),1),a(),o(),d(),h=c(),g={title:`Components/Application Shell/Sidebar`,component:u,parameters:{layout:`fullscreen`},tags:[]},_=()=>{let{t:e}=i(s);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Header,{children:(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,width:`100%`,justifyContent:`inherit`},children:[(0,h.jsx)(f,{name:`CircleIcon`,color:`primary`,size:`lg`}),(0,h.jsx)(`span`,{className:`wim-sidebar__hide-collapsed`,style:{fontWeight:`bold`,fontSize:`1.2rem`},children:e(`story.sidebar_wimui`)})]})}),(0,h.jsxs)(u.Content,{children:[(0,h.jsx)(u.Item,{active:!0,icon:(0,h.jsx)(f,{name:`HomeIcon`}),children:e(`story.sidebar_dashboard`)}),(0,h.jsx)(u.Item,{icon:(0,h.jsx)(f,{name:`ProjectIcon`}),children:e(`story.sidebar_projects`)}),(0,h.jsx)(u.Item,{icon:(0,h.jsx)(f,{name:`EmailIcon`}),children:e(`story.sidebar_messages`)}),(0,h.jsx)(u.Item,{icon:(0,h.jsx)(f,{name:`DocumentIcon`}),children:e(`story.sidebar_documents`)}),(0,h.jsx)(u.Item,{icon:(0,h.jsx)(f,{name:`ChartIcon`}),children:e(`story.sidebar_analytics`)}),(0,h.jsx)(u.Item,{icon:(0,h.jsx)(f,{name:`SettingsIcon`}),children:e(`story.sidebar_settings`)})]}),(0,h.jsx)(u.Footer,{children:(0,h.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,width:`100%`,justifyContent:`inherit`},children:[(0,h.jsx)(`div`,{style:{width:32,height:32,borderRadius:`50%`,background:`var(--wim-color-surface-variant)`,flexShrink:0}}),(0,h.jsxs)(`div`,{className:`wim-sidebar__hide-collapsed`,children:[(0,h.jsx)(`div`,{style:{fontSize:`0.8rem`,fontWeight:`bold`},children:e(`story.sidebar_user_name`)}),(0,h.jsx)(`div`,{style:{fontSize:`0.7rem`,color:`var(--wim-color-text-secondary)`},children:e(`story.sidebar_user_email`)})]})]})})]})},v={render:e=>{let{t}=i(s),[n,r]=m.useState(!1);return(0,h.jsxs)(`div`,{style:{position:`fixed`,inset:0,display:`flex`,background:`var(--wim-color-surface-variant)`,overflow:`hidden`},children:[(0,h.jsx)(`style`,{children:`
                    .wim-sidebar-mobile-trigger-demo {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        z-index: 101;
                        padding: 5px 10px;
                        /* color を明示しないと UA 既定のボタン文字色に依存し、
                           OS の color-scheme とテーマがズレると背景と同化して読めなくなる
                           （ダークテーマの黒文字・Android 実機ライト等）。surface と対の
                           text-primary を明示してテーマ/プラットフォーム非依存で可読にする。 */
                        color: var(--wim-color-text-primary);
                        background: var(--wim-color-surface);
                        border: 1px solid var(--wim-color-border);
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    @media (min-width: 769px) { /* md breakpoint override */
                        .wim-sidebar-mobile-trigger-demo {
                            display: none;
                        }
                    }
                `}),(0,h.jsx)(`button`,{className:`wim-sidebar-mobile-trigger-demo`,onClick:()=>r(!0),children:t(`story.sidebar_menu`)}),(0,h.jsx)(u,{...e,mobileOpen:n,onOverlayClick:()=>r(!1),children:(0,h.jsx)(_,{})}),(0,h.jsxs)(`main`,{style:{flexGrow:1,padding:`20px`,marginLeft:`20px`,marginTop:`40px`},children:[(0,h.jsx)(`h1`,{children:t(`story.sidebar_content_area`)}),(0,h.jsx)(`p`,{children:t(`story.sidebar_select_item`)})]})]})},args:{bordered:!0}},y={render:v.render,args:{collapsed:!0,bordered:!0}},b={render:v.render,args:{width:300,bordered:!0}},x=[`Default`,`Collapsed`,`CustomWidth`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: (args: SidebarProps) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return <div style={{
      position: "fixed",
      inset: 0,
      display: "flex",
      background: "var(--wim-color-surface-variant)",
      overflow: "hidden"
    }}>
        <style>{\`
                    .wim-sidebar-mobile-trigger-demo {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        z-index: 101;
                        padding: 5px 10px;
                        /* color を明示しないと UA 既定のボタン文字色に依存し、
                           OS の color-scheme とテーマがズレると背景と同化して読めなくなる
                           （ダークテーマの黒文字・Android 実機ライト等）。surface と対の
                           text-primary を明示してテーマ/プラットフォーム非依存で可読にする。 */
                        color: var(--wim-color-text-primary);
                        background: var(--wim-color-surface);
                        border: 1px solid var(--wim-color-border);
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    @media (min-width: 769px) { /* md breakpoint override */
                        .wim-sidebar-mobile-trigger-demo {
                            display: none;
                        }
                    }
                \`}</style>
        <button className="wim-sidebar-mobile-trigger-demo" onClick={() => setMobileOpen(true)}>
          {t("story.sidebar_menu")}
        </button>
        <Sidebar {...args} mobileOpen={mobileOpen} onOverlayClick={() => setMobileOpen(false)}>
          <SidebarContent />
        </Sidebar>
        <main style={{
        flexGrow: 1,
        padding: "20px",
        marginLeft: "20px",
        marginTop: "40px"
      }}>
          <h1>{t("story.sidebar_content_area")}</h1>
          <p>{t("story.sidebar_select_item")}</p>
        </main>
      </div>;
  },
  args: {
    bordered: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    width: 300,
    bordered: true
  }
}`,...b.parameters?.docs?.source}}}})))()}export{S as a,p as i,b as n,v as r,y as t};