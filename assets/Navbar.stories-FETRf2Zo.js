import{j as r}from"./jsx-runtime-u17CrQMm.js";import{R as d,r as y}from"./iframe-Db9rXbo4.js";import{c as l}from"./index-BeEGmSlY.js";import{H as P}from"./HamburgerMenu-C1Dq_JJ0.js";import{D as z,b as D}from"./Drawer-Bh5JwR4L.js";import{B as x}from"./Button-R6esN6DB.js";import{A as h}from"./i18nConstants-BpHxieg5.js";import{u as f}from"./useTranslation-CwCoJP0K.js";const g=y.createContext(void 0),M=d.forwardRef(({className:a,children:n,fixed:s,sticky:t,transparent:o,glass:i,bordered:v,defaultMenuOpen:c=!1,isMenuOpen:b,onMenuOpenChange:B,...E},S)=>{const[A,F]=y.useState(c),q=b??A,R=O=>{F(O),B?.(O)};return r.jsx(g.Provider,{value:{isMenuOpen:q,setIsMenuOpen:R},children:r.jsx("nav",{ref:S,className:l("wim-navbar",s&&"wim-navbar--fixed",t&&"wim-navbar--sticky",o&&"wim-navbar--transparent",i&&"wim-navbar--glass",v&&"wim-navbar--bordered",a),...E,children:r.jsx("div",{className:"wim-navbar__container",children:n})})})});M.displayName="Navbar";const j=d.forwardRef(({className:a,children:n,...s},t)=>r.jsx("div",{ref:t,className:l("wim-navbar__brand",a),...s,children:n}));j.displayName="Navbar.Brand";const I=d.forwardRef(({className:a,children:n,justify:s="end",hiddenOnMobile:t,...o},i)=>r.jsx("div",{ref:i,className:l("wim-navbar__content",`wim-navbar__content--${s}`,t&&"wim-navbar__content--hidden-mobile",a),...o,children:n}));I.displayName="Navbar.Content";const k=d.forwardRef(({className:a,children:n,active:s,...t},o)=>r.jsx("div",{ref:o,className:l("wim-navbar__item",s&&"wim-navbar__item--active",a),...t,children:n}));k.displayName="Navbar.Item";const L=d.forwardRef(({className:a,children:n,active:s,...t},o)=>r.jsx("a",{ref:o,className:l("wim-navbar__link",s&&"wim-navbar__link--active",a),...t,children:n}));L.displayName="Navbar.Link";const C=d.forwardRef(({className:a,...n},s)=>{const t=y.useContext(g);if(!t)throw new Error("NavbarToggle must be used within a Navbar");const{isMenuOpen:o,setIsMenuOpen:i}=t;return r.jsx("div",{className:"wim-navbar__toggle",children:r.jsx(P,{ref:s,isOpen:o,onClick:()=>i(!o),className:a,...n})})});C.displayName="Navbar.Toggle";const w=d.forwardRef(({className:a,children:n,position:s="top",...t},o)=>{const i=y.useContext(g);if(!i)throw new Error("NavbarMenu must be used within a Navbar");const{isMenuOpen:v,setIsMenuOpen:c}=i;return r.jsx(z,{open:v,onOpenChange:c,side:s,children:r.jsx(D,{className:l("wim-navbar__menu",a),children:n})})});w.displayName="Navbar.Menu";const T=d.forwardRef(({className:a,children:n,active:s,...t},o)=>{const i=y.useContext(g),{setIsMenuOpen:v}=i||{},c=b=>{v?.(!1),t.onClick?.(b)};return r.jsx("div",{ref:o,className:l("wim-navbar__menu-item",s&&"wim-navbar__menu-item--active",a),onClick:c,role:"button",tabIndex:0,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&b.currentTarget.click()},...t,children:n})});T.displayName="Navbar.MenuItem";const e=Object.assign(M,{Brand:j,Content:I,Item:k,Link:L,Toggle:C,Menu:w,MenuItem:T});M.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top"},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top"},transparent:{required:!1,tsType:{name:"boolean"},description:"Transparent background"},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect"},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom"},defaultMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Initial state for mobile menu",defaultValue:{value:"false",computed:!1}},isMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled state for mobile menu"},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when menu state changes"}}};j.__docgenInfo={description:"",methods:[],displayName:"Navbar.Brand"};I.__docgenInfo={description:"",methods:[],displayName:"Navbar.Content",props:{justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},hiddenOnMobile:{required:!1,tsType:{name:"boolean"},description:"Hide content on mobile screens"}}};k.__docgenInfo={description:"",methods:[],displayName:"Navbar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"Navbar.Link",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"Navbar.Toggle"};w.__docgenInfo={description:"",methods:[],displayName:"Navbar.Menu",props:{position:{required:!1,tsType:{name:"union",raw:'"right" | "left" | "top" | "bottom"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"Navbar.MenuItem",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"Components/Application Shell/Navbar",component:e,parameters:{layout:"fullscreen"},argTypes:{fixed:{control:"boolean"},sticky:{control:"boolean"},transparent:{control:"boolean"},glass:{control:"boolean"},bordered:{control:"boolean"}}},u={render:a=>{const{t:n}=f(h);return r.jsxs(e,{...a,children:[r.jsx(e.Brand,{children:r.jsx("span",{children:n("story_navbar_logo")})}),r.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[r.jsx(e.Link,{href:"#",active:!0,children:n("story_navbar_home")}),r.jsx(e.Link,{href:"#",children:n("story_navbar_features")}),r.jsx(e.Link,{href:"#",children:n("story_navbar_pricing")}),r.jsx(e.Link,{href:"#",children:n("story_navbar_about")})]}),r.jsx(e.Content,{justify:"end",hiddenOnMobile:!0,children:r.jsx(x,{priority:"secondary",size:"small",children:n("story_navbar_login")})}),r.jsx(e.Toggle,{}),r.jsxs(e.Menu,{children:[r.jsx(e.MenuItem,{active:!0,children:n("story_navbar_home")}),r.jsx(e.MenuItem,{children:n("story_navbar_features")}),r.jsx(e.MenuItem,{children:n("story_navbar_pricing")}),r.jsx(e.MenuItem,{children:n("story_navbar_about")}),r.jsx(e.MenuItem,{children:n("story_navbar_login")})]})]})},args:{bordered:!0}},_={render:a=>{const{t:n}=f(h);return r.jsxs("div",{style:{height:"400px",background:"linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",position:"relative"},children:[r.jsxs(e,{...a,glass:!0,fixed:!0,style:{position:"absolute"},children:[r.jsx(e.Brand,{children:r.jsx("span",{children:n("story_navbar_glass_ui")})}),r.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[r.jsx(e.Link,{href:"#",children:n("story_navbar_design")}),r.jsx(e.Link,{href:"#",children:n("story_navbar_components")}),r.jsx(e.Link,{href:"#",children:n("story_navbar_docs")})]}),r.jsx(e.Toggle,{}),r.jsxs(e.Menu,{children:[r.jsx(e.MenuItem,{children:n("story_navbar_design")}),r.jsx(e.MenuItem,{children:n("story_navbar_components")}),r.jsx(e.MenuItem,{children:n("story_navbar_docs")})]})]}),r.jsxs("div",{style:{paddingTop:"80px",paddingLeft:"24px",color:"white"},children:[r.jsx("h1",{children:n("story_navbar_glass_title")}),r.jsx("p",{children:n("story_navbar_glass_desc")})]})]})}},p={render:()=>{const{t:a}=f(h);return r.jsxs(e,{bordered:!0,children:[r.jsx(e.Brand,{children:r.jsx("span",{children:a("story_navbar_mobile_app")})}),r.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[r.jsx(e.Link,{href:"#",children:a("story_navbar_overview")}),r.jsx(e.Link,{href:"#",children:a("story_navbar_activity")})]}),r.jsx(e.Toggle,{}),r.jsxs(e.Menu,{children:[r.jsx(e.MenuItem,{children:a("story_navbar_overview")}),r.jsx(e.MenuItem,{children:a("story_navbar_activity")})]})]})}},m={render:a=>{const{t:n}=f(h);return r.jsxs(e,{...a,bordered:!0,children:[r.jsx(e.Brand,{children:r.jsx("span",{children:n("story_navbar_center")})}),r.jsxs(e.Content,{justify:"center",hiddenOnMobile:!0,children:[r.jsx(e.Link,{href:"#",active:!0,children:n("story_navbar_product")}),r.jsx(e.Link,{href:"#",children:n("story_navbar_solutions")}),r.jsx(e.Link,{href:"#",children:n("story_navbar_resources")})]}),r.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[r.jsx(x,{priority:"tertiary",size:"small",children:n("story_navbar_signin")}),r.jsx(x,{priority:"primary",size:"small",children:n("story_navbar_signup")})]}),r.jsx(e.Toggle,{}),r.jsxs(e.Menu,{children:[r.jsx(e.MenuItem,{active:!0,children:n("story_navbar_product")}),r.jsx(e.MenuItem,{children:n("story_navbar_solutions")}),r.jsx(e.MenuItem,{children:n("story_navbar_resources")}),r.jsx(e.MenuItem,{children:n("story_navbar_signin")}),r.jsx(e.MenuItem,{children:n("story_navbar_signup")})]})]})}},N={render:()=>{const{t:a}=f(h);return r.jsxs("div",{style:{height:"400px",position:"relative",overflow:"hidden",border:"1px solid #ccc"},children:[r.jsxs(e,{bordered:!0,style:{position:"absolute",top:0,left:0,right:0},children:[r.jsx(e.Brand,{children:r.jsx("span",{children:a("story_navbar_responsive")})}),r.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[r.jsx(e.Link,{href:"#",children:a("story_navbar_dashboard")}),r.jsx(e.Link,{href:"#",children:a("story_navbar_settings")}),r.jsx(e.Link,{href:"#",children:a("story_navbar_profile")})]}),r.jsx(e.Toggle,{}),r.jsxs(e.Menu,{children:[r.jsx(e.MenuItem,{children:a("story_navbar_dashboard")}),r.jsx(e.MenuItem,{children:a("story_navbar_settings")}),r.jsx(e.MenuItem,{children:a("story_navbar_profile")})]})]}),r.jsxs("div",{style:{padding:"80px 20px"},children:[r.jsx("p",{children:a("story_navbar_responsive_info")}),r.jsx("p",{children:a("story_navbar_responsive_desc")})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Navbar {...args}>\r
        <Navbar.Brand>\r
          <span>{t("story_navbar_logo")}</span>\r
        </Navbar.Brand>\r
        <Navbar.Content justify="end" hiddenOnMobile>\r
          <Navbar.Link href="#" active>\r
            {t("story_navbar_home")}\r
          </Navbar.Link>\r
          <Navbar.Link href="#">{t("story_navbar_features")}</Navbar.Link>\r
          <Navbar.Link href="#">{t("story_navbar_pricing")}</Navbar.Link>\r
          <Navbar.Link href="#">{t("story_navbar_about")}</Navbar.Link>\r
        </Navbar.Content>\r
        <Navbar.Content justify="end" hiddenOnMobile>\r
          <Button priority="secondary" size="small">\r
            {t("story_navbar_login")}\r
          </Button>\r
        </Navbar.Content>\r
        <Navbar.Toggle />\r
        <Navbar.Menu>\r
          <Navbar.MenuItem active>{t("story_navbar_home")}</Navbar.MenuItem>\r
          <Navbar.MenuItem>{t("story_navbar_features")}</Navbar.MenuItem>\r
          <Navbar.MenuItem>{t("story_navbar_pricing")}</Navbar.MenuItem>\r
          <Navbar.MenuItem>{t("story_navbar_about")}</Navbar.MenuItem>\r
          <Navbar.MenuItem>{t("story_navbar_login")}</Navbar.MenuItem>\r
        </Navbar.Menu>\r
      </Navbar>;
  },
  args: {
    bordered: true
  }
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      background: "linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
      position: "relative"
    }}>\r
        <Navbar {...args} glass fixed style={{
        position: "absolute"
      }}>\r
          <Navbar.Brand>\r
            <span>{t("story_navbar_glass_ui")}</span>\r
          </Navbar.Brand>\r
          <Navbar.Content justify="end" hiddenOnMobile>\r
            <Navbar.Link href="#">{t("story_navbar_design")}</Navbar.Link>\r
            <Navbar.Link href="#">{t("story_navbar_components")}</Navbar.Link>\r
            <Navbar.Link href="#">{t("story_navbar_docs")}</Navbar.Link>\r
          </Navbar.Content>\r
          <Navbar.Toggle />\r
          <Navbar.Menu>\r
            <Navbar.MenuItem>{t("story_navbar_design")}</Navbar.MenuItem>\r
            <Navbar.MenuItem>{t("story_navbar_components")}</Navbar.MenuItem>\r
            <Navbar.MenuItem>{t("story_navbar_docs")}</Navbar.MenuItem>\r
          </Navbar.Menu>\r
        </Navbar>\r
        <div style={{
        paddingTop: "80px",
        paddingLeft: "24px",
        color: "white"
      }}>\r
          <h1>{t("story_navbar_glass_title")}</h1>\r
          <p>{t("story_navbar_glass_desc")}</p>\r
        </div>\r
      </div>;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Navbar bordered>\r
        <Navbar.Brand>\r
          <span>{t("story_navbar_mobile_app")}</span>\r
        </Navbar.Brand>\r
        <Navbar.Content justify="end" hiddenOnMobile>\r
          <Navbar.Link href="#">{t("story_navbar_overview")}</Navbar.Link>\r
          <Navbar.Link href="#">{t("story_navbar_activity")}</Navbar.Link>\r
        </Navbar.Content>\r
        <Navbar.Toggle />\r
        <Navbar.Menu>\r
          <Navbar.MenuItem>{t("story_navbar_overview")}</Navbar.MenuItem>\r
          <Navbar.MenuItem>{t("story_navbar_activity")}</Navbar.MenuItem>\r
        </Navbar.Menu>\r
      </Navbar>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Navbar {...args} bordered>\r
        <Navbar.Brand>\r
          <span>{t("story_navbar_center")}</span>\r
        </Navbar.Brand>\r
        <Navbar.Content justify="center" hiddenOnMobile>\r
          <Navbar.Link href="#" active>\r
            {t("story_navbar_product")}\r
          </Navbar.Link>\r
          <Navbar.Link href="#">{t("story_navbar_solutions")}</Navbar.Link>\r
          <Navbar.Link href="#">{t("story_navbar_resources")}</Navbar.Link>\r
        </Navbar.Content>\r
        <Navbar.Content justify="end" hiddenOnMobile>\r
          <Button priority="tertiary" size="small">\r
            {t("story_navbar_signin")}\r
          </Button>\r
          <Button priority="primary" size="small">\r
            {t("story_navbar_signup")}\r
          </Button>\r
        </Navbar.Content>\r
        <Navbar.Toggle />\r
        <Navbar.Menu>\r
          <Navbar.MenuItem active>{t("story_navbar_product")}</Navbar.MenuItem>\r
          <Navbar.MenuItem>{t("story_navbar_solutions")}</Navbar.MenuItem>\r
          <Navbar.MenuItem>{t("story_navbar_resources")}</Navbar.MenuItem>\r
          <Navbar.MenuItem>{t("story_navbar_signin")}</Navbar.MenuItem>\r
          <Navbar.MenuItem>{t("story_navbar_signup")}</Navbar.MenuItem>\r
        </Navbar.Menu>\r
      </Navbar>;
  }
}`,...m.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      height: "400px",
      position: "relative",
      overflow: "hidden",
      border: "1px solid #ccc"
    }}>\r
        <Navbar bordered style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      }}>\r
          <Navbar.Brand>\r
            <span>{t("story_navbar_responsive")}</span>\r
          </Navbar.Brand>\r
          <Navbar.Content justify="end" hiddenOnMobile>\r
            <Navbar.Link href="#">{t("story_navbar_dashboard")}</Navbar.Link>\r
            <Navbar.Link href="#">{t("story_navbar_settings")}</Navbar.Link>\r
            <Navbar.Link href="#">{t("story_navbar_profile")}</Navbar.Link>\r
          </Navbar.Content>\r
          <Navbar.Toggle />\r
          <Navbar.Menu>\r
            <Navbar.MenuItem>{t("story_navbar_dashboard")}</Navbar.MenuItem>\r
            <Navbar.MenuItem>{t("story_navbar_settings")}</Navbar.MenuItem>\r
            <Navbar.MenuItem>{t("story_navbar_profile")}</Navbar.MenuItem>\r
          </Navbar.Menu>\r
        </Navbar>\r
        <div style={{
        padding: "80px 20px"
      }}>\r
          <p>{t("story_navbar_responsive_info")}</p>\r
          <p>{t("story_navbar_responsive_desc")}</p>\r
        </div>\r
      </div>;
  }
}`,...N.parameters?.docs?.source}}};const H=["Default","GlassEffect","WithMobileMenu","CenteredLinks","BuiltInResponsive"],Y=Object.freeze(Object.defineProperty({__proto__:null,BuiltInResponsive:N,CenteredLinks:m,Default:u,GlassEffect:_,WithMobileMenu:p,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{m as C,_ as G,Y as N};
