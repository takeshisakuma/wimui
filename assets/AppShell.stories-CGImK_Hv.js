import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as l}from"./iframe-CxkJglxX.js";import{c as d}from"./index-DuEzwbhC.js";import{H as t}from"./Header-BkArQydT.js";import{F as B}from"./Footer-BtlWXmY2.js";import{S as p}from"./Sidebar-usZfmy5v.js";import{T as _}from"./TabBar-CZAwcboI.js";import{I as i}from"./Icon-CgqnfbzT.js";import{B as v}from"./Button-CFQDuGiZ.js";import{I as k}from"./Input-DxSkVJIy.js";import{u as m}from"./useTranslation-0fSK9VPD.js";const j=l.forwardRef(({className:s,children:r,header:n,sidebar:o,footer:c,navbar:h,padding:T=!0,centered:W,maxWidth:f,...z},M)=>{const C=f?{"--wim-appshell-max-width":typeof f=="number"?`${f}px`:f}:void 0;return e.jsxs("div",{ref:M,className:d("wim-appshell",!!o&&"wim-appshell--with-sidebar",!!h&&"wim-appshell--with-navbar",s),style:C,...z,children:[n&&e.jsx("div",{className:"wim-appshell__header",children:n}),e.jsxs("div",{className:"wim-appshell__body",children:[o&&e.jsx("div",{className:"wim-appshell__sidebar",children:o}),e.jsx("main",{className:d("wim-appshell__main",T&&"wim-appshell__main--padded",W&&"wim-appshell__main--centered"),children:W?e.jsx("div",{className:"wim-appshell__content",children:r}):r})]}),h&&e.jsx("div",{className:"wim-appshell__navbar",children:h}),c&&e.jsx("div",{className:"wim-appshell__footer",children:c})]})});j.displayName="AppShell";const I=l.forwardRef(({className:s,children:r,padding:n=!0,centered:o,...c},h)=>e.jsx("main",{ref:h,className:d("wim-appshell__main",n&&"wim-appshell__main--padded",o&&"wim-appshell__main--centered",s),...c,children:o?e.jsx("div",{className:"wim-appshell__content",children:r}):r}));I.displayName="AppShell.Main";const A=l.forwardRef(({className:s,children:r,...n},o)=>e.jsx("div",{ref:o,className:d("wim-appshell__body",s),...n,children:r}));A.displayName="AppShell.Body";const w=l.forwardRef(({className:s,children:r,...n},o)=>e.jsx("div",{ref:o,className:d("wim-appshell__header",s),...n,children:r}));w.displayName="AppShell.Header";const H=l.forwardRef(({className:s,children:r,...n},o)=>e.jsx("div",{ref:o,className:d("wim-appshell__sidebar",s),...n,children:r}));H.displayName="AppShell.Sidebar";const R=l.forwardRef(({className:s,children:r,...n},o)=>e.jsx("div",{ref:o,className:d("wim-appshell__footer",s),...n,children:r}));R.displayName="AppShell.Footer";const N=l.forwardRef(({className:s,children:r,...n},o)=>e.jsx("div",{ref:o,className:d("wim-appshell__navbar",s),...n,children:r}));N.displayName="AppShell.Navbar";const a=j;a.Main=I;a.Body=A;a.Header=w;a.Sidebar=H;a.Footer=R;a.Navbar=N;j.__docgenInfo={description:"アプリケーション全体のレイアウトを構成するルートコンポーネント。\n\n## 使い方\n### 1. Composition API（推奨）\nサブコンポーネント（`AppShell.Header`, `AppShell.Sidebar` など）を\n`children` として渡す方法。柔軟なカスタマイズが可能。\n\n```tsx\n<AppShell>\n  <AppShell.Header>...</AppShell.Header>\n  <AppShell.Sidebar>...</AppShell.Sidebar>\n  <AppShell.Main>...</AppShell.Main>\n</AppShell>\n```\n\n### 2. Props API（シンプルなケース向け）\n`header`, `sidebar`, `footer`, `navbar` を props として渡す方法。\nただし、サイドバーを使う場合は Composition API を推奨。\n\n```tsx\n<AppShell header={<Header />} sidebar={<Sidebar />}>\n  <main>...</main>\n</AppShell>\n```\n\n@note Props API で `sidebar` を渡した場合、`--with-sidebar` クラスが自動付与されます。\n      Composition API で `AppShell.Sidebar` を使う場合は、\n      親 `AppShell` に `sidebar` prop として何かを渡すか、\n      `AppShell.Body` を使って手動でレイアウトを構成してください。",methods:[],displayName:"AppShell",props:{header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Header component"},sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Sidebar component"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer component"},navbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Navbar component (mobile bottom navigation)"},padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to main content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center main content horizontally"},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum width for centered content"}},composes:["Omit"]};I.__docgenInfo={description:"Composition API でメインコンテンツ領域を定義するサブコンポーネント。\nProps API の `AppShellRoot` 内蔵 `<main>` と同等の機能を提供します。",methods:[],displayName:"AppShell.Main",props:{padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center content horizontally"}},composes:["Omit"]};A.__docgenInfo={description:`サイドバーとメインコンテンツを横並びにするラッパー。
Composition API でサイドバーを使う場合に使用します。`,methods:[],displayName:"AppShell.Body"};w.__docgenInfo={description:"",methods:[],displayName:"AppShell.Header"};H.__docgenInfo={description:"",methods:[],displayName:"AppShell.Sidebar"};R.__docgenInfo={description:"",methods:[],displayName:"AppShell.Footer"};N.__docgenInfo={description:"",methods:[],displayName:"AppShell.Navbar"};const F={title:"Components/Application Shell/AppShell",component:a,parameters:{layout:"fullscreen"},tags:[],argTypes:{padding:{control:"boolean",description:"Add padding to the main content"},centered:{control:"boolean",description:"Center the main content horizontally"},maxWidth:{control:"text",description:"Specify the maximum width when centered"},header:{table:{disable:!0}},sidebar:{table:{disable:!0}},footer:{table:{disable:!0}},navbar:{table:{disable:!0}},children:{table:{disable:!0}}}},y={render:function(r){const{t:n}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...r,header:e.jsxs(t,{bordered:!0,children:[e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsxs(t.Section,{align:"end",style:{gap:"8px"},children:[e.jsx(v,{priority:"tertiary",size:"small",children:n("story_appshell_docs")}),e.jsx(v,{priority:"primary",size:"small",children:n("story_appshell_signin")})]})]}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_welcome")}),e.jsx("p",{children:n("story_appshell_main_content")}),e.jsx("p",{children:n("story_appshell_flexible_layout")})]})})}},u={render:function(r){const{t:n}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...r,header:e.jsxs(t,{bordered:!0,children:[e.jsx(t.Section,{align:"start",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:32,height:32,background:"#0066ff",borderRadius:4}}),e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WimStore"})]})}),e.jsx(t.Section,{align:"center",children:e.jsx("div",{style:{width:"100%",maxWidth:400},children:e.jsx(k,{placeholder:n("story_appshell_search_placeholder"),leftIcon:"SearchIcon",fullWidth:!0})})}),e.jsxs(t.Section,{align:"end",style:{gap:"12px"},children:[e.jsx(i,{name:"BellIcon",style:{cursor:"pointer"}}),e.jsx(i,{name:"StarIcon",style:{cursor:"pointer"}}),e.jsx(v,{priority:"primary",size:"small",children:n("story_appshell_checkout")})]})]}),children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px"},children:[1,2,3,4,5,6].map(o=>e.jsxs("div",{style:{border:"1px solid #eee",borderRadius:8,padding:16},children:[e.jsx("div",{style:{width:"100%",aspectRatio:"1",background:"#f5f5f5",borderRadius:4,marginBottom:8}}),e.jsxs("div",{style:{fontWeight:"bold"},children:[n("story_appshell_product")," ",o]}),e.jsx("div",{style:{color:"#666",fontSize:"0.9rem"},children:"$99.00"})]},o))})})}},b={render:function(r){const{t:n}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[o,c]=l.useState(!1);return e.jsx(a,{...r,header:e.jsxs(t,{bordered:!0,children:[e.jsxs(t.Section,{align:"start",style:{gap:"10px",alignItems:"center",display:"flex"},children:[e.jsx("style",{children:`
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
                            `}),e.jsx("button",{className:"appshell-mobile-trigger",onClick:()=>c(!0),children:n("story_common_menu","Menu")}),e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:n("story_appshell_dashboard")})]}),e.jsxs(t.Section,{align:"end",children:[e.jsx(i,{name:"BellIcon",style:{width:24,height:24}}),e.jsx(i,{name:"UserIcon",style:{width:24,height:24}})]})]}),sidebar:e.jsxs(p,{bordered:!0,width:260,mobileOpen:o,onOverlayClick:()=>c(!1),children:[e.jsx(p.Header,{children:e.jsx("div",{style:{padding:"16px",fontWeight:"bold"},children:n("story_appshell_navigation")})}),e.jsxs(p.Content,{children:[e.jsx(p.Item,{icon:e.jsx(i,{name:"HomeIcon"}),active:!0,children:n("story_appshell_dashboard")}),e.jsx(p.Item,{icon:e.jsx(i,{name:"UserIcon"}),children:n("story_appshell_users")}),e.jsx(p.Item,{icon:e.jsx(i,{name:"SettingsIcon"}),children:n("story_appshell_settings")}),e.jsx(p.Item,{icon:e.jsx(i,{name:"FilterIcon"}),children:n("story_appshell_documents")})]})]}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_dashboard")}),e.jsx("p",{children:n("story_appshell_dashboard_desc")})]})})}},g={render:function(r){const{t:n}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...r,header:e.jsx(t,{bordered:!0,children:e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})})}),footer:e.jsx(B,{bordered:!0,children:e.jsx(B.Section,{children:e.jsx("p",{style:{margin:0,textAlign:"center"},children:n("story_appshell_rights")})})}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_footer_title")}),e.jsx("p",{children:n("story_appshell_footer_desc")})]})})}},x={render:function(r){const{t:n}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...r,header:e.jsx(t,{bordered:!0,children:e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:n("story_appshell_mobile_app")})})}),navbar:e.jsxs(_,{children:[e.jsx(_.Item,{icon:e.jsx(i,{name:"HomeIcon"}),label:n("story_common_home"),active:!0}),e.jsx(_.Item,{icon:e.jsx(i,{name:"SearchIcon"}),label:n("story_common_search")}),e.jsx(_.Item,{icon:e.jsx(i,{name:"BellIcon"}),label:n("story_common_alerts")}),e.jsx(_.Item,{icon:e.jsx(i,{name:"UserIcon"}),label:n("story_common_profile")})]}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_mobile_layout")}),e.jsx("p",{children:n("story_appshell_mobile_desc")})]})})}},S={render:function(r){const{t:n}=m(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(a,{...r,header:e.jsx(t,{bordered:!0,children:e.jsx(t.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})})}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_welcome")}),e.jsx("p",{children:n("story_appshell_main_content")})]})})},args:{padding:!0,centered:!1}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <AppShell {...args} header={<Header bordered>\r
            <Header.Section align="start">\r
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>\r
                WIM UI\r
              </div>\r
            </Header.Section>\r
            <Header.Section align="end" style={{
        gap: "8px"
      }}>\r
              <Button priority="tertiary" size="small">\r
                {t("story_appshell_docs")}\r
              </Button>\r
              <Button priority="primary" size="small">\r
                {t("story_appshell_signin")}\r
              </Button>\r
            </Header.Section>\r
          </Header>}>\r
        <div>\r
          <h2>{t("story_appshell_welcome")}</h2>\r
          <p>{t("story_appshell_main_content")}</p>\r
          <p>{t("story_appshell_flexible_layout")}</p>\r
        </div>\r
      </AppShell>;
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <AppShell {...args} header={<Header bordered>\r
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
          }}>\r
                  WimStore\r
                </div>\r
              </div>\r
            </Header.Section>\r
            <Header.Section align="center">\r
              <div style={{
          width: "100%",
          maxWidth: 400
        }}>\r
                <Input placeholder={t("story_appshell_search_placeholder")} leftIcon="SearchIcon" fullWidth />\r
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
              <Button priority="primary" size="small">\r
                {t("story_appshell_checkout")}\r
              </Button>\r
            </Header.Section>\r
          </Header>}>\r
        <div style={{
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
          }}>\r
                {t("story_appshell_product")} {i}\r
              </div>\r
              <div style={{
            color: "#666",
            fontSize: "0.9rem"
          }}>$99.00</div>\r
            </div>)}\r
        </div>\r
      </AppShell>;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
                {t("story_common_menu", "Menu")}\r
              </button>\r
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>\r
                {t("story_appshell_dashboard")}\r
              </div>\r
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
        }}>\r
                {t("story_appshell_navigation")}\r
              </div>\r
            </Sidebar.Header>\r
            <Sidebar.Content>\r
              <Sidebar.Item icon={<Icon name="HomeIcon" />} active>\r
                {t("story_appshell_dashboard")}\r
              </Sidebar.Item>\r
              <Sidebar.Item icon={<Icon name="UserIcon" />}>\r
                {t("story_appshell_users")}\r
              </Sidebar.Item>\r
              <Sidebar.Item icon={<Icon name="SettingsIcon" />}>\r
                {t("story_appshell_settings")}\r
              </Sidebar.Item>\r
              <Sidebar.Item icon={<Icon name="FilterIcon" />}>\r
                {t("story_appshell_documents")}\r
              </Sidebar.Item>\r
            </Sidebar.Content>\r
          </Sidebar>}>\r
        <div>\r
          <h2>{t("story_appshell_dashboard")}</h2>\r
          <p>{t("story_appshell_dashboard_desc")}</p>\r
        </div>\r
      </AppShell>;
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <AppShell {...args} header={<Header bordered>\r
            <Header.Section align="start">\r
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>\r
                WIM UI\r
              </div>\r
            </Header.Section>\r
          </Header>} footer={<Footer bordered>\r
            <Footer.Section>\r
              <p style={{
          margin: 0,
          textAlign: "center"
        }}>\r
                {t("story_appshell_rights")}\r
              </p>\r
            </Footer.Section>\r
          </Footer>}>\r
        <div>\r
          <h2>{t("story_appshell_footer_title")}</h2>\r
          <p>{t("story_appshell_footer_desc")}</p>\r
        </div>\r
      </AppShell>;
  }
}`,...g.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <AppShell {...args} header={<Header bordered>\r
            <Header.Section align="start">\r
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>\r
                {t("story_appshell_mobile_app")}\r
              </div>\r
            </Header.Section>\r
          </Header>} navbar={<TabBar>\r
            <TabBar.Item icon={<Icon name="HomeIcon" />} label={t("story_common_home")} active />\r
            <TabBar.Item icon={<Icon name="SearchIcon" />} label={t("story_common_search")} />\r
            <TabBar.Item icon={<Icon name="BellIcon" />} label={t("story_common_alerts")} />\r
            <TabBar.Item icon={<Icon name="UserIcon" />} label={t("story_common_profile")} />\r
          </TabBar>}>\r
        <div>\r
          <h2>{t("story_appshell_mobile_layout")}</h2>\r
          <p>{t("story_appshell_mobile_desc")}</p>\r
        </div>\r
      </AppShell>;
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <AppShell {...args} header={<Header bordered>\r
            <Header.Section align="start">\r
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>\r
                WIM UI\r
              </div>\r
            </Header.Section>\r
          </Header>}>\r
        <div>\r
          <h2>{t("story_appshell_welcome")}</h2>\r
          <p>{t("story_appshell_main_content")}</p>\r
        </div>\r
      </AppShell>;
  },
  args: {
    padding: true,
    centered: false
  }
}`,...S.parameters?.docs?.source}}};const O=["Default","ModernApp","WithSidebar","WithFooter","WithNavbar","Playground"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:y,ModernApp:u,Playground:S,WithFooter:g,WithNavbar:x,WithSidebar:b,__namedExportsOrder:O,default:F},Symbol.toStringTag,{value:"Module"}));export{Q as A};
