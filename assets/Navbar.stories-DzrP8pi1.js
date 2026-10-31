"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-DzWR_e8l.js";import{n as o,t as s}from"./i18nConstants-Dz9WmqoW.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{t as l}from"./classnames-DQoS6hca.js";import{n as u,t as d}from"./HamburgerMenu-f699jlwT.js";import{n as f,t as ee}from"./composeEventHandlers-Cs3Pg43H.js";import{i as te,r as ne,u as re}from"./Drawer-CX6n-QN2.js";import{n as ie,t as p}from"./Button-C-16RMzV.js";var m,h,g,_,v,ae,y,b,x,S,C,oe,se,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{m=`_root_g0wv8_4`,h=`_fixed_g0wv8_15`,g=`_sticky_g0wv8_21`,_=`_transparent_g0wv8_26`,v=`_glass_g0wv8_29`,ae=`_bordered_g0wv8_33`,y=`_container_g0wv8_36`,b=`_fluid_g0wv8_46`,x=`_brand_g0wv8_49`,S=`_content_g0wv8_58`,C=`_start_g0wv8_64`,oe=`_end_g0wv8_67`,se=`_center_g0wv8_70`,w=`_hiddenMobile_g0wv8_74`,T=`_item_g0wv8_78`,E=`_active_g0wv8_83`,D=`_link_g0wv8_83`,O=`_toggle_g0wv8_107`,k=`_menu_g0wv8_118`,A=`_menuItem_g0wv8_133`,j={root:m,fixed:h,sticky:g,transparent:_,glass:v,bordered:ae,container:y,fluid:b,brand:x,content:S,start:C,end:oe,center:se,hiddenMobile:w,item:T,active:E,link:D,toggle:O,menu:k,menuItem:A}})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G;function K(){return(K=t((()=>{N=e(r(),1),P=e(l(),1),u(),re(),M(),f(),F=c(),I=(0,N.createContext)(void 0),L=N.forwardRef(({className:e,children:t,fixed:n,sticky:r,transparent:i,glass:a,bordered:o,fluid:s,defaultMenuOpen:c=!1,isMenuOpen:l,onMenuOpenChange:u,...d},f)=>{let[ee,te]=(0,N.useState)(c),ne=l??ee;return(0,F.jsx)(I.Provider,{value:{isMenuOpen:ne,setIsMenuOpen:e=>{te(e),u?.(e)}},children:(0,F.jsx)(`nav`,{ref:f,className:(0,P.default)(`wim-navbar`,j.root,n&&j.fixed,r&&j.sticky,i&&j.transparent,a&&j.glass,o&&j.bordered,e),...d,children:(0,F.jsx)(`div`,{className:(0,P.default)(j.container,s&&j.fluid),children:t})})})}),L.displayName=`Navbar`,R=N.forwardRef(({className:e,children:t,...n},r)=>(0,F.jsx)(`div`,{ref:r,className:(0,P.default)(j.brand,e),...n,children:t})),R.displayName=`Navbar.Brand`,z=N.forwardRef(({className:e,children:t,justify:n=`end`,hiddenOnMobile:r,...i},a)=>(0,F.jsx)(`div`,{ref:a,className:(0,P.default)(j.content,j[n],r&&j.hiddenMobile,e),...i,children:t})),z.displayName=`Navbar.Content`,B=N.forwardRef(({className:e,children:t,active:n,...r},i)=>(0,F.jsx)(`div`,{ref:i,className:(0,P.default)(j.item,n&&j.active,e),...r,children:t})),B.displayName=`Navbar.Item`,V=N.forwardRef(({className:e,children:t,active:n,...r},i)=>(0,F.jsx)(`a`,{ref:i,className:(0,P.default)(j.link,n&&j.active,e),...r,children:t})),V.displayName=`Navbar.Link`,H=N.forwardRef(({className:e,...t},n)=>{let r=(0,N.useContext)(I);if(!r)throw Error(`NavbarToggle must be used within a Navbar`);let{isMenuOpen:i,setIsMenuOpen:a}=r;return(0,F.jsx)(`div`,{className:j.toggle,children:(0,F.jsx)(d,{ref:n,open:i,onOpenChange:a,className:e,...t})})}),H.displayName=`Navbar.Toggle`,U=N.forwardRef(({className:e,children:t,position:n=`top`,...r},i)=>{let a=(0,N.useContext)(I);if(!a)throw Error(`NavbarMenu must be used within a Navbar`);let{isMenuOpen:o,setIsMenuOpen:s}=a;return(0,F.jsx)(ne,{open:o,onOpenChange:s,side:n,children:(0,F.jsx)(te,{...r,className:(0,P.default)(j.menu,e),children:t})})}),U.displayName=`Navbar.Menu`,W=N.forwardRef(({className:e,children:t,active:n,...r},i)=>{let{setIsMenuOpen:a}=(0,N.useContext)(I)||{},o=e=>{a?.(!1),r.onClick?.(e)};return(0,F.jsx)(`div`,{ref:i,className:(0,P.default)(j.menuItem,n&&j.active,e),role:`button`,tabIndex:0,...r,onClick:o,onKeyDown:ee(r.onKeyDown,e=>{(e.key===`Enter`||e.key===` `)&&e.currentTarget.click()}),children:t})}),W.displayName=`Navbar.MenuItem`,G=Object.assign(L,{Brand:R,Content:z,Item:B,Link:V,Toggle:H,Menu:U,MenuItem:W}),R.__docgenInfo={description:``,methods:[],displayName:`Navbar.Brand`},z.__docgenInfo={description:``,methods:[],displayName:`Navbar.Content`,props:{justify:{required:!1,tsType:{name:`union`,raw:`"start" | "end" | "center"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"center"`}]},description:``,defaultValue:{value:`"end"`,computed:!1}},hiddenOnMobile:{required:!1,tsType:{name:`boolean`},description:``}}},B.__docgenInfo={description:``,methods:[],displayName:`Navbar.Item`,props:{active:{required:!1,tsType:{name:`boolean`},description:``}}},V.__docgenInfo={description:``,methods:[],displayName:`Navbar.Link`,props:{active:{required:!1,tsType:{name:`boolean`},description:``}}},H.__docgenInfo={description:``,methods:[],displayName:`Navbar.Toggle`},U.__docgenInfo={description:``,methods:[],displayName:`Navbar.Menu`,props:{position:{required:!1,tsType:{name:`union`,raw:`"right" | "left" | "top" | "bottom"`,elements:[{name:`literal`,value:`"right"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`}]},description:``,defaultValue:{value:`"top"`,computed:!1}}}},W.__docgenInfo={description:``,methods:[],displayName:`Navbar.MenuItem`,props:{active:{required:!1,tsType:{name:`boolean`},description:``}}},L.__docgenInfo={description:``,methods:[],displayName:`Navbar`,props:{fixed:{required:!1,tsType:{name:`boolean`},description:`Whether the navbar is fixed to the viewport`},sticky:{required:!1,tsType:{name:`boolean`},description:`Whether the navbar sticks to the top while scrolling`},transparent:{required:!1,tsType:{name:`boolean`},description:`Whether the navbar background is transparent`},glass:{required:!1,tsType:{name:`boolean`},description:`Whether to apply the frosted-glass effect`},bordered:{required:!1,tsType:{name:`boolean`},description:`Whether to show a bottom border`},fluid:{required:!1,tsType:{name:`boolean`},description:`Expand content to full width (disable the centered max-width container)`},defaultMenuOpen:{required:!1,tsType:{name:`boolean`},description:`Initial open state of the mobile menu (uncontrolled)`,defaultValue:{value:`false`,computed:!1}},isMenuOpen:{required:!1,tsType:{name:`boolean`},description:`Open state of the mobile menu (controlled)`},onMenuOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Callback when the mobile menu open state changes`}}}})))()}var ce=n({BuiltInResponsive:()=>$,CenteredLinks:()=>Q,Default:()=>Y,GlassEffect:()=>X,WithMobileMenu:()=>Z,__namedExportsOrder:()=>le,default:()=>J}),q,J,Y,X,Z,Q,$,le;function ue(){return(ue=t((()=>{r(),K(),ie(),a(),o(),q=c(),J={title:`Components/Application Shell/Navbar`,component:G,parameters:{layout:`fullscreen`},argTypes:{fixed:{control:`boolean`},sticky:{control:`boolean`},transparent:{control:`boolean`},glass:{control:`boolean`},bordered:{control:`boolean`}}},Y={render:e=>{let{t}=i(s);return(0,q.jsxs)(G,{...e,children:[(0,q.jsx)(G.Brand,{children:(0,q.jsx)(`span`,{children:t(`story.navbar_logo`)})}),(0,q.jsxs)(G.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(G.Link,{href:`#`,active:!0,children:t(`story.navbar_home`)}),(0,q.jsx)(G.Link,{href:`#`,children:t(`story.navbar_features`)}),(0,q.jsx)(G.Link,{href:`#`,children:t(`story.navbar_pricing`)}),(0,q.jsx)(G.Link,{href:`#`,children:t(`story.navbar_about`)})]}),(0,q.jsx)(G.Content,{justify:`end`,hiddenOnMobile:!0,children:(0,q.jsx)(p,{variant:`outline`,size:`sm`,children:t(`story.navbar_login`)})}),(0,q.jsx)(G.Toggle,{}),(0,q.jsxs)(G.Menu,{children:[(0,q.jsx)(G.MenuItem,{active:!0,children:t(`story.navbar_home`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_features`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_pricing`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_about`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_login`)})]})]})},args:{bordered:!0}},X={render:e=>{let{t}=i(s);return(0,q.jsxs)(`div`,{style:{height:`400px`,background:`var(--wim-color-glass-bg)`,position:`relative`},children:[(0,q.jsxs)(G,{...e,glass:!0,fixed:!0,fluid:!0,style:{position:`absolute`},children:[(0,q.jsx)(G.Brand,{children:(0,q.jsx)(`span`,{children:t(`story.navbar_glass_ui`)})}),(0,q.jsxs)(G.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(G.Link,{href:`#`,children:t(`story.navbar_design`)}),(0,q.jsx)(G.Link,{href:`#`,children:t(`story.navbar_components`)}),(0,q.jsx)(G.Link,{href:`#`,children:t(`story.navbar_docs`)})]}),(0,q.jsx)(G.Toggle,{}),(0,q.jsxs)(G.Menu,{children:[(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_design`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_components`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_docs`)})]})]}),(0,q.jsxs)(`div`,{style:{paddingTop:`80px`,paddingLeft:`var(--wim-spacing-xl)`,color:`var(--wim-color-text-primary)`},children:[(0,q.jsx)(`h1`,{children:t(`story.navbar_glass_title`)}),(0,q.jsx)(`p`,{children:t(`story.navbar_glass_desc`)})]})]})}},Z={render:()=>{let{t:e}=i(s);return(0,q.jsxs)(G,{bordered:!0,children:[(0,q.jsx)(G.Brand,{children:(0,q.jsx)(`span`,{children:e(`story.navbar_mobile_app`)})}),(0,q.jsxs)(G.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(G.Link,{href:`#`,children:e(`story.navbar_overview`)}),(0,q.jsx)(G.Link,{href:`#`,children:e(`story.navbar_activity`)})]}),(0,q.jsx)(G.Toggle,{}),(0,q.jsxs)(G.Menu,{children:[(0,q.jsx)(G.MenuItem,{children:e(`story.navbar_overview`)}),(0,q.jsx)(G.MenuItem,{children:e(`story.navbar_activity`)})]})]})}},Q={render:e=>{let{t}=i(s);return(0,q.jsxs)(G,{...e,bordered:!0,children:[(0,q.jsx)(G.Brand,{children:(0,q.jsx)(`span`,{children:t(`story.navbar_center`)})}),(0,q.jsxs)(G.Content,{justify:`center`,hiddenOnMobile:!0,children:[(0,q.jsx)(G.Link,{href:`#`,active:!0,children:t(`story.navbar_product`)}),(0,q.jsx)(G.Link,{href:`#`,children:t(`story.navbar_solutions`)}),(0,q.jsx)(G.Link,{href:`#`,children:t(`story.navbar_resources`)})]}),(0,q.jsxs)(G.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(p,{variant:`ghost`,size:`sm`,children:t(`story.navbar_signin`)}),(0,q.jsx)(p,{variant:`solid`,size:`sm`,children:t(`story.navbar_signup`)})]}),(0,q.jsx)(G.Toggle,{}),(0,q.jsxs)(G.Menu,{children:[(0,q.jsx)(G.MenuItem,{active:!0,children:t(`story.navbar_product`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_solutions`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_resources`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_signin`)}),(0,q.jsx)(G.MenuItem,{children:t(`story.navbar_signup`)})]})]})}},$={render:()=>{let{t:e}=i(s);return(0,q.jsxs)(`div`,{style:{height:`400px`,position:`relative`,overflow:`hidden`,border:`1px solid var(--wim-color-border)`},children:[(0,q.jsxs)(G,{bordered:!0,style:{position:`absolute`,top:0,left:0,right:0},children:[(0,q.jsx)(G.Brand,{children:(0,q.jsx)(`span`,{children:e(`story.navbar_responsive`)})}),(0,q.jsxs)(G.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(G.Link,{href:`#`,children:e(`story.navbar_dashboard`)}),(0,q.jsx)(G.Link,{href:`#`,children:e(`story.navbar_settings`)}),(0,q.jsx)(G.Link,{href:`#`,children:e(`story.navbar_profile`)})]}),(0,q.jsx)(G.Toggle,{}),(0,q.jsxs)(G.Menu,{children:[(0,q.jsx)(G.MenuItem,{children:e(`story.navbar_dashboard`)}),(0,q.jsx)(G.MenuItem,{children:e(`story.navbar_settings`)}),(0,q.jsx)(G.MenuItem,{children:e(`story.navbar_profile`)})]})]}),(0,q.jsxs)(`div`,{style:{padding:`80px 20px`},children:[(0,q.jsx)(`p`,{children:e(`story.navbar_responsive_info`)}),(0,q.jsx)(`p`,{children:e(`story.navbar_responsive_desc`)})]})]})}},le=[`Default`,`GlassEffect`,`WithMobileMenu`,`CenteredLinks`,`BuiltInResponsive`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Navbar {...args}>
        <Navbar.Brand>
          <span>{t("story.navbar_logo")}</span>
        </Navbar.Brand>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Navbar.Link href="#" active>
            {t("story.navbar_home")}
          </Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_features")}</Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_pricing")}</Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_about")}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Button variant="outline" size="sm">
            {t("story.navbar_login")}
          </Button>
        </Navbar.Content>
        <Navbar.Toggle />
        <Navbar.Menu>
          <Navbar.MenuItem active>{t("story.navbar_home")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_features")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_pricing")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_about")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_login")}</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>;
  },
  args: {
    bordered: true
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      background: "var(--wim-color-glass-bg)",
      position: "relative"
    }}>
        <Navbar {...args} glass fixed fluid style={{
        position: "absolute"
      }}>
          <Navbar.Brand>
            <span>{t("story.navbar_glass_ui")}</span>
          </Navbar.Brand>
          <Navbar.Content justify="end" hiddenOnMobile>
            <Navbar.Link href="#">{t("story.navbar_design")}</Navbar.Link>
            <Navbar.Link href="#">{t("story.navbar_components")}</Navbar.Link>
            <Navbar.Link href="#">{t("story.navbar_docs")}</Navbar.Link>
          </Navbar.Content>
          <Navbar.Toggle />
          <Navbar.Menu>
            <Navbar.MenuItem>{t("story.navbar_design")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story.navbar_components")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story.navbar_docs")}</Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar>
        {/* fluid Navbar は左右パディング --wim-spacing-xl で全幅。hero も同じ
            トークンで揃え、ナビ内容と main 内容の左端を一致させる。 */}
        <div style={{
        paddingTop: "80px",
        paddingLeft: "var(--wim-spacing-xl)",
        color: "var(--wim-color-text-primary)"
      }}>
          <h1>{t("story.navbar_glass_title")}</h1>
          <p>{t("story.navbar_glass_desc")}</p>
        </div>
      </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Navbar bordered>
        <Navbar.Brand>
          <span>{t("story.navbar_mobile_app")}</span>
        </Navbar.Brand>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Navbar.Link href="#">{t("story.navbar_overview")}</Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_activity")}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Toggle />
        <Navbar.Menu>
          <Navbar.MenuItem>{t("story.navbar_overview")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_activity")}</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Navbar {...args} bordered>
        <Navbar.Brand>
          <span>{t("story.navbar_center")}</span>
        </Navbar.Brand>
        <Navbar.Content justify="center" hiddenOnMobile>
          <Navbar.Link href="#" active>
            {t("story.navbar_product")}
          </Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_solutions")}</Navbar.Link>
          <Navbar.Link href="#">{t("story.navbar_resources")}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Button variant="ghost" size="sm">
            {t("story.navbar_signin")}
          </Button>
          <Button variant="solid" size="sm">
            {t("story.navbar_signup")}
          </Button>
        </Navbar.Content>
        <Navbar.Toggle />
        <Navbar.Menu>
          <Navbar.MenuItem active>{t("story.navbar_product")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_solutions")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_resources")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_signin")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_signup")}</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      position: "relative",
      overflow: "hidden",
      border: "1px solid var(--wim-color-border)"
    }}>
        <Navbar bordered style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      }}>
          <Navbar.Brand>
            <span>{t("story.navbar_responsive")}</span>
          </Navbar.Brand>
          <Navbar.Content justify="end" hiddenOnMobile>
            <Navbar.Link href="#">{t("story.navbar_dashboard")}</Navbar.Link>
            <Navbar.Link href="#">{t("story.navbar_settings")}</Navbar.Link>
            <Navbar.Link href="#">{t("story.navbar_profile")}</Navbar.Link>
          </Navbar.Content>
          <Navbar.Toggle />
          <Navbar.Menu>
            <Navbar.MenuItem>{t("story.navbar_dashboard")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story.navbar_settings")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story.navbar_profile")}</Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar>
        <div style={{
        padding: "80px 20px"
      }}>
          <p>{t("story.navbar_responsive_info")}</p>
          <p>{t("story.navbar_responsive_desc")}</p>
        </div>
      </div>;
  }
}`,...$.parameters?.docs?.source}}}})))()}export{ue as i,X as n,ce as r,Q as t};