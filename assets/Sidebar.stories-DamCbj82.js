import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as r}from"./Sidebar-CidX5tp1.js";import{I as n}from"./Icon--zs9NUy0.js";import{R as l}from"./iframe-Dgvn1YDu.js";const c={title:"Components/Application Shell/Sidebar",component:r,parameters:{layout:"fullscreen"},tags:[]},m=()=>e.jsxs(e.Fragment,{children:[e.jsx(r.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx(n,{name:"CircleIcon",color:"primary",size:"large"}),e.jsx("span",{className:"wim-sidebar__hide-collapsed",style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})]})}),e.jsxs(r.Content,{children:[e.jsx(r.Item,{active:!0,icon:e.jsx(n,{name:"HomeIcon"}),children:"Dashboard"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"ProjectIcon"}),children:"Projects"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"EmailIcon"}),children:"Messages"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"DocumentIcon"}),children:"Documents"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"ChartIcon"}),children:"Analytics"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"SettingsIcon"}),children:"Settings"})]}),e.jsx(r.Footer,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#eee",flexShrink:0}}),e.jsxs("div",{className:"wim-sidebar__hide-collapsed",children:[e.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.7rem",color:"#666"},children:"john@example.com"})]})]})})]}),i={render:a=>{const[d,t]=l.useState(!1);return e.jsxs("div",{style:{position:"fixed",inset:0,display:"flex",background:"#f4f4f5",overflow:"hidden"},children:[e.jsx("style",{children:`
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
                `}),e.jsx("button",{className:"wim-sidebar-mobile-trigger-demo",onClick:()=>t(!0),children:"Menu"}),e.jsx(r,{...a,mobileOpen:d,onOverlayClick:()=>t(!1),children:e.jsx(m,{})}),e.jsxs("main",{style:{flexGrow:1,padding:"20px",marginLeft:"20px",marginTop:"40px"},children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"Select a menu item from the sidebar."})]})]})},args:{bordered:!0}},o={render:i.render,args:{collapsed:!0,bordered:!0}},s={render:i.render,args:{width:300,bordered:!0}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: (args: SidebarProps) => {
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
          Menu\r
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
          <h1>Content Area</h1>\r
          <p>Select a menu item from the sidebar.</p>\r
        </main>\r
      </div>;
  },
  args: {
    bordered: true
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    width: 300,
    bordered: true
  }
}`,...s.parameters?.docs?.source}}};const p=["Default","Collapsed","CustomWidth"],g=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:o,CustomWidth:s,Default:i,__namedExportsOrder:p,default:c},Symbol.toStringTag,{value:"Module"}));export{o as C,i as D,g as S,s as a};
