"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./AppShell-Dqy97opz.js";import{n as d,t as f}from"./Footer-DnCH8wtu.js";import{n as p,t as m}from"./Header-CEkDvelQ.js";import{n as h,t as g}from"./HamburgerMenu-HMBO8Uit.js";import{n as _,t as v}from"./Sidebar-D_luKnvC.js";import{n as y,t as b}from"./Icon-B_89lpXW.js";import{n as x,t as S}from"./Button-DrO46Brn.js";import{n as C,t as w}from"./Input-Cx7cDmF1.js";import{n as T,t as E}from"./TabBar-Ck78d58N.js";var D=n({Default:()=>j,ModernApp:()=>M,Playground:()=>I,WithFooter:()=>P,WithNavbar:()=>F,WithSidebar:()=>N,__namedExportsOrder:()=>L,default:()=>A}),O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{O=e(r(),1),a(),o(),l(),x(),d(),h(),p(),y(),C(),_(),T(),k=c(),A={title:`Components/Application Shell/AppShell`,component:u,parameters:{layout:`fullscreen`},tags:[],argTypes:{padding:{control:`boolean`,description:`Add padding to the main content`},centered:{control:`boolean`,description:`Center the main content horizontally`},maxWidth:{control:`text`,description:`Specify the maximum width when centered`},header:{table:{disable:!0}},sidebar:{table:{disable:!0}},footer:{table:{disable:!0}},navbar:{table:{disable:!0}},children:{table:{disable:!0}}}},j={args:{centered:!0,maxWidth:1200},render:function(e){let{t}=i(s);return(0,k.jsx)(u,{...e,header:(0,k.jsxs)(m,{bordered:!0,children:[(0,k.jsx)(m.Section,{align:`start`,children:(0,k.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})}),(0,k.jsxs)(m.Section,{align:`end`,style:{gap:`8px`},children:[(0,k.jsx)(S,{variant:`ghost`,size:`sm`,children:t(`story.appshell_docs`)}),(0,k.jsx)(S,{variant:`solid`,size:`sm`,children:t(`story.appshell_signin`)})]})]}),children:(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h2`,{children:t(`story.appshell_welcome`)}),(0,k.jsx)(`p`,{children:t(`story.appshell_main_content`)}),(0,k.jsx)(`p`,{children:t(`story.appshell_flexible_layout`)})]})})}},M={args:{centered:!0,maxWidth:1200},render:function(e){let{t}=i(s),n=(0,k.jsx)(w,{placeholder:t(`story.appshell_search_placeholder`),leftIcon:`SearchIcon`,fullWidth:!0,"aria-label":t(`story.appshell_search_placeholder`)});return(0,k.jsxs)(k.Fragment,{children:[(0,k.jsx)(`style`,{children:`
          .appshell-modern-brand {
            display: flex;
            flex-shrink: 0;
            gap: var(--wim-spacing-sm);
            align-items: center;
          }
          .appshell-modern-brand__mark {
            flex-shrink: 0;
            width: var(--wim-spacing-4xl);
            height: var(--wim-spacing-4xl);
            background: var(--wim-color-primary);
            border-radius: var(--wim-radius-md);
          }
          .appshell-modern-brand__name {
            font-size: var(--wim-font-size-lg);
            font-weight: var(--wim-font-weight-bold);
            white-space: nowrap;
          }
          .appshell-modern-search-desktop {
            flex: 1;
            justify-content: center;
            min-width: 0;
          }
          .appshell-modern-search-desktop__field {
            width: 100%;
            max-width: 25rem;
          }
          .appshell-modern-meta {
            display: inline-flex;
            gap: var(--wim-spacing-md);
            align-items: center;
          }
          .appshell-modern-icon-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            /* 当たり判定の下限。WCAG 2.5.8（AA）の 24×24。アイコンだけだと 16×16 になる。 T117 */
            min-width: var(--wim-tap-target-min);
            min-height: var(--wim-tap-target-min);
            padding: 0;
            cursor: pointer;
            background: none;
            border: none;
            color: inherit;
          }
          .appshell-modern-search-mobile {
            display: none;
            margin-bottom: var(--wim-spacing-xl);
          }
          @media (max-width: 767px) {
            .appshell-modern-search-desktop { display: none !important; }
            .appshell-modern-meta { display: none !important; }
            .appshell-modern-search-mobile { display: block; }
          }
        `}),(0,k.jsxs)(u,{...e,header:(0,k.jsxs)(m,{bordered:!0,children:[(0,k.jsx)(m.Section,{align:`start`,style:{flexShrink:0},children:(0,k.jsxs)(`div`,{className:`appshell-modern-brand`,children:[(0,k.jsx)(`div`,{className:`appshell-modern-brand__mark`,"aria-hidden":!0}),(0,k.jsx)(`div`,{className:`appshell-modern-brand__name`,children:`WimStore`})]})}),(0,k.jsx)(m.Section,{align:`center`,className:`appshell-modern-search-desktop`,children:(0,k.jsx)(`div`,{className:`appshell-modern-search-desktop__field`,children:n})}),(0,k.jsxs)(m.Section,{align:`end`,style:{flexShrink:0,gap:`var(--wim-spacing-md)`},children:[(0,k.jsxs)(`span`,{className:`appshell-modern-meta`,children:[(0,k.jsx)(`button`,{type:`button`,className:`appshell-modern-icon-btn`,"aria-label":t(`story.appshell_notifications`),children:(0,k.jsx)(b,{name:`BellIcon`})}),(0,k.jsx)(`button`,{type:`button`,className:`appshell-modern-icon-btn`,"aria-label":t(`story.appshell_wishlist`),children:(0,k.jsx)(b,{name:`StarIcon`})})]}),(0,k.jsx)(S,{variant:`solid`,size:`sm`,children:t(`story.appshell_checkout`)})]})]}),children:[(0,k.jsx)(`div`,{className:`appshell-modern-search-mobile`,children:n}),(0,k.jsx)(`div`,{style:{display:`grid`,gridTemplateColumns:`repeat(auto-fill, minmax(200px, 1fr))`,gap:`20px`},children:[1,2,3,4,5,6].map(e=>(0,k.jsxs)(`div`,{style:{border:`1px solid var(--wim-color-border)`,borderRadius:8,padding:16},children:[(0,k.jsx)(`div`,{style:{width:`100%`,aspectRatio:`1`,background:`var(--wim-color-surface-variant)`,borderRadius:4,marginBottom:8}}),(0,k.jsxs)(`div`,{style:{fontWeight:`bold`},children:[t(`story.appshell_product`),` `,e]}),(0,k.jsx)(`div`,{style:{color:`var(--wim-color-text-secondary)`,fontSize:`0.9rem`},children:`$99.00`})]},e))})]})]})}},N={render:function(e){let{t}=i(s),[n,r]=O.useState(!1);return(0,k.jsx)(u,{...e,header:(0,k.jsxs)(m,{bordered:!0,fluid:!0,children:[(0,k.jsxs)(m.Section,{align:`start`,style:{gap:`10px`,alignItems:`center`,display:`flex`},children:[(0,k.jsx)(g,{size:`sm`,visibleBelow:`md`,open:n,onClick:()=>r(e=>!e)}),(0,k.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:t(`story.appshell_dashboard`)})]}),(0,k.jsxs)(m.Section,{align:`end`,children:[(0,k.jsx)(b,{name:`BellIcon`,style:{width:24,height:24}}),(0,k.jsx)(b,{name:`UserIcon`,style:{width:24,height:24}})]})]}),sidebar:(0,k.jsxs)(v,{bordered:!0,width:260,mobileOpen:n,onOverlayClick:()=>r(!1),children:[(0,k.jsx)(v.Header,{children:(0,k.jsx)(`div`,{style:{padding:`16px`,fontWeight:`bold`},children:t(`story.appshell_navigation`)})}),(0,k.jsxs)(v.Content,{children:[(0,k.jsx)(v.Item,{icon:(0,k.jsx)(b,{name:`HomeIcon`}),active:!0,children:t(`story.appshell_dashboard`)}),(0,k.jsx)(v.Item,{icon:(0,k.jsx)(b,{name:`UserIcon`}),children:t(`story.appshell_users`)}),(0,k.jsx)(v.Item,{icon:(0,k.jsx)(b,{name:`SettingsIcon`}),children:t(`story.appshell_settings`)}),(0,k.jsx)(v.Item,{icon:(0,k.jsx)(b,{name:`FilterIcon`}),children:t(`story.appshell_documents`)})]})]}),footer:(0,k.jsx)(f,{bordered:!0,fluid:!0,background:`surface-variant`,children:(0,k.jsx)(f.Section,{children:(0,k.jsx)(`p`,{style:{margin:0},children:t(`story.appshell_rights`)})})}),children:(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h2`,{children:t(`story.appshell_dashboard`)}),(0,k.jsx)(`p`,{children:t(`story.appshell_dashboard_desc`)})]})})}},P={args:{centered:!0,maxWidth:1200},render:function(e){let{t}=i(s);return(0,k.jsx)(u,{...e,header:(0,k.jsx)(m,{bordered:!0,children:(0,k.jsx)(m.Section,{align:`start`,children:(0,k.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})})}),footer:(0,k.jsx)(f,{bordered:!0,children:(0,k.jsx)(f.Section,{children:(0,k.jsx)(`p`,{style:{margin:0,textAlign:`center`},children:t(`story.appshell_rights`)})})}),children:(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h2`,{children:t(`story.appshell_footer_title`)}),(0,k.jsx)(`p`,{children:t(`story.appshell_footer_desc`)})]})})}},F={args:{centered:!0,maxWidth:1200},render:function(e){let{t}=i(s);return(0,k.jsx)(u,{...e,header:(0,k.jsx)(m,{bordered:!0,children:(0,k.jsx)(m.Section,{align:`start`,children:(0,k.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:t(`story.appshell_mobile_app`)})})}),navbar:(0,k.jsxs)(E,{children:[(0,k.jsx)(E.Item,{icon:(0,k.jsx)(b,{name:`HomeIcon`}),label:t(`story.common_home`),active:!0}),(0,k.jsx)(E.Item,{icon:(0,k.jsx)(b,{name:`SearchIcon`}),label:t(`story.common_search`)}),(0,k.jsx)(E.Item,{icon:(0,k.jsx)(b,{name:`BellIcon`}),label:t(`story.common_alerts`)}),(0,k.jsx)(E.Item,{icon:(0,k.jsx)(b,{name:`UserIcon`}),label:t(`story.common_profile`)})]}),children:(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h2`,{children:t(`story.appshell_mobile_layout`)}),(0,k.jsx)(`p`,{children:t(`story.appshell_mobile_desc`)})]})})}},I={render:function(e){let{t}=i(s);return(0,k.jsx)(u,{...e,header:(0,k.jsx)(m,{bordered:!0,children:(0,k.jsx)(m.Section,{align:`start`,children:(0,k.jsx)(`div`,{style:{fontWeight:`bold`,fontSize:`1.2rem`},children:`WIM UI`})})}),children:(0,k.jsxs)(`div`,{children:[(0,k.jsx)(`h2`,{children:t(`story.appshell_welcome`)}),(0,k.jsx)(`p`,{children:t(`story.appshell_main_content`)})]})})},args:{padding:!0,centered:!0,maxWidth:1200}},L=[`Default`,`ModernApp`,`WithSidebar`,`WithFooter`,`WithNavbar`,`Playground`],j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  // Header 内容は max-width 1200px で中央寄せされるため、メインも同じ measure に揃える
  // （揃えないと広い画面でヘッダーだけ 1200px で止まり、メインが全幅に広がって不自然）。
  args: {
    centered: true,
    maxWidth: 1200
  },
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
              <Button variant="ghost" size="sm">
                {t("story.appshell_docs")}
              </Button>
              <Button variant="solid" size="sm">
                {t("story.appshell_signin")}
              </Button>
            </Header.Section>
          </Header>}>
        <div>
          <h2>{t("story.appshell_welcome")}</h2>
          <p>{t("story.appshell_main_content")}</p>
          <p>{t("story.appshell_flexible_layout")}</p>
        </div>
      </AppShell>;
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  // Header の内部コンテンツは max-width 1200px で中央寄せされる（Header の .container 固定値）。
  // メインを full-bleed のままにすると、広い画面でヘッダー内容だけが 1200px で止まって
  // 中央に寄り、商品グリッドは全幅に広がる——という幅の不一致が起きて不自然に見える。
  // メインにも同じ 1200px を与えて中央寄せし、ヘッダー内容とメイン内容の measure を揃える。
  //
  // 狭幅: Header は高さ固定（64px）なので、検索をヘッダ内 3 セクションに詰めない。
  // ブランドは nowrap、副次アイコンは隠し、検索はヘッダ下のフル幅帯へ移す。
  args: {
    centered: true,
    maxWidth: 1200
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const searchField = <Input placeholder={t("story.appshell_search_placeholder")} leftIcon="SearchIcon" fullWidth aria-label={t("story.appshell_search_placeholder")} />;
    return <>
        <style>{\`
          .appshell-modern-brand {
            display: flex;
            flex-shrink: 0;
            gap: var(--wim-spacing-sm);
            align-items: center;
          }
          .appshell-modern-brand__mark {
            flex-shrink: 0;
            width: var(--wim-spacing-4xl);
            height: var(--wim-spacing-4xl);
            background: var(--wim-color-primary);
            border-radius: var(--wim-radius-md);
          }
          .appshell-modern-brand__name {
            font-size: var(--wim-font-size-lg);
            font-weight: var(--wim-font-weight-bold);
            white-space: nowrap;
          }
          .appshell-modern-search-desktop {
            flex: 1;
            justify-content: center;
            min-width: 0;
          }
          .appshell-modern-search-desktop__field {
            width: 100%;
            max-width: 25rem;
          }
          .appshell-modern-meta {
            display: inline-flex;
            gap: var(--wim-spacing-md);
            align-items: center;
          }
          .appshell-modern-icon-btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            /* 当たり判定の下限。WCAG 2.5.8（AA）の 24×24。アイコンだけだと 16×16 になる。 T117 */
            min-width: var(--wim-tap-target-min);
            min-height: var(--wim-tap-target-min);
            padding: 0;
            cursor: pointer;
            background: none;
            border: none;
            color: inherit;
          }
          .appshell-modern-search-mobile {
            display: none;
            margin-bottom: var(--wim-spacing-xl);
          }
          @media (max-width: 767px) {
            .appshell-modern-search-desktop { display: none !important; }
            .appshell-modern-meta { display: none !important; }
            .appshell-modern-search-mobile { display: block; }
          }
        \`}</style>
        <AppShell {...args} header={<Header bordered>
              <Header.Section align="start" style={{
          flexShrink: 0
        }}>
                <div className="appshell-modern-brand">
                  <div className="appshell-modern-brand__mark" aria-hidden />
                  <div className="appshell-modern-brand__name">WimStore</div>
                </div>
              </Header.Section>
              <Header.Section align="center" className="appshell-modern-search-desktop">
                <div className="appshell-modern-search-desktop__field">
                  {searchField}
                </div>
              </Header.Section>
              <Header.Section align="end" style={{
          flexShrink: 0,
          gap: "var(--wim-spacing-md)"
        }}>
                <span className="appshell-modern-meta">
                  <button type="button" className="appshell-modern-icon-btn" aria-label={t("story.appshell_notifications")}>
                    <Icon name="BellIcon" />
                  </button>
                  <button type="button" className="appshell-modern-icon-btn" aria-label={t("story.appshell_wishlist")}>
                    <Icon name="StarIcon" />
                  </button>
                </span>
                <Button variant="solid" size="sm">
                  {t("story.appshell_checkout")}
                </Button>
              </Header.Section>
            </Header>}>
          <div className="appshell-modern-search-mobile">{searchField}</div>
          <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px"
        }}>
            {[1, 2, 3, 4, 5, 6].map(i => <div key={i} style={{
            border: "1px solid var(--wim-color-border)",
            borderRadius: 8,
            padding: 16
          }}>
                <div style={{
              width: "100%",
              aspectRatio: "1",
              background: "var(--wim-color-surface-variant)",
              borderRadius: 4,
              marginBottom: 8
            }} />
                <div style={{
              fontWeight: "bold"
            }}>
                  {t("story.appshell_product")} {i}
                </div>
                <div style={{
              color: "var(--wim-color-text-secondary)",
              fontSize: "0.9rem"
            }}>$99.00</div>
              </div>)}
          </div>
        </AppShell>
      </>;
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    return <AppShell {...args} header={
    // ダッシュボードはサイドバー + full-bleed main の構成。ヘッダーも fluid（全幅）に
    // して、左内容をサイドバー帯・右内容を main 右端に揃える（1200 中央寄せだと
    // ヘッダー内容だけサイドバーの上で中央に浮いて不自然になる）。
    <Header bordered fluid>
            <Header.Section align="start" style={{
        gap: "10px",
        alignItems: "center",
        display: "flex"
      }}>
              <HamburgerMenu size="sm" visibleBelow="md" open={mobileOpen} onClick={() => setMobileOpen(o => !o)} />
              <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>
                {t("story.appshell_dashboard")}
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
                {t("story.appshell_navigation")}
              </div>
            </Sidebar.Header>
            <Sidebar.Content>
              <Sidebar.Item icon={<Icon name="HomeIcon" />} active>
                {t("story.appshell_dashboard")}
              </Sidebar.Item>
              <Sidebar.Item icon={<Icon name="UserIcon" />}>
                {t("story.appshell_users")}
              </Sidebar.Item>
              <Sidebar.Item icon={<Icon name="SettingsIcon" />}>
                {t("story.appshell_settings")}
              </Sidebar.Item>
              <Sidebar.Item icon={<Icon name="FilterIcon" />}>
                {t("story.appshell_documents")}
              </Sidebar.Item>
            </Sidebar.Content>
          </Sidebar>} footer={
    // ダッシュボードのシェルを full-bleed で統一するため、Footer も fluid（全幅）に
    // する。fluid header + サイドバー + fluid footer で、上下バーの内容が
    // サイドバー帯・main と横幅で揃う（Footer fluid の実使用デモ）。
    <Footer bordered fluid background="surface-variant">
            <Footer.Section>
              <p style={{
          margin: 0
        }}>{t("story.appshell_rights")}</p>
            </Footer.Section>
          </Footer>}>
        <div>
          <h2>{t("story.appshell_dashboard")}</h2>
          <p>{t("story.appshell_dashboard_desc")}</p>
        </div>
      </AppShell>;
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  // Header も Footer も内容を 1200px 中央寄せするため、メインも同じ measure に揃える
  // （揃えないと上下（ヘッダー・フッター）の両方でメインとの幅がずれて不自然）。
  args: {
    centered: true,
    maxWidth: 1200
  },
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
                {t("story.appshell_rights")}
              </p>
            </Footer.Section>
          </Footer>}>
        <div>
          <h2>{t("story.appshell_footer_title")}</h2>
          <p>{t("story.appshell_footer_desc")}</p>
        </div>
      </AppShell>;
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  // Header 内容は 1200px 中央寄せのため、メインも同じ measure に揃える
  // （揃えないと広い画面でヘッダーとメインの幅がずれて不自然）。
  args: {
    centered: true,
    maxWidth: 1200
  },
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
                {t("story.appshell_mobile_app")}
              </div>
            </Header.Section>
          </Header>} navbar={<TabBar>
            <TabBar.Item icon={<Icon name="HomeIcon" />} label={t("story.common_home")} active />
            <TabBar.Item icon={<Icon name="SearchIcon" />} label={t("story.common_search")} />
            <TabBar.Item icon={<Icon name="BellIcon" />} label={t("story.common_alerts")} />
            <TabBar.Item icon={<Icon name="UserIcon" />} label={t("story.common_profile")} />
          </TabBar>}>
        <div>
          <h2>{t("story.appshell_mobile_layout")}</h2>
          <p>{t("story.appshell_mobile_desc")}</p>
        </div>
      </AppShell>;
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
          <h2>{t("story.appshell_welcome")}</h2>
          <p>{t("story.appshell_main_content")}</p>
        </div>
      </AppShell>;
  },
  args: {
    // Header 内容は 1200px 中央寄せ。既定でメインも揃えておく（centered を
    // オフにすると full-bleed になり、ヘッダーとの幅ずれを確認できる）。
    padding: true,
    centered: true,
    maxWidth: 1200
  }
}`,...I.parameters?.docs?.source}}}})))()}export{R as n,D as t};