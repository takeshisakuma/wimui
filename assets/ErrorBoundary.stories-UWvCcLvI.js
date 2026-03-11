import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-SL2HqV3D.js";import{A as d}from"./Alert-Bx41Zz7L.js";import{B as c}from"./Button-DhroN8PM.js";import{S as u}from"./Stack-HAaDmZZl.js";import{B as f}from"./Box-CbZu4Ji_.js";import{u as p}from"./useTranslation-ZF4WB21B.js";import{C as h}from"./Container-D3y5F8Jl.js";const g=({error:n,errorInfo:t,reset:o})=>{const{t:e}=p(),[s,a]=m.useState(!1);return r.jsx(f,{p:"lg",radius:"md",bg:"var(--wim-color-destructive-bg, #fff1f0)",className:"wim-error-boundary-fallback",style:{border:"1px solid var(--wim-color-destructive, #ff4d4f)"},children:r.jsxs(u,{gap:"md",children:[r.jsx(d,{variant:"error",title:e("error_boundary_title"),description:n.message}),r.jsxs(u,{direction:"row",gap:"sm",children:[r.jsx(c,{onClick:o,label:e("error_boundary_retry"),priority:"primary",size:"small"}),r.jsx(c,{onClick:()=>a(!s),label:e(s?"error_boundary_hide_details":"error_boundary_show_details"),priority:"secondary",size:"small"})]}),s&&r.jsx(f,{p:"md",bg:"rgba(0, 0, 0, 0.05)",radius:"sm",style:{maxHeight:"300px",overflowY:"auto",fontSize:"var(--font-size-minus-1, 0.875rem)",whiteSpace:"pre-wrap",fontFamily:"var(--font-family-mono, monospace)",wordBreak:"break-all",border:"1px solid rgba(0, 0, 0, 0.1)"},children:r.jsxs("code",{children:[n.toString(),r.jsx("br",{}),t?.componentStack]})})]})})};class y extends m.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,o){this.setState({errorInfo:o}),this.props.onError?.(t,o),console.error("ErrorBoundary caught an error:",t,o)}reset=()=>{this.setState({hasError:!1,error:null,errorInfo:null}),this.props.onReset?.()};render(){const{hasError:t,error:o,errorInfo:e}=this.state,{children:s,fallback:a}=this.props;return t&&o?typeof a=="function"?a(o,e,this.reset):a||r.jsx(g,{error:o,errorInfo:e,reset:this.reset}):s}}y.__docgenInfo={description:"JavaScriptのエラーをキャッチしてフォールバックUIを表示する標準のReactエラー境界コンポーネント。",methods:[{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{fallback:{required:!1,tsType:{name:"union",raw:`| ReactNode
| ((error: Error, errorInfo: ErrorInfo | null, reset: () => void) => ReactNode)`,elements:[{name:"ReactNode"},{name:"unknown"}]},description:`エラーが発生した時に表示されるコンポーネントまたは要素。
関数が渡された場合は (error, errorInfo, reset) => ReactNode として呼び出されます。`},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:"エラーが発生した時に呼び出されるコールバック。"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"エラーがリセットされた時に呼び出されるコールバック。"},children:{required:!0,tsType:{name:"ReactNode"},description:"子要素。"}}};const x={title:"Components/Utilities/ErrorBoundary",component:y,parameters:{layout:"centered"},tags:[]},_=()=>{const{t:n}=p(["docs","common","components"]);throw new Error(n("story_errorboundary_throw_msg"))},i={render:function(){const[t,o]=m.useState(!1),{t:e}=p(["docs","common","components"]);return r.jsx(h,{size:"sm",py:"xl",children:r.jsxs(u,{align:"center",gap:"lg",children:[r.jsx("p",{children:e("story_errorboundary_desc")}),r.jsx(c,{onClick:()=>o(!0),label:e("story_errorboundary_btn_trigger"),priority:"primary"}),r.jsx(y,{onReset:()=>o(!1),children:t?r.jsx(_,{}):r.jsx(d,{variant:"info",title:e("story_errorboundary_status_ok")})})]})})}},l={render:function(){const[t,o]=m.useState(!1),{t:e}=p(["docs","common","components"]);return r.jsx(h,{size:"sm",py:"xl",children:r.jsxs(u,{align:"center",gap:"lg",children:[r.jsx(c,{onClick:()=>o(!0),label:e("story_errorboundary_btn_trigger_custom"),priority:"primary"}),r.jsx(y,{onReset:()=>o(!1),fallback:(s,a,b)=>r.jsx(d,{variant:"error",title:e("story_errorboundary_oops"),description:s.message,children:r.jsx("div",{style:{marginTop:"1rem"},children:r.jsx(c,{onClick:b,label:e("story_errorboundary_btn_reset"),priority:"secondary",size:"small"})})}),children:t?r.jsx(_,{}):r.jsx(d,{variant:"success",title:e("story_errorboundary_status_stable")})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const S=["Default","CustomFallback"],R=Object.freeze(Object.defineProperty({__proto__:null,CustomFallback:l,Default:i,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{l as C,i as D,R as E};
