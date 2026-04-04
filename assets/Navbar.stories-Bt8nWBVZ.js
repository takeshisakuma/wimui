import{j as n}from"./jsx-runtime-u17CrQMm.js";import{R as d,r as y,A as _}from"./iframe-Bn5mqC8Q.js";import{c as v}from"./index-K9UxIAwh.js";import{H as P}from"./HamburgerMenu-DsJ2nLQJ.js";import{D as z,b as D}from"./Drawer-UlELRYLh.js";import{B as x}from"./Button-xp1wFFLS.js";import{u as f}from"./useTranslation-Cn4N2seM.js";const g=y.createContext(void 0),M=d.forwardRef(({className:r,children:a,fixed:s,sticky:t,transparent:o,glass:i,bordered:l,defaultMenuOpen:c=!1,isMenuOpen:b,onMenuOpenChange:B,...E},S)=>{const[A,F]=y.useState(c),q=b??A,R=O=>{F(O),B?.(O)};return n.jsx(g.Provider,{value:{isMenuOpen:q,setIsMenuOpen:R},children:n.jsx("nav",{ref:S,className:v("wim-navbar",s&&"wim-navbar--fixed",t&&"wim-navbar--sticky",o&&"wim-navbar--transparent",i&&"wim-navbar--glass",l&&"wim-navbar--bordered",r),...E,children:n.jsx("div",{className:"wim-navbar__container",children:a})})})});M.displayName="Navbar";const j=d.forwardRef(({className:r,children:a,...s},t)=>n.jsx("div",{ref:t,className:v("wim-navbar__brand",r),...s,children:a}));j.displayName="Navbar.Brand";const I=d.forwardRef(({className:r,children:a,justify:s="end",hiddenOnMobile:t,...o},i)=>n.jsx("div",{ref:i,className:v("wim-navbar__content",`wim-navbar__content--${s}`,t&&"wim-navbar__content--hidden-mobile",r),...o,children:a}));I.displayName="Navbar.Content";const k=d.forwardRef(({className:r,children:a,active:s,...t},o)=>n.jsx("div",{ref:o,className:v("wim-navbar__item",s&&"wim-navbar__item--active",r),...t,children:a}));k.displayName="Navbar.Item";const L=d.forwardRef(({className:r,children:a,active:s,...t},o)=>n.jsx("a",{ref:o,className:v("wim-navbar__link",s&&"wim-navbar__link--active",r),...t,children:a}));L.displayName="Navbar.Link";const C=d.forwardRef(({className:r,...a},s)=>{const t=y.useContext(g);if(!t)throw new Error("NavbarToggle must be used within a Navbar");const{isMenuOpen:o,setIsMenuOpen:i}=t;return n.jsx("div",{className:"wim-navbar__toggle",children:n.jsx(P,{ref:s,open:o,onClick:()=>i(!o),className:r,...a})})});C.displayName="Navbar.Toggle";const w=d.forwardRef(({className:r,children:a,position:s="top",...t},o)=>{const i=y.useContext(g);if(!i)throw new Error("NavbarMenu must be used within a Navbar");const{isMenuOpen:l,setIsMenuOpen:c}=i;return n.jsx(z,{open:l,onOpenChange:c,side:s,children:n.jsx(D,{className:v("wim-navbar__menu",r),children:a})})});w.displayName="Navbar.Menu";const T=d.forwardRef(({className:r,children:a,active:s,...t},o)=>{const i=y.useContext(g),{setIsMenuOpen:l}=i||{},c=b=>{l?.(!1),t.onClick?.(b)};return n.jsx("div",{ref:o,className:v("wim-navbar__menu-item",s&&"wim-navbar__menu-item--active",r),onClick:c,role:"button",tabIndex:0,onKeyDown:b=>{(b.key==="Enter"||b.key===" ")&&b.currentTarget.click()},...t,children:a})});T.displayName="Navbar.MenuItem";const e=Object.assign(M,{Brand:j,Content:I,Item:k,Link:L,Toggle:C,Menu:w,MenuItem:T});M.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top"},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top"},transparent:{required:!1,tsType:{name:"boolean"},description:"Transparent background"},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect"},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom"},defaultMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Initial state for mobile menu",defaultValue:{value:"false",computed:!1}},isMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled state for mobile menu"},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when menu state changes"}}};j.__docgenInfo={description:"",methods:[],displayName:"Navbar.Brand"};I.__docgenInfo={description:"",methods:[],displayName:"Navbar.Content",props:{justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},hiddenOnMobile:{required:!1,tsType:{name:"boolean"},description:"Hide content on mobile screens"}}};k.__docgenInfo={description:"",methods:[],displayName:"Navbar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"Navbar.Link",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};C.__docgenInfo={description:"",methods:[],displayName:"Navbar.Toggle"};w.__docgenInfo={description:"",methods:[],displayName:"Navbar.Menu",props:{position:{required:!1,tsType:{name:"union",raw:'"right" | "left" | "top" | "bottom"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}}}};T.__docgenInfo={description:"",methods:[],displayName:"Navbar.MenuItem",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"Components/Application Shell/Navbar",component:e,parameters:{layout:"fullscreen"},argTypes:{fixed:{control:"boolean"},sticky:{control:"boolean"},transparent:{control:"boolean"},glass:{control:"boolean"},bordered:{control:"boolean"}}},u={render:r=>{const{t:a}=f(_);return n.jsxs(e,{...r,children:[n.jsx(e.Brand,{children:n.jsx("span",{children:a("story.navbar_logo")})}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",active:!0,children:a("story.navbar_home")}),n.jsx(e.Link,{href:"#",children:a("story.navbar_features")}),n.jsx(e.Link,{href:"#",children:a("story.navbar_pricing")}),n.jsx(e.Link,{href:"#",children:a("story.navbar_about")})]}),n.jsx(e.Content,{justify:"end",hiddenOnMobile:!0,children:n.jsx(x,{variant:"outline",size:"sm",children:a("story.navbar_login")})}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{active:!0,children:a("story.navbar_home")}),n.jsx(e.MenuItem,{children:a("story.navbar_features")}),n.jsx(e.MenuItem,{children:a("story.navbar_pricing")}),n.jsx(e.MenuItem,{children:a("story.navbar_about")}),n.jsx(e.MenuItem,{children:a("story.navbar_login")})]})]})},args:{bordered:!0}},p={render:r=>{const{t:a}=f(_);return n.jsxs("div",{style:{height:"400px",background:"linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",position:"relative"},children:[n.jsxs(e,{...r,glass:!0,fixed:!0,style:{position:"absolute"},children:[n.jsx(e.Brand,{children:n.jsx("span",{children:a("story.navbar_glass_ui")})}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",children:a("story.navbar_design")}),n.jsx(e.Link,{href:"#",children:a("story.navbar_components")}),n.jsx(e.Link,{href:"#",children:a("story.navbar_docs")})]}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{children:a("story.navbar_design")}),n.jsx(e.MenuItem,{children:a("story.navbar_components")}),n.jsx(e.MenuItem,{children:a("story.navbar_docs")})]})]}),n.jsxs("div",{style:{paddingTop:"80px",paddingLeft:"24px",color:"white"},children:[n.jsx("h1",{children:a("story.navbar_glass_title")}),n.jsx("p",{children:a("story.navbar_glass_desc")})]})]})}},m={render:()=>{const{t:r}=f(_);return n.jsxs(e,{bordered:!0,children:[n.jsx(e.Brand,{children:n.jsx("span",{children:r("story.navbar_mobile_app")})}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",children:r("story.navbar_overview")}),n.jsx(e.Link,{href:"#",children:r("story.navbar_activity")})]}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{children:r("story.navbar_overview")}),n.jsx(e.MenuItem,{children:r("story.navbar_activity")})]})]})}},N={render:r=>{const{t:a}=f(_);return n.jsxs(e,{...r,bordered:!0,children:[n.jsx(e.Brand,{children:n.jsx("span",{children:a("story.navbar_center")})}),n.jsxs(e.Content,{justify:"center",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",active:!0,children:a("story.navbar_product")}),n.jsx(e.Link,{href:"#",children:a("story.navbar_solutions")}),n.jsx(e.Link,{href:"#",children:a("story.navbar_resources")})]}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(x,{variant:"ghost",size:"sm",children:a("story.navbar_signin")}),n.jsx(x,{variant:"solid",size:"sm",children:a("story.navbar_signup")})]}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{active:!0,children:a("story.navbar_product")}),n.jsx(e.MenuItem,{children:a("story.navbar_solutions")}),n.jsx(e.MenuItem,{children:a("story.navbar_resources")}),n.jsx(e.MenuItem,{children:a("story.navbar_signin")}),n.jsx(e.MenuItem,{children:a("story.navbar_signup")})]})]})}},h={render:()=>{const{t:r}=f(_);return n.jsxs("div",{style:{height:"400px",position:"relative",overflow:"hidden",border:"1px solid #ccc"},children:[n.jsxs(e,{bordered:!0,style:{position:"absolute",top:0,left:0,right:0},children:[n.jsx(e.Brand,{children:n.jsx("span",{children:r("story.navbar_responsive")})}),n.jsxs(e.Content,{justify:"end",hiddenOnMobile:!0,children:[n.jsx(e.Link,{href:"#",children:r("story.navbar_dashboard")}),n.jsx(e.Link,{href:"#",children:r("story.navbar_settings")}),n.jsx(e.Link,{href:"#",children:r("story.navbar_profile")})]}),n.jsx(e.Toggle,{}),n.jsxs(e.Menu,{children:[n.jsx(e.MenuItem,{children:r("story.navbar_dashboard")}),n.jsx(e.MenuItem,{children:r("story.navbar_settings")}),n.jsx(e.MenuItem,{children:r("story.navbar_profile")})]})]}),n.jsxs("div",{style:{padding:"80px 20px"},children:[n.jsx("p",{children:r("story.navbar_responsive_info")}),n.jsx("p",{children:r("story.navbar_responsive_desc")})]})]})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
        <div style={{
        paddingTop: "80px",
        paddingLeft: "24px",
        color: "white"
      }}>
          <h1>{t("story.navbar_glass_title")}</h1>
          <p>{t("story.navbar_glass_desc")}</p>
        </div>
      </div>;
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const H=["Default","GlassEffect","WithMobileMenu","CenteredLinks","BuiltInResponsive"],X=Object.freeze(Object.defineProperty({__proto__:null,BuiltInResponsive:h,CenteredLinks:N,Default:u,GlassEffect:p,WithMobileMenu:m,__namedExportsOrder:H,default:G},Symbol.toStringTag,{value:"Module"}));export{N as C,p as G,X as N};
