import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./index-BMiqMCWS.js";import{u as d}from"./useTranslation-BsF8P6HZ.js";const c=({text:s,children:o,scrollAxis:r="y",maxHeight:_="10rem",style:i,className:m,...u})=>{const{t:p}=d(),y={maxHeight:_,overflowX:r==="x"||r==="both"?"auto":"hidden",overflowY:r==="y"||r==="both"?"auto":"hidden",...i};return e.jsx("div",{className:g("wim-scroll-area",m),style:y,...u,children:o||(s?p(s):null)})};c.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},scrollAxis:{required:!1,tsType:{name:"union",raw:'"x" | "y" | "both"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"y"',computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:""}}};const h={title:"Components/Utilities/ScrollArea",component:c,parameters:{layout:"centered"},argTypes:{scrollAxis:{control:"select",options:["x","y","both"]},maxHeight:{control:"text"}}},t={args:{text:"sampletextforscrollarea",scrollAxis:"y",maxHeight:"10rem"}},n={render:function(o){const{t:r}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(c,{...o,scrollAxis:"x",style:{width:"100%",maxWidth:"80vw"},children:e.jsxs("div",{style:{width:"150rem",background:"#3b82f6",padding:"1rem",color:"white"},children:[r("story_scrollarea_wide_content")," ",r("story_selectbox_opt4")," ",r("story_scrollarea_wide_content")," ",r("story_selectbox_opt4")," ",r("story_scrollarea_wide_content")," ",r("story_selectbox_opt4")]})})}},a={args:{scrollAxis:"y",maxHeight:"12rem"},render:function(o){const{t:r}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(c,{...o,children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h4",{style:{margin:"0 0 1rem 0"},children:r("story_scrollarea_custom_title")}),e.jsx("p",{children:r("story_scrollarea_custom_desc")}),e.jsxs("ul",{children:[e.jsx("li",{children:r("story_scrollarea_item",{count:1})}),e.jsx("li",{children:r("story_scrollarea_item",{count:2})}),e.jsx("li",{children:r("story_scrollarea_item",{count:3})}),e.jsx("li",{children:r("story_scrollarea_item",{count:4})}),e.jsx("li",{children:r("story_scrollarea_item",{count:5})})]}),e.jsx("p",{children:r("story_scrollarea_scrolling_works")})]})})}},l={args:{scrollAxis:"both",maxHeight:"20rem",style:{width:"100%",maxWidth:"80vw"}},render:function(o){const{t:r}=d(["docs","docs_guides","docs_actions","docs_inputs","docs_display","docs_navigation","docs_overlay","docs_layout","docs_stories","common","components"]);return e.jsx(c,{...o,children:e.jsxs("div",{style:{width:"40rem",height:"40rem",background:"linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",padding:"1rem"},children:[e.jsx("h4",{style:{color:"#333"},children:r("story_scrollarea_both_title")}),e.jsx("p",{style:{color:"#555"},children:r("story_scrollarea_both_desc")}),e.jsx("div",{style:{marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"1rem"},children:[...Array(20)].map((_,i)=>e.jsx("div",{style:{background:"rgba(255,255,255,0.5)",padding:"1rem",borderRadius:"4px"},children:r("story_scrollarea_box",{count:i+1})},i))})]})})}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: "y",
    maxHeight: "10rem"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <ScrollArea {...args} scrollAxis="x" style={{
      width: "100%",
      maxWidth: "80vw"
    }}>\r
        <div style={{
        width: "150rem",
        background: "#3b82f6",
        padding: "1rem",
        color: "white"
      }}>\r
          {t("story_scrollarea_wide_content")} {t("story_selectbox_opt4")} {t("story_scrollarea_wide_content")}{" "}\r
          {t("story_selectbox_opt4")} {t("story_scrollarea_wide_content")} {t("story_selectbox_opt4")}\r
        </div>\r
      </ScrollArea>;
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "y",
    maxHeight: "12rem"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <ScrollArea {...args}>\r
        <div style={{
        padding: "1rem"
      }}>\r
          <h4 style={{
          margin: "0 0 1rem 0"
        }}>{t("story_scrollarea_custom_title")}</h4>\r
          <p>{t("story_scrollarea_custom_desc")}</p>\r
          <ul>\r
            <li>{t("story_scrollarea_item", {
              count: 1
            })}</li>\r
            <li>{t("story_scrollarea_item", {
              count: 2
            })}</li>\r
            <li>{t("story_scrollarea_item", {
              count: 3
            })}</li>\r
            <li>{t("story_scrollarea_item", {
              count: 4
            })}</li>\r
            <li>{t("story_scrollarea_item", {
              count: 5
            })}</li>\r
          </ul>\r
          <p>{t("story_scrollarea_scrolling_works")}</p>\r
        </div>\r
      </ScrollArea>;
  }
}`,...a.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "both",
    maxHeight: "20rem",
    style: {
      width: "100%",
      maxWidth: "80vw"
    }
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(["docs", "docs_guides", "docs_actions", "docs_inputs", "docs_display", "docs_navigation", "docs_overlay", "docs_layout", "docs_stories", "common", "components"]);
    return <ScrollArea {...args}>\r
        <div style={{
        width: "40rem",
        height: "40rem",
        background: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
        padding: "1rem"
      }}>\r
          <h4 style={{
          color: "#333"
        }}>{t("story_scrollarea_both_title")}</h4>\r
          <p style={{
          color: "#555"
        }}>\r
            {t("story_scrollarea_both_desc")}\r
          </p>\r
          <div style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem"
        }}>\r
            {[...Array(20)].map((_, i) => <div key={i} style={{
            background: "rgba(255,255,255,0.5)",
            padding: "1rem",
            borderRadius: "4px"
          }}>\r
                {t("story_scrollarea_box", {
              count: i + 1
            })}\r
              </div>)}\r
          </div>\r
        </div>\r
      </ScrollArea>;
  }
}`,...l.parameters?.docs?.source}}};const x=["Default","HorizontalScroll","WithChildren","Both"],w=Object.freeze(Object.defineProperty({__proto__:null,Both:l,Default:t,HorizontalScroll:n,WithChildren:a,__namedExportsOrder:x,default:h},Symbol.toStringTag,{value:"Module"}));export{l as B,t as D,n as H,w as S,a as W};
