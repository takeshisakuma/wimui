import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d,A as h}from"./iframe-BDBmq9kz.js";import{c as i}from"./index-DR7vVb7D.js";import{H as o}from"./Header-tJePrcC5.js";import{F as B}from"./Footer-CUIgp4ZG.js";import{S as c}from"./Sidebar-COf0yGGW.js";import{T as b}from"./TabBar--xQDfu1R.js";import{I as l}from"./Icon-D7a_aJQd.js";import{B as v}from"./Button-BM8-guIy.js";import{I as E}from"./Input-CbXcw_FG.js";import{u as m}from"./useTranslation-Eq2fY2Qq.js";const I=d.forwardRef(({className:a,children:r,header:n,sidebar:t,footer:p,navbar:_,padding:T=!0,centered:M,maxWidth:j,...C},z)=>{const P=j?{"--wim-appshell-max-width":typeof j=="number"?`${j}px`:j}:void 0;return e.jsxs("div",{ref:z,className:i("wim-appshell",!!t&&"wim-appshell--with-sidebar",!!_&&"wim-appshell--with-navbar",a),style:P,...C,children:[n&&e.jsx("div",{className:"wim-appshell__header",children:n}),e.jsxs("div",{className:"wim-appshell__body",children:[t&&e.jsx("div",{className:"wim-appshell__sidebar",children:t}),e.jsx("main",{className:i("wim-appshell__main",T&&"wim-appshell__main--padded",M&&"wim-appshell__main--centered"),tabIndex:0,children:M?e.jsx("div",{className:"wim-appshell__content",children:r}):r})]}),_&&e.jsx("div",{className:"wim-appshell__navbar",children:_}),p&&e.jsx("div",{className:"wim-appshell__footer",children:p})]})});I.displayName="AppShell";const A=d.forwardRef(({className:a,children:r,padding:n=!0,centered:t,...p},_)=>e.jsx("main",{ref:_,className:i("wim-appshell__main",n&&"wim-appshell__main--padded",t&&"wim-appshell__main--centered",a),tabIndex:0,...p,children:t?e.jsx("div",{className:"wim-appshell__content",children:r}):r}));A.displayName="AppShell.Main";const w=d.forwardRef(({className:a,children:r,...n},t)=>e.jsx("div",{ref:t,className:i("wim-appshell__body",a),...n,children:r}));w.displayName="AppShell.Body";const N=d.forwardRef(({className:a,children:r,...n},t)=>e.jsx("div",{ref:t,className:i("wim-appshell__header",a),...n,children:r}));N.displayName="AppShell.Header";const H=d.forwardRef(({className:a,children:r,...n},t)=>e.jsx("div",{ref:t,className:i("wim-appshell__sidebar",a),...n,children:r}));H.displayName="AppShell.Sidebar";const R=d.forwardRef(({className:a,children:r,...n},t)=>e.jsx("div",{ref:t,className:i("wim-appshell__footer",a),...n,children:r}));R.displayName="AppShell.Footer";const W=d.forwardRef(({className:a,children:r,...n},t)=>e.jsx("div",{ref:t,className:i("wim-appshell__navbar",a),...n,children:r}));W.displayName="AppShell.Navbar";const s=I;s.Main=A;s.Body=w;s.Header=N;s.Sidebar=H;s.Footer=R;s.Navbar=W;I.__docgenInfo={description:"アプリケーション全体のレイアウトを構成するルートコンポーネント。\n\n## 使い方\n### 1. Composition API（推奨）\nサブコンポーネント（`AppShell.Header`, `AppShell.Sidebar` など）を\n`children` として渡す方法。柔軟なカスタマイズが可能。\n\n```tsx\n<AppShell>\n  <AppShell.Header>...</AppShell.Header>\n  <AppShell.Sidebar>...</AppShell.Sidebar>\n  <AppShell.Main>...</AppShell.Main>\n</AppShell>\n```\n\n### 2. Props API（シンプルなケース向け）\n`header`, `sidebar`, `footer`, `navbar` を props として渡す方法。\nただし、サイドバーを使う場合は Composition API を推奨。\n\n```tsx\n<AppShell header={<Header />} sidebar={<Sidebar />}>\n  <main>...</main>\n</AppShell>\n```\n\n@note Props API で `sidebar` を渡した場合、`--with-sidebar` クラスが自動付与されます。\n      Composition API で `AppShell.Sidebar` を使う場合は、\n      親 `AppShell` に `sidebar` prop として何かを渡すか、\n      `AppShell.Body` を使って手動でレイアウトを構成してください。",methods:[],displayName:"AppShell",props:{header:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Header component"},sidebar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Sidebar component"},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Footer component"},navbar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Navbar component (mobile bottom navigation)"},padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to main content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center main content horizontally"},maxWidth:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Maximum width for centered content"}},composes:["Omit"]};A.__docgenInfo={description:"Composition API でメインコンテンツ領域を定義するサブコンポーネント。\nProps API の `AppShellRoot` 内蔵 `<main>` と同等の機能を提供します。",methods:[],displayName:"AppShell.Main",props:{padding:{required:!1,tsType:{name:"boolean"},description:"Add padding to content",defaultValue:{value:"true",computed:!1}},centered:{required:!1,tsType:{name:"boolean"},description:"Center content horizontally"}},composes:["Omit"]};w.__docgenInfo={description:`サイドバーとメインコンテンツを横並びにするラッパー。
Composition API でサイドバーを使う場合に使用します。`,methods:[],displayName:"AppShell.Body"};N.__docgenInfo={description:"",methods:[],displayName:"AppShell.Header"};H.__docgenInfo={description:"",methods:[],displayName:"AppShell.Sidebar"};R.__docgenInfo={description:"",methods:[],displayName:"AppShell.Footer"};W.__docgenInfo={description:"",methods:[],displayName:"AppShell.Navbar"};const k={title:"Components/Application Shell/AppShell",component:s,parameters:{layout:"fullscreen"},tags:[],argTypes:{padding:{control:"boolean",description:"Add padding to the main content"},centered:{control:"boolean",description:"Center the main content horizontally"},maxWidth:{control:"text",description:"Specify the maximum width when centered"},header:{table:{disable:!0}},sidebar:{table:{disable:!0}},footer:{table:{disable:!0}},navbar:{table:{disable:!0}},children:{table:{disable:!0}}}},y={render:function(r){const{t:n}=m(h);return e.jsx(s,{...r,header:e.jsxs(o,{bordered:!0,children:[e.jsx(o.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsxs(o.Section,{align:"end",style:{gap:"8px"},children:[e.jsx(v,{priority:"tertiary",size:"small",children:n("story_appshell_docs")}),e.jsx(v,{priority:"primary",size:"small",children:n("story_appshell_signin")})]})]}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_welcome")}),e.jsx("p",{children:n("story_appshell_main_content")}),e.jsx("p",{children:n("story_appshell_flexible_layout")})]})})}},u={render:function(r){const{t:n}=m(h);return e.jsx(s,{...r,header:e.jsxs(o,{bordered:!0,children:[e.jsx(o.Section,{align:"start",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx("div",{style:{width:32,height:32,background:"#0066ff",borderRadius:4}}),e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WimStore"})]})}),e.jsx(o.Section,{align:"center",children:e.jsx("div",{style:{width:"100%",maxWidth:400},children:e.jsx(E,{placeholder:n("story_appshell_search_placeholder"),leftIcon:"SearchIcon",fullWidth:!0})})}),e.jsxs(o.Section,{align:"end",style:{gap:"12px"},children:[e.jsx(l,{name:"BellIcon",style:{cursor:"pointer"}}),e.jsx(l,{name:"StarIcon",style:{cursor:"pointer"}}),e.jsx(v,{priority:"primary",size:"small",children:n("story_appshell_checkout")})]})]}),children:e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(200px, 1fr))",gap:"20px"},children:[1,2,3,4,5,6].map(t=>e.jsxs("div",{style:{border:"1px solid #eee",borderRadius:8,padding:16},children:[e.jsx("div",{style:{width:"100%",aspectRatio:"1",background:"#f5f5f5",borderRadius:4,marginBottom:8}}),e.jsxs("div",{style:{fontWeight:"bold"},children:[n("story_appshell_product")," ",t]}),e.jsx("div",{style:{color:"#666",fontSize:"0.9rem"},children:"$99.00"})]},t))})})}},S={render:function(r){const{t:n}=m(h),[t,p]=d.useState(!1);return e.jsx(s,{...r,header:e.jsxs(o,{bordered:!0,children:[e.jsxs(o.Section,{align:"start",style:{gap:"10px",alignItems:"center",display:"flex"},children:[e.jsx("style",{children:`
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
                            `}),e.jsx("button",{className:"appshell-mobile-trigger",onClick:()=>p(!0),children:n("story_common_menu","Menu")}),e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:n("story_appshell_dashboard")})]}),e.jsxs(o.Section,{align:"end",children:[e.jsx(l,{name:"BellIcon",style:{width:24,height:24}}),e.jsx(l,{name:"UserIcon",style:{width:24,height:24}})]})]}),sidebar:e.jsxs(c,{bordered:!0,width:260,mobileOpen:t,onOverlayClick:()=>p(!1),children:[e.jsx(c.Header,{children:e.jsx("div",{style:{padding:"16px",fontWeight:"bold"},children:n("story_appshell_navigation")})}),e.jsxs(c.Content,{children:[e.jsx(c.Item,{icon:e.jsx(l,{name:"HomeIcon"}),active:!0,children:n("story_appshell_dashboard")}),e.jsx(c.Item,{icon:e.jsx(l,{name:"UserIcon"}),children:n("story_appshell_users")}),e.jsx(c.Item,{icon:e.jsx(l,{name:"SettingsIcon"}),children:n("story_appshell_settings")}),e.jsx(c.Item,{icon:e.jsx(l,{name:"FilterIcon"}),children:n("story_appshell_documents")})]})]}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_dashboard")}),e.jsx("p",{children:n("story_appshell_dashboard_desc")})]})})}},x={render:function(r){const{t:n}=m(h);return e.jsx(s,{...r,header:e.jsx(o,{bordered:!0,children:e.jsx(o.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})})}),footer:e.jsx(B,{bordered:!0,children:e.jsx(B.Section,{children:e.jsx("p",{style:{margin:0,textAlign:"center"},children:n("story_appshell_rights")})})}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_footer_title")}),e.jsx("p",{children:n("story_appshell_footer_desc")})]})})}},g={render:function(r){const{t:n}=m(h);return e.jsx(s,{...r,header:e.jsx(o,{bordered:!0,children:e.jsx(o.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:n("story_appshell_mobile_app")})})}),navbar:e.jsxs(b,{children:[e.jsx(b.Item,{icon:e.jsx(l,{name:"HomeIcon"}),label:n("story_common_home"),active:!0}),e.jsx(b.Item,{icon:e.jsx(l,{name:"SearchIcon"}),label:n("story_common_search")}),e.jsx(b.Item,{icon:e.jsx(l,{name:"BellIcon"}),label:n("story_common_alerts")}),e.jsx(b.Item,{icon:e.jsx(l,{name:"UserIcon"}),label:n("story_common_profile")})]}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_mobile_layout")}),e.jsx("p",{children:n("story_appshell_mobile_desc")})]})})}},f={render:function(r){const{t:n}=m(h);return e.jsx(s,{...r,header:e.jsx(o,{bordered:!0,children:e.jsx(o.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})})}),children:e.jsxs("div",{children:[e.jsx("h2",{children:n("story_appshell_welcome")}),e.jsx("p",{children:n("story_appshell_main_content")})]})})},args:{padding:!0,centered:!1}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AppShell {...args} header={<Header bordered>
            <Header.Section align="start">
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>
                WIM UI
              </div>
            </Header.Section>
            <Header.Section align="end" style={{
        gap: "8px"
      }}>
              <Button priority="tertiary" size="small">
                {t("story_appshell_docs")}
              </Button>
              <Button priority="primary" size="small">
                {t("story_appshell_signin")}
              </Button>
            </Header.Section>
          </Header>}>
        <div>
          <h2>{t("story_appshell_welcome")}</h2>
          <p>{t("story_appshell_main_content")}</p>
          <p>{t("story_appshell_flexible_layout")}</p>
        </div>
      </AppShell>;
  }
}`,...y.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AppShell {...args} header={<Header bordered>
            <Header.Section align="start">
              <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px"
        }}>
                <div style={{
            width: 32,
            height: 32,
            background: "#0066ff",
            borderRadius: 4
          }} />
                <div style={{
            fontWeight: "bold",
            fontSize: "1.2rem"
          }}>
                  WimStore
                </div>
              </div>
            </Header.Section>
            <Header.Section align="center">
              <div style={{
          width: "100%",
          maxWidth: 400
        }}>
                <Input placeholder={t("story_appshell_search_placeholder")} leftIcon="SearchIcon" fullWidth />
              </div>
            </Header.Section>
            <Header.Section align="end" style={{
        gap: "12px"
      }}>
              <Icon name="BellIcon" style={{
          cursor: "pointer"
        }} />
              <Icon name="StarIcon" style={{
          cursor: "pointer"
        }} />
              <Button priority="primary" size="small">
                {t("story_appshell_checkout")}
              </Button>
            </Header.Section>
          </Header>}>
        <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "20px"
      }}>
          {[1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{
          border: "1px solid #eee",
          borderRadius: 8,
          padding: 16
        }}>
              <div style={{
            width: "100%",
            aspectRatio: "1",
            background: "#f5f5f5",
            borderRadius: 4,
            marginBottom: 8
          }} />
              <div style={{
            fontWeight: "bold"
          }}>
                {t("story_appshell_product")} {i}
              </div>
              <div style={{
            color: "#666",
            fontSize: "0.9rem"
          }}>$99.00</div>
            </div>)}
        </div>
      </AppShell>;
  }
}`,...u.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return <AppShell {...args} header={<Header bordered>
            <Header.Section align="start" style={{
        gap: "10px",
        alignItems: "center",
        display: "flex"
      }}>
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
                            \`}</style>
              <button className="appshell-mobile-trigger" onClick={() => setMobileOpen(true)}>
                {t("story_common_menu", "Menu")}
              </button>
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>
                {t("story_appshell_dashboard")}
              </div>
            </Header.Section>
            <Header.Section align="end">
              <Icon name="BellIcon" style={{
          width: 24,
          height: 24
        }} />
              <Icon name="UserIcon" style={{
          width: 24,
          height: 24
        }} />
            </Header.Section>
          </Header>} sidebar={<Sidebar bordered width={260} mobileOpen={mobileOpen} onOverlayClick={() => setMobileOpen(false)}>
            <Sidebar.Header>
              <div style={{
          padding: "16px",
          fontWeight: "bold"
        }}>
                {t("story_appshell_navigation")}
              </div>
            </Sidebar.Header>
            <Sidebar.Content>
              <Sidebar.Item icon={<Icon name="HomeIcon" />} active>
                {t("story_appshell_dashboard")}
              </Sidebar.Item>
              <Sidebar.Item icon={<Icon name="UserIcon" />}>
                {t("story_appshell_users")}
              </Sidebar.Item>
              <Sidebar.Item icon={<Icon name="SettingsIcon" />}>
                {t("story_appshell_settings")}
              </Sidebar.Item>
              <Sidebar.Item icon={<Icon name="FilterIcon" />}>
                {t("story_appshell_documents")}
              </Sidebar.Item>
            </Sidebar.Content>
          </Sidebar>}>
        <div>
          <h2>{t("story_appshell_dashboard")}</h2>
          <p>{t("story_appshell_dashboard_desc")}</p>
        </div>
      </AppShell>;
  }
}`,...S.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AppShell {...args} header={<Header bordered>
            <Header.Section align="start">
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>
                WIM UI
              </div>
            </Header.Section>
          </Header>} footer={<Footer bordered>
            <Footer.Section>
              <p style={{
          margin: 0,
          textAlign: "center"
        }}>
                {t("story_appshell_rights")}
              </p>
            </Footer.Section>
          </Footer>}>
        <div>
          <h2>{t("story_appshell_footer_title")}</h2>
          <p>{t("story_appshell_footer_desc")}</p>
        </div>
      </AppShell>;
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AppShell {...args} header={<Header bordered>
            <Header.Section align="start">
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>
                {t("story_appshell_mobile_app")}
              </div>
            </Header.Section>
          </Header>} navbar={<TabBar>
            <TabBar.Item icon={<Icon name="HomeIcon" />} label={t("story_common_home")} active />
            <TabBar.Item icon={<Icon name="SearchIcon" />} label={t("story_common_search")} />
            <TabBar.Item icon={<Icon name="BellIcon" />} label={t("story_common_alerts")} />
            <TabBar.Item icon={<Icon name="UserIcon" />} label={t("story_common_profile")} />
          </TabBar>}>
        <div>
          <h2>{t("story_appshell_mobile_layout")}</h2>
          <p>{t("story_appshell_mobile_desc")}</p>
        </div>
      </AppShell>;
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <AppShell {...args} header={<Header bordered>
            <Header.Section align="start">
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>
                WIM UI
              </div>
            </Header.Section>
          </Header>}>
        <div>
          <h2>{t("story_appshell_welcome")}</h2>
          <p>{t("story_appshell_main_content")}</p>
        </div>
      </AppShell>;
  },
  args: {
    padding: true,
    centered: false
  }
}`,...f.parameters?.docs?.source}}};const F=["Default","ModernApp","WithSidebar","WithFooter","WithNavbar","Playground"],X=Object.freeze(Object.defineProperty({__proto__:null,Default:y,ModernApp:u,Playground:f,WithFooter:x,WithNavbar:g,WithSidebar:S,__namedExportsOrder:F,default:k},Symbol.toStringTag,{value:"Module"}));export{X as A};
