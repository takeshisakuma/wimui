import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as r}from"./Sidebar-B6uqNPzz.js";import{I as n}from"./Icon-DF8W3yNW.js";import{R as p}from"./iframe-DKn2grL9.js";const m={title:"Component/Navigation/Sidebar",component:r,parameters:{layout:"fullscreen"},tags:[]},l=()=>e.jsxs(e.Fragment,{children:[e.jsx(r.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx(n,{name:"CircleIcon",color:"primary",size:"large"}),e.jsx("span",{className:"wim-sidebar__hide-collapsed",style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})]})}),e.jsxs(r.Content,{children:[e.jsx(r.Item,{active:!0,icon:e.jsx(n,{name:"HomeIcon"}),children:"Dashboard"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"ProjectIcon"}),children:"Projects"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"EmailIcon"}),children:"Messages"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"DocumentIcon"}),children:"Documents"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"ChartIcon"}),children:"Analytics"}),e.jsx(r.Item,{icon:e.jsx(n,{name:"SettingsIcon"}),children:"Settings"})]}),e.jsx(r.Footer,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#eee",flexShrink:0}}),e.jsxs("div",{className:"wim-sidebar__hide-collapsed",children:[e.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.7rem",color:"#666"},children:"john@example.com"})]})]})})]}),s={render:a=>e.jsxs("div",{style:{height:"400px",display:"flex",background:"#f4f4f5"},children:[e.jsx(r,{...a,children:e.jsx(l,{})}),e.jsxs("main",{style:{flexGrow:1,padding:"20px"},children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"Select a menu item from the sidebar."})]})]}),args:{bordered:!0}},o={render:s.render,args:{collapsed:!0,bordered:!0}},t={render:s.render,args:{width:300,bordered:!0}},i={render:a=>{const[c,d]=p.useState(!1);return e.jsxs("div",{style:{height:"400px",display:"flex",background:"#f4f4f5",overflow:"hidden",position:"relative"},children:[e.jsx("button",{onClick:()=>d(!0),style:{position:"absolute",top:10,left:10,zIndex:101,padding:"5px 10px",background:"white",border:"1px solid #ccc",borderRadius:"4px"},children:"Menu"}),e.jsx(r,{...a,responsive:!0,mobileOpen:c,onOverlayClick:()=>d(!1),children:e.jsx(l,{})}),e.jsxs("main",{style:{flexGrow:1,padding:"20px",marginLeft:"20px",marginTop:"40px"},children:[e.jsx("h1",{children:"Responsive Layout"}),e.jsx("p",{children:"On larger screens, the sidebar is visible."}),e.jsx("p",{children:"On smaller screens (md and below), it becomes a drawer."}),e.jsx("p",{children:'Click "Menu" to open sidebar on mobile.'})]})]})},args:{bordered:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: SidebarProps) => <div style={{
    height: "400px",
    display: "flex",
    background: "#f4f4f5"
  }}>\r
            <Sidebar {...args}>\r
                <SidebarContent />\r
            </Sidebar>\r
            <main style={{
      flexGrow: 1,
      padding: "20px"
    }}>\r
                <h1>Content Area</h1>\r
                <p>Select a menu item from the sidebar.</p>\r
            </main>\r
        </div>,
  args: {
    bordered: true
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    width: 300,
    bordered: true
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return <div style={{
      height: "400px",
      display: "flex",
      background: "#f4f4f5",
      overflow: "hidden",
      position: "relative"
    }}>\r
                <button onClick={() => setMobileOpen(true)} style={{
        position: 'absolute',
        top: 10,
        left: 10,
        zIndex: 101,
        padding: '5px 10px',
        background: 'white',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }}>\r
                    Menu\r
                </button>\r
\r
                <Sidebar {...args} responsive mobileOpen={mobileOpen} onOverlayClick={() => setMobileOpen(false)}>\r
                    <SidebarContent />\r
                </Sidebar>\r
\r
                <main style={{
        flexGrow: 1,
        padding: "20px",
        marginLeft: "20px",
        marginTop: "40px"
      }}>\r
                    <h1>Responsive Layout</h1>\r
                    <p>On larger screens, the sidebar is visible.</p>\r
                    <p>On smaller screens (md and below), it becomes a drawer.</p>\r
                    <p>Click "Menu" to open sidebar on mobile.</p>\r
                </main>\r
            </div>;
  },
  args: {
    bordered: true
  }
}`,...i.parameters?.docs?.source}}};const x=["Default","Collapsed","CustomWidth","Responsive"],f=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:o,CustomWidth:t,Default:s,Responsive:i,__namedExportsOrder:x,default:m},Symbol.toStringTag,{value:"Module"}));export{o as C,s as D,f as S,t as a};
