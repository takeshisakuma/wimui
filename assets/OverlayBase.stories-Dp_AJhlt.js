import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as l}from"./iframe-BisTGuVC.js";import{O as d}from"./OverlayBase-qE63CvHa.js";import{B as a}from"./Button-DcecViuG.js";import{C as s}from"./Card-DVIDGNaX.js";import{S as c}from"./Stack-DagWjvTz.js";import{u as p}from"./useTranslation-BH3LN071.js";const u={title:"Components/Internal/OverlayBase",component:d,parameters:{layout:"fullscreen"}},o={render:function(){const[i,r]=l.useState(!1),{t:n}=p(["docs","common"]);return e.jsxs("div",{style:{padding:"40px",height:"100vh"},children:[e.jsx(a,{onClick:()=>r(!0),priority:"primary",children:n("doc_ob_open")}),e.jsx(d,{open:i,onOpenChange:r,contentClassName:"wim-overlay-content-centered",children:e.jsxs(s,{style:{width:"400px"},children:[e.jsx(s.Header,{children:e.jsx("strong",{children:n("doc_ob_title")})}),e.jsx(s.Body,{children:e.jsxs(c,{gap:"md",children:[e.jsx("p",{children:n("doc_ob_desc")}),e.jsx(a,{onClick:()=>r(!1),priority:"primary",children:n("button_close")||"Close"})]})})]})})]})}},t={render:function(){const[i,r]=l.useState(!1),{t:n}=p(["docs","common"]);return e.jsxs("div",{style:{padding:"40px",height:"100vh"},children:[e.jsx(a,{onClick:()=>r(!0),priority:"primary",children:n("doc_ob_slide_open")}),e.jsx(d,{open:i,onOpenChange:r,contentClassName:"wim-overlay-content-top",transitionProps:{enter:"slide-down-enter",enterFrom:"slide-down-enter-from",enterTo:"slide-down-enter-to",leave:"slide-down-leave",leaveFrom:"slide-down-leave-from",leaveTo:"slide-down-leave-to"},children:e.jsx(s,{style:{width:"100%",borderRadius:"0 0 16px 16px"},children:e.jsx(s.Body,{children:e.jsxs(c,{direction:"row",justify:"space-between",align:"center",children:[e.jsx("p",{children:n("doc_ob_slide_desc")}),e.jsx(a,{onClick:()=>r(!1),priority:"secondary",label:n("button_dismiss")||"Dismiss"})]})})})})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common"]);
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
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [open, setOpen] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common"]);
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
}`,...t.parameters?.docs?.source}}};const y=["Default","CustomTransition"],w=Object.freeze(Object.defineProperty({__proto__:null,CustomTransition:t,Default:o,__namedExportsOrder:y,default:u},Symbol.toStringTag,{value:"Module"}));export{t as C,o as D,w as S};
