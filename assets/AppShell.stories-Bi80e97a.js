import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-B26gg4xa.js";import{c as s}from"./index-B4VeCX-Y.js";import{H as t}from"./Header-DcidD7iO.js";import{F as H}from"./Footer-DEY2Cmni.js";import{S as p}from"./Sidebar-DQjWPnZ0.js";import{T as m}from"./TabBar-CpAdNUM8.js";import{I as i}from"./Icon-CkBiA6DD.js";const I=l.forwardRef(({className:o,children:r,header:n,sidebar:a,footer:g,navbar:x,padding:R=!0,centered:N,maxWidth:f,...M},T)=>{const W=f?{"--wim-appshell-max-width":typeof f=="number"?`${f}px`:f}:void 0;return e.jsxs("div",{ref:T,className:s("wim-appshell",!!a&&"wim-appshell--with-sidebar",o),style:W,...M,children:[n&&e.jsx("div",{className:"wim-appshell__header",children:n}),e.jsxs("div",{className:"wim-appshell__body",children:[a&&e.jsx("div",{className:"wim-appshell__sidebar",children:a}),e.jsx("main",{className:s("wim-appshell__main",R&&"wim-appshell__main--padded",N&&"wim-appshell__main--centered"),children:N?e.jsx("div",{className:"wim-appshell__content",children:r}):r})]}),x&&e.jsx("div",{className:"wim-appshell__navbar",children:x}),g&&e.jsx("div",{className:"wim-appshell__footer",children:g})]})});I.displayName="AppShell";const y=l.forwardRef(({className:o,children:r,padding:n=!0,centered:a,...g},x)=>e.jsx("main",{ref:x,className:s("wim-appshell__main",n&&"wim-appshell__main--padded",a&&"wim-appshell__main--centered",o),...g,children:a?e.jsx("div",{className:"wim-appshell__content",children:r}):r}));y.displayName="AppShell.Main";const j=l.forwardRef(({className:o,children:r,...n},a)=>e.jsx("div",{ref:a,className:s("wim-appshell__body",o),...n,children:r}));j.displayName="AppShell.Body";const v=l.forwardRef(({className:o,children:r,...n},a)=>e.jsx("div",{ref:a,className:s("wim-appshell__header",o),...n,children:r}));v.displayName="AppShell.Header";const A=l.forwardRef(({className:o,children:r,...n},a)=>e.jsx("div",{ref:a,className:s("wim-appshell__sidebar",o),...n,children:r}));A.displayName="AppShell.Sidebar";const _=l.forwardRef(({className:o,children:r,...n},a)=>e.jsx("div",{ref:a,className:s("wim-appshell__footer",o),...n,children:r}));_.displayName="AppShell.Footer";const w=l.forwardRef(({className:o,children:r,...n},a)=>e.jsx("div",{ref:a,className:s("wim-appshell__navbar",o),...n,children:r}));w.displayName="AppShell.Navbar";const d=I;d.Main=y;d.Body=j;d.Header=v;d.Sidebar=A;d.Footer=_;d.Navbar=w;I.__docgenInfo={description:"アプリケーション全体のレイアウトを構成するルートコンポーネント。\r\n\r\n## 使い方\r\n### 1. Composition API（推奨）\r\nサブコンポーネント（`AppShell.Header`, `AppShell.Sidebar` など）を\r\n`children` として渡す方法。柔軟なカスタマイズが可能。\r\n\r\n```tsx\r\n<AppShell>\r\n  <AppShell.Header>...</AppShell.Header>\r\n  <AppShell.Sidebar>...</AppShell.Sidebar>\r\n  <AppShell.Main>...</AppShell.Main>\r\n</AppShell>\r\n```\r\n\r\n### 2. Props API（シンプルなケース向け）\r\n`header`, `sidebar`, `footer`, `navbar` を props として渡す方法。\r\nただし、サイドバーを使う場合は Composition API を推奨。\r\n\r\n```tsx\r\n<AppShell header={<Header />} sidebar={<Sidebar />}>\r\n  <main>...</main>\r\n</AppShell>\r\n```\r\n\r\n@note Props API で `sidebar` を渡した場合、`--with-sidebar` クラスが自動付与されます。\r\n      Composition API で `AppShell.Sidebar` を使う場合は、\r\n      親 `AppShell` に `sidebar` prop として何かを渡すか、\r\n      `AppShell.Body` を使って手動でレイアウトを構成してください。",methods:[],displayName:"AppShell",props:{header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Header component"},sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Sidebar component"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer component"},navbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Navbar component (mobile bottom navigation)"},padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to main content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center main content horizontally"},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum width for centered content"}},composes:["Omit"]};y.__docgenInfo={description:"Composition API でメインコンテンツ領域を定義するサブコンポーネント。\r\nProps API の `AppShellRoot` 内蔵 `<main>` と同等の機能を提供します。",methods:[],displayName:"AppShell.Main",props:{padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center content horizontally"}},composes:["Omit"]};j.__docgenInfo={description:`サイドバーとメインコンテンツを横並びにするラッパー。\r
Composition API でサイドバーを使う場合に使用します。`,methods:[],displayName:"AppShell.Body"};v.__docgenInfo={description:"",methods:[],displayName:"AppShell.Header"};A.__docgenInfo={description:"",methods:[],displayName:"AppShell.Sidebar"};_.__docgenInfo={description:"",methods:[],displayName:"AppShell.Footer"};w.__docgenInfo={description:"",methods:[],displayName:"AppShell.Navbar"};const P={title:"Component/Application Shell/AppShell",component:d,parameters:{layout:"fullscreen"},tags:[],argTypes:{padding:{control:"boolean",description:"メインコンテンツにパディングを追加します"},centered:{control:"boolean",description:"メインコンテンツを水平方向に中央揃えします"},maxWidth:{control:"text",description:"中央揃え時の最大幅を指定します"},header:{table:{disable:!0}},sidebar:{table:{disable:!0}},footer:{table:{disable:!0}},navbar:{table:{disable:!0}},children:{table:{disable:!0}}}},c={args:{header:e.jsxs(t,{bordered:!0,children:[e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(t.Section,{align:"end",children:e.jsx("button",{children:"Login"})})]}),children:e.jsxs("div",{children:[e.jsx("h1",{children:"Welcome to WIM UI"}),e.jsx("p",{children:"This is the main content area of your application."}),e.jsx("p",{children:"The AppShell component provides a flexible layout structure for building modern web applications."})]})}},h={render:o=>{const[r,n]=l.useState(!1);return e.jsx(d,{...o,header:e.jsxs(t,{bordered:!0,children:[e.jsxs(t.Section,{align:"start",style:{gap:"10px",alignItems:"center",display:"flex"},children:[e.jsx("style",{children:`
                                .appshell-mobile-trigger {
                                    display: none;
                                    background: none;
                                    border: 1px solid var(--wim-color-border-subtle, #ccc);
                                    border-radius: 4px;
                                    cursor: pointer;
                                    padding: 4px 8px;
                                }
                                @media (max-width: 768px) {
                                    .appshell-mobile-trigger {
                                        display: block;
                                    }
                                }
                            `}),e.jsx("button",{className:"appshell-mobile-trigger",onClick:()=>n(!0),children:"Menu"}),e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"Dashboard"})]}),e.jsxs(t.Section,{align:"end",children:[e.jsx(i,{name:"BellIcon",style:{width:24,height:24}}),e.jsx(i,{name:"UserIcon",style:{width:24,height:24}})]})]}),sidebar:e.jsxs(p,{bordered:!0,width:260,mobileOpen:r,onOverlayClick:()=>n(!1),children:[e.jsx(p.Header,{children:e.jsx("div",{style:{padding:"16px",fontWeight:"bold"},children:"Navigation"})}),e.jsxs(p.Content,{children:[e.jsx(p.Item,{icon:e.jsx(i,{name:"HomeIcon"}),active:!0,children:"Dashboard"}),e.jsx(p.Item,{icon:e.jsx(i,{name:"UserIcon"}),children:"Users"}),e.jsx(p.Item,{icon:e.jsx(i,{name:"SettingsIcon"}),children:"Settings"}),e.jsx(p.Item,{icon:e.jsx(i,{name:"FilterIcon"}),children:"Documents"})]})]}),children:e.jsxs("div",{children:[e.jsx("h1",{children:"Dashboard"}),e.jsx("p",{children:"Main content area with sidebar navigation."})]})})}},b={args:{header:e.jsx(t,{bordered:!0,children:e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})})}),footer:e.jsx(H,{bordered:!0,children:e.jsx(H.Section,{children:e.jsx("p",{style:{margin:0,textAlign:"center"},children:"© 2024 WIM UI. All rights reserved."})})}),children:e.jsxs("div",{children:[e.jsx("h1",{children:"Page with Footer"}),e.jsx("p",{children:"This layout includes a footer at the bottom."})]})}},S={args:{header:e.jsx(t,{bordered:!0,children:e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"Mobile App"})})}),navbar:e.jsxs(m,{children:[e.jsx(m.Item,{icon:e.jsx(i,{name:"HomeIcon"}),label:"Home",active:!0}),e.jsx(m.Item,{icon:e.jsx(i,{name:"SearchIcon"}),label:"Search"}),e.jsx(m.Item,{icon:e.jsx(i,{name:"BellIcon"}),label:"Notifications"}),e.jsx(m.Item,{icon:e.jsx(i,{name:"UserIcon"}),label:"Profile"})]}),children:e.jsxs("div",{children:[e.jsx("h1",{children:"Mobile Layout"}),e.jsx("p",{children:"This layout includes a bottom navigation bar, commonly used in mobile applications."})]})}},u={args:{...c.args,padding:!0,centered:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return <AppShell {...args} header={<Header bordered>\r
                        <Header.Section align="start" style={{
        gap: "10px",
        alignItems: "center",
        display: "flex"
      }}>\r
                            <style>{\`
                                .appshell-mobile-trigger {
                                    display: none;
                                    background: none;
                                    border: 1px solid var(--wim-color-border-subtle, #ccc);
                                    border-radius: 4px;
                                    cursor: pointer;
                                    padding: 4px 8px;
                                }
                                @media (max-width: 768px) {
                                    .appshell-mobile-trigger {
                                        display: block;
                                    }
                                }
                            \`}</style>\r
                            <button className="appshell-mobile-trigger" onClick={() => setMobileOpen(true)}>\r
                                Menu\r
                            </button>\r
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
                    </Header>} sidebar={<Sidebar bordered width={260} mobileOpen={mobileOpen} onOverlayClick={() => setMobileOpen(false)}>\r
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
                    </Sidebar>}>\r
                <div>\r
                    <h1>Dashboard</h1>\r
                    <p>Main content area with sidebar navigation.</p>\r
                </div>\r
            </AppShell>;
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
}`,...b.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    padding: true,
    centered: false
  }
}`,...u.parameters?.docs?.source}}};const C=["Default","WithSidebar","WithFooter","WithNavbar","Playground"],L=Object.freeze(Object.defineProperty({__proto__:null,Default:c,Playground:u,WithFooter:b,WithNavbar:S,WithSidebar:h,__namedExportsOrder:C,default:P},Symbol.toStringTag,{value:"Module"}));export{L as A,c as D,h as W,b as a,S as b};
