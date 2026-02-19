import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as y}from"./index-Dq8OH074.js";import{S as T}from"./Spinner-DjySXmXo.js";import{L as R}from"./Loader-B_rqxQ8Q.js";import{R as b}from"./iframe-Dq24M1Fk.js";import{B as f}from"./Button-CfkszfdN.js";import{I as B}from"./Icon-dNV9D_gQ.js";const n=({visible:r=!1,loaderType:a="spinner",loaderSize:i="lg",loaderColor:s="primary",backdropVariant:m="dark",blur:j="sm",message:v,fixed:k=!1,zIndex:h,children:x,className:C,style:L,...S})=>{if(!r)return null;const w=()=>x||(a==="spinner"?e.jsx(T,{size:i,color:s}):e.jsx(R,{variant:a,size:i,color:s}));return e.jsxs("div",{className:y("wim-loading-overlay",k&&"wim-loading-overlay--fixed",C),style:{...L,...h!==void 0&&{zIndex:h}},role:"status","aria-live":"polite","aria-busy":"true",...S,children:[e.jsx("div",{className:y("wim-loading-overlay__backdrop",`wim-loading-overlay__backdrop--${m}`,`wim-loading-overlay__backdrop--blur-${j}`)}),e.jsxs("div",{className:"wim-loading-overlay__content",children:[w(),v&&e.jsx("div",{className:"wim-loading-overlay__message",children:v})]})]})};n.__docgenInfo={description:"画面全体または特定の要素をオーバーレイし、ローディング状態を表示するコンポーネント。",methods:[],displayName:"LoadingOverlay",props:{visible:{required:!1,tsType:{name:"boolean"},description:"オーバーレイの表示/非表示を制御します。",defaultValue:{value:"false",computed:!1}},loaderType:{required:!1,tsType:{name:"union",raw:'"spinner" | "bars" | "dots" | "pulse"',elements:[{name:"literal",value:'"spinner"'},{name:"literal",value:'"bars"'},{name:"literal",value:'"dots"'},{name:"literal",value:'"pulse"'}]},description:"ローディングインジケーターのタイプ。",defaultValue:{value:'"spinner"',computed:!1}},loaderSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"ローディングインジケーターのサイズ。",defaultValue:{value:'"lg"',computed:!1}},loaderColor:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "success" | "warning" | "error" | "neutral" | "currentColor"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"currentColor"'}]},description:"ローディングインジケーターの色。",defaultValue:{value:'"primary"',computed:!1}},backdropVariant:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"オーバーレイの背景スタイル。",defaultValue:{value:'"dark"',computed:!1}},blur:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"背景のぼかし効果の強さ。",defaultValue:{value:'"sm"',computed:!1}},message:{required:!1,tsType:{name:"string"},description:"ローディングメッセージ。"},fixed:{required:!1,tsType:{name:"boolean"},description:"position: fixed を使用するかどうか（画面全体をカバー）。",defaultValue:{value:"false",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"z-index の値。"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カスタムローディングコンテンツ。"}}};const _={title:"Component/Loading & Progress/LoadingOverlay",component:n,parameters:{layout:"padded"},argTypes:{visible:{control:"boolean"},loaderType:{control:"select",options:["spinner","bars","dots","pulse"]},loaderSize:{control:"select",options:["sm","md","lg","xl"]},loaderColor:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},backdropVariant:{control:"select",options:["light","dark"]},blur:{control:"select",options:["none","sm","md","lg"]},fixed:{control:"boolean"}}},d={args:{visible:!0,loaderType:"spinner",loaderSize:"lg",loaderColor:"primary"},render:r=>e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Content Area"}),e.jsx("p",{children:"This is the content that will be overlaid when loading."})]}),e.jsx(n,{...r})]})},o={args:{visible:!0,loaderType:"spinner",loaderSize:"lg",loaderColor:"primary",message:"Loading data..."},render:r=>e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Content Area"}),e.jsx("p",{children:"Loading overlay with a custom message."})]}),e.jsx(n,{...r})]})},l={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:["spinner","bars","dots","pulse"].map(r=>e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsx("div",{style:{padding:"20px"},children:e.jsx("h4",{children:r.charAt(0).toUpperCase()+r.slice(1)})}),e.jsx(n,{visible:!0,loaderType:r})]},r))})},t={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:[e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[e.jsx("div",{style:{padding:"20px",color:"white"},children:e.jsx("h4",{children:"Light Backdrop"})}),e.jsx(n,{visible:!0,backdropVariant:"light",loaderColor:"primary"})]}),e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"},children:[e.jsx("div",{style:{padding:"20px",color:"white"},children:e.jsx("h4",{children:"Dark Backdrop"})}),e.jsx(n,{visible:!0,backdropVariant:"dark",loaderColor:"currentColor"})]})]})},p={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:["none","sm","md","lg"].map(r=>e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",backgroundImage:"url(https://picsum.photos/400/300)",backgroundSize:"cover"},children:[e.jsx("div",{style:{padding:"20px",color:"white",textShadow:"0 0 4px black"},children:e.jsxs("h4",{children:["Blur: ",r]})}),e.jsx(n,{visible:!0,blur:r})]},r))})},c={args:{visible:!1,fixed:!0,loaderType:"spinner",loaderSize:"xl",message:"Loading application..."},render:function(a){const[i,s]=b.useState(!1),m=()=>{s(!0),setTimeout(()=>s(!1),3e3)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(f,{onClick:m,children:"Show Full Screen Loading"}),e.jsx("p",{children:"Click the button to show a full-screen loading overlay for 3 seconds."}),e.jsx(n,{...a,visible:i})]})}},u={render:function(){const[a,i]=b.useState(!1),s=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px",padding:"20px"},children:[e.jsx("h3",{children:"Interactive Example"}),e.jsx("p",{children:"Click the button to simulate a loading state."}),e.jsx(f,{onClick:s,disabled:a,children:"Load Data"}),e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("p",{children:"Some content that will be overlaid during loading..."}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(n,{visible:a,loaderType:"spinner",loaderSize:"lg",message:"Fetching data..."})]})}},g={args:{visible:!0,children:e.jsxs("div",{style:{textAlign:"center",color:"white"},children:[e.jsx(B,{name:"ClockIcon",style:{width:"48px",height:"48px",marginBottom:"16px"}}),e.jsx("div",{style:{fontSize:"18px",fontWeight:"bold"},children:"Please wait..."})]})},render:r=>e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:"Custom Loader Content"}),e.jsx("p",{children:"You can provide custom children instead of the default loaders."})]}),e.jsx(n,{...r})]})};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary"
  },
  render: args => <div style={{
    position: "relative",
    height: "400px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  }}>\r
            <div style={{
      padding: "20px"
    }}>\r
                <h3>Content Area</h3>\r
                <p>This is the content that will be overlaid when loading.</p>\r
            </div>\r
            <LoadingOverlay {...args} />\r
        </div>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary",
    message: "Loading data..."
  },
  render: args => <div style={{
    position: "relative",
    height: "400px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  }}>\r
            <div style={{
      padding: "20px"
    }}>\r
                <h3>Content Area</h3>\r
                <p>Loading overlay with a custom message.</p>\r
            </div>\r
            <LoadingOverlay {...args} />\r
        </div>
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px"
  }}>\r
            {(["spinner", "bars", "dots", "pulse"] as const).map(type => <div key={type} style={{
      position: "relative",
      height: "300px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>\r
                    <div style={{
        padding: "20px"
      }}>\r
                        <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>\r
                    </div>\r
                    <LoadingOverlay visible={true} loaderType={type} />\r
                </div>)}\r
        </div>
}`,...l.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px"
  }}>\r
            <div style={{
      position: "relative",
      height: "300px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    }}>\r
                <div style={{
        padding: "20px",
        color: "white"
      }}>\r
                    <h4>Light Backdrop</h4>\r
                </div>\r
                <LoadingOverlay visible={true} backdropVariant="light" loaderColor="primary" />\r
            </div>\r
            <div style={{
      position: "relative",
      height: "300px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }}>\r
                <div style={{
        padding: "20px",
        color: "white"
      }}>\r
                    <h4>Dark Backdrop</h4>\r
                </div>\r
                <LoadingOverlay visible={true} backdropVariant="dark" loaderColor="currentColor" />\r
            </div>\r
        </div>
}`,...t.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px"
  }}>\r
            {(["none", "sm", "md", "lg"] as const).map(blurLevel => <div key={blurLevel} style={{
      position: "relative",
      height: "300px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      backgroundImage: "url(https://picsum.photos/400/300)",
      backgroundSize: "cover"
    }}>\r
                    <div style={{
        padding: "20px",
        color: "white",
        textShadow: "0 0 4px black"
      }}>\r
                        <h4>Blur: {blurLevel}</h4>\r
                    </div>\r
                    <LoadingOverlay visible={true} blur={blurLevel} />\r
                </div>)}\r
        </div>
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false,
    fixed: true,
    loaderType: "spinner",
    loaderSize: "xl",
    message: "Loading application..."
  },
  render: function FullScreenStory(args) {
    const [loading, setLoading] = React.useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };
    return <div style={{
      padding: "20px"
    }}>\r
                <Button onClick={handleClick}>Show Full Screen Loading</Button>\r
                <p>Click the button to show a full-screen loading overlay for 3 seconds.</p>\r
                <LoadingOverlay {...args} visible={loading} />\r
            </div>;
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const [loading, setLoading] = React.useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 2000);
    };
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "20px"
    }}>\r
                <h3>Interactive Example</h3>\r
                <p>Click the button to simulate a loading state.</p>\r
                <Button onClick={handleClick} disabled={loading}>\r
                    Load Data\r
                </Button>\r
                <div style={{
        marginTop: "20px"
      }}>\r
                    <p>Some content that will be overlaid during loading...</p>\r
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
                </div>\r
                <LoadingOverlay visible={loading} loaderType="spinner" loaderSize="lg" message="Fetching data..." />\r
            </div>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    children: <div style={{
      textAlign: "center",
      color: "white"
    }}>\r
                <Icon name="ClockIcon" style={{
        width: "48px",
        height: "48px",
        marginBottom: "16px"
      }} />\r
                <div style={{
        fontSize: "18px",
        fontWeight: "bold"
      }}>Please wait...</div>\r
            </div>
  },
  render: args => <div style={{
    position: "relative",
    height: "400px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  }}>\r
            <div style={{
      padding: "20px"
    }}>\r
                <h3>Custom Loader Content</h3>\r
                <p>You can provide custom children instead of the default loaders.</p>\r
            </div>\r
            <LoadingOverlay {...args} />\r
        </div>
}`,...g.parameters?.docs?.source}}};const z=["Basic","WithMessage","DifferentLoaderTypes","BackdropVariants","BlurEffects","FullScreen","Interactive","CustomLoader"],D=Object.freeze(Object.defineProperty({__proto__:null,BackdropVariants:t,Basic:d,BlurEffects:p,CustomLoader:g,DifferentLoaderTypes:l,FullScreen:c,Interactive:u,WithMessage:o,__namedExportsOrder:z,default:_},Symbol.toStringTag,{value:"Module"}));export{d as B,g as C,l as D,c as F,u as I,D as L,o as W,t as a,p as b};
