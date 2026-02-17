import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as c}from"./iframe-CsOAxGtX.js";import{c as d}from"./index-BdpLzZOi.js";import{H as t}from"./Header--2_TWa9E.js";import{F as H}from"./Footer-C0sRzUyb.js";import{S as s}from"./Sidebar-DYyGO7BM.js";import{T as m}from"./TabBar-CyoXvi3V.js";import{I as o}from"./Icon-DfmqG9tT.js";const I=c.forwardRef(({className:i,children:r,header:a,sidebar:n,footer:g,navbar:f,padding:A=!0,centered:N,maxWidth:x,...T},R)=>{const W=x?{"--wim-appshell-max-width":typeof x=="number"?`${x}px`:x}:void 0;return e.jsxs("div",{ref:R,className:d("wim-appshell",n&&"wim-appshell--with-sidebar",i),style:W,...T,children:[a&&e.jsx("div",{className:"wim-appshell__header",children:a}),e.jsxs("div",{className:"wim-appshell__body",children:[n&&e.jsx("div",{className:"wim-appshell__sidebar",children:n}),e.jsx("main",{className:d("wim-appshell__main",A&&"wim-appshell__main--padded",N&&"wim-appshell__main--centered"),children:N?e.jsx("div",{className:"wim-appshell__content",children:r}):r})]}),f&&e.jsx("div",{className:"wim-appshell__navbar",children:f}),g&&e.jsx("div",{className:"wim-appshell__footer",children:g})]})});I.displayName="AppShell";const j=c.forwardRef(({className:i,children:r,padding:a=!0,centered:n,...g},f)=>e.jsx("main",{ref:f,className:d("wim-appshell__main",a&&"wim-appshell__main--padded",n&&"wim-appshell__main--centered",i),...g,children:n?e.jsx("div",{className:"wim-appshell__content",children:r}):r}));j.displayName="AppShell.Main";const v=c.forwardRef(({className:i,children:r,...a},n)=>e.jsx("div",{ref:n,className:d("wim-appshell__header",i),...a,children:r}));v.displayName="AppShell.Header";const y=c.forwardRef(({className:i,children:r,...a},n)=>e.jsx("div",{ref:n,className:d("wim-appshell__sidebar",i),...a,children:r}));y.displayName="AppShell.Sidebar";const _=c.forwardRef(({className:i,children:r,...a},n)=>e.jsx("div",{ref:n,className:d("wim-appshell__footer",i),...a,children:r}));_.displayName="AppShell.Footer";const w=c.forwardRef(({className:i,children:r,...a},n)=>e.jsx("div",{ref:n,className:d("wim-appshell__navbar",i),...a,children:r}));w.displayName="AppShell.Navbar";const p=I;p.Main=j;p.Header=v;p.Sidebar=y;p.Footer=_;p.Navbar=w;I.__docgenInfo={description:"",methods:[],displayName:"AppShell",props:{header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Header component"},sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Sidebar component"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer component"},navbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Navbar component (mobile bottom navigation)"},padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to main content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center main content horizontally"},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum width for centered content"}}};j.__docgenInfo={description:"",methods:[],displayName:"AppShell.Main",props:{padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center content horizontally"}}};v.__docgenInfo={description:"",methods:[],displayName:"AppShell.Header"};y.__docgenInfo={description:"",methods:[],displayName:"AppShell.Sidebar"};_.__docgenInfo={description:"",methods:[],displayName:"AppShell.Footer"};w.__docgenInfo={description:"",methods:[],displayName:"AppShell.Navbar"};const M={title:"Component/Application Shell/AppShell",component:p,parameters:{layout:"fullscreen"},tags:[],argTypes:{padding:{control:"boolean",description:"メインコンテンツにパディングを追加します"},centered:{control:"boolean",description:"メインコンテンツを水平方向に中央揃えします"},maxWidth:{control:"text",description:"中央揃え時の最大幅を指定します"},header:{table:{disable:!0}},sidebar:{table:{disable:!0}},footer:{table:{disable:!0}},navbar:{table:{disable:!0}},children:{table:{disable:!0}}}},l={args:{header:e.jsxs(t,{bordered:!0,children:[e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(t.Section,{align:"end",children:e.jsx("button",{children:"Login"})})]}),children:e.jsxs("div",{children:[e.jsx("h1",{children:"Welcome to WIM UI"}),e.jsx("p",{children:"This is the main content area of your application."}),e.jsx("p",{children:"The AppShell component provides a flexible layout structure for building modern web applications."})]})}},h={args:{header:e.jsxs(t,{bordered:!0,children:[e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"Dashboard"})}),e.jsxs(t.Section,{align:"end",children:[e.jsx(o,{name:"BellIcon",style:{width:24,height:24}}),e.jsx(o,{name:"UserIcon",style:{width:24,height:24}})]})]}),sidebar:e.jsxs(s,{bordered:!0,width:260,children:[e.jsx(s.Header,{children:e.jsx("div",{style:{padding:"16px",fontWeight:"bold"},children:"Navigation"})}),e.jsxs(s.Content,{children:[e.jsx(s.Item,{icon:e.jsx(o,{name:"HomeIcon"}),active:!0,children:"Dashboard"}),e.jsx(s.Item,{icon:e.jsx(o,{name:"UserIcon"}),children:"Users"}),e.jsx(s.Item,{icon:e.jsx(o,{name:"SettingsIcon"}),children:"Settings"}),e.jsx(s.Item,{icon:e.jsx(o,{name:"FilterIcon"}),children:"Documents"})]})]}),children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dashboard"}),e.jsx("p",{children:"Main content area with sidebar navigation."})]})}},b={args:{header:e.jsx(t,{bordered:!0,children:e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})})}),footer:e.jsx(H,{bordered:!0,children:e.jsx(H.Section,{children:e.jsx("p",{style:{margin:0,textAlign:"center"},children:"© 2024 WIM UI. All rights reserved."})})}),children:e.jsxs("div",{children:[e.jsx("h1",{children:"Page with Footer"}),e.jsx("p",{children:"This layout includes a footer at the bottom."})]})}},u={args:{header:e.jsx(t,{bordered:!0,children:e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"Mobile App"})})}),navbar:e.jsxs(m,{children:[e.jsx(m.Item,{icon:e.jsx(o,{name:"HomeIcon"}),label:"Home",active:!0}),e.jsx(m.Item,{icon:e.jsx(o,{name:"SearchIcon"}),label:"Search"}),e.jsx(m.Item,{icon:e.jsx(o,{name:"BellIcon"}),label:"Notifications"}),e.jsx(m.Item,{icon:e.jsx(o,{name:"UserIcon"}),label:"Profile"})]}),children:e.jsxs("div",{children:[e.jsx("h1",{children:"Mobile Layout"}),e.jsx("p",{children:"This layout includes a bottom navigation bar, commonly used in mobile applications."})]})}},S={args:{...l.args,padding:!0,centered:!1}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header bordered>\r
                <Header.Section align="start">\r
                    <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>\r
                </Header.Section>\r
                <Header.Section align="end">\r
                    <button>Login</button>\r
                </Header.Section>\r
            </Header>,
    children: <div>\r
                <h1>Welcome to WIM UI</h1>\r
                <p>This is the main content area of your application.</p>\r
                <p>The AppShell component provides a flexible layout structure for building modern web applications.</p>\r
            </div>
  }
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header bordered>\r
                <Header.Section align="start">\r
                    <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>Dashboard</div>\r
                </Header.Section>\r
                <Header.Section align="end">\r
                    <Icon name="BellIcon" style={{
          width: 24,
          height: 24
        }} />\r
                    <Icon name="UserIcon" style={{
          width: 24,
          height: 24
        }} />\r
                </Header.Section>\r
            </Header>,
    sidebar: <Sidebar bordered width={260}>\r
                <Sidebar.Header>\r
                    <div style={{
          padding: "16px",
          fontWeight: "bold"
        }}>Navigation</div>\r
                </Sidebar.Header>\r
                <Sidebar.Content>\r
                    <Sidebar.Item icon={<Icon name="HomeIcon" />} active>Dashboard</Sidebar.Item>\r
                    <Sidebar.Item icon={<Icon name="UserIcon" />}>Users</Sidebar.Item>\r
                    <Sidebar.Item icon={<Icon name="SettingsIcon" />}>Settings</Sidebar.Item>\r
                    <Sidebar.Item icon={<Icon name="FilterIcon" />}>Documents</Sidebar.Item>\r
                </Sidebar.Content>\r
            </Sidebar>,
    children: <div>\r
                <h1>Dashboard</h1>\r
                <p>Main content area with sidebar navigation.</p>\r
            </div>
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header bordered>\r
                <Header.Section align="start">\r
                    <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>\r
                </Header.Section>\r
            </Header>,
    footer: <Footer bordered>\r
                <Footer.Section>\r
                    <p style={{
          margin: 0,
          textAlign: "center"
        }}>© 2024 WIM UI. All rights reserved.</p>\r
                </Footer.Section>\r
            </Footer>,
    children: <div>\r
                <h1>Page with Footer</h1>\r
                <p>This layout includes a footer at the bottom.</p>\r
            </div>
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header bordered>\r
                <Header.Section align="start">\r
                    <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>Mobile App</div>\r
                </Header.Section>\r
            </Header>,
    navbar: <TabBar>\r
                <TabBar.Item icon={<Icon name="HomeIcon" />} label="Home" active />\r
                <TabBar.Item icon={<Icon name="SearchIcon" />} label="Search" />\r
                <TabBar.Item icon={<Icon name="BellIcon" />} label="Notifications" />\r
                <TabBar.Item icon={<Icon name="UserIcon" />} label="Profile" />\r
            </TabBar>,
    children: <div>\r
                <h1>Mobile Layout</h1>\r
                <p>This layout includes a bottom navigation bar, commonly used in mobile applications.</p>\r
            </div>
  }
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    padding: true,
    centered: false
  }
}`,...S.parameters?.docs?.source}}};const F=["Default","WithSidebar","WithFooter","WithNavbar","Playground"],O=Object.freeze(Object.defineProperty({__proto__:null,Default:l,Playground:S,WithFooter:b,WithNavbar:u,WithSidebar:h,__namedExportsOrder:F,default:M},Symbol.toStringTag,{value:"Module"}));export{O as A,l as D,h as W,b as a,u as b};
