import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-DntnUelk.js";import{F as c}from"./FocusTrap-4Q23fra-.js";import{B as r}from"./Button-Dmg1irG2.js";import{I as a}from"./Input-JDgg-_yR.js";const d={title:"Components/Utilities/FocusTrap",component:c,tags:[],parameters:{layout:"centered"}},o={render:s=>{const[t,n]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center",maxWidth:"90vw",boxSizing:"border-box"},children:[e.jsx(r,{onClick:()=>n(!t),children:t?"Deactivate Focus Trap":"Activate Focus Trap"}),e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px",maxWidth:"100%",boxSizing:"border-box"},children:[e.jsx("p",{children:"Outside the trap"}),e.jsx(r,{children:"Outside Button"})]}),t&&e.jsx(c,{...s,active:t,children:e.jsxs("div",{style:{padding:"20px",border:"2px solid #007bff",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"10px",maxWidth:"100%",boxSizing:"border-box"},children:[e.jsx("h3",{children:"Focus Trapped Area"}),e.jsx("p",{children:"Try tabbing through these elements. Focus will not leave this box."}),e.jsx(a,{placeholder:"First focusable"}),e.jsx(a,{placeholder:"Second focusable"}),e.jsx(r,{onClick:()=>n(!1),children:"Close Trap"})]})})]})}},i={args:{autoFocus:!0},render:s=>{const[t,n]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center",maxWidth:"90vw",boxSizing:"border-box"},children:[e.jsx(r,{onClick:()=>n(!t),children:t?"Deactivate":"Activate with AutoFocus"}),t&&e.jsx(c,{...s,active:t,children:e.jsxs("div",{style:{padding:"20px",border:"2px solid #28a745",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"10px",maxWidth:"100%",boxSizing:"border-box"},children:[e.jsx("h3",{children:"AutoFocus enabled"}),e.jsx(a,{placeholder:"I get focus automatically"}),e.jsx(r,{children:"Another element"}),e.jsx(r,{onClick:()=>n(!1),children:"Close"})]})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
      maxWidth: "90vw",
      boxSizing: "border-box"
    }}>\r
        <Button onClick={() => setActive(!active)}>\r
          {active ? "Deactivate Focus Trap" : "Activate Focus Trap"}\r
        </Button>\r
\r
        <div style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        maxWidth: "100%",
        boxSizing: "border-box"
      }}>\r
          <p>Outside the trap</p>\r
          <Button>Outside Button</Button>\r
        </div>\r
\r
        {active && <FocusTrap {...args} active={active}>\r
            <div style={{
          padding: "20px",
          border: "2px solid #007bff",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "100%",
          boxSizing: "border-box"
        }}>\r
              <h3>Focus Trapped Area</h3>\r
              <p>\r
                Try tabbing through these elements. Focus will not leave this\r
                box.\r
              </p>\r
              <Input placeholder="First focusable" />\r
              <Input placeholder="Second focusable" />\r
              <Button onClick={() => setActive(false)}>Close Trap</Button>\r
            </div>\r
          </FocusTrap>}\r
      </div>;
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  },
  render: args => {
    const [active, setActive] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center",
      maxWidth: "90vw",
      boxSizing: "border-box"
    }}>\r
        <Button onClick={() => setActive(!active)}>\r
          {active ? "Deactivate" : "Activate with AutoFocus"}\r
        </Button>\r
\r
        {active && <FocusTrap {...args} active={active}>\r
            <div style={{
          padding: "20px",
          border: "2px solid #28a745",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          maxWidth: "100%",
          boxSizing: "border-box"
        }}>\r
              <h3>AutoFocus enabled</h3>\r
              <Input placeholder="I get focus automatically" />\r
              <Button>Another element</Button>\r
              <Button onClick={() => setActive(false)}>Close</Button>\r
            </div>\r
          </FocusTrap>}\r
      </div>;
  }
}`,...i.parameters?.docs?.source}}};const p=["Default","AutoFocus"],v=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:i,Default:o,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{i as A,o as D,v as F};
