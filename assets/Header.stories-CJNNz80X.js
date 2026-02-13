import{j as e}from"./jsx-runtime-u17CrQMm.js";import{H as n}from"./Header-J57aiAm6.js";const c={title:"Component/Layout/Header",component:n,parameters:{layout:"fullscreen"},tags:[],argTypes:{fixed:{control:"boolean",description:"ヘッダーを上部に固定します"},sticky:{control:"boolean",description:"スクロール時にヘッダーを上部に粘着させます"},bordered:{control:"boolean",description:"下部に境界線を表示します"},glass:{control:"boolean",description:"背景にぼかし効果（グラスモーフィズム）を適用します"},background:{control:"select",options:["primary","secondary","transparent"],description:"背景色を指定します"},children:{table:{disable:!0}}}},r={args:{children:e.jsxs(e.Fragment,{children:[e.jsx(n.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold",fontSize:"1.2rem"},children:"WIM UI"})}),e.jsx(n.Section,{align:"center",children:e.jsxs("nav",{style:{display:"flex",gap:"20px"},children:[e.jsx("a",{href:"/",children:"Home"}),e.jsx("a",{href:"/",children:"About"}),e.jsx("a",{href:"/",children:"Contact"})]})}),e.jsx(n.Section,{align:"end",children:e.jsx("button",{children:"Login"})})]})}},t={args:{bordered:!0,children:r.args?.children}},a={parameters:{backgrounds:{default:"dark"}},args:{glass:!0,background:"transparent",children:r.args?.children}},s={render:d=>e.jsxs("div",{style:{height:"200vh",background:"linear-gradient(to bottom, #f0f0f0, #e0e0e0)"},children:[e.jsxs(n,{...d,sticky:!0,bordered:!0,children:[e.jsx(n.Section,{align:"start",children:e.jsx("div",{style:{fontWeight:"bold"},children:"Sticky Header"})}),e.jsx(n.Section,{align:"end",children:e.jsx("button",{children:"Action"})})]}),e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("p",{children:"Scroll down to see the sticky effect."}),Array.from({length:10}).map((p,i)=>e.jsxs("p",{style:{margin:"20px 0"},children:["Content block ",i+1]},i))]})]})},o={args:{...r.args,bordered:!0,glass:!1,background:"primary"},render:d=>e.jsxs("div",{style:{height:"300px",position:"relative",border:"1px dashed #ccc"},children:[e.jsx(n,{...d,style:{position:"absolute",top:0,left:0,width:"100%"}}),e.jsxs("div",{style:{padding:"60px 20px 20px"},children:[e.jsx("p",{children:"Header content is displayed above."}),e.jsx("p",{children:"Change controls to see effects."})]})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: (args: HeaderProps) => <div style={{
    height: "200vh",
    background: "linear-gradient(to bottom, #f0f0f0, #e0e0e0)"
  }}>\r
            <Header {...args} sticky bordered>\r
                <Header.Section align="start">\r
                    <div style={{
          fontWeight: "bold"
        }}>Sticky Header</div>\r
                </Header.Section>\r
                <Header.Section align="end">\r
                    <button>Action</button>\r
                </Header.Section>\r
            </Header>\r
            <div style={{
      padding: "20px"
    }}>\r
                <p>Scroll down to see the sticky effect.</p>\r
                {Array.from({
        length: 10
      }).map((_, i) => <p key={i} style={{
        margin: "20px 0"
      }}>Content block {i + 1}</p>)}\r
            </div>\r
        </div>
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    bordered: true,
    glass: false,
    background: "primary"
  },
  render: args => <div style={{
    height: "300px",
    position: "relative",
    border: "1px dashed #ccc"
  }}>\r
            <Header {...args} style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%"
    }} />\r
            <div style={{
      padding: "60px 20px 20px"
    }}>\r
                <p>Header content is displayed above.</p>\r
                <p>Change controls to see effects.</p>\r
            </div>\r
        </div>
}`,...o.parameters?.docs?.source}}};const l=["Default","Bordered","Glass","Sticky","Playground"],u=Object.freeze(Object.defineProperty({__proto__:null,Bordered:t,Default:r,Glass:a,Playground:o,Sticky:s,__namedExportsOrder:l,default:c},Symbol.toStringTag,{value:"Module"}));export{t as B,r as D,a as G,u as H,o as P,s as S};
