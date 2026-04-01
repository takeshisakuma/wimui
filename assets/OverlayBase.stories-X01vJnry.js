import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,A as c}from"./iframe-BJM4gxzT.js";import{O as i}from"./OverlayBase-iGb43QY5.js";import{B as a}from"./Button-WhULyPrs.js";import{C as r}from"./Card-CzAeoEWt.js";import{S as p}from"./Stack-Bu7z57Qr.js";import{u}from"./useTranslation-lqMBbyXx.js";const v={title:"Components/Internal/OverlayBase",component:i,parameters:{layout:"fullscreen"}},o={render:function(){const[d,t]=l.useState(!1),{t:n}=u(c);return e.jsxs("div",{style:{padding:"40px",height:"100vh"},children:[e.jsx(a,{onClick:()=>t(!0),variant:"filled",children:n("doc.ob_open")}),e.jsx(i,{open:d,onOpenChange:t,contentClassName:"wim-overlay-content-centered",children:e.jsxs(r,{style:{width:"400px"},children:[e.jsx(r.Header,{children:e.jsx("strong",{children:n("doc.ob_title")})}),e.jsx(r.Body,{children:e.jsxs(p,{gap:"md",children:[e.jsx("p",{children:n("doc.ob_desc")}),e.jsx(a,{onClick:()=>t(!1),variant:"filled",children:n("button.close")||"Close"})]})})]})})]})}},s={render:function(){const[d,t]=l.useState(!1),{t:n}=u(c);return e.jsxs("div",{style:{padding:"40px",height:"100vh"},children:[e.jsx(a,{onClick:()=>t(!0),variant:"filled",children:n("doc.ob_slide_open")}),e.jsx(i,{open:d,onOpenChange:t,contentClassName:"wim-overlay-content-top",transitionProps:{enter:"slide-down-enter",enterFrom:"slide-down-enter-from",enterTo:"slide-down-enter-to",leave:"slide-down-leave",leaveFrom:"slide-down-leave-from",leaveTo:"slide-down-leave-to"},children:e.jsx(r,{style:{width:"100%",borderRadius:"0 0 16px 16px"},children:e.jsx(r.Body,{children:e.jsxs(p,{direction:"row",justify:"space-between",align:"center",children:[e.jsx("p",{children:n("doc.ob_slide_desc")}),e.jsx(a,{onClick:()=>t(!1),variant:"outlined",label:n("button.dismiss")||"Dismiss"})]})})})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "40px",
      height: "100vh"
    }}>
        <Button onClick={() => setOpen(true)} variant="filled">
          {t("doc.ob_open")}
        </Button>
        <OverlayBase open={open} onOpenChange={setOpen} contentClassName="wim-overlay-content-centered">
          <Card style={{
          width: "400px"
        }}>
            <Card.Header>
              <strong>{t("doc.ob_title")}</strong>
            </Card.Header>
            <Card.Body>
              <Stack gap="md">
                <p>{t("doc.ob_desc")}</p>
                <Button onClick={() => setOpen(false)} variant="filled">{t("button.close") || "Close"}</Button>
              </Stack>
            </Card.Body>
          </Card>
        </OverlayBase>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "40px",
      height: "100vh"
    }}>
        <Button onClick={() => setOpen(true)} variant="filled">
          {t("doc.ob_slide_open")}
        </Button>
        <OverlayBase open={open} onOpenChange={setOpen} contentClassName="wim-overlay-content-top" transitionProps={{
        enter: "slide-down-enter",
        enterFrom: "slide-down-enter-from",
        enterTo: "slide-down-enter-to",
        leave: "slide-down-leave",
        leaveFrom: "slide-down-leave-from",
        leaveTo: "slide-down-leave-to"
      }}>
          <Card style={{
          width: "100%",
          borderRadius: "0 0 16px 16px"
        }}>
            <Card.Body>
              <Stack direction="row" justify="space-between" align="center">
                <p>{t("doc.ob_slide_desc")}</p>
                <Button onClick={() => setOpen(false)} variant="outlined" label={t("button.dismiss") || "Dismiss"} />
              </Stack>
            </Card.Body>
          </Card>
        </OverlayBase>
      </div>;
  }
}`,...s.parameters?.docs?.source}}};const f=["Default","CustomTransition"],b=Object.freeze(Object.defineProperty({__proto__:null,CustomTransition:s,Default:o,__namedExportsOrder:f,default:v},Symbol.toStringTag,{value:"Module"}));export{s as C,o as D,b as S};
