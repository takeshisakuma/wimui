import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as s}from"./Sidebar-D94UN5XU.js";import{I as n}from"./Icon-D4ZM1Mba.js";import{R as m}from"./iframe-BFeRKT7x.js";import{u as c}from"./useTranslation-DVQ5refS.js";const p={title:"Components/Application Shell/Sidebar",component:s,parameters:{layout:"fullscreen"},tags:[]},b=()=>{const{t:r}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs(e.Fragment,{children:[e.jsx(s.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx(n,{name:"CircleIcon",color:"primary",size:"large"}),e.jsx("span",{className:"wim-sidebar__hide-collapsed",style:{fontWeight:"bold",fontSize:"1.2rem"},children:r("story_sidebar_wimui")})]})}),e.jsxs(s.Content,{children:[e.jsx(s.Item,{active:!0,icon:e.jsx(n,{name:"HomeIcon"}),children:r("story_sidebar_dashboard")}),e.jsx(s.Item,{icon:e.jsx(n,{name:"ProjectIcon"}),children:r("story_sidebar_projects")}),e.jsx(s.Item,{icon:e.jsx(n,{name:"EmailIcon"}),children:r("story_sidebar_messages")}),e.jsx(s.Item,{icon:e.jsx(n,{name:"DocumentIcon"}),children:r("story_sidebar_documents")}),e.jsx(s.Item,{icon:e.jsx(n,{name:"ChartIcon"}),children:r("story_sidebar_analytics")}),e.jsx(s.Item,{icon:e.jsx(n,{name:"SettingsIcon"}),children:r("story_sidebar_settings")})]}),e.jsx(s.Footer,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#eee",flexShrink:0}}),e.jsxs("div",{className:"wim-sidebar__hide-collapsed",children:[e.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold"},children:r("story_sidebar_user_name")}),e.jsx("div",{style:{fontSize:"0.7rem",color:"#666"},children:r("story_sidebar_user_email")})]})]})})]})},o={render:r=>{const{t:d}=c(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[l,a]=m.useState(!1);return e.jsxs("div",{style:{position:"fixed",inset:0,display:"flex",background:"#f4f4f5",overflow:"hidden"},children:[e.jsx("style",{children:`
                    .wim-sidebar-mobile-trigger-demo {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        z-index: 101;
                        padding: 5px 10px;
                        background: white;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    @media (min-width: 769px) { /* md breakpoint override */
                        .wim-sidebar-mobile-trigger-demo {
                            display: none;
                        }
                    }
                `}),e.jsx("button",{className:"wim-sidebar-mobile-trigger-demo",onClick:()=>a(!0),children:d("story_sidebar_menu")}),e.jsx(s,{...r,mobileOpen:l,onOverlayClick:()=>a(!1),children:e.jsx(b,{})}),e.jsxs("main",{style:{flexGrow:1,padding:"20px",marginLeft:"20px",marginTop:"40px"},children:[e.jsx("h1",{children:d("story_sidebar_content_area")}),e.jsx("p",{children:d("story_sidebar_select_item")})]})]})},args:{bordered:!0}},i={render:o.render,args:{collapsed:!0,bordered:!0}},t={render:o.render,args:{width:300,bordered:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: (args: SidebarProps) => {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return <div style={{
      position: "fixed",
      inset: 0,
      display: "flex",
      background: "#f4f4f5",
      overflow: "hidden"
    }}>\r
        <style>{\`
                    .wim-sidebar-mobile-trigger-demo {
                        position: absolute;
                        top: 10px;
                        left: 10px;
                        z-index: 101;
                        padding: 5px 10px;
                        background: white;
                        border: 1px solid #ccc;
                        border-radius: 4px;
                        cursor: pointer;
                    }
                    @media (min-width: 769px) { /* md breakpoint override */
                        .wim-sidebar-mobile-trigger-demo {
                            display: none;
                        }
                    }
                \`}</style>\r
        <button className="wim-sidebar-mobile-trigger-demo" onClick={() => setMobileOpen(true)}>\r
          {t("story_sidebar_menu")}\r
        </button>\r
        <Sidebar {...args} mobileOpen={mobileOpen} onOverlayClick={() => setMobileOpen(false)}>\r
          <SidebarContent />\r
        </Sidebar>\r
        <main style={{
        flexGrow: 1,
        padding: "20px",
        marginLeft: "20px",
        marginTop: "40px"
      }}>\r
          <h1>{t("story_sidebar_content_area")}</h1>\r
          <p>{t("story_sidebar_select_item")}</p>\r
        </main>\r
      </div>;
  },
  args: {
    bordered: true
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    width: 300,
    bordered: true
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","Collapsed","CustomWidth"],f=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:i,CustomWidth:t,Default:o,__namedExportsOrder:u,default:p},Symbol.toStringTag,{value:"Module"}));export{i as C,o as D,f as S,t as a};
