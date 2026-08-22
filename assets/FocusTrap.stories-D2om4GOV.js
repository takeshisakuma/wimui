"use client";
import{a as e,i as t,s as n}from"./preload-helper-CT_b8DTk.js";import{t as r}from"./react-DmCNssFd.js";import{Cr as i,br as a,cr as o,xr as s,yr as c}from"./iframe-F5Up1IQq.js";import{Ni as l,t as u}from"./src-Ssuy8lr7.js";import{t as d}from"./FocusTrap-dKQGNKFU.js";import{t as f}from"./Stack-CC3QEopK.js";import{t as p}from"./Card-D3LCYC3A.js";import{t as m}from"./Button-Dps1MPAd.js";import{t as h}from"./Input-BY9GcYwo.js";var g=e({Default:()=>b,InitialFocus:()=>x,__namedExportsOrder:()=>S,default:()=>y}),_,v,y,b,x,S,C=t((()=>{_=n(r(),1),s(),a(),u(),v=o(),y={title:`Components/Internal/FocusTrap`,component:d,tags:[],parameters:{layout:`centered`}},b={render:e=>{let[t,n]=(0,_.useState)(!1),{t:r}=i(c);return(0,v.jsx)(l,{size:`sm`,py:`xl`,children:(0,v.jsxs)(f,{gap:`xl`,align:`center`,children:[(0,v.jsx)(m,{onClick:()=>n(!t),variant:`solid`,children:r(t?`story.focustrap_deactivate`:`story.focustrap_activate`)}),(0,v.jsxs)(p,{variant:`outline`,style:{width:`100%`},children:[(0,v.jsx)(p.Header,{children:(0,v.jsx)(`strong`,{children:r(`story.focustrap_outside_title`)})}),(0,v.jsx)(p.Body,{children:(0,v.jsxs)(f,{gap:`md`,children:[(0,v.jsx)(`p`,{children:r(`story.focustrap_outside_desc`)}),(0,v.jsx)(m,{variant:`outline`,children:r(`story.focustrap_outside_btn`)})]})})]}),t&&(0,v.jsx)(d,{...e,active:t,children:(0,v.jsxs)(p,{variant:`elevated`,style:{width:`100%`,border:`2px solid`,borderColor:`var(--wim-color-primary)`},children:[(0,v.jsx)(p.Header,{children:(0,v.jsx)(`strong`,{style:{color:`var(--wim-color-text-accent)`},children:r(`story.focustrap_trapped_title`)})}),(0,v.jsx)(p.Body,{children:(0,v.jsxs)(f,{gap:`md`,children:[(0,v.jsx)(`p`,{children:r(`story.focustrap_trapped_desc`)}),(0,v.jsx)(h,{defaultValue:r(`story.focustrap_input_first`),fullWidth:!0}),(0,v.jsx)(h,{defaultValue:r(`story.focustrap_input_second`),fullWidth:!0}),(0,v.jsx)(m,{onClick:()=>n(!1),variant:`solid`,children:r(`story.focustrap_btn_close`)})]})})]})})]})})}},x={args:{initialFocus:!0},render:e=>{let[t,n]=(0,_.useState)(!1),{t:r}=i(c);return(0,v.jsx)(l,{size:`sm`,py:`xl`,children:(0,v.jsxs)(f,{gap:`xl`,align:`center`,children:[(0,v.jsx)(m,{onClick:()=>n(!t),variant:`solid`,children:r(t?`story.focustrap_deactivate_short`:`story.focustrap_activate_autofocus`)}),t&&(0,v.jsx)(d,{...e,active:t,children:(0,v.jsxs)(p,{variant:`elevated`,style:{width:`100%`,border:`2px solid`,borderColor:`var(--wim-color-success)`},children:[(0,v.jsx)(p.Header,{children:(0,v.jsx)(`strong`,{style:{color:`var(--wim-color-text-success)`},children:r(`story.focustrap_autofocus_title`)})}),(0,v.jsx)(p.Body,{children:(0,v.jsxs)(f,{gap:`md`,children:[(0,v.jsx)(h,{defaultValue:r(`story.focustrap_input_autofocus`),fullWidth:!0}),(0,v.jsx)(m,{variant:`outline`,children:r(`story.focustrap_btn_another`)}),(0,v.jsx)(m,{onClick:()=>n(!1),variant:`solid`,children:r(`story.focustrap_btn_close_short`)})]})})]})})]})})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S=[`Default`,`InitialFocus`]}));C();export{b as Default,x as InitialFocus,S as __namedExportsOrder,y as default,C as n,g as t};