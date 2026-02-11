import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as u}from"./iframe-BCl9oQRY.js";import{P as r}from"./index-3RpI5cnp.js";const l=u.forwardRef(({className:t,children:i,bordered:n,background:o="primary",...m},f)=>e.jsx("footer",{ref:f,className:["wim-footer",n&&"wim-footer--bordered",o&&`wim-footer--bg-${o}`,t].filter(Boolean).join(" "),...m,children:e.jsx("div",{className:"wim-footer__container",children:i})}));l.displayName="Footer";l.propTypes={bordered:r.bool,background:r.oneOf(["primary","secondary","dark"]),className:r.string,children:r.node};const c=u.forwardRef(({className:t,children:i,title:n,...o},m)=>e.jsxs("div",{ref:m,className:["wim-footer__section",t].filter(Boolean).join(" "),...o,children:[n&&e.jsx("h4",{className:"wim-footer__section-title",children:n}),e.jsx("div",{className:"wim-footer__section-content",children:i})]}));c.displayName="Footer.Section";c.propTypes={title:r.string,className:r.string,children:r.node};const p=u.forwardRef(({className:t,children:i,...n},o)=>e.jsx("div",{ref:o,className:["wim-footer__bottom",t].filter(Boolean).join(" "),...n,children:i}));p.displayName="Footer.Bottom";p.propTypes={className:r.string,children:r.node};const s=Object.assign(l,{Section:c,Bottom:p});l.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the top",type:{name:"bool"}},background:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "dark"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"dark"'}]},description:"Background color",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"dark"',computed:!1}]}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};c.__docgenInfo={description:"",methods:[],displayName:"Footer.Section",props:{title:{required:!1,tsType:{name:"string"},description:"",type:{name:"string"}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"Footer.Bottom",props:{className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};const y={title:"Layout/Footer",component:s,parameters:{layout:"fullscreen"},tags:[]},a={args:{bordered:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"40px"},children:[e.jsxs(s.Section,{title:"Product",children:[e.jsx("span",{children:"Features"}),e.jsx("span",{children:"Pricing"}),e.jsx("span",{children:"API"})]}),e.jsxs(s.Section,{title:"Company",children:[e.jsx("span",{children:"About"}),e.jsx("span",{children:"Careers"}),e.jsx("span",{children:"Contact"})]}),e.jsxs(s.Section,{title:"Resources",children:[e.jsx("span",{children:"Documentation"}),e.jsx("span",{children:"Blog"}),e.jsx("span",{children:"Support"})]}),e.jsxs(s.Section,{title:"Legal",children:[e.jsx("span",{children:"Privacy"}),e.jsx("span",{children:"Terms"}),e.jsx("span",{children:"Cookie Policy"})]})]}),e.jsxs(s.Bottom,{children:[e.jsx("div",{children:"© 2026 WIM UI. All rights reserved."}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx("span",{children:"Twitter"}),e.jsx("span",{children:"GitHub"})]})]})]})}},d={args:{background:"dark",children:a.args?.children}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    children: <>\r
                <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "40px"
      }}>\r
                    <Footer.Section title="Product">\r
                        <span>Features</span>\r
                        <span>Pricing</span>\r
                        <span>API</span>\r
                    </Footer.Section>\r
                    <Footer.Section title="Company">\r
                        <span>About</span>\r
                        <span>Careers</span>\r
                        <span>Contact</span>\r
                    </Footer.Section>\r
                    <Footer.Section title="Resources">\r
                        <span>Documentation</span>\r
                        <span>Blog</span>\r
                        <span>Support</span>\r
                    </Footer.Section>\r
                    <Footer.Section title="Legal">\r
                        <span>Privacy</span>\r
                        <span>Terms</span>\r
                        <span>Cookie Policy</span>\r
                    </Footer.Section>\r
                </div>\r
                <Footer.Bottom>\r
                    <div>© 2026 WIM UI. All rights reserved.</div>\r
                    <div style={{
          display: "flex",
          gap: "20px"
        }}>\r
                        <span>Twitter</span>\r
                        <span>GitHub</span>\r
                    </div>\r
                </Footer.Bottom>\r
            </>
  }
}`,...a.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    background: "dark",
    children: Default.args?.children
  }
}`,...d.parameters?.docs?.source}}};const g=["Default","Dark"],v=Object.freeze(Object.defineProperty({__proto__:null,Dark:d,Default:a,__namedExportsOrder:g,default:y},Symbol.toStringTag,{value:"Module"}));export{a as D,v as F,d as a};
