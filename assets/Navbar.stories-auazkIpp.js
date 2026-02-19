import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d,r as f}from"./iframe-BmbQ4tjy.js";import{c as l}from"./index-CmpatR6L.js";import{H as O}from"./HamburgerMenu-Do38KP-R.js";import{D,b as P}from"./Drawer-BhYe8fqr.js";import{B as g}from"./Button-CKApPSBK.js";const N=f.createContext(void 0),j=d.forwardRef(({className:r,children:a,fixed:t,sticky:s,transparent:i,glass:o,bordered:c,defaultMenuOpen:p=!1,isMenuOpen:x,onMenuOpenChange:S,...B},T)=>{const[E,R]=f.useState(p),F=x??E,q=M=>{R(M),S?.(M)};return e.jsx(N.Provider,{value:{isMenuOpen:F,setIsMenuOpen:q},children:e.jsx("nav",{ref:T,className:l("wim-navbar",t&&"wim-navbar--fixed",s&&"wim-navbar--sticky",i&&"wim-navbar--transparent",o&&"wim-navbar--glass",c&&"wim-navbar--bordered",r),...B,children:e.jsx("div",{className:"wim-navbar__container",children:a})})})});j.displayName="Navbar";const y=d.forwardRef(({className:r,children:a,...t},s)=>e.jsx("div",{ref:s,className:l("wim-navbar__brand",r),...t,children:a}));y.displayName="Navbar.Brand";const k=d.forwardRef(({className:r,children:a,justify:t="end",hiddenOnMobile:s,...i},o)=>e.jsx("div",{ref:o,className:l("wim-navbar__content",`wim-navbar__content--${t}`,s&&"wim-navbar__content--hidden-mobile",r),...i,children:a}));k.displayName="Navbar.Content";const C=d.forwardRef(({className:r,children:a,active:t,...s},i)=>e.jsx("div",{ref:i,className:l("wim-navbar__item",t&&"wim-navbar__item--active",r),...s,children:a}));C.displayName="Navbar.Item";const L=d.forwardRef(({className:r,children:a,active:t,...s},i)=>e.jsx("a",{ref:i,className:l("wim-navbar__link",t&&"wim-navbar__link--active",r),...s,children:a}));L.displayName="Navbar.Link";const w=d.forwardRef(({className:r,...a},t)=>{const s=f.useContext(N);if(!s)throw new Error("NavbarToggle must be used within a Navbar");const{isMenuOpen:i,setIsMenuOpen:o}=s;return e.jsx("div",{className:"wim-navbar__toggle",children:e.jsx(O,{ref:t,isOpen:i,onClick:()=>o(!i),className:r,...a})})});w.displayName="Navbar.Toggle";const _=d.forwardRef(({className:r,children:a,position:t="right",...s},i)=>{const o=f.useContext(N);if(!o)throw new Error("NavbarMenu must be used within a Navbar");const{isMenuOpen:c,setIsMenuOpen:p}=o;return e.jsx(D,{open:c,onOpenChange:p,side:t,children:e.jsx(P,{className:l("wim-navbar__menu",r),children:a})})});_.displayName="Navbar.Menu";const I=d.forwardRef(({className:r,children:a,active:t,...s},i)=>{const o=f.useContext(N),{setIsMenuOpen:c}=o||{},p=x=>{c?.(!1),s.onClick?.(x)};return e.jsx("div",{ref:i,className:l("wim-navbar__menu-item",t&&"wim-navbar__menu-item--active",r),onClick:p,...s,children:a})});I.displayName="Navbar.MenuItem";const n=Object.assign(j,{Brand:y,Content:k,Item:C,Link:L,Toggle:w,Menu:_,MenuItem:I});j.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top"},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top"},transparent:{required:!1,tsType:{name:"boolean"},description:"Transparent background"},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect"},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom"},defaultMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Initial state for mobile menu",defaultValue:{value:"false",computed:!1}},isMenuOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled state for mobile menu"},onMenuOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when menu state changes"}}};y.__docgenInfo={description:"",methods:[],displayName:"Navbar.Brand"};k.__docgenInfo={description:"",methods:[],displayName:"Navbar.Content",props:{justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"end"',computed:!1}},hiddenOnMobile:{required:!1,tsType:{name:"boolean"},description:"Hide content on mobile screens"}}};C.__docgenInfo={description:"",methods:[],displayName:"Navbar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};L.__docgenInfo={description:"",methods:[],displayName:"Navbar.Link",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};w.__docgenInfo={description:"",methods:[],displayName:"Navbar.Toggle",composes:["Omit"]};_.__docgenInfo={description:"",methods:[],displayName:"Navbar.Menu",props:{position:{required:!1,tsType:{name:"union",raw:'"right" | "left" | "top" | "bottom"',elements:[{name:"literal",value:'"right"'},{name:"literal",value:'"left"'},{name:"literal",value:'"top"'},{name:"literal",value:'"bottom"'}]},description:"",defaultValue:{value:'"right"',computed:!1}}}};I.__docgenInfo={description:"",methods:[],displayName:"Navbar.MenuItem",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};const G={title:"Component/Application Shell/Navbar",component:n,parameters:{layout:"fullscreen"},argTypes:{fixed:{control:"boolean"},sticky:{control:"boolean"},transparent:{control:"boolean"},glass:{control:"boolean"},bordered:{control:"boolean"}}},b={render:r=>e.jsxs(n,{...r,children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"LOGO"})}),e.jsxs(n.Content,{justify:"end",children:[e.jsx(n.Link,{href:"#",active:!0,children:"Home"}),e.jsx(n.Link,{href:"#",children:"Features"}),e.jsx(n.Link,{href:"#",children:"Pricing"}),e.jsx(n.Link,{href:"#",children:"About"})]}),e.jsx(n.Content,{justify:"end",children:e.jsx(g,{priority:"secondary",size:"small",children:"Login"})})]}),args:{bordered:!0}},m={render:r=>e.jsxs("div",{style:{height:"400px",background:"linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",position:"relative"},children:[e.jsxs(n,{...r,glass:!0,fixed:!0,style:{position:"absolute"},children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"Glass UI"})}),e.jsxs(n.Content,{justify:"end",children:[e.jsx(n.Link,{href:"#",children:"Design"}),e.jsx(n.Link,{href:"#",children:"Components"}),e.jsx(n.Link,{href:"#",children:"Docs"})]})]}),e.jsxs("div",{style:{paddingTop:"80px",paddingLeft:"24px",color:"white"},children:[e.jsx("h1",{children:"Glassmorphism Header"}),e.jsx("p",{children:"Scroll to see the effect overlay content"})]})]})},u={render:()=>{const[r,a]=d.useState(!1);return e.jsxs(n,{bordered:!0,children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"Mobile App"})}),e.jsx(n.Content,{justify:"end",className:"hidden-mobile",children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(n.Link,{href:"#",children:"Overview"}),e.jsx(O,{isOpen:r,onClick:()=>a(!r)})]})})]})}},v={render:r=>e.jsxs(n,{...r,bordered:!0,children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"CENTER"})}),e.jsxs(n.Content,{justify:"center",children:[e.jsx(n.Link,{href:"#",active:!0,children:"Product"}),e.jsx(n.Link,{href:"#",children:"Solutions"}),e.jsx(n.Link,{href:"#",children:"Resources"})]}),e.jsxs(n.Content,{justify:"end",children:[e.jsx(g,{priority:"tertiary",size:"small",children:"Sign In"}),e.jsx(g,{priority:"primary",size:"small",children:"Sign Up"})]})]})},h={render:()=>e.jsxs("div",{style:{height:"400px",position:"relative",overflow:"hidden",border:"1px solid #ccc"},children:[e.jsxs(n,{bordered:!0,style:{position:"absolute",top:0,left:0,right:0},children:[e.jsx(n.Brand,{children:e.jsx("span",{children:"RESPONSIVE"})}),e.jsxs(n.Content,{justify:"end",hiddenOnMobile:!0,children:[e.jsx(n.Link,{href:"#",children:"Dashboard"}),e.jsx(n.Link,{href:"#",children:"Settings"}),e.jsx(n.Link,{href:"#",children:"Profile"})]}),e.jsx(n.Toggle,{}),e.jsxs(n.Menu,{children:[e.jsx(n.MenuItem,{children:"Dashboard"}),e.jsx(n.MenuItem,{children:"Settings"}),e.jsx(n.MenuItem,{children:"Profile"})]})]}),e.jsxs("div",{style:{padding:"80px 20px"},children:[e.jsx("p",{children:"Resize the window to see the responsive behavior."}),e.jsx("p",{children:"On mobile (md and below), the links hide and a hamburger menu appears."})]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => <Navbar {...args}>\r
            <Navbar.Brand>\r
                <span>LOGO</span>\r
            </Navbar.Brand>\r
            <Navbar.Content justify="end">\r
                <Navbar.Link href="#" active>Home</Navbar.Link>\r
                <Navbar.Link href="#">Features</Navbar.Link>\r
                <Navbar.Link href="#">Pricing</Navbar.Link>\r
                <Navbar.Link href="#">About</Navbar.Link>\r
            </Navbar.Content>\r
            <Navbar.Content justify="end">\r
                <Button priority="secondary" size="small">Login</Button>\r
            </Navbar.Content>\r
        </Navbar>,
  args: {
    bordered: true
  }
}`,...b.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                <Navbar.Content justify="end">\r
                    <Navbar.Link href="#">Design</Navbar.Link>\r
                    <Navbar.Link href="#">Components</Navbar.Link>\r
                    <Navbar.Link href="#">Docs</Navbar.Link>\r
                </Navbar.Content>\r
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
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return <Navbar bordered>\r
                <Navbar.Brand>\r
                    <span>Mobile App</span>\r
                </Navbar.Brand>\r
                <Navbar.Content justify="end" className="hidden-mobile">\r
                    {/* These would be hidden on mobile via CSS usually, simulating here */}\r
                    <div style={{
          display: "flex",
          gap: "16px",
          alignItems: "center"
        }}>\r
                        <Navbar.Link href="#">Overview</Navbar.Link>\r
                        <HamburgerMenu isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />\r
                    </div>\r
                </Navbar.Content>\r
            </Navbar>;
  }
}`,...u.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <Navbar {...args} bordered>\r
            <Navbar.Brand>\r
                <span>CENTER</span>\r
            </Navbar.Brand>\r
            <Navbar.Content justify="center">\r
                <Navbar.Link href="#" active>Product</Navbar.Link>\r
                <Navbar.Link href="#">Solutions</Navbar.Link>\r
                <Navbar.Link href="#">Resources</Navbar.Link>\r
            </Navbar.Content>\r
            <Navbar.Content justify="end">\r
                <Button priority="tertiary" size="small">Sign In</Button>\r
                <Button priority="primary" size="small">Sign Up</Button>\r
            </Navbar.Content>\r
        </Navbar>
}`,...v.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const z=["Default","GlassEffect","WithMobileMenu","CenteredLinks","BuiltInResponsive"],J=Object.freeze(Object.defineProperty({__proto__:null,BuiltInResponsive:h,CenteredLinks:v,Default:b,GlassEffect:m,WithMobileMenu:u,__namedExportsOrder:z,default:G},Symbol.toStringTag,{value:"Module"}));export{v as C,m as G,J as N};
