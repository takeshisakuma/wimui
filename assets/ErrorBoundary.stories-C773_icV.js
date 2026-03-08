import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DgQoBtfe.js";import{B as d}from"./Button-C9aIzvEK.js";import{S as y}from"./Stack-rte_sGTc.js";import{A as u}from"./Alert-bPKdRjj-.js";import{C as h}from"./Container-DOqATc7Q.js";import{u as m}from"./useTranslation-DccyvZwG.js";class l extends p.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,e){this.setState({errorInfo:e}),this.props.onError?.(t,e),console.error("ErrorBoundary caught an error:",t,e)}reset=()=>{this.setState({hasError:!1,error:null,errorInfo:null}),this.props.onReset?.()};render(){const{hasError:t,error:e,errorInfo:o}=this.state,{children:c,fallback:i}=this.props;return t&&e?typeof i=="function"?i(e,o,this.reset):i||r.jsxs("div",{role:"alert",style:{padding:"20px",border:"1px solid red",borderRadius:"8px",background:"#fff5f5",maxWidth:"100%",boxSizing:"border-box",wordBreak:"break-word"},children:[r.jsx("h2",{style:{color:"red",marginTop:0},children:"Something went wrong."}),r.jsxs("details",{style:{whiteSpace:"pre-wrap",marginTop:"10px"},children:[e.toString(),r.jsx("br",{}),o?.componentStack]}),r.jsx("button",{onClick:this.reset,style:{marginTop:"15px",padding:"8px 16px",background:"red",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Try again"})]}):c}}l.__docgenInfo={description:`A standard React Error Boundary component that catches JavaScript errors
anywhere in its child component tree and displays a fallback UI.`,methods:[{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"The content that might throw an error"},fallback:{required:!1,tsType:{name:"union",raw:`| ReactNode
| ((error: Error, errorInfo: ErrorInfo, reset: () => void) => ReactNode)`,elements:[{name:"ReactNode"},{name:"unknown"}]},description:`The fallback UI to display when an error occurs.
Can be a React node or a function that receives the error and info.`},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:"Callback fired when an error is caught"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the error boundary is reset"}}};const b={title:"Components/Utilities/ErrorBoundary",component:l,parameters:{layout:"centered"},tags:[]},f=()=>{const{t:a}=m(["docs","common","components"]);throw new Error(a("story_errorboundary_throw_msg"))},n={render:function(){const[t,e]=p.useState(!1),{t:o}=m(["docs","common","components"]);return r.jsx(h,{size:"sm",py:"xl",children:r.jsxs(y,{align:"center",gap:"lg",children:[r.jsx("p",{children:o("story_errorboundary_desc")}),r.jsx(d,{onClick:()=>e(!0),label:o("story_errorboundary_btn_trigger"),priority:"primary"}),r.jsx(l,{onReset:()=>e(!1),children:t?r.jsx(f,{}):r.jsx(u,{variant:"info",title:o("story_errorboundary_status_ok")})})]})})}},s={render:function(){const[t,e]=p.useState(!1),{t:o}=m(["docs","common","components"]);return r.jsx(h,{size:"sm",py:"xl",children:r.jsxs(y,{align:"center",gap:"lg",children:[r.jsx(d,{onClick:()=>e(!0),label:o("story_errorboundary_btn_trigger_custom"),priority:"primary"}),r.jsx(l,{onReset:()=>e(!1),fallback:(c,i,g)=>r.jsx(u,{variant:"error",title:o("story_errorboundary_oops"),description:c.message,children:r.jsx("div",{style:{marginTop:"1rem"},children:r.jsx(d,{onClick:g,label:o("story_errorboundary_btn_reset"),priority:"secondary",size:"small"})})}),children:t?r.jsx(f,{}):r.jsx(u,{variant:"success",title:o("story_errorboundary_status_stable")})})]})})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Container size="sm" py="xl">\r
        <Stack align="center" gap="lg">\r
          <p>{t("story_errorboundary_desc")}</p>\r
          <Button onClick={() => setShouldThrow(true)} label={t("story_errorboundary_btn_trigger")} priority="primary" />\r
          <ErrorBoundary onReset={() => setShouldThrow(false)}>\r
            {shouldThrow ? <BuggyComponent /> : <Alert variant="info" title={t("story_errorboundary_status_ok")} />}\r
          </ErrorBoundary>\r
        </Stack>\r
      </Container>;
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <Container size="sm" py="xl">\r
        <Stack align="center" gap="lg">\r
          <Button onClick={() => setShouldThrow(true)} label={t("story_errorboundary_btn_trigger_custom")} priority="primary" />\r
          <ErrorBoundary onReset={() => setShouldThrow(false)} fallback={(error, _info, reset) => <Alert variant="error" title={t("story_errorboundary_oops")} description={error.message}>\r
                <div style={{
            marginTop: "1rem"
          }}>\r
                  <Button onClick={reset} label={t("story_errorboundary_btn_reset")} priority="secondary" size="small" />\r
                </div>\r
              </Alert>}>\r
            {shouldThrow ? <BuggyComponent /> : <Alert variant="success" title={t("story_errorboundary_status_stable")} />}\r
          </ErrorBoundary>\r
        </Stack>\r
      </Container>;
  }
}`,...s.parameters?.docs?.source}}};const _=["Default","CustomFallback"],C=Object.freeze(Object.defineProperty({__proto__:null,CustomFallback:s,Default:n,__namedExportsOrder:_,default:b},Symbol.toStringTag,{value:"Module"}));export{s as C,n as D,C as E};
