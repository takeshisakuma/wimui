import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-Bil5U4Xb.js";import{B as c}from"./Button-CMgXwTAE.js";class a extends p.Component{state={hasError:!1,error:null,errorInfo:null};static getDerivedStateFromError(e){return{hasError:!0,error:e}}componentDidCatch(e,o){this.setState({errorInfo:o}),this.props.onError?.(e,o),console.error("ErrorBoundary caught an error:",e,o)}reset=()=>{this.setState({hasError:!1,error:null,errorInfo:null}),this.props.onReset?.()};render(){const{hasError:e,error:o,errorInfo:i}=this.state,{children:d,fallback:l}=this.props;return e&&o?typeof l=="function"?l(o,i,this.reset):l||r.jsxs("div",{role:"alert",style:{padding:"20px",border:"1px solid red",borderRadius:"8px",background:"#fff5f5"},children:[r.jsx("h2",{style:{color:"red",marginTop:0},children:"Something went wrong."}),r.jsxs("details",{style:{whiteSpace:"pre-wrap",marginTop:"10px"},children:[o.toString(),r.jsx("br",{}),i?.componentStack]}),r.jsx("button",{onClick:this.reset,style:{marginTop:"15px",padding:"8px 16px",background:"red",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"Try again"})]}):d}}a.__docgenInfo={description:`A standard React Error Boundary component that catches JavaScript errors \r
anywhere in its child component tree and displays a fallback UI.`,methods:[{name:"reset",docblock:null,modifiers:[],params:[],returns:null}],displayName:"ErrorBoundary",props:{children:{required:!1,tsType:{name:"ReactNode"},description:"The content that might throw an error"},fallback:{required:!1,tsType:{name:"union",raw:"ReactNode | ((error: Error, errorInfo: ErrorInfo, reset: () => void) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:`The fallback UI to display when an error occurs.\r
Can be a React node or a function that receives the error and info.`},onError:{required:!1,tsType:{name:"signature",type:"function",raw:"(error: Error, errorInfo: ErrorInfo) => void",signature:{arguments:[{type:{name:"Error"},name:"error"},{type:{name:"ErrorInfo"},name:"errorInfo"}],return:{name:"void"}}},description:"Callback fired when an error is caught"},onReset:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the error boundary is reset"}}};const h={title:"Component/Utilities/ErrorBoundary",component:a,parameters:{layout:"centered"},tags:[]},u=()=>{throw new Error("意図的なエラーが発生しました！")},n={render:()=>{const[s,e]=p.useState(!1);return r.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[r.jsx("p",{style:{marginBottom:"16px"},children:"下のボタンをクリックしてエラーを発生させます。"}),r.jsx(c,{onClick:()=>e(!0),label:"エラーを発生させる",priority:"primary",style:{marginBottom:"20px"}}),r.jsx(a,{onReset:()=>e(!1),children:s?r.jsx(u,{}):r.jsx("div",{children:"現在、正常に動作しています。"})})]})}},t={render:()=>{const[s,e]=p.useState(!1);return r.jsxs("div",{style:{padding:"20px",textAlign:"center"},children:[r.jsx(c,{onClick:()=>e(!0),label:"カスタムエラーを発生させる",priority:"primary",style:{marginBottom:"20px"}}),r.jsx(a,{onReset:()=>e(!1),fallback:(o,i,d)=>r.jsxs("div",{style:{background:"#f5f5f5",padding:"24px",borderRadius:"12px",textAlign:"center",border:"1px solid #ddd"},children:[r.jsx("h3",{style:{marginTop:0},children:"おっと！エラーが発生しました"}),r.jsx("p",{style:{color:"#666",marginBottom:"20px"},children:o.message}),r.jsx(c,{onClick:d,label:"境界をリセットして再試行",priority:"secondary"})]}),children:s?r.jsx(u,{}):r.jsx("div",{children:"安定したコンテンツ。"})})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [shouldThrow, setShouldThrow] = useState(false);
    return <div style={{
      padding: "20px",
      textAlign: "center"
    }}>\r
                <p style={{
        marginBottom: "16px"
      }}>下のボタンをクリックしてエラーを発生させます。</p>\r
                <Button onClick={() => setShouldThrow(true)} label="エラーを発生させる" priority="primary" style={{
        marginBottom: "20px"
      }} />\r
                <ErrorBoundary onReset={() => setShouldThrow(false)}>\r
                    {shouldThrow ? <BuggyComponent /> : <div>現在、正常に動作しています。</div>}\r
                </ErrorBoundary>\r
            </div>;
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [shouldThrow, setShouldThrow] = useState(false);
    return <div style={{
      padding: "20px",
      textAlign: "center"
    }}>\r
                <Button onClick={() => setShouldThrow(true)} label="カスタムエラーを発生させる" priority="primary" style={{
        marginBottom: "20px"
      }} />\r
                <ErrorBoundary onReset={() => setShouldThrow(false)} fallback={(error, info, reset) => <div style={{
        background: "#f5f5f5",
        padding: "24px",
        borderRadius: "12px",
        textAlign: "center",
        border: "1px solid #ddd"
      }}>\r
                            <h3 style={{
          marginTop: 0
        }}>おっと！エラーが発生しました</h3>\r
                            <p style={{
          color: "#666",
          marginBottom: "20px"
        }}>{error.message}</p>\r
                            <Button onClick={reset} label="境界をリセットして再試行" priority="secondary" />\r
                        </div>}>\r
                    {shouldThrow ? <BuggyComponent /> : <div>安定したコンテンツ。</div>}\r
                </ErrorBoundary>\r
            </div>;
  }
}`,...t.parameters?.docs?.source}}};const m=["Default","CustomFallback"],x=Object.freeze(Object.defineProperty({__proto__:null,CustomFallback:t,Default:n,__namedExportsOrder:m,default:h},Symbol.toStringTag,{value:"Module"}));export{t as C,n as D,x as E};
