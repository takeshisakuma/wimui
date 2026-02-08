import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-n4D-bytZ.js";import{F as c}from"./FocusTrap-Dh6sWHAq.js";import{B as r}from"./Button-Dez0rgi_.js";import{I as i}from"./Input-DZNRMwTv.js";const d={title:"Component/Utilities/FocusTrap",component:c,tags:[],parameters:{layout:"centered"}},s={render:a=>{const[t,n]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsx(r,{onClick:()=>n(!t),children:t?"Deactivate Focus Trap":"Activate Focus Trap"}),e.jsxs("div",{style:{padding:"20px",border:"1px solid #ccc",borderRadius:"8px"},children:[e.jsx("p",{children:"Outside the trap"}),e.jsx(r,{children:"Outside Button"})]}),t&&e.jsx(c,{...a,active:t,children:e.jsxs("div",{style:{padding:"20px",border:"2px solid #007bff",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h3",{children:"Focus Trapped Area"}),e.jsx("p",{children:"Try tabbing through these elements. Focus will not leave this box."}),e.jsx(i,{placeholder:"First focusable"}),e.jsx(i,{placeholder:"Second focusable"}),e.jsx(r,{onClick:()=>n(!1),children:"Close Trap"})]})})]})}},o={args:{autoFocus:!0},render:a=>{const[t,n]=l.useState(!1);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"20px",alignItems:"center"},children:[e.jsx(r,{onClick:()=>n(!t),children:t?"Deactivate":"Activate with AutoFocus"}),t&&e.jsx(c,{...a,active:t,children:e.jsxs("div",{style:{padding:"20px",border:"2px solid #28a745",borderRadius:"8px",display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx("h3",{children:"AutoFocus enabled"}),e.jsx(i,{placeholder:"I get focus automatically"}),e.jsx(r,{children:"Another element"}),e.jsx(r,{onClick:()=>n(!1),children:"Close"})]})})]})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center"
    }}>\r
                <Button onClick={() => setActive(!active)}>\r
                    {active ? "Deactivate Focus Trap" : "Activate Focus Trap"}\r
                </Button>\r
\r
                <div style={{
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px"
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
          gap: "10px"
        }}>\r
                            <h3>Focus Trapped Area</h3>\r
                            <p>Try tabbing through these elements. Focus will not leave this box.</p>\r
                            <Input placeholder="First focusable" />\r
                            <Input placeholder="Second focusable" />\r
                            <Button onClick={() => setActive(false)}>Close Trap</Button>\r
                        </div>\r
                    </FocusTrap>}\r
            </div>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  },
  render: args => {
    const [active, setActive] = useState(false);
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "20px",
      alignItems: "center"
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
          gap: "10px"
        }}>\r
                            <h3>AutoFocus enabled</h3>\r
                            <Input placeholder="I get focus automatically" />\r
                            <Button>Another element</Button>\r
                            <Button onClick={() => setActive(false)}>Close</Button>\r
                        </div>\r
                    </FocusTrap>}\r
            </div>;
  }
}`,...o.parameters?.docs?.source}}};const p=["Default","AutoFocus"],m=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:o,Default:s,__namedExportsOrder:p,default:d},Symbol.toStringTag,{value:"Module"}));export{o as A,s as D,m as F};
