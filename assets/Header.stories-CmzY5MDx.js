import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-BbDYKtlj.js";import{c as g}from"./index-Bp4MVLTo.js";const m=h.forwardRef(({className:n,children:i,fixed:o,sticky:c,bordered:l,glass:f,background:u="primary",...y},S)=>e.jsx("header",{ref:S,className:g("wim-header",o&&"wim-header--fixed",c&&"wim-header--sticky",l&&"wim-header--bordered",f&&"wim-header--glass",u&&`wim-header--bg-${u}`,n),...y,children:e.jsx("div",{className:"wim-header__container",children:i})}));m.displayName="Header";const p=h.forwardRef(({className:n,children:i,align:o="start",...c},l)=>e.jsx("div",{ref:l,className:g("wim-header__section",`wim-header__section--${o}`,n),...c,children:i}));p.displayName="Header.Section";const a=Object.assign(m,{Section:p});m.__docgenInfo={description:"",methods:[],displayName:"Header",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top"},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top"},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom"},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect"},background:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "transparent"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'}]},description:"Background color",defaultValue:{value:'"primary"',computed:!1}}}};p.__docgenInfo={description:"",methods:[],displayName:"Header.Section",props:{align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1}}}};const x={title:"Component/Layout/Header",component:a,parameters:{layout:"fullscreen"},tags:[]},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(a.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(a.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:"Home"}),e.jsx("a",{href:"/",children:"About"}),e.jsx("a",{href:"/",children:"Contact"})]})}),e.jsx(a.Section,{align:"end",children:e.jsx("button",{children:"Login"})})]})}},t={args:{bordered:!0,children:r.args?.children}},s={parameters:{backgrounds:{default:"dark"}},args:{glass:!0,background:"transparent",children:r.args?.children}},d={render:n=>e.jsxs("div",{style:{height:"200vh"},children:[e.jsx(a,{...n,sticky:!0,bordered:!0,children:e.jsx(a.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold"},children:"Sticky Header"})})}),e.jsx("div",{style:{padding:"20px"},children:"Scroll down to see the sticky effect."})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    children: <>\r
                <Header.Section align="start">\r
                    <div style={{
          fontWeight: "bold",
          fontSize: "1.2rem"
        }}>WIM UI</div>\r
                </Header.Section>\r
                <Header.Section align="center">\r
                    <nav style={{
          display: "flex",
          gap: "20px"
        }}>\r
                        <a href="/">Home</a>\r
                        <a href="/">About</a>\r
                        <a href="/">Contact</a>\r
                    </nav>\r
                </Header.Section>\r
                <Header.Section align="end">\r
                    <button>Login</button>\r
                </Header.Section>\r
            </>
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    children: Default.args?.children
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  args: {
    glass: true,
    background: "transparent",
    children: Default.args?.children
  }
}`,...s.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: (args: HeaderProps) => <div style={{
    height: "200vh"
  }}>\r
            <Header {...args} sticky bordered>\r
                <Header.Section align="start">\r
                    <div style={{
          fontWeight: "bold"
        }}>Sticky Header</div>\r
                </Header.Section>\r
            </Header>\r
            <div style={{
      padding: "20px"
    }}>Scroll down to see the sticky effect.</div>\r
        </div>
}`,...d.parameters?.docs?.source}}};const b=["Default","Bordered","Glass","Sticky"],k=Object.freeze(Object.defineProperty({__proto__:null,Bordered:t,Default:r,Glass:s,Sticky:d,__namedExportsOrder:b,default:x},Symbol.toStringTag,{value:"Module"}));export{t as B,r as D,s as G,k as H};
