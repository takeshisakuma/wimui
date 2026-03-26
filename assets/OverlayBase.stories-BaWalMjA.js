import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l,A as c}from"./iframe-DtzJMWg3.js";import{O as d}from"./OverlayBase-qRxxg8Fu.js";import{B as a}from"./Button-C36K9C0L.js";import{C as s}from"./Card-C0NGOD0S.js";import{S as p}from"./Stack-BEhYx0RJ.js";import{u as m}from"./useTranslation-uHyy6oEH.js";const y={title:"Components/Internal/OverlayBase",component:d,parameters:{layout:"fullscreen"}},o={render:function(){const[i,t]=l.useState(!1),{t:n}=m(c);return e.jsxs("div",{style:{padding:"40px",height:"100vh"},children:[e.jsx(a,{onClick:()=>t(!0),priority:"primary",children:n("doc_ob_open")}),e.jsx(d,{open:i,onOpenChange:t,contentClassName:"wim-overlay-content-centered",children:e.jsxs(s,{style:{width:"400px"},children:[e.jsx(s.Header,{children:e.jsx("strong",{children:n("doc_ob_title")})}),e.jsx(s.Body,{children:e.jsxs(p,{gap:"md",children:[e.jsx("p",{children:n("doc_ob_desc")}),e.jsx(a,{onClick:()=>t(!1),priority:"primary",children:n("button_close")||"Close"})]})})]})})]})}},r={render:function(){const[i,t]=l.useState(!1),{t:n}=m(c);return e.jsxs("div",{style:{padding:"40px",height:"100vh"},children:[e.jsx(a,{onClick:()=>t(!0),priority:"primary",children:n("doc_ob_slide_open")}),e.jsx(d,{open:i,onOpenChange:t,contentClassName:"wim-overlay-content-top",transitionProps:{enter:"slide-down-enter",enterFrom:"slide-down-enter-from",enterTo:"slide-down-enter-to",leave:"slide-down-leave",leaveFrom:"slide-down-leave-from",leaveTo:"slide-down-leave-to"},children:e.jsx(s,{style:{width:"100%",borderRadius:"0 0 16px 16px"},children:e.jsx(s.Body,{children:e.jsxs(p,{direction:"row",justify:"space-between",align:"center",children:[e.jsx("p",{children:n("doc_ob_slide_desc")}),e.jsx(a,{onClick:()=>t(!1),priority:"secondary",label:n("button_dismiss")||"Dismiss"})]})})})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "40px",
      height: "100vh"
    }}>
        <Button onClick={() => setOpen(true)} priority="primary">
          {t("doc_ob_open")}
        </Button>
        <OverlayBase open={open} onOpenChange={setOpen} contentClassName="wim-overlay-content-centered">
          <Card style={{
          width: "400px"
        }}>
            <Card.Header>
              <strong>{t("doc_ob_title")}</strong>
            </Card.Header>
            <Card.Body>
              <Stack gap="md">
                <p>{t("doc_ob_desc")}</p>
                <Button onClick={() => setOpen(false)} priority="primary">{t("button_close") || "Close"}</Button>
              </Stack>
            </Card.Body>
          </Card>
        </OverlayBase>
      </div>;
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "40px",
      height: "100vh"
    }}>
        <Button onClick={() => setOpen(true)} priority="primary">
          {t("doc_ob_slide_open")}
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
                <p>{t("doc_ob_slide_desc")}</p>
                <Button onClick={() => setOpen(false)} priority="secondary" label={t("button_dismiss") || "Dismiss"} />
              </Stack>
            </Card.Body>
          </Card>
        </OverlayBase>
      </div>;
  }
}`,...r.parameters?.docs?.source}}};const h=["Default","CustomTransition"],O=Object.freeze(Object.defineProperty({__proto__:null,CustomTransition:r,Default:o,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{r as C,o as D,O as S};
