import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-CauSMpP2.js";import{F as l}from"./FocusTrap-Dgx0992L.js";import{B as a}from"./Button-DlNven2r.js";import{I as p}from"./Input-uNc0f62A.js";import{S as i}from"./Stack-mCozwbUy.js";import{C as e}from"./Card-DjQ4h2db.js";import{C as _}from"./Container-43Wm4i1j.js";import{A as y}from"./i18nConstants-BpHxieg5.js";import{u as f}from"./useTranslation-DWvjPTrY.js";const m={title:"Components/Internal/FocusTrap",component:l,tags:[],parameters:{layout:"centered"}},n={render:d=>{const[s,o]=u.useState(!1),{t}=f(y);return r.jsx(_,{size:"sm",py:"xl",children:r.jsxs(i,{gap:"xl",align:"center",children:[r.jsx(a,{onClick:()=>o(!s),priority:"primary",children:t(s?"story_focustrap_deactivate":"story_focustrap_activate")}),r.jsxs(e,{variant:"outline",style:{width:"100%"},children:[r.jsx(e.Header,{children:r.jsx("strong",{children:t("story_focustrap_outside_title")})}),r.jsx(e.Body,{children:r.jsxs(i,{gap:"md",children:[r.jsx("p",{children:t("story_focustrap_outside_desc")}),r.jsx(a,{priority:"secondary",children:t("story_focustrap_outside_btn")})]})})]}),s&&r.jsx(l,{...d,active:s,children:r.jsxs(e,{variant:"elevated",style:{width:"100%",border:"2px solid var(--wim-primary, #0070f3)"},children:[r.jsx(e.Header,{children:r.jsx("strong",{style:{color:"var(--wim-primary, #0070f3)"},children:t("story_focustrap_trapped_title")})}),r.jsx(e.Body,{children:r.jsxs(i,{gap:"md",children:[r.jsx("p",{children:t("story_focustrap_trapped_desc")}),r.jsx(p,{placeholder:t("story_focustrap_input_first"),fullWidth:!0}),r.jsx(p,{placeholder:t("story_focustrap_input_second"),fullWidth:!0}),r.jsx(a,{onClick:()=>o(!1),priority:"primary",children:t("story_focustrap_btn_close")})]})})]})})]})})}},c={args:{autoFocus:!0},render:d=>{const[s,o]=u.useState(!1),{t}=f(y);return r.jsx(_,{size:"sm",py:"xl",children:r.jsxs(i,{gap:"xl",align:"center",children:[r.jsx(a,{onClick:()=>o(!s),priority:"primary",children:t(s?"story_focustrap_deactivate_short":"story_focustrap_activate_autofocus")}),s&&r.jsx(l,{...d,active:s,children:r.jsxs(e,{variant:"elevated",style:{width:"100%",border:"2px solid var(--wim-success, #28a745)"},children:[r.jsx(e.Header,{children:r.jsx("strong",{style:{color:"var(--wim-success, #28a745)"},children:t("story_focustrap_autofocus_title")})}),r.jsx(e.Body,{children:r.jsxs(i,{gap:"md",children:[r.jsx(p,{placeholder:t("story_focustrap_input_autofocus"),fullWidth:!0}),r.jsx(a,{priority:"secondary",children:t("story_focustrap_btn_another")}),r.jsx(a,{onClick:()=>o(!1),priority:"primary",children:t("story_focustrap_btn_close_short")})]})})]})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">\r
        <Stack gap="xl" align="center">\r
          <Button onClick={() => setActive(!active)} priority="primary">\r
            {active ? t("story_focustrap_deactivate") : t("story_focustrap_activate")}\r
          </Button>\r
\r
          <Card variant="outline" style={{
          width: "100%"
        }}>\r
            <Card.Header>\r
              <strong>{t("story_focustrap_outside_title")}</strong>\r
            </Card.Header>\r
            <Card.Body>\r
              <Stack gap="md">\r
                <p>{t("story_focustrap_outside_desc")}</p>\r
                <Button priority="secondary">{t("story_focustrap_outside_btn")}</Button>\r
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
                    {t("story_focustrap_trapped_title")}\r
                  </strong>\r
                </Card.Header>\r
                <Card.Body>\r
                  <Stack gap="md">\r
                    <p>\r
                      {t("story_focustrap_trapped_desc")}\r
                    </p>\r
                    <Input placeholder={t("story_focustrap_input_first")} fullWidth />\r
                    <Input placeholder={t("story_focustrap_input_second")} fullWidth />\r
                    <Button onClick={() => setActive(false)} priority="primary">\r
                      {t("story_focustrap_btn_close")}\r
                    </Button>\r
                  </Stack>\r
                </Card.Body>\r
              </Card>\r
            </FocusTrap>}\r
        </Stack>\r
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
    return <Container size="sm" py="xl">\r
        <Stack gap="xl" align="center">\r
          <Button onClick={() => setActive(!active)} priority="primary">\r
            {active ? t("story_focustrap_deactivate_short") : t("story_focustrap_activate_autofocus")}\r
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
                    {t("story_focustrap_autofocus_title")}\r
                  </strong>\r
                </Card.Header>\r
                <Card.Body>\r
                  <Stack gap="md">\r
                    <Input placeholder={t("story_focustrap_input_autofocus")} fullWidth />\r
                    <Button priority="secondary">{t("story_focustrap_btn_another")}</Button>\r
                    <Button onClick={() => setActive(false)} priority="primary">\r
                      {t("story_focustrap_btn_close_short")}\r
                    </Button>\r
                  </Stack>\r
                </Card.Body>\r
              </Card>\r
            </FocusTrap>}\r
        </Stack>\r
      </Container>;
  }
}`,...c.parameters?.docs?.source}}};const h=["Default","AutoFocus"],w=Object.freeze(Object.defineProperty({__proto__:null,AutoFocus:c,Default:n,__namedExportsOrder:h,default:m},Symbol.toStringTag,{value:"Module"}));export{c as A,n as D,w as F};
