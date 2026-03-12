import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as b}from"./index-Ckw0h7AD.js";import{S as R}from"./Spinner-DOEwTXgX.js";import{L as z}from"./Loader-SYRXFeIt.js";import{R as j}from"./iframe-BisTGuVC.js";import{B as k}from"./Button-DcecViuG.js";import{I as f}from"./Icon-mnVo4eg5.js";import{u as s}from"./useTranslation-BH3LN071.js";const a=({visible:o=!1,loaderType:n="spinner",loaderSize:r="lg",loaderColor:i="primary",backdropVariant:t="dark",blur:y="sm",message:x,fixed:T=!1,zIndex:_,children:h,className:S,style:w,...C})=>{if(!o)return null;const L=()=>h||(n==="spinner"?e.jsx(R,{size:r,color:i}):e.jsx(z,{variant:n,size:r,color:i}));return e.jsxs("div",{className:b("wim-loading-overlay",T&&"wim-loading-overlay--fixed",S),style:{...w,..._!==void 0&&{zIndex:_}},role:"status","aria-live":"polite","aria-busy":"true",...C,children:[e.jsx("div",{className:b("wim-loading-overlay__backdrop",`wim-loading-overlay__backdrop--${t}`,`wim-loading-overlay__backdrop--blur-${y}`)}),e.jsxs("div",{className:"wim-loading-overlay__content",children:[L(),x&&e.jsx("div",{className:"wim-loading-overlay__message",children:x})]})]})};a.__docgenInfo={description:"画面全体または特定の要素をオーバーレイし、ローディング状態を表示するコンポーネント。",methods:[],displayName:"LoadingOverlay",props:{visible:{required:!1,tsType:{name:"boolean"},description:"オーバーレイの表示/非表示を制御します。",defaultValue:{value:"false",computed:!1}},loaderType:{required:!1,tsType:{name:"union",raw:'"spinner" | "bars" | "dots" | "pulse"',elements:[{name:"literal",value:'"spinner"'},{name:"literal",value:'"bars"'},{name:"literal",value:'"dots"'},{name:"literal",value:'"pulse"'}]},description:"ローディングインジケーターのタイプ。",defaultValue:{value:'"spinner"',computed:!1}},loaderSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"ローディングインジケーターのサイズ。",defaultValue:{value:'"lg"',computed:!1}},loaderColor:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "neutral"
| "currentColor"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"currentColor"'}]},description:"ローディングインジケーターの色。",defaultValue:{value:'"primary"',computed:!1}},backdropVariant:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"オーバーレイの背景スタイル。",defaultValue:{value:'"dark"',computed:!1}},blur:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"背景のぼかし効果の強さ。",defaultValue:{value:'"sm"',computed:!1}},message:{required:!1,tsType:{name:"string"},description:"ローディングメッセージ。"},fixed:{required:!1,tsType:{name:"boolean"},description:"position: fixed を使用するかどうか（画面全体をカバー）。",defaultValue:{value:"false",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"z-index の値。"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カスタムローディングコンテンツ。"}}};const B={title:"Components/Loading States/LoadingOverlay",component:a,parameters:{layout:"padded"},argTypes:{visible:{control:"boolean"},loaderType:{control:"select",options:["spinner","bars","dots","pulse"]},loaderSize:{control:"select",options:["sm","md","lg","xl"]},loaderColor:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},backdropVariant:{control:"select",options:["light","dark"]},blur:{control:"select",options:["none","sm","md","lg"]},fixed:{control:"boolean"}}},l={args:{visible:!0,loaderType:"spinner",loaderSize:"lg",loaderColor:"primary"},render:function(n){const{t:r}=s(["docs","common","components"]);return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:r("story_loading_overlay_content_title")}),e.jsx("p",{children:r("story_loading_overlay_content_desc")})]}),e.jsx(a,{...n})]})}},d={args:{visible:!0,loaderType:"spinner",loaderSize:"lg",loaderColor:"primary",message:"Loading data..."},render:function(n){const{t:r}=s(["docs","common","components"]);return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:r("story_loading_overlay_content_title")}),e.jsx("p",{children:r("story_loading_overlay_with_msg_desc")})]}),e.jsx(a,{...n,message:r("story_loading_overlay_loading_data")})]})}},c={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:["spinner","bars","dots","pulse"].map(o=>e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsx("div",{style:{padding:"20px"},children:e.jsx("h4",{children:o.charAt(0).toUpperCase()+o.slice(1)})}),e.jsx(a,{visible:!0,loaderType:o})]},o))})},p={render:function(){const{t:n}=s(["docs","common","components"]);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:[e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[e.jsx("div",{style:{padding:"20px",color:"white"},children:e.jsx("h4",{children:n("story_loading_overlay_light_backdrop")})}),e.jsx(a,{visible:!0,backdropVariant:"light",loaderColor:"primary"})]}),e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"},children:[e.jsx("div",{style:{padding:"20px",color:"white"},children:e.jsx("h4",{children:n("story_loading_overlay_dark_backdrop")})}),e.jsx(a,{visible:!0,backdropVariant:"dark",loaderColor:"currentColor"})]})]})}},u={render:function(){const{t:n}=s(["docs","common","components"]);return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:["none","sm","md","lg"].map(r=>e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",backgroundImage:"url(https://picsum.photos/400/300)",backgroundSize:"cover"},children:[e.jsx("div",{style:{padding:"20px",color:"white",textShadow:"0 0 4px black"},children:e.jsxs("h4",{children:[n("story_loading_overlay_blur"),": ",r]})}),e.jsx(a,{visible:!0,blur:r})]},r))})}},m={args:{visible:!1,fixed:!0,loaderType:"spinner",loaderSize:"xl",message:"Loading application..."},render:function(n){const{t:r}=s(["docs","common","components"]),[i,t]=j.useState(!1),y=()=>{t(!0),setTimeout(()=>t(!1),3e3)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(k,{onClick:y,children:r("story_loading_overlay_show_fullscreen")}),e.jsx("p",{children:r("story_loading_overlay_fullscreen_desc")}),e.jsx(a,{...n,visible:i,message:r("story_loading_overlay_loading_app")})]})}},g={render:function(){const{t:n}=s(["docs","common","components"]),[r,i]=j.useState(!1),t=()=>{i(!0),setTimeout(()=>i(!1),2e3)};return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px",padding:"20px"},children:[e.jsx("h3",{children:n("story_loading_overlay_interactive_title")}),e.jsx("p",{children:n("story_loading_overlay_interactive_desc")}),e.jsx(k,{onClick:t,disabled:r,label:n("story_loading_overlay_load_data")}),e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("p",{children:n("story_loading_overlay_overlaid_desc")}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(a,{visible:r,loaderType:"spinner",loaderSize:"lg",message:n("story_loading_overlay_fetching_data")})]})}},v={args:{visible:!0,children:e.jsxs("div",{style:{textAlign:"center",color:"white"},children:[e.jsx(f,{name:"ClockIcon",style:{width:"48px",height:"48px",marginBottom:"16px"}}),e.jsx("div",{style:{fontSize:"18px",fontWeight:"bold"},children:"Please wait..."})]})},render:function(n){const{t:r}=s(["docs","common","components"]);return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:r("story_loading_overlay_custom_title")}),e.jsx("p",{children:r("story_loading_overlay_custom_desc")})]}),e.jsx(a,{...n,children:e.jsxs("div",{style:{textAlign:"center",color:"white"},children:[e.jsx(f,{name:"ClockIcon",style:{width:"48px",height:"48px",marginBottom:"16px"}}),e.jsx("div",{style:{fontSize:"18px",fontWeight:"bold"},children:r("story_loading_overlay_wait")})]})})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>\r
        <div style={{
        padding: "20px"
      }}>\r
          <h3>{t("story_loading_overlay_content_title")}</h3>\r
          <p>{t("story_loading_overlay_content_desc")}</p>\r
        </div>\r
        <LoadingOverlay {...args} />\r
      </div>;
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary",
    message: "Loading data..."
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>\r
        <div style={{
        padding: "20px"
      }}>\r
          <h3>{t("story_loading_overlay_content_title")}</h3>\r
          <p>{t("story_loading_overlay_with_msg_desc")}</p>\r
        </div>\r
        <LoadingOverlay {...args} message={t("story_loading_overlay_loading_data")} />\r
      </div>;
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
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
            <h4>{t("story_loading_overlay_light_backdrop")}</h4>\r
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
            <h4>{t("story_loading_overlay_dark_backdrop")}</h4>\r
          </div>\r
          <LoadingOverlay visible={true} backdropVariant="dark" loaderColor="currentColor" />\r
        </div>\r
      </div>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
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
              <h4>\r
                {t("story_loading_overlay_blur")}: {blurLevel}\r
              </h4>\r
            </div>\r
            <LoadingOverlay visible={true} blur={blurLevel} />\r
          </div>)}\r
      </div>;
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    visible: false,
    fixed: true,
    loaderType: "spinner",
    loaderSize: "xl",
    message: "Loading application..."
  },
  render: function FullScreenStory(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    const [loading, setLoading] = React.useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };
    return <div style={{
      padding: "20px"
    }}>\r
        <Button onClick={handleClick}>\r
          {t("story_loading_overlay_show_fullscreen")}\r
        </Button>\r
        <p>{t("story_loading_overlay_fullscreen_desc")}</p>\r
        <LoadingOverlay {...args} visible={loading} message={t("story_loading_overlay_loading_app")} />\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
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
        <h3>{t("story_loading_overlay_interactive_title")}</h3>\r
        <p>{t("story_loading_overlay_interactive_desc")}</p>\r
        <Button onClick={handleClick} disabled={loading} label={t("story_loading_overlay_load_data")} />\r
        <div style={{
        marginTop: "20px"
      }}>\r
          <p>{t("story_loading_overlay_overlaid_desc")}</p>\r
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r
        </div>\r
        <LoadingOverlay visible={loading} loaderType="spinner" loaderSize="lg" message={t("story_loading_overlay_fetching_data")} />\r
      </div>;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
      }}>\r
          Please wait...\r
        </div>\r
      </div>
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "common", "components"]);
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>\r
        <div style={{
        padding: "20px"
      }}>\r
          <h3>{t("story_loading_overlay_custom_title")}</h3>\r
          <p>{t("story_loading_overlay_custom_desc")}</p>\r
        </div>\r
        <LoadingOverlay {...args} children={<div style={{
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
        }}>\r
                {t("story_loading_overlay_wait")}\r
              </div>\r
            </div>} />\r
      </div>;
  }
}`,...v.parameters?.docs?.source}}};const I=["Basic","WithMessage","DifferentLoaderTypes","BackdropVariants","BlurEffects","FullScreen","Interactive","CustomLoader"],D=Object.freeze(Object.defineProperty({__proto__:null,BackdropVariants:p,Basic:l,BlurEffects:u,CustomLoader:v,DifferentLoaderTypes:c,FullScreen:m,Interactive:g,WithMessage:d,__namedExportsOrder:I,default:B},Symbol.toStringTag,{value:"Module"}));export{l as B,v as C,c as D,m as F,g as I,D as L,d as W,p as a,u as b};
