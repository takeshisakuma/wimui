import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DgQoBtfe.js";import{F as d}from"./FocusTrap-C6l-QtdJ.js";import{B as a}from"./Button-C9aIzvEK.js";import{I as l}from"./Input-D-5EQmKT.js";import{S as i}from"./Stack-rte_sGTc.js";import{C as t}from"./Card-CoE-Yh1q.js";import{C as u}from"./Container-DOqATc7Q.js";const h={title:"Components/Utilities/FocusTrap",component:d,tags:[],parameters:{layout:"centered"}},s={render:c=>{const[e,n]=p.useState(!1);return r.jsx(u,{size:"sm",py:"xl",children:r.jsxs(i,{gap:"xl",align:"center",children:[r.jsx(a,{onClick:()=>n(!e),priority:"primary",children:e?"Deactivate Focus Trap":"Activate Focus Trap"}),r.jsxs(t,{variant:"outline",style:{width:"100%"},children:[r.jsx(t.Header,{children:r.jsx("strong",{children:"Outside the trap"})}),r.jsx(t.Body,{children:r.jsxs(i,{gap:"md",children:[r.jsx("p",{children:"This area is not trapped. You can focus elements here freely when the trap is inactive."}),r.jsx(a,{priority:"secondary",children:"Outside Button"})]})})]}),e&&r.jsx(d,{...c,active:e,children:r.jsxs(t,{variant:"elevated",style:{width:"100%",border:"2px solid var(--wim-primary, #0070f3)"},children:[r.jsx(t.Header,{children:r.jsx("strong",{style:{color:"var(--wim-primary, #0070f3)"},children:"Focus Trapped Area"})}),r.jsx(t.Body,{children:r.jsxs(i,{gap:"md",children:[r.jsx("p",{children:"Try tabbing through these elements. Focus will not leave this box."}),r.jsx(l,{placeholder:"First focusable",fullWidth:!0}),r.jsx(l,{placeholder:"Second focusable",fullWidth:!0}),r.jsx(a,{onClick:()=>n(!1),priority:"primary",children:"Close Trap"})]})})]})})]})})}},o={args:{autoFocus:!0},render:c=>{const[e,n]=p.useState(!1);return r.jsx(u,{size:"sm",py:"xl",children:r.jsxs(i,{gap:"xl",align:"center",children:[r.jsx(a,{onClick:()=>n(!e),priority:"primary",children:e?"Deactivate":"Activate with AutoFocus"}),e&&r.jsx(d,{...c,active:e,children:r.jsxs(t,{variant:"elevated",style:{width:"100%",border:"2px solid var(--wim-success, #28a745)"},children:[r.jsx(t.Header,{children:r.jsx("strong",{style:{color:"var(--wim-success, #28a745)"},children:"AutoFocus enabled"})}),r.jsx(t.Body,{children:r.jsxs(i,{gap:"md",children:[r.jsx(l,{placeholder:"I get focus automatically",fullWidth:!0}),r.jsx(a,{priority:"secondary",children:"Another element"}),r.jsx(a,{onClick:()=>n(!1),priority:"primary",children:"Close"})]})})]})})]})})}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState(false);
    return <Container size="sm" py="xl">\r
        <Stack gap="xl" align="center">\r
          <Button onClick={() => setActive(!active)} priority="primary">\r
            {active ? "Deactivate Focus Trap" : "Activate Focus Trap"}\r
          </Button>\r
\r
          <Card variant="outline" style={{
          width: "100%"
        }}>\r
            <Card.Header>\r
              <strong>Outside the trap</strong>\r
            </Card.Header>\r
            <Card.Body>\r
              <Stack gap="md">\r
                <p>This area is not trapped. You can focus elements here freely when the trap is inactive.</p>\r
                <Button priority="secondary">Outside Button</Button>\r
              </Stack>\r
            </Card.Body>\r
          </Card>\r
\r
          {active && <FocusTrap {...args} active={active}>\r
              <Card variant="elevated" style={{
            width: "100%",
            border: "2px solid var(--wim-primary, #0070f3)"
          }}>\r
                <Card.Header>\r
                  <strong style={{
                color: "var(--wim-primary, #0070f3)"
              }}>\r
                    Focus Trapped Area\r
                  </strong>\r
                </Card.Header>\r
                <Card.Body>\r
                  <Stack gap="md">\r
                    <p>\r
                      Try tabbing through these elements. Focus will not leave this\r
                      box.\r
                    </p>\r
                    <Input placeholder="First focusable" fullWidth />\r
                    <Input placeholder="Second focusable" fullWidth />\r
                    <Button onClick={() => setActive(false)} priority="primary">\r
                      Close Trap\r
                    </Button>\r
                  </Stack>\r
                </Card.Body>\r
              </Card>\r
            </FocusTrap>}\r
        </Stack>\r
      </Container>;
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  },
  render: args => {
    const [active, setActive] = useState(false);
    return <Container size="sm" py="xl">\r
        <Stack gap="xl" align="center">\r
          <Button onClick={() => setActive(!active)} priority="primary">\r
            {active ? "Deactivate" : "Activate with AutoFocus"}\r
          </Button>\r
\r
          {active && <FocusTrap {...args} active={active}>\r
              <Card variant="elevated" style={{
            width: "100%",
            border: "2px solid var(--wim-success, #28a745)"
          }}>\r
                <Card.Header>\r
                  <strong style={{
                color: "var(--wim-success, #28a745)"
              }}>\r
                    AutoFocus enabled\r
                  </strong>\r
                </Card.Header>\r
                <Card.Body>\r
                  <Stack gap="md">\r
                    <Input placeholder="I get focus automatically" fullWidth />\r
                    <Button priority="secondary">Another element</Button>\r
                    <Button onClick={() => setActive(false)} priority="primary">\r
                      Close\r
                    </Button>\r
                  </Stack>\r
                </Card.Body>\r
              </Card>\r
            </FocusTrap>}\r
        </Stack>\r
      </Container>;
  }
}`,...o.parameters?.docs?.source}}};const m=["Default","AutoFocus"],B=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:o,Default:s,__namedExportsOrder:m,default:h},Symbol.toStringTag,{value:"Module"}));export{o as A,s as D,B as F};
