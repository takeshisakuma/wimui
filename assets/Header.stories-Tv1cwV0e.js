import{j as e}from"./jsx-runtime-u17CrQMm.js";import{R as h}from"./iframe-BdHo9cuV.js";import{P as r}from"./index-BxUS1-Uu.js";const i=h.forwardRef(({className:t,children:c,fixed:p,sticky:m,bordered:u,glass:g,background:f="primary",...y},b)=>e.jsx("header",{ref:b,className:["wim-header",p&&"wim-header--fixed",m&&"wim-header--sticky",u&&"wim-header--bordered",g&&"wim-header--glass",f&&`wim-header--bg-${f}`,t].filter(Boolean).join(" "),...y,children:e.jsx("div",{className:"wim-header__container",children:c})}));i.displayName="Header";i.propTypes={fixed:r.bool,sticky:r.bool,bordered:r.bool,glass:r.bool,background:r.oneOf(["primary","secondary","transparent"]),className:r.string,children:r.node};const l=h.forwardRef(({className:t,children:c,align:p="start",...m},u)=>e.jsx("div",{ref:u,className:["wim-header__section",`wim-header__section--${p}`,t].filter(Boolean).join(" "),...m,children:c}));l.displayName="Header.Section";l.propTypes={align:r.oneOf(["start","center","end"]),className:r.string,children:r.node};const n=Object.assign(i,{Section:l});i.__docgenInfo={description:"",methods:[],displayName:"Header",props:{fixed:{required:!1,tsType:{name:"boolean"},description:"Fixed position at the top",type:{name:"bool"}},sticky:{required:!1,tsType:{name:"boolean"},description:"Sticky position at the top",type:{name:"bool"}},bordered:{required:!1,tsType:{name:"boolean"},description:"Border at the bottom",type:{name:"bool"}},glass:{required:!1,tsType:{name:"boolean"},description:"Glassmorphism effect",type:{name:"bool"}},background:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "transparent"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"transparent"'}]},description:"Background color",defaultValue:{value:'"primary"',computed:!1},type:{name:"enum",value:[{value:'"primary"',computed:!1},{value:'"secondary"',computed:!1},{value:'"transparent"',computed:!1}]}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};l.__docgenInfo={description:"",methods:[],displayName:"Header.Section",props:{align:{required:!1,tsType:{name:"union",raw:'"start" | "center" | "end"',elements:[{name:"literal",value:'"start"'},{name:"literal",value:'"center"'},{name:"literal",value:'"end"'}]},description:"",defaultValue:{value:'"start"',computed:!1},type:{name:"enum",value:[{value:'"start"',computed:!1},{value:'"center"',computed:!1},{value:'"end"',computed:!1}]}},className:{description:"",type:{name:"string"},required:!1},children:{description:"",type:{name:"node"},required:!1}}};const v={title:"Layout/Header",component:n,parameters:{layout:"fullscreen"},tags:[]},a={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(n.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"#",children:"Home"}),e.jsx("a",{href:"#",children:"About"}),e.jsx("a",{href:"#",children:"Contact"})]})}),e.jsx(n.Section,{align:"end",children:e.jsx("button",{children:"Login"})})]})}},s={args:{bordered:!0,children:a.args?.children}},o={parameters:{backgrounds:{default:"dark"}},args:{glass:!0,background:"transparent",children:a.args?.children}},d={render:t=>e.jsxs("div",{style:{height:"200vh"},children:[e.jsx(n,{...t,sticky:!0,bordered:!0,children:e.jsx(n.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold"},children:"Sticky Header"})})}),e.jsx("div",{style:{padding:"20px"},children:"Scroll down to see the sticky effect."})]})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
                        <a href="#">Home</a>\r
                        <a href="#">About</a>\r
                        <a href="#">Contact</a>\r
                    </nav>\r
                </Header.Section>\r
                <Header.Section align="end">\r
                    <button>Login</button>\r
                </Header.Section>\r
            </>
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: true,
    children: Default.args?.children
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const x=["Default","Bordered","Glass","Sticky"],k=Object.freeze(Object.defineProperty({__proto__:null,Bordered:s,Default:a,Glass:o,Sticky:d,__namedExportsOrder:x,default:v},Symbol.toStringTag,{value:"Module"}));export{s as B,a as D,o as G,k as H};
