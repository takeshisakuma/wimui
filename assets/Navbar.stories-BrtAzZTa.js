import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d,r as y,A as h}from"./iframe-DD-5vQ8N.js";import{c as l}from"./index-DmsXWWEZ.js";import{H as P}from"./HamburgerMenu-CMZ9PxBD.js";import{D as z,b as D}from"./Drawer-Bhr_hV0S.js";import{B as x}from"./Button-H8Z8KNAn.js";import{u as f}from"./useTranslation-BGm1MMYI.js";const g=y.createContext(void 0),M=d.forwardRef(({className:r,children:a,fixed:s,sticky:t,transparent:o,glass:i,bordered:v,defaultMenuOpen:c=!1,isMenuOpen:b,onMenuOpenChange:B,...E},S)=>{const[A,F]=y.useState(c),q=b??A,R=O=>{F(O),B?.(O)};return e.jsx(g.Provider,{value:{isMenuOpen:q,setIsMenuOpen:R},children:e.jsx("nav",{ref:S,className:l("wim-navbar",s&&"wim-navbar--fixed",t&&"wim-navbar--sticky",o&&"wim-navbar--transparent",i&&"wim-navbar--glass",v&&"wim-navbar--bordered",r),...E,children:e.jsx("div",{className:"wim-navbar__container",children:a})})})});M.displayName="Navbar";const j=d.forwardRef(({className:r,children:a,...s},t)=>e.jsx("div",{ref:t,className:l("wim-navbar__brand",r),...s,children:a}));j.displayName="Navbar.Brand";const I=d.forwardRef(({className:r,children:a,justify:s="end",hiddenOnMobile:t,...o},i)=>e.jsx("div",{ref:i,className:l("wim-navbar__content",`wim-navbar__content--${s}`,t&&"wim-navbar__content--hidden-mobile",r),...o,children:a}));I.displayName="Navbar.Content";const k=d.forwardRef(({className:r,children:a,active:s,...t},o)=>e.jsx("div",{ref:o,className:l("wim-navbar__item",s&&"wim-navbar__item--active",r),...t,children:a}));k.displayName="Navbar.Item";const L=d.forwardRef(({className:r,children:a,active:s,...t},o)=>e.jsx("a",{ref:o,className:l("wim-navbar__link",s&&"wim-navbar__link--active",r),...t,children:a}));L.displayName="Navbar.Link";const C=d.forwardRef(({className:r,...a},s)=>{const t=y.useContext(g);if(!t)throw new Error("NavbarToggle must be used within a Navbar");const{isMenuOpen:o,setIsMenuOpen:i}=t;return e.jsx("div",{className:"wim-navbar__toggle",children:e.jsx(P,{ref:s,isOpen:o,onClick:()=>i(!o),className:r,...a})})});C.displayName="Navbar.Toggle";const w=d.forwardRef(({className:r,children:a,position:s="top",...t},o)=>{const i=y.useContext(g);if(!i)throw new Error("NavbarMenu must be used within a Navbar");const{isMenuOpen:v,setIsMenuOpen:c}=i;return e.jsx(z,{open:v,onOpenChange:c,side:s,children:e.jsx(D,{className:l("wim-navbar__menu",r),children:a})})});w.displayName="Navbar.Menu";const T=d.forwardRef(({className:r,children:a,active:s,...t},o)=>{const i=y.useContext(g),{setIsMenuOpen:v}=i||{},c=b=>{v?.(!1),t.onClick?.(b)};return e.jsx("div",{ref:o,className:l("wim-navbar__menu-item",s&&"wim-navbar__menu-item--active",r),onClick:c,role:"button",tabIndex:0,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&b.currentTarget.click()},...t,children:a})});T.displayName="Navbar.MenuItem";const n=Object.assign(M,{Brand:j,Content:I,Item:k,Link:L,Toggle:C,Menu:w,MenuItem:T});M.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top"},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top"},transparent:{required:!1,tsType:{name:"boolean"},description:"Transparent background"},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect"},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom"},defaultMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Initial state for mobile menu",defaultValue:{value:"false",computed:!1}},isMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled state for mobile menu"},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when menu state changes"}}};j.__docgenInfo={description:"",methods:[],displayName:"Navbar.Brand"};I.__docgenInfo={description:"",methods:[],displayName:"Navbar.Content",props:{justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},hiddenOnMobile:{required:!1,tsType:{name:"boolean"},description:"Hide content on mobile screens"}}};k.__docgenInfo={description:"",methods:[],displayName:"Navbar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"Navbar.Link",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"Navbar.Toggle"};w.__docgenInfo={description:"",methods:[],displayName:"Navbar.Menu",props:{position:{required:!1,tsType:{name:"union",raw:'"right" | "left" | "top" | "bottom"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"Navbar.MenuItem",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"Components/Application Shell/Navbar",component:n,parameters:{layout:"fullscreen"},argTypes:{fixed:{control:"boolean"},sticky:{control:"boolean"},transparent:{control:"boolean"},glass:{control:"boolean"},bordered:{control:"boolean"}}},u={render:r=>{const{t:a}=f(h);return e.jsxs(n,{...r,children:[e.jsx(n.Brand,{children:e.jsx("span",{children:a("story_navbar_logo")})}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",active:!0,children:a("story_navbar_home")}),e.jsx(n.Link,{href:"#",children:a("story_navbar_features")}),e.jsx(n.Link,{href:"#",children:a("story_navbar_pricing")}),e.jsx(n.Link,{href:"#",children:a("story_navbar_about")})]}),e.jsx(n.Content,{justify:"end",hiddenOnMobile:!0,children:e.jsx(x,{priority:"secondary",size:"small",children:a("story_navbar_login")})}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{active:!0,children:a("story_navbar_home")}),e.jsx(n.MenuItem,{children:a("story_navbar_features")}),e.jsx(n.MenuItem,{children:a("story_navbar_pricing")}),e.jsx(n.MenuItem,{children:a("story_navbar_about")}),e.jsx(n.MenuItem,{children:a("story_navbar_login")})]})]})},args:{bordered:!0}},_={render:r=>{const{t:a}=f(h);return e.jsxs("div",{style:{height:"400px",background:"linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",position:"relative"},children:[e.jsxs(n,{...r,glass:!0,fixed:!0,style:{position:"absolute"},children:[e.jsx(n.Brand,{children:e.jsx("span",{children:a("story_navbar_glass_ui")})}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",children:a("story_navbar_design")}),e.jsx(n.Link,{href:"#",children:a("story_navbar_components")}),e.jsx(n.Link,{href:"#",children:a("story_navbar_docs")})]}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{children:a("story_navbar_design")}),e.jsx(n.MenuItem,{children:a("story_navbar_components")}),e.jsx(n.MenuItem,{children:a("story_navbar_docs")})]})]}),e.jsxs("div",{style:{paddingTop:"80px",paddingLeft:"24px",color:"white"},children:[e.jsx("h1",{children:a("story_navbar_glass_title")}),e.jsx("p",{children:a("story_navbar_glass_desc")})]})]})}},p={render:()=>{const{t:r}=f(h);return e.jsxs(n,{bordered:!0,children:[e.jsx(n.Brand,{children:e.jsx("span",{children:r("story_navbar_mobile_app")})}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",children:r("story_navbar_overview")}),e.jsx(n.Link,{href:"#",children:r("story_navbar_activity")})]}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{children:r("story_navbar_overview")}),e.jsx(n.MenuItem,{children:r("story_navbar_activity")})]})]})}},m={render:r=>{const{t:a}=f(h);return e.jsxs(n,{...r,bordered:!0,children:[e.jsx(n.Brand,{children:e.jsx("span",{children:a("story_navbar_center")})}),e.jsxs(n.Content,{justify:"center",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",active:!0,children:a("story_navbar_product")}),e.jsx(n.Link,{href:"#",children:a("story_navbar_solutions")}),e.jsx(n.Link,{href:"#",children:a("story_navbar_resources")})]}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(x,{priority:"tertiary",size:"small",children:a("story_navbar_signin")}),e.jsx(x,{priority:"primary",size:"small",children:a("story_navbar_signup")})]}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{active:!0,children:a("story_navbar_product")}),e.jsx(n.MenuItem,{children:a("story_navbar_solutions")}),e.jsx(n.MenuItem,{children:a("story_navbar_resources")}),e.jsx(n.MenuItem,{children:a("story_navbar_signin")}),e.jsx(n.MenuItem,{children:a("story_navbar_signup")})]})]})}},N={render:()=>{const{t:r}=f(h);return e.jsxs("div",{style:{height:"400px",position:"relative",overflow:"hidden",border:"1px solid #ccc"},children:[e.jsxs(n,{bordered:!0,style:{position:"absolute",top:0,left:0,right:0},children:[e.jsx(n.Brand,{children:e.jsx("span",{children:r("story_navbar_responsive")})}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",children:r("story_navbar_dashboard")}),e.jsx(n.Link,{href:"#",children:r("story_navbar_settings")}),e.jsx(n.Link,{href:"#",children:r("story_navbar_profile")})]}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{children:r("story_navbar_dashboard")}),e.jsx(n.MenuItem,{children:r("story_navbar_settings")}),e.jsx(n.MenuItem,{children:r("story_navbar_profile")})]})]}),e.jsxs("div",{style:{padding:"80px 20px"},children:[e.jsx("p",{children:r("story_navbar_responsive_info")}),e.jsx("p",{children:r("story_navbar_responsive_desc")})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Navbar {...args}>
        <Navbar.Brand>
          <span>{t("story_navbar_logo")}</span>
        </Navbar.Brand>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Navbar.Link href="#" active>
            {t("story_navbar_home")}
          </Navbar.Link>
          <Navbar.Link href="#">{t("story_navbar_features")}</Navbar.Link>
          <Navbar.Link href="#">{t("story_navbar_pricing")}</Navbar.Link>
          <Navbar.Link href="#">{t("story_navbar_about")}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Button priority="secondary" size="small">
            {t("story_navbar_login")}
          </Button>
        </Navbar.Content>
        <Navbar.Toggle />
        <Navbar.Menu>
          <Navbar.MenuItem active>{t("story_navbar_home")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story_navbar_features")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story_navbar_pricing")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story_navbar_about")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story_navbar_login")}</Navbar.MenuItem>
        </Navbar.Menu>
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
    }}>
        <Navbar {...args} glass fixed style={{
        position: "absolute"
      }}>
          <Navbar.Brand>
            <span>{t("story_navbar_glass_ui")}</span>
          </Navbar.Brand>
          <Navbar.Content justify="end" hiddenOnMobile>
            <Navbar.Link href="#">{t("story_navbar_design")}</Navbar.Link>
            <Navbar.Link href="#">{t("story_navbar_components")}</Navbar.Link>
            <Navbar.Link href="#">{t("story_navbar_docs")}</Navbar.Link>
          </Navbar.Content>
          <Navbar.Toggle />
          <Navbar.Menu>
            <Navbar.MenuItem>{t("story_navbar_design")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story_navbar_components")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story_navbar_docs")}</Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar>
        <div style={{
        paddingTop: "80px",
        paddingLeft: "24px",
        color: "white"
      }}>
          <h1>{t("story_navbar_glass_title")}</h1>
          <p>{t("story_navbar_glass_desc")}</p>
        </div>
      </div>;
  }
}`,..._.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Navbar bordered>
        <Navbar.Brand>
          <span>{t("story_navbar_mobile_app")}</span>
        </Navbar.Brand>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Navbar.Link href="#">{t("story_navbar_overview")}</Navbar.Link>
          <Navbar.Link href="#">{t("story_navbar_activity")}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Toggle />
        <Navbar.Menu>
          <Navbar.MenuItem>{t("story_navbar_overview")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story_navbar_activity")}</Navbar.MenuItem>
        </Navbar.Menu>
      </Navbar>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Navbar {...args} bordered>
        <Navbar.Brand>
          <span>{t("story_navbar_center")}</span>
        </Navbar.Brand>
        <Navbar.Content justify="center" hiddenOnMobile>
          <Navbar.Link href="#" active>
            {t("story_navbar_product")}
          </Navbar.Link>
          <Navbar.Link href="#">{t("story_navbar_solutions")}</Navbar.Link>
          <Navbar.Link href="#">{t("story_navbar_resources")}</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content justify="end" hiddenOnMobile>
          <Button priority="tertiary" size="small">
            {t("story_navbar_signin")}
          </Button>
          <Button priority="primary" size="small">
            {t("story_navbar_signup")}
          </Button>
        </Navbar.Content>
        <Navbar.Toggle />
        <Navbar.Menu>
          <Navbar.MenuItem active>{t("story_navbar_product")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story_navbar_solutions")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story_navbar_resources")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story_navbar_signin")}</Navbar.MenuItem>
          <Navbar.MenuItem>{t("story_navbar_signup")}</Navbar.MenuItem>
        </Navbar.Menu>
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
    }}>
        <Navbar bordered style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0
      }}>
          <Navbar.Brand>
            <span>{t("story_navbar_responsive")}</span>
          </Navbar.Brand>
          <Navbar.Content justify="end" hiddenOnMobile>
            <Navbar.Link href="#">{t("story_navbar_dashboard")}</Navbar.Link>
            <Navbar.Link href="#">{t("story_navbar_settings")}</Navbar.Link>
            <Navbar.Link href="#">{t("story_navbar_profile")}</Navbar.Link>
          </Navbar.Content>
          <Navbar.Toggle />
          <Navbar.Menu>
            <Navbar.MenuItem>{t("story_navbar_dashboard")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story_navbar_settings")}</Navbar.MenuItem>
            <Navbar.MenuItem>{t("story_navbar_profile")}</Navbar.MenuItem>
          </Navbar.Menu>
        </Navbar>
        <div style={{
        padding: "80px 20px"
      }}>
          <p>{t("story_navbar_responsive_info")}</p>
          <p>{t("story_navbar_responsive_desc")}</p>
        </div>
      </div>;
  }
}`,...N.parameters?.docs?.source}}};const H=["Default","GlassEffect","WithMobileMenu","CenteredLinks","BuiltInResponsive"],X=Object.freeze(Object.defineProperty({__proto__:null,BuiltInResponsive:N,CenteredLinks:m,Default:u,GlassEffect:_,WithMobileMenu:p,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{m as C,_ as G,X as N};
