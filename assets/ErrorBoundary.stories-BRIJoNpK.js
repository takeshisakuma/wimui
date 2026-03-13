import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-C80AEei6.js";import{A as d}from"./Alert-DlkztPap.js";import{B as u}from"./Button-W2TybLPR.js";import{S as c}from"./Stack-Dco0v4tu.js";import{B as h}from"./Box-Bcr1eUb_.js";import{u as p}from"./useTranslation-Cpo6ITo8.js";import{C as _}from"./Container-iou4PwSb.js";import{A as f}from"./i18nConstants-BpHxieg5.js";const x=({error:s,errorInfo:t,reset:o})=>{const{t:e}=p(),[n,a]=m.useState(!1);return r.jsx(h,{p:"lg",radius:"md",bg:"var(--wim-color-destructive-bg, #fff1f0)",className:"wim-error-boundary-fallback",style:{border:"1px solid var(--wim-color-destructive, #ff4d4f)"},children:r.jsxs(c,{gap:"md",children:[r.jsx(d,{status:"error",title:e("error_boundary_title"),description:s.message}),r.jsxs(c,{direction:"row",gap:"sm",children:[r.jsx(u,{onClick:o,label:e("error_boundary_retry"),priority:"primary",size:"small"}),r.jsx(u,{onClick:()=>a(!n),label:e(n?"error_boundary_hide_details":"error_boundary_show_details"),priority:"secondary",size:"small"})]}),n&&r.jsx(h,{p:"md",bg:"rgba(0, 0, 0, 0.05)",radius:"sm",style:{maxHeight:"300px",overflowY:"auto",fontSize:"var(--font-size-minus-1, 0.875rem)",whiteSpace:"pre-wrap",fontFamily:"var(--font-family-mono, monospace)",wordBreak:"break-all",border:"1px solid rgba(0, 0, 0, 0.1)"},children:r.jsxs("code",{children:[s.toString(),r.jsx("br",{}),t?.componentStack]})})]})})};class y extends m.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(t){return{hasError:!0,error:t}}componentDidCatch(t,o){this.setState({errorInfo:o}),this.props.onError?.(t,o),console.error("ErrorBoundary caught an error:",t,o)}reset=()=>{this.setState({hasError:!1,error:null,errorInfo:null}),this.props.onReset?.()};render(){const{hasError:t,error:o,errorInfo:e}=this.state,{children:n,fallback:a}=this.props;return t&&o?typeof a=="function"?a(o,e,this.reset):a||r.jsx(x,{error:o,errorInfo:e,reset:this.reset}):n}}y.__docgenInfo={description:"JavaScriptのエラーをキャッチしてフォールバックUIを表示する標準のReactエラー境界コンポーネント。",methods:[{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{fallback:{required:!1,tsType:{name:"union",raw:`| ReactNode
| ((error: Error, errorInfo: ErrorInfo | null, reset: () => void) => ReactNode)`,elements:[{name:"ReactNode"},{name:"unknown"}]},description:`エラーが発生した時に表示されるコンポーネントまたは要素。
関数が渡された場合は (error, errorInfo, reset) => ReactNode として呼び出されます。`},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:"エラーが発生した時に呼び出されるコールバック。"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"エラーがリセットされた時に呼び出されるコールバック。"},children:{required:!0,tsType:{name:"ReactNode"},description:"子要素。"}}};const S={title:"Components/Utilities/ErrorBoundary",component:y,parameters:{layout:"centered"},tags:[]},b=()=>{const{t:s}=p(f);throw new Error(s("story_errorboundary_throw_msg"))},i={render:function(){const[t,o]=m.useState(!1),{t:e}=p(f);return r.jsx(_,{size:"sm",py:"xl",children:r.jsxs(c,{align:"center",gap:"lg",children:[r.jsx("p",{children:e("story_errorboundary_desc")}),r.jsx(u,{onClick:()=>o(!0),label:e("story_errorboundary_btn_trigger"),priority:"primary"}),r.jsx(y,{onReset:()=>o(!1),children:t?r.jsx(b,{}):r.jsx(d,{status:"info",title:e("story_errorboundary_status_ok")})})]})})}},l={render:function(){const[t,o]=m.useState(!1),{t:e}=p(f);return r.jsx(_,{size:"sm",py:"xl",children:r.jsxs(c,{align:"center",gap:"lg",children:[r.jsx(u,{onClick:()=>o(!0),label:e("story_errorboundary_btn_trigger_custom"),priority:"primary"}),r.jsx(y,{onReset:()=>o(!1),fallback:(n,a,g)=>r.jsx(d,{status:"error",title:e("story_errorboundary_oops"),description:n.message,children:r.jsx("div",{style:{marginTop:"1rem"},children:r.jsx(u,{onClick:g,label:e("story_errorboundary_btn_reset"),priority:"secondary",size:"small"})})}),children:t?r.jsx(b,{}):r.jsx(d,{status:"success",title:e("story_errorboundary_status_stable")})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">\r
        <Stack align="center" gap="lg">\r
          <p>{t("story_errorboundary_desc")}</p>\r
          <Button onClick={() => setShouldThrow(true)} label={t("story_errorboundary_btn_trigger")} priority="primary" />\r
          <ErrorBoundary onReset={() => setShouldThrow(false)}>\r
            {shouldThrow ? <BuggyComponent /> : <Alert status="info" title={t("story_errorboundary_status_ok")} />}\r
          </ErrorBoundary>\r
        </Stack>\r
      </Container>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">\r
        <Stack align="center" gap="lg">\r
          <Button onClick={() => setShouldThrow(true)} label={t("story_errorboundary_btn_trigger_custom")} priority="primary" />\r
          <ErrorBoundary onReset={() => setShouldThrow(false)} fallback={(error, _info, reset) => <Alert status="error" title={t("story_errorboundary_oops")} description={error.message}>\r
                <div style={{
            marginTop: "1rem"
          }}>\r
                  <Button onClick={reset} label={t("story_errorboundary_btn_reset")} priority="secondary" size="small" />\r
                </div>\r
              </Alert>}>\r
            {shouldThrow ? <BuggyComponent /> : <Alert status="success" title={t("story_errorboundary_status_stable")} />}\r
          </ErrorBoundary>\r
        </Stack>\r
      </Container>;
  }
}`,...l.parameters?.docs?.source}}};const E=["Default","CustomFallback"],z=Object.freeze(Object.defineProperty({__proto__:null,CustomFallback:l,Default:i,__namedExportsOrder:E,default:S},Symbol.toStringTag,{value:"Module"}));export{l as C,i as D,z as E};
