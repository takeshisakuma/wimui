import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as d}from"./iframe-f4BvNpCj.js";import{c as l}from"./index-uXtM2pJ9.js";const p=d.forwardRef(({className:t,children:a,bordered:r,background:n="primary",...c},h)=>e.jsx("footer",{ref:h,className:l("wim-footer",r&&"wim-footer--bordered",n&&`wim-footer--bg-${n}`,t),...c,children:e.jsx("div",{className:"wim-footer__container",children:a})}));p.displayName="Footer";const m=d.forwardRef(({className:t,children:a,title:r,...n},c)=>e.jsxs("div",{ref:c,className:l("wim-footer__section",t),...n,children:[r&&e.jsx("h4",{className:"wim-footer__section-title",children:r}),e.jsx("div",{className:"wim-footer__section-content",children:a})]}));m.displayName="Footer.Section";const u=d.forwardRef(({className:t,children:a,...r},n)=>e.jsx("div",{ref:n,className:l("wim-footer__bottom",t),...r,children:a}));u.displayName="Footer.Bottom";const o=Object.assign(p,{Section:m,Bottom:u});p.__docgenInfo={description:"",methods:[],displayName:"Footer",props:{bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the top"},background:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "dark"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"dark"'}]},description:"Background color",defaultValue:{value:'"primary"',computed:!1}}}};m.__docgenInfo={description:"",methods:[],displayName:"Footer.Section",props:{title:{required:!1,tsType:{name:"string"},description:""}}};u.__docgenInfo={description:"",methods:[],displayName:"Footer.Bottom"};const x={title:"Component/Layout/Footer",component:o,parameters:{layout:"fullscreen"},tags:[]},s={args:{bordered:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:"40px"},children:[e.jsxs(o.Section,{title:"Product",children:[e.jsx("span",{children:"Features"}),e.jsx("span",{children:"Pricing"}),e.jsx("span",{children:"API"})]}),e.jsxs(o.Section,{title:"Company",children:[e.jsx("span",{children:"About"}),e.jsx("span",{children:"Careers"}),e.jsx("span",{children:"Contact"})]}),e.jsxs(o.Section,{title:"Resources",children:[e.jsx("span",{children:"Documentation"}),e.jsx("span",{children:"Blog"}),e.jsx("span",{children:"Support"})]}),e.jsxs(o.Section,{title:"Legal",children:[e.jsx("span",{children:"Privacy"}),e.jsx("span",{children:"Terms"}),e.jsx("span",{children:"Cookie Policy"})]})]}),e.jsxs(o.Bottom,{children:[e.jsx("div",{children:"© 2026 WIM UI. All rights reserved."}),e.jsxs("div",{style:{display:"flex",gap:"20px"},children:[e.jsx("span",{children:"Twitter"}),e.jsx("span",{children:"GitHub"})]})]})]})}},i={args:{background:"dark",children:s.args?.children}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    background: "dark",
    children: Default.args?.children
  }
}`,...i.parameters?.docs?.source}}};const f=["Default","Dark"],F=Object.freeze(Object.defineProperty({__proto__:null,Dark:i,Default:s,__namedExportsOrder:f,default:x},Symbol.toStringTag,{value:"Module"}));export{s as D,F,i as a};
