import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-CP8jozY9.js";import{S as z}from"./Spinner-DMLtm847.js";import{L as O}from"./Loader-_MSfhSSZ.js";import{R as k}from"./iframe-BFeRKT7x.js";import{B as T}from"./Button-TACQNaJI.js";import{I as j}from"./Icon-D4ZM1Mba.js";import{u as i}from"./useTranslation-DVQ5refS.js";const s=({visible:r=!1,loaderType:n="spinner",loaderSize:o="lg",loaderColor:a="primary",backdropVariant:d="dark",blur:y="sm",message:v,fixed:S=!1,zIndex:x,children:h,className:w,style:C,...L})=>{if(!r)return null;const b=o?{sm:"small",md:"medium",lg:"large",xl:"xlarge"}[o]:void 0,R=()=>h||(n==="spinner"?e.jsx(z,{size:b,color:a}):e.jsx(O,{variant:n,size:b,color:a}));return e.jsxs("div",{className:f("wim-loading-overlay",S&&"wim-loading-overlay--fixed",w),style:{...C,...x!==void 0&&{zIndex:x}},role:"status","aria-live":"polite","aria-busy":"true",...L,children:[e.jsx("div",{className:f("wim-loading-overlay__backdrop",`wim-loading-overlay__backdrop--${d}`,`wim-loading-overlay__backdrop--blur-${y}`)}),e.jsxs("div",{className:"wim-loading-overlay__content",children:[R(),v&&e.jsx("div",{className:"wim-loading-overlay__message",children:v})]})]})};s.__docgenInfo={description:"画面全体または特定の要素をオーバーレイし、ローディング状態を表示するコンポーネント。",methods:[],displayName:"LoadingOverlay",props:{visible:{required:!1,tsType:{name:"boolean"},description:"オーバーレイの表示/非表示を制御します。",defaultValue:{value:"false",computed:!1}},loaderType:{required:!1,tsType:{name:"union",raw:'"spinner" | "bars" | "dots" | "pulse"',elements:[{name:"literal",value:'"spinner"'},{name:"literal",value:'"bars"'},{name:"literal",value:'"dots"'},{name:"literal",value:'"pulse"'}]},description:"ローディングインジケーターのタイプ。",defaultValue:{value:'"spinner"',computed:!1}},loaderSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"ローディングインジケーターのサイズ。",defaultValue:{value:'"lg"',computed:!1}},loaderColor:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "neutral"
| "currentColor"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"currentColor"'}]},description:"ローディングインジケーターの色。",defaultValue:{value:'"primary"',computed:!1}},backdropVariant:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"オーバーレイの背景スタイル。",defaultValue:{value:'"dark"',computed:!1}},blur:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"背景のぼかし効果の強さ。",defaultValue:{value:'"sm"',computed:!1}},message:{required:!1,tsType:{name:"string"},description:"ローディングメッセージ。"},fixed:{required:!1,tsType:{name:"boolean"},description:"position: fixed を使用するかどうか（画面全体をカバー）。",defaultValue:{value:"false",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"z-index の値。"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カスタムローディングコンテンツ。"}}};const B={title:"Components/Loading States/LoadingOverlay",component:s,parameters:{layout:"padded"},argTypes:{visible:{control:"boolean"},loaderType:{control:"select",options:["spinner","bars","dots","pulse"]},loaderSize:{control:"select",options:["sm","md","lg","xl"]},loaderColor:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},backdropVariant:{control:"select",options:["light","dark"]},blur:{control:"select",options:["none","sm","md","lg"]},fixed:{control:"boolean"}}},t={args:{visible:!0,loaderType:"spinner",loaderSize:"lg",loaderColor:"primary"},render:function(n){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:o("story_loading_overlay_content_title")}),e.jsx("p",{children:o("story_loading_overlay_content_desc")})]}),e.jsx(s,{...n})]})}},l={args:{visible:!0,loaderType:"spinner",loaderSize:"lg",loaderColor:"primary",message:"Loading data..."},render:function(n){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:o("story_loading_overlay_content_title")}),e.jsx("p",{children:o("story_loading_overlay_with_msg_desc")})]}),e.jsx(s,{...n,message:o("story_loading_overlay_loading_data")})]})}},c={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:["spinner","bars","dots","pulse"].map(r=>e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsx("div",{style:{padding:"20px"},children:e.jsx("h4",{children:r.charAt(0).toUpperCase()+r.slice(1)})}),e.jsx(s,{visible:!0,loaderType:r})]},r))})},p={render:function(){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:[e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[e.jsx("div",{style:{padding:"20px",color:"white"},children:e.jsx("h4",{children:n("story_loading_overlay_light_backdrop")})}),e.jsx(s,{visible:!0,backdropVariant:"light",loaderColor:"primary"})]}),e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"},children:[e.jsx("div",{style:{padding:"20px",color:"white"},children:e.jsx("h4",{children:n("story_loading_overlay_dark_backdrop")})}),e.jsx(s,{visible:!0,backdropVariant:"dark",loaderColor:"currentColor"})]})]})}},u={render:function(){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:["none","sm","md","lg"].map(o=>e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",backgroundImage:"url(https://picsum.photos/400/300)",backgroundSize:"cover"},children:[e.jsx("div",{style:{padding:"20px",color:"white",textShadow:"0 0 4px black"},children:e.jsxs("h4",{children:[n("story_loading_overlay_blur"),": ",o]})}),e.jsx(s,{visible:!0,blur:o})]},o))})}},_={args:{visible:!1,fixed:!0,loaderType:"spinner",loaderSize:"xl",message:"Loading application..."},render:function(n){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[a,d]=k.useState(!1),y=()=>{d(!0),setTimeout(()=>d(!1),3e3)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(T,{onClick:y,children:o("story_loading_overlay_show_fullscreen")}),e.jsx("p",{children:o("story_loading_overlay_fullscreen_desc")}),e.jsx(s,{...n,visible:a,message:o("story_loading_overlay_loading_app")})]})}},g={render:function(){const{t:n}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]),[o,a]=k.useState(!1),d=()=>{a(!0),setTimeout(()=>a(!1),2e3)};return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px",padding:"20px"},children:[e.jsx("h3",{children:n("story_loading_overlay_interactive_title")}),e.jsx("p",{children:n("story_loading_overlay_interactive_desc")}),e.jsx(T,{onClick:d,disabled:o,label:n("story_loading_overlay_load_data")}),e.jsxs("div",{style:{marginTop:"20px"},children:[e.jsx("p",{children:n("story_loading_overlay_overlaid_desc")}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."})]}),e.jsx(s,{visible:o,loaderType:"spinner",loaderSize:"lg",message:n("story_loading_overlay_fetching_data")})]})}},m={args:{visible:!0,children:e.jsxs("div",{style:{textAlign:"center",color:"white"},children:[e.jsx(j,{name:"ClockIcon",style:{width:"48px",height:"48px",marginBottom:"16px"}}),e.jsx("div",{style:{fontSize:"18px",fontWeight:"bold"},children:"Please wait..."})]})},render:function(n){const{t:o}=i(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:o("story_loading_overlay_custom_title")}),e.jsx("p",{children:o("story_loading_overlay_custom_desc")})]}),e.jsx(s,{...n,children:e.jsxs("div",{style:{textAlign:"center",color:"white"},children:[e.jsx(j,{name:"ClockIcon",style:{width:"48px",height:"48px",marginBottom:"16px"}}),e.jsx("div",{style:{fontSize:"18px",fontWeight:"bold"},children:o("story_loading_overlay_wait")})]})})]})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...u.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,..._.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
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
        <LoadingOverlay {...args}>\r
          <div style={{
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
          </div>\r
        </LoadingOverlay>\r
      </div>;
  }
}`,...m.parameters?.docs?.source}}};const I=["Basic","WithMessage","DifferentLoaderTypes","BackdropVariants","BlurEffects","FullScreen","Interactive","CustomLoader"],P=Object.freeze(Object.defineProperty({__proto__:null,BackdropVariants:p,Basic:t,BlurEffects:u,CustomLoader:m,DifferentLoaderTypes:c,FullScreen:_,Interactive:g,WithMessage:l,__namedExportsOrder:I,default:B},Symbol.toStringTag,{value:"Module"}));export{t as B,m as C,c as D,_ as F,g as I,P as L,l as W,p as a,u as b};
