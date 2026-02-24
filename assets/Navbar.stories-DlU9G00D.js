import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d,r as N}from"./iframe-uSE7GweJ.js";import{c as l}from"./index-2r2kfcGX.js";import{H as D}from"./HamburgerMenu-_hA1LAdL.js";import{D as P,b as q}from"./Drawer-CvsUx4EN.js";import{B as g}from"./Button-DuXBwRfT.js";const f=N.createContext(void 0),M=d.forwardRef(({className:r,children:t,fixed:i,sticky:a,transparent:s,glass:o,bordered:c,defaultMenuOpen:u=!1,isMenuOpen:x,onMenuOpenChange:_,...T},S)=>{const[B,E]=N.useState(u),R=x??B,F=O=>{E(O),_?.(O)};return e.jsx(f.Provider,{value:{isMenuOpen:R,setIsMenuOpen:F},children:e.jsx("nav",{ref:S,className:l("wim-navbar",i&&"wim-navbar--fixed",a&&"wim-navbar--sticky",s&&"wim-navbar--transparent",o&&"wim-navbar--glass",c&&"wim-navbar--bordered",r),...T,children:e.jsx("div",{className:"wim-navbar__container",children:t})})})});M.displayName="Navbar";const j=d.forwardRef(({className:r,children:t,...i},a)=>e.jsx("div",{ref:a,className:l("wim-navbar__brand",r),...i,children:t}));j.displayName="Navbar.Brand";const I=d.forwardRef(({className:r,children:t,justify:i="end",hiddenOnMobile:a,...s},o)=>e.jsx("div",{ref:o,className:l("wim-navbar__content",`wim-navbar__content--${i}`,a&&"wim-navbar__content--hidden-mobile",r),...s,children:t}));I.displayName="Navbar.Content";const y=d.forwardRef(({className:r,children:t,active:i,...a},s)=>e.jsx("div",{ref:s,className:l("wim-navbar__item",i&&"wim-navbar__item--active",r),...a,children:t}));y.displayName="Navbar.Item";const k=d.forwardRef(({className:r,children:t,active:i,...a},s)=>e.jsx("a",{ref:s,className:l("wim-navbar__link",i&&"wim-navbar__link--active",r),...a,children:t}));k.displayName="Navbar.Link";const L=d.forwardRef(({className:r,...t},i)=>{const a=N.useContext(f);if(!a)throw new Error("NavbarToggle must be used within a Navbar");const{isMenuOpen:s,setIsMenuOpen:o}=a;return e.jsx("div",{className:"wim-navbar__toggle",children:e.jsx(D,{ref:i,isOpen:s,onClick:()=>o(!s),className:r,...t})})});L.displayName="Navbar.Toggle";const w=d.forwardRef(({className:r,children:t,position:i="top",...a},s)=>{const o=N.useContext(f);if(!o)throw new Error("NavbarMenu must be used within a Navbar");const{isMenuOpen:c,setIsMenuOpen:u}=o;return e.jsx(P,{open:c,onOpenChange:u,side:i,children:e.jsx(q,{className:l("wim-navbar__menu",r),children:t})})});w.displayName="Navbar.Menu";const C=d.forwardRef(({className:r,children:t,active:i,...a},s)=>{const o=N.useContext(f),{setIsMenuOpen:c}=o||{},u=x=>{c?.(!1),a.onClick?.(x)};return e.jsx("div",{ref:s,className:l("wim-navbar__menu-item",i&&"wim-navbar__menu-item--active",r),onClick:u,...a,children:t})});C.displayName="Navbar.MenuItem";const n=Object.assign(M,{Brand:j,Content:I,Item:y,Link:k,Toggle:L,Menu:w,MenuItem:C});M.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top"},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top"},transparent:{required:!1,tsType:{name:"boolean"},description:"Transparent background"},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect"},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom"},defaultMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Initial state for mobile menu",defaultValue:{value:"false",computed:!1}},isMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled state for mobile menu"},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when menu state changes"}}};j.__docgenInfo={description:"",methods:[],displayName:"Navbar.Brand"};I.__docgenInfo={description:"",methods:[],displayName:"Navbar.Content",props:{justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},hiddenOnMobile:{required:!1,tsType:{name:"boolean"},description:"Hide content on mobile screens"}}};y.__docgenInfo={description:"",methods:[],displayName:"Navbar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};k.__docgenInfo={description:"",methods:[],displayName:"Navbar.Link",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"Navbar.Toggle",composes:["Omit"]};w.__docgenInfo={description:"",methods:[],displayName:"Navbar.Menu",props:{position:{required:!1,tsType:{name:"union",raw:'"right" | "left" | "top" | "bottom"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"top"',computed:!1}}}};C.__docgenInfo={description:"",methods:[],displayName:"Navbar.MenuItem",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};const A={title:"Components/Application Shell/Navbar",component:n,parameters:{layout:"fullscreen"},argTypes:{fixed:{control:"boolean"},sticky:{control:"boolean"},transparent:{control:"boolean"},glass:{control:"boolean"},bordered:{control:"boolean"}}},b={render:r=>e.jsxs(n,{...r,children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"LOGO"})}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",active:!0,children:"Home"}),e.jsx(n.Link,{href:"#",children:"Features"}),e.jsx(n.Link,{href:"#",children:"Pricing"}),e.jsx(n.Link,{href:"#",children:"About"})]}),e.jsx(n.Content,{justify:"end",hiddenOnMobile:!0,children:e.jsx(g,{priority:"secondary",size:"small",children:"Login"})}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{active:!0,children:"Home"}),e.jsx(n.MenuItem,{children:"Features"}),e.jsx(n.MenuItem,{children:"Pricing"}),e.jsx(n.MenuItem,{children:"About"}),e.jsx(n.MenuItem,{children:"Login"})]})]}),args:{bordered:!0}},v={render:r=>e.jsxs("div",{style:{height:"400px",background:"linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",position:"relative"},children:[e.jsxs(n,{...r,glass:!0,fixed:!0,style:{position:"absolute"},children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"Glass UI"})}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",children:"Design"}),e.jsx(n.Link,{href:"#",children:"Components"}),e.jsx(n.Link,{href:"#",children:"Docs"})]}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{children:"Design"}),e.jsx(n.MenuItem,{children:"Components"}),e.jsx(n.MenuItem,{children:"Docs"})]})]}),e.jsxs("div",{style:{paddingTop:"80px",paddingLeft:"24px",color:"white"},children:[e.jsx("h1",{children:"Glassmorphism Header"}),e.jsx("p",{children:"Scroll to see the effect overlay content"})]})]})},m={render:()=>e.jsxs(n,{bordered:!0,children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"Mobile App"})}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",children:"Overview"}),e.jsx(n.Link,{href:"#",children:"Activity"})]}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{children:"Overview"}),e.jsx(n.MenuItem,{children:"Activity"})]})]})},p={render:r=>e.jsxs(n,{...r,bordered:!0,children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"CENTER"})}),e.jsxs(n.Content,{justify:"center",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",active:!0,children:"Product"}),e.jsx(n.Link,{href:"#",children:"Solutions"}),e.jsx(n.Link,{href:"#",children:"Resources"})]}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(g,{priority:"tertiary",size:"small",children:"Sign In"}),e.jsx(g,{priority:"primary",size:"small",children:"Sign Up"})]}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{active:!0,children:"Product"}),e.jsx(n.MenuItem,{children:"Solutions"}),e.jsx(n.MenuItem,{children:"Resources"}),e.jsx(n.MenuItem,{children:"Sign In"}),e.jsx(n.MenuItem,{children:"Sign Up"})]})]})},h={render:()=>e.jsxs("div",{style:{height:"400px",position:"relative",overflow:"hidden",border:"1px solid #ccc"},children:[e.jsxs(n,{bordered:!0,style:{position:"absolute",top:0,left:0,right:0},children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"RESPONSIVE"})}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",children:"Dashboard"}),e.jsx(n.Link,{href:"#",children:"Settings"}),e.jsx(n.Link,{href:"#",children:"Profile"})]}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{children:"Dashboard"}),e.jsx(n.MenuItem,{children:"Settings"}),e.jsx(n.MenuItem,{children:"Profile"})]})]}),e.jsxs("div",{style:{padding:"80px 20px"},children:[e.jsx("p",{children:"Resize the window to see the responsive behavior."}),e.jsx("p",{children:"On mobile (md and below), the links hide and a hamburger menu appears."})]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Navbar {...args}>\r
            <Navbar.Brand>\r
                <span>LOGO</span>\r
            </Navbar.Brand>\r
            <Navbar.Content justify="end" hiddenOnMobile>\r
                <Navbar.Link href="#" active>Home</Navbar.Link>\r
                <Navbar.Link href="#">Features</Navbar.Link>\r
                <Navbar.Link href="#">Pricing</Navbar.Link>\r
                <Navbar.Link href="#">About</Navbar.Link>\r
            </Navbar.Content>\r
            <Navbar.Content justify="end" hiddenOnMobile>\r
                <Button priority="secondary" size="small">Login</Button>\r
            </Navbar.Content>\r
            <Navbar.Toggle />\r
            <Navbar.Menu>\r
                <Navbar.MenuItem active>Home</Navbar.MenuItem>\r
                <Navbar.MenuItem>Features</Navbar.MenuItem>\r
                <Navbar.MenuItem>Pricing</Navbar.MenuItem>\r
                <Navbar.MenuItem>About</Navbar.MenuItem>\r
                <Navbar.MenuItem>Login</Navbar.MenuItem>\r
            </Navbar.Menu>\r
        </Navbar>,
  args: {
    bordered: true
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <div style={{
    height: "400px",
    background: "linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
    position: "relative"
  }}>\r
            <Navbar {...args} glass fixed style={{
      position: "absolute"
    }}>\r
                <Navbar.Brand>\r
                    <span>Glass UI</span>\r
                </Navbar.Brand>\r
                <Navbar.Content justify="end" hiddenOnMobile>\r
                    <Navbar.Link href="#">Design</Navbar.Link>\r
                    <Navbar.Link href="#">Components</Navbar.Link>\r
                    <Navbar.Link href="#">Docs</Navbar.Link>\r
                </Navbar.Content>\r
                <Navbar.Toggle />\r
                <Navbar.Menu>\r
                    <Navbar.MenuItem>Design</Navbar.MenuItem>\r
                    <Navbar.MenuItem>Components</Navbar.MenuItem>\r
                    <Navbar.MenuItem>Docs</Navbar.MenuItem>\r
                </Navbar.Menu>\r
            </Navbar>\r
            <div style={{
      paddingTop: "80px",
      paddingLeft: "24px",
      color: "white"
    }}>\r
                <h1>Glassmorphism Header</h1>\r
                <p>Scroll to see the effect overlay content</p>\r
            </div>\r
        </div>
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <Navbar bordered>\r
                <Navbar.Brand>\r
                    <span>Mobile App</span>\r
                </Navbar.Brand>\r
                <Navbar.Content justify="end" hiddenOnMobile>\r
                    <Navbar.Link href="#">Overview</Navbar.Link>\r
                    <Navbar.Link href="#">Activity</Navbar.Link>\r
                </Navbar.Content>\r
                <Navbar.Toggle />\r
                <Navbar.Menu>\r
                    <Navbar.MenuItem>Overview</Navbar.MenuItem>\r
                    <Navbar.MenuItem>Activity</Navbar.MenuItem>\r
                </Navbar.Menu>\r
            </Navbar>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Navbar {...args} bordered>\r
            <Navbar.Brand>\r
                <span>CENTER</span>\r
            </Navbar.Brand>\r
            <Navbar.Content justify="center" hiddenOnMobile>\r
                <Navbar.Link href="#" active>Product</Navbar.Link>\r
                <Navbar.Link href="#">Solutions</Navbar.Link>\r
                <Navbar.Link href="#">Resources</Navbar.Link>\r
            </Navbar.Content>\r
            <Navbar.Content justify="end" hiddenOnMobile>\r
                <Button priority="tertiary" size="small">Sign In</Button>\r
                <Button priority="primary" size="small">Sign Up</Button>\r
            </Navbar.Content>\r
            <Navbar.Toggle />\r
            <Navbar.Menu>\r
                <Navbar.MenuItem active>Product</Navbar.MenuItem>\r
                <Navbar.MenuItem>Solutions</Navbar.MenuItem>\r
                <Navbar.MenuItem>Resources</Navbar.MenuItem>\r
                <Navbar.MenuItem>Sign In</Navbar.MenuItem>\r
                <Navbar.MenuItem>Sign Up</Navbar.MenuItem>\r
            </Navbar.Menu>\r
        </Navbar>
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
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
                    <span>RESPONSIVE</span>\r
                </Navbar.Brand>\r
                <Navbar.Content justify="end" hiddenOnMobile>\r
                    <Navbar.Link href="#">Dashboard</Navbar.Link>\r
                    <Navbar.Link href="#">Settings</Navbar.Link>\r
                    <Navbar.Link href="#">Profile</Navbar.Link>\r
                </Navbar.Content>\r
                <Navbar.Toggle />\r
                <Navbar.Menu>\r
                    <Navbar.MenuItem>Dashboard</Navbar.MenuItem>\r
                    <Navbar.MenuItem>Settings</Navbar.MenuItem>\r
                    <Navbar.MenuItem>Profile</Navbar.MenuItem>\r
                </Navbar.Menu>\r
            </Navbar>\r
            <div style={{
      padding: "80px 20px"
    }}>\r
                <p>Resize the window to see the responsive behavior.</p>\r
                <p>On mobile (md and below), the links hide and a hamburger menu appears.</p>\r
            </div>\r
        </div>
}`,...h.parameters?.docs?.source}}};const G=["Default","GlassEffect","WithMobileMenu","CenteredLinks","BuiltInResponsive"],J=Object.freeze(Object.defineProperty({__proto__:null,BuiltInResponsive:h,CenteredLinks:p,Default:b,GlassEffect:v,WithMobileMenu:m,__namedExportsOrder:G,default:A},Symbol.toStringTag,{value:"Module"}));export{p as C,v as G,J as N};
