"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-DiXuc7DI.js";import{oi as l,t as u}from"./src-BE5jBQ9L.js";import{t as d}from"./Icon-Bz8kwOgZ.js";var f=e({Collapsed:()=>v,CustomWidth:()=>y,Default:()=>_,__namedExportsOrder:()=>b,default:()=>h}),p,m,h,g,_,v,y,b,x=t((()=>{u(),p=n(r(),1),s(),a(),m=o(),h={title:`Components/Application Shell/Sidebar`,component:l,parameters:{layout:`fullscreen`},tags:[]},g=()=>{let{t:e}=i(c);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(l.Header,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,width:`100%`,justifyContent:`inherit`},children:[(0,m.jsx)(d,{name:`CircleIcon`,color:`primary`,size:`lg`}),(0,m.jsx)(`span`,{className:`wim-sidebar__hide-collapsed`,style:{fontWeight:`bold`,fontSize:`1.2rem`},children:e(`story.sidebar_wimui`)})]})}),(0,m.jsxs)(l.Content,{children:[(0,m.jsx)(l.Item,{active:!0,icon:(0,m.jsx)(d,{name:`HomeIcon`}),children:e(`story.sidebar_dashboard`)}),(0,m.jsx)(l.Item,{icon:(0,m.jsx)(d,{name:`ProjectIcon`}),children:e(`story.sidebar_projects`)}),(0,m.jsx)(l.Item,{icon:(0,m.jsx)(d,{name:`EmailIcon`}),children:e(`story.sidebar_messages`)}),(0,m.jsx)(l.Item,{icon:(0,m.jsx)(d,{name:`DocumentIcon`}),children:e(`story.sidebar_documents`)}),(0,m.jsx)(l.Item,{icon:(0,m.jsx)(d,{name:`ChartIcon`}),children:e(`story.sidebar_analytics`)}),(0,m.jsx)(l.Item,{icon:(0,m.jsx)(d,{name:`SettingsIcon`}),children:e(`story.sidebar_settings`)})]}),(0,m.jsx)(l.Footer,{children:(0,m.jsxs)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`10px`,width:`100%`,justifyContent:`inherit`},children:[(0,m.jsx)(`div`,{style:{width:32,height:32,borderRadius:`50%`,background:`var(--wim-color-surface-variant)`,flexShrink:0}}),(0,m.jsxs)(`div`,{className:`wim-sidebar__hide-collapsed`,children:[(0,m.jsx)(`div`,{style:{fontSize:`0.8rem`,fontWeight:`bold`},children:e(`story.sidebar_user_name`)}),(0,m.jsx)(`div`,{style:{fontSize:`0.7rem`,color:`var(--wim-color-text-secondary)`},children:e(`story.sidebar_user_email`)})]})]})})]})},_={render:e=>{let{t}=i(c),[n,r]=p.useState(!1);return(0,m.jsxs)(`div`,{style:{position:`fixed`,inset:0,display:`flex`,background:`var(--wim-color-surface-variant)`,overflow:`hidden`},children:[(0,m.jsx)(`style`,{children:`
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
                `}),(0,m.jsx)(`button`,{className:`wim-sidebar-mobile-trigger-demo`,onClick:()=>r(!0),children:t(`story.sidebar_menu`)}),(0,m.jsx)(l,{...e,mobileOpen:n,onOverlayClick:()=>r(!1),children:(0,m.jsx)(g,{})}),(0,m.jsxs)(`main`,{style:{flexGrow:1,padding:`20px`,marginLeft:`20px`,marginTop:`40px`},children:[(0,m.jsx)(`h1`,{children:t(`story.sidebar_content_area`)}),(0,m.jsx)(`p`,{children:t(`story.sidebar_select_item`)})]})]})},args:{bordered:!0}},v={render:_.render,args:{collapsed:!0,bordered:!0}},y={render:_.render,args:{width:300,bordered:!0}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    width: 300,
    bordered: true
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`Collapsed`,`CustomWidth`]}));x();export{v as Collapsed,y as CustomWidth,_ as Default,b as __namedExportsOrder,h as default,x as n,f as t};