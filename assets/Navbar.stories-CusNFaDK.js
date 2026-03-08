import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as d,r as N}from"./iframe-DUo8Bj02.js";import{c as b}from"./index-CI1dtVTQ.js";import{H as z}from"./HamburgerMenu-DUWIH2WV.js";import{D,b as G}from"./Drawer-BRFm9lxZ.js";import{B as g}from"./Button-rFGJ_NsL.js";import{u as y}from"./useTranslation-C2tw1dPV.js";const h=N.createContext(void 0),x=d.forwardRef(({className:a,children:r,fixed:s,sticky:t,transparent:o,glass:i,bordered:l,defaultMenuOpen:v=!1,isMenuOpen:f,onMenuOpenChange:O,...B},E)=>{const[F,q]=N.useState(v),R=f??F,S=T=>{q(T),O?.(T)};return n.jsx(h.Provider,{value:{isMenuOpen:R,setIsMenuOpen:S},children:n.jsx("nav",{ref:E,className:b("wim-navbar",s&&"wim-navbar--fixed",t&&"wim-navbar--sticky",o&&"wim-navbar--transparent",i&&"wim-navbar--glass",l&&"wim-navbar--bordered",a),...B,children:n.jsx("div",{className:"wim-navbar__container",children:r})})})});x.displayName="Navbar";const M=d.forwardRef(({className:a,children:r,...s},t)=>n.jsx("div",{ref:t,className:b("wim-navbar__brand",a),...s,children:r}));M.displayName="Navbar.Brand";const j=d.forwardRef(({className:a,children:r,justify:s="end",hiddenOnMobile:t,...o},i)=>n.jsx("div",{ref:i,className:b("wim-navbar__content",`wim-navbar__content--${s}`,t&&"wim-navbar__content--hidden-mobile",a),...o,children:r}));j.displayName="Navbar.Content";const I=d.forwardRef(({className:a,children:r,active:s,...t},o)=>n.jsx("div",{ref:o,className:b("wim-navbar__item",s&&"wim-navbar__item--active",a),...t,children:r}));I.displayName="Navbar.Item";const k=d.forwardRef(({className:a,children:r,active:s,...t},o)=>n.jsx("a",{ref:o,className:b("wim-navbar__link",s&&"wim-navbar__link--active",a),...t,children:r}));k.displayName="Navbar.Link";const L=d.forwardRef(({className:a,...r},s)=>{const t=N.useContext(h);if(!t)throw new Error("NavbarToggle must be used within a Navbar");const{isMenuOpen:o,setIsMenuOpen:i}=t;return n.jsx("div",{className:"wim-navbar__toggle",children:n.jsx(z,{ref:s,isOpen:o,onClick:()=>i(!o),className:a,...r})})});L.displayName="Navbar.Toggle";const w=d.forwardRef(({className:a,children:r,position:s="top",...t},o)=>{const i=N.useContext(h);if(!i)throw new Error("NavbarMenu must be used within a Navbar");const{isMenuOpen:l,setIsMenuOpen:v}=i;return n.jsx(D,{open:l,onOpenChange:v,side:s,children:n.jsx(G,{className:b("wim-navbar__menu",a),children:r})})});w.displayName="Navbar.Menu";const C=d.forwardRef(({className:a,children:r,active:s,...t},o)=>{const i=N.useContext(h),{setIsMenuOpen:l}=i||{},v=f=>{l?.(!1),t.onClick?.(f)};return n.jsx("div",{ref:o,className:b("wim-navbar__menu-item",s&&"wim-navbar__menu-item--active",a),onClick:v,...t,children:r})});C.displayName="Navbar.MenuItem";const e=Object.assign(x,{Brand:M,Content:j,Item:I,Link:k,Toggle:L,Menu:w,MenuItem:C});x.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top"},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top"},transparent:{required:!1,tsType:{name:"boolean"},description:"Transparent background"},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect"},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom"},defaultMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Initial state for mobile menu",defaultValue:{value:"false",computed:!1}},isMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled state for mobile menu"},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when menu state changes"}}};M.__docgenInfo={description:"",methods:[],displayName:"Navbar.Brand"};j.__docgenInfo={description:"",methods:[],displayName:"Navbar.Content",props:{justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},hiddenOnMobile:{required:!1,tsType:{name:"boolean"},description:"Hide content on mobile screens"}}};I.__docgenInfo={description:"",methods:[],displayName:"Navbar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"Navbar.Link",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"Navbar.Toggle",composes:["Omit"]};w.__docgenInfo={description:"",methods:[],displayName:"Navbar.Menu",props:{position:{required:!1,tsType:{name:"union",raw:'"right" | "left" | "top" | "bottom"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"Navbar.MenuItem",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};const A={title:"Components/Application Shell/Navbar",component:e,parameters:{layout:"fullscreen"},argTypes:{fixed:{control:"boolean"},sticky:{control:"boolean"},transparent:{control:"boolean"},glass:{control:"boolean"},bordered:{control:"boolean"}}},c={render:a=>{const{t:r}=y(["docs","common","components"]);return n.jsxs(e,{...a,children:[n.jsx(e.Brand,{children:n.jsx("span",{children:r("story_navbar_logo")})}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",active:!0,children:r("story_navbar_home")}),n.jsx(e.Link,{href:"#",children:r("story_navbar_features")}),n.jsx(e.Link,{href:"#",children:r("story_navbar_pricing")}),n.jsx(e.Link,{href:"#",children:r("story_navbar_about")})]}),n.jsx(e.Content,{justify:"end",hiddenOnMobile:!0,children:n.jsx(g,{priority:"secondary",size:"small",children:r("story_navbar_login")})}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{active:!0,children:r("story_navbar_home")}),n.jsx(e.MenuItem,{children:r("story_navbar_features")}),n.jsx(e.MenuItem,{children:r("story_navbar_pricing")}),n.jsx(e.MenuItem,{children:r("story_navbar_about")}),n.jsx(e.MenuItem,{children:r("story_navbar_login")})]})]})},args:{bordered:!0}},u={render:a=>{const{t:r}=y(["docs","common","components"]);return n.jsxs("div",{style:{height:"400px",background:"linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",position:"relative"},children:[n.jsxs(e,{...a,glass:!0,fixed:!0,style:{position:"absolute"},children:[n.jsx(e.Brand,{children:n.jsx("span",{children:r("story_navbar_glass_ui")})}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",children:r("story_navbar_design")}),n.jsx(e.Link,{href:"#",children:r("story_navbar_components")}),n.jsx(e.Link,{href:"#",children:r("story_navbar_docs")})]}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{children:r("story_navbar_design")}),n.jsx(e.MenuItem,{children:r("story_navbar_components")}),n.jsx(e.MenuItem,{children:r("story_navbar_docs")})]})]}),n.jsxs("div",{style:{paddingTop:"80px",paddingLeft:"24px",color:"white"},children:[n.jsx("h1",{children:r("story_navbar_glass_title")}),n.jsx("p",{children:r("story_navbar_glass_desc")})]})]})}},m={render:()=>{const{t:a}=y(["docs","common","components"]);return n.jsxs(e,{bordered:!0,children:[n.jsx(e.Brand,{children:n.jsx("span",{children:a("story_navbar_mobile_app")})}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",children:a("story_navbar_overview")}),n.jsx(e.Link,{href:"#",children:a("story_navbar_activity")})]}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{children:a("story_navbar_overview")}),n.jsx(e.MenuItem,{children:a("story_navbar_activity")})]})]})}},p={render:a=>{const{t:r}=y(["docs","common","components"]);return n.jsxs(e,{...a,bordered:!0,children:[n.jsx(e.Brand,{children:n.jsx("span",{children:r("story_navbar_center")})}),n.jsxs(e.Content,{justify:"center",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",active:!0,children:r("story_navbar_product")}),n.jsx(e.Link,{href:"#",children:r("story_navbar_solutions")}),n.jsx(e.Link,{href:"#",children:r("story_navbar_resources")})]}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(g,{priority:"tertiary",size:"small",children:r("story_navbar_signin")}),n.jsx(g,{priority:"primary",size:"small",children:r("story_navbar_signup")})]}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{active:!0,children:r("story_navbar_product")}),n.jsx(e.MenuItem,{children:r("story_navbar_solutions")}),n.jsx(e.MenuItem,{children:r("story_navbar_resources")}),n.jsx(e.MenuItem,{children:r("story_navbar_signin")}),n.jsx(e.MenuItem,{children:r("story_navbar_signup")})]})]})}},_={render:()=>{const{t:a}=y(["docs","common","components"]);return n.jsxs("div",{style:{height:"400px",position:"relative",overflow:"hidden",border:"1px solid #ccc"},children:[n.jsxs(e,{bordered:!0,style:{position:"absolute",top:0,left:0,right:0},children:[n.jsx(e.Brand,{children:n.jsx("span",{children:a("story_navbar_responsive")})}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",children:a("story_navbar_dashboard")}),n.jsx(e.Link,{href:"#",children:a("story_navbar_settings")}),n.jsx(e.Link,{href:"#",children:a("story_navbar_profile")})]}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{children:a("story_navbar_dashboard")}),n.jsx(e.MenuItem,{children:a("story_navbar_settings")}),n.jsx(e.MenuItem,{children:a("story_navbar_profile")})]})]}),n.jsxs("div",{style:{padding:"80px 20px"},children:[n.jsx("p",{children:a("story_navbar_responsive_info")}),n.jsx("p",{children:a("story_navbar_responsive_desc")})]})]})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,...p.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};const H=["Default","GlassEffect","WithMobileMenu","CenteredLinks","BuiltInResponsive"],U=Object.freeze(Object.defineProperty({__proto__:null,BuiltInResponsive:_,CenteredLinks:p,Default:c,GlassEffect:u,WithMobileMenu:m,__namedExportsOrder:H,default:A},Symbol.toStringTag,{value:"Module"}));export{p as C,u as G,U as N};
