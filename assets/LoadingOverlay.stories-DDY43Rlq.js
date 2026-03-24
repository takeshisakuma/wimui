import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as S}from"./index-Cg5poqOq.js";import{S as z}from"./Spinner-BLJxqxO1.js";import{L as E}from"./Loader-BT0Mx5F1.js";import{R as L,A as s}from"./iframe-Dmg4FORK.js";import{B as k}from"./Button-DV3i85Ib.js";import{I as j}from"./Icon-DOhordQ8.js";import{u as t}from"./useTranslation-CmZQbFUa.js";const i=({visible:a=!1,loaderType:r="spinner",loaderSize:n="lg",loaderColor:o="primary",backdropVariant:l="dark",blur:x="sm",message:_,fixed:C=!1,zIndex:h,children:b,className:T,style:w,...R})=>{if(!a)return null;const f=n?{sm:"small",md:"medium",lg:"large",xl:"xlarge"}[n]:void 0,A=()=>b||(r==="spinner"?e.jsx(z,{size:f,color:o}):e.jsx(E,{variant:r,size:f,color:o}));return e.jsxs("div",{className:S("wim-loading-overlay",C&&"wim-loading-overlay--fixed",T),style:{...w,...h!==void 0&&{zIndex:h}},role:"status","aria-live":"polite","aria-busy":"true",...R,children:[e.jsx("div",{className:S("wim-loading-overlay__backdrop",`wim-loading-overlay__backdrop--${l}`,`wim-loading-overlay__backdrop--blur-${x}`)}),e.jsxs("div",{className:"wim-loading-overlay__content",children:[A(),_&&e.jsx("div",{className:"wim-loading-overlay__message",children:_})]})]})};i.__docgenInfo={description:"画面全体または特定の要素をオーバーレイし、ローディング状態を表示するコンポーネント。",methods:[],displayName:"LoadingOverlay",props:{visible:{required:!1,tsType:{name:"boolean"},description:"オーバーレイの表示/非表示を制御します。",defaultValue:{value:"false",computed:!1}},loaderType:{required:!1,tsType:{name:"union",raw:'"spinner" | "bars" | "dots" | "pulse"',elements:[{name:"literal",value:'"spinner"'},{name:"literal",value:'"bars"'},{name:"literal",value:'"dots"'},{name:"literal",value:'"pulse"'}]},description:"ローディングインジケーターのタイプ。",defaultValue:{value:'"spinner"',computed:!1}},loaderSize:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg" | "xl"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'}]},description:"ローディングインジケーターのサイズ。",defaultValue:{value:'"lg"',computed:!1}},loaderColor:{required:!1,tsType:{name:"union",raw:`| "primary"
| "secondary"
| "success"
| "warning"
| "error"
| "neutral"
| "currentColor"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"error"'},{name:"literal",value:'"neutral"'},{name:"literal",value:'"currentColor"'}]},description:"ローディングインジケーターの色。",defaultValue:{value:'"primary"',computed:!1}},backdropVariant:{required:!1,tsType:{name:"union",raw:'"light" | "dark"',elements:[{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:"オーバーレイの背景スタイル。",defaultValue:{value:'"dark"',computed:!1}},blur:{required:!1,tsType:{name:"union",raw:'"none" | "sm" | "md" | "lg"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"背景のぼかし効果の強さ。",defaultValue:{value:'"sm"',computed:!1}},message:{required:!1,tsType:{name:"string"},description:"ローディングメッセージ。"},fixed:{required:!1,tsType:{name:"boolean"},description:"position: fixed を使用するかどうか（画面全体をカバー）。",defaultValue:{value:"false",computed:!1}},zIndex:{required:!1,tsType:{name:"number"},description:"z-index の値。"},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"カスタムローディングコンテンツ。"}}};const O={title:"Components/Loading States/LoadingOverlay",component:i,parameters:{layout:"padded"},argTypes:{visible:{control:"boolean"},loaderType:{control:"select",options:["spinner","bars","dots","pulse"]},loaderSize:{control:"select",options:["sm","md","lg","xl"]},loaderColor:{control:"select",options:["primary","secondary","success","warning","error","neutral","currentColor"]},backdropVariant:{control:"select",options:["light","dark"]},blur:{control:"select",options:["none","sm","md","lg"]},fixed:{control:"boolean"}}},d={args:{visible:!0,loaderType:"spinner",loaderSize:"lg",loaderColor:"primary"},render:function(r){const{t:n}=t(s);return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:n("story_loading_overlay_content_title")}),e.jsx("p",{children:n("story_loading_overlay_content_desc")})]}),e.jsx(i,{...r})]})}},p={args:{visible:!0,loaderType:"spinner",loaderSize:"lg",loaderColor:"primary",message:"Loading data..."},render:function(r){const{t:n}=t(s);return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:n("story_loading_overlay_content_title")}),e.jsx("p",{children:n("story_loading_overlay_with_msg_desc")})]}),e.jsx(i,{...r,message:n("story_loading_overlay_loading_data")})]})}},c={render:()=>e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:["spinner","bars","dots","pulse"].map(a=>e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsx("div",{style:{padding:"20px"},children:e.jsx("h4",{children:a.charAt(0).toUpperCase()+a.slice(1)})}),e.jsx(i,{visible:!0,loaderType:a})]},a))})},u={render:function(){const{t:r}=t(s);return e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:[e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},children:[e.jsx("div",{style:{padding:"20px",color:"white"},children:e.jsx("h4",{children:r("story_loading_overlay_light_backdrop")})}),e.jsx(i,{visible:!0,backdropVariant:"light",loaderColor:"primary"})]}),e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"},children:[e.jsx("div",{style:{padding:"20px",color:"white"},children:e.jsx("h4",{children:r("story_loading_overlay_dark_backdrop")})}),e.jsx(i,{visible:!0,backdropVariant:"dark",loaderColor:"currentColor"})]})]})}},g={render:function(){const{t:r}=t(s);return e.jsx("div",{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)",gap:"20px"},children:["none","sm","md","lg"].map(n=>e.jsxs("div",{style:{position:"relative",height:"300px",border:"1px solid #ddd",borderRadius:"8px",backgroundImage:"url(https://picsum.photos/400/300)",backgroundSize:"cover"},children:[e.jsx("div",{style:{padding:"20px",color:"white",textShadow:"0 0 4px black"},children:e.jsxs("h4",{children:[r("story_loading_overlay_blur"),": ",n]})}),e.jsx(i,{visible:!0,blur:n})]},n))})}},v={args:{visible:!1,fixed:!0,loaderType:"spinner",loaderSize:"xl",message:"Loading application..."},render:function(r){const{t:n}=t(s),[o,l]=L.useState(!1),x=()=>{l(!0),setTimeout(()=>l(!1),3e3)};return e.jsxs("div",{style:{padding:"20px"},children:[e.jsx(k,{onClick:x,children:n("story_loading_overlay_show_fullscreen")}),e.jsx("p",{children:n("story_loading_overlay_fullscreen_desc")}),e.jsx(i,{...r,visible:o,message:n("story_loading_overlay_loading_app")})]})}},m={render:function(){const{t:r}=t(s),[n,o]=L.useState(!1),l=()=>{o(!0),setTimeout(()=>o(!1),2e3)};return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px",padding:"20px"},children:[e.jsx(k,{onClick:l,disabled:n,label:r("story_loading_overlay_load_data")}),e.jsx("div",{style:{marginTop:"20px"},children:e.jsx("p",{children:r("story_loading_overlay_long_content")})}),e.jsx(i,{visible:n,loaderType:"spinner",loaderSize:"lg",message:r("story_loading_overlay_fetching_data")})]})}},y={args:{visible:!0,children:e.jsxs("div",{style:{textAlign:"center",color:"white"},children:[e.jsx(j,{name:"ClockIcon",style:{width:"48px",height:"48px",marginBottom:"16px"}}),e.jsx("div",{style:{fontSize:"18px",fontWeight:"bold"},children:"Please wait..."})]})},render:function(r){const{t:n}=t(s);return e.jsxs("div",{style:{position:"relative",height:"400px",border:"1px solid #ddd",borderRadius:"8px"},children:[e.jsxs("div",{style:{padding:"20px"},children:[e.jsx("h3",{children:n("story_loading_overlay_custom_title")}),e.jsx("p",{children:n("story_loading_overlay_custom_desc")})]}),e.jsx(i,{...r,children:e.jsxs("div",{style:{textAlign:"center",color:"white"},children:[e.jsx(j,{name:"ClockIcon",style:{width:"48px",height:"48px",marginBottom:"16px"}}),e.jsx("div",{style:{fontSize:"18px",fontWeight:"bold"},children:n("story_loading_overlay_wait")})]})})]})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    loaderType: "spinner",
    loaderSize: "lg",
    loaderColor: "primary"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
        <div style={{
        padding: "20px"
      }}>
          <h3>{t("story_loading_overlay_content_title")}</h3>
          <p>{t("story_loading_overlay_content_desc")}</p>
        </div>
        <LoadingOverlay {...args} />
      </div>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
        <div style={{
        padding: "20px"
      }}>
          <h3>{t("story_loading_overlay_content_title")}</h3>
          <p>{t("story_loading_overlay_with_msg_desc")}</p>
        </div>
        <LoadingOverlay {...args} message={t("story_loading_overlay_loading_data")} />
      </div>;
  }
}`,...p.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "20px"
  }}>
      {(["spinner", "bars", "dots", "pulse"] as const).map(type => <div key={type} style={{
      position: "relative",
      height: "300px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
          <div style={{
        padding: "20px"
      }}>
            <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
          </div>
          <LoadingOverlay visible={true} loaderType={type} />
        </div>)}
    </div>
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px"
    }}>
        <div style={{
        position: "relative",
        height: "300px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      }}>
          <div style={{
          padding: "20px",
          color: "white"
        }}>
            <h4>{t("story_loading_overlay_light_backdrop")}</h4>
          </div>
          <LoadingOverlay visible={true} backdropVariant="light" loaderColor="primary" />
        </div>
        <div style={{
        position: "relative",
        height: "300px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      }}>
          <div style={{
          padding: "20px",
          color: "white"
        }}>
            <h4>{t("story_loading_overlay_dark_backdrop")}</h4>
          </div>
          <LoadingOverlay visible={true} backdropVariant="dark" loaderColor="currentColor" />
        </div>
      </div>;
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "20px"
    }}>
        {(["none", "sm", "md", "lg"] as const).map(blurLevel => <div key={blurLevel} style={{
        position: "relative",
        height: "300px",
        border: "1px solid #ddd",
        borderRadius: "8px",
        backgroundImage: "url(https://picsum.photos/400/300)",
        backgroundSize: "cover"
      }}>
            <div style={{
          padding: "20px",
          color: "white",
          textShadow: "0 0 4px black"
        }}>
              <h4>
                {t("story_loading_overlay_blur")}: {blurLevel}
              </h4>
            </div>
            <LoadingOverlay visible={true} blur={blurLevel} />
          </div>)}
      </div>;
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(ALL_NAMESPACES);
    const [loading, setLoading] = React.useState(false);
    const handleClick = () => {
      setLoading(true);
      setTimeout(() => setLoading(false), 3000);
    };
    return <div style={{
      padding: "20px"
    }}>
        <Button onClick={handleClick}>
          {t("story_loading_overlay_show_fullscreen")}
        </Button>
        <p>{t("story_loading_overlay_fullscreen_desc")}</p>
        <LoadingOverlay {...args} visible={loading} message={t("story_loading_overlay_loading_app")} />
      </div>;
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
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
    }}>
        <Button onClick={handleClick} disabled={loading} label={t("story_loading_overlay_load_data")} />


        <div style={{
        marginTop: "20px"
      }}>

          <p>{t("story_loading_overlay_long_content")}</p>
        </div>
        <LoadingOverlay visible={loading} loaderType="spinner" loaderSize="lg" message={t("story_loading_overlay_fetching_data")} />
      </div>;
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    visible: true,
    children: <div style={{
      textAlign: "center",
      color: "white"
    }}>
        <Icon name="ClockIcon" style={{
        width: "48px",
        height: "48px",
        marginBottom: "16px"
      }} />
        <div style={{
        fontSize: "18px",
        fontWeight: "bold"
      }}>
          Please wait...
        </div>
      </div>
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <div style={{
      position: "relative",
      height: "400px",
      border: "1px solid #ddd",
      borderRadius: "8px"
    }}>
        <div style={{
        padding: "20px"
      }}>
          <h3>{t("story_loading_overlay_custom_title")}</h3>
          <p>{t("story_loading_overlay_custom_desc")}</p>
        </div>
        <LoadingOverlay {...args}>
          <div style={{
          textAlign: "center",
          color: "white"
        }}>
            <Icon name="ClockIcon" style={{
            width: "48px",
            height: "48px",
            marginBottom: "16px"
          }} />
            <div style={{
            fontSize: "18px",
            fontWeight: "bold"
          }}>
              {t("story_loading_overlay_wait")}
            </div>
          </div>
        </LoadingOverlay>
      </div>;
  }
}`,...y.parameters?.docs?.source}}};const N=["Basic","WithMessage","DifferentLoaderTypes","BackdropVariants","BlurEffects","FullScreen","Interactive","CustomLoader"],U=Object.freeze(Object.defineProperty({__proto__:null,BackdropVariants:u,Basic:d,BlurEffects:g,CustomLoader:y,DifferentLoaderTypes:c,FullScreen:v,Interactive:m,WithMessage:p,__namedExportsOrder:N,default:O},Symbol.toStringTag,{value:"Module"}));export{v as F,U as L,p as W};
