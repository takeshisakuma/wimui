import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as x}from"./index-BHxLpz1N.js";import{u as d}from"./useTranslation-BGUEs77q.js";import{A as m}from"./iframe-qE21WwsJ.js";const i=({text:n,children:t,scrollAxis:r="y",maxHeight:_="10rem",style:c,className:p,...u})=>{const{t:y}=d(),h={maxHeight:_,overflowX:r==="x"||r==="both"?"auto":"hidden",overflowY:r==="y"||r==="both"?"auto":"hidden",...c};return e.jsx("div",{className:x("wim-scroll-area",p),style:h,tabIndex:0,...u,children:t||(n?y(n):null)})};i.__docgenInfo={description:"",methods:[],displayName:"ScrollArea",props:{text:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},scrollAxis:{required:!1,tsType:{name:"union",raw:'"x" | "y" | "both"',elements:[{name:"literal",value:'"x"'},{name:"literal",value:'"y"'},{name:"literal",value:'"both"'}]},description:"",defaultValue:{value:'"y"',computed:!1}},maxHeight:{required:!1,tsType:{name:"string"},description:""}}};const g={title:"Components/Utilities/ScrollArea",component:i,parameters:{layout:"centered"},argTypes:{scrollAxis:{control:"select",options:["x","y","both"]},maxHeight:{control:"text"}}},o={args:{text:"sampletextforscrollarea",scrollAxis:"y",maxHeight:"10rem"}},s={render:function(t){const{t:r}=d(m);return e.jsx(i,{...t,scrollAxis:"x",style:{width:"100%",maxWidth:"80vw"},children:e.jsxs("div",{style:{width:"150rem",background:"#3b82f6",padding:"1rem",color:"white"},children:[r("story_scrollarea_wide_content")," ",r("story_selectbox_opt4")," ",r("story_scrollarea_wide_content")," ",r("story_selectbox_opt4")," ",r("story_scrollarea_wide_content")," ",r("story_selectbox_opt4")]})})}},l={args:{scrollAxis:"y",maxHeight:"12rem"},render:function(t){const{t:r}=d(m);return e.jsx(i,{...t,children:e.jsxs("div",{style:{padding:"1rem"},children:[e.jsx("h4",{style:{margin:"0 0 1rem 0"},children:r("story_scrollarea_custom_title")}),e.jsx("p",{children:r("story_scrollarea_custom_desc")}),e.jsxs("ul",{children:[e.jsx("li",{children:r("story_scrollarea_item",{count:1})}),e.jsx("li",{children:r("story_scrollarea_item",{count:2})}),e.jsx("li",{children:r("story_scrollarea_item",{count:3})}),e.jsx("li",{children:r("story_scrollarea_item",{count:4})}),e.jsx("li",{children:r("story_scrollarea_item",{count:5})})]}),e.jsx("p",{children:r("story_scrollarea_scrolling_works")})]})})}},a={args:{scrollAxis:"both",maxHeight:"20rem",style:{width:"100%",maxWidth:"80vw"}},render:function(t){const{t:r}=d(m);return e.jsx(i,{...t,children:e.jsxs("div",{style:{width:"40rem",height:"40rem",background:"linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",padding:"1rem"},children:[e.jsx("h4",{style:{color:"#333"},children:r("story_scrollarea_both_title")}),e.jsx("p",{style:{color:"#555"},children:r("story_scrollarea_both_desc")}),e.jsx("div",{style:{marginTop:"2rem",display:"grid",gridTemplateColumns:"repeat(5, 1fr)",gap:"1rem"},children:[...Array(20)].map((_,c)=>e.jsx("div",{style:{background:"rgba(255,255,255,0.5)",padding:"1rem",borderRadius:"4px"},children:r("story_scrollarea_box",{count:c+1})},c))})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    text: "sampletextforscrollarea",
    scrollAxis: "y",
    maxHeight: "10rem"
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args} scrollAxis="x" style={{
      width: "100%",
      maxWidth: "80vw"
    }}>
        <div style={{
        width: "150rem",
        background: "#3b82f6",
        padding: "1rem",
        color: "white"
      }}>
          {t("story_scrollarea_wide_content")} {t("story_selectbox_opt4")} {t("story_scrollarea_wide_content")}{" "}
          {t("story_selectbox_opt4")} {t("story_scrollarea_wide_content")} {t("story_selectbox_opt4")}
        </div>
      </ScrollArea>;
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    scrollAxis: "y",
    maxHeight: "12rem"
  },
  render: function Render(args) {
    const {
      t
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args}>
        <div style={{
        padding: "1rem"
      }}>
          <h4 style={{
          margin: "0 0 1rem 0"
        }}>{t("story_scrollarea_custom_title")}</h4>
          <p>{t("story_scrollarea_custom_desc")}</p>
          <ul>
            <li>{t("story_scrollarea_item", {
              count: 1
            })}</li>
            <li>{t("story_scrollarea_item", {
              count: 2
            })}</li>
            <li>{t("story_scrollarea_item", {
              count: 3
            })}</li>
            <li>{t("story_scrollarea_item", {
              count: 4
            })}</li>
            <li>{t("story_scrollarea_item", {
              count: 5
            })}</li>
          </ul>
          <p>{t("story_scrollarea_scrolling_works")}</p>
        </div>
      </ScrollArea>;
  }
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
    } = useTranslation(ALL_NAMESPACES);
    return <ScrollArea {...args}>
        <div style={{
        width: "40rem",
        height: "40rem",
        background: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 99%, #FECFEF 100%)",
        padding: "1rem"
      }}>
          <h4 style={{
          color: "#333"
        }}>{t("story_scrollarea_both_title")}</h4>
          <p style={{
          color: "#555"
        }}>
            {t("story_scrollarea_both_desc")}
          </p>
          <div style={{
          marginTop: "2rem",
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "1rem"
        }}>
            {[...Array(20)].map((_, i) => <div key={i} style={{
            background: "rgba(255,255,255,0.5)",
            padding: "1rem",
            borderRadius: "4px"
          }}>
                {t("story_scrollarea_box", {
              count: i + 1
            })}
              </div>)}
          </div>
        </div>
      </ScrollArea>;
  }
}`,...a.parameters?.docs?.source}}};const b=["Default","HorizontalScroll","WithChildren","Both"],w=Object.freeze(Object.defineProperty({__proto__:null,Both:a,Default:o,HorizontalScroll:s,WithChildren:l,__namedExportsOrder:b,default:g},Symbol.toStringTag,{value:"Module"}));export{a as B,o as D,s as H,w as S,l as W};
