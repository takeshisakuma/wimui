"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{t as l}from"./classnames-D09xBJOL.js";import{n as u,t as d}from"./HamburgerMenu-HMBO8Uit.js";import{i as f,r as p,u as m}from"./Drawer-DhrjuI8f.js";import{n as ee,t as h}from"./Button-DrO46Brn.js";var te,ne,re,g,_,v,y,b,x,S,C,w,T,E,ie,D,O,k,A,j,M;function N(){return(N=t((()=>{te=`_root_g0wv8_4`,ne=`_fixed_g0wv8_15`,re=`_sticky_g0wv8_21`,g=`_transparent_g0wv8_26`,_=`_glass_g0wv8_29`,v=`_bordered_g0wv8_33`,y=`_container_g0wv8_36`,b=`_fluid_g0wv8_46`,x=`_brand_g0wv8_49`,S=`_content_g0wv8_58`,C=`_start_g0wv8_64`,w=`_end_g0wv8_67`,T=`_center_g0wv8_70`,E=`_hiddenMobile_g0wv8_74`,ie=`_item_g0wv8_78`,D=`_active_g0wv8_83`,O=`_link_g0wv8_83`,k=`_toggle_g0wv8_107`,A=`_menu_g0wv8_118`,j=`_menuItem_g0wv8_133`,M={root:te,fixed:ne,sticky:re,transparent:g,glass:_,bordered:v,container:y,fluid:b,brand:x,content:S,start:C,end:w,center:T,hiddenMobile:E,item:ie,active:D,link:O,toggle:k,menu:A,menuItem:j}})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=t((()=>{P=e(r(),1),F=e(l(),1),u(),m(),N(),I=c(),L=(0,P.createContext)(void 0),R=P.forwardRef(({className:e,children:t,fixed:n,sticky:r,transparent:i,glass:a,bordered:o,fluid:s,defaultMenuOpen:c=!1,isMenuOpen:l,onMenuOpenChange:u,...d},f)=>{let[p,m]=(0,P.useState)(c),ee=l??p;return(0,I.jsx)(L.Provider,{value:{isMenuOpen:ee,setIsMenuOpen:e=>{m(e),u?.(e)}},children:(0,I.jsx)(`nav`,{ref:f,className:(0,F.default)(`wim-navbar`,M.root,n&&M.fixed,r&&M.sticky,i&&M.transparent,a&&M.glass,o&&M.bordered,e),...d,children:(0,I.jsx)(`div`,{className:(0,F.default)(M.container,s&&M.fluid),children:t})})})}),R.displayName=`Navbar`,z=P.forwardRef(({className:e,children:t,...n},r)=>(0,I.jsx)(`div`,{ref:r,className:(0,F.default)(M.brand,e),...n,children:t})),z.displayName=`Navbar.Brand`,B=P.forwardRef(({className:e,children:t,justify:n=`end`,hiddenOnMobile:r,...i},a)=>(0,I.jsx)(`div`,{ref:a,className:(0,F.default)(M.content,M[n],r&&M.hiddenMobile,e),...i,children:t})),B.displayName=`Navbar.Content`,V=P.forwardRef(({className:e,children:t,active:n,...r},i)=>(0,I.jsx)(`div`,{ref:i,className:(0,F.default)(M.item,n&&M.active,e),...r,children:t})),V.displayName=`Navbar.Item`,H=P.forwardRef(({className:e,children:t,active:n,...r},i)=>(0,I.jsx)(`a`,{ref:i,className:(0,F.default)(M.link,n&&M.active,e),...r,children:t})),H.displayName=`Navbar.Link`,U=P.forwardRef(({className:e,...t},n)=>{let r=(0,P.useContext)(L);if(!r)throw Error(`NavbarToggle must be used within a Navbar`);let{isMenuOpen:i,setIsMenuOpen:a}=r;return(0,I.jsx)(`div`,{className:M.toggle,children:(0,I.jsx)(d,{ref:n,open:i,onClick:()=>a(!i),className:e,...t})})}),U.displayName=`Navbar.Toggle`,W=P.forwardRef(({className:e,children:t,position:n=`top`,...r},i)=>{let a=(0,P.useContext)(L);if(!a)throw Error(`NavbarMenu must be used within a Navbar`);let{isMenuOpen:o,setIsMenuOpen:s}=a;return(0,I.jsx)(p,{open:o,onOpenChange:s,side:n,children:(0,I.jsx)(f,{className:(0,F.default)(M.menu,e),children:t})})}),W.displayName=`Navbar.Menu`,G=P.forwardRef(({className:e,children:t,active:n,...r},i)=>{let{setIsMenuOpen:a}=(0,P.useContext)(L)||{};return(0,I.jsx)(`div`,{ref:i,className:(0,F.default)(M.menuItem,n&&M.active,e),onClick:e=>{a?.(!1),r.onClick?.(e)},role:`button`,tabIndex:0,onKeyDown:e=>{(e.key===`Enter`||e.key===` `)&&e.currentTarget.click()},...r,children:t})}),G.displayName=`Navbar.MenuItem`,K=Object.assign(R,{Brand:z,Content:B,Item:V,Link:H,Toggle:U,Menu:W,MenuItem:G}),z.__docgenInfo={description:``,methods:[],displayName:`Navbar.Brand`},B.__docgenInfo={description:``,methods:[],displayName:`Navbar.Content`,props:{justify:{required:!1,tsType:{name:`union`,raw:`"start" | "end" | "center"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"center"`}]},description:``,defaultValue:{value:`"end"`,computed:!1}},hiddenOnMobile:{required:!1,tsType:{name:`boolean`},description:``}}},V.__docgenInfo={description:``,methods:[],displayName:`Navbar.Item`,props:{active:{required:!1,tsType:{name:`boolean`},description:``}}},H.__docgenInfo={description:``,methods:[],displayName:`Navbar.Link`,props:{active:{required:!1,tsType:{name:`boolean`},description:``}}},U.__docgenInfo={description:``,methods:[],displayName:`Navbar.Toggle`},W.__docgenInfo={description:``,methods:[],displayName:`Navbar.Menu`,props:{position:{required:!1,tsType:{name:`union`,raw:`"right" | "left" | "top" | "bottom"`,elements:[{name:`literal`,value:`"right"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`}]},description:``,defaultValue:{value:`"top"`,computed:!1}}}},G.__docgenInfo={description:``,methods:[],displayName:`Navbar.MenuItem`,props:{active:{required:!1,tsType:{name:`boolean`},description:``}}},R.__docgenInfo={description:``,methods:[],displayName:`Navbar`,props:{fixed:{required:!1,tsType:{name:`boolean`},description:`Whether the navbar is fixed to the viewport`},sticky:{required:!1,tsType:{name:`boolean`},description:`Whether the navbar sticks to the top while scrolling`},transparent:{required:!1,tsType:{name:`boolean`},description:`Whether the navbar background is transparent`},glass:{required:!1,tsType:{name:`boolean`},description:`Whether to apply the frosted-glass effect`},bordered:{required:!1,tsType:{name:`boolean`},description:`Whether to show a bottom border`},fluid:{required:!1,tsType:{name:`boolean`},description:`Expand content to full width (disable the centered max-width container)`},defaultMenuOpen:{required:!1,tsType:{name:`boolean`},description:`Initial open state of the mobile menu (uncontrolled)`,defaultValue:{value:`false`,computed:!1}},isMenuOpen:{required:!1,tsType:{name:`boolean`},description:`Open state of the mobile menu (controlled)`},onMenuOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Callback when the mobile menu open state changes`}}}})))()}var ae=n({BuiltInResponsive:()=>$,CenteredLinks:()=>Q,Default:()=>Y,GlassEffect:()=>X,WithMobileMenu:()=>Z,__namedExportsOrder:()=>se,default:()=>oe}),J,oe,Y,X,Z,Q,$,se;function ce(){return(ce=t((()=>{r(),q(),a(),o(),ee(),J=c(),oe={title:`Components/Application Shell/Navbar`,component:K,parameters:{layout:`fullscreen`},argTypes:{fixed:{control:`boolean`},sticky:{control:`boolean`},transparent:{control:`boolean`},glass:{control:`boolean`},bordered:{control:`boolean`}}},Y={render:e=>{let{t}=i(s);return(0,J.jsxs)(K,{...e,children:[(0,J.jsx)(K.Brand,{children:(0,J.jsx)(`span`,{children:t(`story.navbar_logo`)})}),(0,J.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,J.jsx)(K.Link,{href:`#`,active:!0,children:t(`story.navbar_home`)}),(0,J.jsx)(K.Link,{href:`#`,children:t(`story.navbar_features`)}),(0,J.jsx)(K.Link,{href:`#`,children:t(`story.navbar_pricing`)}),(0,J.jsx)(K.Link,{href:`#`,children:t(`story.navbar_about`)})]}),(0,J.jsx)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:(0,J.jsx)(h,{variant:`outline`,size:`sm`,children:t(`story.navbar_login`)})}),(0,J.jsx)(K.Toggle,{}),(0,J.jsxs)(K.Menu,{children:[(0,J.jsx)(K.MenuItem,{active:!0,children:t(`story.navbar_home`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_features`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_pricing`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_about`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_login`)})]})]})},args:{bordered:!0}},X={render:e=>{let{t}=i(s);return(0,J.jsxs)(`div`,{style:{height:`400px`,background:`var(--wim-color-glass-bg)`,position:`relative`},children:[(0,J.jsxs)(K,{...e,glass:!0,fixed:!0,fluid:!0,style:{position:`absolute`},children:[(0,J.jsx)(K.Brand,{children:(0,J.jsx)(`span`,{children:t(`story.navbar_glass_ui`)})}),(0,J.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,J.jsx)(K.Link,{href:`#`,children:t(`story.navbar_design`)}),(0,J.jsx)(K.Link,{href:`#`,children:t(`story.navbar_components`)}),(0,J.jsx)(K.Link,{href:`#`,children:t(`story.navbar_docs`)})]}),(0,J.jsx)(K.Toggle,{}),(0,J.jsxs)(K.Menu,{children:[(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_design`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_components`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_docs`)})]})]}),(0,J.jsxs)(`div`,{style:{paddingTop:`80px`,paddingLeft:`var(--wim-spacing-xl)`,color:`var(--wim-color-text-primary)`},children:[(0,J.jsx)(`h1`,{children:t(`story.navbar_glass_title`)}),(0,J.jsx)(`p`,{children:t(`story.navbar_glass_desc`)})]})]})}},Z={render:()=>{let{t:e}=i(s);return(0,J.jsxs)(K,{bordered:!0,children:[(0,J.jsx)(K.Brand,{children:(0,J.jsx)(`span`,{children:e(`story.navbar_mobile_app`)})}),(0,J.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,J.jsx)(K.Link,{href:`#`,children:e(`story.navbar_overview`)}),(0,J.jsx)(K.Link,{href:`#`,children:e(`story.navbar_activity`)})]}),(0,J.jsx)(K.Toggle,{}),(0,J.jsxs)(K.Menu,{children:[(0,J.jsx)(K.MenuItem,{children:e(`story.navbar_overview`)}),(0,J.jsx)(K.MenuItem,{children:e(`story.navbar_activity`)})]})]})}},Q={render:e=>{let{t}=i(s);return(0,J.jsxs)(K,{...e,bordered:!0,children:[(0,J.jsx)(K.Brand,{children:(0,J.jsx)(`span`,{children:t(`story.navbar_center`)})}),(0,J.jsxs)(K.Content,{justify:`center`,hiddenOnMobile:!0,children:[(0,J.jsx)(K.Link,{href:`#`,active:!0,children:t(`story.navbar_product`)}),(0,J.jsx)(K.Link,{href:`#`,children:t(`story.navbar_solutions`)}),(0,J.jsx)(K.Link,{href:`#`,children:t(`story.navbar_resources`)})]}),(0,J.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,J.jsx)(h,{variant:`ghost`,size:`sm`,children:t(`story.navbar_signin`)}),(0,J.jsx)(h,{variant:`solid`,size:`sm`,children:t(`story.navbar_signup`)})]}),(0,J.jsx)(K.Toggle,{}),(0,J.jsxs)(K.Menu,{children:[(0,J.jsx)(K.MenuItem,{active:!0,children:t(`story.navbar_product`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_solutions`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_resources`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_signin`)}),(0,J.jsx)(K.MenuItem,{children:t(`story.navbar_signup`)})]})]})}},$={render:()=>{let{t:e}=i(s);return(0,J.jsxs)(`div`,{style:{height:`400px`,position:`relative`,overflow:`hidden`,border:`1px solid var(--wim-color-border)`},children:[(0,J.jsxs)(K,{bordered:!0,style:{position:`absolute`,top:0,left:0,right:0},children:[(0,J.jsx)(K.Brand,{children:(0,J.jsx)(`span`,{children:e(`story.navbar_responsive`)})}),(0,J.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,J.jsx)(K.Link,{href:`#`,children:e(`story.navbar_dashboard`)}),(0,J.jsx)(K.Link,{href:`#`,children:e(`story.navbar_settings`)}),(0,J.jsx)(K.Link,{href:`#`,children:e(`story.navbar_profile`)})]}),(0,J.jsx)(K.Toggle,{}),(0,J.jsxs)(K.Menu,{children:[(0,J.jsx)(K.MenuItem,{children:e(`story.navbar_dashboard`)}),(0,J.jsx)(K.MenuItem,{children:e(`story.navbar_settings`)}),(0,J.jsx)(K.MenuItem,{children:e(`story.navbar_profile`)})]})]}),(0,J.jsxs)(`div`,{style:{padding:`80px 20px`},children:[(0,J.jsx)(`p`,{children:e(`story.navbar_responsive_info`)}),(0,J.jsx)(`p`,{children:e(`story.navbar_responsive_desc`)})]})]})}},se=[`Default`,`GlassEffect`,`WithMobileMenu`,`CenteredLinks`,`BuiltInResponsive`],Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}export{ce as i,X as n,ae as r,Q as t};