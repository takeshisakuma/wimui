import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d}from"./iframe-BF6ISSNM.js";import{P as a}from"./index-BJP38wbw.js";import{B as N}from"./Button-C0fWfjdS.js";import{H as k}from"./HamburgerMenu-DCr3gEnQ.js";const b=d.forwardRef(({className:n,children:s,fixed:t,sticky:i,transparent:o,glass:y,bordered:j,...g},x)=>e.jsx("nav",{ref:x,className:["wim-navbar",t&&"wim-navbar--fixed",i&&"wim-navbar--sticky",o&&"wim-navbar--transparent",y&&"wim-navbar--glass",j&&"wim-navbar--bordered",n].filter(Boolean).join(" "),...g,children:e.jsx("div",{className:"wim-navbar__container",children:s})}));b.displayName="Navbar";b.propTypes={fixed:a.bool,sticky:a.bool,transparent:a.bool,glass:a.bool,bordered:a.bool,className:a.string,children:a.node};const h=d.forwardRef(({className:n,children:s,...t},i)=>e.jsx("div",{ref:i,className:["wim-navbar__brand",n].filter(Boolean).join(" "),...t,children:s}));h.displayName="Navbar.Brand";const v=d.forwardRef(({className:n,children:s,justify:t="end",...i},o)=>e.jsx("div",{ref:o,className:["wim-navbar__content",`wim-navbar__content--${t}`,n].filter(Boolean).join(" "),...i,children:s}));v.displayName="Navbar.Content";v.propTypes={justify:a.oneOf(["start","end","center"]),className:a.string,children:a.node};const u=d.forwardRef(({className:n,children:s,active:t,...i},o)=>e.jsx("div",{ref:o,className:["wim-navbar__item",t&&"wim-navbar__item--active",n].filter(Boolean).join(" "),...i,children:s}));u.displayName="Navbar.Item";u.propTypes={active:a.bool,className:a.string,children:a.node};const f=d.forwardRef(({className:n,children:s,active:t,...i},o)=>e.jsx("a",{ref:o,className:["wim-navbar__link",t&&"wim-navbar__link--active",n].filter(Boolean).join(" "),...i,children:s}));f.displayName="Navbar.Link";f.propTypes={active:a.bool,className:a.string,children:a.node};const r=Object.assign(b,{Brand:h,Content:v,Item:u,Link:f});b.__docgenInfo={description:"",methods:[],displayName:"Navbar",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top",type:{name:"bool"}},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top",type:{name:"bool"}},transparent:{required:!1,tsType:{name:"boolean"},description:"Transparent background",type:{name:"bool"}},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect",type:{name:"bool"}},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom",type:{name:"bool"}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};h.__docgenInfo={description:"",methods:[],displayName:"Navbar.Brand"};v.__docgenInfo={description:"",methods:[],displayName:"Navbar.Content",props:{justify:{required:!1,tsType:{name:"union",raw:'"start" | "end" | "center"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"end"'},{name:"literal",value:'"center"'}]},description:"",defaultValue:{value:'"end"',computed:!1},type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"end"',computed:!1},{value:'"center"',computed:!1}]}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};u.__docgenInfo={description:"",methods:[],displayName:"Navbar.Item",props:{active:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};f.__docgenInfo={description:"",methods:[],displayName:"Navbar.Link",props:{active:{required:!1,tsType:{name:"boolean"},description:"",type:{name:"bool"}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};const L={title:"Navigation/Navbar",component:r,parameters:{layout:"fullscreen"},argTypes:{fixed:{control:"boolean"},sticky:{control:"boolean"},transparent:{control:"boolean"},glass:{control:"boolean"},bordered:{control:"boolean"}}},l={render:n=>e.jsxs(r,{...n,children:[e.jsx(r.Brand,{children:e.jsx("span",{children:"LOGO"})}),e.jsxs(r.Content,{justify:"end",children:[e.jsx(r.Link,{href:"#",active:!0,children:"Home"}),e.jsx(r.Link,{href:"#",children:"Features"}),e.jsx(r.Link,{href:"#",children:"Pricing"}),e.jsx(r.Link,{href:"#",children:"About"})]}),e.jsx(r.Content,{justify:"end",children:e.jsx(N,{priority:"secondary",size:"small",children:"Login"})})]}),args:{bordered:!0}},c={render:n=>e.jsxs("div",{style:{height:"400px",background:"linear-gradient(45deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",position:"relative"},children:[e.jsxs(r,{...n,glass:!0,fixed:!0,style:{position:"absolute"},children:[e.jsx(r.Brand,{children:e.jsx("span",{children:"Glass UI"})}),e.jsxs(r.Content,{justify:"end",children:[e.jsx(r.Link,{href:"#",children:"Design"}),e.jsx(r.Link,{href:"#",children:"Components"}),e.jsx(r.Link,{href:"#",children:"Docs"})]})]}),e.jsxs("div",{style:{paddingTop:"80px",paddingLeft:"24px",color:"white"},children:[e.jsx("h1",{children:"Glassmorphism Header"}),e.jsx("p",{children:"Scroll to see the effect overlay content"})]})]})},p={render:()=>{const[n,s]=d.useState(!1);return e.jsxs(r,{bordered:!0,children:[e.jsx(r.Brand,{children:e.jsx("span",{children:"Mobile App"})}),e.jsx(r.Content,{justify:"end",className:"hidden-mobile",children:e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"center"},children:[e.jsx(r.Link,{href:"#",children:"Overview"}),e.jsx(k,{isOpen:n,onClick:()=>s(!n)})]})})]})}},m={render:n=>e.jsxs(r,{...n,bordered:!0,children:[e.jsx(r.Brand,{children:e.jsx("span",{children:"CENTER"})}),e.jsxs(r.Content,{justify:"center",children:[e.jsx(r.Link,{href:"#",active:!0,children:"Product"}),e.jsx(r.Link,{href:"#",children:"Solutions"}),e.jsx(r.Link,{href:"#",children:"Resources"})]}),e.jsxs(r.Content,{justify:"end",children:[e.jsx(N,{priority:"tertiary",size:"small",children:"Sign In"}),e.jsx(N,{priority:"primary",size:"small",children:"Sign Up"})]})]})};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const C=["Default","GlassEffect","WithMobileMenu","CenteredLinks"],F=Object.freeze(Object.defineProperty({__proto__:null,CenteredLinks:m,Default:l,GlassEffect:c,WithMobileMenu:p,__namedExportsOrder:C,default:L},Symbol.toStringTag,{value:"Module"}));export{m as C,c as G,F as N};
