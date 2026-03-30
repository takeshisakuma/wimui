import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as m,A as y}from"./iframe-BB8xHwtR.js";import{A as d}from"./Alert-XR9WVZzy.js";import{B as u}from"./Button-CbaCWdFu.js";import{S as c}from"./Stack-D2xkqLRU.js";import{B as h}from"./Box-BMMgiBoB.js";import{u as p}from"./useTranslation-y7Vel5kV.js";import{C as b}from"./Container-9-Ztzvqs.js";const x=({error:s,errorInfo:o,reset:t})=>{const{t:e}=p(),[n,a]=m.useState(!1);return r.jsx(h,{p:"lg",radius:"md",bg:"var(--wim-color-destructive-bg, #fff1f0)",className:"wim-error-boundary-fallback",style:{border:"1px solid var(--wim-color-destructive, #ff4d4f)"},children:r.jsxs(c,{gap:"md",children:[r.jsx(d,{status:"error",title:e("error.boundary_title"),description:s.message}),r.jsxs(c,{direction:"row",gap:"sm",children:[r.jsx(u,{onClick:t,label:e("error.boundary_retry"),variant:"filled",size:"sm"}),r.jsx(u,{onClick:()=>a(!n),label:e(n?"error.boundary_hide_details":"error.boundary_show_details"),variant:"outlined",size:"sm"})]}),n&&r.jsx(h,{p:"md",bg:"rgba(0, 0, 0, 0.05)",radius:"sm",style:{maxHeight:"300px",overflowY:"auto",fontSize:"var(--wim-font-size-sm)",whiteSpace:"pre-wrap",fontFamily:"var(--font-family-mono, monospace)",wordBreak:"break-all",border:"1px solid rgba(0, 0, 0, 0.1)"},children:r.jsxs("code",{children:[s.toString(),r.jsx("br",{}),o?.componentStack]})})]})})};class f extends m.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,t){this.setState({errorInfo:t}),this.props.onError?.(o,t)}reset=()=>{this.setState({hasError:!1,error:null,errorInfo:null}),this.props.onReset?.()};render(){const{hasError:o,error:t,errorInfo:e}=this.state,{children:n,fallback:a}=this.props;return o&&t?typeof a=="function"?a(t,e,this.reset):a||r.jsx(x,{error:t,errorInfo:e,reset:this.reset}):n}}f.__docgenInfo={description:"JavaScriptのエラーをキャッチしてフォールバックUIを表示する標準のReactエラー境界コンポーネント。",methods:[{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{fallback:{required:!1,tsType:{name:"union",raw:`| ReactNode
| ((error: Error, errorInfo: ErrorInfo | null, reset: () => void) => ReactNode)`,elements:[{name:"ReactNode"},{name:"unknown"}]},description:`エラーが発生した時に表示されるコンポーネントまたは要素。
関数が渡された場合は (error, errorInfo, reset) => ReactNode として呼び出されます。`},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:"エラーが発生した時に呼び出されるコールバック。"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"エラーがリセットされた時に呼び出されるコールバック。"},children:{required:!0,tsType:{name:"ReactNode"},description:"子要素。"}}};const S={title:"Components/Utilities/ErrorBoundary",component:f,parameters:{layout:"centered"},tags:[]},g=()=>{const{t:s}=p(y);throw new Error(s("story.errorboundary_throw_msg"))},i={render:function(){const[o,t]=m.useState(!1),{t:e}=p(y);return r.jsx(b,{size:"sm",py:"xl",children:r.jsxs(c,{align:"center",gap:"lg",children:[r.jsx("p",{children:e("story.errorboundary_desc")}),r.jsx(u,{onClick:()=>t(!0),label:e("story.errorboundary_btn_trigger"),variant:"filled"}),r.jsx(f,{onReset:()=>t(!1),children:o?r.jsx(g,{}):r.jsx(d,{status:"info",title:e("story.errorboundary_status_ok")})})]})})}},l={render:function(){const[o,t]=m.useState(!1),{t:e}=p(y);return r.jsx(b,{size:"sm",py:"xl",children:r.jsxs(c,{align:"center",gap:"lg",children:[r.jsx(u,{onClick:()=>t(!0),label:e("story.errorboundary_btn_trigger_custom"),variant:"filled"}),r.jsx(f,{onReset:()=>t(!1),fallback:(n,a,_)=>r.jsx(d,{status:"error",title:e("story.errorboundary_oops"),description:n.message,children:r.jsx("div",{style:{marginTop:"1rem"},children:r.jsx(u,{onClick:_,label:e("story.errorboundary_btn_reset"),variant:"outlined",size:"sm"})})}),children:o?r.jsx(g,{}):r.jsx(d,{status:"success",title:e("story.errorboundary_status_stable")})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">
        <Stack align="center" gap="lg">
          <p>{t("story.errorboundary_desc")}</p>
          <Button onClick={() => setShouldThrow(true)} label={t("story.errorboundary_btn_trigger")} variant="filled" />
          <ErrorBoundary onReset={() => setShouldThrow(false)}>
            {shouldThrow ? <BuggyComponent /> : <Alert status="info" title={t("story.errorboundary_status_ok")} />}
          </ErrorBoundary>
        </Stack>
      </Container>;
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <Container size="sm" py="xl">
        <Stack align="center" gap="lg">
          <Button onClick={() => setShouldThrow(true)} label={t("story.errorboundary_btn_trigger_custom")} variant="filled" />
          <ErrorBoundary onReset={() => setShouldThrow(false)} fallback={(error, _info, reset) => <Alert status="error" title={t("story.errorboundary_oops")} description={error.message}>
                <div style={{
            marginTop: "1rem"
          }}>
                  <Button onClick={reset} label={t("story.errorboundary_btn_reset")} variant="outlined" size="sm" />
                </div>
              </Alert>}>
            {shouldThrow ? <BuggyComponent /> : <Alert status="success" title={t("story.errorboundary_status_stable")} />}
          </ErrorBoundary>
        </Stack>
      </Container>;
  }
}`,...l.parameters?.docs?.source}}};const w=["Default","CustomFallback"],A=Object.freeze(Object.defineProperty({__proto__:null,CustomFallback:l,Default:i,__namedExportsOrder:w,default:S},Symbol.toStringTag,{value:"Module"}));export{l as C,i as D,A as E};
