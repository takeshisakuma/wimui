import{j as e}from"./jsx-runtime-u17CrQMm.js";import{S as r}from"./Sidebar-ClXip89J.js";import{I as s}from"./Icon-Djms2A0i.js";const d={title:"Component/Layout/Sidebar",component:r,parameters:{layout:"fullscreen"},tags:[]},i=()=>e.jsxs(e.Fragment,{children:[e.jsx(r.Header,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px",width:"100%",justifyContent:"inherit"},children:[e.jsx(s,{name:"CircleIcon",color:"primary",size:"large"}),e.jsx("span",{className:"wim-sidebar__hide-collapsed",style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})]})}),e.jsxs(r.Content,{children:[e.jsx(r.Item,{active:!0,icon:e.jsx(s,{name:"HomeIcon"}),children:"Dashboard"}),e.jsx(r.Item,{icon:e.jsx(s,{name:"ProjectIcon"}),children:"Projects"}),e.jsx(r.Item,{icon:e.jsx(s,{name:"ChartIcon"}),children:"Analytics"}),e.jsx(r.Item,{icon:e.jsx(s,{name:"SettingsIcon"}),children:"Settings"})]}),e.jsx(r.Footer,{children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[e.jsx("div",{style:{width:32,height:32,borderRadius:"50%",background:"#eee",flexShrink:0}}),e.jsxs("div",{className:"wim-sidebar__hide-collapsed",children:[e.jsx("div",{style:{fontSize:"0.8rem",fontWeight:"bold"},children:"John Doe"}),e.jsx("div",{style:{fontSize:"0.7rem",color:"#666"},children:"john@example.com"})]})]})})]}),n={render:o=>e.jsxs("div",{style:{height:"400px",display:"flex",background:"#f4f4f5"},children:[e.jsx(r,{...o,children:e.jsx(i,{})}),e.jsxs("main",{style:{flexGrow:1,padding:"20px"},children:[e.jsx("h1",{children:"Content Area"}),e.jsx("p",{children:"Select a menu item from the sidebar."})]})]}),args:{bordered:!0}},t={render:n.render,args:{collapsed:!0,bordered:!0}},a={render:n.render,args:{width:200,bordered:!0}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    collapsed: true,
    bordered: true
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: Default.render,
  args: {
    width: 200,
    bordered: true
  }
}`,...a.parameters?.docs?.source}}};const l=["Default","Collapsed","CustomWidth"],h=Object.freeze(Object.defineProperty({__proto__:null,Collapsed:t,CustomWidth:a,Default:n,__namedExportsOrder:l,default:d},Symbol.toStringTag,{value:"Module"}));export{t as C,n as D,h as S,a};
