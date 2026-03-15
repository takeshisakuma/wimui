import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as n}from"./Sidebar-CB52ConR.js";import{I as s}from"./Icon-58HG4YiW.js";import{R as p}from"./iframe-e7GXbi08.js";import{A as l}from"./i18nConstants-BpHxieg5.js";import{u as c}from"./useTranslation-DW6bJnO1.js";const b={title:"Components/Application Shell/Sidebar",component:n,parameters:{layout:"fullscreen"},tags:[]},x=()=>{const{t:r}=c(l);return e.jsxs(e.Fragment,{children:[e.jsx(n.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx(s,{name:"CircleIcon",color:"primary",size:"large"}),e.jsx("span",{className:"wim-sidebar__hide-collapsed",style:{fontWeight:"bold",fontSize:"1.2rem"},children:r("story_sidebar_wimui")})]})}),e.jsxs(n.Content,{children:[e.jsx(n.Item,{active:!0,icon:e.jsx(s,{name:"HomeIcon"}),children:r("story_sidebar_dashboard")}),e.jsx(n.Item,{icon:e.jsx(s,{name:"ProjectIcon"}),children:r("story_sidebar_projects")}),e.jsx(n.Item,{icon:e.jsx(s,{name:"EmailIcon"}),children:r("story_sidebar_messages")}),e.jsx(n.Item,{icon:e.jsx(s,{name:"DocumentIcon"}),children:r("story_sidebar_documents")}),e.jsx(n.Item,{icon:e.jsx(s,{name:"ChartIcon"}),children:r("story_sidebar_analytics")}),e.jsx(n.Item,{icon:e.jsx(s,{name:"SettingsIcon"}),children:r("story_sidebar_settings")})]}),e.jsx(n.Footer,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#eee",flexShrink:0}}),e.jsxs("div",{className:"wim-sidebar__hide-collapsed",children:[e.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold"},children:r("story_sidebar_user_name")}),e.jsx("div",{style:{fontSize:"0.7rem",color:"#666"},children:r("story_sidebar_user_email")})]})]})})]})},t={render:r=>{const{t:a}=c(l),[m,d]=p.useState(!1);return e.jsxs("div",{style:{position:"fixed",inset:0,display:"flex",background:"#f4f4f5",overflow:"hidden"},children:[e.jsx("style",{children:`
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
                `}),e.jsx("button",{className:"wim-sidebar-mobile-trigger-demo",onClick:()=>d(!0),children:a("story_sidebar_menu")}),e.jsx(n,{...r,mobileOpen:m,onOverlayClick:()=>d(!1),children:e.jsx(x,{})}),e.jsxs("main",{style:{flexGrow:1,padding:"20px",marginLeft:"20px",marginTop:"40px"},children:[e.jsx("h1",{children:a("story_sidebar_content_area")}),e.jsx("p",{children:a("story_sidebar_select_item")})]})]})},args:{bordered:!0}},i={render:t.render,args:{collapsed:!0,bordered:!0}},o={render:t.render,args:{width:300,bordered:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: (args: SidebarProps) => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    width: 300,
    bordered: true
  }
}`,...o.parameters?.docs?.source}}};const u=["Default","Collapsed","CustomWidth"],S=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:i,CustomWidth:o,Default:t,__namedExportsOrder:u,default:b},Symbol.toStringTag,{value:"Module"}));export{i as C,t as D,S,o as a};
