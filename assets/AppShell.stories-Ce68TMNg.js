import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-CPBnuDhL.js";import{c as s}from"./index-A-mKiqIX.js";import{H as o}from"./Header-CLrJlXT0.js";import{F as W}from"./Footer-Cs0Ve7a4.js";import{S as p}from"./Sidebar-J_CTgstR.js";import{T as m}from"./TabBar-CmCHA9La.js";import{I as t}from"./Icon-C7wi5xgP.js";import{B as I}from"./Button-DXceT7KB.js";import{I as C}from"./Input-IDk5xqGr.js";const v=l.forwardRef(({className:r,children:n,header:a,sidebar:i,footer:x,navbar:f,padding:M=!0,centered:R,maxWidth:y,...T},B)=>{const z=y?{"--wim-appshell-max-width":typeof y=="number"?`${y}px`:y}:void 0;return e.jsxs("div",{ref:B,className:s("wim-appshell",!!i&&"wim-appshell--with-sidebar",r),style:z,...T,children:[a&&e.jsx("div",{className:"wim-appshell__header",children:a}),e.jsxs("div",{className:"wim-appshell__body",children:[i&&e.jsx("div",{className:"wim-appshell__sidebar",children:i}),e.jsx("main",{className:s("wim-appshell__main",M&&"wim-appshell__main--padded",R&&"wim-appshell__main--centered"),children:R?e.jsx("div",{className:"wim-appshell__content",children:n}):n})]}),f&&e.jsx("div",{className:"wim-appshell__navbar",children:f}),x&&e.jsx("div",{className:"wim-appshell__footer",children:x})]})});v.displayName="AppShell";const j=l.forwardRef(({className:r,children:n,padding:a=!0,centered:i,...x},f)=>e.jsx("main",{ref:f,className:s("wim-appshell__main",a&&"wim-appshell__main--padded",i&&"wim-appshell__main--centered",r),...x,children:i?e.jsx("div",{className:"wim-appshell__content",children:n}):n}));j.displayName="AppShell.Main";const A=l.forwardRef(({className:r,children:n,...a},i)=>e.jsx("div",{ref:i,className:s("wim-appshell__body",r),...a,children:n}));A.displayName="AppShell.Body";const w=l.forwardRef(({className:r,children:n,...a},i)=>e.jsx("div",{ref:i,className:s("wim-appshell__header",r),...a,children:n}));w.displayName="AppShell.Header";const _=l.forwardRef(({className:r,children:n,...a},i)=>e.jsx("div",{ref:i,className:s("wim-appshell__sidebar",r),...a,children:n}));_.displayName="AppShell.Sidebar";const N=l.forwardRef(({className:r,children:n,...a},i)=>e.jsx("div",{ref:i,className:s("wim-appshell__footer",r),...a,children:n}));N.displayName="AppShell.Footer";const H=l.forwardRef(({className:r,children:n,...a},i)=>e.jsx("div",{ref:i,className:s("wim-appshell__navbar",r),...a,children:n}));H.displayName="AppShell.Navbar";const d=v;d.Main=j;d.Body=A;d.Header=w;d.Sidebar=_;d.Footer=N;d.Navbar=H;v.__docgenInfo={description:"アプリケーション全体のレイアウトを構成するルートコンポーネント。\r\n\r\n## 使い方\r\n### 1. Composition API（推奨）\r\nサブコンポーネント（`AppShell.Header`, `AppShell.Sidebar` など）を\r\n`children` として渡す方法。柔軟なカスタマイズが可能。\r\n\r\n```tsx\r\n<AppShell>\r\n  <AppShell.Header>...</AppShell.Header>\r\n  <AppShell.Sidebar>...</AppShell.Sidebar>\r\n  <AppShell.Main>...</AppShell.Main>\r\n</AppShell>\r\n```\r\n\r\n### 2. Props API（シンプルなケース向け）\r\n`header`, `sidebar`, `footer`, `navbar` を props として渡す方法。\r\nただし、サイドバーを使う場合は Composition API を推奨。\r\n\r\n```tsx\r\n<AppShell header={<Header />} sidebar={<Sidebar />}>\r\n  <main>...</main>\r\n</AppShell>\r\n```\r\n\r\n@note Props API で `sidebar` を渡した場合、`--with-sidebar` クラスが自動付与されます。\r\n      Composition API で `AppShell.Sidebar` を使う場合は、\r\n      親 `AppShell` に `sidebar` prop として何かを渡すか、\r\n      `AppShell.Body` を使って手動でレイアウトを構成してください。",methods:[],displayName:"AppShell",props:{header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Header component"},sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Sidebar component"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer component"},navbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Navbar component (mobile bottom navigation)"},padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to main content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center main content horizontally"},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum width for centered content"}},composes:["Omit"]};j.__docgenInfo={description:"Composition API でメインコンテンツ領域を定義するサブコンポーネント。\r\nProps API の `AppShellRoot` 内蔵 `<main>` と同等の機能を提供します。",methods:[],displayName:"AppShell.Main",props:{padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center content horizontally"}},composes:["Omit"]};A.__docgenInfo={description:`サイドバーとメインコンテンツを横並びにするラッパー。\r
Composition API でサイドバーを使う場合に使用します。`,methods:[],displayName:"AppShell.Body"};w.__docgenInfo={description:"",methods:[],displayName:"AppShell.Header"};_.__docgenInfo={description:"",methods:[],displayName:"AppShell.Sidebar"};N.__docgenInfo={description:"",methods:[],displayName:"AppShell.Footer"};H.__docgenInfo={description:"",methods:[],displayName:"AppShell.Navbar"};const P={title:"Component/Application Shell/AppShell",component:d,parameters:{layout:"fullscreen"},tags:[],argTypes:{padding:{control:"boolean",description:"メインコンテンツにパディングを追加します"},centered:{control:"boolean",description:"メインコンテンツを水平方向に中央揃えします"},maxWidth:{control:"text",description:"中央揃え時の最大幅を指定します"},header:{table:{disable:!0}},sidebar:{table:{disable:!0}},footer:{table:{disable:!0}},navbar:{table:{disable:!0}},children:{table:{disable:!0}}}},c={args:{header:e.jsxs(o,{bordered:!0,children:[e.jsx(o.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsxs(o.Section,{align:"end",style:{gap:"8px"},children:[e.jsx(I,{priority:"tertiary",size:"small",children:"Docs"}),e.jsx(I,{priority:"primary",size:"small",children:"Sign In"})]})]}),children:e.jsxs("div",{children:[e.jsx("h2",{children:"Welcome to WIM UI"}),e.jsx("p",{children:"This is the main content area of your application."}),e.jsx("p",{children:"The AppShell component provides a flexible layout structure for building modern web applications."})]})}},h={args:{header:e.jsxs(o,{bordered:!0,children:[e.jsx(o.Section,{align:"start",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:32,height:32,background:"#0066ff",borderRadius:4}}),e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WimStore"})]})}),e.jsx(o.Section,{align:"center",children:e.jsx("div",{style:{width:"100%",maxWidth:400},children:e.jsx(C,{placeholder:"Search products...",leftIcon:"SearchIcon",fullWidth:!0})})}),e.jsxs(o.Section,{align:"end",style:{gap:"12px"},children:[e.jsx(t,{name:"BellIcon",style:{cursor:"pointer"}}),e.jsx(t,{name:"StarIcon",style:{cursor:"pointer"}}),e.jsx(I,{priority:"primary",size:"small",children:"Checkout"})]})]}),children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px"},children:[1,2,3,4,5,6].map(r=>e.jsxs("div",{style:{border:"1px solid #eee",borderRadius:8,padding:16},children:[e.jsx("div",{style:{width:"100%",aspectRatio:"1",background:"#f5f5f5",borderRadius:4,marginBottom:8}}),e.jsxs("div",{style:{fontWeight:"bold"},children:["Product ",r]}),e.jsx("div",{style:{color:"#666",fontSize:"0.9rem"},children:"$99.00"})]},r))})}},b={render:r=>{const[n,a]=l.useState(!1);return e.jsx(d,{...r,header:e.jsxs(o,{bordered:!0,children:[e.jsxs(o.Section,{align:"start",style:{gap:"10px",alignItems:"center",display:"flex"},children:[e.jsx("style",{children:`
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
                            `}),e.jsx("button",{className:"appshell-mobile-trigger",onClick:()=>a(!0),children:"Menu"}),e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"Dashboard"})]}),e.jsxs(o.Section,{align:"end",children:[e.jsx(t,{name:"BellIcon",style:{width:24,height:24}}),e.jsx(t,{name:"UserIcon",style:{width:24,height:24}})]})]}),sidebar:e.jsxs(p,{bordered:!0,width:260,mobileOpen:n,onOverlayClick:()=>a(!1),children:[e.jsx(p.Header,{children:e.jsx("div",{style:{padding:"16px",fontWeight:"bold"},children:"Navigation"})}),e.jsxs(p.Content,{children:[e.jsx(p.Item,{icon:e.jsx(t,{name:"HomeIcon"}),active:!0,children:"Dashboard"}),e.jsx(p.Item,{icon:e.jsx(t,{name:"UserIcon"}),children:"Users"}),e.jsx(p.Item,{icon:e.jsx(t,{name:"SettingsIcon"}),children:"Settings"}),e.jsx(p.Item,{icon:e.jsx(t,{name:"FilterIcon"}),children:"Documents"})]})]}),children:e.jsxs("div",{children:[e.jsx("h2",{children:"Dashboard"}),e.jsx("p",{children:"Main content area with sidebar navigation."})]})})}},u={args:{header:e.jsx(o,{bordered:!0,children:e.jsx(o.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})})}),footer:e.jsx(W,{bordered:!0,children:e.jsx(W.Section,{children:e.jsx("p",{style:{margin:0,textAlign:"center"},children:"© 2024 WIM UI. All rights reserved."})})}),children:e.jsxs("div",{children:[e.jsx("h2",{children:"Page with Footer"}),e.jsx("p",{children:"This layout includes a footer at the bottom."})]})}},g={args:{header:e.jsx(o,{bordered:!0,children:e.jsx(o.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"Mobile App"})})}),navbar:e.jsxs(m,{children:[e.jsx(m.Item,{icon:e.jsx(t,{name:"HomeIcon"}),label:"Home",active:!0}),e.jsx(m.Item,{icon:e.jsx(t,{name:"SearchIcon"}),label:"Search"}),e.jsx(m.Item,{icon:e.jsx(t,{name:"BellIcon"}),label:"Notifications"}),e.jsx(m.Item,{icon:e.jsx(t,{name:"UserIcon"}),label:"Profile"})]}),children:e.jsxs("div",{children:[e.jsx("h2",{children:"Mobile Layout"}),e.jsx("p",{children:"This layout includes a bottom navigation bar, commonly used in mobile applications."})]})}},S={args:{...c.args,padding:!0,centered:!1}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header bordered>\r
                <Header.Section align="start">\r
                    <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>\r
                </Header.Section>\r
                <Header.Section align="end" style={{
        gap: "8px"
      }}>\r
                    <Button priority="tertiary" size="small">Docs</Button>\r
                    <Button priority="primary" size="small">Sign In</Button>\r
                </Header.Section>\r
            </Header>,
    children: <div>\r
                <h2>Welcome to WIM UI</h2>\r
                <p>This is the main content area of your application.</p>\r
                <p>The AppShell component provides a flexible layout structure for building modern web applications.</p>\r
            </div>
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    header: <Header bordered>\r
                <Header.Section align="start">\r
                    <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>\r
                        <div style={{
            width: 32,
            height: 32,
            background: "#0066ff",
            borderRadius: 4
          }} />\r
                        <div style={{
            fontWeight: "bold",
            fontSize: "1.2rem"
          }}>WimStore</div>\r
                    </div>\r
                </Header.Section>\r
                <Header.Section align="center">\r
                    <div style={{
          width: "100%",
          maxWidth: 400
        }}>\r
                        <Input placeholder="Search products..." leftIcon="SearchIcon" fullWidth />\r
                    </div>\r
                </Header.Section>\r
                <Header.Section align="end" style={{
        gap: "12px"
      }}>\r
                    <Icon name="BellIcon" style={{
          cursor: "pointer"
        }} />\r
                    <Icon name="StarIcon" style={{
          cursor: "pointer"
        }} />\r
                    <Button priority="primary" size="small">Checkout</Button>\r
                </Header.Section>\r
            </Header>,
    children: <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
      gap: "20px"
    }}>\r
                {[1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{
        border: "1px solid #eee",
        borderRadius: 8,
        padding: 16
      }}>\r
                        <div style={{
          width: "100%",
          aspectRatio: "1",
          background: "#f5f5f5",
          borderRadius: 4,
          marginBottom: 8
        }} />\r
                        <div style={{
          fontWeight: "bold"
        }}>Product {i}</div>\r
                        <div style={{
          color: "#666",
          fontSize: "0.9rem"
        }}>$99.00</div>\r
                    </div>)}\r
            </div>
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
                    <h2>Dashboard</h2>\r
                    <p>Main content area with sidebar navigation.</p>\r
                </div>\r
            </AppShell>;
  }
}`,...b.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
                <h2>Page with Footer</h2>\r
                <p>This layout includes a footer at the bottom.</p>\r
            </div>
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
                <h2>Mobile Layout</h2>\r
                <p>This layout includes a bottom navigation bar, commonly used in mobile applications.</p>\r
            </div>
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    padding: true,
    centered: false
  }
}`,...S.parameters?.docs?.source}}};const F=["Default","ModernApp","WithSidebar","WithFooter","WithNavbar","Playground"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:c,ModernApp:h,Playground:S,WithFooter:u,WithNavbar:g,WithSidebar:b,__namedExportsOrder:F,default:P},Symbol.toStringTag,{value:"Module"}));export{J as A,c as D,b as W,u as a,g as b};
