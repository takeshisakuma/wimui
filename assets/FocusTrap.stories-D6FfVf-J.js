import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as p,A as f}from"./iframe-DKmwcFSw.js";import{F as u}from"./FocusTrap-CWoYV1Vl.js";import{B as s}from"./Button-BKQogAGJ.js";import{I as d}from"./Input-BiV4pZma.js";import{S as i}from"./Stack-DDZVaduh.js";import{C as a}from"./Card-D8BTANhz.js";import{C as _}from"./Container-BamdIMiU.js";import{u as y}from"./useTranslation-cHJIwR7k.js";const v={title:"Components/Internal/FocusTrap",component:u,tags:[],parameters:{layout:"centered"}},o={render:l=>{const[e,n]=p.useState(!1),{t:r}=y(f);return t.jsx(_,{size:"sm",py:"xl",children:t.jsxs(i,{gap:"xl",align:"center",children:[t.jsx(s,{onClick:()=>n(!e),variant:"filled",children:r(e?"story.focustrap_deactivate":"story.focustrap_activate")}),t.jsxs(a,{variant:"outline",style:{width:"100%"},children:[t.jsx(a.Header,{children:t.jsx("strong",{children:r("story.focustrap_outside_title")})}),t.jsx(a.Body,{children:t.jsxs(i,{gap:"md",children:[t.jsx("p",{children:r("story.focustrap_outside_desc")}),t.jsx(s,{variant:"outlined",children:r("story.focustrap_outside_btn")})]})})]}),e&&t.jsx(u,{...l,active:e,children:t.jsxs(a,{variant:"elevated",style:{width:"100%",border:"2px solid",borderColor:"var(--wim-primary, #0070f3)"},children:[t.jsx(a.Header,{children:t.jsx("strong",{style:{color:"var(--wim-primary, #0070f3)"},children:r("story.focustrap_trapped_title")})}),t.jsx(a.Body,{children:t.jsxs(i,{gap:"md",children:[t.jsx("p",{children:r("story.focustrap_trapped_desc")}),t.jsx(d,{placeholder:r("story.focustrap_input_first"),fullWidth:!0}),t.jsx(d,{placeholder:r("story.focustrap_input_second"),fullWidth:!0}),t.jsx(s,{onClick:()=>n(!1),variant:"filled",children:r("story.focustrap_btn_close")})]})})]})})]})})}},c={args:{autoFocus:!0},render:l=>{const[e,n]=p.useState(!1),{t:r}=y(f);return t.jsx(_,{size:"sm",py:"xl",children:t.jsxs(i,{gap:"xl",align:"center",children:[t.jsx(s,{onClick:()=>n(!e),variant:"filled",children:r(e?"story.focustrap_deactivate_short":"story.focustrap_activate_autofocus")}),e&&t.jsx(u,{...l,active:e,children:t.jsxs(a,{variant:"elevated",style:{width:"100%",border:"2px solid",borderColor:"var(--wim-success, #28a745)"},children:[t.jsx(a.Header,{children:t.jsx("strong",{style:{color:"var(--wim-success, #28a745)"},children:r("story.focustrap_autofocus_title")})}),t.jsx(a.Body,{children:t.jsxs(i,{gap:"md",children:[t.jsx(d,{placeholder:r("story.focustrap_input_autofocus"),fullWidth:!0}),t.jsx(s,{variant:"outlined",children:r("story.focustrap_btn_another")}),t.jsx(s,{onClick:()=>n(!1),variant:"filled",children:r("story.focustrap_btn_close_short")})]})})]})})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} variant="filled">
            {active ? t("story.focustrap_deactivate") : t("story.focustrap_activate")}
          </Button>

          <Card variant="outline" style={{
          width: "100%"
        }}>
            <Card.Header>
              <strong>{t("story.focustrap_outside_title")}</strong>
            </Card.Header>
            <Card.Body>
              <Stack gap="md">
                <p>{t("story.focustrap_outside_desc")}</p>
                <Button variant="outlined">{t("story.focustrap_outside_btn")}</Button>
              </Stack>
            </Card.Body>
          </Card>

          {active && <FocusTrap {...args} active={active}>
              <Card variant="elevated" style={{
            width: "100%",
            border: "2px solid",
            borderColor: "var(--wim-primary, #0070f3)"
          }}>
                <Card.Header>
                  <strong style={{
                color: "var(--wim-primary, #0070f3)"
              }}>
                    {t("story.focustrap_trapped_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <p>
                      {t("story.focustrap_trapped_desc")}
                    </p>
                    <Input placeholder={t("story.focustrap_input_first")} fullWidth />
                    <Input placeholder={t("story.focustrap_input_second")} fullWidth />
                    <Button onClick={() => setActive(false)} variant="filled">
                      {t("story.focustrap_btn_close")}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </FocusTrap>}
        </Stack>
      </Container>;
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    autoFocus: true
  },
  render: args => {
    const [active, setActive] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} variant="filled">
            {active ? t("story.focustrap_deactivate_short") : t("story.focustrap_activate_autofocus")}
          </Button>

          {active && <FocusTrap {...args} active={active}>
              <Card variant="elevated" style={{
            width: "100%",
            border: "2px solid",
            borderColor: "var(--wim-success, #28a745)"
          }}>
                <Card.Header>
                  <strong style={{
                color: "var(--wim-success, #28a745)"
              }}>
                    {t("story.focustrap_autofocus_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <Input placeholder={t("story.focustrap_input_autofocus")} fullWidth />
                    <Button variant="outlined">{t("story.focustrap_btn_another")}</Button>
                    <Button onClick={() => setActive(false)} variant="filled">
                      {t("story.focustrap_btn_close_short")}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </FocusTrap>}
        </Stack>
      </Container>;
  }
}`,...c.parameters?.docs?.source}}};const m=["Default","AutoFocus"],k=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:c,Default:o,__namedExportsOrder:m,default:v},Symbol.toStringTag,{value:"Module"}));export{c as A,o as D,k as F};
