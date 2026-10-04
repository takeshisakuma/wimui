"use client";
import{a as e,n as t,r as n}from"./rolldown-runtime-DkW27tQK.js";import{t as r}from"./react-Q1GcV6wX.js";import{n as i,t as a}from"./useTranslation-BDKsuBAo.js";import{n as o,t as s}from"./i18nConstants-BhvmnjLS.js";import{t as c}from"./jsx-runtime-DeHZSEgm.js";import{n as l,t as u}from"./Container-DJnhfdv_.js";import{n as d,t as f}from"./FocusTrap-HGJjjGe2.js";import{n as p,t as m}from"./Stack-D0pTsuU-.js";import{n as h,t as g}from"./Card-BX8yw3HV.js";import{n as _,t as v}from"./Button-DrO46Brn.js";import{n as y,t as b}from"./Input-Cx7cDmF1.js";var x=n({Default:()=>T,InitialFocus:()=>E,__namedExportsOrder:()=>D,default:()=>w}),S,C,w,T,E,D;function O(){return(O=t((()=>{S=e(r(),1),a(),o(),_(),h(),l(),d(),y(),p(),C=c(),w={title:`Components/Internal/FocusTrap`,component:f,tags:[],parameters:{layout:`centered`}},T={render:e=>{let[t,n]=(0,S.useState)(!1),{t:r}=i(s);return(0,C.jsx)(u,{size:`sm`,py:`xl`,children:(0,C.jsxs)(m,{gap:`xl`,align:`center`,children:[(0,C.jsx)(v,{onClick:()=>n(!t),variant:`solid`,children:r(t?`story.focustrap_deactivate`:`story.focustrap_activate`)}),(0,C.jsxs)(g,{variant:`outline`,style:{width:`100%`},children:[(0,C.jsx)(g.Header,{children:(0,C.jsx)(`strong`,{children:r(`story.focustrap_outside_title`)})}),(0,C.jsx)(g.Body,{children:(0,C.jsxs)(m,{gap:`md`,children:[(0,C.jsx)(`p`,{children:r(`story.focustrap_outside_desc`)}),(0,C.jsx)(v,{variant:`outline`,children:r(`story.focustrap_outside_btn`)})]})})]}),t&&(0,C.jsx)(f,{...e,active:t,children:(0,C.jsxs)(g,{variant:`elevated`,style:{width:`100%`,border:`2px solid`,borderColor:`var(--wim-color-primary)`},children:[(0,C.jsx)(g.Header,{children:(0,C.jsx)(`strong`,{style:{color:`var(--wim-color-text-accent)`},children:r(`story.focustrap_trapped_title`)})}),(0,C.jsx)(g.Body,{children:(0,C.jsxs)(m,{gap:`md`,children:[(0,C.jsx)(`p`,{children:r(`story.focustrap_trapped_desc`)}),(0,C.jsx)(b,{defaultValue:r(`story.focustrap_input_first`),fullWidth:!0}),(0,C.jsx)(b,{defaultValue:r(`story.focustrap_input_second`),fullWidth:!0}),(0,C.jsx)(v,{onClick:()=>n(!1),variant:`solid`,children:r(`story.focustrap_btn_close`)})]})})]})})]})})}},E={args:{initialFocus:!0},render:e=>{let[t,n]=(0,S.useState)(!1),{t:r}=i(s);return(0,C.jsx)(u,{size:`sm`,py:`xl`,children:(0,C.jsxs)(m,{gap:`xl`,align:`center`,children:[(0,C.jsx)(v,{onClick:()=>n(!t),variant:`solid`,children:r(t?`story.focustrap_deactivate_short`:`story.focustrap_activate_autofocus`)}),t&&(0,C.jsx)(f,{...e,active:t,children:(0,C.jsxs)(g,{variant:`elevated`,style:{width:`100%`,border:`2px solid`,borderColor:`var(--wim-color-success)`},children:[(0,C.jsx)(g.Header,{children:(0,C.jsx)(`strong`,{style:{color:`var(--wim-color-text-success)`},children:r(`story.focustrap_autofocus_title`)})}),(0,C.jsx)(g.Body,{children:(0,C.jsxs)(m,{gap:`md`,children:[(0,C.jsx)(b,{defaultValue:r(`story.focustrap_input_autofocus`),fullWidth:!0}),(0,C.jsx)(v,{variant:`outline`,children:r(`story.focustrap_btn_another`)}),(0,C.jsx)(v,{onClick:()=>n(!1),variant:`solid`,children:r(`story.focustrap_btn_close_short`)})]})})]})})]})})}},D=[`Default`,`InitialFocus`],T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [active, setActive] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} variant="solid">
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
                <Button variant="outline">{t("story.focustrap_outside_btn")}</Button>
              </Stack>
            </Card.Body>
          </Card>

          {active && <FocusTrap {...args} active={active}>
              <Card variant="elevated" style={{
            width: "100%",
            border: "2px solid",
            borderColor: "var(--wim-color-primary)"
          }}>
                <Card.Header>
                  <strong style={{
                color: "var(--wim-color-text-accent)"
              }}>
                    {t("story.focustrap_trapped_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <p>
                      {t("story.focustrap_trapped_desc")}
                    </p>
                    <Input defaultValue={t("story.focustrap_input_first")} fullWidth />
                    <Input defaultValue={t("story.focustrap_input_second")} fullWidth />
                    <Button onClick={() => setActive(false)} variant="solid">
                      {t("story.focustrap_btn_close")}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </FocusTrap>}
        </Stack>
      </Container>;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    initialFocus: true
  },
  render: args => {
    const [active, setActive] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">
        <Stack gap="xl" align="center">
          <Button onClick={() => setActive(!active)} variant="solid">
            {active ? t("story.focustrap_deactivate_short") : t("story.focustrap_activate_autofocus")}
          </Button>

          {active && <FocusTrap {...args} active={active}>
              <Card variant="elevated" style={{
            width: "100%",
            border: "2px solid",
            borderColor: "var(--wim-color-success)"
          }}>
                <Card.Header>
                  <strong style={{
                color: "var(--wim-color-text-success)"
              }}>
                    {t("story.focustrap_autofocus_title")}
                  </strong>
                </Card.Header>
                <Card.Body>
                  <Stack gap="md">
                    <Input defaultValue={t("story.focustrap_input_autofocus")} fullWidth />
                    <Button variant="outline">{t("story.focustrap_btn_another")}</Button>
                    <Button onClick={() => setActive(false)} variant="solid">
                      {t("story.focustrap_btn_close_short")}
                    </Button>
                  </Stack>
                </Card.Body>
              </Card>
            </FocusTrap>}
        </Stack>
      </Container>;
  }
}`,...E.parameters?.docs?.source}}}})))()}export{O as i,x as n,E as r,T as t};