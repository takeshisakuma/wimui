import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as o}from"./iframe-BUrtav60.js";import{c as b}from"./index-Drm8gX_j.js";import{B as v}from"./Button-DixHeOuh.js";import{H as k}from"./HamburgerMenu-Cie2MPy_.js";const m=o.forwardRef(({className:n,children:a,fixed:s,sticky:t,transparent:i,glass:x,bordered:y,...j},g)=>e.jsx("nav",{ref:g,className:b("wim-navbar",s&&"wim-navbar--fixed",t&&"wim-navbar--sticky",i&&"wim-navbar--transparent",x&&"wim-navbar--glass",y&&"wim-navbar--bordered",n),...j,children:e.jsx("div",{className:"wim-navbar__container",children:a})}));m.displayName="Navbar";const u=o.forwardRef(({className:n,children:a,...s},t)=>e.jsx("div",{ref:t,className:b("wim-navbar__brand",n),...s,children:a}));u.displayName="Navbar.Brand";const f=o.forwardRef(({className:n,children:a,justify:s="end",...t},i)=>e.jsx("div",{ref:i,className:b("wim-navbar__content",`wim-navbar__content--${s}`,n),...t,children:a}));f.displayName="Navbar.Content";const N=o.forwardRef(({className:n,children:a,active:s,...t},i)=>e.jsx("div",{ref:i,className:b("wim-navbar__item",s&&"wim-navbar__item--active",n),...t,children:a}));N.displayName="Navbar.Item";const h=o.forwardRef(({className:n,children:a,active:s,...t},i)=>e.jsx("a",{ref:i,className:b("wim-navbar__link",s&&"wim-navbar__link--active",n),...t,children:a}));h.displayName="Navbar.Link";const r=Object.assign(m,{Brand:u,Content:f,Item:N,Link:h});m.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top"},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top"},transparent:{required:!1,tsType:{name:"boolean"},description:"Transparent background"},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect"},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom"}}};u.__docgenInfo={description:"",methods:[],displayName:"Navbar.Brand"};f.__docgenInfo={description:"",methods:[],displayName:"Navbar.Content",props:{justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"end"',computed:!1}}}};N.__docgenInfo={description:"",methods:[],displayName:"Navbar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};h.__docgenInfo={description:"",methods:[],displayName:"Navbar.Link",props:{active:{required:!1,tsType:{name:"boolean"},description:""}}};const L={title:"Component/Navigation/Navbar",component:r,parameters:{layout:"fullscreen"},argTypes:{fixed:{control:"boolean"},sticky:{control:"boolean"},transparent:{control:"boolean"},glass:{control:"boolean"},bordered:{control:"boolean"}}},d={render:n=>e.jsxs(r,{...n,children:[e.jsx(r.Brand,{children:e.jsx("span",{children:"LOGO"})}),e.jsxs(r.Content,{justify:"end",children:[e.jsx(r.Link,{href:"#",active:!0,children:"Home"}),e.jsx(r.Link,{href:"#",children:"Features"}),e.jsx(r.Link,{href:"#",children:"Pricing"}),e.jsx(r.Link,{href:"#",children:"About"})]}),e.jsx(r.Content,{justify:"end",children:e.jsx(v,{priority:"secondary",size:"small",children:"Login"})})]}),args:{bordered:!0}},l={render:n=>e.jsxs("div",{style:{height:"400px",background:"linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",position:"relative"},children:[e.jsxs(r,{...n,glass:!0,fixed:!0,style:{position:"absolute"},children:[e.jsx(r.Brand,{children:e.jsx("span",{children:"Glass UI"})}),e.jsxs(r.Content,{justify:"end",children:[e.jsx(r.Link,{href:"#",children:"Design"}),e.jsx(r.Link,{href:"#",children:"Components"}),e.jsx(r.Link,{href:"#",children:"Docs"})]})]}),e.jsxs("div",{style:{paddingTop:"80px",paddingLeft:"24px",color:"white"},children:[e.jsx("h1",{children:"Glassmorphism Header"}),e.jsx("p",{children:"Scroll to see the effect overlay content"})]})]})},c={render:()=>{const[n,a]=o.useState(!1);return e.jsxs(r,{bordered:!0,children:[e.jsx(r.Brand,{children:e.jsx("span",{children:"Mobile App"})}),e.jsx(r.Content,{justify:"end",className:"hidden-mobile",children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r.Link,{href:"#",children:"Overview"}),e.jsx(k,{isOpen:n,onClick:()=>a(!n)})]})})]})}},p={render:n=>e.jsxs(r,{...n,bordered:!0,children:[e.jsx(r.Brand,{children:e.jsx("span",{children:"CENTER"})}),e.jsxs(r.Content,{justify:"center",children:[e.jsx(r.Link,{href:"#",active:!0,children:"Product"}),e.jsx(r.Link,{href:"#",children:"Solutions"}),e.jsx(r.Link,{href:"#",children:"Resources"})]}),e.jsxs(r.Content,{justify:"end",children:[e.jsx(v,{priority:"tertiary",size:"small",children:"Sign In"}),e.jsx(v,{priority:"primary",size:"small",children:"Sign Up"})]})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};const C=["Default","GlassEffect","WithMobileMenu","CenteredLinks"],E=Object.freeze(Object.defineProperty({__proto__:null,CenteredLinks:p,Default:d,GlassEffect:l,WithMobileMenu:c,__namedExportsOrder:C,default:L},Symbol.toStringTag,{value:"Module"}));export{p as C,l as G,E as N};
