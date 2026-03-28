import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as u,A as _}from"./iframe-DhNyLLHC.js";import{F as l}from"./FocusTrap-y5_EjWAa.js";import{B as o}from"./Button-D7gyTprq.js";import{I as p}from"./Input-CFDiMbux.js";import{S as i}from"./Stack-BRJBoKd1.js";import{C as e}from"./Card-Du4nfvcO.js";import{C as y}from"./Container-CB2DoO1g.js";import{u as f}from"./useTranslation-OwuDKqc3.js";const m={title:"Components/Internal/FocusTrap",component:l,tags:[],parameters:{layout:"centered"}},n={render:d=>{const[s,a]=u.useState(!1),{t:r}=f(_);return t.jsx(y,{size:"sm",py:"xl",children:t.jsxs(i,{gap:"xl",align:"center",children:[t.jsx(o,{onClick:()=>a(!s),priority:"primary",children:r(s?"story_focustrap_deactivate":"story_focustrap_activate")}),t.jsxs(e,{variant:"outline",style:{width:"100%"},children:[t.jsx(e.Header,{children:t.jsx("strong",{children:r("story_focustrap_outside_title")})}),t.jsx(e.Body,{children:t.jsxs(i,{gap:"md",children:[t.jsx("p",{children:r("story_focustrap_outside_desc")}),t.jsx(o,{priority:"secondary",children:r("story_focustrap_outside_btn")})]})})]}),s&&t.jsx(l,{...d,active:s,children:t.jsxs(e,{variant:"elevated",style:{width:"100%",border:"2px solid",borderColor:"var(--wim-primary, #0070f3)"},children:[t.jsx(e.Header,{children:t.jsx("strong",{style:{color:"var(--wim-primary, #0070f3)"},children:r("story_focustrap_trapped_title")})}),t.jsx(e.Body,{children:t.jsxs(i,{gap:"md",children:[t.jsx("p",{children:r("story_focustrap_trapped_desc")}),t.jsx(p,{placeholder:r("story_focustrap_input_first"),fullWidth:!0}),t.jsx(p,{placeholder:r("story_focustrap_input_second"),fullWidth:!0}),t.jsx(o,{onClick:()=>a(!1),priority:"primary",children:r("story_focustrap_btn_close")})]})})]})})]})})}},c={args:{autoFocus:!0},render:d=>{const[s,a]=u.useState(!1),{t:r}=f(_);return t.jsx(y,{size:"sm",py:"xl",children:t.jsxs(i,{gap:"xl",align:"center",children:[t.jsx(o,{onClick:()=>a(!s),priority:"primary",children:r(s?"story_focustrap_deactivate_short":"story_focustrap_activate_autofocus")}),s&&t.jsx(l,{...d,active:s,children:t.jsxs(e,{variant:"elevated",style:{width:"100%",border:"2px solid",borderColor:"var(--wim-success, #28a745)"},children:[t.jsx(e.Header,{children:t.jsx("strong",{style:{color:"var(--wim-success, #28a745)"},children:r("story_focustrap_autofocus_title")})}),t.jsx(e.Body,{children:t.jsxs(i,{gap:"md",children:[t.jsx(p,{placeholder:r("story_focustrap_input_autofocus"),fullWidth:!0}),t.jsx(o,{priority:"secondary",children:r("story_focustrap_btn_another")}),t.jsx(o,{onClick:()=>a(!1),priority:"primary",children:r("story_focustrap_btn_close_short")})]})})]})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} priority="primary">
            {active ? t("story_focustrap_deactivate") : t("story_focustrap_activate")}
          </Button>

          <Card variant="outline" style={{
          width: "100%"
        }}>
            <Card.Header>
              <strong>{t("story_focustrap_outside_title")}</strong>
            </Card.Header>
            <Card.Body>
              <Stack gap="md">
                <p>{t("story_focustrap_outside_desc")}</p>
                <Button priority="secondary">{t("story_focustrap_outside_btn")}</Button>
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
                    {t("story_focustrap_trapped_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <p>
                      {t("story_focustrap_trapped_desc")}
                    </p>
                    <Input placeholder={t("story_focustrap_input_first")} fullWidth />
                    <Input placeholder={t("story_focustrap_input_second")} fullWidth />
                    <Button onClick={() => setActive(false)} priority="primary">
                      {t("story_focustrap_btn_close")}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </FocusTrap>}
        </Stack>
      </Container>;
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
          <Button onClick={() => setActive(!active)} priority="primary">
            {active ? t("story_focustrap_deactivate_short") : t("story_focustrap_activate_autofocus")}
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
                    {t("story_focustrap_autofocus_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <Input placeholder={t("story_focustrap_input_autofocus")} fullWidth />
                    <Button priority="secondary">{t("story_focustrap_btn_another")}</Button>
                    <Button onClick={() => setActive(false)} priority="primary">
                      {t("story_focustrap_btn_close_short")}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </FocusTrap>}
        </Stack>
      </Container>;
  }
}`,...c.parameters?.docs?.source}}};const h=["Default","AutoFocus"],k=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:c,Default:n,__namedExportsOrder:h,default:m},Symbol.toStringTag,{value:"Module"}));export{c as A,n as D,k as F};
