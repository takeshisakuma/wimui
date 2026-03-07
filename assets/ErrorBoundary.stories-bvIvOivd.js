import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-8vWRHjs9.js";import{B as p}from"./Button-B2l21hRP.js";import{u}from"./useTranslation-oYtfLuBR.js";class i extends c.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,o){this.setState({errorInfo:o}),this.props.onError?.(n,o),console.error("ErrorBoundary caught an error:",n,o)}reset=()=>{this.setState({hasError:!1,error:null,errorInfo:null}),this.props.onReset?.()};render(){const{hasError:n,error:o,errorInfo:e}=this.state,{children:l,fallback:d}=this.props;return n&&o?typeof d=="function"?d(o,e,this.reset):d||r.jsxs("div",{role:"alert",style:{padding:"20px",border:"1px solid red",borderRadius:"8px",background:"#fff5f5",maxWidth:"100%",boxSizing:"border-box",wordBreak:"break-word"},children:[r.jsx("h2",{style:{color:"red",marginTop:0},children:"Something went wrong."}),r.jsxs("details",{style:{whiteSpace:"pre-wrap",marginTop:"10px"},children:[o.toString(),r.jsx("br",{}),e?.componentStack]}),r.jsx("button",{onClick:this.reset,style:{marginTop:"15px",padding:"8px 16px",background:"red",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Try again"})]}):l}}i.__docgenInfo={description:`A standard React Error Boundary component that catches JavaScript errors
anywhere in its child component tree and displays a fallback UI.`,methods:[{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"The content that might throw an error"},fallback:{required:!1,tsType:{name:"union",raw:`| ReactNode
| ((error: Error, errorInfo: ErrorInfo, reset: () => void) => ReactNode)`,elements:[{name:"ReactNode"},{name:"unknown"}]},description:`The fallback UI to display when an error occurs.
Can be a React node or a function that receives the error and info.`},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:"Callback fired when an error is caught"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the error boundary is reset"}}};const x={title:"Components/Utilities/ErrorBoundary",component:i,parameters:{layout:"centered"},tags:[]},m=()=>{const{t:s}=u(["docs","common","components"]);throw new Error(s("story_errorboundary_throw_msg"))},t={render:function(){const[n,o]=c.useState(!1),{t:e}=u(["docs","common","components"]);return r.jsxs("div",{style:{padding:"20px",textAlign:"center",maxWidth:"100%",boxSizing:"border-box"},children:[r.jsx("p",{style:{marginBottom:"16px"},children:e("story_errorboundary_desc")}),r.jsx(p,{onClick:()=>o(!0),label:e("story_errorboundary_btn_trigger"),priority:"primary",style:{marginBottom:"20px",maxWidth:"100%",whiteSpace:"normal",wordBreak:"break-word",height:"auto",paddingTop:"12px",paddingBottom:"12px"}}),r.jsx(i,{onReset:()=>o(!1),children:n?r.jsx(m,{}):r.jsx("div",{children:e("story_errorboundary_status_ok")})})]})}},a={render:function(){const[n,o]=c.useState(!1),{t:e}=u(["docs","common","components"]);return r.jsxs("div",{style:{padding:"20px",textAlign:"center",maxWidth:"90vw",boxSizing:"border-box"},children:[r.jsx(p,{onClick:()=>o(!0),label:e("story_errorboundary_btn_trigger_custom"),priority:"primary",style:{marginBottom:"20px",maxWidth:"100%",whiteSpace:"normal",wordBreak:"break-word",height:"auto",paddingTop:"12px",paddingBottom:"12px"}}),r.jsx(i,{onReset:()=>o(!1),fallback:(l,d,h)=>r.jsxs("div",{style:{background:"#f5f5f5",padding:"24px",borderRadius:"12px",textAlign:"center",border:"1px solid #ddd",maxWidth:"100%",boxSizing:"border-box",wordBreak:"break-word"},children:[r.jsx("h3",{style:{marginTop:0},children:e("story_errorboundary_oops")}),r.jsx("p",{style:{color:"#666",marginBottom:"20px"},children:l.message}),r.jsx(p,{onClick:h,label:e("story_errorboundary_btn_reset"),priority:"secondary",style:{maxWidth:"100%",whiteSpace:"normal",wordBreak:"break-word",height:"auto",paddingTop:"12px",paddingBottom:"12px"}})]}),children:n?r.jsx(m,{}):r.jsx("div",{children:e("story_errorboundary_status_stable")})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      padding: "20px",
      textAlign: "center",
      maxWidth: "100%",
      boxSizing: "border-box"
    }}>\r
        <p style={{
        marginBottom: "16px"
      }}>{t("story_errorboundary_desc")}</p>\r
        <Button onClick={() => setShouldThrow(true)} label={t("story_errorboundary_btn_trigger")} priority="primary" style={{
        marginBottom: "20px",
        maxWidth: "100%",
        whiteSpace: "normal",
        wordBreak: "break-word",
        height: "auto",
        paddingTop: "12px",
        paddingBottom: "12px"
      }} />\r
        <ErrorBoundary onReset={() => setShouldThrow(false)}>\r
          {shouldThrow ? <BuggyComponent /> : <div>{t("story_errorboundary_status_ok")}</div>}\r
        </ErrorBoundary>\r
      </div>;
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      padding: "20px",
      textAlign: "center",
      maxWidth: "90vw",
      boxSizing: "border-box"
    }}>\r
        <Button onClick={() => setShouldThrow(true)} label={t("story_errorboundary_btn_trigger_custom")} priority="primary" style={{
        marginBottom: "20px",
        maxWidth: "100%",
        whiteSpace: "normal",
        wordBreak: "break-word",
        height: "auto",
        paddingTop: "12px",
        paddingBottom: "12px"
      }} />\r
        <ErrorBoundary onReset={() => setShouldThrow(false)} fallback={(error, _info, reset) => <div style={{
        background: "#f5f5f5",
        padding: "24px",
        borderRadius: "12px",
        textAlign: "center",
        border: "1px solid #ddd",
        maxWidth: "100%",
        boxSizing: "border-box",
        wordBreak: "break-word"
      }}>\r
              <h3 style={{
          marginTop: 0
        }}>{t("story_errorboundary_oops")}</h3>\r
              <p style={{
          color: "#666",
          marginBottom: "20px"
        }}>\r
                {error.message}\r
              </p>\r
              <Button onClick={reset} label={t("story_errorboundary_btn_reset")} priority="secondary" style={{
          maxWidth: "100%",
          whiteSpace: "normal",
          wordBreak: "break-word",
          height: "auto",
          paddingTop: "12px",
          paddingBottom: "12px"
        }} />\r
            </div>}>\r
          {shouldThrow ? <BuggyComponent /> : <div>{t("story_errorboundary_status_stable")}</div>}\r
        </ErrorBoundary>\r
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const y=["Default","CustomFallback"],_=Object.freeze(Object.defineProperty({__proto__:null,CustomFallback:a,Default:t,__namedExportsOrder:y,default:x},Symbol.toStringTag,{value:"Module"}));export{a as C,t as D,_ as E};
