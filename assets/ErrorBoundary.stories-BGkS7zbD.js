import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-B1TToC6s.js";import{A as l}from"./Alert-BiDk1VM8.js";import{B as d}from"./Button-D41HbHwN.js";import{S as u}from"./Stack-QuuhZq3P.js";import{B as y}from"./Box-q2JNp0B1.js";import{u as p}from"./useTranslation-CHJ-TYb-.js";import{C as f}from"./Container-DK20nwDo.js";const b=({error:t,errorInfo:s,reset:e})=>{const{t:o}=p(),[n,a]=m.useState(!1);return r.jsx(y,{p:"lg",radius:"md",bg:"var(--wim-color-destructive-bg, #fff1f0)",className:"wim-error-boundary-fallback",style:{border:"1px solid var(--wim-color-destructive, #ff4d4f)"},children:r.jsxs(u,{gap:"md",children:[r.jsx(l,{status:"error",title:o("error_boundary_title"),description:t.message}),r.jsxs(u,{direction:"row",gap:"sm",children:[r.jsx(d,{onClick:e,label:o("error_boundary_retry"),priority:"primary",size:"small"}),r.jsx(d,{onClick:()=>a(!n),label:o(n?"error_boundary_hide_details":"error_boundary_show_details"),priority:"secondary",size:"small"})]}),n&&r.jsx(y,{p:"md",bg:"rgba(0, 0, 0, 0.05)",radius:"sm",style:{maxHeight:"300px",overflowY:"auto",fontSize:"var(--font-size-minus-1, 0.875rem)",whiteSpace:"pre-wrap",fontFamily:"var(--font-family-mono, monospace)",wordBreak:"break-all",border:"1px solid rgba(0, 0, 0, 0.1)"},children:r.jsxs("code",{children:[t.toString(),r.jsx("br",{}),s?.componentStack]})})]})})};class _ extends m.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(s){return{hasError:!0,error:s}}componentDidCatch(s,e){this.setState({errorInfo:e}),this.props.onError?.(s,e),console.error("ErrorBoundary caught an error:",s,e)}reset=()=>{this.setState({hasError:!1,error:null,errorInfo:null}),this.props.onReset?.()};render(){const{hasError:s,error:e,errorInfo:o}=this.state,{children:n,fallback:a}=this.props;return s&&e?typeof a=="function"?a(e,o,this.reset):a||r.jsx(b,{error:e,errorInfo:o,reset:this.reset}):n}}_.__docgenInfo={description:"JavaScriptのエラーをキャッチしてフォールバックUIを表示する標準のReactエラー境界コンポーネント。",methods:[{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{fallback:{required:!1,tsType:{name:"union",raw:`| ReactNode
| ((error: Error, errorInfo: ErrorInfo | null, reset: () => void) => ReactNode)`,elements:[{name:"ReactNode"},{name:"unknown"}]},description:`エラーが発生した時に表示されるコンポーネントまたは要素。
関数が渡された場合は (error, errorInfo, reset) => ReactNode として呼び出されます。`},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:"エラーが発生した時に呼び出されるコールバック。"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"エラーがリセットされた時に呼び出されるコールバック。"},children:{required:!0,tsType:{name:"ReactNode"},description:"子要素。"}}};const x={title:"Components/Utilities/ErrorBoundary",component:_,parameters:{layout:"centered"},tags:[]},h=()=>{const{t}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);throw new Error(t("story_errorboundary_throw_msg"))},i={render:function(){const[s,e]=m.useState(!1),{t:o}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(f,{size:"sm",py:"xl",children:r.jsxs(u,{align:"center",gap:"lg",children:[r.jsx("p",{children:o("story_errorboundary_desc")}),r.jsx(d,{onClick:()=>e(!0),label:o("story_errorboundary_btn_trigger"),priority:"primary"}),r.jsx(_,{onReset:()=>e(!1),children:s?r.jsx(h,{}):r.jsx(l,{status:"info",title:o("story_errorboundary_status_ok")})})]})})}},c={render:function(){const[s,e]=m.useState(!1),{t:o}=p(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return r.jsx(f,{size:"sm",py:"xl",children:r.jsxs(u,{align:"center",gap:"lg",children:[r.jsx(d,{onClick:()=>e(!0),label:o("story_errorboundary_btn_trigger_custom"),priority:"primary"}),r.jsx(_,{onReset:()=>e(!1),fallback:(n,a,g)=>r.jsx(l,{status:"error",title:o("story_errorboundary_oops"),description:n.message,children:r.jsx("div",{style:{marginTop:"1rem"},children:r.jsx(d,{onClick:g,label:o("story_errorboundary_btn_reset"),priority:"secondary",size:"small"})})}),children:s?r.jsx(h,{}):r.jsx(l,{status:"success",title:o("story_errorboundary_status_stable")})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [shouldThrow, setShouldThrow] = useState(false);
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...c.parameters?.docs?.source}}};const S=["Default","CustomFallback"],R=Object.freeze(Object.defineProperty({__proto__:null,CustomFallback:c,Default:i,__namedExportsOrder:S,default:x},Symbol.toStringTag,{value:"Module"}));export{c as C,i as D,R as E};
