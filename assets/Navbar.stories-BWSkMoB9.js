"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-sJBDdmOt.js";import{t as r}from"./react-BGJ90fIb.js";import{n as i,t as a}from"./useTranslation-CpMdOj2B.js";import{n as o,t as s}from"./i18nConstants-YD8z3mm4.js";import{t as c}from"./jsx-runtime-MKhVqBIO.js";import{t as l}from"./classnames-DQoS6hca.js";import{n as u,t as ee}from"./HamburgerMenu-yTnDmytd.js";import{n as te,t as ne}from"./composeEventHandlers-Cs3Pg43H.js";import{i as d,r as f,u as p}from"./Drawer-Cq685Dcl.js";import{n as m,t as h}from"./Button-BZJbe9C-.js";var g,_,v,y,re,b,x,S,C,w,ie,ae,oe,se,T,E,D,O,k,A,j,M;function N(){return(N=t((()=>{g=`_root_18lo8_4`,_=`_fixed_18lo8_15`,v=`_sticky_18lo8_21`,y=`_transparent_18lo8_26`,re=`_glass_18lo8_29`,b=`_bordered_18lo8_33`,x=`_container_18lo8_36`,S=`_fluid_18lo8_46`,C=`_brand_18lo8_49`,w=`_content_18lo8_58`,ie=`_start_18lo8_64`,ae=`_end_18lo8_67`,oe=`_center_18lo8_70`,se=`_hiddenMobile_18lo8_74`,T=`_item_18lo8_78`,E=`_active_18lo8_83`,D=`_link_18lo8_83`,O=`_toggle_18lo8_107`,k=`_menuFromLeft_18lo8_121`,A=`_menu_18lo8_121`,j=`_menuItem_18lo8_149`,M={root:g,fixed:_,sticky:v,transparent:y,glass:re,bordered:b,container:x,fluid:S,brand:C,content:w,start:ie,end:ae,center:oe,hiddenMobile:se,item:T,active:E,link:D,toggle:O,menuFromLeft:k,menu:A,menuItem:j}})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K;function ce(){return(ce=t((()=>{P=e(r(),1),F=e(l(),1),u(),p(),N(),te(),I=c(),L=(0,P.createContext)(void 0),R=P.forwardRef(({className:e,children:t,fixed:n,sticky:r,transparent:i,glass:a,bordered:o,fluid:s,defaultMenuOpen:c=!1,isMenuOpen:l,onMenuOpenChange:u,...ee},te)=>{let[ne,d]=(0,P.useState)(c),[f,p]=(0,P.useState)(),m=l??ne;return(0,I.jsx)(L.Provider,{value:{isMenuOpen:m,setIsMenuOpen:e=>{d(e),u?.(e)},setMenuPosition:p},children:(0,I.jsx)(`nav`,{ref:te,className:(0,F.default)(`wim-navbar`,M.root,n&&M.fixed,r&&M.sticky,i&&M.transparent,a&&M.glass,o&&M.bordered,e),...ee,children:(0,I.jsx)(`div`,{className:(0,F.default)(M.container,s&&M.fluid,f===`left`&&M.menuFromLeft),children:t})})})}),R.displayName=`Navbar`,z=P.forwardRef(({className:e,children:t,...n},r)=>(0,I.jsx)(`div`,{ref:r,className:(0,F.default)(M.brand,e),...n,children:t})),z.displayName=`Navbar.Brand`,B=P.forwardRef(({className:e,children:t,justify:n=`end`,hiddenOnMobile:r,...i},a)=>(0,I.jsx)(`div`,{ref:a,className:(0,F.default)(M.content,M[n],r&&M.hiddenMobile,e),...i,children:t})),B.displayName=`Navbar.Content`,V=P.forwardRef(({className:e,children:t,active:n,...r},i)=>(0,I.jsx)(`div`,{ref:i,className:(0,F.default)(M.item,n&&M.active,e),...r,children:t})),V.displayName=`Navbar.Item`,H=P.forwardRef(({className:e,children:t,active:n,...r},i)=>(0,I.jsx)(`a`,{ref:i,className:(0,F.default)(M.link,n&&M.active,e),...r,children:t})),H.displayName=`Navbar.Link`,U=P.forwardRef(({className:e,...t},n)=>{let r=(0,P.useContext)(L);if(!r)throw Error(`NavbarToggle must be used within a Navbar`);let{isMenuOpen:i,setIsMenuOpen:a}=r;return(0,I.jsx)(`div`,{className:M.toggle,children:(0,I.jsx)(ee,{ref:n,open:i,onOpenChange:a,className:e,...t})})}),U.displayName=`Navbar.Toggle`,W=P.forwardRef(({className:e,children:t,position:n=`top`,...r},i)=>{let a=(0,P.useContext)(L);if(!a)throw Error(`NavbarMenu must be used within a Navbar`);let{isMenuOpen:o,setIsMenuOpen:s,setMenuPosition:c}=a;return(0,P.useLayoutEffect)(()=>(c(n),()=>c(void 0)),[n,c]),(0,I.jsx)(f,{open:o,onOpenChange:s,side:n,children:(0,I.jsx)(d,{...r,className:(0,F.default)(M.menu,e),children:t})})}),W.displayName=`Navbar.Menu`,G=P.forwardRef(({className:e,children:t,active:n,...r},i)=>{let{setIsMenuOpen:a}=(0,P.useContext)(L)||{},o=e=>{a?.(!1),r.onClick?.(e)};return(0,I.jsx)(`div`,{ref:i,className:(0,F.default)(M.menuItem,n&&M.active,e),role:`button`,tabIndex:0,...r,onClick:o,onKeyDown:ne(r.onKeyDown,e=>{(e.key===`Enter`||e.key===` `)&&e.currentTarget.click()}),children:t})}),G.displayName=`Navbar.MenuItem`,K=Object.assign(R,{Brand:z,Content:B,Item:V,Link:H,Toggle:U,Menu:W,MenuItem:G}),z.__docgenInfo={description:``,methods:[],displayName:`Navbar.Brand`},B.__docgenInfo={description:``,methods:[],displayName:`Navbar.Content`,props:{justify:{required:!1,tsType:{name:`union`,raw:`"start" | "end" | "center"`,elements:[{name:`literal`,value:`"start"`},{name:`literal`,value:`"end"`},{name:`literal`,value:`"center"`}]},description:``,defaultValue:{value:`"end"`,computed:!1}},hiddenOnMobile:{required:!1,tsType:{name:`boolean`},description:``}}},V.__docgenInfo={description:``,methods:[],displayName:`Navbar.Item`,props:{active:{required:!1,tsType:{name:`boolean`},description:``}}},H.__docgenInfo={description:``,methods:[],displayName:`Navbar.Link`,props:{active:{required:!1,tsType:{name:`boolean`},description:``}}},U.__docgenInfo={description:``,methods:[],displayName:`Navbar.Toggle`},W.__docgenInfo={description:``,methods:[],displayName:`Navbar.Menu`,props:{position:{required:!1,tsType:{name:`union`,raw:`"right" | "left" | "top" | "bottom"`,elements:[{name:`literal`,value:`"right"`},{name:`literal`,value:`"left"`},{name:`literal`,value:`"top"`},{name:`literal`,value:`"bottom"`}]},description:"Edge the menu slides in from. With `left`, `Navbar.Toggle` moves to the left end of the bar.",defaultValue:{value:`"top"`,computed:!1}}}},G.__docgenInfo={description:``,methods:[],displayName:`Navbar.MenuItem`,props:{active:{required:!1,tsType:{name:`boolean`},description:``}}},R.__docgenInfo={description:``,methods:[],displayName:`Navbar`,props:{fixed:{required:!1,tsType:{name:`boolean`},description:`Whether the navbar is fixed to the viewport`},sticky:{required:!1,tsType:{name:`boolean`},description:`Whether the navbar sticks to the top while scrolling`},transparent:{required:!1,tsType:{name:`boolean`},description:`Whether the navbar background is transparent`},glass:{required:!1,tsType:{name:`boolean`},description:`Whether to apply the frosted-glass effect`},bordered:{required:!1,tsType:{name:`boolean`},description:`Whether to show a bottom border`},fluid:{required:!1,tsType:{name:`boolean`},description:`Expand content to full width (disable the centered max-width container)`},defaultMenuOpen:{required:!1,tsType:{name:`boolean`},description:`Initial open state of the mobile menu (uncontrolled)`,defaultValue:{value:`false`,computed:!1}},isMenuOpen:{required:!1,tsType:{name:`boolean`},description:`Open state of the mobile menu (controlled)`},onMenuOpenChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(isOpen: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`isOpen`}],return:{name:`void`}}},description:`Callback when the mobile menu open state changes`}}}})))()}var le=n({BuiltInResponsive:()=>$,CenteredLinks:()=>Q,Default:()=>J,GlassEffect:()=>Y,MenuFromLeft:()=>Z,WithMobileMenu:()=>X,__namedExportsOrder:()=>de,default:()=>ue}),q,ue,J,Y,X,Z,Q,$,de;function fe(){return(fe=t((()=>{r(),ce(),m(),a(),o(),q=c(),ue={title:`Components/Application Shell/Navbar`,component:K,parameters:{layout:`fullscreen`},argTypes:{fixed:{control:`boolean`},sticky:{control:`boolean`},transparent:{control:`boolean`},glass:{control:`boolean`},bordered:{control:`boolean`}}},J={render:e=>{let{t}=i(s);return(0,q.jsxs)(K,{...e,children:[(0,q.jsx)(K.Brand,{children:(0,q.jsx)(`span`,{children:t(`story.navbar_logo`)})}),(0,q.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(K.Link,{href:`#`,active:!0,children:t(`story.navbar_home`)}),(0,q.jsx)(K.Link,{href:`#`,children:t(`story.navbar_features`)}),(0,q.jsx)(K.Link,{href:`#`,children:t(`story.navbar_pricing`)}),(0,q.jsx)(K.Link,{href:`#`,children:t(`story.navbar_about`)})]}),(0,q.jsx)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:(0,q.jsx)(h,{variant:`outline`,size:`sm`,children:t(`story.navbar_login`)})}),(0,q.jsx)(K.Toggle,{}),(0,q.jsxs)(K.Menu,{children:[(0,q.jsx)(K.MenuItem,{active:!0,children:t(`story.navbar_home`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_features`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_pricing`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_about`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_login`)})]})]})},args:{bordered:!0}},Y={render:e=>{let{t}=i(s);return(0,q.jsxs)(`div`,{style:{height:`400px`,background:`var(--wim-color-glass-bg)`,position:`relative`},children:[(0,q.jsxs)(K,{...e,glass:!0,fixed:!0,fluid:!0,style:{position:`absolute`},children:[(0,q.jsx)(K.Brand,{children:(0,q.jsx)(`span`,{children:t(`story.navbar_glass_ui`)})}),(0,q.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(K.Link,{href:`#`,children:t(`story.navbar_design`)}),(0,q.jsx)(K.Link,{href:`#`,children:t(`story.navbar_components`)}),(0,q.jsx)(K.Link,{href:`#`,children:t(`story.navbar_docs`)})]}),(0,q.jsx)(K.Toggle,{}),(0,q.jsxs)(K.Menu,{children:[(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_design`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_components`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_docs`)})]})]}),(0,q.jsxs)(`div`,{style:{paddingTop:`80px`,paddingLeft:`var(--wim-spacing-xl)`,color:`var(--wim-color-text-primary)`},children:[(0,q.jsx)(`h1`,{children:t(`story.navbar_glass_title`)}),(0,q.jsx)(`p`,{children:t(`story.navbar_glass_desc`)})]})]})}},X={render:()=>{let{t:e}=i(s);return(0,q.jsxs)(K,{bordered:!0,children:[(0,q.jsx)(K.Brand,{children:(0,q.jsx)(`span`,{children:e(`story.navbar_mobile_app`)})}),(0,q.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(K.Link,{href:`#`,children:e(`story.navbar_overview`)}),(0,q.jsx)(K.Link,{href:`#`,children:e(`story.navbar_activity`)})]}),(0,q.jsx)(K.Toggle,{}),(0,q.jsxs)(K.Menu,{children:[(0,q.jsx)(K.MenuItem,{children:e(`story.navbar_overview`)}),(0,q.jsx)(K.MenuItem,{children:e(`story.navbar_activity`)})]})]})}},Z={render:()=>{let{t:e}=i(s);return(0,q.jsxs)(K,{bordered:!0,children:[(0,q.jsx)(K.Brand,{children:(0,q.jsx)(`span`,{children:e(`story.navbar_mobile_app`)})}),(0,q.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(K.Link,{href:`#`,children:e(`story.navbar_overview`)}),(0,q.jsx)(K.Link,{href:`#`,children:e(`story.navbar_activity`)})]}),(0,q.jsx)(K.Toggle,{}),(0,q.jsxs)(K.Menu,{position:`left`,children:[(0,q.jsx)(K.MenuItem,{children:e(`story.navbar_overview`)}),(0,q.jsx)(K.MenuItem,{children:e(`story.navbar_activity`)})]})]})}},Q={render:e=>{let{t}=i(s);return(0,q.jsxs)(K,{...e,bordered:!0,children:[(0,q.jsx)(K.Brand,{children:(0,q.jsx)(`span`,{children:t(`story.navbar_center`)})}),(0,q.jsxs)(K.Content,{justify:`center`,hiddenOnMobile:!0,children:[(0,q.jsx)(K.Link,{href:`#`,active:!0,children:t(`story.navbar_product`)}),(0,q.jsx)(K.Link,{href:`#`,children:t(`story.navbar_solutions`)}),(0,q.jsx)(K.Link,{href:`#`,children:t(`story.navbar_resources`)})]}),(0,q.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(h,{variant:`ghost`,size:`sm`,children:t(`story.navbar_signin`)}),(0,q.jsx)(h,{variant:`solid`,size:`sm`,children:t(`story.navbar_signup`)})]}),(0,q.jsx)(K.Toggle,{}),(0,q.jsxs)(K.Menu,{children:[(0,q.jsx)(K.MenuItem,{active:!0,children:t(`story.navbar_product`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_solutions`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_resources`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_signin`)}),(0,q.jsx)(K.MenuItem,{children:t(`story.navbar_signup`)})]})]})}},$={render:()=>{let{t:e}=i(s);return(0,q.jsxs)(`div`,{style:{height:`400px`,position:`relative`,overflow:`hidden`,border:`1px solid var(--wim-color-border)`},children:[(0,q.jsxs)(K,{bordered:!0,style:{position:`absolute`,top:0,left:0,right:0},children:[(0,q.jsx)(K.Brand,{children:(0,q.jsx)(`span`,{children:e(`story.navbar_responsive`)})}),(0,q.jsxs)(K.Content,{justify:`end`,hiddenOnMobile:!0,children:[(0,q.jsx)(K.Link,{href:`#`,children:e(`story.navbar_dashboard`)}),(0,q.jsx)(K.Link,{href:`#`,children:e(`story.navbar_settings`)}),(0,q.jsx)(K.Link,{href:`#`,children:e(`story.navbar_profile`)})]}),(0,q.jsx)(K.Toggle,{}),(0,q.jsxs)(K.Menu,{children:[(0,q.jsx)(K.MenuItem,{children:e(`story.navbar_dashboard`)}),(0,q.jsx)(K.MenuItem,{children:e(`story.navbar_settings`)}),(0,q.jsx)(K.MenuItem,{children:e(`story.navbar_profile`)})]})]}),(0,q.jsxs)(`div`,{style:{padding:`80px 20px`},children:[(0,q.jsx)(`p`,{children:e(`story.navbar_responsive_info`)}),(0,q.jsx)(`p`,{children:e(`story.navbar_responsive_desc`)})]})]})}},de=[`Default`,`GlassEffect`,`WithMobileMenu`,`MenuFromLeft`,`CenteredLinks`,`BuiltInResponsive`],J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
        <Navbar.Menu position="left">
          <Navbar.MenuItem>{t("story.navbar_overview")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story.navbar_activity")}</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`左から出す面。引き金も左端へ寄る（composition.md の必須ルール 16）。狭い幅で確かめる。`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}}})))()}export{fe as a,le as i,Y as n,Z as r,Q as t};