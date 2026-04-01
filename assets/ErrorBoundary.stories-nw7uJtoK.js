import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as m,A as y}from"./iframe-Cm7axuZH.js";import{A as u}from"./Alert-CtSKJEzg.js";import{B as d}from"./Button-BVq6229i.js";import{S as c}from"./Stack-CLA70Vmp.js";import{B as g}from"./Box-Bk0kIFkS.js";import{C as b}from"./Container-DNEv1fOM.js";import{u as h}from"./useTranslation-NKv2iRzU.js";const _={title:"Something went wrong",retry:"Retry",showDetails:"Show details",hideDetails:"Hide details"},x=({error:n,errorInfo:o,reset:t,labels:e})=>{const[s,a]=m.useState(!1);return r.jsx(g,{p:"lg",radius:"md",bg:"var(--wim-color-destructive-bg, #fff1f0)",className:"wim-error-boundary-fallback",style:{border:"1px solid var(--wim-color-destructive, #ff4d4f)"},children:r.jsxs(c,{gap:"md",children:[r.jsx(u,{intent:"error",title:e.title,description:n.message}),r.jsxs(c,{direction:"row",gap:"sm",children:[r.jsx(d,{onClick:t,label:e.retry,variant:"filled",size:"sm"}),r.jsx(d,{onClick:()=>a(!s),label:s?e.hideDetails:e.showDetails,variant:"outlined",size:"sm"})]}),s&&r.jsx(g,{p:"md",bg:"rgba(0, 0, 0, 0.05)",radius:"sm",style:{maxHeight:"300px",overflowY:"auto",fontSize:"var(--wim-font-size-sm)",whiteSpace:"pre-wrap",fontFamily:"var(--font-family-mono, monospace)",wordBreak:"break-all",border:"1px solid rgba(0, 0, 0, 0.1)"},children:r.jsxs("code",{children:[n.toString(),r.jsx("br",{}),o?.componentStack]})})]})})};class p extends m.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(o){return{hasError:!0,error:o}}componentDidCatch(o,t){this.setState({errorInfo:t}),this.props.onError?.(o,t)}reset=()=>{this.setState({hasError:!1,error:null,errorInfo:null}),this.props.onReset?.()};render(){const{hasError:o,error:t,errorInfo:e}=this.state,{children:s,fallback:a,labels:f}=this.props;return o&&t?typeof a=="function"?a(t,e,this.reset):a||r.jsx(x,{error:t,errorInfo:e,reset:this.reset,labels:{..._,...f}}):s}}p.__docgenInfo={description:"JavaScriptのエラーをキャッチしてフォールバックUIを表示する標準のReactエラー境界コンポーネント。",methods:[{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{fallback:{required:!1,tsType:{name:"union",raw:`| ReactNode
| ((error: Error, errorInfo: ErrorInfo | null, reset: () => void) => ReactNode)`,elements:[{name:"ReactNode"},{name:"unknown"}]},description:`エラーが発生した時に表示されるコンポーネントまたは要素。
関数が渡された場合は (error, errorInfo, reset) => ReactNode として呼び出されます。`},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:"エラーが発生した時に呼び出されるコールバック。"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"エラーがリセットされた時に呼び出されるコールバック。"},labels:{required:!1,tsType:{name:"signature",type:"object",raw:`{
  title?: string;
  retry?: string;
  showDetails?: string;
  hideDetails?: string;
}`,signature:{properties:[{key:"title",value:{name:"string",required:!1}},{key:"retry",value:{name:"string",required:!1}},{key:"showDetails",value:{name:"string",required:!1}},{key:"hideDetails",value:{name:"string",required:!1}}]}},description:"手動翻訳用のラベル。"},children:{required:!0,tsType:{name:"ReactNode"},description:"子要素。"}}};const w={title:"Components/Utilities/ErrorBoundary",component:p,parameters:{layout:"centered"},tags:[]},S=()=>{const{t:n}=h(y);throw new Error(n("story.errorboundary_throw_msg"))},i={render:function(){const[o,t]=m.useState(!1),{t:e}=h(y);return r.jsx(b,{size:"sm",py:"xl",children:r.jsxs(c,{align:"center",gap:"lg",children:[r.jsx("p",{children:e("story.errorboundary_desc")}),r.jsx(d,{onClick:()=>t(!0),label:e("story.errorboundary_btn_trigger"),variant:"filled"}),r.jsx(p,{onReset:()=>t(!1),children:o?r.jsx(S,{}):r.jsx(u,{intent:"info",title:e("story.errorboundary_status_ok")})})]})})}},l={render:function(){const[o,t]=m.useState(!1),{t:e}=h(y);return r.jsx(b,{size:"sm",py:"xl",children:r.jsxs(c,{align:"center",gap:"lg",children:[r.jsx(d,{onClick:()=>t(!0),label:e("story.errorboundary_btn_trigger_custom"),variant:"filled"}),r.jsx(p,{onReset:()=>t(!1),fallback:(s,a,f)=>r.jsx(u,{intent:"error",title:e("story.errorboundary_oops"),description:s.message,children:r.jsx("div",{style:{marginTop:"1rem"},children:r.jsx(d,{onClick:f,label:e("story.errorboundary_btn_reset"),variant:"outlined",size:"sm"})})}),children:o?r.jsx(S,{}):r.jsx(u,{intent:"success",title:e("story.errorboundary_status_stable")})})]})})}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
            {shouldThrow ? <BuggyComponent /> : <Alert intent="info" title={t("story.errorboundary_status_ok")} />}
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
          <ErrorBoundary onReset={() => setShouldThrow(false)} fallback={(error, _info, reset) => <Alert intent="error" title={t("story.errorboundary_oops")} description={error.message}>
                <div style={{
            marginTop: "1rem"
          }}>
                  <Button onClick={reset} label={t("story.errorboundary_btn_reset")} variant="outlined" size="sm" />
                </div>
              </Alert>}>
            {shouldThrow ? <BuggyComponent /> : <Alert intent="success" title={t("story.errorboundary_status_stable")} />}
          </ErrorBoundary>
        </Stack>
      </Container>;
  }
}`,...l.parameters?.docs?.source}}};const E=["Default","CustomFallback"],D=Object.freeze(Object.defineProperty({__proto__:null,CustomFallback:l,Default:i,__namedExportsOrder:E,default:w},Symbol.toStringTag,{value:"Module"}));export{l as C,i as D,D as E};
