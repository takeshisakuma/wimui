import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-CauSMpP2.js";import{O as d}from"./OverlayBase-DXJpAuco.js";import{B as a}from"./Button-DlNven2r.js";import{C as s}from"./Card-DjQ4h2db.js";import{S as c}from"./Stack-mCozwbUy.js";import{A as p}from"./i18nConstants-BpHxieg5.js";import{u as m}from"./useTranslation-DWvjPTrY.js";const y={title:"Components/Internal/OverlayBase",component:d,parameters:{layout:"fullscreen"}},t={render:function(){const[i,r]=l.useState(!1),{t:n}=m(p);return e.jsxs("div",{style:{padding:"40px",height:"100vh"},children:[e.jsx(a,{onClick:()=>r(!0),priority:"primary",children:n("doc_ob_open")}),e.jsx(d,{open:i,onOpenChange:r,contentClassName:"wim-overlay-content-centered",children:e.jsxs(s,{style:{width:"400px"},children:[e.jsx(s.Header,{children:e.jsx("strong",{children:n("doc_ob_title")})}),e.jsx(s.Body,{children:e.jsxs(c,{gap:"md",children:[e.jsx("p",{children:n("doc_ob_desc")}),e.jsx(a,{onClick:()=>r(!1),priority:"primary",children:n("button_close")||"Close"})]})})]})})]})}},o={render:function(){const[i,r]=l.useState(!1),{t:n}=m(p);return e.jsxs("div",{style:{padding:"40px",height:"100vh"},children:[e.jsx(a,{onClick:()=>r(!0),priority:"primary",children:n("doc_ob_slide_open")}),e.jsx(d,{open:i,onOpenChange:r,contentClassName:"wim-overlay-content-top",transitionProps:{enter:"slide-down-enter",enterFrom:"slide-down-enter-from",enterTo:"slide-down-enter-to",leave:"slide-down-leave",leaveFrom:"slide-down-leave-from",leaveTo:"slide-down-leave-to"},children:e.jsx(s,{style:{width:"100%",borderRadius:"0 0 16px 16px"},children:e.jsx(s.Body,{children:e.jsxs(c,{direction:"row",justify:"space-between",align:"center",children:[e.jsx("p",{children:n("doc_ob_slide_desc")}),e.jsx(a,{onClick:()=>r(!1),priority:"secondary",label:n("button_dismiss")||"Dismiss"})]})})})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "40px",
      height: "100vh"
    }}>\r
        <Button onClick={() => setOpen(true)} priority="primary">\r
          {t("doc_ob_open")}\r
        </Button>\r
        <OverlayBase open={open} onOpenChange={setOpen} contentClassName="wim-overlay-content-centered">\r
          <Card style={{
          width: "400px"
        }}>\r
            <Card.Header>\r
              <strong>{t("doc_ob_title")}</strong>\r
            </Card.Header>\r
            <Card.Body>\r
              <Stack gap="md">\r
                <p>{t("doc_ob_desc")}</p>\r
                <Button onClick={() => setOpen(false)} priority="primary">{t("button_close") || "Close"}</Button>\r
              </Stack>\r
            </Card.Body>\r
          </Card>\r
        </OverlayBase>\r
      </div>;
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      padding: "40px",
      height: "100vh"
    }}>\r
        <Button onClick={() => setOpen(true)} priority="primary">\r
          {t("doc_ob_slide_open")}\r
        </Button>\r
        <OverlayBase open={open} onOpenChange={setOpen} contentClassName="wim-overlay-content-top" transitionProps={{
        enter: "slide-down-enter",
        enterFrom: "slide-down-enter-from",
        enterTo: "slide-down-enter-to",
        leave: "slide-down-leave",
        leaveFrom: "slide-down-leave-from",
        leaveTo: "slide-down-leave-to"
      }}>\r
          <Card style={{
          width: "100%",
          borderRadius: "0 0 16px 16px"
        }}>\r
            <Card.Body>\r
              <Stack direction="row" justify="space-between" align="center">\r
                <p>{t("doc_ob_slide_desc")}</p>\r
                <Button onClick={() => setOpen(false)} priority="secondary" label={t("button_dismiss") || "Dismiss"} />\r
              </Stack>\r
            </Card.Body>\r
          </Card>\r
        </OverlayBase>\r
      </div>;
  }
}`,...o.parameters?.docs?.source}}};const h=["Default","CustomTransition"],b=Object.freeze(Object.defineProperty({__proto__:null,CustomTransition:o,Default:t,__namedExportsOrder:h,default:y},Symbol.toStringTag,{value:"Module"}));export{o as C,t as D,b as S};
